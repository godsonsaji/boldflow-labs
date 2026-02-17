"use client";

import { useState, type ReactNode } from "react";
import { FadeUp, AnimatePresenceWrapper } from "@/components/AnimationWrappers";
import { motion } from "framer-motion";

interface CaseStudy {
    title: string;
    description: string;
    category: string;
    metrics: { label: string; value: string }[];
    tags: string[];
}

export default function CaseStudyFilter({
    categories,
    caseStudies,
}: {
    categories: string[];
    caseStudies: CaseStudy[];
}) {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredStudies =
        activeCategory === "All"
            ? caseStudies
            : caseStudies.filter((c) => c.category === activeCategory);

    return (
        <>
            {/* Filter bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-14" role="tablist" aria-label="Filter case studies by category">
                {categories.map((category) => (
                    <button
                        key={category}
                        role="tab"
                        aria-selected={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-[#0066ff]/15 text-[#00a2ff] border border-[#0066ff]/30"
                                : "text-gray-600 hover:text-gray-400 border border-transparent hover:border-white/[0.06]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Results grid */}
            <AnimatePresenceWrapper mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    role="tabpanel"
                >
                    {filteredStudies.map((study, i) => (
                        <FadeUp
                            key={study.title}
                            custom={i}
                            whileHover={{ y: -3, transition: { duration: 0.3 } }}
                            className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            {/* Gradient header */}
                            <div className="h-2 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]" />
                            <div className="p-7">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700 font-semibold px-2 py-0.5 rounded-full border border-white/[0.05]">
                                        {study.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00a2ff] transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                    {study.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    {study.metrics.map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="text-center py-2 rounded-lg bg-white/[0.02]"
                                        >
                                            <p className="text-sm font-bold gradient-text">{metric.value}</p>
                                            <p className="text-[10px] text-gray-700 uppercase tracking-wider">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {study.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] text-gray-600 px-2 py-0.5 rounded-full border border-white/[0.04] bg-white/[0.01]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </motion.div>
            </AnimatePresenceWrapper>
        </>
    );
}
