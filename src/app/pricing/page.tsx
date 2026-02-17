import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import { PricingCards, FAQAccordion } from "@/components/PricingInteractive";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing for BoldFlow Labs AI automation services. Starter, Growth, and Enterprise plans to fit every business size and budget.",
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "Pricing — BoldFlow Labs",
        description:
            "Choose the right AI automation plan for your business. All plans include onboarding, optimization, and our core AI platform.",
        url: "/pricing",
    },
};

const plans = [
    {
        name: "Starter",
        description: "Perfect for small teams exploring AI automation",
        monthly: 2499,
        yearly: 1999,
        features: [
            "1 AI automation workflow",
            "Up to 5,000 monthly operations",
            "Email support (48h response)",
            "Basic analytics dashboard",
            "Standard integrations (5+)",
            "Monthly performance reports",
        ],
        popular: false,
    },
    {
        name: "Growth",
        description: "For scaling businesses that need serious automation power",
        monthly: 5999,
        yearly: 4999,
        features: [
            "5 AI automation workflows",
            "Up to 50,000 monthly operations",
            "Priority support (4h response)",
            "Advanced analytics & forecasting",
            "Custom integrations (20+)",
            "Weekly performance reports",
            "Dedicated success manager",
            "Custom AI model fine-tuning",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For organizations with complex AI needs at scale",
        monthly: null,
        yearly: null,
        features: [
            "Unlimited AI workflows",
            "Unlimited monthly operations",
            "24/7 dedicated support",
            "Custom AI model development",
            "Full enterprise integration suite",
            "Real-time performance dashboards",
            "Dedicated engineering team",
            "SLA guarantees (99.99%)",
            "On-premise deployment option",
            "Executive strategy reviews",
        ],
        popular: false,
    },
];

const faqs = [
    {
        q: "How long does it take to get started?",
        a: "Most projects begin with a 1-2 week discovery phase, followed by a 4-8 week implementation period. Simple automation workflows can be deployed in as little as 2 weeks.",
    },
    {
        q: "Can I switch plans later?",
        a: "You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
    },
    {
        q: "What kind of support do you offer?",
        a: "All plans include technical support. Starter gets email support, Growth includes priority support with a dedicated success manager, and Enterprise gets 24/7 dedicated support with SLA guarantees.",
    },
    {
        q: "Do you offer a free trial or POC?",
        a: "We offer a free 30-minute strategy call and can build a proof-of-concept for qualified prospects. This lets you see the value of our solutions before committing.",
    },
    {
        q: "What integrations do you support?",
        a: "We integrate with 500+ business tools including Salesforce, HubSpot, Slack, Google Workspace, AWS, Azure, and more. Custom integrations are available for Growth and Enterprise plans.",
    },
    {
        q: "Is my data secure?",
        a: "Absolutely. We maintain SOC 2 compliance, use end-to-end encryption, and follow strict data governance protocols. Enterprise clients can opt for on-premise deployment.",
    },
];

export default function PricingPage() {
    return (
        <>
            {/* JSON-LD FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a,
                            },
                        })),
                    }),
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Simple, Transparent{" "}
                            <span className="shimmer-text">Pricing</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
                            Choose the plan that fits your needs. All plans include our core
                            AI platform, professional onboarding, and ongoing optimization.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding pt-0" aria-label="Pricing plans">
                <div className="max-w-7xl mx-auto">
                    <PricingCards plans={plans} />
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding relative" aria-label="Frequently asked questions">
                <div className="max-w-3xl mx-auto relative z-10">
                    <FadeUp custom={0} className="mb-12">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Common <span className="gradient-text">Questions</span>
                        </h2>
                    </FadeUp>

                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Not sure which plan fits?">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Not Sure Which Plan{" "}
                            <span className="shimmer-text">Fits?</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            Let&apos;s talk. We&apos;ll help you find the perfect solution
                            for your business needs and budget.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Talk to an Expert
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
