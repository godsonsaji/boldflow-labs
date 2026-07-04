"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const tiers = [
    {
        name: "INBOUND ONLY",
        target: "Capturing inbound leads 24/7",
        price: "~$297/month",
        description: "Capture every lead instantly. Our AI receptionist answers calls, replies to texts, and books appointments on your calendar day and night.",
        features: [
            "24/7 AI Voice Receptionist (never miss a call)",
            "Instant text back for web forms & missed calls",
            "Automated appointment booking & scheduling",
            "Automatic sync with your CRM (ServiceTitan, Housecall Pro, Salesforce, etc.)",
            "Monthly performance report and optimization"
        ],
        ctaText: "Book Your Discovery Call",
        style: "starter"
    },
    {
        name: "OUTBOUND ONLY",
        isPopular: true,
        target: "Lead reactivation & follow-ups",
        price: "~$597/month",
        description: "Proactively turn cold leads and missed estimates into booked jobs. Our AI calls, text-messages, and follows up with prospects automatically.",
        features: [
            "AI Outbound calling to reactivate old leads",
            "Automated follow-up for open quotes & missed estimates",
            "Custom text/SMS nurturing campaigns",
            "Direct calendar booking for interested leads",
            "Full pipeline status tracking and CRM integration"
        ],
        ctaText: "Book Your Discovery Call",
        style: "growth"
    },
    {
        name: "FULL STACK",
        target: "Complete hands-free lead management",
        price: "~$797/month",
        description: "Complete hands-free lead management. Combine inbound reception with proactive outbound campaigns and automated client onboarding.",
        features: [
            "All Inbound Receptionist + Outbound Calling tools",
            "Custom multi-channel campaigns (WhatsApp, SMS, Call)",
            "Smart AI voicemail drops & automated email routing",
            "Priority support & dedicated Slack channel with your developer",
            "Quarterly workflow audits and custom system updates"
        ],
        ctaText: "Book Your Discovery Call",
        style: "authority"
    }
];

const comparisonData = [
    {
        feature: "24/7 AI Voice Receptionist",
        starter: "Included",
        growth: "-",
        authority: "Included",
    },
    {
        feature: "Instant 60-Sec Lead Response",
        starter: "Call & SMS",
        growth: "Call & SMS",
        authority: "Multi-Channel",
    },
    {
        feature: "Lead Reactivation / Outbound Calls",
        starter: "-",
        growth: "Included",
        authority: "Included",
    },
    {
        feature: "CRM & Calendar Sync",
        starter: "Standard",
        growth: "Standard",
        authority: "Custom Bi-Directional",
    },
    {
        feature: "Dedicated Slack Support",
        starter: "-",
        growth: "✓",
        authority: "✓",
    },
];

const faqs = [
    { q: "Are there setup fees or hidden costs?", a: "Every setup is customized for your specific business. We charge a one-time build fee based on the complexity of your CRM integration and scripts, which we agree upon upfront. There are never any hidden costs." },
    { q: "What happens during the discovery call?", a: "We audit your current lead response times and map exactly where you are losing prospects. We'll show you exactly how our voice and SMS AI agents can plug those leaks and provide a clear setup proposal." },
    { q: "What is the difference between Inbound Only and Outbound Only?", a: "Inbound Only handles incoming traffic—answering missed calls, replying to text/web form submissions, and booking jobs 24/7. Outbound Only reactivates old leads, follows up on open quotes, and makes proactive calls to get appointments booked." },
    { q: "Can I upgrade my tier later?", a: "Absolutely. You can start with Inbound Only to secure missed calls, and easily add Outbound follow-ups and CRM integrations as your lead flow grows." },
    { q: "How long does the setup take?", a: "Most systems are live and answering your leads within 7 to 14 days. This includes writing custom scripts, training the AI voice receptionist, and integrating it with your calendar/CRM." },
    { q: "Do you serve clients outside the United States?", a: "Yes. We work with service businesses across the USA, UK, Canada, Australia, and UAE. Our AI agents operate 24/7/365, and we set up communication slots that match your local timezone." }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-20 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                    >
                        Simple. Predictable. Flat Monthly Rates.
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h2 md:text-h1 text-[#F5F5F5] font-medium leading-tight tracking-tight mb-6 max-w-4xl"
                    >
                        Simple, Performance-Driven Pricing.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg text-[#A3A3A3] max-w-3xl font-light mb-12 mx-auto leading-relaxed"
                    >
                        Choose the right capacity for your business. Whether you want to capture every inbound call 24/7, reactivate cold leads via outbound follow-ups, or automate your entire pipeline, we have a tier designed for you.
                    </motion.p>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <h2 className="text-[#0066ff] font-medium tracking-wider uppercase text-[15px] mb-4">Three Clear Packages</h2>
                        <p className="text-[#A3A3A3] text-body-lg leading-relaxed">
                            Choose the plan that matches your current workflow bottleneck. Every package comes with direct developer setup and full integration.
                        </p>
                    </div>
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
                                    <div className="text-[28px] font-semibold text-[#F5F5F5] mb-1">{tier.price}</div>
                                    <div className="text-[16px] font-medium text-[#0066ff] mb-4">{tier.target}</div>
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
                                <th className="py-4 px-4 font-medium text-[#F5F5F5] w-1/5">Inbound Only</th>
                                <th className="py-4 px-4 font-medium text-[#0066ff] w-1/5">Outbound Only</th>
                                <th className="py-4 px-4 font-medium text-[#F5F5F5] w-1/5">Full Stack</th>
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
                        Book a Free Discovery Call
                    </h2>
                    <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                        We'll scope your project, recommend the right tier, and give you a clear price — no pressure, no ambiguity.
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
