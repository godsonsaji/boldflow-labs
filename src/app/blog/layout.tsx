import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Blog for Service Businesses | BoldFlow Labs",
  description: "Read the latest guides, insights, and strategies on using AI voice agents, chatbots, and CRM automation to scale your service business.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
