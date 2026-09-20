import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for Coaching Institutes & Education",
  description: "Automate student admission inquiry calls, demo class scheduling, and fee deadline follow-ups with 24/7 multilingual voice AI.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/coaching-institute-ai-agent",
  },
};

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
