"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        price: "from $995",
        description: "Perfect for small businesses needing a single core automation workflow.",
        features: [
            "1 Core Automation (Lead follow-up, chatbot, or booking)",
            "Up to 3 integrations",
            "Basic reporting setup",
            "1-week build timeline",
        ],
        ctaText: "Get Started",
        style: "starter"
    },
    {
        name: "Growth",
        isPopular: true,
        price: "from $2,495",
        description: "Multi-step automation across several platforms for growing teams.",
        features: [
            "3 Core Automations (Unified system)",
            "Full CRM integration",
            "Monthly performance dashboard",
            "Content scheduling automation",
            "2–3 week build timeline",
        ],
        ctaText: "Get Started",
        style: "growth"
    },
    {
        name: "Authority",
        price: "Custom",
        description: "Complete operational overhaul and ongoing technical partnership.",
        features: [
            "All 5 core services as unified ecosystem",
            "Custom AI chatbot with advanced flows",
            "End-to-end customer journey automation",
            "Real-time BI dashboard & CRM pipeline",
            "4–6 week build timeline",
        ],
        ctaText: "Contact to Scope",
        style: "authority"
    }
];

const comparisonData = [
    {
        feature: "Custom AI Workflows",
        starter: "1",
        growth: "3",
        authority: "Unlimited",
    },
    {
        feature: "API Integrations",
        starter: "Up to 3",
        growth: "Up to 10",
        authority: "Unlimited",
    },
    {
        feature: "Real-Time BI Dashboard",
        starter: "-",
        growth: "Standard",
        authority: "Custom Multi-View",
    },
    {
        feature: "Dedicated Slack Channel",
        starter: "-",
        growth: "✓",
        authority: "✓",
    },
    {
        feature: "Quarterly System Audits",
        starter: "-",
        growth: "-",
        authority: "✓",
    },
];

const faqs = [
    { q: "Why a setup fee + separate monthly retainer?", a: "Building custom automation requires intense upfront engineering to map logic and integrate tools. The retainer covers server costs, API limits, ongoing monitoring, and direct engineer access to ensure your system constantly improves." },
    { q: "Do I have to commit to the monthly retainer?", a: "No. The retainer is month-to-month. If you have an internal technical team capable of monitoring workflows and webhooks, we will hand over the documentation after launch." },
    { q: "What is the difference between Starter and Growth?", a: "Starter solves a single, isolated bottleneck like an AI chatbot. Growth deploys an intertwined architecture that links multiple endpoints together (e.g. chatbot qualifies lead -> routes to CRM -> triggers SMS sequence)." },
    { q: "Can I upgrade after getting started?", a: "Absolutely. We view automation iteratively. You can deploy a Starter module immediately and add additional capabilities via the Growth plan once ROI is validated." },
    { q: "How long does setup take?", a: "Depending on pipeline complexity, deployment ranges from 7 days (Starter) to 6+ weeks (Authority). We rely on strict schedules to prevent scope creep." },
    { q: "Do you work with clients outside your timezone?", a: "Yes. Our systems process globally round-the-clock. We coordinate discovery and handoff calls across major time zones effortlessly." }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-20 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h2 md:text-h1 text-[#F5F5F5] font-medium leading-tight tracking-tight mb-6 max-w-4xl"
                    >
                        Transparent Pricing <br className="hidden md:block"/>for Custom Systems.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light mb-12"
                    >
                        No surprise invoices or hidden retainers. Choose the tier that matches your current workflow bottleneck.
                    </motion.p>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex flex-col h-full relative p-8 md:p-10 ${
                                    tier.style === 'growth' ? 'bg-[#111111] border z-20 border-[#0066ff] shadow-[0_0_80px_rgba(0,102,255,0.05)] transform lg:-translate-y-4' :
                                    'bg-[#050505] border z-0 border-[#1A1A1A]'
                                }`}
                            >
                                {tier.isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066ff] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-medium text-[#F5F5F5] mb-2">{tier.name}</h3>
                                    <div className="text-[36px] font-semibold text-[#F5F5F5] mb-4">{tier.price}</div>
                                    <p className="text-[#A3A3A3] text-sm leading-relaxed pb-6 border-b border-[#1A1A1A]">{tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-12 flex-1">
                                    {tier.features.map(feat => (
                                        <li key={feat} className="flex gap-3 text-sm text-[#A3A3A3] items-start">
                                            <CheckCircle2 className="w-5 h-5 text-[#0066ff] shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href="/contact" 
                                    className={`w-full py-4 text-center text-sm font-medium transition-all duration-150 ${
                                        tier.style === 'growth' 
                                            ? 'bg-[#0066ff] text-white hover:bg-[#0055dd]' 
                                            : 'bg-[#F5F5F5] text-[#050505] hover:bg-white'
                                    }`}
                                >
                                    {tier.ctaText}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ─────────────────────── */}
            <section className="py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[1000px] mx-auto px-6 overflow-x-auto">
                    <h2 className="text-2xl font-medium text-[#F5F5F5] mb-12 text-center md:text-left">Compare Plans</h2>
                    
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-[#333333]">
                                <th className="py-4 px-4 font-medium text-[#F5F5F5] w-2/5">Features</th>
                                <th className="py-4 px-4 font-medium text-[#F5F5F5] w-1/5">Starter</th>
                                <th className="py-4 px-4 font-medium text-[#0066ff] w-1/5">Growth</th>
                                <th className="py-4 px-4 font-medium text-[#F5F5F5] w-1/5">Authority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={i} className="border-b border-[#1A1A1A] hover:bg-[#111111]/50 transition-colors">
                                    <td className="py-5 px-4 text-[#A3A3A3] text-sm">{row.feature}</td>
                                    <td className="py-5 px-4 text-[#F5F5F5] text-sm">{row.starter}</td>
                                    <td className="py-5 px-4 text-[#F5F5F5] text-sm font-medium">{row.growth}</td>
                                    <td className="py-5 px-4 text-[#F5F5F5] text-sm">{row.authority}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="text-h3 font-medium text-[#F5F5F5] tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
                    
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#333333] transition-colors overflow-hidden">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <span className="text-[16px] font-medium text-[#F5F5F5] pr-8">
                                        {faq.q}
                                    </span>
                                    <span className="text-[#A3A3A3] shrink-0">
                                        {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </span>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-[#A3A3A3] text-[15px] leading-relaxed border-t border-[#1A1A1A] pt-4 mt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA BLOCK ─────────────────────────── */}
            <section className="py-32 flex justify-center px-6 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium text-[#F5F5F5] mb-6 tracking-tight leading-tight">
                        Ready to automate your operations?
                    </h2>
                    <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Book a free strategy session. We'll map your current workflow bottlenecks and outline exactly what an automated system looks like for you.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center w-full sm:w-auto min-w-[280px]">
                            Book a Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
