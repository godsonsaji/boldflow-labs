"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: "01",
        title: "Automated Lead Follow-Up & CRM Routing",
        subheadline: "Never Let a Hot Lead Go Cold Again",
        description: "Intelligent follow-up systems that engage new enquiries instantly, nurture prospects through multi-step sequences, update your CRM in real time, and escalate sales-ready leads to your team.",
        whatsIncluded: [
            "Instant multi-channel response (SMS/Email)",
            "Automated prospect qualification sequences",
            "Real-time CRM sync and pipeline updates"
        ],
        bestFor: "Real estate agencies, clinics, remodeling contractors"
    },
    {
        icon: "02",
        title: "Customer Support Automation",
        subheadline: "24/7 Customer Engagement — Without Expanding Your Team",
        description: "Purpose-built conversational systems trained on your business data and tone to resolve routine queries, capture leads, and escalate complex issues gracefully to human staff.",
        whatsIncluded: [
            "Custom knowledge base integration",
            "Omnichannel deployment (Web, WhatsApp, FB)",
            "Seamless human-handoff protocols"
        ],
        bestFor: "E-commerce stores, SaaS companies, high-volume service desks"
    },
    {
        icon: "03",
        title: "Smart Scheduling Systems",
        subheadline: "Fill Your Calendar Automatically. Eliminate No-Shows.",
        description: "End-to-end scheduling flows with instant booking and dynamic, multi-channel reminders that dramatically reduce cancellations and admin overhead.",
        whatsIncluded: [
            "Two-way calendar syncing",
            "Automated confirmation and reminder flows",
            "Self-serve rescheduling links"
        ],
        bestFor: "Coaches, consultants, personal trainers, medical clinics"
    },
    {
        icon: "04",
        title: "Social Media & Content Pipelines",
        subheadline: "Consistent Presence. Zero Manual Posting.",
        description: "Content automation systems that keep your brand active across platforms, repurposing your core assets intelligently and scheduling them for maximum reach.",
        whatsIncluded: [
            "Automated cross-platform formatting",
            "AI-assisted draft generation",
            "Approval workflows before publishing"
        ],
        bestFor: "Marketing agencies, creators, local authority brands"
    },
    {
        icon: "05",
        title: "Automated Reporting Dashboards",
        subheadline: "Real-Time Intelligence. No More Spreadsheet Scuttling.",
        description: "Automated reporting systems that aggregate data across your tools and surface KPIs the moment they change, eliminating hours of manual data entry.",
        whatsIncluded: [
            "Cross-platform data aggregation",
            "Custom outcome-focused visual dashboards",
            "Automated weekly digest emails"
        ],
        bestFor: "Agency owners, fractional executives, multi-location businesses"
    },
    {
        icon: "06",
        title: "Bespoke System Workflows",
        subheadline: "When Off-the-Shelf Tools Aren't Enough",
        description: "Fully custom workflow architectures built from scratch to handle multi-step, complex operational procedures completely unique to your business.",
        whatsIncluded: [
            "Deep API integrations",
            "Custom business logic implementation",
            "Full architectural documentation"
        ],
        bestFor: "Mid-market operators with highly specific, non-standard operations"
    },
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
                        What We Build
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium tracking-tight leading-tight mb-8 max-w-4xl"
                    >
                        Replace Manual Work<br />With Reliable Systems.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl leading-relaxed"
                    >
                        We design and build the exact automations your business needs to scale operations without adding headcount.
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
                                     <p className="text-[16px] text-[#A3A3A3] leading-relaxed mb-8">
                                         {svc.description}
                                     </p>
                                     
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
                                             <span className="text-[#71717A] text-[14px] uppercase tracking-wider font-medium">Best for: </span>
                                             <span className="text-[#E5E5E5] text-[14px]">{svc.bestFor}</span>
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
