import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for Insurance Agencies & Brokers in India | BoldFlow Labs",
  description: "Automate policy renewal reminders, EMI due follow-ups, and customer claim intake 24/7 with human-like AI voice agents in regional Indian languages.",
  alternates: {
    canonical: "https://boldflowlabs.com/insurance-ai-agent",
  },
  openGraph: {
    title: "AI Voice Agent for Insurance Agencies & Brokers | BoldFlow Labs",
    description: "Automate policy renewal calls, premium reminders, and claims pre-qualification with 24/7 multilingual voice AI.",
    url: "https://boldflowlabs.com/insurance-ai-agent",
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
