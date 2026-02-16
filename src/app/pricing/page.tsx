"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Check,
    ArrowRight,
    Minus,
    Plus,
    Sparkles,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
    }),
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
    const [isYearly, setIsYearly] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -left-40 opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium"
                    >
                        Pricing
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={1}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Simple, Transparent{" "}
                        <span className="shimmer-text">Pricing</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={2}
                        className="text-base text-gray-500 max-w-xl mx-auto mb-10"
                    >
                        Choose the plan that fits your needs. All plans include our core
                        AI platform, professional onboarding, and ongoing optimization.
                    </motion.p>

                    {/* Toggle */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={3}
                        className="inline-flex items-center gap-1 rounded-full p-1 border border-white/[0.06]"
                    >
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isYearly
                                    ? "bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white shadow-lg shadow-[#0066ff]/20"
                                    : "text-gray-500 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isYearly
                                    ? "bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white shadow-lg shadow-[#0066ff]/20"
                                    : "text-gray-500 hover:text-white"
                                }`}
                        >
                            Yearly <span className="text-xs opacity-70">Save 20%</span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding pt-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${plan.popular
                                        ? "bg-gradient-to-b from-[#0066ff]/[0.08] to-transparent border border-[#00a2ff]/20 shadow-[0_0_60px_rgba(0,102,255,0.08)] lg:scale-105 lg:-my-4"
                                        : "border border-white/[0.05] hover:border-white/[0.08]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00a2ff] to-transparent" />
                                )}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white">
                                            {plan.name}
                                        </h3>
                                        {plan.popular && (
                                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-[#00a2ff] bg-[#0066ff]/10 px-2 py-0.5 rounded-full">
                                                <Sparkles className="w-3 h-3" />
                                                Popular
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-sm mb-6">
                                        {plan.description}
                                    </p>

                                    <div className="mb-8">
                                        {plan.monthly ? (
                                            <>
                                                <AnimatePresence mode="wait">
                                                    <motion.span
                                                        key={isYearly ? "yearly" : "monthly"}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="text-5xl font-bold text-white"
                                                    >
                                                        $
                                                        {isYearly
                                                            ? plan.yearly?.toLocaleString()
                                                            : plan.monthly.toLocaleString()}
                                                    </motion.span>
                                                </AnimatePresence>
                                                <span className="text-gray-600 text-sm"> /month</span>
                                            </>
                                        ) : (
                                            <span className="text-4xl font-bold text-white">
                                                Custom
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href="/contact"
                                        className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] mb-8 ${plan.popular
                                                ? "bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/25 btn-magnetic"
                                                : "btn-outline text-white"
                                            }`}
                                    >
                                        {plan.monthly ? "Get Started" : "Contact Sales"}
                                    </Link>

                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5 text-sm text-gray-500"
                                            >
                                                <Check className="w-4 h-4 text-[#00a2ff]/60 mt-0.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding relative">
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="mb-12"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Common <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-0">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="border-b border-white/[0.04] last:border-b-0"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full flex items-center gap-4 py-6 text-left hover:bg-white/[0.01] transition-colors"
                                >
                                    <span className="text-[10px] font-bold text-[#0066ff]/30 tracking-wider tabular-nums w-6">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="flex-1 text-white font-medium text-sm">
                                        {faq.q}
                                    </span>
                                    <span className="shrink-0 w-6 h-6 rounded-full border border-white/[0.08] flex items-center justify-center">
                                        {openFAQ === i ? (
                                            <Minus className="w-3 h-3 text-[#00a2ff]" />
                                        ) : (
                                            <Plus className="w-3 h-3 text-gray-600" />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" as const }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pl-10 pb-6 text-gray-500 text-sm leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
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
                    </motion.div>
                </div>
            </section>
        </>
    );
}
