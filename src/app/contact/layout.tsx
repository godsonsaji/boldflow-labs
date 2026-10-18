import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Discuss Your Project",
  description:
    "Get in touch with BoldFlow Labs to evaluate your business workflows, WhatsApp automation, CRM pipelines, performance marketing, or website development.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/contact",
  },
  openGraph: {
    title: "Contact Us & Discuss Your Project | BoldFlow Labs",
    description:
      "Get in touch with BoldFlow Labs to evaluate your business workflows, WhatsApp automation, CRM pipelines, performance marketing, or website development.",
    url: "https://www.boldflowlabs.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact BoldFlow Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Discuss Your Project | BoldFlow Labs",
    description:
      "Get in touch with BoldFlow Labs to evaluate your business workflows and digital systems.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
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
            name: "Contact",
            item: "https://www.boldflowlabs.com/contact",
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.boldflowlabs.com/contact/#contactpage",
        name: "Contact BoldFlow Labs",
        url: "https://www.boldflowlabs.com/contact",
        description:
          "Get in touch with BoldFlow Labs to discuss AI automation, WhatsApp workflows, business systems, performance marketing, or website development.",
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
