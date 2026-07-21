"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, TrendingUp, Calculator, ShieldCheck, DollarSign } from "lucide-react";

const tiers = [
    {
        name: "Pilot Deployment",
        subtitle: "Perfect for a first deployment",
        target: "One agent, live in 14 days",
        price: "From $399",
        period: "/month",
        subPrice: "No setup fee",
        description: "Perfect for a first deployment. Includes 1 production voice agent live in 14 days handling both inbound and outbound calls.",
        features: [
            "3,000+ call minutes included",
            "1 production voice agent, handling your inbound and outbound calls",
            "Dedicated phone number included",
            "Extra minutes at $0.08/min"
        ],
        ctaText: "Start a pilot",
        ctaHref: "/contact",
        style: "starter"
    },
    {
        name: "Scale Plan",
        isPopular: true,
        subtitle: "Most deployed",
        target: "For operations running real call volume",
        price: "From $0.05",
        period: "/min all-in",
        subPrice: "Volume-based per-minute pricing",
        description: "Volume-based pricing designed for scaling operations with high concurrent call volume and multi-channel campaigns.",
        features: [
            "Effective rates from $0.05/min all-in",
            "Multiple agents across campaigns",
            "Up to 100 concurrent calls",
            "CRM, WhatsApp, and calendar integrations",
            "Weekly revenue + hours reporting"
        ],
        ctaText: "Run your numbers",
        ctaHref: "#calculator",
        style: "growth"
    },
    {
        name: "Enterprise",
        subtitle: "Custom scalable plans",
        target: "For large organisations and partners",
        price: "Custom",
        period: "",
        subPrice: "Committed volume pricing",
        description: "Tailored infrastructure, white-label options, and dedicated support for enterprise organizations and agency partners.",
        features: [
            "Best-in-class pricing at committed volumes",
            "Custom integrations and deployment",
            "White-label and sub-account access",
            "Priority support, dedicated manager",
            "Multi-language support"
        ],
        ctaText: "Talk to the founder",
        ctaHref: "/contact",
        style: "authority"
    }
];

const comparisonData = [
    {
        feature: "Included Call Minutes",
        pilot: "3,000+ mins/mo",
        scale: "Volume-based per-min",
        enterprise: "Custom committed volume",
    },
    {
        feature: "Voice Agents",
        pilot: "1 Production Agent",
        scale: "Multiple Agents",
        enterprise: "Custom / Unlimited",
    },
    {
        feature: "Inbound & Outbound Calls",
        pilot: "Included",
        scale: "Included",
        enterprise: "Included",
    },
    {
        feature: "Concurrent Calls",
        pilot: "Standard",
        scale: "Up to 100",
        enterprise: "High-Volume Custom",
    },
    {
        feature: "Integrations",
        pilot: "Dedicated Phone Number",
        scale: "CRM, WhatsApp & Calendar",
        enterprise: "Custom & White-label",
    },
    {
        feature: "Reporting & Support",
        pilot: "Standard Support",
        scale: "Weekly revenue + hours reporting",
        enterprise: "Priority support, dedicated manager",
    },
];

const faqs = [
    { q: "Are there setup fees or hidden costs?", a: "Our Pilot Deployment has no setup fee and starts from $399/month with 3,000+ call minutes included. Scale plans use volume-based pricing with effective rates from $0.05/min all-in. There are never any hidden costs." },
    { q: "What is included in the Pilot Deployment?", a: "You get 1 production voice agent live in 14 days handling both your inbound and outbound calls, 3,000+ call minutes, a dedicated phone number, and extra minutes at $0.08/min with no setup fee." },
    { q: "How does the Scale Plan per-minute pricing work?", a: "The Scale Plan offers volume-based per-minute pricing with effective rates from $0.05/min all-in. It supports multiple agents across campaigns, up to 100 concurrent calls, CRM/WhatsApp/calendar integrations, and weekly reporting." },
    { q: "Can I upgrade from Pilot to Scale or Enterprise?", a: "Absolutely. You can test your first voice agent with a Pilot Deployment and scale up seamlessly as your call volume grows." },
    { q: "How long does setup take?", a: "Your Pilot Deployment agent is built, trained, and live within 14 days." },
    { q: "Do you support multi-language agents?", a: "Yes, multi-language support is built-in for Enterprise plans and available for Scale Plan accounts." }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    // ROI Calculator States
    const [leadVolume, setLeadVolume] = useState<number>(100);
    const [ticketValue, setTicketValue] = useState<number>(3000);
    const [leakRate, setLeakRate] = useState<number>(30); // in percent

    // ROI Math logic
    // Leak leads count
    const lostLeads = Math.round(leadVolume * (leakRate / 100));
    // Est close rate on leads (e.g. 20%)
    const closeRate = 0.20;
    // Lost revenue = lostLeads * ticketValue * closeRate
    const lostRevenue = lostLeads * ticketValue * closeRate;
    // Recapture rate: AI catches 70% of missed calls by answering under 60s
    const recaptureRate = 0.70;
    const recoveredRevenue = Math.round(lostRevenue * recaptureRate);
    
    // Net ROI multiple based on average pricing of Inbound (~$297/mo)
    const annualInvestment = 297 * 12;
    const annualRecovery = recoveredRevenue * 12;
    const roiRatio = annualInvestment > 0 ? (annualRecovery / annualInvestment).toFixed(1) : "0";

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-20 border-b border-[#1C1C24] overflow-hidden bg-[#0A0A0F]">
                <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none -z-10" />
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} Simple. Predictable. Flat Monthly Rates.
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight"
                    >
                        Simple, Performance-Driven Pricing.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg max-w-3xl mb-12 mx-auto"
                    >
                        Choose the capacity that fits your business needs. Whether you want to capture every inbound call 24/7, reactivate cold leads via outbound campaigns, or automate your entire pipeline, we have a clear, flat monthly tier.
                    </motion.p>
                </div>
            </section>

            {/* ── ROI CALCULATOR SECTION ────────────────── */}
            <section id="calculator" className="py-24 bg-[#111116] border-b border-[#1C1C24] relative scroll-mt-20">
                <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} CALCULATE REVENUE RECOVERY</span>
                        <h2 className="text-h2 text-white mb-4">Answering leads in 60s pays for itself.</h2>
                        <p className="text-sm text-[#A3A3B3] max-w-xl mx-auto">Adjust the inputs below to calculate how much leaked revenue you are currently losing to voicemail, and what you could capture with immediate callbacks.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0A0A0F] border border-[#1C1C24] p-8 md:p-12 rounded-[8px]">
                        {/* Sliders Input (Left) */}
                        <div className="lg:col-span-6 flex flex-col gap-8 justify-center">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Monthly Lead Volume</span>
                                    <span className="font-mono text-sm text-[#0047FF] font-bold">{leadVolume} Leads</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="20" 
                                    max="500" 
                                    step="10"
                                    value={leadVolume}
                                    onChange={(e) => setLeadVolume(parseInt(e.target.value))}
                                    className="w-full accent-[#0047FF] bg-[#161622] h-2 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Average Ticket / Job Value</span>
                                    <span className="font-mono text-sm text-[#0047FF] font-bold">${ticketValue.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="500" 
                                    max="15000" 
                                    step="250"
                                    value={ticketValue}
                                    onChange={(e) => setTicketValue(parseInt(e.target.value))}
                                    className="w-full accent-[#0047FF] bg-[#161622] h-2 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Missed Call / Lead Leak Rate</span>
                                    <span className="font-mono text-sm text-[#FF5A1F] font-bold">{leakRate}% Leaked</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="10" 
                                    max="60" 
                                    step="5"
                                    value={leakRate}
                                    onChange={(e) => setLeakRate(parseInt(e.target.value))}
                                    className="w-full accent-[#FF5A1F] bg-[#161622] h-2 rounded-lg cursor-pointer"
                                />
                                <span className="text-[10px] text-[#626272] block mt-2 font-mono">Industry average is 32% missed calls/voicemails.</span>
                            </div>
                        </div>

                        {/* Calculated Output (Right) */}
                        <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#1C1C24] pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center pb-4 border-b border-[#1C1C24]">
                                    <span className="text-xs text-[#A3A3B3] font-mono">1. LEAKING LEADS</span>
                                    <span className="text-lg font-bold text-white font-space">{lostLeads} Leads / mo</span>
                                </div>
                                
                                <div className="flex justify-between items-center pb-4 border-b border-[#1C1C24]">
                                    <span className="text-xs text-[#A3A3B3] font-mono">2. CURRENT REVENUE LOST</span>
                                    <span className="text-lg font-bold text-[#FF5A1F] font-space">${lostRevenue.toLocaleString()} / mo</span>
                                </div>

                                <div className="p-6 bg-[#0047FF]/5 border border-[#0047FF]/20 rounded-[4px]">
                                    <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-wider block mb-1">Estimated monthly revenue recovered</span>
                                    <strong className="text-3xl font-bold font-space text-[#0047FF] block mb-2">${recoveredRevenue.toLocaleString()} / mo</strong>
                                    <span className="text-xs text-[#A3A3B3]">Assuming standard 20% conversion and 70% immediate response recapture rate.</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#1C1C24] flex items-center justify-between text-xs text-[#626272] font-mono">
                                <span>NET ROI RATIO:</span>
                                <span className="text-white font-bold">{roiRatio}x Investment Return</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} SERVICE SPECS & RETENTION COST</span>
                        <h2 className="text-h2 text-white mb-4">Three Clear Packages</h2>
                        <p className="text-[#A3A3B3] leading-relaxed">
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
                                className={`flex flex-col h-full relative p-8 md:p-10 rounded-[6px] ${
                                    tier.style === 'growth' ? 'bg-[#111116] border z-20 border-[#0047FF] shadow-[0_0_80px_rgba(0,71,255,0.05)] transform lg:-translate-y-4' :
                                    'bg-[#0A0A0F] border z-0 border-[#1C1C24]'
                                }`}
                            >
                                {tier.isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A1F] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                                        Most Deployed
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold font-space text-[#F5F6FA]">{tier.name}</h3>
                                        {tier.subtitle && (
                                            <span className="text-[10px] font-mono text-[#0047FF] bg-[#0047FF]/10 border border-[#0047FF]/20 px-2 py-0.5 rounded font-semibold uppercase tracking-wide shrink-0">
                                                {tier.subtitle}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1.5 mb-1">
                                        <span className="text-[32px] font-bold text-white font-space">{tier.price}</span>
                                        {tier.period && <span className="text-xs font-mono text-[#A3A3B3]">{tier.period}</span>}
                                    </div>
                                    {tier.subPrice && (
                                        <div className="text-[11px] font-mono text-[#FF5A1F] font-semibold uppercase tracking-wider mb-2">
                                            {tier.subPrice}
                                        </div>
                                    )}
                                    <div className="text-[13px] font-mono text-[#0047FF] font-medium uppercase tracking-wider mb-4">{tier.target}</div>
                                    <p className="text-[#A3A3B3] text-sm leading-relaxed pb-6 border-b border-[#1C1C24]">{tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-12 flex-1">
                                    {tier.features.map(feat => (
                                        <li key={feat} className="flex gap-3 text-sm text-[#A3A3B3] items-start">
                                            <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href={tier.ctaHref} 
                                    className={`w-full py-4 text-center text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 rounded-[4px] ${
                                        tier.style === 'growth' 
                                            ? 'bg-[#0047FF] text-white hover:bg-[#1E5CFF]' 
                                            : 'bg-[#F5F6FA] text-[#0A0A0F] hover:bg-white'
                                    }`}
                                >
                                    {tier.ctaText}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAITH GUARANTEE ──────────────────────── */}
            <section className="py-16 bg-[#111116] border-b border-[#1C1C24] relative overflow-hidden">
                <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
                    <ShieldCheck className="w-12 h-12 text-[#FF5A1F] mx-auto mb-6" />
                    <h3 className="text-h3 text-white mb-3">Our Performance Guarantee</h3>
                    <p className="text-body max-w-xl mx-auto mb-4">
                        We build these pipelines to work. If you do not receive a qualified booking within 30 days of deploying the AI receptionist, you do not pay for that month. It is that straightforward.
                    </p>
                    <span className="text-[10px] font-mono text-[#626272] uppercase tracking-wider">APPLIES TO NEW FOUNDING CLIENT COHORTS</span>
                </div>
            </section>

            {/* ── COMPARISON TABLE ─────────────────────── */}
            <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
                <div className="max-w-[1000px] mx-auto px-6 overflow-x-auto">
                    <h2 className="text-2xl font-bold font-space text-[#F5F6FA] mb-12 text-center md:text-left">Compare Plans</h2>
                    
                    <table className="w-full text-left border-collapse min-w-[600px] border border-[#1C1C24]">
                        <thead>
                            <tr className="border-b border-[#1C1C24] bg-[#111116]">
                                <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-2/5">Features</th>
                                <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-1/5">Pilot Deployment</th>
                                <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#FF5A1F] w-1/5">Scale Plan</th>
                                <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-1/5">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={i} className="border-b border-[#1C1C24] hover:bg-[#111116]/50 transition-colors">
                                    <td className="py-5 px-6 text-[#A3A3B3] text-sm font-semibold">{row.feature}</td>
                                    <td className="py-5 px-6 text-[#F5F6FA] text-sm">{row.pilot}</td>
                                    <td className="py-5 px-6 text-[#FF5A1F] text-sm font-bold">{row.scale}</td>
                                    <td className="py-5 px-6 text-[#F5F6FA] text-sm">{row.enterprise}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────── */}
            <section className="py-24 bg-[#111116] border-b border-[#1C1C24]">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="text-h3 font-medium text-[#F5F6FA] tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
                    
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-[#1C1C24] bg-[#0A0A0F] hover:border-[#2E2E3E] transition-colors overflow-hidden rounded-[4px]">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <span className="text-[16px] font-bold font-space text-white pr-8">
                                        {faq.q}
                                    </span>
                                    <span className="text-[#A3A3B3] shrink-0">
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
                                            <div className="px-6 pb-6 text-[#A3A3B3] text-sm leading-relaxed border-t border-[#1C1C24] pt-4 mt-2 font-sans">
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
            <section className="py-32 flex justify-center px-6 bg-[#0A0A0F]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-space text-white mb-6 tracking-tight leading-tight">
                        Book a Free Discovery Call
                    </h2>
                    <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                        We'll scope your project, recommend the right tier, and give you a clear price — no pressure, no ambiguity.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto min-w-[280px] rounded-[4px]">
                            Book a Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
