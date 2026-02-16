"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    TrendingUp,
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

const categories = ["All", "Chatbots", "Automation", "Analytics", "Custom AI"];

const caseStudies = [
    {
        title: "AI Customer Support for E-Commerce Giant",
        category: "Chatbots",
        description:
            "Built an AI-powered support system that handles 80% of customer inquiries autonomously, reducing response time from hours to seconds.",
        metrics: [
            { label: "Response Time", value: "-95%" },
            { label: "Support Costs", value: "-60%" },
            { label: "CSAT Score", value: "+35%" },
        ],
        tags: ["NLP", "Multi-channel", "E-commerce"],
    },
    {
        title: "Predictive Inventory Management System",
        category: "Analytics",
        description:
            "Deployed ML models that forecast demand with 94% accuracy, reducing overstock waste by 40% and preventing stockouts.",
        metrics: [
            { label: "Forecast Accuracy", value: "94%" },
            { label: "Waste Reduction", value: "-40%" },
            { label: "Revenue Impact", value: "+$2.1M" },
        ],
        tags: ["Machine Learning", "Supply Chain", "Retail"],
    },
    {
        title: "Automated Lead Qualification Pipeline",
        category: "Automation",
        description:
            "Designed an AI-driven lead scoring and qualification system that increased sales team efficiency by 240% and conversion rates by 67%.",
        metrics: [
            { label: "Efficiency", value: "+240%" },
            { label: "Conversion Rate", value: "+67%" },
            { label: "Sales Cycle", value: "-30%" },
        ],
        tags: ["Lead Scoring", "CRM Integration", "B2B"],
    },
    {
        title: "Custom Fraud Detection Engine",
        category: "Custom AI",
        description:
            "Built a real-time fraud detection system for a fintech company that catches 99.7% of fraudulent transactions while maintaining low false positive rates.",
        metrics: [
            { label: "Detection Rate", value: "99.7%" },
            { label: "False Positives", value: "-85%" },
            { label: "Annual Savings", value: "$2.5M" },
        ],
        tags: ["Deep Learning", "Real-time", "Fintech"],
    },
    {
        title: "Intelligent Document Processing",
        category: "Automation",
        description:
            "Automated extraction and classification of data from 50,000+ documents monthly, replacing manual data entry with 98% accuracy.",
        metrics: [
            { label: "Processing Speed", value: "10x" },
            { label: "Accuracy", value: "98%" },
            { label: "Hours Saved", value: "200/mo" },
        ],
        tags: ["OCR", "NLP", "Healthcare"],
    },
    {
        title: "AI-Powered Recommendation Engine",
        category: "Custom AI",
        description:
            "Developed a personalization engine that increased average order value by 45% and customer engagement by 3.2x for a major retailer.",
        metrics: [
            { label: "Avg Order Value", value: "+45%" },
            { label: "Engagement", value: "3.2x" },
            { label: "Revenue Lift", value: "+$4.8M" },
        ],
        tags: ["Recommendation", "Personalization", "Retail"],
    },
];

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All"
            ? caseStudies
            : caseStudies.filter((cs) => cs.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -left-40 opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium"
                    >
                        Case Studies
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={1}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Our <span className="shimmer-text">Impact</span> in Action
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={2}
                        className="text-base text-gray-500 max-w-xl mx-auto"
                    >
                        Real projects, real results. Explore how we&apos;ve helped
                        companies transform their operations with AI.
                    </motion.p>
                </div>
            </section>

            {/* Filter — Underline Tabs */}
            <section className="section-padding pt-0">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="flex flex-wrap gap-0 mb-12 border-b border-white/[0.04]"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? "text-white"
                                        : "text-gray-600 hover:text-white"
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00a2ff]"
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>

                    {/* Cards Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {filtered.map((study, i) => (
                                <motion.div
                                    key={study.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="group glass glass-hover rounded-xl overflow-hidden transition-all duration-300 card-interactive"
                                >
                                    {/* Category watermark */}
                                    <div className="relative p-7">
                                        <span className="absolute top-4 right-4 text-[3.5rem] font-black leading-none bg-gradient-to-b from-[#0066ff]/[0.04] to-transparent bg-clip-text text-transparent select-none pointer-events-none">
                                            {study.category.substring(0, 2).toUpperCase()}
                                        </span>

                                        <div className="relative z-10">
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-[#00a2ff] font-semibold">
                                                {study.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-[#00a2ff] transition-colors duration-300">
                                                {study.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                                {study.description}
                                            </p>

                                            {/* Metrics */}
                                            <div className="flex gap-4 mb-5">
                                                {study.metrics.map((m) => (
                                                    <div key={m.label}>
                                                        <p className="text-lg font-bold gradient-text">{m.value}</p>
                                                        <p className="text-[10px] text-gray-700 uppercase tracking-wider">{m.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {study.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] text-gray-600 border border-white/[0.06] px-2 py-0.5 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
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
                            Want Results <span className="shimmer-text">Like These?</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            Let us show you what AI automation can do for your specific
                            industry and use case.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Discuss Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
