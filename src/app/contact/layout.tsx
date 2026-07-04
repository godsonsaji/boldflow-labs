import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free AI Strategy Call | BoldFlow Labs",
  description: "Get a free 30-minute system diagnostic. Learn how our instant lead response AI can call and qualify your leads in 60 seconds.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
