import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://www.boldflowlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BoldFlow Labs | AI Automation, Business Systems & Digital Growth",
    template: "%s | BoldFlow Labs",
  },
  description:
    "BoldFlow Labs builds modern business systems, official WhatsApp automations, CRM pipelines, performance marketing, and high-performance websites for sustainable growth.",
  keywords: [
    "AI automation agency",
    "WhatsApp automation for business",
    "business systems and CRM",
    "performance marketing Google Ads Meta Ads",
    "technical SEO services",
    "high-performance website development",
    "Google Business Profile optimization",
    "lead workflow automation",
    "BoldFlow Labs",
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
    title: "BoldFlow Labs | AI Automation, Business Systems & Digital Growth",
    description:
      "We help businesses streamline operations, automate lead follow-ups, improve their digital presence, and build practical systems for sustainable growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs — AI Automation & Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldFlow Labs | AI Automation, Business Systems & Digital Growth",
    description:
      "We help businesses streamline operations, automate lead follow-ups, and build practical systems for sustainable growth.",
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
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Google Tag Manager */}
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
        {/* Organization & Core Services JSON-LD Schema */}
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
                    "BoldFlow Labs is a digital growth and business systems agency helping companies streamline operations, automate WhatsApp follow-ups, and scale acquisition.",
                  founder: {
                    "@type": "Person",
                    "@id": `${BASE_URL}/#founder`,
                    name: "Godson Saji",
                    jobTitle: "Founder & Systems Architect",
                    sameAs: "https://www.linkedin.com/in/godson-saji",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Kerala",
                    addressCountry: "IN",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    email: "hello@boldflowlabs.com",
                    telephone: "+919447178166",
                  },
                  sameAs: [
                    "https://linkedin.com/company/boldflowlabs",
                    "https://x.com/boldflowlabs",
                    "https://facebook.com/boldflowlabs",
                    "https://instagram.com/boldflowlabs",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Growth & Business Systems Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "WhatsApp Automation",
                          url: `${BASE_URL}/services/whatsapp-automation`,
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Business Automation & CRM",
                          url: `${BASE_URL}/services/business-automation-crm`,
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Performance Marketing",
                          url: `${BASE_URL}/services/performance-marketing`,
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SEO Services",
                          url: `${BASE_URL}/services/seo-services`,
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Website Development",
                          url: `${BASE_URL}/services/website-development`,
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Google Business Profile & Local SEO",
                          url: `${BASE_URL}/services/local-seo`,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "BoldFlow Labs",
                  publisher: {
                    "@id": `${BASE_URL}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#2563FF] selection:text-white bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND5P6CX4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AuthProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}
