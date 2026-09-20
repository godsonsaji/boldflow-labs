import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BoldFlow Labs vs. MyOperator (Conversational Voice AI vs Cloud IVR)",
  description:
    "Compare BoldFlow Labs conversational AI phone assistants with MyOperator traditional cloud telephony. Discover why sub-180ms voice AI replaces robotic keypad IVRs.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "BoldFlow Labs vs MyOperator: Conversational Voice AI vs Legacy IVR",
    description:
      "Why modern Indian businesses are replacing 'Press 1 for Sales' keypad IVRs with sub-180ms natural voice AI.",
    url: "https://www.boldflowlabs.com/compare/boldflow-vs-myoperator",
  },
};

export default function CompareMyOperatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
