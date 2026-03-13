import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import { PricingCards, FAQAccordion } from "@/components/PricingInteractive";

export const metadata: Metadata = {
    title: "AI Automation Pricing | BoldFlow Labs — Transparent Plans, Predictable Costs",
    description:
        "BoldFlow Labs offers transparent AI automation pricing. One-time setup fee, low monthly maintenance. Plans from $197 setup + $47/mo. Book a free discovery call today.",
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "AI Automation Pricing | BoldFlow Labs — Transparent Plans, Predictable Costs",
        description:
            "BoldFlow Labs offers transparent AI automation pricing. One-time setup fee, low monthly maintenance. Plans from $197 setup + $47/mo.",
        url: "/pricing",
    },
};

const plans = [
    {
        name: "Starter Sprint",
        subtitle: "Essential Automation — One Workflow, One Win.",
        description: "A focused, time-boxed engagement designed to deliver a single high-impact automation or AI integration. Ideal for solo founders, micro-businesses, and first-time automation buyers.",
        oneTimeSetup: "$197",
        monthlyMaintenance: "$47/mo",
        setupIncludes: [
            "Workflow audit and automation opportunity mapping",
            "Design and build of one core automation or AI agent",
            "1 platform integration",
            "Basic testing, QA, and deployment",
            "Simple handover walkthrough",
            "7-day post-delivery support"
        ],
        monthlyIncludes: [
            "System monitoring and upkeep",
            "Bug fixes if anything breaks",
            "1 small tweak per month",
            "Monthly check-in with update summary"
        ],
        atAGlance: "1 Workflow · 1 Integration · 7-Day Support · 1 Monthly Revision",
        ctaButton: "Book Discovery Call",
        popular: false
    },
    {
        name: "Growth Automation",
        subtitle: "Business Automation System — Built to Scale With You.",
        description: "A multi-sprint engagement that addresses 3–5 interconnected workflow automation challenges across your business. Designed for small businesses and service businesses ready to scale.",
        oneTimeSetup: "$497",
        monthlyMaintenance: "$97/mo",
        badge: "Most Popular",
        popular: true,
        setupIncludes: [
            "Full operational diagnostic and priority automation roadmap",
            "2 complete automation workflows built and deployed",
            "2 platform integrations",
            "AI chatbot or automated lead follow-up system",
            "CRM or calendar integration",
            "Handover documentation and walkthrough call",
            "14-day post-delivery support",
            "2 revision rounds during build"
        ],
        monthlyIncludes: [
            "Weekly system monitoring",
            "Bug fixes and error resolution",
            "Up to 2 system adjustments per month",
            "Monthly performance report",
            "Priority 48-hour response time",
            "Quarterly system health check"
        ],
        atAGlance: "2 Workflows · 2 Integrations · 14-Day Support · 2 Revisions",
        ctaButton: "Book Discovery Call"
    },
    {
        name: "Scale Sprint",
        subtitle: "Full Automation Partnership — For Businesses Serious About Growth.",
        description: "A comprehensive engagement for growing businesses with multiple automation needs. This is a full automation partnership — we build your systems, train your team, and stay embedded.",
        oneTimeSetup: "$997",
        monthlyMaintenance: "$197/mo",
        setupIncludes: [
            "Full operational diagnostic and prioritized automation roadmap",
            "3–4 complete automation workflows built and deployed",
            "Up to 4 platform integrations",
            "AI lead generation or customer support automation",
            "Full CRM setup with email and WhatsApp integration",
            "Multi-system integration across your existing tech stack",
            "KPI dashboards and real-time performance tracking setup",
            "1-hour onboarding and team training call",
            "30-day post-delivery support",
            "Unlimited revisions during build"
        ],
        monthlyIncludes: [
            "Weekly monitoring and proactive optimization",
            "Unlimited bug fixes",
            "Up to 4 system improvements per month",
            "Bi-weekly performance reports",
            "Monthly strategy call with your automation engineer",
            "Priority 24-hour response time",
            "Dedicated WhatsApp or Slack channel",
            "Quarterly full system audit and roadmap review"
        ],
        atAGlance: "3–4 Workflows · 4 Integrations · 30-Day Support · Unlimited Revisions",
        ctaButton: "Book Discovery Call",
        popular: false
    },
    {
        name: "Custom Quote",
        subtitle: "Something More Complex? Let's Scope It Together.",
        description: "If you have complex, large-scale, or highly specific automation requirements — multiple departments, proprietary systems, or custom AI model development — we'll scope a bespoke engagement.",
        oneTimeSetup: "Custom",
        monthlyMaintenance: "Custom",
        setupIncludes: [
            "Dedicated senior AI engineer and project manager",
            "End-to-end custom AI and automation development",
            "Enterprise-grade security and compliance support",
            "Multi-system and cross-department integration architecture",
            "Ongoing retainer with structured optimization sprints",
            "Strategic advisory and quarterly roadmap reviews",
            "Priority support with direct engineer access"
        ],
        monthlyIncludes: [
            "24/7 dedicated support channel",
            "Unlimited architecture updates",
            "Custom API development and maintenance",
            "Enterprise security monitoring",
            "Dedicated account management",
            "White-glove training sessions"
        ],
        atAGlance: "Enterprise Scale · Custom Integrations · Dedicated Support · Strategic Advisory",
        ctaButton: "Contact Us to Discuss Requirements",
        popular: false
    }
];

const faqs = [
    {
        q: "Why is the setup fee one-time and not a monthly retainer?",
        a: "Because your automation system is a built asset — once it's deployed, it belongs to your operations. The monthly fee covers ongoing maintenance, monitoring, and improvement, not the build itself. This model means you're not paying indefinitely for work that was already completed."
    },
    {
        q: "Do I have to sign up for the monthly plan?",
        a: "It's optional but strongly recommended. Without active monitoring, bugs go unnoticed, integrations break silently, and your system slowly degrades. The monthly plan is priced to be a no-brainer — most clients find it pays for itself within the first week of each month."
    },
    {
        q: "What's the difference between the Starter Sprint and Growth Automation?",
        a: "Starter Sprint is for one specific pain point — one workflow, one integration, clean and fast. Growth Automation is for businesses with multiple interconnected processes that need a more comprehensive system across their operations, including AI-powered lead follow-up and CRM integration."
    },
    {
        q: "Can I upgrade my plan after getting started?",
        a: "Yes, at any time. We'll scope the additional work, apply a credit for your existing setup, and build out the new systems in a follow-on sprint. Most clients start on Starter or Growth and upgrade once they see the results."
    },
    {
        q: "How long does the setup take?",
        a: "Starter Sprint: 5–7 business days. Growth Automation: 10–14 days. Scale Sprint: 3–4 weeks. Custom Quote: scoped individually. You'll receive a clear timeline before any work begins."
    },
    {
        q: "Do you work with clients outside India?",
        a: "Yes. We work with clients across the US, UK, Europe, Australia, and Southeast Asia. All project communication is handled remotely via video call and async tools."
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
                        "itemListElement": plans.filter(p => p.oneTimeSetup !== "Custom").map((plan, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": plan.name,
                                "description": plan.description,
                                "offers": {
                                    "@type": "Offer",
                                    "price": plan.oneTimeSetup.replace("$", ""),
                                    "priceCurrency": "USD",
                                    "description": `One-time setup fee. Monthly maintenance: ${plan.monthlyMaintenance}`
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
                            Simple, Transparent Pricing —{" "}
                            <span className="shimmer-text">Aligned With Your Goals</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-xl md:text-2xl font-semibold text-[#00a2ff] mb-6 max-w-3xl mx-auto leading-tight">
                            One-Time Setup. Predictable Monthly Support. Zero Surprises.
                        </p>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                            We structure every engagement around the scope of what you&apos;re trying to achieve — whether that&apos;s a focused automation sprint or a full-scale AI integration. Pay once to get your system professionally built and deployed, then a simple monthly fee keeps everything running, monitored, and optimized over time.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                            <span className="text-gray-400">No retainer traps.</span>
                            <span className="w-1 h-1 rounded-full bg-[#00a2ff]/40" />
                            <span className="text-gray-400">No surprise invoices.</span>
                            <span className="w-1 h-1 rounded-full bg-[#00a2ff]/40" />
                            <span className="text-gray-400">No disappearing after delivery.</span>
                        </div>
                        <div className="mt-8 inline-block px-4 py-2 rounded-full glass border border-white/10">
                            <p className="text-xs sm:text-sm text-[#00a2ff] font-semibold">
                                Setup from $197 · Monthly from $47/mo · Post-launch support up to 30 days
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
                                    How the Pricing Works — <span className="text-[#00a2ff]">No Guesswork</span>
                                </h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Every BoldFlow engagement follows the same simple model. You pay a one-time setup fee to get your system professionally designed, built, tested, and deployed. Then an optional monthly maintenance plan keeps everything running smoothly — with monitoring, bug fixes, tweaks, and direct access to your automation engineer built in.
                                    </p>
                                    <p>
                                        The monthly fee sits at 20–25% of your setup cost, keeping things predictable no matter which plan you&apos;re on. You can cancel the monthly plan at any time, though most clients stay because the ROI compounds the longer their systems run.
                                    </p>
                                    <p className="font-medium text-[#00a2ff]">
                                        No surprise invoices. No scope creep charges. No hidden platform fees passed on to you.
                                    </p>
                                    <p>
                                        All engagements begin with a free discovery call — no obligation, no boilerplate proposals, just an honest conversation about what you&apos;re trying to achieve and which plan fits best.
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
                                            <p className="text-gray-400 text-sm">Design, build, test, and deploy your custom AI systems professionally.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-[#00a2ff] font-bold">02</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">Monthly Maintenance</h3>
                                            <p className="text-gray-400 text-sm">Proactive monitoring, bug fixes, tweaks, and expert access included.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-[#00a2ff] font-bold">03</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">Growth & Optimization</h3>
                                            <p className="text-gray-400 text-sm">Strategy calls and audits to ensure your automation scales with your ROI.</p>
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
                            Book a free 20-minute discovery call. Tell us about your business, where you&apos;re losing the most time, and what you wish was automated. We&apos;ll tell you exactly which plan fits your situation.
                        </p>
                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0066ff]/40 transition-all duration-300 hover:scale-[1.05] btn-magnetic shadow-lg"
                            >
                                Book Your Free Discovery Call
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-sm font-medium">
                                    No obligation. No sales pressure. Just straight answers.
                                </p>
                                <p className="text-xs text-[#00a2ff] font-semibold uppercase tracking-widest">
                                    Limited discovery slots available each month.
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}

