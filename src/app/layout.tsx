import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "BoldFlow Labs — AI Automation Agency",
  description:
    "We build intelligent AI automation solutions that transform your business operations. From workflow automation to custom AI agents, we deliver measurable results.",
  keywords: [
    "AI automation",
    "artificial intelligence",
    "business automation",
    "AI agency",
    "workflow automation",
    "AI agents",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
