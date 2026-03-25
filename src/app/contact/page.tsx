"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";

const process = [
    { title: "Schedule a Discovery Call", desc: "Confirmed natively within 1 business day via our automated dispatch system." },
    { title: "We Listen Before We Recommend", desc: "We map your specific business processes and operational friction points first." },
    { title: "We Share What We See", desc: "Honest assessment of exactly where automation will drive immediate ROI." },
    { title: "You Decide The Vector", desc: "Zero hard closes. We propose the technical architecture, you set the pace." }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Using a fake action for frontend logic as requested by static build constraint
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000); // Simulate API latency
    };

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                <div className="absolute inset-0 radial-glow opacity-30 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center text-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} INITIATE DEPLOYMENT
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-[0.95] mb-8 max-w-5xl tracking-tighter"
                    >
                        Let&apos;s map<br/>your infrastructure.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#F5F5F5] font-medium max-w-2xl mb-4"
                    >
                        Real conversation. Zero sales narrative. Secure your free 30-minute system diagnostic.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-body text-[#A3A3A3] max-w-2xl font-light"
                    >
                        We will brutally review your internal workflows, identify precise automation opportunities, and provide an honest architectural assessment. No pressure. No obligation. Pure clarity.
                    </motion.p>
                </div>
            </section>

            {/* ── MAIN LAYOUT ──────────────────────────── */}
            <section className="py-24 bg-[#050505]">
                 <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
                     
                     {/* Left: Info & Process */}
                     <div className="flex flex-col gap-16">
                         <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-10 relative">
                             <div className="target-hex target-hex-left-top" />
                             
                             <div className="text-label text-[#0066ff] mb-8">{"//"} COMMS_CHANNELS</div>
                             <ul className="space-y-6">
                                 <li>
                                     <span className="text-caption text-[#525252] uppercase block mb-1">Email Endpoint:</span>
                                     <a href="mailto:boldflowlabs@gmail.com" className="text-body-lg text-[#F5F5F5] hover:text-[#0066ff] transition-colors">boldflowlabs@gmail.com</a>
                                 </li>
                                 <li>
                                     <span className="text-caption text-[#525252] uppercase block mb-1">Direct Voice:</span>
                                     <a href="tel:+919447178166" className="text-body-lg text-[#F5F5F5] font-mono hover:text-[#0066ff] transition-colors">+91-9447178166</a>
                                 </li>
                                 <li className="pt-4 border-t border-[#1A1A1A]">
                                     <span className="text-caption text-[#525252] uppercase block mb-1">Guaranteed SLA:</span>
                                     <div className="inline-flex items-center gap-2 border border-[rgba(0,102,255,0.2)] bg-[rgba(0,102,255,0.05)] px-3 py-1.5 mt-2">
                                         <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full animate-pulse-dot" />
                                         <span className="text-label text-[#F5F5F5] uppercase tracking-widest mt-0.5">{"< 24"} HOUR RESPONSE</span>
                                     </div>
                                 </li>
                             </ul>
                         </div>

                         <div>
                             <div className="text-label text-[#71717A] mb-8">{"//"} POST-TRANSMISSION SEQUENCE</div>
                             <div className="relative pl-8 border-l border-[#1A1A1A] space-y-12 py-2">
                                 {process.map((p, i) => (
                                     <div key={i} className="relative">
                                         <div className="absolute left-[-37px] top-1.5 w-2 h-2 rounded-full bg-[#0A0A0A] border border-[#525252]" />
                                         <span className="text-[#0066ff] font-mono text-label mb-2 block">PHASE 0{i+1}: {p.title}</span>
                                         <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-md">{p.desc}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>

                     {/* Right: The Terminal Form */}
                     <div>
                         <div className="bg-[#050505] border border-[#1A1A1A] p-10 lg:p-14 relative group hover:border-[#333] transition-colors duration-300">
                             <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                             
                             <div className="text-label text-[#0066ff] mb-12">{"//"} SYSTEM_INPUT_FORM</div>

                             <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                     <div className="flex flex-col relative w-full">
                                         <label className="text-caption font-mono uppercase text-[#71717A] mb-2 pointer-events-none">NAME_PAYLOAD *</label>
                                         <input required type="text" className="w-full bg-[#0A0A0A] border border-[#1A1A1A] p-4 text-[#F5F5F5] font-mono text-[13px] rounded-none focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. John Doe" />
                                     </div>
                                     <div className="flex flex-col relative w-full">
                                         <label className="text-caption font-mono uppercase text-[#71717A] mb-2 pointer-events-none">EMAIL_NODE *</label>
                                         <input required type="email" className="w-full bg-[#0A0A0A] border border-[#1A1A1A] p-4 text-[#F5F5F5] font-mono text-[13px] rounded-none focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. comms@domain.com" />
                                     </div>
                                 </div>

                                 <div className="flex flex-col relative w-full">
                                     <label className="text-caption font-mono uppercase text-[#71717A] mb-2 pointer-events-none">ORGANISATION_ID</label>
                                     <input type="text" className="w-full bg-[#0A0A0A] border border-[#1A1A1A] p-4 text-[#F5F5F5] font-mono text-[13px] rounded-none focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. Acme Corp Infrastructure" />
                                 </div>

                                 <div className="flex flex-col relative w-full">
                                     <label className="text-caption font-mono uppercase text-[#71717A] mb-2 pointer-events-none">PRIMARY_VECTOR_INTEREST</label>
                                     <select className="w-full bg-[#0A0A0A] border border-[#1A1A1A] p-4 text-[#F5F5F5] font-mono text-[13px] rounded-none focus:outline-none focus:border-[#0066ff] transition-colors appearance-none cursor-pointer">
                                         <option value="AI Chatbots & Conversational Agents">AI Chatbots & Conversational Agents</option>
                                         <option value="Intelligent Workflow Automation">Intelligent Workflow Automation</option>
                                         <option value="Predictive Analytics & Reports">Predictive Analytics & AI-Powered Insights</option>
                                         <option value="Custom AI Solutions">Custom AI Solutions & Model Development</option>
                                         <option value="Guidance Needed">Not Sure — Need Architectural Guidance</option>
                                     </select>
                                     <div className="absolute right-4 bottom-4 pointer-events-none text-[#525252] font-mono">▼</div>
                                 </div>

                                 <div className="flex flex-col relative w-full mb-4">
                                     <label className="text-caption font-mono uppercase text-[#71717A] mb-2 pointer-events-none">DIAGNOSTIC_CONTEXT (OPTIONAL)</label>
                                     <textarea rows={5} className="w-full bg-[#0A0A0A] border border-[#1A1A1A] p-4 text-[#F5F5F5] font-mono text-[13px] rounded-none focus:outline-none focus:border-[#0066ff] transition-colors resize-none" placeholder="Provide raw context on your current operational bottlenecks..." />
                                 </div>

                                 <button type="submit" disabled={isSubmitting} className="w-full py-5 btn-primary font-medium text-sm text-center tracking-wide flex items-center justify-center relative overflow-hidden group">
                                     {isSubmitting ? (
                                         <span className="font-mono text-[13px] tracking-widest text-[#F5F5F5] animate-pulse">TRANSMITTING_PAYLOAD...</span>
                                     ) : (
                                         <span>INITIALIZE TRANSMISSION</span>
                                     )}
                                     <span className="absolute inset-0 w-full h-full bg-[#0066ff] opacity-0 group-hover:opacity-[0.05] transition-opacity" />
                                 </button>
                             </form>
                         </div>
                     </div>
                 </div>
            </section>
        </>
    );
}
