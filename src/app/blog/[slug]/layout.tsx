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
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | BoldFlow Labs`,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
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
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.createdAt?.toDate ? post.createdAt.toDate().toISOString() : undefined,
            author: {
              "@type": "Person",
              name: post.authorName || "Godson Saji",
              url: "https://www.linkedin.com/in/godson-saji",
            },
            publisher: {
              "@type": "Organization",
              name: "BoldFlow Labs",
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
