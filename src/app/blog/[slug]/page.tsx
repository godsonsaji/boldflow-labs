import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cache } from "react";
import { format } from "date-fns";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import { staticBlogPosts, BlogPost } from "@/data/blogData";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/firebase/config";
import { sanitizeBlogHtml } from "@/lib/sanitize";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

/**
 * Validates that a slug is non-empty, safe, and conforms to standard URL format.
 * Prevents inclusion of admin/api paths, malformed strings, or traversal sequences.
 */
function isValidSlug(slug: unknown): slug is string {
  if (typeof slug !== "string") return false;
  const trimmed = slug.trim().toLowerCase();
  if (!trimmed) return false;
  if (trimmed.startsWith("/") || trimmed.startsWith("admin") || trimmed.startsWith("api")) {
    return false;
  }
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed);
}

/**
 * Normalizes Firestore Timestamps, JS Dates, and ISO strings safely into a valid Date object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseDate(dateVal: any, fallback: Date = new Date()): Date {
  if (!dateVal) return fallback;
  if (typeof dateVal.toDate === "function") {
    try {
      const d = dateVal.toDate();
      if (d instanceof Date && !isNaN(d.getTime())) return d;
    } catch {
      // Fall through on error
    }
  }
  if (dateVal instanceof Date && !isNaN(dateVal.getTime())) return dateVal;
  const parsed = new Date(dateVal);
  return isNaN(parsed.getTime()) ? fallback : parsed;
}

/**
 * Memoized post getter to avoid duplicate Firestore round-trips during a single request.
 */
const getPost = cache(async (slug: string): Promise<BlogPost | null> => {
  if (!isValidSlug(slug)) return null;

  // 1. Check static published articles first
  const staticMatch = staticBlogPosts.find((p) => p.slug === slug);
  if (staticMatch) {
    if (staticMatch.status === "published") {
      return staticMatch;
    }
    return null;
  }

  // 2. Query Firestore for published post
  try {
    const q = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      where("status", "==", "published"),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data();

      if (data.status !== "published") {
        return null;
      }

      const rawSlug = typeof data.slug === "string" ? data.slug.trim().toLowerCase() : "";
      if (!isValidSlug(rawSlug)) {
        return null;
      }

      const createdDate = parseDate(data.createdAt);
      const updatedDate = data.updatedAt ? parseDate(data.updatedAt, createdDate) : createdDate;

      return {
        id: docSnap.id,
        title: typeof data.title === "string" ? data.title.trim() : "Untitled",
        slug: rawSlug,
        excerpt: typeof data.excerpt === "string" ? data.excerpt.trim() : "",
        content: typeof data.content === "string" ? sanitizeBlogHtml(data.content) : "",
        coverImage: typeof data.coverImage === "string" && data.coverImage ? data.coverImage : "/og-image.png",
        createdAt: { toDate: () => createdDate },
        updatedAt: { toDate: () => updatedDate },
        readTime: typeof data.readTime === "string" ? data.readTime : "5 min read",
        authorName: typeof data.authorName === "string" ? data.authorName : "BoldFlow Engineering",
        authorRole: typeof data.authorRole === "string" ? data.authorRole : "Systems Engineering",
        authorImage: typeof data.authorImage === "string" && data.authorImage ? data.authorImage : "/brand/icon/png/app-icon-brand-blue-512.png",
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: "published",
      };
    }
  } catch (error) {
    // Gracefully catch database/network error without exposing secrets
    console.error(
      "Failed to fetch blog post from Firestore:",
      error instanceof Error ? error.message : "Network/Permission error"
    );
  }

  return null;
});

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  const seenSlugs = new Set<string>();

  // Add static published posts
  for (const post of staticBlogPosts) {
    if (post.status === "published" && isValidSlug(post.slug)) {
      seenSlugs.add(post.slug);
      params.push({ slug: post.slug });
    }
  }

  // Pre-render published Firestore posts if available at build time
  try {
    const q = query(collection(db, "blogs"), where("status", "==", "published"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const slug = typeof data.slug === "string" ? data.slug.trim().toLowerCase() : "";
      if (isValidSlug(slug) && !seenSlugs.has(slug)) {
        seenSlugs.add(slug);
        params.push({ slug });
      }
    });
  } catch {
    // Fall back safely to static articles if Firestore is offline during build
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const url = `https://www.boldflowlabs.com/blog/${post.slug}`;
  const fullTitle = `${post.title} | BoldFlow Labs`;
  const postDescription = post.excerpt || `${post.title}. Read the complete guide from BoldFlow Labs.`;
  const publishedDate = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();
  const modifiedDate = post.updatedAt?.toDate ? post.updatedAt.toDate() : publishedDate;

  return {
    title: {
      absolute: fullTitle,
    },
    description: postDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: postDescription,
      url,
      type: "article",
      publishedTime: publishedDate.toISOString(),
      modifiedTime: modifiedDate.toISOString(),
      authors: ["https://www.boldflowlabs.com/about"],
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: postDescription,
      images: [post.coverImage || "/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();
  const modifiedDate = post.updatedAt?.toDate ? post.updatedAt.toDate() : date;
  const pageUrl = `https://www.boldflowlabs.com/blog/${post.slug}`;
  const cleanReadTime = post.readTime?.replace("_READ", " min read").replace("M_READ", " min read") || "7 min read";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.boldflowlabs.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.boldflowlabs.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}/#article`,
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.boldflowlabs.com/blog/#blog",
          name: "BoldFlow Labs Engineering & Digital Growth Blog",
        },
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage || "https://www.boldflowlabs.com/og-image.png",
        datePublished: date.toISOString(),
        dateModified: modifiedDate.toISOString(),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        author: {
          "@type": "Organization",
          "@id": "https://www.boldflowlabs.com/#organization",
          name: "BoldFlow Labs Engineering Group",
          url: "https://www.boldflowlabs.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "BoldFlow Labs",
          url: "https://www.boldflowlabs.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.boldflowlabs.com/logo.png",
          },
        },
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 bg-[#F8FAFC] min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[840px] mx-auto">
        {/* Breadcrumb Back Link */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-mono text-slate-500 hover:text-[#2563FF] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span>← Back to All Articles &amp; Guides</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
            <span>{post.tags?.[0] || "ENGINEERING GUIDE"} · TECHNICAL BLUEPRINT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-xs text-slate-500 border-y border-slate-200 py-4 font-mono">
            {/* Author */}
            <div className="flex items-center gap-3 pr-6 border-r border-slate-200">
              <div className="w-8 h-8 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-xs font-bold font-mono text-[#2563FF] shrink-0">
                BF
              </div>
              <div>
                <Link
                  href="/about"
                  className="text-slate-900 hover:text-[#2563FF] transition-colors font-semibold block"
                >
                  {post.authorName || "BoldFlow Engineering"}
                </Link>
                <span className="text-[11px] text-slate-500 block">Systems Architecture &amp; Research</span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={date.toISOString()}>{format(date, "MMMM dd, yyyy")}</time>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-1.5 text-slate-500 border-l border-slate-200 pl-6">
              <Clock className="w-3.5 h-3.5" />
              <span>{cleanReadTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-12 bg-slate-100">
          <img
            src={post.coverImage || "/og-image.png"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* HTML Content Body */}
        <div
          className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-blockquote:border-[#2563FF] prose-blockquote:bg-blue-50/70 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-800 prose-a:text-[#2563FF] hover:prose-a:text-[#1D4ED8]"
          dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.content) }}
        />

        {/* Engineering Research & Standards Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center text-[#2563FF] font-mono font-bold text-xl shrink-0">
            BF
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900">BoldFlow Labs Technical Research &amp; Architecture Group</h3>
                <span className="text-xs font-mono text-[#2563FF]">Systems Engineering · Cloud Automation · Digital Growth</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering team specializes in architecting event-driven Meta WhatsApp Cloud API workflows, high-performance Next.js Jamstack applications, and closed-loop CRM pipelines. Every guide is benchmarked against real-world production deployments.
            </p>
            <div className="pt-2">
              <Link href="/services" className="text-xs text-[#2563FF] hover:underline font-mono font-semibold">
                Learn more about our agency &amp; delivery model →
              </Link>
            </div>
          </div>
        </div>

        {/* Service Internal Linking CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 shadow-md text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Ready to Implement These Systems in Your Business?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
            BoldFlow Labs designs and deploys official WhatsApp automations, CRM pipelines, and high-performance websites for growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2563FF] hover:bg-[#1D4ED8] transition-colors w-full sm:w-auto shadow-sm"
            >
              Schedule Strategy Call
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 transition-colors w-full sm:w-auto shadow-xs"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
