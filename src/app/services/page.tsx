import type { Metadata } from "next";
import Link from "next/link";
import {
    Bot,
    Workflow,
    BarChart3,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
    title: "AI Automation Services | BoldFlow Labs — Chatbots, Workflow & Custom AI",
    description:
        "End-to-End AI Automation Services for Modern Businesses. From intelligent chatbots to predictive analytics and custom model development.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "AI Automation Services | BoldFlow Labs — Chatbots, Workflow & Custom AI",
        description:
            "Architecting intelligent, scalable systems that connect your tools, automate your processes, and surface actionable insights.",
        url: "/services",
    },
};

const services = [
    {
        icon: Bot,
        title: "AI Chatbots & Conversational Agents",
        subtitle: "24/7 Engagement Without Additional Headcount",
        description:
            "Deploy AI-powered agents that handle multi-turn conversations, qualify leads, resolve support queries, and integrate directly with your CRM. Our agents are engineered to maintain a consistent brand voice across every touchpoint while reducing support volume and cost per interaction.",
        features: [
            "24/7 customer engagement and support resolution",
            "Faster lead qualification and seamless sales handoff",
            "Direct integration with CRM and internal tools",
            "Consistent brand voice across all conversational channels",
        ],
        technologies:
            "LLM-powered dialogue systems | CRM & Help Desk integrations | Retrieval-Augmented Generation (RAG) | Multi-channel deployment",
    },
    {
        icon: Workflow,
        title: "Intelligent Workflow Automation",
        subtitle: "Eliminate Manual Errors and Processing Delays",
        description:
            "We map your existing processes, identify high-impact automation opportunities, and build smart pipelines that eliminate manual errors, reduce delays, and scale alongside your team. We focus on creating automated data flows between your CRM, ERP, and operational tools.",
        features: [
            "Automated data flows between business-critical tools",
            "Elimination of manual entry errors and processing delays",
            "Scalable systems that adapt as your business evolves",
            "Strategic focus reclamation for your internal team",
        ],
        technologies:
            "n8n | Make (Integromat) | Zapier | Custom Python Automation | API Orchestration",
    },
    {
        icon: BarChart3,
        title: "Predictive Analytics & AI-Powered Insights",
        subtitle: "Anticipate Demand and Spot Risks Early",
        description:
            "Turn raw operational data into clear intelligence. We build forecasting models and real-time dashboards that help you anticipate demand, spot risks early, and make confident decisions faster. Our data infrastructure is built to grow with your reporting needs.",
        features: [
            "Real-time operational dashboards tailored to your KPIs",
            "Demand forecasting models for improved planning",
            "Pattern recognition to surface opportunities and flag risks",
            "Scalable data infrastructure for advanced reporting",
        ],
        technologies:
            "Python ML pipelines | Dynamic real-time dashboards | Forecasting models | Data infrastructure engineering",
    },
    {
        icon: Sparkles,
        title: "Custom AI Solutions & Model Development",
        subtitle: "Competitive Differentiation Through Proprietary Intelligence",
        description:
            "When off-the-shelf tools fall short, we build proprietary AI models trained on your data — giving you competitive differentiation and full ownership of your intelligence layer. We ensure ongoing refinement and performance optimization post-deployment.",
        features: [
            "AI solutions designed specifically for your industry use case",
            "Proprietary models for unique competitive differentiation",
            "Full ownership of models, data, and system outputs",
            "Continuous post-deployment refinement and optimization",
        ],
        technologies:
            "Custom ML model development | Fine-tuned LLMs | Proprietary data handling | Agentic AI frameworks",
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
                            "Enterprise AI automation services including chatbots, workflow automation, predictive analytics, and custom AI solutions.",
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
                    <div className="max-w-3xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                                What We Do
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                End-to-End AI Automation Services for{" "}
                                <span className="shimmer-text">Modern Businesses</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-base text-gray-300 max-w-2xl">
                                Every solution we build starts with one question: where is friction costing you the most? From there, we architect intelligent, scalable systems that connect your tools, automate your processes, and surface insights your team can actually act on.
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
                                subtitle={service.subtitle}
                                description={service.description}
                                features={service.features}
                                technologies={service.technologies}
                            />
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Get started with a free assessment">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Automate What&apos;s{" "}
                            <span className="shimmer-text">Slowing You Down?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            Book a free 30-minute strategy session. We&quot;ll review your current workflows, pinpoint your highest-impact automation opportunities, and give you an honest, actionable picture of what&quot;s possible — no obligation, no pressure.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Schedule Your Free Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
