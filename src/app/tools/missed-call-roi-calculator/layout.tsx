import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian SMB Missed Call Revenue Loss Calculator",
  description:
    "Calculate how much revenue your business loses each month to unanswered phone calls, after-hours portal inquiries, and missed customer leads in India.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Missed Call Revenue Loss Calculator | BoldFlow Labs",
    description:
      "Interactive ROI calculator for Indian real estate, D2C, and healthcare businesses to quantify lost phone revenue.",
    url: "https://www.boldflowlabs.com/tools/missed-call-roi-calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
