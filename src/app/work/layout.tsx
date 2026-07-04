import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Founding Roster | BoldFlow Labs",
  description: "See how we help service-based SMBs eliminate manual work and secure bookings instantly. Read about our Founding Client Program.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
