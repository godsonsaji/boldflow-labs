import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI Automation, Business Systems & Digital Growth Services",
    template: "%s | BoldFlow Labs",
  },
  description:
    "Explore BoldFlow Labs core systems: WhatsApp Automation, CRM Pipelines, Performance Marketing, Technical SEO, and Web Development. Book your strategy consultation.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/services",
  },
  openGraph: {
    title: "AI Automation, Business Systems & Digital Growth Services | BoldFlow Labs",
    description:
      "Explore BoldFlow Labs core systems: WhatsApp Automation, CRM Pipelines, Performance Marketing, Technical SEO, and Web Development. Book your strategy consultation.",
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
      "Explore BoldFlow Labs core systems: WhatsApp Automation, CRM Pipelines, Performance Marketing, Technical SEO, and Web Development. Book your strategy consultation.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
