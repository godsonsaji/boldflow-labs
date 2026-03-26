"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const tiers = [
    {
        name: "STARTER",
        target: "Solopreneurs & early-stage businesses",
        price: "Custom Quote on Call",
        description: "For businesses taking their first step into AI automation. One focused workflow, deployed and running — with the foundation built to scale.",
        features: [
            "1 Core AI Workflow (e.g. AI Voice Agent or Chatbot)",
            "Seamless integration with current stack",
            "Deployed, running, and automated",
            "Foundation architecture built to scale",
        ],
        ctaText: "Book Your Discovery Call",
        style: "starter"
    },
    {
        name: "GROWTH",
        isPopular: true,
        target: "Growing SMBs scaling operations",
        price: "Custom Quote on Call",
        description: "For teams ready to connect the dots. Multiple systems working together, full CRM automation, multi-channel conversations, and real-time business intelligence.",
        features: [
            "Multiple AI systems working together",
            "Full CRM & Sales Pipeline Automation",
            "Multi-channel conversational agents (WhatsApp, SMS)",
            "Real-time business intelligence dashboards",
        ],
        ctaText: "Book Your Discovery Call",
        style: "growth"
    },
    {
        name: "AUTHORITY",
        target: "Established businesses going all-in on AI",
        price: "Custom Quote on Call",
        description: "For businesses that want the full picture. Voice agents, autonomous AI, advanced dashboards, dedicated engineering support, and a quarterly roadmap built around your goals.",
        features: [
            "Full deployment of advanced AI Voice Agents",
            "Autonomous AI workflows for complex processes",
            "Custom niche-specific BI dashboards",
            "Dedicated engineering support & quarterly roadmapping",
        ],
        ctaText: "Book Your Discovery Call",
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
    { q: "How does pricing work if there are no fixed numbers?", a: "Pricing is scoped based on your specific workflows, tech stack, and automation complexity. On our free discovery call, we audit your setup and provide a clear, transparent proposal before you commit to anything." },
    { q: "What happens during the discovery call?", a: "We conduct a deep-dive audit of your current workflows and identify the highest-leverage opportunities to eliminate manual work. You'll get a clear automation roadmap sequenced by ROI and implementation complexity." },
    { q: "What is the difference between Starter and Growth?", a: "Starter is for deploying one focused workflow (like an AI voice agent or CRM sync) to solve a single bottleneck. Growth connects multiple systems together—such as multi-channel conversations running alongside real-time dashboards and pipeline automation." },
    { q: "Can I upgrade my tier later?", a: "Absolutely. We view automation iteratively. You can deploy a Starter module immediately to validate ROI, and add additional capabilities via the Growth plan as your capacity needs increase." },
    { q: "How long does a typical build take?", a: "Depending on the complexity of your pipelines and the tier you choose, deployment ranges from a few weeks for a Starter workflow, to a more extensive timeline for Authority operational overhauls. We define the exact timeline in your proposal." },
    { q: "Do you work with clients outside your timezone?", a: "Yes. Our systems process globally round-the-clock. We coordinate discovery and handoff calls across major time zones effortlessly, ensuring your automated systems work while you sleep." }
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
                        Structured. Transparent. Scoped on a call.
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h2 md:text-h1 text-[#F5F5F5] font-medium leading-tight tracking-tight mb-6 max-w-4xl"
                    >
                        Our Philosophy:<br className="hidden md:block"/>No Guesswork. No Generic Packages.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg text-[#A3A3A3] max-w-3xl font-light mb-12 mx-auto leading-relaxed"
                    >
                        Every business we work with has a different starting point — different tools, different gaps, different growth stage. That's why we don't publish fixed numbers. What we do publish is our structure, so you know exactly what tier fits your situation before we ever speak.
                    </motion.p>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <h2 className="text-[#0066ff] font-medium tracking-wider uppercase text-[15px] mb-4">THREE TIERS. ONE CONVERSATION.</h2>
                        <p className="text-[#A3A3A3] text-body-lg leading-relaxed">
                            Pricing is scoped based on your workflows, stack, and automation complexity. Every engagement starts with a free discovery call — we audit your current setup, identify the highest-leverage opportunities, and give you a clear proposal before you commit to anything.
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
