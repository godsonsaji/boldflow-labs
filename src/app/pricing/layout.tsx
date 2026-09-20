import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictable AI Voice Agent Pricing & Retainers",
  description: "Explore transparent monthly pricing tiers for AI Voice Agents starting at ₹9,999/month. Tailored for Real Estate, D2C & Ecommerce, and Insurance companies in India.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
