"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Code2, ShieldAlert, Cpu, Network, Layers } from "lucide-react";
import founderImg from "@/img/founder_img.png";

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

const stackTools = [
    { name: "Claude 3.5 Sonnet / GPT-4o", desc: "Core language reasoning models trained on custom business context and scripts.", icon: <Cpu className="w-5 h-5 text-[#0047FF]" /> },
    { name: "Telnyx Telephony", desc: "Low-latency carrier network to handle SIP trunks, inbound phone routing, and clean audio.", icon: <Network className="w-5 h-5 text-[#FF5A1F]" /> },
    { name: "Gemini Live / LiveKit", desc: "Voice transport framework delivering sub-150ms real-time verbal interactions.", icon: <Code2 className="w-5 h-5 text-[#FFB020]" /> },
    { name: "n8n & Custom Node API", desc: "Backend pipeline automation syncing call data into ServiceTitan and Follow Up Boss.", icon: <Layers className="w-5 h-5 text-[#0047FF]" /> }
];

export default function AboutPage() {
    return (
        <div className="bg-[#0A0A0F] min-h-screen">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
            
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1C1C24] overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0047FF] mb-6 uppercase tracking-wider font-mono"
                    >
                        {"//"} About Us
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 max-w-4xl tracking-tight"
                    >
                        We Build Systems Because We Hate Busywork.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg max-w-2xl"
                    >
                        BoldFlow Labs is an independent AI automation agency focused entirely on delivering real operational results for home services and real estate SMBs.
                    </motion.p>
                </div>
            </section>

             {/* ── ORIGIN STORY ─────────────────────────── */}
             <section className="py-24 bg-[#111116] border-b border-[#1C1C24] relative">
                  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
                      <div className="lg:col-span-5">
                          <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} THE ORIGIN</span>
                          <h2 className="text-h2 text-white tracking-tight leading-tight">
                              Why We Built BoldFlow Labs.
                          </h2>
                      </div>
                      <div className="lg:col-span-7 flex flex-col gap-6 text-[#A3A3B3] text-sm leading-relaxed">
                          <p>
                              It started with a simple observation. I noticed that local HVAC contractors, roofers, and real estate agents were spending thousands of dollars on advertising, only to let half of their leads go cold. 
                          </p>
                          <p>
                              The reality of the home services industry is brutal: if you don’t respond to a new lead within 5 minutes, your chances of qualification drop by 80%. If you take longer than 30 minutes, they’ve already booked with a competitor. Most business owners are on job sites or managing teams—they simply can't answer the phone or text back in under a minute.
                          </p>
                          <p>
                              I founded BoldFlow Labs to solve this 60-second lead response problem once and for all. By building custom AI voice receptionists, smart SMS callback systems, and direct CRM integrations, we ensure that every single inbound lead gets a call or text response within 60 seconds, 24/7/365.
                          </p>
                          <p className="border-l border-[#0047FF] pl-6 py-2 mt-4 text-[#F5F6FA] font-medium font-sans">
                              We don't sell generic "AI consulting." We deploy reliable, engineered voice and message systems that lock in jobs before your competitors even see the notification.
                          </p>
                      </div>
                  </div>
             </section>

            {/* ── TRAITS & PHILOSOPHY ──────────────────── */}
            <section className="py-32 bg-[#0A0A0F] border-b border-[#1C1C24]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                        {traits.map((trait, i) => (
                            <div key={i} className="bg-[#111116] p-8 border border-[#1C1C24] flex flex-col relative justify-between hover:border-[#0047FF]/20 transition-all rounded-[6px]">
                                 <div>
                                     <div className="text-[10px] font-mono text-[#626272] mb-8">SYS_TRAIT_0{i+1}</div>
                                     <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-4">{trait.title}</h3>
                                     <p className="text-sm text-[#A3A3B3] leading-relaxed mb-4">{trait.desc}</p>
                                 </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-6 flex flex-col justify-center">
                            <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3">{"//"} HOW WE WORK</span>
                            <h2 className="text-h2 text-[#F5F6FA] tracking-tight mb-8">
                                How We Calculate Automation.
                            </h2>
                            <ul className="space-y-8 flex flex-col items-start pt-4">
                                 {philosophy.map((item, i) => (
                                     <li key={i} className="flex gap-4 items-start">
                                         <span className="text-[#0047FF] font-mono font-bold mt-0.5 text-[14px]">0{i+1}.</span>
                                         <div>
                                             <div className="text-[#F5F6FA] font-bold font-space text-[16px] mb-1">{item.title}</div>
                                             <span className="text-sm text-[#A3A3B3] leading-relaxed">{item.desc}</span>
                                         </div>
                                     </li>
                                 ))}
                            </ul>
                        </div>
                        
                        {/* Stack Architecture Section */}
                        <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center rounded-[8px]">
                             <div className="relative z-10">
                                 <div className="text-[10px] font-mono uppercase tracking-wider text-[#0047FF] mb-6">{"//"} STACK SPECIFICATIONS</div>
                                 <h3 className="text-[28px] font-bold font-space text-white tracking-tight leading-tight mb-8">Core Telephony & AI Pipeline</h3>
                                 <div className="flex flex-col gap-6">
                                     {stackTools.map((tool, idx) => (
                                         <div key={idx} className="flex gap-4 items-start pb-4 border-b border-[#1C1C24] last:border-b-0 last:pb-0">
                                             <div className="p-2 bg-[#0A0A0F] border border-[#1C1C24] rounded-sm shrink-0">
                                                 {tool.icon}
                                             </div>
                                             <div>
                                                 <h4 className="text-xs font-bold text-white font-space leading-tight mb-1">{tool.name}</h4>
                                                 <p className="text-[11px] text-[#A3A3B3] leading-relaxed">{tool.desc}</p>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE TEAM / Godson Saji ───────────────── */}
            <section className="py-32 bg-[#111116] border-b border-[#1C1C24] relative">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 lg:order-2">
                       <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">{"//"} FOUNDER & CEO</span>
                       <h2 className="text-h2 text-[#F5F6FA] tracking-tight mb-6">
                           Founder & CEO.
                       </h2>
                       <p className="text-[#A3A3B3] text-sm leading-relaxed mb-6">
                           Godson Saji is a full-stack AI engineer focused on practical workflow pipelines and robust integrations. He works directly with every client, completely eliminating the "telephone game" typical of traditional agencies.
                       </p>
                       <p className="text-[#A3A3B3] text-sm leading-relaxed">
                           He built BoldFlow Labs explicitly to deliver high-impact, deterministic automation work that bloated larger agencies actively overlook or overcharge for.
                       </p>
                    </div>

                    <div className="lg:col-span-5 lg:order-1 flex justify-center lg:justify-start">
                        <div className="w-[280px] md:w-[340px] aspect-[4/5] bg-[#111116] border border-[#0047FF]/30 p-3 rounded-[12px] relative group overflow-hidden shadow-[0_0_40px_rgba(0,71,255,0.15)] hover:border-[#0047FF] hover:shadow-[0_0_60px_rgba(0,71,255,0.3)] transition-all duration-500">
                            <div className="w-full h-full relative overflow-hidden bg-[#0A0A0F] rounded-[8px]">
                                <Image
                                    src={founderImg}
                                    alt="Godson Saji - Founder of BoldFlow Labs"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0A0A0F]/80 backdrop-blur-md border border-white/10 rounded-[6px] flex items-center justify-between">
                                    <div>
                                        <span className="text-xs font-bold font-space text-white block">Godson Saji</span>
                                        <span className="text-[10px] font-mono text-[#0047FF] uppercase font-semibold">Founder & CEO</span>
                                    </div>
                                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────── */}
            <section className="py-32 flex justify-center px-6 bg-[#0A0A0F]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-space text-white mb-6 tracking-tight leading-tight">
                        Want to see if we're a good fit?
                    </h2>
                    <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Let's have a quick, honest chat about your operations. No high-pressure sales, just an objective look at what automation could do for your business.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto min-w-[280px] rounded-[4px]">
                            Book a Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
