import type { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { staticBlogPosts } from "@/data/blogData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const BASE_URL = "https://www.boldflowlabs.com";

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
function parseDate(dateVal: any, fallback: Date): Date {
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 6 Dedicated service pages
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Canonical published blog articles (static + Firestore dynamic, deduplicated)
  const seenSlugs = new Set<string>();
  const blogRoutes: MetadataRoute.Sitemap = [];

  // 1. Add static published blog articles first
  for (const post of staticBlogPosts) {
    if (post.status === "published" && isValidSlug(post.slug)) {
      seenSlugs.add(post.slug);
      blogRoutes.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: parseDate(post.createdAt, currentDate),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // 2. Fetch eligible published Firestore blog posts (excluding drafts, unpublished, and duplicates)
  try {
    const q = query(collection(db, "blogs"), where("status", "==", "published"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const rawSlug = typeof data.slug === "string" ? data.slug.trim().toLowerCase() : "";

      if (isValidSlug(rawSlug) && !seenSlugs.has(rawSlug) && data.status === "published") {
        seenSlugs.add(rawSlug);
        const lastMod = parseDate(data.updatedAt, parseDate(data.createdAt, currentDate));
        blogRoutes.push({
          url: `${BASE_URL}/blog/${rawSlug}`,
          lastModified: lastMod,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    });
  } catch (error) {
    // Fail safely without throwing unhandled exceptions or exposing database credentials
    console.error(
      "Warning: Could not fetch dynamic blog posts from Firestore for sitemap:",
      error instanceof Error ? error.message : "Network/Permission error"
    );
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
