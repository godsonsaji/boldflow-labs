import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // /admin routes intentionally omitted from Disallow so search crawlers can
                // fetch the pages, read the <meta name="robots" content="noindex, nofollow"> directive,
                // and permanently exclude /admin from the search index. Disallowing in robots.txt
                // would block crawlers from seeing the noindex tag, risking URL-only indexation.
                disallow: ["/api/"],
            },
            {
                userAgent: [
                    "GPTBot",
                    "ClaudeBot",
                    "PerplexityBot",
                    "Google-Extended",
                    "Applebot-Extended",
                    "OAI-SearchBot",
                    "CCBot",
                ],
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: "https://www.boldflowlabs.com/sitemap.xml",
    };
}
