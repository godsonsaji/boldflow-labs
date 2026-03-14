"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

/* ── Engagement-Based Pricing Cards ─────────────────── */

interface PricingPlan {
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
}

export function PricingCards({ plans }: { plans: PricingPlan[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {plans.map((plan) => (
                <div
                    key={plan.name}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${plan.popular
                        ? "bg-gradient-to-b from-[#0066ff]/[0.08] to-transparent border-2 border-[#00a2ff]/40 shadow-[0_0_60px_rgba(0,102,255,0.08)] transform lg:-translate-y-2 lg:scale-[1.02]"
                        : "border border-white/[0.05] hover:border-white/[0.08]"
                        }`}
                >
                    {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a2ff] to-transparent" />
                    )}
                    <div className="p-6 sm:p-8 flex flex-col h-full">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">
                                {plan.name}
                            </h3>
                            {plan.badge && (
                                <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.1em] font-semibold text-[#00a2ff] bg-[#0066ff]/10 px-2 py-0.5 rounded-full whitespace-nowrap border border-[#00a2ff]/20">
                                    <Sparkles className="w-2.5 h-2.5" />
                                    {plan.badge}
                                </span>
                            )}
                        </div>
                        <p className="text-sm font-semibold text-[#00a2ff] mb-2">
                            {plan.tagline}
                        </p>
                        <div className="mb-6">
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Best for:</p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {plan.bestFor}
                            </p>
                        </div>

                        <div className="space-y-4 mb-2">
                            <div>
                                <span className="text-[11px] text-gray-400 block uppercase tracking-wider mb-1">One-Time Setup</span>
                                <span className="text-3xl font-bold text-white">
                                    {plan.oneTimeSetup}
                                </span>
                            </div>
                            <div>
                                <span className="text-[11px] text-gray-400 block uppercase tracking-wider mb-1">Monthly Retainer</span>
                                <span className="text-xl font-bold text-white">
                                    {plan.monthlyMaintenance}
                                </span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 mb-8 italic">Final pricing confirmed after your free discovery call.</p>

                        <Link
                            href="/contact"
                            className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] mb-8 ${plan.popular
                                ? "bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/25 btn-magnetic"
                                : "btn-outline text-white border border-white/20 hover:border-white/40"
                                }`}
                        >
                            {plan.ctaButton}
                        </Link>

                        <div className="flex-1 space-y-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#00a2ff]/70 font-bold mb-4">
                                    Setup Includes
                                </p>
                                <ul className="space-y-2.5">
                                    {plan.setupIncludes.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2 text-xs text-gray-300"
                                        >
                                            <Check className="w-3.5 h-3.5 text-[#00a2ff]/80 mt-0.5 shrink-0" />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-[10px] text-gray-400 flex items-center justify-between gap-3 italic">
                                <span className="shrink-0">At a Glance:</span>
                                <span className="text-gray-200 non-italic text-right">{plan.atAGlance}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Retainer disclaimer */}
            <div className="col-span-1 lg:col-span-3 mt-4 text-center">
                <p className="text-[11px] text-gray-500 italic">
                    *Monthly retainer begins after system delivery and is billed month-to-month. Cancel anytime.
                </p>
            </div>
        </div>
    );
}

/* ── FAQ Accordion ───────────────────────────────────── */

interface FAQ {
    q: string;
    a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <div className="space-y-0">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className="border-b border-white/[0.04] last:border-b-0"
                >
                    <button
                        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                        className="w-full flex items-center gap-4 py-6 text-left hover:bg-white/[0.01] transition-colors"
                        aria-expanded={openFAQ === i}
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
                                <Plus className="w-3 h-3 text-gray-400" />
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
                                <p className="pl-10 pb-6 text-gray-300 text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
