"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
            >
                <div className="w-16 h-16 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center mb-6 animate-glow-pulse">
                    <CheckCircle2 className="w-8 h-8 text-[#00a2ff]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mb-8">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours with next steps.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#00a2ff] hover:text-white transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        className="input-minimal"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        className="input-minimal"
                        placeholder="john@company.com"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="contact-company" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                    Company
                </label>
                <input
                    id="contact-company"
                    type="text"
                    className="input-minimal"
                    placeholder="Your company name"
                />
            </div>

            <div>
                <label htmlFor="contact-budget" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                    Budget Range
                </label>
                <select
                    id="contact-budget"
                    className="input-minimal appearance-none cursor-pointer"
                    required
                >
                    <option value="" className="bg-black">Select a range</option>
                    <option value="2k-5k" className="bg-black">$2,000 - $5,000</option>
                    <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                    <option value="25k+" className="bg-black">$25,000+</option>
                </select>
            </div>

            <div>
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                    Tell Us About Your Project
                </label>
                <textarea
                    id="contact-message"
                    rows={5}
                    className="input-minimal resize-none"
                    placeholder="Describe your automation needs, current challenges, and goals..."
                    required
                />
            </div>

            <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.02] btn-magnetic"
            >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </form>
    );
}
