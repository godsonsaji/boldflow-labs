import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process: From Lead to Booked Appointment | BoldFlow Labs",
  description: "Learn how we build, deploy, and maintain custom AI voice agents and WhatsApp receptionists for service businesses.",
};

export default function WhatToExpectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
