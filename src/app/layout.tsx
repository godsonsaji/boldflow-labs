import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const BASE_URL = "https://boldflowlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BoldFlow Labs — AI Automation Agency",
    template: "%s | BoldFlow Labs",
  },
  description:
    "We build intelligent AI automation solutions that transform your business operations. From workflow automation to custom AI agents, we deliver measurable results.",
  keywords: [
    "AI automation",
    "artificial intelligence",
    "business automation",
    "AI agency",
    "workflow automation",
    "AI agents",
    "machine learning",
    "AI chatbots",
    "predictive analytics",
    "custom AI solutions",
  ],
  authors: [{ name: "BoldFlow Labs", url: BASE_URL }],
  creator: "BoldFlow Labs",
  publisher: "BoldFlow Labs",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "BoldFlow Labs",
    title: "BoldFlow Labs — AI Automation Agency",
    description:
      "We build intelligent AI automation solutions that transform your business operations. From workflow automation to custom AI agents, we deliver measurable results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldFlow Labs — AI Automation Agency",
    description:
      "We build intelligent AI automation solutions that transform your business operations.",
    creator: "@boldflowlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Site Verification */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E8407JPD5S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E8407JPD5S');
          `}
        </Script>
        <meta name="google-site-verification" content="tRe84NpU6-z8gTlKu8Ecr5YSR3FRhQknkS1f-1HTD18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BoldFlow Labs",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              description:
                "BoldFlow Labs is a specialist AI automation agency designing intelligent workflow systems that eliminate operational friction and drive measurable business growth.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "hello@boldflowlabs.com",
                availableLanguage: "English",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
