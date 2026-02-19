"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

/* ── Engagement-Based Pricing Cards ─────────────────── */

interface PricingPlan {
    name: string;
    description: string;
    startingPrice: string | null;
    features: string[];
    popular: boolean;
}

export function PricingCards({ plans }: { plans: PricingPlan[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
                <div
                    key={plan.name}
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
                        <p className="text-gray-400 text-sm mb-6">
                            {plan.description}
                        </p>

                        <div className="mb-8">
                            {plan.startingPrice ? (
                                <>
                                    <span className="text-[13px] text-gray-400 block mb-1">Starting from</span>
                                    <span className="text-5xl font-bold text-white">
                                        {plan.startingPrice}
                                    </span>
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
                            {plan.startingPrice ? "Book Discovery Call" : "Contact Us"}
                        </Link>

                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#00a2ff]/50 font-semibold mb-4">
                            Includes
                        </p>
                        <ul className="space-y-3">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-2.5 text-sm text-gray-300"
                                >
                                    <Check className="w-4 h-4 text-[#00a2ff]/60 mt-0.5 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
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
