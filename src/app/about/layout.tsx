import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BoldFlow Labs | Instant Lead Response Systems",
  description: "Founded to solve the 60-second lead response bottleneck. We build custom AI voice receptionists, text callbacks, and CRM syncs for HVAC, roofing, and real estate.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
