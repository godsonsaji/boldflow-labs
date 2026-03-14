import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import { PricingCards, FAQAccordion } from "@/components/PricingInteractive";

export const metadata: Metadata = {
    title: "AI Automation Pricing | BoldFlow Labs — Transparent Plans for Every Stage of Growth",
    description:
        "Simple, transparent AI automation pricing for solopreneurs, growing SMBs, and established businesses. One-time setup fee. Predictable monthly retainer. No hidden costs. Choose the plan that fits where you are — and where you're going.",
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "AI Automation Pricing | BoldFlow Labs — Transparent Plans for Every Stage of Growth",
        description:
            "Simple, transparent AI automation pricing for solopreneurs, growing SMBs, and established businesses. One-time setup fee. Predictable monthly retainer. No hidden costs. Choose the plan that fits where you are — and where you're going.",
        url: "/pricing",
    },
};

const plans = [
    {
        name: "Starter Plan",
        tagline: "First Wins",
        bestFor: "Solopreneurs, local businesses & first-time automation buyers",
        oneTimeSetup: "$497 – $997",
        monthlyMaintenance: "$297 – $497 / month",
        setupIncludes: [
            "1 Core Automation — your choice of: AI-powered lead follow-up, AI chatbot, or automated appointment booking system",
            "Up to 3 workflow integrations with your existing tools and platforms",
            "Basic reporting setup so you can see your automation working from day one",
            "1-week build window — fast time to value, no lengthy waiting periods",
            "WhatsApp and email support throughout the build phase",
            "1 revision round to fine-tune delivery before handover"
        ],
        atAGlance: "1 Core Automation · 3 Integrations · 1-Week Build · WhatsApp & Email Support",
        ctaButton: "Book Your Discovery Call",
        popular: false
    },
    {
        name: "Growth Plan",
        tagline: "Scaling Smart",
        bestFor: "Growing SMBs, marketing agencies & coaches with teams",
        badge: "Most Popular",
        popular: true,
        oneTimeSetup: "$1,500 – $2,500",
        monthlyMaintenance: "$797 – $1,200 / month",
        setupIncludes: [
            "3 Core Automations bundled — AI Chatbot + Lead Follow-Up Automation + Appointment Booking System, built and integrated together as a unified system",
            "Full CRM integration and setup — connected, configured, and ready to work",
            "Monthly performance dashboard so your team has clear visibility on what's running and what it's delivering",
            "Content scheduling automation to keep your brand active across platforms without manual effort",
            "2–3 week build window with structured milestone delivery",
            "Weekly check-in calls to keep you informed and aligned throughout the build",
            "Priority WhatsApp support — direct access, faster response",
            "2 revision rounds plus full documentation on delivery"
        ],
        atAGlance: "3 Core Automations · CRM Setup · Monthly Dashboard · 2–3 Week Build · Weekly Calls",
        ctaButton: "Book Your Discovery Call"
    },
    {
        name: "Authority Plan",
        tagline: "Full-Stack Automation",
        bestFor: "Established businesses, multi-location operations & agencies seeking white-label",
        oneTimeSetup: "$3,500 – $6,000+",
        monthlyMaintenance: "$1,500 – $2,500 / month",
        setupIncludes: [
            "All 5 core services fully built and integrated into a single, cohesive automation ecosystem",
            "Custom AI chatbot with advanced conversational flows tailored to your specific customer journey",
            "End-to-end customer journey automation — from first touch to post-purchase follow-up",
            "Real-time business intelligence dashboard — live KPI tracking across your entire operation",
            "Social media and content automation — consistent brand presence without manual publishing",
            "Full CRM pipeline buildout — contacts, stages, automations, and reporting configured from scratch",
            "4–6 week build window with dedicated project management and milestone reviews",
            "Dedicated Slack channel — direct access to your automation engineer throughout and after the build",
            "Bi-weekly strategy calls to ensure delivery is aligned with your business goals",
            "Full documentation and team training video so your team can operate the systems confidently",
            "Quarterly automation audit — a structured review to optimise performance and identify new opportunities as your business grows"
        ],
        atAGlance: "5 Core Services · Custom AI Chatbot · Real-Time Dashboard · 4–6 Week Build · Quarterly Audit",
        ctaButton: "Contact Us to Scope Your Build",
        popular: false
    }
];

const faqs = [
    {
        q: "Why is there a setup fee and a separate monthly retainer?",
        a: "The setup fee covers the full cost of building your automation systems — the discovery, architecture, integrations, testing, and deployment. The monthly retainer covers what happens after: monitoring, maintenance, performance reviews, and ongoing optimisation. Separating the two keeps things honest — you're not paying a bloated monthly fee that hides the real cost of the build."
    },
    {
        q: "Do I have to commit to the monthly retainer?",
        a: "The monthly retainer is optional, but strongly recommended. Without it, your systems will continue to run, but you won't have proactive monitoring, performance reporting, or priority access to make adjustments as your business evolves. Most clients find the retainer pays for itself quickly — but the choice is always yours."
    },
    {
        q: "What's the difference between the Starter Plan and the Growth Plan?",
        a: "The Starter Plan is built around a single, focused automation — one clear win, deployed quickly, with minimal complexity. It's the right entry point if you've never worked with automation before and want to see what it can do for your business before committing to a larger system. The Growth Plan bundles three interconnected automations (chatbot, lead follow-up, and appointment booking) into a unified system — a significant step up in scope, impact, and strategic integration."
    },
    {
        q: "Can I upgrade my plan after getting started?",
        a: "Yes. Many clients start on the Starter Plan to validate the value of automation, then move to the Growth or Authority Plan once they're ready to scale. We structure upgrades so that the work already done isn't wasted — your initial systems are absorbed into the expanded build wherever possible."
    },
    {
        q: "How long does the setup take?",
        a: "Build windows are outlined in each plan: 1 week for Starter, 2–3 weeks for Growth, and 4–6 weeks for Authority. These timelines assume timely access to your platforms, credentials, and feedback during the build. A swift discovery call at the start locks in scope so there are no delays later."
    },
    {
        q: "Do you work with clients outside India?",
        a: "Yes. BoldFlow Labs works with clients globally. All discovery calls, check-ins, and support are handled remotely. Time zone coordination is discussed during the initial discovery call so communication is always smooth and predictable."
    }
];

export default function PricingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": plans.map((plan, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": plan.name,
                                "description": plan.bestFor,
                                "offers": {
                                    "@type": "Offer",
                                    "price": plan.oneTimeSetup.replace(/[^0-9]/g, "").slice(0, 3), // approximation for structured data
                                    "priceCurrency": "USD",
                                    "description": `One-time setup fee: ${plan.oneTimeSetup}. Monthly maintenance: ${plan.monthlyMaintenance}`
                                }
                            }
                        }))
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://boldflowlabs.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Pricing",
                                "item": "https://boldflowlabs.com/pricing"
                            }
                        ]
                    })
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Pricing overview">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -left-40 opacity-20" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Pricing
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            Transparent AI Automation Pricing —{" "}
                            <span className="shimmer-text">Built Around Your Stage of Growth</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-xl md:text-2xl font-semibold text-[#00a2ff] mb-6 max-w-3xl mx-auto leading-tight">
                            One-time setup. Predictable monthly retainer. Zero surprises.
                        </p>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                            Every BoldFlow Labs engagement follows a straightforward model: a one-time setup fee to professionally design, build, and deploy your automation systems — then an optional monthly retainer to keep everything optimised, monitored, and evolving alongside your business. No retainer traps. No disappearing after delivery. No surprise invoices.
                        </p>
                        <div className="mt-8 inline-block px-4 py-2 rounded-full glass border border-white/10">
                            <p className="text-xs sm:text-sm text-[#00a2ff] font-semibold">
                                Setup from $497 · Monthly from $297/mo · Dedicated support included
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding pt-0" aria-label="Engagement models">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                    <PricingCards plans={plans} />
                </div>
            </section>

            {/* Trust / How It Works */}
            <section className="section-padding overflow-hidden relative" aria-label="How the pricing works">
                <div className="orb orb-purple w-[400px] h-[400px] -bottom-20 -right-20 opacity-10" aria-hidden="true" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <Sparkles className="w-32 h-32 text-white" />
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <FadeUp>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    How the <span className="text-[#00a2ff]">Pricing Works</span> — No Guesswork, No Hidden Costs
                                </h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Every BoldFlow Labs engagement follows the same transparent model. The one-time setup fee covers everything needed to professionally design, build, test, and deploy your automation systems. The monthly retainer keeps your systems running optimally — with proactive monitoring, performance reviews, ongoing support, and strategic guidance built in.
                                    </p>
                                    <p>
                                        The monthly retainer isn&apos;t a lock-in. You stay because the ROI compounds the longer your automation runs — not because you&apos;re contractually obligated to.
                                    </p>
                                    <p className="font-medium text-[#00a2ff]">
                                        No scope creep charges. No surprise platform fees passed on to you. No disappearing after go-live.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp custom={2} className="relative">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-[#00a2ff] font-bold">01</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">One-Time Setup</h3>
                                            <p className="text-gray-400 text-sm">Your automation systems professionally designed, built, tested, and deployed. From workflow mapping to go-live, this is where the system is created.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-[#00a2ff] font-bold">02</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">Monthly Retainer</h3>
                                            <p className="text-gray-400 text-sm">Proactive monitoring, performance reporting, system updates, and direct access to your automation engineer — included every month.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-[#00a2ff] font-bold">03</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">Growth & Optimisation</h3>
                                            <p className="text-gray-400 text-sm">Strategy calls, quarterly audits, and continuous improvement cycles ensure your automation delivers compounding returns as your business scales.</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" aria-label="Frequently asked questions">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <FadeUp className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Frequently Asked <span className="shimmer-text">Questions</span>
                        </h2>
                        <p className="text-gray-400">Everything you need to know about our pricing and engagement models.</p>
                    </FadeUp>
                    <FadeUp custom={2}>
                        <div className="glass rounded-3xl p-6 sm:p-10 border border-white/5">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding relative overflow-hidden" aria-label="Book your discovery call">
                <div className="orb orb-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" aria-hidden="true" />
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                            Not Sure Which Plan Is <span className="shimmer-text">Right for You?</span>
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Book a free 20-minute discovery call. Tell us about your business, where you&apos;re losing the most time, and what you wish was running on autopilot. We&apos;ll give you a straight, honest recommendation — and a clear picture of what to expect before you commit to anything.
                        </p>
                        
                        <div className="flex flex-col items-center gap-6 pb-6">
                            <ul className="text-left text-gray-300 space-y-3 mb-4 mx-auto md:text-lg">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#00a2ff] shrink-0" />
                                    <span>No obligation. No sales pressure.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#00a2ff] shrink-0" />
                                    <span>Straight answers and a clear plan — whatever you decide.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#00a2ff] shrink-0" />
                                    <span>Limited discovery spots available each month.</span>
                                </li>
                            </ul>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0066ff]/40 transition-all duration-300 hover:scale-[1.05] btn-magnetic shadow-lg fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:static md:bottom-auto md:translate-x-0"
                            >
                                Book Your Free Discovery Call
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-gray-400 text-sm font-medium mt-2 hidden md:block">
                                Response within 1 business day.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
