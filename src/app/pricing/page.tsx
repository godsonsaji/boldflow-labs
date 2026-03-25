"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tiers = [
    {
        name: "Starter Plan",
        tag: "First Wins",
        setup: "$497–$997",
        retainer: "$297–$497",
        bestFor: "Solopreneurs, local businesses, first-time automation buyers",
        features: [
            "1 Core Automation (lead follow-up, chatbot, or booking)",
            "Up to 3 integrations",
            "Basic reporting",
            "1-week build timeline",
            "WhatsApp & email support",
            "1 revision round"
        ],
        ctaText: "BOOK YOUR DISCOVERY CALL",
        style: "starter"
    },
    {
        name: "Growth Plan",
        tag: "Scaling Smart",
        isPopular: true,
        setup: "$1,500–$2,500",
        retainer: "$797–$1,200",
        bestFor: "Growing SMBs, marketing agencies, coaches with teams",
        features: [
            "3 Core Automations (Unified system)",
            "Full CRM integration",
            "Monthly performance dashboard",
            "Content scheduling automation",
            "2–3 week build timeline",
            "Weekly check-in calls",
            "Priority WhatsApp support",
            "2 revision rounds + full documentation"
        ],
        ctaText: "BOOK YOUR DISCOVERY CALL",
        style: "growth"
    },
    {
        name: "Authority Plan",
        tag: "Full-Stack Automation",
        setup: "$3,500–$6,000+",
        retainer: "$1,500–$2,500",
        bestFor: "Established businesses, multi-location operations, agencies seeking white-label",
        features: [
            "All 5 core services as unified ecosystem",
            "Custom AI chatbot with advanced flows",
            "End-to-end customer journey automation",
            "Real-time BI dashboard & CRM pipeline",
            "Social & content automation",
            "4–6 week build timeline",
            "Dedicated Slack channel & Bi-weekly calls",
            "Quarterly automation audit"
        ],
        ctaText: "CONTACT TO SCOPE BUILD",
        style: "authority"
    }
];

const faqs = [
    { q: "Why a setup fee + separate monthly retainer?", a: "Building custom automation requires intense upfront engineering to map logic, sequence APIs, and design schemas. The retainer covers the server costs, autonomous API limits, ongoing telemetry monitoring, and direct engineer access to prevent your systems from decaying." },
    { q: "Do I have to commit to the monthly retainer?", a: "No. The retainer is strictly month-to-month. If you have an internal technical team capable of monitoring API endpoints and webhook structures, we will hand over the documentation after launch." },
    { q: "What is the difference between Starter and Growth?", a: "Starter solves a single, isolated bottleneck (like an AI chatbot). Growth deploys an intertwined architecture that links multiple endpoints together (e.g., chatbot qualifies lead -> routes to CRM -> triggers SMS sequence -> schedules consultation autonomously)." },
    { q: "Can I upgrade after getting started?", a: "Absolutely. We view automation iteratively. You can deploy a Starter module immediately and sequence additional modular capabilities via the Growth plan once ROI is validated." },
    { q: "How long does setup take?", a: "Depending on pipeline complexity, deployment ranges from 7 days (Starter) to 6+ weeks (Authority). We rely on rigid sprint schedules to prevent scope creep." },
    { q: "Do you work with clients outside India?", a: "Yes. Our systems process natively across global boundaries. We coordinate sync calls across major time zones effortlessly." }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} PRICING MODELS
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-tight mb-8 max-w-5xl"
                    >
                        Transparent AI Automation Pricing — Built Around Your Stage of Growth.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#F5F5F5] font-medium mb-4"
                    >
                        One-time setup. Predictable monthly retainer. Zero surprises.
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-body text-[#A3A3A3] max-w-2xl font-light mb-12"
                    >
                        Setup fee covers complete schema design, build, and active deployment. Optional monthly retainers ensure continuous endpoint monitoring, system optimization, and direct architectural support. No lock-in.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex flex-col md:flex-row items-center gap-4 bg-[#0A0A0A] border border-[#1A1A1A] px-6 py-4 font-mono text-[13px] text-[#A3A3A3]"
                    >
                        <span>Setup from <span className="text-[#F5F5F5]">$497</span></span>
                        <span className="hidden md:inline text-[#333]">|</span>
                        <span>Monthly from <span className="text-[#F5F5F5]">$297/mo</span></span>
                        <span className="hidden md:inline text-[#333]">|</span>
                        <span><span className="text-[#0066ff]">{"//"}</span> Dedicated Support</span>
                    </motion.div>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {tiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex flex-col h-full relative p-8 ${
                                    tier.style === 'starter' ? 'bg-[#0A0A0A] border z-10 border-[#1A1A1A]' :
                                    tier.style === 'growth' ? 'bg-[#111111] border z-20 border-[rgba(0,102,255,0.15)] shadow-[0_0_80px_rgba(0,102,255,0.05)] transform lg:-translate-y-4' :
                                    'bg-[#050505] border z-0 border-[#333333] opacity-80 hover:opacity-100 transition-opacity duration-300'
                                }`}
                            >
                                {tier.style === 'growth' && (
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0066ff]" />
                                )}

                                <div className="mb-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-h3 text-[#F5F5F5] uppercase">{tier.name}</h3>
                                        {tier.isPopular && (
                                            <span className="mono-tag text-[#0066ff] border border-[rgba(0,102,255,0.2)] bg-[rgba(0,102,255,0.05)] px-2 py-1">MOST_POPULAR</span>
                                        )}
                                    </div>
                                    <span className="text-label text-[#A3A3A3] block mb-8">{"//"} {tier.tag}</span>

                                    <div className="space-y-2 mb-8 border-b border-[#1A1A1A] pb-8">
                                        <div className="flex justify-between items-end">
                                            <span className="text-caption text-[#71717A] uppercase tracking-wider">Deploy Base:</span>
                                            <span className="text-h3 text-[#F5F5F5] font-mono leading-none">{tier.setup}</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-caption text-[#71717A] uppercase tracking-wider">Telemetry Retainer:</span>
                                            <span className="text-[20px] text-[#A3A3A3] font-mono">{tier.retainer}</span>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <span className="text-caption text-[#F5F5F5] mb-2 block font-medium uppercase">Optimal Fit:</span>
                                        <p className="text-sm text-[#71717A] leading-relaxed">{tier.bestFor}</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12 flex-1">
                                    {tier.features.map(feat => (
                                        <li key={feat} className="flex gap-3 text-sm text-[#A3A3A3] items-start">
                                            <span className="text-[#0066ff] font-mono mt-0.5">{">"}</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href="/contact" 
                                    className={`w-full py-4 text-center text-[13px] font-medium transition-all duration-150 ${
                                        tier.style === 'growth' 
                                            ? 'btn-primary' 
                                            : 'btn-ghost'
                                    }`}
                                >
                                    {tier.ctaText}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRICING MODEL BREAKDOWN ───────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                     <div>
                         <div className="text-label text-[#0066ff] mb-4">{"//"} 01</div>
                         <h4 className="text-[20px] font-medium text-[#F5F5F5] uppercase mb-3">One-Time Setup</h4>
                         <p className="text-sm text-[#A3A3A3] leading-relaxed">Comprehensive architecture mapping, robust script building, rigorous testing, and live deployment configurations.</p>
                     </div>
                     <div>
                         <div className="text-label text-[#0066ff] mb-4">{"//"} 02</div>
                         <h4 className="text-[20px] font-medium text-[#F5F5F5] uppercase mb-3">Monthly Retainer</h4>
                         <p className="text-sm text-[#A3A3A3] leading-relaxed">Server payload coverage, daily endpoint monitoring, automated reporting suites, and direct line access to our engineering team.</p>
                     </div>
                     <div>
                         <div className="text-label text-[#0066ff] mb-4">{"//"} 03</div>
                         <h4 className="text-[20px] font-medium text-[#F5F5F5] uppercase mb-3">Growth & Optimisation</h4>
                         <p className="text-sm text-[#A3A3A3] leading-relaxed">Dedicated bi-weekly strategy sessions, rigorous quarterly logic audits, and continuous iterative improvement loops.</p>
                     </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────── */}
            <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="text-h2 font-medium text-[#F5F5F5] uppercase mb-16 text-center">Frequently Asked Queries.</h2>
                    
                    <div className="flex flex-col relative border-t border-[#1A1A1A]">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-[#1A1A1A] overflow-hidden group">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left py-6 flex justify-between items-center transition-colors focus:outline-none"
                                >
                                    <span className={`text-[16px] md:text-body-lg font-medium pr-8 transition-colors duration-150 ${openFaq === i ? 'text-[#F5F5F5]' : 'text-[#A3A3A3]'}`}>
                                        {faq.q}
                                    </span>
                                    <span className={`font-mono text-label shrink-0 transition-colors duration-150 ${openFaq === i ? 'text-[#0066ff]' : 'text-[#525252]'}`}>
                                        {openFaq === i ? "[ - ]" : "[ + ]"}
                                    </span>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0, ease: "linear" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#A3A3A3] text-sm leading-relaxed pb-8 max-w-2xl">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PAGE CTA ─────────────────────────────── */}
            <section className="py-32 lg:py-48 flex justify-center px-6 bg-[#050505]">
                <div className="w-full max-w-[800px] border border-[#1A1A1A] bg-[#0A0A0A] relative p-16 md:p-24 text-center group active:scale-[0.99] transition-transform duration-150">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-[1px] z-20">
                        <div className="w-full h-full animate-sweep-border opacity-50" />
                    </div>

                    <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                    <div className="absolute inset-0 radial-glow z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="target-hex target-hex-left-top" />
                    <div className="target-hex target-hex-right-bottom" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-12 leading-tight">
                            SECURE YOUR INFRASTRUCTURE EVALUATION.
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-left mb-12 border-l border-[#0066ff] pl-6 max-w-sm mx-auto">
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> No obligation</span>
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Straight answers</span>
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Limited spots per month</span>
                        </div>

                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                            BOOK YOUR FREE DISCOVERY CALL
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
