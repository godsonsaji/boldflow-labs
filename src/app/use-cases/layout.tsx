import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent Use Cases: Real Estate, D2C & Insurance | BoldFlow Labs",
  description: "Discover how Indian real estate developers, D2C e-commerce brands, and insurance agencies deploy AI voice agents for instant lead callbacks, COD confirmations, and renewal reminders.",
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
