"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BlogPage() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setEmail("");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] pt-40 pb-32 flex items-center justify-center">
            <div className="max-w-[800px] w-full mx-auto px-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[13px] tracking-wider text-[#0066ff] font-medium mb-6 uppercase"
                >
                    System Documentation
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[40px] md:text-[64px] text-[#F5F5F5] font-medium leading-[1.1] mb-8 tracking-tight"
                >
                    Thoughts & <br/>Documentation.
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[18px] text-[#A3A3A3] max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Building scalable automation systems requires rigorous documentation. We will be publishing our raw technical notes, architectural teardowns, and operational philosophy here soon. Check back later.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-md mx-auto relative bg-[#050505] border border-[#1A1A1A] p-8"
                >
                    {!isSubmitted ? (
                        <>
                            <p className="text-[#F5F5F5] font-medium text-[15px] mb-6 text-center">
                                Get notified when our first teardown drops.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com" 
                                    className="px-4 py-3 bg-[#0A0A0A] border border-[#333333] text-[#F5F5F5] text-[14px] focus:outline-none focus:border-[#0066ff] flex-1"
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="px-6 py-3 bg-[#0066ff] hover:bg-[#0055dd] text-white font-medium text-[14px] transition-colors flex items-center justify-center min-w-[120px]"
                                >
                                    {isSubmitting ? "Sending..." : "Notify Me"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-4">
                            <CheckCircle2 className="w-10 h-10 text-[#0066ff] mb-4" />
                            <p className="text-[#F5F5F5] font-medium text-[15px]">You're on the list.</p>
                            <p className="text-[#A3A3A3] text-[14px] mt-2">We'll alert you when the logbook opens.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
