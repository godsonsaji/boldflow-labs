import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "Case Studies — AI Automation Results | BoldFlow Labs",
    description:
        "BoldFlow Labs is building its portfolio. See our approach to AI automation, or apply to be a founding client and become one of our first published case studies.",
    alternates: { canonical: "/case-studies" },
    openGraph: {
        title: "Case Studies — BoldFlow Labs",
        description:
            "Our case studies are coming soon. Apply to be a founding client and build with us.",
        url: "/case-studies",
    },
};

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Case studies">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Case Studies
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            We&apos;re Building Our{" "}
                            <span className="shimmer-text">Portfolio</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto">
                            We believe results should speak louder than marketing. Our published
                            case studies are coming soon — co-created with our founding client
                            cohort and based on real outcomes, not hypotheticals.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Coming Soon Message */}
            <section className="section-padding pt-0" aria-label="Case studies coming soon">
                <div className="max-w-3xl mx-auto">
                    <FadeUp custom={0}>
                        <div className="glass rounded-2xl p-10 md:p-14 text-center">
                            <div className="w-14 h-14 rounded-xl bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-7 h-7 text-[#00a2ff]" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Real Results, Coming Soon
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xl mx-auto">
                                As a young agency, we&apos;re focused on delivering exceptional
                                work for our first clients before packaging it for public
                                consumption. Each case study we publish will include measurable
                                outcomes, transparent methodology, and direct client input.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
                                In the meantime, learn about our{" "}
                                <Link href="/testimonials" className="text-[#00a2ff] hover:underline">
                                    commitments and founding client programme
                                </Link>
                                , or{" "}
                                <Link href="/services" className="text-[#00a2ff] hover:underline">
                                    explore our services
                                </Link>{" "}
                                to see how we work.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Become a founding client">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want to Be One of Our{" "}
                            <span className="shimmer-text">First Case Studies?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">
                            Join our founding client cohort and receive hands-on AI automation
                            at introductory pricing — in exchange for co-creating a published
                            case study of your results.
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
