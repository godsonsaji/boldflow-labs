"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Crosshair, Wrench, Rocket } from "lucide-react";

const processSteps = [
    {
        icon: <Crosshair className="w-6 h-6 text-[#0066ff]" />,
        title: "01. Discovery & Diagnostic",
        timeline: "Days 1-2",
        desc: "We don't guess. We map your current manual operations line by line to locate exactly where you are losing hours and leaking margins. If automation won't yield a 3x ROI on your time or money, we will tell you not to hire us."
    },
    {
        icon: <Wrench className="w-6 h-6 text-[#0066ff]" />,
        title: "02. Logic & Architecture Design",
        timeline: "Days 3-5",
        desc: "Before we write a single line of code, we deliver a comprehensive blueprint. This outlines the exact tools we'll use, the API endpoints we'll connect, and the precise logic pathways the system will follow. You approve the map before we build the road."
    },
    {
        icon: <ShieldAlert className="w-6 h-6 text-[#0066ff]" />,
        title: "03. Build & Rigorous Testing",
        timeline: "Weeks 2-4",
        desc: "We develop the automations in an isolated staging environment. We then deliberately attempt to break the system using extreme edge-cases to ensure it handles real-world chaos gracefully without dropping customer data."
    },
    {
        icon: <Rocket className="w-6 h-6 text-[#0066ff]" />,
        title: "04. Go-Live & Handover",
        timeline: "Week 5+",
        desc: "We deploy the systems directly into your live operational flow. We train your team on how to interact with it, provide full documentation, and immediately transition into our active monitoring phase to ensure uptime."
    }
];

const neverDoList = [
    "We will never outsource your build to generic offshore factories.",
    "We will never lock you into proprietary code you cannot export.",
    "We will never recommend AI tools that are merely 'trendy' but practically useless.",
    "We will never charge you for a discovery call or a proposal.",
    "We will never ghost you after an invoice is paid."
];

export default function WhatToExpectPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                    >
                        How We Work
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight"
                    >
                        Deterministic Delivery.<br/>Zero Guesswork.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl mx-auto font-light mb-4 leading-relaxed"
                    >
                        Our engineering pipeline relies on strict, predictable sprints. Here is the exact lifecycle of a BoldFlow Labs engagement from the first handshake to the live deployment.
                    </motion.p>
                </div>
            </section>

            {/* ── TIMELINE ─────────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[800px] mx-auto px-6 relative">
                     <div className="absolute top-0 bottom-0 left-[41px] md:left-[51px] w-[1px] bg-[#1A1A1A] z-0 hidden sm:block" />
                     
                     <div className="flex flex-col gap-16 relative z-10">
                         {processSteps.map((step, i) => (
                             <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
                                 <div className="w-14 h-14 shrink-0 bg-[#0A0A0A] border border-[#333333] rounded-full flex items-center justify-center shadow-[0_0_0_8px_#050505]">
                                     {step.icon}
                                 </div>
                                 <div className="pt-2">
                                     <div className="text-[12px] uppercase tracking-wider font-medium text-[#0066ff] mb-2">{step.timeline}</div>
                                     <h3 className="text-[24px] font-medium text-[#F5F5F5] mb-4">{step.title}</h3>
                                     <p className="text-[16px] text-[#A3A3A3] leading-relaxed">{step.desc}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </section>

            {/* ── WHAT WE NEVER DO ─────────────────────── */}
            <section className="py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[32px] font-medium text-[#F5F5F5] tracking-tight mb-8">
                            A strict adherence to <br/>engineering integrity.
                        </h2>
                        <p className="text-[#A3A3A3] text-[16px] leading-relaxed max-w-lg mb-8">
                            Trust in this industry is notoriously low. We offset that by enforcing a rigid operational code of conduct. These are our non-negotiables.
                        </p>
                    </div>
                    
                    <div className="bg-[#050505] border border-[#1A1A1A] p-10">
                        <ul className="space-y-6">
                            {neverDoList.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start pb-6 border-b border-[#1A1A1A] last:border-b-0 last:pb-0">
                                    <div className="text-[#333333] font-medium">✕</div>
                                    <div className="text-[#E5E5E5] text-[15px]">{item}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────── */}
            <section className="py-32 flex justify-center px-6 bg-[#050505] border-b border-[#1A1A1A]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium text-[#F5F5F5] mb-6 tracking-tight leading-tight">
                        Ready to start Phase 01?
                    </h2>
                    <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Book a free discovery call. We'll map your current workflow bottlenecks and tell you exactly what an automated system looks like for you.
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
