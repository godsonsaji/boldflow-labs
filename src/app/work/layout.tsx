import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Demonstrations & Blueprints",
  description:
    "Explore functional system blueprints and architectural demonstrations from BoldFlow Labs: WhatsApp automation, CRM routing, high-performance websites, and local SEO systems.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/work",
  },
  openGraph: {
    title: "System Demonstrations & Blueprints | BoldFlow Labs",
    description:
      "Explore functional system blueprints and architectural demonstrations from BoldFlow Labs: WhatsApp automation, CRM routing, high-performance websites, and local SEO systems.",
    url: "https://www.boldflowlabs.com/work",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs System Blueprints",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Demonstrations & Blueprints | BoldFlow Labs",
    description:
      "Explore functional system blueprints and architectural demonstrations from BoldFlow Labs.",
    images: ["/og-image.png"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            name: "Demonstrations",
            item: "https://www.boldflowlabs.com/work",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
