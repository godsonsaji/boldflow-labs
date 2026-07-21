"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, Clock, CalendarRange } from "lucide-react";

const processSteps = [
    { title: "Schedule a Discovery Call", desc: "Confirmed natively within 1 business day via our automated dispatch system." },
    { title: "We Listen Before We Recommend", desc: "We map your specific business processes and operational friction points first." },
    { title: "We Share What We See", desc: "Honest assessment of exactly where automation will drive immediate ROI." },
    { title: "You Decide The Timeline", desc: "Zero hard closes. We propose the technical architecture, you set the pace." }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="bg-[#0A0A0F] min-h-screen">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
            
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1C1C24] overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center text-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} Initialize Transmission
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 max-w-4xl tracking-tight"
                    >
                        Let's Talk About Your Operations.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg max-w-2xl"
                    >
                        Real conversations. Zero corporate sales narrative. Secure your free 30-minute system diagnostic and discover if voice or text automation is right for you.
                    </motion.p>
                </div>
            </section>

            {/* ── MAIN LAYOUT ──────────────────────────── */}
            <section className="py-24 bg-[#111116] border-b border-[#1C1C24] relative">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                    {/* Left: Info & Process */}
                    <div className="flex flex-col gap-12">
                        <div className="bg-[#0A0A0F] border border-[#1C1C24] p-8 md:p-10 relative flex flex-col gap-6 rounded-[6px]">
                            <h3 className="text-lg font-bold font-space text-[#F5F6FA]">Direct Channels</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="p-2.5 bg-[#111116] border border-[#1C1C24] rounded-sm text-[#0047FF] shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-[#626272] uppercase font-mono tracking-wider block mb-1">Email:</span>
                                        <a href="mailto:hello@boldflowlabs.com" className="text-lg font-mono text-[#F5F6FA] hover:text-[#0047FF] transition-colors">hello@boldflowlabs.com</a>
                                    </div>
                                </li>
                                <li className="pt-6 border-t border-[#1C1C24] flex gap-4 items-start">
                                    <div className="p-2.5 bg-[#111116] border border-[#1C1C24] rounded-sm text-[#FF5A1F] shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-[#626272] uppercase font-mono tracking-wider block mb-1">Response Time:</span>
                                        <span className="text-sm font-space text-white block">Confirmed in under 1 business day</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-8">What happens next?</h3>
                            <div className="relative pl-8 border-l border-[#1C1C24] space-y-10 py-2">
                                {processSteps.map((p, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute left-[-37px] top-1.5 w-2 h-2 rounded-full bg-[#0047FF] ring-4 ring-[#111116]" />
                                        <span className="text-white font-bold font-space mb-2 block">{i + 1}. {p.title}</span>
                                        <p className="text-xs text-[#A3A3B3] leading-relaxed max-w-md">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div>
                        <div className="bg-[#0A0A0F] border border-[#1C1C24] p-8 md:p-12 relative group hover:border-[#0047FF]/20 transition-all duration-300 rounded-[8px] shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,71,255,0.03),transparent_70%)]" />
                            
                            <h3 className="text-xl font-bold font-space text-white tracking-tight mb-8">Request a Diagnostic</h3>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex flex-col relative w-full">
                                            <label className="text-xs font-mono text-[#626272] uppercase mb-2 pointer-events-none">Full Name *</label>
                                            <input required type="text" className="w-full bg-[#111116] border border-[#1C1C24] p-4 text-[#F5F6FA] text-sm rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors" placeholder="e.g. John Doe" />
                                        </div>
                                        <div className="flex flex-col relative w-full">
                                            <label className="text-xs font-mono text-[#626272] uppercase mb-2 pointer-events-none">Work Email *</label>
                                            <input required type="email" className="w-full bg-[#111116] border border-[#1C1C24] p-4 text-[#F5F6FA] text-sm rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors" placeholder="e.g. name@company.com" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col relative w-full">
                                        <label className="text-xs font-mono text-[#626272] uppercase mb-2 pointer-events-none">Company Name</label>
                                        <input type="text" className="w-full bg-[#111116] border border-[#1C1C24] p-4 text-[#F5F6FA] text-sm rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors" placeholder="e.g. Acme Corp Infrastructure" />
                                    </div>

                                    <div className="flex flex-col relative w-full">
                                        <label className="text-xs font-mono text-[#626272] uppercase mb-2 pointer-events-none">What do you need help with?</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#111116] border border-[#1C1C24] p-4 text-[#F5F6FA] text-sm rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors appearance-none cursor-pointer">
                                                <option value="lead_followup">Automated Inbound Receptionist</option>
                                                <option value="outbound">Outbound Lead Reactivation</option>
                                                <option value="scheduling">CRM Scheduling Integrations</option>
                                                <option value="custom_workflow">Custom Internal Workflows</option>
                                                <option value="unsure">Not sure, I need guidance</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#626272] text-[10px]">▼</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col relative w-full mb-4">
                                        <label className="text-xs font-mono text-[#626272] uppercase mb-2 pointer-events-none">Tell us about your current bottlenecks (Optional)</label>
                                        <textarea rows={4} className="w-full bg-[#111116] border border-[#1C1C24] p-4 text-[#F5F6FA] text-sm rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors resize-none" placeholder="Provide some context on where you're losing time or leads..." />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-[#0047FF] hover:bg-[#1E5CFF] text-white font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center transition-colors rounded-[4px] shadow-lg">
                                        {isSubmitting ? (
                                            <span className="animate-pulse">Sending Request...</span>
                                        ) : (
                                            <span className="flex items-center gap-2">Book My Free Strategy Call <ArrowRight className="w-4 h-4" /></span>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-[#0047FF] mb-6" />
                                    <h4 className="text-xl font-bold font-space text-[#F5F6FA] mb-4">Request Received</h4>
                                    <p className="text-[#A3A3B3] text-sm leading-relaxed max-w-sm mb-8">
                                        Thank you for reaching out. We will review your details and send you a link to book your strategy call within 1 business day.
                                    </p>
                                    <button onClick={() => setIsSubmitted(false)} className="text-[#FF5A1F] font-mono text-xs uppercase tracking-wider font-bold hover:underline">
                                        Submit another request
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
