import type { Metadata } from "next";
import Link from "next/link";
import {
    Bot,
    Workflow,
    BarChart3,
    Brain,
    Database,
    MessageSquare,
    Cog,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
    title: "AI Automation Services",
    description:
        "From AI chatbots and workflow automation to predictive analytics and custom AI models — BoldFlow Labs offers a full spectrum of AI services to transform your business.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "AI Automation Services — BoldFlow Labs",
        description:
            "Explore our full spectrum of AI and automation services: chatbots, workflow automation, analytics, custom AI models, and more.",
        url: "/services",
    },
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

const processSteps = [
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

export default function ServicesPage() {
    return (
        <>
            {/* JSON-LD Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        provider: {
                            "@type": "Organization",
                            name: "BoldFlow Labs",
                        },
                        name: "AI Automation Services",
                        description:
                            "Full spectrum of AI and automation services including chatbots, workflow automation, predictive analytics, and custom AI models.",
                        serviceType: "AI Automation",
                        areaServed: "Worldwide",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "AI Services",
                            itemListElement: services.map((service, i) => ({
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: service.title,
                                    description: service.description,
                                },
                                position: i + 1,
                            })),
                        },
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Services overview">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" aria-hidden="true" />
                <div className="watermark-number top-16 -right-10" aria-hidden="true">AI</div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-2xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                                Our Services
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                                AI Solutions That{" "}
                                <span className="shimmer-text">Drive Growth</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-base text-gray-500 max-w-lg">
                                From strategy to deployment, we offer a full spectrum of AI and
                                automation services to transform every aspect of your business.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Services — Accordion List */}
            <section className="section-padding pt-0" aria-label="Detailed service offerings">
                <div className="max-w-5xl mx-auto">
                    {services.map((service, i) => (
                        <FadeUp key={service.title} custom={i}>
                            <ServiceCard
                                index={i}
                                icon={<service.icon className="w-5 h-5 text-[#00a2ff]" />}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                            />
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* Process — Horizontal Timeline */}
            <section
                className="section-padding relative overflow-hidden"
                aria-label="Our delivery process"
                style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, transparent 100%)" }}
            >
                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeUp custom={0} className="text-center mb-16">
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
                    </FadeUp>

                    {/* Desktop timeline */}
                    <div className="hidden md:block">
                        <div className="relative mx-auto max-w-4xl mb-4">
                            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#0066ff]/30 via-[#00a2ff]/30 to-[#00d4ff]/30" aria-hidden="true" />
                        </div>
                        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {processSteps.map((step, i) => (
                                <FadeUp key={step.step} custom={i} className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center mx-auto mb-4 relative">
                                        <span className="text-xs font-bold text-[#00a2ff]">{step.step}</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
                                </FadeUp>
                            ))}
                        </div>
                    </div>

                    {/* Mobile stacked */}
                    <div className="md:hidden space-y-6">
                        {processSteps.map((step, i) => (
                            <FadeUp key={step.step} custom={i} className="flex items-start gap-4">
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
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Get started with a free assessment">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
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
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
