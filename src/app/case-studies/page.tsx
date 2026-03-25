import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, Clock, IterationCcw } from "lucide-react";
import { FadeUp, SlideLeft } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "The Founding Cohort | BoldFlow Labs",
    description: "Architecting the future of automation. Join our exclusive founding cohort program to co-create published case studies.",
};

const metrics = [
    {
        icon: Clock,
        title: "Time Recovery",
        desc: "Quantifying hours reclaimed from manual data entry, scheduling algorithms, and repetitive tasks.",
    },
    {
        icon: Activity,
        title: "Lead Velocity",
        desc: "Measuring the decrease in SLA response times and the increase in prospect conversion rates.",
    },
    {
        icon: IterationCcw,
        title: "Error Reduction",
        desc: "Tracking the elimination of human error in data transfers, synchronization, and compliance workflows.",
    }
];

export default function CaseStudiesPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_left,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#00a2ff] mb-4">
                            {"//"} Portfolio Status: INITIALIZING
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.05]">
                            Architecting The <span className="text-[#A1A1AA] italic font-serif">Future.</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-lg text-[#71717A] max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            We don&apos;t rely on hypothetical marketing. True engineering speaks through data. We are currently architecting systems for our Founding Cohort to establish public, verifiable benchmarks.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="py-24 border-b border-[#1A1A1A] bg-[#050505]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <SlideLeft custom={0}>
                            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
                                The Founding Cohort
                            </h2>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-light">
                                As an emerging architectural firm for AI automation, we are highly selective about our initial deployments. We are currently onboarding 3 founding partners for Q3.
                            </p>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 font-light">
                                Founding partners receive our complete technical dedication at introductory investment levels—in exchange for co-creating a rigorous, published tear-down of the engineering methodology and business outcomes.
                            </p>
                            <div className="space-y-4">
                                <p className="text-[10px] uppercase tracking-widest font-mono text-[#71717A]">Target Telemetry Metrics</p>
                                <div className="grid gap-4">
                                    {metrics.map((m, i) => (
                                        <div key={i} className="flex gap-4 items-start bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded-[2px]">
                                            <m.icon className="w-5 h-5 text-[#FF5722] mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-medium text-white mb-1">{m.title}</h4>
                                                <p className="text-xs text-[#71717A] leading-relaxed">{m.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SlideLeft>
                        
                        <FadeUp custom={1} className="relative h-full hidden md:block">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] rounded-[2px] border border-[#1A1A1A] flex flex-col items-center justify-center p-8 text-center overlow-hidden">
                                <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-[2px]" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-[2px] bg-[#111] border border-[#333] flex items-center justify-center mx-auto mb-6">
                                        <Activity className="w-8 h-8 text-[#00a2ff]" />
                                    </div>
                                    <h3 className="text-xl font-mono text-white mb-2">Awaiting Data</h3>
                                    <p className="text-xs text-[#71717A] max-w-sm">
                                        System outputs will be published upon conclusion of the Q3 deployment sprints.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden bg-[#0A0A0A] text-center border-t border-[#1A1A1A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Secure a Founding Deployment
                    </h2>
                    <p className="text-[#A1A1AA] mb-10 text-lg font-light">
                        We are currently accepting structural diagnostics for our final Q3 cohort slots. 
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                    >
                        Apply for Founding Cohort
                        <ArrowRight className="w-4 h-4 text-black" />
                    </Link>
                </div>
            </section>
        </>
    );
}
