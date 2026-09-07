import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent & Receptionist for Clinics & Healthcare | BoldFlow Labs",
  description: "24/7 AI receptionist answering patient inquiries, booking appointments into your calendar, and sending WhatsApp reminders in regional Indian languages.",
  alternates: {
    canonical: "https://boldflowlabs.com/clinic-ai-agent",
  },
};

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
