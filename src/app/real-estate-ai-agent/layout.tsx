import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for Real Estate Brokers & Developers in India",
  description: "Capture and qualify property buyer leads in under 60 seconds. Our multilingual AI voice agent answers inquiries 24/7 in Hindi, Tamil, Telugu, Kannada & English, syncs with your CRM, and books site visits.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/real-estate-ai-agent",
  },
  openGraph: {
    title: "AI Voice Agent for Real Estate Brokers & Developers",
    description: "Capture and qualify property buyer inquiries in under 60 seconds with 24/7 AI call answering and automated site visit scheduling.",
    url: "https://www.boldflowlabs.com/real-estate-ai-agent",
  },
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
