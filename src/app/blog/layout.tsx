import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI Automation & Digital Growth Blog",
    template: "%s | BoldFlow Labs",
  },
  description:
    "Read technical guides, speed-to-lead benchmarks, WhatsApp workflows, and operational blueprints for modern business automation.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/blog",
  },
  openGraph: {
    title: "AI Automation & Digital Growth Blog | BoldFlow Labs",
    description:
      "Read technical guides, speed-to-lead benchmarks, WhatsApp workflows, and operational blueprints for modern business automation.",
    url: "https://www.boldflowlabs.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs Engineering & Systems Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Digital Growth Blog | BoldFlow Labs",
    description:
      "Read technical guides, speed-to-lead benchmarks, WhatsApp workflows, and operational blueprints for modern business automation.",
    images: ["/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
