import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for D2C Brands & E-Commerce in India | BoldFlow Labs",
  description: "Reduce RTO by up to 35% with instant automated COD confirmation calls. AI voice bot confirms address and intent within minutes of checkout with WhatsApp integration.",
  alternates: {
    canonical: "https://boldflowlabs.com/d2c-ai-agent",
  },
  openGraph: {
    title: "AI Voice Agent for D2C Brands & E-Commerce | BoldFlow Labs",
    description: "Automate COD order confirmations, delivery address verification, and abandoned cart follow-ups with instant voice AI calls.",
    url: "https://boldflowlabs.com/d2c-ai-agent",
  },
};

export default function D2CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
