import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/api/"],
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
                disallow: ["/admin/", "/api/"],
            },
        ],
        sitemap: "https://www.boldflowlabs.com/sitemap.xml",
    };
}
