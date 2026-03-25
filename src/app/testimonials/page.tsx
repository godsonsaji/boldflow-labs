import type { Metadata } from "next";
import Link from "next/link";
import { Eye, ShieldCheck, Lightbulb, HeartHandshake, Sparkles, ArrowRight, Compass } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "Engineering Manifesto | BoldFlow Labs",
    description: "The core commitments and engineering principles that define every BoldFlow Labs deployment.",
};

const commitments = [
    {
        id: "01",
        icon: Eye,
        title: "Total Transparency",
        description:
            "You’ll know what we’re building, why, and how it’s progressing at every node. No black boxes, no buzzwords, and absolute clarity on the underlying architecture.",
    },
    {
        id: "02",
        icon: ShieldCheck,
        title: "Rigorous Delivery",
        description:
            "Every solution runs through unit testing, end-to-end simulation, and strict error logging. We don’t ship fragile boilerplate, and we don’t close the sprint until runtime is flawless.",
    },
    {
        id: "03",
        icon: Lightbulb,
        title: "Engineering Honesty",
        description:
            "If a simpler, non-AI solution exists to solve your bottleneck, we’ll build it—even if it reduces our scope. We engineer for maximum ROI, not maximum complexity.",
    },
    {
        id: "04",
        icon: HeartHandshake,
        title: "Intentional Scale",
        description:
            "By design, we deploy a limited number of systems per quarter. You deal directly with the lead system architect, removing standard agency account-manager friction.",
    },
    {
        id: "05",
        icon: Sparkles,
        title: "Post-Deploy Optimization",
        description:
            "Go-live is merely the initialization phase. We track telemetry, monitor API limits, and ensure your workflow evolves algorithmically as your business logic changes.",
    }
];

export default function TestimonialsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.05),transparent_60%)] pointer-events-none z-0" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#FF5722] mb-4">
                                {"//"} Engineering Manifesto
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                                The Build <span className="text-[#A1A1AA] italic font-serif">Commitments.</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-lg text-[#71717A] font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                                Trust is established through predictable, high-fidelity execution. We are replacing subjective promises with unbreakable engineering standards.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#030303] border-b border-[#1A1A1A]" aria-label="Our Commitments">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1A1A1A] bg-[#0A0A0A]">
                        {commitments.map((item, i) => (
                            <FadeUp
                                key={item.title}
                                custom={i}
                                className="group p-8 md:p-12 border-b border-r border-[#1A1A1A] hover:bg-[#111] transition-colors duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00a2ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <span className="block text-[10px] font-mono text-[#333] mb-6 group-hover:text-[#00a2ff]/50 transition-colors">
                                    [ RULE_{item.id} ]
                                </span>
                                <item.icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-white transition-colors mb-4" />
                                <h3 className="text-xl font-medium text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[#71717A] text-sm leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </FadeUp>
                        ))}
                        {/* Empty block to complete the 3-column grid cleanly */}
                        <div className="hidden lg:flex p-12 border-b border-[#1A1A1A] items-center justify-center opacity-20">
                            <Compass className="w-12 h-12 text-[#333]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden bg-[#0A0A0A] text-center border-t border-[#1A1A1A]">
                 <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Architect Your Expansion
                    </h2>
                    <p className="text-[#A1A1AA] mb-10 text-lg font-light">
                        Experience execution without compromise. Schedule a technical teardown to map your current operational friction.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                    >
                        Schedule Diagnostic
                        <ArrowRight className="w-4 h-4 text-black" />
                    </Link>
                </div>
            </section>
        </>
    );
}
