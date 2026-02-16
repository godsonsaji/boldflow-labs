"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import {
    Star,
    ArrowRight,
    TrendingUp,
    DollarSign,
    Clock,
    Users,
    Quote,
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

const testimonials = [
    {
        name: "David Park",
        role: "CTO, TechForge Inc.",
        content:
            "BoldFlow Labs transformed our customer service operations. Their AI chatbot handles 80% of inquiries autonomously, and the quality of responses is remarkable.",
        rating: 5,
        metric: "+240% Efficiency",
        featured: true,
    },
    {
        name: "Sarah Chen",
        role: "VP Operations, DataPulse",
        content:
            "The workflow automation solution reduced our manual data processing time by 35 hours per week. The ROI was visible within the first month.",
        rating: 5,
        metric: "35h/wk Saved",
        featured: false,
    },
    {
        name: "Marcus Johnson",
        role: "CEO, NovaStar Retail",
        content:
            "Their predictive analytics platform gave us a competitive edge. We can now forecast demand with 94% accuracy, reducing waste and maximizing revenue.",
        rating: 5,
        metric: "94% Accuracy",
        featured: false,
    },
    {
        name: "Emily Rodriguez",
        role: "Director, Synthetix Health",
        content:
            "Working with BoldFlow was seamless from start to finish. They understood our complex requirements and delivered an AI solution that exceeded expectations.",
        rating: 5,
        metric: "3.5x ROI",
        featured: false,
    },
    {
        name: "James Williams",
        role: "Head of Sales, CloudBase",
        content:
            "Our lead qualification process is now fully automated. The AI identifies high-value prospects with incredible precision, boosting our conversion rate by 67%.",
        rating: 5,
        metric: "+67% Conversion",
        featured: false,
    },
    {
        name: "Lisa Thompson",
        role: "COO, Quantum Finance",
        content:
            "The custom AI model BoldFlow built for fraud detection saves us millions annually. Their team's expertise in financial AI is unmatched.",
        rating: 5,
        metric: "$2.5M Saved/yr",
        featured: false,
    },
];

const results = [
    { value: 40, suffix: "%", label: "Average Cost Reduction", icon: DollarSign, barWidth: 85 },
    { value: 98, suffix: "%", label: "Client Satisfaction Rate", icon: Users, barWidth: 98 },
    { value: 3.5, suffix: "x", label: "Average Return on Investment", icon: TrendingUp, barWidth: 75 },
    { value: 2, suffix: "wk", label: "Average Time to Deployment", icon: Clock, barWidth: 60 },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionVal = useMotionValue(0);
    const springVal = useSpring(motionVal, { duration: 2000, bounce: 0 });
    const displayRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (isInView) motionVal.set(value);
    }, [isInView, motionVal, value]);

    useEffect(() => {
        const unsub = springVal.on("change", (v) => {
            if (displayRef.current) {
                const formatted = value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toString();
                displayRef.current.textContent = formatted + suffix;
            }
        });
        return unsub;
    }, [springVal, suffix, value]);

    return (
        <span ref={ref}>
            <span ref={displayRef}>0{suffix}</span>
        </span>
    );
}

export default function TestimonialsPage() {
    const featured = testimonials.find((t) => t.featured);
    const rest = testimonials.filter((t) => !t.featured);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="orb orb-cyan w-[500px] h-[500px] -top-40 -right-40 opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium"
                    >
                        Testimonials
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={1}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Loved by{" "}
                        <span className="shimmer-text">Industry Leaders</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={2}
                        className="text-base text-gray-500 max-w-xl mx-auto"
                    >
                        Don&apos;t just take our word for it — hear from the companies
                        that have transformed their operations with BoldFlow Labs.
                    </motion.p>
                </div>
            </section>

            {/* Featured Testimonial — Spotlight */}
            {featured && (
                <section className="section-padding pt-0">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0}
                            className="relative p-10 md:p-14 rounded-2xl border border-[#00a2ff]/15 bg-gradient-to-br from-[#0066ff]/[0.04] to-transparent"
                        >
                            <Quote className="w-10 h-10 text-[#0066ff]/15 mb-6" />
                            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-8">
                                &ldquo;{featured.content}&rdquo;
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center text-white font-bold text-sm">
                                        {featured.name.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{featured.name}</p>
                                        <p className="text-gray-600 text-xs">{featured.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: featured.rating }).map((_, j) => (
                                            <Star key={j} className="w-4 h-4 text-[#00a2ff] fill-[#00a2ff]" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-[#00d4ff] bg-[#0066ff]/10 px-3 py-1 rounded-full">
                                        {featured.metric}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Testimonials Grid — Masonry-style */}
            <section className="section-padding pt-0">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                        {rest.map((testimonial, i) => (
                            <motion.div
                                key={testimonial.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                variants={fadeUp}
                                custom={i % 3}
                                className="break-inside-avoid glass glass-hover rounded-xl p-7 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066ff]/30 to-[#00d4ff]/20 flex items-center justify-center text-white font-bold text-xs">
                                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-0.5 mb-3">
                                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                                        <Star key={j} className="w-3 h-3 text-[#00a2ff] fill-[#00a2ff]" />
                                    ))}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                <span className="inline-block text-[10px] font-bold text-[#00d4ff] bg-[#0066ff]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                    {testimonial.metric}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results — Dashboard Panel */}
            <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, transparent 100%)" }}>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="mb-12"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Key Results
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Proven <span className="gradient-text">Impact</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {results.map((result, i) => (
                            <motion.div
                                key={result.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="glass rounded-xl p-6 flex items-center gap-6"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                    <result.icon className="w-5 h-5 text-[#00a2ff]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline justify-between mb-2">
                                        <span className="text-white text-sm font-medium">{result.label}</span>
                                        <span className="text-2xl font-bold gradient-text">
                                            <AnimatedCounter value={result.value} suffix={result.suffix} />
                                        </span>
                                    </div>
                                    <div className="w-full h-1 rounded-full bg-white/[0.04]">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: `${result.barWidth}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                                            className="metric-bar"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Join Our{" "}
                            <span className="shimmer-text">Success Stories?</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            See what AI automation can do for your business. Start with a
                            free strategy call.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
