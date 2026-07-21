import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent Use Cases for Home Services & Real Estate | BoldFlow Labs",
  description: "Explore how HVAC, roofing, solar, and real estate businesses deploy AI voice agents, receptionists, and smart SMS routing to capture missed calls and book appointments instantly.",
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
