"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const traits = [
    {
        title: "Technical Depth",
        desc: "We write production code and deploy robust architectures. We are not slide-deck consultants padding hours with theory."
    },
    {
        title: "Intentional Scale",
        desc: "We maintain a deliberately small team and limited roster. You get direct access to the senior engineers architecting your systems."
    },
    {
        title: "Outcome Focus",
        desc: "KPIs are defined explicitly upfront. We hold ourselves absolutely accountable for deterministic results, not arbitrary billable hours."
    },
    {
        title: "Engineering Honesty",
        desc: "If a simpler, cheaper solution works better than custom AI logic, we will tell you. We refuse to over-engineer."
    }
];

const philosophy = [
    { title: "Total Transparency", desc: "No vague status updates. Full visibility on build, cost, and progress." },
    { title: "Engineering Integrity", desc: "No trendy tools for their own sake. The right solution over a massive engagement." },
    { title: "Outcome-First Thinking", desc: "Every line of automation starts backwards from a clear business objective." },
    { title: "Built for Partnership", desc: "Small roster equals faster responses, deeper context, and senior attention." },
];

const expertise = [
    "LLM fine-tuning & RAG API integration",
    "Agentic AI & autonomous multi-agent orchestration",
    "End-to-end workflow automation (n8n/Make)",
    "Proprietary AI model development",
    "Scalable cloud automation architecture",
    "Real-time operational dashboards & Predictive analytics"
];

export default function AboutPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                <div className="absolute inset-0 radial-glow opacity-30 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} ABOUT THE LABS
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 md:text-[80px] text-[#F5F5F5] uppercase leading-[0.9] mb-8 max-w-5xl tracking-tighter"
                    >
                        A deep algorithmic focus on automation<br/>that actually works.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#F5F5F5] max-w-2xl font-medium mb-4"
                    >
                        Lean by design. Technical by nature. Deeply committed to systems that genuinely solve massive operational problems.
                    </motion.p>
                </div>
            </section>

            {/* ── ORIGIN STORY ─────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                     <div>
                         <h2 className="text-h2 text-[#F5F5F5] uppercase sticky top-32">
                             Why We Built<br/>This Pipeline.
                         </h2>
                     </div>
                     <div className="flex flex-col gap-8 text-[#A3A3A3] text-body-lg leading-relaxed font-light">
                         <p>
                             We were born entirely from frustration. The current landscape is saturated with agencies selling automation as undefined magic—delivering off-the-shelf integrations wrapped tightly in highly inflated consulting fees, with zero customization and absolutely no accountability for end results.
                         </p>
                         <p>
                             BoldFlow Labs was constructed differently. We do it properly. That means profound engineering depth, genuine structural customization, and deterministic systems designed deliberately to evolve with your scale.
                         </p>
                         <p className="text-[#F5F5F5] font-medium border-l border-[#0066ff] pl-6 py-2">
                             We are early-stage, and we are completely honest about it. But our engineering capability is absolutely not early-stage.
                         </p>
                     </div>
                 </div>
            </section>

            {/* ── TRAITS & PHILOSOPHY ──────────────────── */}
            <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1A1A1A] mb-32">
                        {traits.map((trait, i) => (
                            <div key={i} className="bg-[#050505] p-8 service-card flex flex-col relative justify-between">
                                 <div>
                                     <div className="text-label text-[#525252] mb-12">{"//"} {String(i+1).padStart(2,'0')}</div>
                                     <h3 className="text-h3 text-[#F5F5F5] uppercase mb-4">{trait.title}</h3>
                                     <p className="text-body text-[#A3A3A3] leading-relaxed mb-8">{trait.desc}</p>
                                 </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-h2 text-[#F5F5F5] uppercase mb-8">
                                How We Calculate<br/>Automation.
                            </h2>
                            <ul className="space-y-6 flex flex-col items-start border-l border-[#1A1A1A] pl-8">
                                 {philosophy.map((item, i) => (
                                     <li key={i} className="flex gap-4 items-start">
                                         <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                         <div>
                                             <div className="text-[#F5F5F5] font-medium uppercase text-sm tracking-wider mb-2">{item.title}</div>
                                             <span className="text-sm text-[#A3A3A3]">{item.desc}</span>
                                         </div>
                                     </li>
                                 ))}
                            </ul>
                        </div>
                        <div className="bg-[#050505] border border-[#1A1A1A] p-12 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-0 pointer-events-none" />
                             <div className="relative z-10">
                                 <div className="text-label text-[#0066ff] mb-8">{"//"} STACK ARCHITECTURE</div>
                                 <h3 className="text-[24px] font-medium text-[#F5F5F5] uppercase leading-tight mb-8">What we bring<br/>to the table.</h3>
                                 <div className="flex flex-wrap gap-2">
                                     {expertise.map(exp => (
                                         <span key={exp} className="font-mono text-[11px] text-[#A3A3A3] border border-[#333333] px-3 py-1.5 uppercase tracking-wider">{exp}</span>
                                     ))}
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE TEAM ─────────────────────────────── */}
            <section className="py-32 bg-[#050505] border-b border-[#1A1A1A] relative">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                       <h2 className="text-h2 text-[#F5F5F5] uppercase mb-8">
                           The Lead<br/>Engineer.
                       </h2>
                       <p className="text-[#A3A3A3] text-body-lg font-light leading-relaxed mb-8">
                           Full-stack AI engineer. Hands-on directly across LLM integration, advanced workflow pipelines, and cloud deployment architecture.
                       </p>
                       <p className="text-[#71717A] text-body leading-relaxed">
                           Built BoldFlow Labs explicitly to deliver high-impact, deterministic automation work that bloated larger agencies actively overlook or overcharge for.
                       </p>
                    </div>

                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="w-[400px] aspect-[4/5] border border-[#1A1A1A] bg-[#0A0A0A] relative p-4 group overflow-hidden grayscale contrast-125 transition-all duration-300 hover:grayscale-0 hover:border-[#333]">
                            {/* Placeholder for high-contrast portrait */}
                            <div className="w-full h-full bg-[#111] border border-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:8px_8px] opacity-20 pointer-events-none" />
                                <span className="text-[#333] font-mono text-xl tracking-widest uppercase">PORTRAIT_DATA</span>
                            </div>
                            
                            <div className="absolute bottom-6 right-6 bg-[#050505] border border-[#1A1A1A] px-4 py-2 font-mono flex flex-col items-end">
                                <span className="text-[12px] text-[#F5F5F5] uppercase tracking-wider">Godson Saji</span>
                                <span className="text-[10px] text-[#0066ff] uppercase tracking-widest mt-1">{"//"} Founder</span>
                            </div>
                            
                            <div className="target-hex target-hex-left-top" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PAGE CTA ─────────────────────────────── */}
            <section className="py-32 lg:py-48 flex justify-center px-6 bg-[#050505]">
                <div className="w-full max-w-[800px] border border-[#1A1A1A] bg-[#0A0A0A] relative p-16 md:p-24 text-center group active:scale-[0.99] transition-transform duration-150">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-[1px] z-20">
                        <div className="w-full h-full animate-sweep-border opacity-50" />
                    </div>

                    <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                    <div className="absolute inset-0 radial-glow z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="target-hex target-hex-left-top" />
                    <div className="target-hex target-hex-right-bottom" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-12 leading-tight">
                            WANT TO BUILD SOMETHING THAT MATTERS?
                        </h2>
                        
                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                            INITIALIZE CONVERSATION
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
