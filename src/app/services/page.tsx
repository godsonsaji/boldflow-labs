"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        icon: "01",
        title: "AI-Powered Lead Follow-Up & CRM Automation",
        subheadline: "Never Let a Hot Lead Go Cold Again",
        description: "Intelligent follow-up systems that engage new enquiries instantly, nurture prospects through multi-step sequences, update CRM in real time, and escalate sales-ready leads automatically.",
    },
    {
        icon: "02",
        title: "AI Chatbot & Customer Support Automation",
        subheadline: "24/7 Customer Engagement — Without Expanding Your Team",
        description: "Purpose-built conversational agents trained on your business, tone, and processes — resolving queries, capturing leads, qualifying prospects, escalating complex issues, across every channel.",
    },
    {
        icon: "03",
        title: "Automated Appointment Booking & Reminder Systems",
        subheadline: "Fill Your Calendar Automatically. Eliminate No-Shows.",
        description: "End-to-end scheduling systems with instant booking, multi-channel reminders, and automated rescheduling that dramatically reduce cancellations.",
    },
    {
        icon: "04",
        title: "Social Media & Content Automation",
        subheadline: "Consistent Presence. Zero Manual Posting.",
        description: "Content automation systems that keep your brand active across platforms, repurpose assets intelligently, and schedule for maximum reach — with AI-assisted generation.",
    },
    {
        icon: "05",
        title: "Automated Reporting & Business Dashboards",
        subheadline: "Real-Time Intelligence. No More Manual Reporting.",
        description: "Automated reporting systems and real-time dashboards that surface KPIs the moment they change — sales views, attribution reports, operational trackers.",
    },
    {
        icon: "06",
        title: "Custom AI Workflows & AI Voice Agents",
        subheadline: "When Off-the-Shelf Automation Isn't Enough",
        description: "Fully custom AI workflows and voice agents built from scratch — inbound call handling, outbound follow-up, multi-step orchestration across your entire tech stack.",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="absolute inset-0 radial-glow opacity-30 z-0" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />

                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} WHAT WE BUILD
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-tight mb-8 max-w-5xl"
                    >
                        Stop Doing Manually<br/>What Intelligent<br/>Systems Can Do Better.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light"
                    >
                        Every service starts with one question — where is manual work costing you time, money, and momentum?
                    </motion.p>
                </div>
            </section>

            {/* ── SERVICES LIST ────────────────────────── */}
            <section className="py-32 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="max-w-[1000px] mx-auto px-6 flex flex-col space-y-24">
                    {services.map((svc) => (
                        <motion.div
                            key={svc.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            className="relative"
                        >
                             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                 {/* Left: Numbering Matrix */}
                                 <div className="shrink-0 flex items-start">
                                     <div className="text-[64px] font-medium leading-[0.8] text-[#525252] font-mono tracking-tighter">
                                         {svc.icon}
                                     </div>
                                 </div>

                                 {/* Right: Content */}
                                 <div className="flex-1 pt-2">
                                     <div className="target-hex target-hex-left-top hidden md:block" />
                                     <h2 className="text-h3 text-[#F5F5F5] uppercase mb-4 leading-tight">
                                         {svc.title}
                                     </h2>
                                     <h3 className="text-body-lg text-[#0066ff] mb-6">
                                         {svc.subheadline}
                                     </h3>
                                     <p className="text-body text-[#A3A3A3] leading-relaxed">
                                         {svc.description}
                                     </p>
                                 </div>
                             </div>
                        </motion.div>
                    ))}
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
                    <div className="target-hex target-hex-right-top" />
                    <div className="target-hex target-hex-left-bottom" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-12 leading-tight">
                            SYSTEMS AWAITING DEPLOYMENT.
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-left mb-12 border-l border-[#0066ff] pl-6 max-w-sm mx-auto">
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Free, no-obligation workflow diagnostic</span>
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Actionable clarity regardless of next steps</span>
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Limited discovery spots each quarter</span>
                        </div>

                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                            SCHEDULE YOUR FREE STRATEGY CALL
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
