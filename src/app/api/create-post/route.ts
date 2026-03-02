import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage, tags, authorName, authorRole, authorImage, apiKey } = body;

        // TODO: Implement a real API Key check for security
        // For now, we'll check against a placeholder or environment variable
        const VALID_API_KEY = process.env.N8N_API_KEY || "boldflow_n8n_secret_123";

        if (apiKey !== VALID_API_KEY) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!title || !slug || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Check if slug already exists to avoid duplicates
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
        }

        const postData = {
            title,
            slug,
            content,
            excerpt: excerpt || content.substring(0, 150).replace(/<[^>]*>/g, '') + "...",
            coverImage: coverImage || "https://images.unsplash.com/photo-1677442136019-21780ecad995", // Default AI image
            tags: tags || ["AI", "Automation"],
            authorName: authorName || "BoldFlow Team",
            authorRole: authorRole || "AI Automation Experts",
            authorImage: authorImage || "",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            source: "n8n_webhook"
        };

        const docRef = await addDoc(collection(db, "blogs"), postData);

        return NextResponse.json({
            success: true,
            id: docRef.id,
            message: "Post created successfully from webhook"
        });

    } catch (error: any) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
