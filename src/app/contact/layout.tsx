import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free AI Voice Strategy Call",
  description: "Get a free 30-minute system diagnostic. Learn how our instant lead response AI can call and qualify your leads in 60 seconds.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
