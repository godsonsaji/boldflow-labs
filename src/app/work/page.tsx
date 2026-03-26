"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const placeholders = [
    {
        industry: "Real Estate Brokerage",
        system: "Lead Nurture & Agent Routing",
        status: "In Development",
        date: "Launching Q4"
    },
    {
        industry: "Home Services Franchise",
        system: "Unified Dispatch & Scheduling AI",
        status: "In Development",
        date: "Launching Q4"
    },
    {
        industry: "DTC E-Commerce",
        system: "24/7 AI Support Escalation Flow",
        status: "In Development",
        date: "Launching Q1"
    }
];

export default function WorkPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                    >
                        Our Work
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium leading-[1.1] mb-8 max-w-4xl tracking-tight"
                    >
                        We Are Currently Building For Our Founding Cohort.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light mb-4 leading-relaxed"
                    >
                        BoldFlow Labs is in its early stages. Instead of inventing fake case studies with imaginary ROI, we are being completely transparent: Our first major client deployments are being architected right now.
                    </motion.p>
                </div>
            </section>

            {/* ── PLACEHOLDERS ─────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[1280px] mx-auto px-6">
                     <h2 className="text-[24px] font-medium text-[#F5F5F5] mb-12">Systems In Deployment</h2>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {placeholders.map((p, i) => (
                             <div key={i} className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 flex flex-col justify-between">
                                 <div>
                                     <div className="flex justify-between items-start mb-6 border-b border-[#1A1A1A] pb-6">
                                         <span className="text-[12px] uppercase font-medium tracking-wider text-[#A3A3A3]">{p.industry}</span>
                                         <span className="text-[11px] uppercase font-medium tracking-wider text-[#0066ff] bg-[#0066ff]/10 px-2 py-1">{p.status}</span>
                                     </div>
                                     <h3 className="text-xl font-medium text-[#F5F5F5] mb-4">{p.system}</h3>
                                 </div>
                                 <div className="pt-8">
                                     <span className="text-[14px] text-[#71717A]">{p.date}</span>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </section>

            {/* ── FOUNDING CLIENT OFFER ────────────────── */}
            <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                 <div className="max-w-[1000px] mx-auto px-6">
                     <div className="bg-[#050505] border border-[#0066ff]/30 p-10 md:p-16 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.1),transparent_70%)] pointer-events-none" />
                         
                         <div className="relative z-10">
                             <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight mb-6">
                                 The Founding Client Programme
                             </h2>
                             <p className="text-[16px] text-[#A3A3A3] leading-relaxed mb-10 max-w-2xl">
                                 Because we are building our portfolio, our first 5 clients receive an unprecedented level of engineering attention, scope flexibility, and highly favorable pricing in exchange for allowing us to document and share the results of the system build.
                             </p>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                 <div className="flex items-start gap-4">
                                     <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                                     <div>
                                         <span className="block text-[#F5F5F5] font-medium mb-1">Architect-Level Access</span>
                                         <span className="text-sm text-[#A3A3A3] leading-relaxed block">Direct collaboration with our founder, completely bypassing junior developers or account managers.</span>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                                     <div>
                                         <span className="block text-[#F5F5F5] font-medium mb-1">Over-Delivered Scope</span>
                                         <span className="text-sm text-[#A3A3A3] leading-relaxed block">We will build features outside the original contract if they guarantee a stronger case study outcome.</span>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                                     <div>
                                         <span className="block text-[#F5F5F5] font-medium mb-1">At-Cost Setup Fees</span>
                                         <span className="text-sm text-[#A3A3A3] leading-relaxed block">Significantly reduced deployment costs designed to remove friction, not maximize agency profit.</span>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                                     <div>
                                         <span className="block text-[#F5F5F5] font-medium mb-1">Lifetime 0% Retainer Hike</span>
                                         <span className="text-sm text-[#A3A3A3] leading-relaxed block">Your monthly maintenance tier is permanently locked in, regardless of how complex your system becomes.</span>
                                     </div>
                                 </div>
                             </div>

                             <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066ff] hover:bg-[#0055dd] text-white font-medium transition-colors">
                                 Apply to be a Founding Client <ArrowRight className="w-4 h-4" />
                             </Link>
                         </div>
                     </div>
                 </div>
            </section>
        </>
    );
}
