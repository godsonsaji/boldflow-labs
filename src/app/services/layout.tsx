import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents & Inbound/Outbound Call Automation Services | BoldFlow Labs",
  description: "Deploy 24/7 TRAI-compliant multilingual AI voice receptionists, automated outbound callbacks, and CRM integrations for Real Estate, D2C brands, and Insurance agencies in India.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
