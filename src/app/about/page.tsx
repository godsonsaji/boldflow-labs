"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const traits = [
    {
        title: "Technical Depth",
        desc: "We write production code and deploy robust architectures. We are not slide-deck consultants padding hours with theory."
    },
    {
        title: "Intentional Scale",
        desc: "We maintain a deliberately small team and limited roster. You get direct access to the engineers architecting your systems."
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
    "End-to-end workflow automation (n8n/Make)",
    "Custom AI Chatbots & Support Agents",
    "CRM & Pipeline Integration",
    "Smart Scheduling & Lead Routing",
    "Real-time operational dashboards"
];

export default function AboutPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1A1A1A] overflow-hidden bg-[#0A0A0A]">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase tracking-wider"
                    >
                        About Us
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] md:text-h1 text-[#F5F5F5] font-medium leading-[1.1] mb-8 max-w-4xl tracking-tight"
                    >
                        We Build Systems Because We Hate Busywork.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light mb-4 leading-relaxed"
                    >
                        BoldFlow Labs is an independent AI automation agency focused entirely on delivering real results for service businesses.
                    </motion.p>
                </div>
            </section>

            {/* ── ORIGIN STORY ─────────────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                     <div>
                         <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight sticky top-32">
                             Why We Built<br/>BoldFlow Labs.
                         </h2>
                     </div>
                     <div className="flex flex-col gap-6 text-[#A3A3A3] text-[16px] leading-relaxed">
                         <p>
                             We saw too many great service businesses bleeding revenue simply because they couldn't keep up with manual admin tasks. Teams were drowning in lead follow-ups, repetitive data entry, and dropped communications.
                         </p>
                         <p>
                             BoldFlow Labs was built to fix exactly that. We engineer custom automation systems that do the heavy lifting in the background, giving founders and operators their time back to focus on actual growth. There's no fluff, no buzzwords, and no off-the-shelf band-aids.
                         </p>
                         <p className="border-l border-[#0066ff] pl-6 py-2 mt-4 text-[#F5F5F5] font-medium">
                             We rely on profound engineering depth to build reliable infrastructures that scale with your business.
                         </p>
                     </div>
                 </div>
            </section>

            {/* ── TRAITS & PHILOSOPHY ──────────────────── */}
            <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                        {traits.map((trait, i) => (
                            <div key={i} className="bg-[#050505] p-8 border border-[#1A1A1A] flex flex-col relative justify-between hover:border-[#333333] transition-colors">
                                 <div>
                                     <div className="text-[12px] font-medium text-[#71717A] mb-8">{String(i+1).padStart(2,'0')}</div>
                                     <h3 className="text-[20px] font-medium text-[#F5F5F5] mb-4">{trait.title}</h3>
                                     <p className="text-[15px] text-[#A3A3A3] leading-relaxed mb-4">{trait.desc}</p>
                                 </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-[32px] font-medium text-[#F5F5F5] tracking-tight mb-8">
                                How We Calculate<br/>Automation.
                            </h2>
                            <ul className="space-y-8 flex flex-col items-start pt-4">
                                 {philosophy.map((item, i) => (
                                     <li key={i} className="flex gap-4 items-start">
                                         <span className="text-[#0066ff] font-medium mt-0.5 text-[16px]">0{i+1}.</span>
                                         <div>
                                             <div className="text-[#F5F5F5] font-medium text-[16px] mb-2">{item.title}</div>
                                             <span className="text-[15px] text-[#A3A3A3] leading-relaxed">{item.desc}</span>
                                         </div>
                                     </li>
                                 ))}
                            </ul>
                        </div>
                        
                        <div className="bg-[#050505] border border-[#1A1A1A] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
                             <div className="relative z-10">
                                 <div className="text-[12px] font-medium uppercase tracking-wider text-[#0066ff] mb-6">Stack Architecture</div>
                                 <h3 className="text-[28px] font-medium text-[#F5F5F5] tracking-tight leading-tight mb-10">What we bring<br/>to the table.</h3>
                                 <div className="flex flex-col gap-4">
                                     {expertise.map(exp => (
                                         <div key={exp} className="flex items-center gap-3">
                                             <div className="w-1.5 h-1.5 bg-[#0066ff] rounded-full" />
                                             <span className="text-[15px] text-[#E5E5E5]">{exp}</span>
                                         </div>
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
                    <div className="lg:col-span-6 lg:order-2">
                       <h2 className="text-[32px] font-medium text-[#F5F5F5] tracking-tight mb-6">
                           The Lead<br/>Engineer.
                       </h2>
                       <p className="text-[#A3A3A3] text-[16px] leading-relaxed mb-6">
                           Godson Saji is a full-stack AI engineer focused on practical workflow pipelines and robust integrations. He works directly with every client, completely eliminating the "telephone game" typical of traditional agencies.
                       </p>
                       <p className="text-[#A3A3A3] text-[16px] leading-relaxed">
                           He built BoldFlow Labs explicitly to deliver high-impact, deterministic automation work that bloated larger agencies actively overlook or overcharge for.
                       </p>
                    </div>

                    <div className="lg:col-span-6 lg:order-1 flex justify-center lg:justify-start">
                        <div className="w-[320px] md:w-[400px] aspect-[4/5] bg-[#0A0A0A] border border-[#1A1A1A] relative p-4 group overflow-hidden transition-all duration-300 hover:border-[#333]">
                            <div className="w-full h-full bg-[#111111] flex flex-col items-center justify-center text-center px-6">
                                {/* Photo Placeholder */}
                                <div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#333333] mb-6 flex items-center justify-center">
                                    <span className="text-[#555] font-medium tracking-widest text-[10px]">PHOTO</span>
                                </div>
                                <h3 className="text-xl font-medium text-[#F5F5F5] mb-2">Godson Saji</h3>
                                <p className="text-[#0066ff] text-[13px] font-medium uppercase tracking-wider">Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────── */}
            <section className="py-32 flex justify-center px-6 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-medium text-[#F5F5F5] mb-6 tracking-tight leading-tight">
                        Want to see if we're a good fit?
                    </h2>
                    <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Let's have a quick, honest chat about your operations. No high-pressure sales, just an objective look at what automation could do for your business.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-[16px] text-center w-full sm:w-auto min-w-[280px]">
                            Book a Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
