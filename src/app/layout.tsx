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
    default: "AI Phone Assistants & Voice Agents for Indian Businesses | BoldFlow Labs",
    template: "%s | BoldFlow Labs",
  },
  description:
    "24/7 TRAI-compliant AI voice agents answering business calls in Hindi, Tamil, Kannada, Telugu, Marathi, Gujarati & English. Built for Indian real estate brokers, D2C brands, and insurance agencies.",
  keywords: [
    "AI voice agent for Indian real estate",
    "AI voice agent for D2C brands India",
    "COD order confirmation call automation",
    "insurance renewal reminder AI India",
    "policy renewal call automation",
    "multilingual AI receptionist India",
    "Tamil AI receptionist Chennai",
    "Kannada AI voice agent Bangalore",
    "Hindi AI voice assistant Delhi",
    "Telugu AI booking agent Hyderabad",
    "TRAI compliant AI voice agent",
    "Voice Link Vobiz voice AI integration",
    "LeadSquared Practo Zoho CRM voice AI",
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
    locale: "en_IN",
    url: BASE_URL,
    siteName: "BoldFlow Labs",
    title: "AI Phone Assistants & Voice Agents for Indian Businesses | BoldFlow Labs",
    description:
      "24/7 TRAI-compliant AI phone receptionists in Hindi, Tamil, Kannada, Telugu & English for Indian real estate brokers, D2C brands, and insurance agencies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs — AI Voice Agents for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldFlow Labs — AI Phone Assistants for Indian Businesses",
    description:
      "Multilingual 24/7 AI voice agents for Indian real estate brokers, D2C brands, and insurance agencies.",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "BoldFlow Labs",
                  url: BASE_URL,
                  logo: `${BASE_URL}/logo.png`,
                  description:
                    "BoldFlow Labs deploys multilingual 24/7 AI voice phone receptionists and automated lead qualification systems for Indian real estate brokers, D2C e-commerce brands, and insurance agencies.",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Kerala",
                    addressCountry: "IN"
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    email: "hello@boldflowlabs.com",
                    telephone: "+919447178166",
                    availableLanguage: ["English", "Hindi", "Tamil", "Kannada", "Telugu", "Marathi", "Bengali", "Gujarati"],
                  },
                  sameAs: [
                    "https://linkedin.com/company/boldflowlabs",
                    "https://x.com/boldflowlabs",
                    "https://facebook.com/boldflowlabs",
                    "https://instagram.com/boldflowlabs"
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "BoldFlow Labs",
                  publisher: {
                    "@id": `${BASE_URL}/#organization`
                  },
                  inLanguage: "en-IN"
                }
              ]
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
