"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Bot,
    Workflow,
    BarChart3,
    Sparkles,
    Brain,
    Database,
    MessageSquare,
    Cog,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
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

const services = [
    {
        icon: Bot,
        title: "AI Chatbots & Virtual Assistants",
        description:
            "Deploy intelligent conversational AI agents across your customer touchpoints. Our chatbots handle complex queries, qualify leads, and provide 24/7 support with human-like understanding.",
        features: [
            "Multi-channel deployment (web, SMS, WhatsApp)",
            "Natural language understanding & context retention",
            "Seamless human handoff protocols",
            "Custom knowledge base integration",
        ],
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description:
            "Eliminate repetitive tasks and streamline complex business processes with intelligent automation pipelines that connect all your tools and systems.",
        features: [
            "End-to-end process automation",
            "Integration with 500+ business tools",
            "Custom trigger & action workflows",
            "Error handling & automatic retries",
        ],
    },
    {
        icon: BarChart3,
        title: "Predictive Analytics & BI",
        description:
            "Transform raw data into strategic decisions. Our AI analytics platforms provide real-time insights, trend forecasting, and automated reporting dashboards.",
        features: [
            "Real-time data visualization dashboards",
            "ML-powered trend forecasting",
            "Anomaly detection & alerting",
            "Custom KPI tracking & reporting",
        ],
    },
    {
        icon: Brain,
        title: "Custom AI Model Development",
        description:
            "Purpose-built AI models trained on your proprietary data, designed to solve your unique business challenges and deliver competitive advantage.",
        features: [
            "Fine-tuned LLMs for your domain",
            "Computer vision solutions",
            "NLP & text classification",
            "Recommendation engines",
        ],
    },
    {
        icon: Database,
        title: "Data Pipeline Engineering",
        description:
            "Build robust, scalable data infrastructure that feeds your AI systems. From ETL pipelines to real-time streaming architecture, we handle the plumbing.",
        features: [
            "ETL/ELT pipeline design",
            "Real-time data streaming",
            "Data warehouse optimization",
            "Cloud-native architecture",
        ],
    },
    {
        icon: MessageSquare,
        title: "AI-Powered Content Generation",
        description:
            "Automate content creation at scale. From marketing copy to product descriptions, our AI systems generate high-quality, brand-aligned content.",
        features: [
            "Blog & article generation",
            "Product description automation",
            "Social media content at scale",
            "Brand voice customization",
        ],
    },
];

const process = [
    {
        step: "01",
        icon: MessageSquare,
        title: "Discovery & Strategy",
        description:
            "We dive deep into your operations to identify high-impact automation opportunities and build a custom roadmap.",
    },
    {
        step: "02",
        icon: Cog,
        title: "Design & Prototype",
        description:
            "Our team designs the solution architecture and builds a working prototype for your review and feedback.",
    },
    {
        step: "03",
        icon: Sparkles,
        title: "Build & Integrate",
        description:
            "We develop, test, and integrate the solution into your existing tech stack with minimal disruption.",
    },
    {
        step: "04",
        icon: BarChart3,
        title: "Launch & Optimize",
        description:
            "Go live with full monitoring, then continuously optimize performance based on real-world data.",
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={index}
            className="group relative border-b border-white/[0.04] last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start gap-6 py-8 md:py-10 text-left hover:bg-white/[0.01] transition-colors duration-300 px-2"
            >
                <div className="shrink-0 flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/30 font-bold tabular-nums w-6">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center group-hover:bg-[#0066ff]/10 group-hover:border-[#00a2ff]/20 transition-all duration-300">
                        <service.icon className="w-5 h-5 text-[#00a2ff]" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#00a2ff] transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-1 md:line-clamp-none max-w-2xl">
                        {service.description}
                    </p>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-600 shrink-0 mt-2 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00a2ff]" : ""
                        }`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" as const }}
                        className="overflow-hidden"
                    >
                        <div className="pl-24 pb-8 pr-8">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
                                {service.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {service.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2.5 text-sm text-gray-500"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00a2ff]/60 shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ServicesPage() {
    return (
        <>
            {/* Hero — Left-aligned with watermark */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" />
                <div className="watermark-number top-16 -right-10">AI</div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-2xl">
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0}
                            className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium"
                        >
                            Our Services
                        </motion.p>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={1}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        >
                            AI Solutions That{" "}
                            <span className="shimmer-text">Drive Growth</span>
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={2}
                            className="text-base text-gray-500 max-w-lg"
                        >
                            From strategy to deployment, we offer a full spectrum of AI and
                            automation services to transform every aspect of your business.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services — Accordion List */}
            <section className="section-padding pt-0">
                <div className="max-w-5xl mx-auto">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </section>

            {/* Process — Horizontal Timeline */}
            <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, transparent 100%)" }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center mb-16"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Process
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            From Idea to <span className="gradient-text">Impact</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm">
                            A proven methodology that turns complex AI initiatives into
                            delivered, measurable business value.
                        </p>
                    </motion.div>

                    {/* Desktop timeline */}
                    <div className="hidden md:block">
                        {/* Connecting line */}
                        <div className="relative mx-auto max-w-4xl mb-4">
                            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#0066ff]/30 via-[#00a2ff]/30 to-[#00d4ff]/30" />
                        </div>
                        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {process.map((step, i) => (
                                <motion.div
                                    key={step.step}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="text-center"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center mx-auto mb-4 relative">
                                        <span className="text-xs font-bold text-[#00a2ff]">{step.step}</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile stacked */}
                    <div className="md:hidden space-y-6">
                        {process.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-[#00a2ff]">{step.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
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
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            Our team will assess your current operations and recommend the
                            highest-impact automation opportunities — completely free.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Get Your Free Assessment
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
