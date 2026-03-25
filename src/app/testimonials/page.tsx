"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const commitments = [
    {
        title: "Total Transparency",
        desc: "You will always know exactly what's being built, why it's being built, and how it executes at every stage. We do not design black boxes."
    },
    {
        title: "Rigorous Delivery",
        desc: "Strictly enforced testing protocols, comprehensive operational documentation, and complete handover training. We do not ship code until it executes flawlessly."
    },
    {
        title: "Honest Counsel",
        desc: "If off-the-shelf software solves your problem better or cheaper than custom code, we will tell you. We will never over-engineer a simple solution just to inflate a retainer."
    },
    {
        title: "Deep Engagement",
        desc: "We actively maintain a highly restricted client roster by choice. Every engaged partner receives direct, senior-level architectural attention on every single deployment."
    },
    {
        title: "Post-Launch Support",
        desc: "We enforce a rigid, dedicated support window following every deployment to actively monitor endpoints, optimise algorithms, and ensure maximum operational uptime."
    }
];

export default function TestimonialsPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="absolute inset-0 radial-glow opacity-30 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-label text-[#0066ff] mb-6 uppercase"
                        >
                            {"//"} WHAT TO EXPECT
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-tight mb-8"
                        >
                            What to expect<br/>when you deploy<br/>with us.
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-body-lg text-[#F5F5F5] font-medium max-w-xl mb-4"
                        >
                            We are early-stage, and we are building one strategic partnership at a time.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-body text-[#A3A3A3] max-w-xl font-light"
                        >
                            We refuse to fabricate theoretical testimonials. This page outlines exactly what every accepted client gets when they engage BoldFlow Labs engineering.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── THE 5 COMMITMENTS ──────────────────── */}
            <section className="py-32 bg-[#050505] border-b border-[#1A1A1A]">
                 <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                     <div>
                         <h2 className="text-h2 text-[#F5F5F5] uppercase lg:sticky lg:top-32">
                             The Engineering<br/>Commitments.
                         </h2>
                     </div>
                     <div className="flex flex-col gap-12">
                         {commitments.map((item, i) => (
                             <motion.div 
                                 key={i}
                                 initial={{ opacity: 0, y: 10 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true, margin: "-10%" }}
                                 transition={{ delay: i * 0.1 }}
                                 className="border-t border-[#1A1A1A] pt-8 relative"
                             >
                                 <div className="target-hex target-hex-left-top" />
                                 <div className="text-label text-[#0066ff] mb-4">{"//"} 0{i+1}</div>
                                 <h3 className="text-h3 text-[#F5F5F5] uppercase mb-4">{item.title}</h3>
                                 <p className="text-body text-[#A3A3A3] leading-relaxed max-w-lg">{item.desc}</p>
                             </motion.div>
                         ))}
                     </div>
                 </div>
            </section>

            {/* ── FOUNDING COHORT SECTION ────────────── */}
            <section className="py-32 bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="grid-overlay pointer-events-none absolute inset-0 z-0 border border-[#1A1A1A]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05),transparent_70%)] z-0" />
                        
                        <div className="relative z-10 p-12 aspect-square flex flex-col justify-center items-center text-center border border-[#1A1A1A] bg-[#050505]">
                            <div className="target-hex target-hex-left-top" />
                            <div className="target-hex target-hex-right-bottom" />
                            <div className="target-hex target-hex-right-top" />
                            <div className="target-hex target-hex-left-bottom" />

                            <span className="text-[#0066ff] font-mono text-label mb-6">{"//"} LIMITED AVAILABILITY</span>
                            <h3 className="text-h3 text-[#F5F5F5] uppercase mb-4">How We&apos;ll Build Our Track Record</h3>
                            <p className="text-body text-[#71717A] max-w-[280px]">
                                We are actively onboarding our founding client cohort. Same absolute engineering rigor, at an introductory pricing model.
                            </p>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 pl-0 lg:pl-16">
                        <h4 className="text-h3 text-[#F5F5F5] uppercase mb-12">What Founding Clients Receive:</h4>
                        <ul className="space-y-6 flex flex-col items-start border-l border-[#1A1A1A] pl-8 lg:pl-12 py-2">
                             <li className="flex gap-4 items-start">
                                 <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                 <span className="text-body-lg text-[#A3A3A3]">Full-scope custom automation build at aggressive founding-tier pricing.</span>
                             </li>
                             <li className="flex gap-4 items-start">
                                 <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                 <span className="text-body-lg text-[#A3A3A3]">Direct, unmediated senior-level attention on every single architectural engagement.</span>
                             </li>
                             <li className="flex gap-4 items-start">
                                 <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                 <span className="text-body-lg text-[#A3A3A3]">Strict priority access to new agentic models and capabilities as we deploy them.</span>
                             </li>
                             <li className="flex gap-4 items-start">
                                 <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                 <span className="text-body-lg text-[#A3A3A3]">Deep co-creation of a published, public-facing case study validating your structural ROI.</span>
                             </li>
                             <li className="flex gap-4 items-start">
                                 <span className="text-[#0066ff] font-mono mt-1 text-[14px]">{">"}</span>
                                 <span className="text-body-lg text-[#A3A3A3]">Extended, heavily subsidised post-launch support and telemetry optimization window.</span>
                             </li>
                        </ul>
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
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-12 leading-tight">
                            APPLY FOR FOUNDING CLIENT
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-left mb-12 border-l border-[#0066ff] pl-6 max-w-sm mx-auto">
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Extremely limited total bandwidth</span>
                            <span className="text-caption text-[#A3A3A3]"><span className="text-[#525252] font-mono mr-2">{"//"}</span> Active hands-on engineering focus</span>
                        </div>

                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                            INITIALIZE APPLICATION
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
