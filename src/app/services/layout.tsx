import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents & Lead Automation Services | BoldFlow Labs",
  description: "From AI voice receptionists to automated CRM systems, we build custom solutions for HVAC, roofing, real estate, and pool builders.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
