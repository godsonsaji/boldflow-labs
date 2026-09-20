import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice & Telephony Automation Blog",
  description: "Read technical guides, speed-to-lead benchmarks, and operational blueprints for deploying AI voice agents in Indian businesses.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
