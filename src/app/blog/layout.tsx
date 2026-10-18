import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Digital Growth Blog",
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
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
