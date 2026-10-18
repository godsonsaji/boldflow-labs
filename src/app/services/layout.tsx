import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation, Business Systems & Digital Growth Services",
  description:
    "Explore BoldFlow Labs core services: Performance Marketing, WhatsApp Automation, Technical SEO, High-Performance Web Development, Local SEO, and CRM Systems.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/services",
  },
  openGraph: {
    title: "AI Automation, Business Systems & Digital Growth Services | BoldFlow Labs",
    description:
      "Explore BoldFlow Labs core services: Performance Marketing, WhatsApp Automation, Technical SEO, High-Performance Web Development, Local SEO, and CRM Systems.",
    url: "https://www.boldflowlabs.com/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation, Business Systems & Digital Growth Services | BoldFlow Labs",
    description:
      "Explore BoldFlow Labs core services: Performance Marketing, WhatsApp Automation, Technical SEO, High-Performance Web Development, Local SEO, and CRM Systems.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({
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
            name: "Services",
            item: "https://www.boldflowlabs.com/services",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.boldflowlabs.com/services/#collection",
        name: "BoldFlow Labs Core Services",
        url: "https://www.boldflowlabs.com/services",
        description:
          "Explore BoldFlow Labs core services: Performance Marketing, WhatsApp Automation, Technical SEO, High-Performance Web Development, Local SEO, and CRM Systems.",
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
