import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Production Deployments",
  description: "Explore real-world results from BoldFlow Labs' AI voice agents across Indian real estate brokerages, high-growth D2C brands, and insurance agencies.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
