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

const BASE_URL = "https://www.boldflowlabs.com";

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
    canonical: "./",
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
                  founder: {
                    "@type": "Person",
                    "@id": `${BASE_URL}/#founder`,
                    name: "Godson Saji",
                    jobTitle: "Founder & AI Systems Architect",
                    sameAs: "https://www.linkedin.com/in/godson-saji"
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
                },
                {
                  "@type": "Service",
                  "@id": `${BASE_URL}/#service`,
                  name: "Multilingual AI Voice Telephony & Lead Receptionist Automation",
                  serviceType: "AI Voice Telephony & Receptionist Systems",
                  provider: {
                    "@id": `${BASE_URL}/#organization`
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "India"
                  },
                  description:
                    "24/7 TRAI-compliant multilingual AI voice agents answering business calls in Hindi, Tamil, Kannada, Telugu, Marathi, Gujarati, Bengali, and English with sub-200ms latency, CRM integrations (LeadSquared, Zoho), and automated WhatsApp messaging.",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "AI Voice Telephony Retainers",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        name: "Starter Plan",
                        description: "1,000 minutes included, 1 regional Indian language or English, inbound call reception, LeadSquared/Zoho CRM sync",
                        price: "9999",
                        priceCurrency: "INR",
                        priceSpecification: {
                          "@type": "UnitPriceSpecification",
                          price: "9999",
                          priceCurrency: "INR",
                          unitText: "MONTH"
                        }
                      },
                      {
                        "@type": "Offer",
                        name: "Growth Plan",
                        description: "3,000 minutes included, English + 1 regional language, inbound reception + outbound callbacks, instant WhatsApp confirmation",
                        price: "19999",
                        priceCurrency: "INR",
                        priceSpecification: {
                          "@type": "UnitPriceSpecification",
                          price: "19999",
                          priceCurrency: "INR",
                          unitText: "MONTH"
                        }
                      },
                      {
                        "@type": "Offer",
                        name: "Enterprise Plan",
                        description: "Custom scalable minutes, all Indian regional languages, dedicated SIP trunking, custom ERP/CRM integration, priority SLA",
                        priceSpecification: {
                          "@type": "PriceSpecification",
                          priceCurrency: "INR"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${BASE_URL}/#faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Will our automated calls get flagged as spam or telemarketing on Truecaller?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. We configure verified corporate caller IDs registered under your company entity on Truecaller, integrated with TRAI DLT-approved transactional headers. Because our voice agents only execute warm callbacks to high-intent portal inquiries, post-checkout order verifications, or existing client service reminders, your spam score remains 0%."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Do we need to buy expensive PBX hardware or change our existing phone numbers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Zero hardware required. You keep your existing mobile numbers, landlines, or office SIM cards (Airtel, Jio, Vi, BSNL). You simply enable standard conditional call forwarding (*61* or *67*) on busy or unanswered calls (after 15 seconds) to our virtual DID. Your customers continue calling your normal advertised phone number, and BoldFlow seamlessly catches the calls you would have otherwise missed."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How does code-mixing (Hinglish, Tanglish, Kanglish) work when callers switch languages?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Indian consumers naturally switch languages mid-call (e.g., starting in English and transitioning into Hindi or Kannada). Our conversational engine utilizes continuous real-time language detection. It identifies code-switched vocabulary ('Site visit Saturday 11 AM book kar dein?') and dialect nuances without conversational lag or asking the user to press phone keypad buttons."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Are automated outbound calls compliant with TRAI and DND regulations in India?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, 100% TRAI & TCCCPR compliant. For outbound callback campaigns (such as D2C COD order verification or portal inquiry callbacks), our telephony gateway automatically scrubs numbers against the National Do Not Call (NDNC/DND) registry in real-time. Calls operate exclusively during permissible TRAI hours (9 AM to 9 PM) with verified transactional routing."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How do webhooks and CRM data flow back into LeadSquared, Zoho, or our database?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Immediately after each call terminates (under 30 seconds), BoldFlow dispatches a JSON webhook payload containing caller phone number, call duration, full audio recording URL, speaker-diarized transcript, and structured extraction fields (e.g., budget, property type, delivery address confirmation, appointment timestamp). We provide direct pre-built integrations for LeadSquared, Zoho CRM, Practo, Google Calendar, Shopify, and WhatsApp Business API."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Can callers naturally interrupt the AI bot during the conversation?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Unlike legacy IVR phone trees that force users to listen to long pre-recorded options, our voice pipeline operates on sub-180ms streaming full-duplex audio with instant acoustic barge-in. The moment the caller begins speaking, the AI stops speaking, listens, and responds naturally to their question."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How much does an AI phone assistant cost per month in India?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We operate on transparent, predictable monthly retainers with included call minutes: Starter Plan (₹9,999/month, 1,000 minutes included), Growth Plan (₹19,999/month, 3,000 minutes included), and Enterprise Plan (Custom scalable minutes, dedicated SIP trunking, all 8 regional languages)."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How quickly can we go live with a custom AI phone assistant?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our engineering sprint takes 5 to 10 days from handshake to live production calls. We draft and calibrate your industry-specific dialogue trees, configure your virtual DID routing, conduct rigorous telephony audio testing across local carriers, and test CRM webhooks with your team."
                      }
                    }
                  ]
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
