"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Terminal } from "lucide-react";
import { useState } from "react";

export interface PricingPlan {
    name: string;
    tagline: string;
    bestFor: string;
    oneTimeSetup: string;
    monthlyMaintenance: string;
    setupIncludes: string[];
    atAGlance: string;
    ctaButton: string;
    badge?: string;
    popular?: boolean;
    isEnterprise?: boolean;
}

export function PricingCards({ plans }: { plans: PricingPlan[] }) {
    const standardPlans = plans.filter(p => !p.isEnterprise);
    const enterprisePlan = plans.find(p => p.isEnterprise);

    return (
        <div className="flex flex-col gap-8 relative">
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono text-[#A1A1AA] tracking-[0.2em] mb-4">
                <span>[ NO VENDOR LOCK-IN ]</span>
                <span className="hidden sm:inline text-[#333]">—</span>
                <span>[ MONTH-TO-MONTH RETAINER ]</span>
                <span className="hidden sm:inline text-[#333]">—</span>
                <span>[ FULL CODE/SYSTEM HANDOVER ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {standardPlans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-[2px] p-8 transition-all duration-300 flex flex-col ${plan.popular
                            ? "bg-[#0A0A0A] border border-[#FF5722]/50 shadow-[0_0_80px_rgba(255,87,34,0.06)]"
                            : "bg-[#050505] border border-[#1A1A1A] hover:border-[#333]"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />
                        )}
                        
                        <div className="flex flex-col h-full z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-xs font-mono text-[#71717A]">
                                        {plan.tagline}
                                    </p>
                                </div>
                                {plan.badge && (
                                    <span className="inline-flex items-center text-[9px] uppercase tracking-[0.1em] font-mono text-[#FF5722] bg-[#FF5722]/10 px-2 py-1 rounded-[2px] border border-[#FF5722]/20">
                                        {plan.badge}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-end border-b border-[#1A1A1A] pb-2">
                                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">Build Phase</span>
                                    <span className="text-xl font-medium text-white">{plan.oneTimeSetup}</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-[#1A1A1A] pb-2">
                                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">Runtime Maintenance</span>
                                    <span className="text-xl font-medium text-white">{plan.monthlyMaintenance}</span>
                                </div>
                            </div>

                            <div className="flex-1 mb-8">
                                <p className="text-[10px] uppercase font-mono tracking-widest text-[#71717A] mb-4">
                                    {"//"} Deployment Specs
                                </p>
                                <ul className="space-y-3">
                                    {plan.setupIncludes.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <ChevronRight className="w-3.5 h-3.5 text-[#00a2ff] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#A1A1AA] leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/contact"
                                className={`w-full py-4 text-center font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-[2px] ${plan.popular
                                    ? "bg-[#FF5722] text-white hover:bg-[#E64A19]"
                                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                {plan.ctaButton}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {enterprisePlan && (
                <div className="mt-4 relative rounded-[2px] p-8 lg:p-12 bg-[#050505] border border-[#1A1A1A] overflow-hidden flex flex-col lg:flex-row gap-12 lg:items-center">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none" />
                    
                    <div className="lg:w-1/3 z-10 border-b lg:border-b-0 lg:border-r border-[#1A1A1A] pb-8 lg:pb-0 lg:pr-12">
                        <Terminal className="w-6 h-6 text-[#00a2ff] mb-4" />
                        <h3 className="text-2xl font-medium text-white mb-2">{enterprisePlan.name}</h3>
                        <p className="text-xs font-mono text-[#71717A] mb-6">{enterprisePlan.tagline}</p>
                        
                        <div className="space-y-4 mb-8">
                            <div>
                                <span className="text-[10px] text-[#A1A1AA] block uppercase tracking-wider font-mono mb-1">Architecture Build</span>
                                <span className="text-lg font-medium text-white">{enterprisePlan.oneTimeSetup}</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-[#A1A1AA] block uppercase tracking-wider font-mono mb-1">Telemetry & Runtime</span>
                                <span className="text-lg font-medium text-white">{enterprisePlan.monthlyMaintenance}</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-full py-4 text-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-[2px] bg-white text-black hover:bg-gray-200"
                        >
                            {enterprisePlan.ctaButton}
                        </Link>
                    </div>

                    <div className="lg:w-2/3 z-10">
                        <p className="text-[10px] uppercase font-mono tracking-widest text-[#71717A] mb-4">
                            {"//"} Enterprise Capabilities
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {enterprisePlan.setupIncludes.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Shield className="w-3.5 h-3.5 text-[#00a2ff] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#A1A1AA] leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ── FAQ Accordion (CLI Style) ───────────────────────────── */

interface FAQ {
    q: string;
    a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <div className="border border-[#1A1A1A] bg-[#050505] rounded-[2px] overflow-hidden">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className="border-b border-[#1A1A1A] last:border-b-0"
                >
                    <button
                        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                        aria-expanded={openFAQ === i}
                    >
                        <span className="text-[10px] font-mono text-[#00a2ff] tabular-nums shrink-0">
                            ~/faq_{String(i + 1).padStart(2, "0")} $
                        </span>
                        <span className="flex-1 text-white font-mono text-xs tracking-wide">
                            {faq.q}
                        </span>
                    </button>
                    <AnimatePresence>
                        {openFAQ === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-[#0A0A0A]"
                            >
                                <div className="px-6 py-5 pl-24 border-t border-[#1A1A1A]/50 text-[#A1A1AA] text-sm leading-relaxed font-light">
                                    <span className="text-[#333] mr-2 text-xs font-mono">{">"}</span>
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
