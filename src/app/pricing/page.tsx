import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import { PricingCards } from "@/components/PricingInteractive";

export const metadata: Metadata = {
    title: "AI Automation Pricing | BoldFlow Labs — Transparent Engagement Models",
    description:
        "Simple, transparent engagement models designed to give you exactly the level of AI automation support you need — from focused sprints to full-scale partnerships.",
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "AI Automation Pricing | BoldFlow Labs — Transparent Engagement Models",
        description:
            "Simple, transparent engagement models designed to give you exactly the level of AI automation support you need.",
        url: "/pricing",
    },
};

const plans = [
    {
        name: "Starter Sprint",
        description:
            "A focused, time-boxed engagement designed to deliver a single, high-impact automation or AI integration. Ideal for teams that want to validate the value of automation before committing to a larger programme.",
        startingPrice: "$3,500",
        features: [
            "Workflow audit and automation opportunity mapping",
            "Design and build of one core automation or AI agent",
            "Integration with up to two existing tools or platforms",
            "Testing, deployment, and 30-day post-launch support",
            "Documentation and handover training",
        ],
        popular: false,
    },
    {
        name: "Growth Automation",
        description:
            "A multi-sprint engagement that addresses 3\u20135 interconnected workflow automation challenges. Designed for businesses ready to make automation a structural part of how they operate.",
        startingPrice: "$8,500",
        features: [
            "Full operational diagnostic and priority automation roadmap",
            "Design and build of multiple automation pipelines or AI systems",
            "Multi-system integration across your tech stack",
            "KPI dashboards and performance tracking setup",
            "90-day post-launch monitoring and optimization support",
        ],
        popular: true,
    },
    {
        name: "Enterprise Partnership",
        description:
            "A bespoke, long-term engagement for organizations with complex, large-scale automation needs. Includes a dedicated team, custom AI development, enterprise security frameworks, and a continuous improvement retainer.",
        startingPrice: null,
        features: [
            "Dedicated senior AI engineer and project manager",
            "End-to-end custom AI and automation development",
            "Enterprise security protocols and compliance support",
            "Ongoing retainer with regular optimization cycles",
            "Strategic advisory and quarterly roadmap reviews",
        ],
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Pricing overview">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -left-40 opacity-20" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Pricing
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            Simple, Transparent Pricing —{" "}
                            <span className="shimmer-text">Aligned With Your Goals</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto mb-4">
                            We structure our engagements to match the scope of what you&apos;re
                            trying to achieve — whether that&apos;s a focused automation sprint
                            or a full-scale AI integration.
                        </p>
                        <p className="text-sm text-gray-400 max-w-xl mx-auto">
                            All pricing is custom-quoted after an initial discovery session,
                            but here&apos;s a clear picture of how we work and what to expect.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding pt-0" aria-label="Engagement models">
                <div className="max-w-7xl mx-auto">
                    <PricingCards plans={plans} />
                </div>
            </section>

            {/* Discovery Call Note */}
            <section className="pb-12" aria-label="Discovery call note">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <FadeUp custom={0}>
                        <div className="glass rounded-xl p-8">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                All engagements begin with a{" "}
                                <span className="text-white font-medium">free 30-minute discovery call</span>.
                                No obligation. No boilerplate proposals. Just an honest
                                conversation about what you&apos;re trying to achieve.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Book your discovery call">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Get{" "}
                            <span className="shimmer-text">Started?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            Book your free discovery call to get a custom quote tailored
                            to your specific needs and goals.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Book Your Free Discovery Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
