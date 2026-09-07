import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BoldFlow Labs | Multilingual Voice AI for Indian Businesses",
  description: "BoldFlow Labs builds custom 24/7 AI voice phone receptionists and automated lead response systems in regional Indian languages for real estate, D2C, and insurance firms.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
