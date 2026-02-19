import type { Metadata } from "next";
import Link from "next/link";
import {
    ShieldCheck,
    Lightbulb,
    Eye,
    HeartHandshake,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "What to Expect — Working With BoldFlow Labs",
    description:
        "BoldFlow Labs is building its track record one client at a time. Learn what to expect from a founding partnership, our commitments, and how we earn your trust.",
    alternates: { canonical: "/testimonials" },
    openGraph: {
        title: "What to Expect — BoldFlow Labs",
        description:
            "We\u2019re early-stage, and we\u2019re building this one client at a time. Here\u2019s what we promise to every engagement.",
        url: "/testimonials",
    },
};

const commitments = [
    {
        icon: Eye,
        title: "Total Transparency",
        description:
            "You\u2019ll know what we\u2019re working on, why, and how it\u2019s progressing \u2014 at every stage. No black boxes, no buzzwords, and no surprises at go-live.",
    },
    {
        icon: ShieldCheck,
        title: "Rigorous Delivery",
        description:
            "Every solution goes through thorough testing, documentation, and handover training. We don\u2019t ship until it works, and we don\u2019t walk away until you\u2019re confident running it.",
    },
    {
        icon: Lightbulb,
        title: "Honest Counsel",
        description:
            "If something isn\u2019t the right fit, we\u2019ll tell you. If a simpler solution exists, we\u2019ll recommend it \u2014 even if it means a smaller engagement for us.",
    },
    {
        icon: HeartHandshake,
        title: "Deep Engagement",
        description:
            "By choice, we take on a limited number of clients. This means you get senior-level attention, fast communication, and a team that genuinely understands your business.",
    },
    {
        icon: Sparkles,
        title: "Post-Launch Support",
        description:
            "Every engagement includes a defined support window after deployment. We monitor, optimize, and make sure what we built continues to perform as your operations evolve.",
    },
];

export default function TestimonialsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="What to expect">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            What to Expect
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            What to Expect When You Work With{" "}
                            <span className="shimmer-text">BoldFlow Labs</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto">
                            We&apos;re not going to pretend we have 500 case studies and a wall of
                            testimonials. We&apos;re early-stage, and we&apos;re building this one
                            client at a time. What we can share is exactly what you&apos;ll get when
                            you work with us — and the commitments we make to every engagement.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Commitments */}
            <section className="section-padding pt-0" aria-label="Our commitments to every client">
                <div className="max-w-7xl mx-auto">
                    <FadeUp custom={0} className="mb-14">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Promise
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Our Commitments to{" "}
                            <span className="gradient-text">Every Client</span>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {commitments.map((item, i) => (
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

            {/* Founding Client Cohort */}
            <section
                className="section-padding relative"
                style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, transparent 100%)" }}
                aria-label="Founding client programme"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <SlideLeft custom={0}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                                Limited Availability
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                How We&apos;ll Build Our{" "}
                                <span className="gradient-text">Track Record</span>
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We&apos;re actively onboarding a founding client cohort — a small group
                                    of businesses that will be the first to experience our full-service AI
                                    automation delivery.
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Founding clients receive the same deep-focus engagement and technical
                                    rigour as every future client, but at an introductory investment level —
                                    in exchange for their partnership in helping us refine our delivery and
                                    build public case studies.
                                </p>
                            </div>
                        </SlideLeft>

                        <SlideRight custom={0}>
                            <div className="glass rounded-xl p-8">
                                <h3 className="text-white text-lg font-bold mb-4">
                                    What Founding Clients Get
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Full-scope automation or AI build at founding-tier pricing",
                                        "Direct senior-level attention on every engagement",
                                        "Priority access to new capabilities as we expand",
                                        "Co-creation of a public case study and results summary",
                                        "Extended post-launch support and optimization window",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                                            <Sparkles className="w-4 h-4 text-[#00a2ff]/60 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SlideRight>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Apply for founding client engagement">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Interested in Becoming a{" "}
                            <span className="shimmer-text">Founding Client?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            We&apos;re accepting a limited number of founding engagements. If
                            you&apos;re looking for a hands-on, expert-led AI automation partner,
                            we&apos;d love to hear from you.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Apply for a Founding Client Engagement
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
