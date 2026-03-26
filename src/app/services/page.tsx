"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: "01",
        title: "AI Voice Agent Development",
        subheadline: "Inbound + Outbound · Available 24/7 · No hiring, no burnout.",
        description: "",
        whatsIncluded: [
            "Deploy intelligent voice agents that answer, qualify, and close — around the clock",
            "Outbound agents that prospect, follow up, and book meetings without a human on the line",
            "Natural conversation flows trained on your scripts, tone, and objection-handling logic",
            "Full call logging, transcription, and CRM sync after every interaction"
        ],
        outcome: "A tireless sales rep that scales infinitely and costs a fraction of a human hire"
    },
    {
        icon: "02",
        title: "End-to-End CRM + Sales Pipeline Automation",
        subheadline: "From first touch to closed deal — fully automated.",
        description: "",
        whatsIncluded: [
            "Instant lead capture and enrichment from every channel you operate on",
            "Intelligent follow-up sequences that adapt based on lead behaviour and intent signals",
            "Automatic deal progression, task creation, and pipeline health alerts",
            "CRM hygiene maintained without manual data entry — ever"
        ],
        outcome: "A sales pipeline that moves itself, so your team closes instead of chasing"
    },
    {
        icon: "03",
        title: "Autonomous AI Agent Development",
        subheadline: "Custom-built agents that reason, decide, and act.",
        description: "",
        whatsIncluded: [
            "Multi-step agentic workflows that handle complex, non-linear business processes",
            "Agents that browse, retrieve, synthesise, and act on real-time data",
            "Built on modern LLM + tool-use frameworks — designed for durability and scale",
            "Seamless integration with your existing stack, APIs, and data sources"
        ],
        outcome: "A digital workforce that handles work your team doesn't have bandwidth for"
    },
    {
        icon: "04",
        title: "Business Intelligence Dashboards",
        subheadline: "Niche-specific · Real-time · Decision-ready.",
        description: "",
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
        description: "",
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
        description: "",
        whatsIncluded: [
            "Deep-dive audit of your current workflows, tools, and automation gaps",
            "Prioritised automation roadmap — sequenced by ROI and implementation complexity",
            "Technology selection guidance so you invest in tools that last",
            "Executive-ready presentation of findings, opportunities, and projected impact"
        ],
        outcome: "A clear, confident path to AI-powered operations — no guesswork, no wasted spend"
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0066ff]/5 via-[#0A0A0A] to-[#0A0A0A] -z-10" />

                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                    >
                        WHAT WE BUILD
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium tracking-tight leading-tight mb-8 max-w-4xl"
                    >
                        AI Systems That Work While You Sleep.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl leading-relaxed"
                    >
                        We don't sell software. We engineer outcomes. Every solution BoldFlow Labs deploys is designed from first principles around your business — built to eliminate friction, compress sales cycles, and unlock the kind of growth that compounds over time.
                    </motion.p>
                </div>
            </section>

            {/* ── SERVICES LIST ────────────────────────── */}
            <section className="py-24 lg:py-32 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1000px] mx-auto px-6 flex flex-col space-y-24 md:space-y-32">
                    {services.map((svc, index) => (
                        <motion.div
                            key={svc.icon}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative"
                        >
                             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                 {/* Left: Numbering Matrix */}
                                 <div className="shrink-0 flex items-start">
                                     <div className="text-[48px] md:text-[64px] font-medium text-[#1A1A1A] font-mono tracking-tighter select-none">
                                         {svc.icon}
                                     </div>
                                 </div>

                                 {/* Right: Content */}
                                 <div className="flex-1 pt-2 md:pt-4">
                                     <h2 className="text-[28px] md:text-[32px] font-medium text-[#F5F5F5] mb-2 leading-tight">
                                         {svc.title}
                                     </h2>
                                     <h3 className="text-[18px] font-medium text-[#0066ff] mb-6">
                                         {svc.subheadline}
                                     </h3>
                                     {svc.description && (
                                         <p className="text-[16px] text-[#A3A3A3] leading-relaxed mb-8">
                                             {svc.description}
                                         </p>
                                     )}
                                     
                                     {/* Micro-Lists & Tags */}
                                     <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 lg:p-8 mb-4">
                                         <h4 className="text-[#F5F5F5] font-medium mb-4 flex items-center gap-2">
                                             What's included:
                                         </h4>
                                         <ul className="space-y-3 mb-8">
                                             {svc.whatsIncluded.map((item, i) => (
                                                 <li key={i} className="flex items-start gap-3">
                                                     <CheckCircle2 className="w-5 h-5 text-[#0066ff] shrink-0" />
                                                     <span className="text-[#A3A3A3] text-[15px]">{item}</span>
                                                 </li>
                                             ))}
                                         </ul>
                                         
                                         <div className="pt-6 border-t border-[#1A1A1A]">
                                             <span className="text-[#71717A] text-[14px] uppercase tracking-wider font-medium">Outcome: </span>
                                             <span className="text-[#E5E5E5] text-[14px]">{svc.outcome}</span>
                                         </div>
                                     </div>
                                     
                                     {/* Soft CTA injected after every 2 services (or individually, but keeping it clean at the bottom of the card is nice) */}
                                     <div className="mt-8">
                                         <Link href="/contact" className="text-[#0066ff] font-medium text-[15px] flex items-center gap-2 hover:gap-3 transition-all inline-flex">
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
            <section className="py-24 lg:py-32 flex justify-center px-6 bg-[#0A0A0A]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium text-[#F5F5F5] mb-6 tracking-tight leading-tight">
                        Not sure which service fits?
                    </h2>
                    
                    <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Book a free call and we'll tell you honestly. We look at your current workflow and give you a straightforward recommendation on what to automate first.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-[16px] text-center w-full sm:w-auto min-w-[280px]">
                            Book a Free Strategy Call
                        </Link>
                        <p className="text-[14px] text-[#71717A]">
                            Zero pressure. Zero obligations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
