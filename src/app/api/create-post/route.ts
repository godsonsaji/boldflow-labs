import { NextResponse } from "next/server";
import crypto from "crypto";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { sanitizeBlogHtml } from "@/lib/sanitize";

/**
 * Constant-time string comparison to defend against timing attacks.
 * Correctly handles buffers of unequal length by performing a dummy comparison.
 */
function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Validates kebab-case slug format and disallows reserved administrative routes.
 */
function isValidPostSlug(slug: unknown): slug is string {
  if (typeof slug !== "string") return false;
  const trimmed = slug.trim().toLowerCase();
  if (trimmed.length < 3 || trimmed.length > 100) return false;
  const reserved = ["admin", "api", "login", "services", "work", "about", "contact", "privacy", "terms"];
  if (reserved.includes(trimmed)) return false;
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed);
}

export async function POST(request: Request) {
  try {
    // 1. FAIL CLOSED: Validate server environment configuration
    const serverApiKey = process.env.N8N_API_KEY?.trim();
    if (!serverApiKey) {
      console.error("[SECURITY] /api/create-post rejected: N8N_API_KEY environment variable is missing or empty.");
      return NextResponse.json(
        { error: "Server authentication configuration error." },
        { status: 503 }
      );
    }

    // 2. Extract client credentials from headers or JSON body
    const authHeader = request.headers.get("authorization");
    const xApiKeyHeader = request.headers.get("x-api-key");
    let providedApiKey = "";

    if (authHeader && authHeader.startsWith("Bearer ")) {
      providedApiKey = authHeader.substring(7).trim();
    } else if (xApiKeyHeader) {
      providedApiKey = xApiKeyHeader.trim();
    }

    // Parse JSON body with strict size checks
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let body: any = {};
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    // Fall back to body.apiKey for backward compatibility with existing n8n webhooks
    if (!providedApiKey && typeof body?.apiKey === "string") {
      providedApiKey = body.apiKey.trim();
    }

    // 3. Constant-time authentication validation
    if (!providedApiKey || !timingSafeEqual(providedApiKey, serverApiKey)) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: 401 }
      );
    }

    // 4. Input validation: Required fields
    const { title, slug, content, excerpt, coverImage, tags, authorName, authorRole, authorImage } = body;

    if (!title || typeof title !== "string" || title.trim().length < 3 || title.trim().length > 200) {
      return NextResponse.json(
        { error: "Invalid title: Must be a string between 3 and 200 characters." },
        { status: 400 }
      );
    }

    if (!isValidPostSlug(slug)) {
      return NextResponse.json(
        { error: "Invalid slug: Must be lowercase kebab-case (3-100 characters) and not a reserved route." },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "string" || content.trim().length < 10) {
      return NextResponse.json(
        { error: "Invalid content: Must be a string of at least 10 characters." },
        { status: 400 }
      );
    }

    if (content.length > 500000) {
      return NextResponse.json(
        { error: "Payload too large: Content exceeds maximum length of 500,000 characters." },
        { status: 413 }
      );
    }

    // 5. Stored XSS Prevention: Sanitize HTML content before saving
    const cleanContent = sanitizeBlogHtml(content);
    if (!cleanContent || cleanContent.trim().length < 5) {
      return NextResponse.json(
        { error: "Invalid content: Content contains no permitted HTML elements or text." },
        { status: 400 }
      );
    }

    // Sanitize title (plain text only)
    const cleanTitle = title.replace(/<[^>]*>/g, "").trim();

    // Sanitize excerpt
    let cleanExcerpt = "";
    if (typeof excerpt === "string" && excerpt.trim()) {
      cleanExcerpt = excerpt.replace(/<[^>]*>/g, "").trim().slice(0, 500);
    } else {
      // Derive clean excerpt from stripped content
      cleanExcerpt = cleanContent.replace(/<[^>]*>/g, "").trim().slice(0, 160) + "...";
    }

    // Validate cover image URL if provided
    let cleanCoverImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995";
    if (typeof coverImage === "string" && coverImage.trim()) {
      const trimmedUrl = coverImage.trim();
      if (/^https?:\/\//i.test(trimmedUrl) || trimmedUrl.startsWith("/")) {
        cleanCoverImage = trimmedUrl.slice(0, 500);
      }
    }

    // Validate tags
    let cleanTags: string[] = ["AI", "Automation"];
    if (Array.isArray(tags)) {
      cleanTags = tags
        .filter((t): t is string => typeof t === "string" && t.trim().length > 0)
        .map((t) => t.trim().slice(0, 50))
        .slice(0, 10);
    }

    const cleanAuthorName = typeof authorName === "string" && authorName.trim()
      ? authorName.trim().slice(0, 100)
      : "BoldFlow Team";

    const cleanAuthorRole = typeof authorRole === "string" && authorRole.trim()
      ? authorRole.trim().slice(0, 100)
      : "AI Automation Experts";

    const cleanAuthorImage = typeof authorImage === "string" && (authorImage.startsWith("/") || /^https?:\/\//i.test(authorImage))
      ? authorImage.trim().slice(0, 500)
      : "";

    // 6. Check for duplicate slug in Firestore
    const cleanSlug = slug.trim().toLowerCase();
    const q = query(collection(db, "blogs"), where("slug", "==", cleanSlug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: "Slug already exists." },
        { status: 409 }
      );
    }

    // 7. Store post with sanitized data
    const postData = {
      title: cleanTitle,
      slug: cleanSlug,
      content: cleanContent,
      excerpt: cleanExcerpt,
      coverImage: cleanCoverImage,
      tags: cleanTags,
      authorName: cleanAuthorName,
      authorRole: cleanAuthorRole,
      authorImage: cleanAuthorImage,
      status: "published",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      source: "n8n_webhook",
    };

    const docRef = await addDoc(collection(db, "blogs"), postData);

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: "Post created successfully.",
    });
  } catch (error) {
    // 8. Generic error response: Never leak stack traces, driver errors, or credentials
    console.error("[ERROR] /api/create-post processing failure:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "An unexpected error occurred while processing the request." },
      { status: 500 }
    );
  }
}
