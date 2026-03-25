import type { Metadata } from "next";
import Link from "next/link";
import {
    Users,
    Bot,
    Calendar,
    Share2,
    BarChart3,
    Workflow,
    ArrowRight,
    Terminal,
} from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
    title: "System Architectures | BoldFlow Labs",
    description: "Intelligent systems. Full end-to-end automation modules deployed across your business.",
};

const services = [
    {
        icon: Users,
        title: "AI-Powered Lead Follow-Up",
        subtitle: "ENDPOINT_01: Lead Velocity",
        description:
            "Most businesses lose potential revenue because follow-up is slow, inconsistent, or forgotten. We build intelligent systems that automatically engage new enquiries the moment they arrive, nurture prospects through logic-based sequences, update your CRM in real-time, and escalate sales-ready leads.",
        features: [
            "Sub-minute response times across SMS, Email, and WhatsApp.",
            "Dynamic lead scoring based on engagement telemetry.",
            "Real-time CRM data pipeline insertion.",
            "Natural language multi-step prospect nurturing.",
        ],
    },
    {
        icon: Bot,
        title: "Conversational Agents",
        subtitle: "ENDPOINT_02: Autonomous Support",
        description:
            "Your support workload shouldn't scale linearly with your customer base. We engineer AI agents capable of resolving complex operational queries, capturing context, and seamlessly handing off to human operators only when strictly necessary.",
        features: [
            "LLM-powered routing for contextual issue resolution.",
            "Semantic understanding of your product documentation.",
            "Secure API retrieval for live order tracking and status.",
            "Zero-latency human escalation protocols.",
        ],
    },
    {
        icon: Calendar,
        title: "Automated Scheduling Systems",
        subtitle: "ENDPOINT_03: Calendar Orchestration",
        description:
            "Manually coordinating appointments creates unnecessary friction. We architect autonomous booking flows with multi-tiered reminder logic that drastically reduces cancellations, completely removing human touch from the scheduling loop.",
        features: [
            "Two-way calendar sync with algorithmic time-slot offering.",
            "Multi-channel logic-based reminder sequences.",
            "Automated intake form processing prior to calls.",
            "Instant rescheduling nodes without human intervention.",
        ],
    },
    {
        icon: Share2,
        title: "Social & Content Pipelines",
        subtitle: "ENDPOINT_04: Content Velocity",
        description:
            "Maintain an omnipresent brand without manual publishing overhead. We design deterministic pipelines that leverage GenAI to draft, format, schedule, and distribute your internal assets across public platforms.",
        features: [
            "Headless CMS integration for cross-platform distribution.",
            "LLM-assisted contextual drafting aligned to brand tone.",
            "Algorithmic posting schedules based on platform telemetry.",
            "Automated asset repurposing from long-form inputs.",
        ],
    },
    {
        icon: BarChart3,
        title: "BI & Telemetry Dashboards",
        subtitle: "ENDPOINT_05: Real-Time Intelligence",
        description:
            "Operational visibility requires unified data. We build scalable aggregation pipelines that ingest data from your CRM, ad platforms, and finance tools into a singular, real-time visualization layer.",
        features: [
            "Automated API ingestion from siloed cloud tools.",
            "Custom KPI processing and real-time computation.",
            "Automated executive report distribution.",
            "Zero-latency anomaly detection alerts via Slack.",
        ],
    },
    {
        icon: Workflow,
        title: "Custom Agentic Workflows",
        subtitle: "ENDPOINT_06: Bespoke Autonomy",
        description:
            "Generic templates fail at scale. We engineer fully custom multi-agent networks designed specifically to execute complex, deeply integrated business logic that off-the-shelf software cannot handle.",
        features: [
            "Multi-agent reasoning architectures for complex tasks.",
            "Proprietary vector database integrations (RAG).",
            "Full IP ownership of customized workflow logic.",
            "Autonomous multi-step execution across varied environments.",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]">
                <div className="absolute inset-0 bg-[#050505] noise-overlay z-0" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.1] pointer-events-none mix-blend-screen z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#00a2ff] mb-4">
                                {"//"} System Endpoints
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                                Stop Operating Manually.<br/>
                                <span className="text-[#A1A1AA] italic font-serif">Deploy Intelligence.</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-lg text-[#71717A] max-w-2xl font-light leading-relaxed mb-8">
                                Every service we design is treated as a modular API endpoint for your business. We engineer precise, scalable automation that integrates directly into your existing stack—replacing manual labor with deterministic logic.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#EDEDED] text-black font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                            >
                                Request System Architecture
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Services Stack (Full-width bands) */}
            <section className="bg-[#030303]" aria-label="System Offerings">
                <div className="flex flex-col">
                    {services.map((service, i) => (
                        <FadeUp key={service.title} custom={i}>
                            <ServiceCard
                                index={i}
                                icon={<service.icon className="w-5 h-5 text-[#A1A1AA]" />}
                                title={service.title}
                                subtitle={service.subtitle}
                                description={service.description}
                                features={service.features}
                            />
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 relative overflow-hidden bg-[#0A0A0A] text-center border-t border-[#1A1A1A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,87,34,0.05),transparent_70%)] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <Terminal className="w-8 h-8 text-[#FF5722] mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Initialize Deployment
                    </h2>
                    <p className="text-[#A1A1AA] mb-10 text-lg font-light">
                        Our systems are built for specific operational bottlenecks. Book a technical discovery call to map out which endpoints will drive immediate ROI for your team.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-10 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                    >
                        Schedule Technical Diagnostic
                    </Link>
                </div>
            </section>
        </>
    );
}
