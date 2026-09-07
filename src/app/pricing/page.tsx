"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        subtitle: "For emerging Real Estate brokers, D2C brands & boutique Insurance agencies",
        target: "Single language of your choice",
        price: "₹9,999",
        period: "/month",
        subPrice: "1,000 mins/mo included (~33 min/day) · Overage: ₹6/min",
        description: "Custom AI voice agent built for your business. Answers inbound calls 24/7 in a single language of your choice (English, Hindi, Tamil, Kannada, Telugu, Marathi, Bengali, Gujarati, or Hinglish).",
        features: [
            "Custom AI voice agent built for your business",
            "24/7 call answering (inbound only)",
            "Appointment booking & lead capture into your calendar",
            "Weekly call summary report",
            "We handle setup, scripting, and changes — you don't touch anything"
        ],
        ctaText: "Start Starter Plan",
        ctaHref: "/contact",
        style: "starter"
    },
    {
        name: "Growth",
        isPopular: true,
        subtitle: "Most Popular — For scaling Real Estate firms, high-growth D2C brands & Insurance brokerages",
        target: "English + 1 Regional Language",
        price: "₹19,999",
        period: "/month",
        subPrice: "3,000 mins/mo included (~100 min/day) · Overage: ₹5/min",
        description: "Built for growing businesses needing 24/7 inbound and outbound handling, CRM integration, automated WhatsApp confirmations, and peak-hour scaling.",
        features: [
            "Everything in Starter, plus:",
            "24/7 inbound & outbound call handling",
            "WhatsApp confirmation to customers",
            "CRM integration (LeadSquared, Zoho, HubSpot, Shopify)",
            "Outbound reminder & follow-up calls (site visits, cart drops, renewals)",
            "Peak-hour scaling (handles sudden traffic spikes)",
            "Call analytics dashboard",
            "Priority WhatsApp support"
        ],
        ctaText: "Deploy Growth Plan",
        ctaHref: "/contact",
        style: "growth"
    },
    {
        name: "Enterprise",
        subtitle: "For large Real Estate developers, omnichannel D2C & national Insurance enterprises",
        target: "Custom Multi-Language & Dialect Support",
        price: "Custom",
        period: "",
        subPrice: "Custom Scalable Plans · Tailored Call Volume & SLA",
        description: "Enterprise-grade voice infrastructure with custom scalable plans, dedicated account manager, advanced CRM/ERP workflows, and high-concurrency peak handling across Real Estate, D2C, and Insurance operations.",
        features: [
            "Everything in Growth, plus:",
            "Custom scalable minutes & concurrent call capacity",
            "Advanced API integrations & webhooks (Custom CRM, ERP, Shopify)",
            "Dedicated account manager & SLA guarantee",
            "Same-day script & campaign modifications",
            "Monthly strategy call & conversion ROI audit"
        ],
        ctaText: "Contact for Enterprise",
        ctaHref: "/contact",
        style: "authority"
    }
];

const comparisonData = [
    {
        feature: "Included Call Minutes",
        starter: "1,000 mins/mo (~33 min/day)",
        growth: "3,000 mins/mo (~100 min/day)",
        enterprise: "Custom Scalable Volume",
    },
    {
        feature: "Supported Languages",
        starter: "Single Language of your choice",
        growth: "English + 1 Regional Language",
        enterprise: "Custom Multi-Language",
    },
    {
        feature: "Call Direction",
        starter: "Inbound Only",
        growth: "Inbound & Outbound",
        enterprise: "Inbound & Outbound (High Concurrency)",
    },
    {
        feature: "Overage Per Minute Rate",
        starter: "₹6 / min",
        growth: "₹5 / min",
        enterprise: "Custom Volume Tiered Rates",
    },
    {
        feature: "CRM & Platform Sync",
        starter: "Google Calendar",
        growth: "LeadSquared, Zoho, HubSpot, Shopify",
        enterprise: "Custom APIs, ERPs & Webhooks",
    },
    {
        feature: "Outbound & WhatsApp Automation",
        starter: "Inbound Only (No Outbound/WhatsApp)",
        growth: "WhatsApp Confirmations + Outbound Calls",
        enterprise: "Omnichannel Workflows & Custom Triggers",
    },
    {
        feature: "Script Changes & Support",
        starter: "Weekly updates",
        growth: "Priority WhatsApp Support",
        enterprise: "Same-Day Changes + Dedicated Mgr",
    },
];

const faqs = [
    { q: "How much does this cost?", a: "Our plans offer predictable monthly retainers: Starter at ₹9,999/month (1,000 mins, single language, inbound only) and Growth at ₹19,999/month (3,000 mins, English + 1 Regional Language, inbound & outbound with WhatsApp confirmation). For higher volumes and custom workflows, our Enterprise tier offers custom scalable plans. Overage minutes are billed transparently at ₹6/min for Starter or ₹5/min for Growth." },
    { q: "Do I get GST invoices?", a: "Yes. All plans are GST-compliant with tax invoices provided for Indian registered entities." },
    { q: "Can I choose my regional languages?", a: "Yes. You pick your preferred languages from Hindi, Tamil, Kannada, Telugu, Marathi, Bengali, Gujarati, or Hinglish. Starter includes a single language of your choice, Growth includes English + 1 regional language, and Enterprise offers fully custom multi-language deployments." },
    { q: "Do I need to manage any software?", a: "No. We handle full setup, script writing, Exotel/Plivo voice triggers, calendar/CRM mapping, and ongoing maintenance. You don't touch anything." },
    { q: "How long does setup take?", a: "Your custom AI voice agent is configured, tested on Indian phone lines, and live within 5 to 10 business days." },
    { q: "What happens if call volume spikes?", a: "Our telephony pipeline on Exotel & Plivo scales seamlessly to handle dozens of concurrent calls during property launches, flash sales, festive e-commerce rushes, or policy renewal deadlines without busy signals." }
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    // ROI Calculator States (in INR ₹)
    const [leadVolume, setLeadVolume] = useState<number>(100);
    const [ticketValue, setTicketValue] = useState<number>(50000); // e.g., ₹50k fee or commission
    const [leakRate, setLeakRate] = useState<number>(35); // percent

    // ROI Math logic in INR
    const lostLeads = Math.round(leadVolume * (leakRate / 100));
    const closeRate = 0.15; // 15% conversion on leads
    const lostRevenue = lostLeads * ticketValue * closeRate;
    const recaptureRate = 0.65; // AI catches 65% of missed calls
    const recoveredRevenue = Math.round(lostRevenue * recaptureRate);
    
    const monthlyInvestment = 19999; // Growth plan cost
    const roiRatio = monthlyInvestment > 0 ? (recoveredRevenue / monthlyInvestment).toFixed(1) : "0";

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
                        {"//"} Transparent INR Pricing. Zero Setup Hassle.
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight"
                    >
                        Predictable Plans for Indian SMBs.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg max-w-3xl mb-8 mx-auto"
                    >
                        Choose the tier that matches your monthly call volume. Purpose-built for Real Estate brokerages & developers, fast-growing D2C & E-commerce brands, and Insurance agencies. GST invoices provided.
                    </motion.p>

                    {/* Cost Comparison Banner */}
                    <div className="p-6 bg-[#111116] border border-[#0047FF]/30 rounded-[6px] max-w-2xl text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-1">COST COMPARISON</span>
                            <p className="text-xs text-[#A3A3B3] leading-relaxed">
                                <strong className="text-white">Hiring in-house telecallers & support:</strong> ₹20,000+/month per rep + PF + training + 9 AM–6 PM limits.<br />
                                <strong className="text-[#0047FF]">BoldFlow AI Voice Agents:</strong> From ₹9,999/month. 24/7 instant lead qualification & booking for Real Estate, D2C & Insurance.
                            </p>
                        </div>
                        <span className="shrink-0 text-xl font-bold font-space text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded border border-[#10B981]/20">
                            Save 50%+
                        </span>
                    </div>
                </div>
            </section>

            {/* ── ROI CALCULATOR SECTION ────────────────── */}
            <section id="calculator" className="py-24 bg-[#111116] border-b border-[#1C1C24] relative scroll-mt-20">
                <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} REVENUE RECOVERY CALCULATOR</span>
                        <h2 className="text-h2 text-white mb-4">Answering calls in 10s pays for itself.</h2>
                        <p className="text-sm text-[#A3A3B3] max-w-xl mx-auto">Adjust the inputs below in Indian Rupees (₹) to calculate lost revenue from unanswered calls vs recovered revenue with BoldFlow AI.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0A0A0F] border border-[#1C1C24] p-8 md:p-12 rounded-[8px]">
                        {/* Sliders Input (Left) */}
                        <div className="lg:col-span-6 flex flex-col gap-8 justify-center">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Monthly Call / Inquiry Volume</span>
                                    <span className="font-mono text-sm text-[#0047FF] font-bold">{leadVolume} Calls</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="30" 
                                    max="500" 
                                    step="10"
                                    value={leadVolume}
                                    onChange={(e) => setLeadVolume(parseInt(e.target.value))}
                                    className="w-full accent-[#0047FF] bg-[#161622] h-2 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Average Deal / Order / Policy Value</span>
                                    <span className="font-mono text-sm text-[#0047FF] font-bold">₹{ticketValue.toLocaleString("en-IN")}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="5000" 
                                    max="200000" 
                                    step="5000"
                                    value={ticketValue}
                                    onChange={(e) => setTicketValue(parseInt(e.target.value))}
                                    className="w-full accent-[#0047FF] bg-[#161622] h-2 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold font-space text-white">Missed Call / After-Hours Rate</span>
                                    <span className="font-mono text-sm text-[#FF5A1F] font-bold">{leakRate}% Unanswered</span>
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
                                <span className="text-[10px] text-[#626272] block mt-2 font-mono">Industry average is 35% unanswered phone calls after 6 PM.</span>
                            </div>
                        </div>

                        {/* Calculated Output (Right) */}
                        <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#1C1C24] pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center pb-4 border-b border-[#1C1C24]">
                                    <span className="text-xs text-[#A3A3B3] font-mono">1. MISSED CALLS / MONTH</span>
                                    <span className="text-lg font-bold text-white font-space">{lostLeads} Calls</span>
                                </div>
                                
                                <div className="flex justify-between items-center pb-4 border-b border-[#1C1C24]">
                                    <span className="text-xs text-[#A3A3B3] font-mono">2. REVENUE LEAKING</span>
                                    <span className="text-lg font-bold text-[#FF5A1F] font-space">₹{lostRevenue.toLocaleString("en-IN")} / mo</span>
                                </div>

                                <div className="p-6 bg-[#0047FF]/5 border border-[#0047FF]/20 rounded-[4px]">
                                    <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-wider block mb-1">Estimated monthly revenue recovered</span>
                                    <strong className="text-3xl font-bold font-space text-[#0047FF] block mb-2">₹{recoveredRevenue.toLocaleString("en-IN")} / mo</strong>
                                    <span className="text-xs text-[#A3A3B3]">Based on 15% conversion and 65% immediate 10s voice callback recapture rate.</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#1C1C24] flex items-center justify-between text-xs text-[#626272] font-mono">
                                <span>NET ROI MULTIPLE:</span>
                                <span className="text-white font-bold">{roiRatio}x Growth Plan Return</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIERS ────────────────────────────────── */}
            <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} THREE CLEAR PLANS</span>
                        <h2 className="text-h2 text-white mb-4">Flat Retainers. GST Compliant.</h2>
                        <p className="text-[#A3A3B3] leading-relaxed">
                            Tailored for Real Estate, D2C & E-commerce, and Insurance businesses. Scale effortlessly from a single language inbound agent to omnichannel enterprise automation.
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
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <span className="text-[10px] font-mono text-[#0047FF] bg-[#0047FF]/10 border border-[#0047FF]/20 px-2.5 py-1 rounded font-semibold uppercase tracking-wider inline-block mb-3 max-w-full">
                                        {tier.subtitle}
                                    </span>
                                    <h3 className="text-2xl font-bold font-space text-[#F5F6FA] mb-3 leading-tight">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1.5 mb-1">
                                        <span className="text-[32px] font-bold text-white font-space">{tier.price}</span>
                                        {tier.period && <span className="text-xs font-mono text-[#A3A3B3]">{tier.period}</span>}
                                    </div>
                                    {tier.subPrice && (
                                        <div className="text-[11px] font-mono text-[#FF5A1F] font-semibold uppercase tracking-wider mb-2">
                                            {tier.subPrice}
                                        </div>
                                    )}
                                    <div className="text-[12px] font-mono text-[#0047FF] font-medium uppercase tracking-wider mb-4">{tier.target}</div>
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

                    <div className="mt-12 text-center text-xs font-mono text-[#626272]">
                        💼 All plans include GST invoicing. Billed monthly with no long-term lock-in contract.
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ─────────────────────── */}
            <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="text-2xl font-bold font-space text-[#F5F6FA] mb-12 text-center md:text-left">Compare Plans</h2>
                    
                    <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
                        <table className="w-full text-left border-collapse min-w-[600px] border border-[#1C1C24]">
                            <thead>
                                <tr className="border-b border-[#1C1C24] bg-[#111116]">
                                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-2/5">Features</th>
                                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-1/5">Starter (₹9,999)</th>
                                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#FF5A1F] w-1/5">Growth (₹19,999)</th>
                                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-wider text-[#A3A3B3] w-1/5">Enterprise (Custom)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-[#1C1C24] hover:bg-[#111116]/50 transition-colors">
                                        <td className="py-5 px-6 text-[#A3A3B3] text-sm font-semibold">{row.feature}</td>
                                        <td className="py-5 px-6 text-[#F5F6FA] text-sm">{row.starter}</td>
                                        <td className="py-5 px-6 text-[#FF5A1F] text-sm font-bold">{row.growth}</td>
                                        <td className="py-5 px-6 text-[#F5F6FA] text-sm">{row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                                            initial={{ opacity: 0, height: "auto" }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
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
                        Book a Free Discovery Strategy Call
                    </h2>
                    <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                        We'll scope your call volume, recommend the right plan, and set up your 48-hour pilot — no pressure, no sales gimmicks.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-6 sm:px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto sm:min-w-[280px] min-w-0 max-w-full rounded-[4px]">
                            Book a Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
