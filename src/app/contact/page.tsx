"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const process = [
    { title: "Schedule a Discovery Call", desc: "Confirmed natively within 1 business day via our automated dispatch system." },
    { title: "We Listen Before We Recommend", desc: "We map your specific business processes and operational friction points first." },
    { title: "We Share What We See", desc: "Honest assessment of exactly where automation will drive immediate ROI." },
    { title: "You Decide The Timeline", desc: "Zero hard closes. We propose the technical architecture, you set the pace." }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Using a fake action for frontend logic as requested by static build constraint,
    // though real n8n webhook could be placed here.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500); 
    };

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center text-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                    >
                        Contact Us
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium leading-[1.1] mb-8 max-w-4xl tracking-tight"
                    >
                        Let's Talk About<br/>Your Business.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light leading-relaxed"
                    >
                        Real conversation. Zero sales narrative. Secure your free 30-minute system diagnostic and find out if automation is right for you.
                    </motion.p>
                </div>
            </section>

            {/* ── MAIN LAYOUT ──────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                     
                     {/* Left: Info & Process */}
                     <div className="flex flex-col gap-16">
                         <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-10 md:p-12 relative flex flex-col gap-8">
                             <h3 className="text-xl font-medium text-[#F5F5F5]">Direct Channels</h3>
                             <ul className="space-y-6">
                                 <li>
                                     <span className="text-[13px] text-[#71717A] uppercase font-medium tracking-wider block mb-2">Email:</span>
                                     <a href="mailto:hello@boldflowlabs.com" className="text-[18px] text-[#F5F5F5] hover:text-[#0066ff] transition-colors">hello@boldflowlabs.com</a>
                                 </li>
                                 <li>
                                     <span className="text-[13px] text-[#71717A] uppercase font-medium tracking-wider block mb-2">Phone:</span>
                                     <a href="tel:+1234567890" className="text-[18px] text-[#F5F5F5] hover:text-[#0066ff] transition-colors">+1 (234) 567-890</a>
                                 </li>
                                 <li className="pt-6 border-t border-[#1A1A1A]">
                                     <span className="text-[13px] text-[#71717A] uppercase font-medium tracking-wider block mb-3">Response Time:</span>
                                     <div className="inline-flex items-center gap-2 bg-[#0066ff]/10 text-[#0066ff] text-[13px] font-medium px-4 py-2 uppercase tracking-wider">
                                         Less than 1 business day
                                     </div>
                                 </li>
                             </ul>
                         </div>

                         <div>
                             <h3 className="text-[18px] font-medium text-[#F5F5F5] mb-8">What happens next?</h3>
                             <div className="relative pl-8 border-l border-[#1A1A1A] space-y-10 py-2">
                                 {process.map((p, i) => (
                                     <div key={i} className="relative">
                                         <div className="absolute left-[-37px] top-1.5 w-2 h-2 rounded-full bg-[#0066ff] ring-4 ring-[#050505]" />
                                         <span className="text-[#F5F5F5] font-medium mb-2 block">{i+1}. {p.title}</span>
                                         <p className="text-[15px] text-[#A3A3A3] leading-relaxed max-w-md">{p.desc}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>

                     {/* Right: The Form */}
                     <div>
                         <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-10 lg:p-14 relative group hover:border-[#333333] transition-colors duration-300">
                             
                             <h3 className="text-[24px] font-medium text-[#F5F5F5] tracking-tight mb-10">Request a Diagnostic</h3>

                             {!isSubmitted ? (
                                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                         <div className="flex flex-col relative w-full">
                                             <label className="text-[13px] font-medium text-[#A3A3A3] mb-2 pointer-events-none">Full Name *</label>
                                             <input required type="text" className="w-full bg-[#050505] border border-[#333333] p-4 text-[#F5F5F5] text-[15px] focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. John Doe" />
                                         </div>
                                         <div className="flex flex-col relative w-full">
                                             <label className="text-[13px] font-medium text-[#A3A3A3] mb-2 pointer-events-none">Work Email *</label>
                                             <input required type="email" className="w-full bg-[#050505] border border-[#333333] p-4 text-[#F5F5F5] text-[15px] focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. name@company.com" />
                                         </div>
                                     </div>

                                     <div className="flex flex-col relative w-full">
                                         <label className="text-[13px] font-medium text-[#A3A3A3] mb-2 pointer-events-none">Company Name</label>
                                         <input type="text" className="w-full bg-[#050505] border border-[#333333] p-4 text-[#F5F5F5] text-[15px] focus:outline-none focus:border-[#0066ff] transition-colors" placeholder="e.g. Acme Corp Infrastructure" />
                                     </div>

                                     <div className="flex flex-col relative w-full">
                                         <label className="text-[13px] font-medium text-[#A3A3A3] mb-2 pointer-events-none">What do you need help with?</label>
                                         <div className="relative">
                                             <select className="w-full bg-[#050505] border border-[#333333] p-4 text-[#F5F5F5] text-[15px] focus:outline-none focus:border-[#0066ff] transition-colors appearance-none cursor-pointer">
                                                 <option value="lead_followup">Automated Lead Follow-Up</option>
                                                 <option value="scheduling">Smart Scheduling Systems</option>
                                                 <option value="chatbots">AI Chatbots & Support</option>
                                                 <option value="custom_workflow">Custom Internal Workflows</option>
                                                 <option value="unsure">Not sure, I need guidance</option>
                                             </select>
                                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A3A3A3]">▼</div>
                                         </div>
                                     </div>

                                     <div className="flex flex-col relative w-full mb-4">
                                         <label className="text-[13px] font-medium text-[#A3A3A3] mb-2 pointer-events-none">Tell us about your current bottlenecks (Optional)</label>
                                         <textarea rows={5} className="w-full bg-[#050505] border border-[#333333] p-4 text-[#F5F5F5] text-[15px] focus:outline-none focus:border-[#0066ff] transition-colors resize-none" placeholder="Provide some context on where you're losing time..." />
                                     </div>

                                     <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-[#0066ff] hover:bg-[#0055dd] text-white font-medium text-[15px] text-center flex items-center justify-center transition-colors">
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
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                 >
                                     <CheckCircle2 className="w-16 h-16 text-[#0066ff] mb-6" />
                                     <h4 className="text-[24px] font-medium text-[#F5F5F5] mb-4">Request Received</h4>
                                     <p className="text-[#A3A3A3] text-[15px] leading-relaxed max-w-sm mb-8">
                                         Thank you for reaching out. We will review your details and send you a link to book your strategy call within 1 business day.
                                     </p>
                                     <button onClick={() => setIsSubmitted(false)} className="text-[#0066ff] font-medium text-[14px]">
                                         Submit another request
                                     </button>
                                 </motion.div>
                             )}
                         </div>
                     </div>
                 </div>
            </section>
        </>
    );
}
