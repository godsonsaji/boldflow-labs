import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Database, Network, GitBranch, Layers } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "The Architecture Firm | BoldFlow Labs",
    description: "Built by engineers, for scale. Meet the lead architect operating BoldFlow Labs.",
};

const stackNodes = [
    {
        icon: Cpu,
        layer: "Reasoning Layer",
        tech: "GPT-4o / Claude 3.5 Sonnet / LLaMA 3",
        role: "Deterministic prompt engineering and multi-agent reasoning chains.",
    },
    {
        icon: Network,
        layer: "Orchestration Layer",
        tech: "n8n / Custom TypeScript Environments",
        role: "Event-driven webhook mapping and high-throughput logic execution.",
    },
    {
        icon: Database,
        layer: "Context Layer",
        tech: "Pinecone / PostgreSQL / Redis",
        role: "Vector embeddings for semantic RAG retrieval and stateful memory loops.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]">
                <div className="absolute inset-0 bg-[#050505] noise-overlay z-0" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_left,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#00a2ff] mb-4">
                                {"//"} System Architects
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                                We Engineer Systems.<br/>
                                <span className="text-[#A1A1AA] italic font-serif">Not Slide Decks.</span>
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-lg text-[#71717A] max-w-2xl font-light leading-relaxed mb-8">
                                Most agencies sell automation as magic. We sell it as applied logic. BoldFlow Labs is an engineering firm built specifically to untangle manual operations and replace them with deterministic code.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* The Architect */}
            <section className="py-32 border-b border-[#1A1A1A] bg-[#030303]" aria-label="The Lead Architect">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <SlideLeft custom={0}>
                            <div className="mb-8">
                                <Terminal className="w-8 h-8 text-[#FF5722] mb-6" />
                                <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                                    Intentional Scale.
                                </h2>
                                <p className="text-[#A1A1AA] font-mono text-[10px] uppercase tracking-widest mb-6">
                                    [ LEAD_ARCHITECT_PROFILE ]
                                </p>
                            </div>
                            <div className="space-y-6 text-[#A1A1AA] text-sm leading-relaxed font-light">
                                <p>
                                    As the Founder and Lead System Architect at BoldFlow Labs, my premise is simple: you shouldn&apos;t be handed off to a junior account manager once the contract is signed.
                                </p>
                                <p>
                                    I restrict our client load so that I can personally architect, write, and deploy the code for your infrastructure. Coming from a deep full-stack engineering background, I look at business workflows as data structures—if inputs and outputs can be mapped, they can be automated.
                                </p>
                                <p>
                                    We don&apos;t rely on bloated off-the-shelf SaaS limits. We build direct API pipelines, spin up local vector databases, and orchestrate logic precisely aligned to how your company actually moves data. 
                                </p>
                                <p className="pt-4 text-white font-mono text-xs">
                                    — Godson Saji <span className="text-[#71717A]">{"//"} Lead Engineer</span>
                                </p>
                            </div>
                        </SlideLeft>

                        <SlideRight custom={0} className="relative h-full hidden lg:block">
                            <div className="absolute inset-0 bg-[#0A0A0A] border border-[#1A1A1A] rounded-[2px] overflow-hidden flex items-center justify-center p-8">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#333]">V_1.0.0</div>
                                <div className="absolute bottom-0 left-0 p-4 font-mono text-[10px] text-[#333]">ROOT_ACCESS</div>
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-[#111] border border-[#333] flex items-center justify-center mb-6">
                                        <GitBranch className="w-10 h-10 text-[#71717A]" />
                                    </div>
                                    <h3 className="text-2xl font-mono text-white mb-2">GS_SysAuth</h3>
                                    <p className="text-xs text-[#00a2ff] font-mono uppercase tracking-widest">
                                        Admin Privileges Online
                                    </p>
                                </div>
                            </div>
                        </SlideRight>
                    </div>
                </div>
            </section>

            {/* The Tech Stack */}
            <section className="py-32 border-b border-[#1A1A1A] bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeUp custom={0} className="mb-16 md:mb-24 text-center">
                        <Layers className="w-8 h-8 text-[#A1A1AA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-medium text-white">
                            The Infrastructure Stack
                        </h2>
                    </FadeUp>

                    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                        {stackNodes.map((node, i) => (
                            <FadeUp key={node.layer} custom={i}>
                                <div className="group bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#333] transition-colors p-6 md:p-8 rounded-[2px] flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                                    <div className="w-14 h-14 shrink-0 rounded-[2px] bg-[#111] border border-[#1A1A1A] flex items-center justify-center group-hover:border-[#FF5722]/30 transition-colors">
                                        <node.icon className="w-6 h-6 text-[#71717A] group-hover:text-[#FF5722] transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[10px] font-mono text-[#00a2ff] uppercase tracking-widest mb-2 block">
                                            {node.layer}
                                        </span>
                                        <h3 className="text-xl font-medium text-white mb-2">
                                            {node.tech}
                                        </h3>
                                        <p className="text-sm text-[#71717A] font-light leading-relaxed">
                                            {node.role}
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden bg-[#0A0A0A] text-center border-t border-[#1A1A1A]">
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Bypass the Templates
                    </h2>
                    <p className="text-[#A1A1AA] mb-10 text-lg font-light">
                        Talk directly to an engineer capable of mapping your logic into code. No sales pitch, just architectural validation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-10 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                    >
                        Schedule Technical Review
                        <ArrowRight className="w-4 h-4 text-black ml-2 inline" />
                    </Link>
                </div>
            </section>
        </>
    );
}
