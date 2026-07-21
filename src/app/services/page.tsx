"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: "01",
        title: "AI Voice Agent Development",
        subheadline: "Inbound + Outbound · Available 24/7 · No hiring, no burnout.",
        description: "We code and train dedicated conversational voice bots using low-latency pipelines. Our agents behave exactly like a native receptionist, handling caller interruptions, screening queries, and scheduling calendars.",
        whatsIncluded: [
            "Deploy intelligent voice agents that answer, qualify, and close — around the clock",
            "Outbound agents that reactivate old databases, follow up, and book estimates",
            "Natural conversation flows trained on your scripts, tone, and objection-handling rules",
            "Full call logs, transcripts, and calendar routing synced to your database"
        ],
        outcome: "A tireless sales rep that scales infinitely and costs a fraction of a human hire"
    },
    {
        icon: "02",
        title: "End-to-End CRM + Sales Pipeline Automation",
        subheadline: "From first touch to closed deal — fully automated.",
        description: "Lead follow-up speed decides close rates. We construct automated data webhooks syncing all inbound queries instantly with trade software.",
        whatsIncluded: [
            "Instant lead capture and enrichment from every ad, form, or call channel",
            "Intelligent callback sequences that adapt based on user intent signals",
            "Automatic dispatcher assignment, job logs, and status updates in CRM",
            "CRM hygiene maintained without manual data entry — ever"
        ],
        outcome: "A sales pipeline that moves itself, so your team closes instead of chasing"
    },
    {
        icon: "03",
        title: "Autonomous AI Agent Development",
        subheadline: "Custom-built agents that reason, decide, and act.",
        description: "We deploy complex agentic workflows that leverage API tool-use to manage multi-step back-office operational tasks.",
        whatsIncluded: [
            "Multi-step agentic workflows that handle complex, non-linear business processes",
            "Agents that search, retrieve, synthesize, and update internal file servers",
            "Built on modern LLM + developer tool-use frameworks for structural durability",
            "Flawless integration with your existing proprietary software stack"
        ],
        outcome: "A digital workforce that handles work your team doesn't have bandwidth for"
    },
    {
        icon: "04",
        title: "Business Intelligence Dashboards",
        subheadline: "Niche-specific · Real-time · Decision-ready.",
        description: "Ditch manual tracking logs. We build visual analytics panels mapping your customer acquisition cost, conversion rate, and revenue pipeline.",
        whatsIncluded: [
            "Custom dashboards built around the exact KPIs your business lives and dies by",
            "Real-time data aggregation from multiple tools, CRMs, ad platforms, and more",
            "Automated reporting delivered to stakeholders on your schedule",
            "Zero manual spreadsheet updates — your numbers are always live and accurate"
        ],
        outcome: "Decisions grounded in reality, not gut feel or yesterday's data"
    },
    {
        icon: "05",
        title: "WhatsApp & Multi-Channel Conversational Automation",
        subheadline: "Meet your customers exactly where they are.",
        description: "Engage clients across chat streams. We deploy intelligent chatbots linking SMS, WhatsApp, and social DMs under one routing engine.",
        whatsIncluded: [
            "Intelligent WhatsApp bots that qualify leads, book calls, and resolve queries",
            "Unified conversational automation across WhatsApp, Instagram DMs, SMS, and web chat",
            "Seamless handoff protocols to human agents when complexity demands it",
            "Broadcast campaigns, drip sequences, and re-engagement flows — fully automated"
        ],
        outcome: "Faster response times, higher conversion rates, and zero missed conversations"
    },
    {
        icon: "06",
        title: "AI Strategy Consulting + Automation Roadmapping",
        subheadline: "Clarity before commitment.",
        description: "We audit your company's workflows to spot operational leakage, preparing an engineering roadmap prioritized by ROI.",
        whatsIncluded: [
            "Deep-dive audit of your current workflows, tools, and automation gaps",
            "Prioritized automation roadmap — sequenced by ROI and implementation complexity",
            "Technology selection guidance so you invest in tools that last",
            "Executive-ready presentation of findings, opportunities, and projected impact"
        ],
        outcome: "A clear, confident path to AI-powered operations — no guesswork, no wasted spend"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-[#0A0A0F] min-h-screen">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />

            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1C1C24] overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} WHAT WE BUILD
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 max-w-4xl tracking-tight"
                    >
                        AI Systems That Work While You Sleep.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-body-lg max-w-2xl leading-relaxed"
                    >
                        We don't sell software templates. We engineer deterministic outcomes. Every solution BoldFlow Labs deploys is designed from first principles around your business — built to eliminate manual friction, compress sales cycles, and recover lost leads.
                    </motion.p>
                </div>
            </section>

            {/* ── SERVICES LIST ────────────────────────── */}
            <section className="py-24 lg:py-32 bg-[#111116] border-b border-[#1C1C24] relative">
                <div className="max-w-[1000px] mx-auto px-6 flex flex-col space-y-24 md:space-y-32 relative z-10">
                    {services.map((svc, index) => (
                        <motion.div
                            key={svc.icon}
                            id={svc.icon}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative scroll-mt-28"
                        >
                             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                 {/* Left: Numbering Matrix */}
                                 <div className="shrink-0 flex items-start">
                                     <div className="text-[48px] md:text-[64px] font-bold text-white/5 font-mono tracking-tighter select-none">
                                         {svc.icon}
                                     </div>
                                 </div>

                                 {/* Right: Content */}
                                 <div className="flex-1 pt-2 md:pt-4">
                                     <h2 className="text-2xl md:text-3xl font-bold font-space text-[#F5F6FA] mb-2 leading-tight">
                                         {svc.title}
                                     </h2>
                                     <h3 className="text-sm font-mono font-bold text-[#0047FF] mb-6 uppercase tracking-wider">
                                         {svc.subheadline}
                                     </h3>
                                     {svc.description && (
                                         <p className="text-sm text-[#A3A3B3] leading-relaxed mb-8">
                                             {svc.description}
                                         </p>
                                     )}
                                     
                                     {/* Micro-Lists & Tags */}
                                     <div className="bg-[#0A0A0F] border border-[#1C1C24] p-6 lg:p-8 mb-4 rounded-[6px]">
                                         <h4 className="text-xs font-mono text-[#0047FF] uppercase tracking-widest mb-4 font-bold">
                                             {"//"} SYSTEM_FEATURES_INCLUDED
                                         </h4>
                                         <ul className="space-y-3 mb-8">
                                             {svc.whatsIncluded.map((item, i) => (
                                                 <li key={i} className="flex items-start gap-3">
                                                     <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                                     <span className="text-[#A3A3B3] text-[14px] leading-relaxed">{item}</span>
                                                 </li>
                                             ))}
                                         </ul>
                                         
                                         <div className="pt-6 border-t border-[#1C1C24]">
                                             <span className="text-[#626272] text-xs font-mono uppercase tracking-wider font-bold">OUTCOME_METRIC: </span>
                                             <span className="text-white text-xs font-space">{svc.outcome}</span>
                                         </div>
                                     </div>
                                     
                                     <div className="mt-8">
                                         <Link href="/contact" className="text-[#FF5A1F] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:gap-3 transition-all inline-flex group">
                                             Discuss this system <ArrowRight className="w-4 h-4" />
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── PAGE CTA ─────────────────────────────── */}
            <section className="py-24 lg:py-32 flex justify-center px-6 bg-[#0A0A0F]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-space text-white mb-6 tracking-tight leading-tight">
                        Not sure which system fits?
                    </h2>
                    
                    <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Book a free call and we'll tell you honestly. We look at your current workflow and give you a straightforward recommendation on what to automate first.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto min-w-[280px] rounded-[4px]">
                            Book a Free Strategy Call
                        </Link>
                        <p className="text-[11px] font-mono text-[#626272] uppercase tracking-wider">
                            ZERO PRESSURE. ZERO OBLIGATIONS.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
