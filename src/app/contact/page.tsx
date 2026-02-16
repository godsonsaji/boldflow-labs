"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Clock,
    Send,
    CheckCircle2,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
    }),
};

const slideLeft = {
    hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 50, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@boldflowlabs.com",
        description: "We respond within 24 hours",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+1 (555) 123-4567",
        description: "Mon-Fri, 9am-6pm PST",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "San Francisco, CA",
        description: "By appointment only",
    },
    {
        icon: Clock,
        title: "Response Time",
        value: "< 24 Hours",
        description: "Average response time",
    },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium"
                    >
                        Contact
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={1}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Let&apos;s Start{" "}
                        <span className="shimmer-text">Building</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={2}
                        className="text-base text-gray-500 max-w-xl mx-auto"
                    >
                        Ready to transform your business with AI? Get in touch and
                        we&apos;ll schedule a free 30-minute strategy call.
                    </motion.p>
                </div>
            </section>

            {/* Split Layout: Info + Form */}
            <section className="section-padding pt-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Left — Contact Info Panel */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideLeft}
                            custom={0}
                            className="lg:col-span-2"
                        >
                            <div className="relative rounded-2xl p-8 md:p-10 overflow-hidden h-full" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(0,212,255,0.02) 50%, rgba(0,0,0,0.9) 100%)" }}>
                                <div className="orb orb-blue w-[300px] h-[300px] -bottom-40 -left-40 opacity-40" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Get in Touch
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-10">
                                        We&apos;d love to hear about your project
                                    </p>

                                    <div className="space-y-7">
                                        {contactInfo.map((info) => (
                                            <div key={info.title} className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.08] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                                    <info.icon className="w-4 h-4 text-[#00a2ff]" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-medium">{info.value}</p>
                                                    <p className="text-gray-600 text-xs mt-0.5">{info.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Separator */}
                                    <div className="h-px bg-gradient-to-r from-[#0066ff]/15 to-transparent my-8" />

                                    <div className="glass rounded-xl p-5">
                                        <p className="text-white text-sm font-medium mb-1">
                                            Free Strategy Call
                                        </p>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Book a 30-minute call to discuss your AI automation needs
                                            and get expert recommendations — no strings attached.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideRight}
                            custom={0}
                            className="lg:col-span-3"
                        >
                            {submitted ? (
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
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setSubmitted(true);
                                    }}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="input-minimal"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="input-minimal"
                                                placeholder="john@company.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            className="input-minimal"
                                            placeholder="Your company name"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                                            Budget Range
                                        </label>
                                        <select
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
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-1 block">
                                            Tell Us About Your Project
                                        </label>
                                        <textarea
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
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
