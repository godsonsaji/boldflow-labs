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
        "From conversational AI and intelligent chatbots to full-scale workflow automation and predictive analytics — BoldFlow Labs delivers AI solutions built for real business impact.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "AI Automation Services | BoldFlow Labs — Chatbots, Workflow & Custom AI",
        description:
            "From conversational AI and intelligent chatbots to full-scale workflow automation and predictive analytics — BoldFlow Labs delivers AI solutions built for real business impact.",
        url: "/services",
    },
};

const services = [
    {
        icon: Bot,
        title: "AI Chatbots & Conversational Agents",
        subtitle: "Intelligent Conversations, at Scale — 24/7",
        description:
            "Today\u2019s customers don\u2019t wait. They expect immediate, accurate, and helpful responses \u2014 whether it\u2019s 2pm on a Tuesday or 2am on a Sunday. Our AI chatbot and conversational agent solutions are built to meet that expectation without expanding your headcount. We design multi-channel conversational systems that go beyond scripted FAQ responses. Our agents understand context, manage complex dialogue flows, escalate intelligently to human agents when needed, and continuously improve based on interaction data.",
        features: [
            "Customer support automation and ticket deflection",
            "Lead qualification and pipeline acceleration",
            "Internal knowledge bases and employee self-service tools",
            "E-commerce guidance and purchase-flow support",
        ],
        technologies:
            "LLM-powered dialogue systems | CRM and help desk integrations | Retrieval-Augmented Generation (RAG) | Multi-channel deployment (web, WhatsApp, Slack, email)",
    },
    {
        icon: Workflow,
        title: "Intelligent Workflow Automation",
        subtitle: "Remove the Bottlenecks. Reclaim the Hours.",
        description:
            "Manual workflows are expensive \u2014 not just in time, but in errors, delays, and lost opportunity. We audit your existing processes, identify the highest-impact points of automation, and build smart, connected pipelines that eliminate friction and scale with your growth. We work across the full spectrum of business workflow automation: from simple task triggers and data routing to complex, multi-system orchestration involving conditional logic, approvals, and exception handling.",
        features: [
            "CRM, ERP, and data platform integrations",
            "Automated reporting and compliance workflows",
            "Lead routing, nurturing, and sales process automation",
            "Invoice processing, HR onboarding, and operational data flows",
        ],
        technologies:
            "n8n | Make (Integromat) | Zapier | Custom API integrations | Python automation pipelines | Robotic Process Automation (RPA)",
    },
    {
        icon: BarChart3,
        title: "Predictive Analytics & AI-Powered Insights",
        subtitle: "Stop Guessing. Start Knowing.",
        description:
            "Your business generates more data every day than any human team can meaningfully process. We build the AI-powered analytics infrastructure to turn that data into decisions \u2014 surfaced through intuitive dashboards, automated reports, and forecasting models that give you a genuine operational edge.",
        features: [
            "Revenue and demand forecasting",
            "Churn prediction and customer retention modelling",
            "Operational performance dashboards and KPI tracking",
            "Inventory optimization and supply chain intelligence",
        ],
        technologies:
            "Python ML pipelines (scikit-learn, XGBoost) | Tableau, Metabase, and custom dashboards | SQL and data warehouse integrations | Real-time data streaming",
    },
    {
        icon: Sparkles,
        title: "Custom AI Solutions",
        subtitle: "When Off-the-Shelf Isn\u2019t Enough",
        description:
            "Some competitive advantages can\u2019t be bought from a SaaS provider. They have to be built. Our custom AI development service is designed for businesses with unique, complex challenges that require proprietary intelligence \u2014 models trained on your data, fine-tuned for your domain, and owned entirely by you.",
        features: [
            "Industry-specific document processing and classification",
            "Custom recommendation and personalization engines",
            "Proprietary language models fine-tuned on internal knowledge",
            "Computer vision and image analysis applications",
        ],
        technologies:
            "Fine-tuned LLMs (GPT, Claude, Llama) | Custom ML model development | Vector databases (Pinecone, Weaviate) | LangChain and LlamaIndex frameworks",
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
                                Our Services
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                AI Automation Services Designed to{" "}
                                <span className="shimmer-text">Transform How Your Business Operates</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-base text-gray-300 max-w-2xl">
                                Every service we offer is built around one question: what would
                                happen to your business if this problem was completely solved? We
                                start with outcomes, then architect the most precise, intelligent
                                path to get there.
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
                            Not Sure Where to{" "}
                            <span className="shimmer-text">Start?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            Book a free strategy call with our AI automation team. We&apos;ll
                            review your current workflows, identify your highest-impact
                            opportunities, and give you an honest picture of what&apos;s possible.
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
