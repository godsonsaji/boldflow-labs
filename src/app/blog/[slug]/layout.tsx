import type { Metadata } from "next";
import { staticBlogPosts } from "@/data/blogData";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return staticBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = staticBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | BoldFlow Labs",
    };
  }

  const url = `https://www.boldflowlabs.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | BoldFlow Labs`,
      description: post.excerpt,
      url,
      type: "article",
      images: [
        {
          url: post.coverImage || "https://www.boldflowlabs.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | BoldFlow Labs`,
      description: post.excerpt,
      images: [post.coverImage || "https://www.boldflowlabs.com/og-image.png"],
    },
  };
}

export default async function BlogPostLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const post = staticBlogPosts.find((p) => p.slug === slug);

  const jsonLd = post
    ? {
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
                item: `https://www.boldflowlabs.com/blog/${post.slug}`,
              },
            ],
          },
          {
            "@type": "BlogPosting",
            "@id": `https://www.boldflowlabs.com/blog/${post.slug}#article`,
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage || "https://www.boldflowlabs.com/og-image.png",
            datePublished: post.createdAt?.toDate ? post.createdAt.toDate().toISOString() : "2026-09-15T00:00:00Z",
            dateModified: new Date().toISOString(),
            author: {
              "@type": "Person",
              "@id": "https://www.boldflowlabs.com/#founder",
              name: post.authorName || "Godson Saji",
              jobTitle: "Founder & Systems Architect",
              url: "https://www.boldflowlabs.com/about",
              image: "https://www.boldflowlabs.com/founder.png",
              sameAs: "https://www.linkedin.com/in/godson-saji",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.boldflowlabs.com/#organization",
              name: "BoldFlow Labs",
              url: "https://www.boldflowlabs.com",
              logo: "https://www.boldflowlabs.com/logo.png",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.boldflowlabs.com/blog/${post.slug}`,
            },
          },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
