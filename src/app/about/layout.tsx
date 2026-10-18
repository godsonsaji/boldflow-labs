import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BoldFlow Labs, our approach to AI automation, CRM pipelines, and business systems, founded by Godson Saji.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/about",
  },
  openGraph: {
    title: "About Us | BoldFlow Labs",
    description:
      "Learn about BoldFlow Labs, our approach to AI automation, CRM pipelines, and business systems, founded by Godson Saji.",
    url: "https://www.boldflowlabs.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About BoldFlow Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | BoldFlow Labs",
    description:
      "Learn about BoldFlow Labs, our approach to AI automation, CRM pipelines, and business systems.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
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
            name: "About",
            item: "https://www.boldflowlabs.com/about",
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
