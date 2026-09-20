import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BoldFlow AI vs Traditional Call Centers in India (Cost & ROI)",
  description:
    "Compare the total cost of ownership, attrition rates, and speed-to-lead of BoldFlow 24/7 multilingual AI voice agents versus traditional human telecalling agencies in India.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "BoldFlow AI vs Traditional Call Centers: Cost & Attrition Breakdown",
    description:
      "Detailed financial and operational comparison: Human telecaller teams vs. sub-180ms conversational AI voice agents.",
    url: "https://www.boldflowlabs.com/compare/boldflow-vs-traditional-call-centers",
  },
};

export default function CompareCallCentersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
