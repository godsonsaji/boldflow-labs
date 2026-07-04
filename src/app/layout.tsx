import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/context/AuthContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const BASE_URL = "https://boldflowlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Instant Lead Response & AI Voice Agents | BoldFlow Labs",
    template: "%s | BoldFlow Labs",
  },
  description:
    "We deploy AI voice agents and messaging receptionists for service businesses (HVAC, roofing, real estate) that answer inbound leads and book appointments in under 60 seconds, 24/7.",
  keywords: [
    "AI voice agent for HVAC contractors",
    "instant lead response for real estate",
    "AI receptionist for service businesses",
    "AI voice receptionist",
    "missed call text back",
    "lead response automation",
    "AI chatbot for roofing",
    "appointment booking AI",
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
    title: "Instant Lead Response & AI Voice Agents | BoldFlow Labs",
    description:
      "We deploy AI voice agents and messaging receptionists for service businesses (HVAC, roofing, real estate) that answer inbound leads and book appointments in under 60 seconds, 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs — Instant Lead Response",
      },
    ],
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
        {/* Google Tag Manager - Next.js implementation */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ND5P6CX4');
          `}
        </Script>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="tRe84NpU6-z8gTlKu8Ecr5YSR3FRhQknkS1f-1HTD18" />
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
              sameAs: [
                "https://linkedin.com/company/boldflowlabs",
                "https://x.com/boldflowlabs",
                "https://facebook.com/boldflowlabs",
                "https://instagram.com/boldflowlabs"
              ],
            }),
          }}
        />
      </head>
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased text-white bg-[#030303]`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND5P6CX4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <AuthProvider>
          <Navbar />
          <ScrollToTop />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
