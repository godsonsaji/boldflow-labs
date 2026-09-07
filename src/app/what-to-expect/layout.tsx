import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect: 4-Step Deployment Process | BoldFlow Labs",
  description: "Learn how we build, test on Indian telephony lines, and deploy your custom AI voice agent in 5 to 10 days with complete CRM and WhatsApp integration.",
};

export default function WhatToExpectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
