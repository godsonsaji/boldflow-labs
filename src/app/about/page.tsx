import type { Metadata } from "next";
import Link from "next/link";
import {
    Users,
    Lightbulb,
    Eye,
    Shield,
    Heart,
    ArrowRight,
    Code2,
    Brain,
    Rocket,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "About BoldFlow Labs | AI Automation Agency Built on Clarity & Technical Depth",
    description:
        "Meet the team behind BoldFlow Labs. We're a specialist AI automation agency with deep roots in AI engineering, cloud architecture, and intelligent systems design — built to deliver automation that works.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About BoldFlow Labs | AI Automation Agency Built on Clarity & Technical Depth",
        description:
            "Meet the team behind BoldFlow Labs. We're a specialist AI automation agency with deep roots in AI engineering, cloud architecture, and intelligent systems design.",
        url: "/about",
    },
};

const philosophy = [
    {
        icon: Eye,
        title: "Total Transparency",
        description:
            "We don't hide behind dashboards or vague status updates. You'll see exactly what we're building, why, and what it costs — at every stage.",
    },
    {
        icon: Shield,
        title: "Engineering Integrity",
        description:
            "We won't recommend a tool or build a solution just because it's trendy. If a simpler approach works better, we'll say so — even if it means a smaller engagement for us.",
    },
    {
        icon: Lightbulb,
        title: "Outcome-First Thinking",
        description:
            "Every automation we design starts with a clear business objective: reduce costs, increase throughput, improve accuracy, or free up time. If it doesn't move a needle, it doesn't get built.",
    },
    {
        icon: Heart,
        title: "Built for Partnership",
        description:
            "We intentionally keep our client roster small so we can go deep. That means faster response times, more senior attention, and a team that genuinely understands your business operations.",
    },
];

const capabilities = [
    {
        icon: Brain,
        title: "AI & Model Engineering",
        items: [
            "Large Language Model (LLM) fine-tuning",
            "Retrieval-Augmented Generation (RAG)",
            "Proprietary AI model development",
            "Agentic AI & autonomous orchestration",
        ],
    },
    {
        icon: Rocket,
        title: "Automation & Systems",
        items: [
            "End-to-end workflow automation (n8n/Make)",
            "Custom API & webhook integrations",
            "Scalable cloud automation architecture",
            "Legacy system bridge & modernization",
        ],
    },
    {
        icon: Code2,
        title: "Data Intelligence",
        items: [
            "Predictive analytics & forecasting",
            "Real-time operational dashboards",
            "Data infrastructure engineering",
            "Automated KPI tracking & reporting",
        ],
    },
];

const teamMembers = [
    {
        name: "Godson Saji",
        role: "Founder & Lead AI Engineer",
        bio: "Full-stack AI engineer with hands-on experience across LLM integration, workflow automation, and cloud architecture. Built BoldFlow Labs to deliver the kind of thoughtful, high-impact automation work that large agencies overlook.",
        initials: "GS",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="About BoldFlow Labs">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                                About Us
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                A Small Team With a{" "}
                                <span className="shimmer-text">Deep Focus</span>{" "}
                                on AI Automation That Works
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-base text-gray-300 max-w-xl">
                                BoldFlow Labs isn&apos;t a massive consultancy. We&apos;re a
                                specialist AI automation team — lean by design, technical by
                                nature, and deeply committed to delivering systems that genuinely
                                solve problems.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding pt-0" aria-label="Our story">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <SlideLeft custom={0}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                                Our Story
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Why We Built{" "}
                                <span className="gradient-text">BoldFlow Labs</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    BoldFlow Labs was born from a frustration with how AI automation
                                    is typically delivered.
                                </p>
                                <p>
                                    Too many agencies sell automation as magic: a dashboard full of
                                    promises and a product that underdelivers. We saw businesses
                                    investing in &quot;AI solutions&quot; that were little more than
                                    off-the-shelf integrations wrapped in consulting fees — with
                                    no customization and no ongoing accountability.
                                </p>
                                <p>
                                    We started BoldFlow Labs to do it properly. That means engineering
                                    depth, genuine customization, and systems designed to evolve —
                                    not just to be demonstrated once.
                                </p>
                                <p>
                                    We&apos;re an early-stage agency, and we&apos;re honest about that.
                                    But our engineering capability isn&apos;t. We bring hands-on experience in
                                    LLM architecture, cloud engineering, and data science to every project
                                    without the overhead of a bloated organization.
                                </p>
                            </div>
                        </SlideLeft>

                        <SlideRight custom={0}>
                            <div className="glass rounded-xl p-8 lg:mt-24">
                                <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-[#00a2ff]" />
                                    What Defines Us
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            label: "Technical Depth",
                                            desc: "We write production code and deploy systems meant to scale. We aren't slide-deck consultants.",
                                        },
                                        {
                                            label: "Intentional Scale",
                                            desc: "Small team by choice — so every client gets senior-level attention and direct communication with engineers.",
                                        },
                                        {
                                            label: "Outcome Focus",
                                            desc: "We define KPIs upfront and take responsibility for results — not just billable hours.",
                                        },
                                        {
                                            label: "Engineering Honesty",
                                            desc: "If your use case doesn't need AI or a simple script works better, we'll tell you. No over-engineering.",
                                        },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <p className="text-white text-sm font-semibold mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SlideRight>
                    </div>
                </div>
            </section>

            {/* Philosophy Cards */}
            <section
                className="section-padding relative"
                style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, transparent 100%)" }}
                aria-label="Our philosophy"
            >
                <div className="max-w-7xl mx-auto">
                    <FadeUp custom={0} className="mb-14">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Philosophy
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            How We Think About{" "}
                            <span className="gradient-text">Automation</span>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {philosophy.map((item, i) => (
                            <FadeUp
                                key={item.title}
                                custom={i}
                                className="group glass glass-hover rounded-xl p-7 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066ff]/10 group-hover:border-[#00a2ff]/20 transition-all duration-300">
                                    <item.icon className="w-5 h-5 text-[#00a2ff] icon-hover-spin" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Bring to the Table */}
            <section className="section-padding" aria-label="Our capabilities and expertise">
                <div className="max-w-7xl mx-auto">
                    <FadeUp custom={0} className="mb-14">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Expertise
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            What We Bring to{" "}
                            <span className="gradient-text">the Table</span>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <FadeUp key={cap.title} custom={i}>
                                <div className="glass rounded-xl p-7 h-full">
                                    <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center mb-4">
                                        <cap.icon className="w-5 h-5 text-[#00a2ff]" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-4">
                                        {cap.title}
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {cap.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="w-1 h-1 rounded-full bg-[#00a2ff]/40 mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section
                className="section-padding relative"
                style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, transparent 100%)" }}
                aria-label="Our team"
            >
                <div className="max-w-7xl mx-auto">
                    <FadeUp custom={0} className="mb-14">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            The Team
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Meet the People Behind{" "}
                            <span className="gradient-text">BoldFlow Labs</span>
                        </h2>
                        <p className="text-gray-300 max-w-xl text-base">
                            We&apos;re a lean, senior-level team that works directly with every
                            client. No hand-offs to junior staff, no layers of project management
                            overhead.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                        {teamMembers.map((member, i) => (
                            <FadeUp
                                key={member.name}
                                custom={i}
                                className="group glass glass-hover rounded-xl p-7 transition-all duration-300"
                            >
                                {/* Avatar */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066ff]/20 to-[#00a2ff]/10 border border-[#00a2ff]/15 flex items-center justify-center mb-5 group-hover:from-[#0066ff]/30 group-hover:to-[#00a2ff]/20 transition-all duration-300">
                                    <span className="text-lg font-bold text-[#00a2ff]">
                                        {member.initials}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#00a2ff]/70 text-sm font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Get in touch">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want to Build Something{" "}
                            <span className="shimmer-text">That Matters?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            We&apos;re selective about the projects we take on — because we
                            go deep on every one. If you&apos;re looking for a hands-on, expert-led AI
                            automation partner, we&apos;d love to hear from you.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
