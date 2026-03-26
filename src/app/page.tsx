"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, CalendarHeart, CodeIcon, LineChart } from 'lucide-react';

const homeServices = [
  {
    icon: <LineChart className="w-6 h-6 text-[#0066ff] mb-4" />,
    title: 'AI Voice Agent Development',
    description: 'Deploy intelligent voice agents that answer, qualify, and close — around the clock.',
  },
  {
    icon: <CalendarHeart className="w-6 h-6 text-[#0066ff] mb-4" />,
    title: 'End-to-End CRM + Sales Pipeline Automation',
    description: 'From first touch to closed deal — fully automated. A sales pipeline that moves itself.',
  },
  {
    icon: <CodeIcon className="w-6 h-6 text-[#0066ff] mb-4" />,
    title: 'Autonomous AI Agent Development',
    description: 'Custom-built agents that reason, decide, and act on real-time data to handle complex workflows.',
  }
];

const processPhases = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We map exactly where you are losing time and money in your current operations.',
    timeline: 'Day 1'
  },
  {
    step: '02',
    title: 'System Design',
    desc: 'We architect the right automated solution tailored entirely for your exact workflow.',
    timeline: 'Days 2-3'
  },
  {
    step: '03',
    title: 'Build & Test',
    desc: 'We build the tools, integrate the platforms, and rigorously verify that everything works flawlessly.',
    timeline: 'Weeks 1-3'
  },
  {
    step: '04',
    title: 'Go Live & Optimise',
    desc: 'We deploy the system and stay totally accountable for its performance and ongoing results.',
    timeline: 'Week 4+'
  },
];

const pricingTiers = [
  {
    name: 'STARTER',
    target: 'Solopreneurs & early-stage businesses',
    description: 'For businesses taking their first step into AI automation. One focused workflow, deployed and running — with the foundation built to scale.',
  },
  {
    name: 'GROWTH',
    target: 'Growing SMBs scaling operations',
    description: 'For teams ready to connect the dots. Multiple systems working together, full CRM automation, multi-channel conversations, and real-time business intelligence.',
    popular: true
  },
  {
    name: 'AUTHORITY',
    target: 'Established businesses going all-in on AI',
    description: 'For businesses that want the full picture. Voice agents, autonomous AI, advanced dashboards, dedicated engineering support, and a quarterly roadmap built around your goals.',
  }
];

const techStackImages = [
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Make', src: '/logos/make.svg' },
  { name: 'n8n', src: '/logos/n8n.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'Airtable', src: '/logos/airtable.svg' }
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0066ff]/10 via-[#0A0A0A] to-[#0A0A0A] -z-10" />
        
        <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Col - Typography */}
            <div className="flex flex-col justify-center">
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-h1 md:text-hero text-[#F5F5F5] mb-6 leading-[1.05] tracking-tight"
                >
                    Your business runs on manual work. 
                    <span className="text-[#A3A3A3] block mt-2">Ours runs on fixing that.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-body-lg text-[#A3A3A3] max-w-xl mb-12 leading-relaxed"
                >
                    We build custom automation systems for service businesses so you can stop doing repetitive tasks and focus on revenue.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link href="/contact" className="w-full sm:w-auto px-8 py-4 btn-primary font-medium text-[15px] text-center flex items-center justify-center gap-2">
                        Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#333333] hover:border-[#666] text-[#F5F5F5] font-medium text-[15px] text-center transition-colors">
                        See How It Works
                    </Link>
                </motion.div>
            </div>

            {/* Right Col - Visual Abstract Workspace */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center relative"
            >
                <div className="w-full max-w-[500px] aspect-square rounded-full border-[1px] border-[#1A1A1A] relative flex items-center justify-center">
                   <div className="w-3/4 h-3/4 rounded-full border-[1px] border-[#333333] flex items-center justify-center bg-[#050505]/40 backdrop-blur-sm shadow-[0_0_80px_rgba(0,102,255,0.05)]">
                       <div className="w-1/2 h-1/2 rounded-full border-[1px] border-[#0066ff]/20 bg-[#0066ff]/5 relative flex items-center justify-center">
                           <div className="absolute w-3 h-3 bg-[#0066ff] rounded-full shadow-[0_0_20px_#0066ff]" />
                       </div>
                   </div>
                   
                   {/* Orbiting nodes indicating workflow chunks */}
                   <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 rounded-full"
                   >
                       <div className="w-4 h-4 bg-[#333] rounded-full absolute top-[-8px] left-1/2 -translate-x-1/2" />
                   </motion.div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────── */}
      <section className="border-b border-[#1A1A1A] w-full flex items-center justify-center bg-[#0A0A0A] py-6 px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 text-[14px] text-[#A3A3A3] font-medium">
              <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066ff]" /> Free 30-min strategy call
              </div>
              <span className="hidden md:block text-[#333]">·</span>
              <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066ff]" /> No obligation
              </div>
              <span className="hidden md:block text-[#333]">·</span>
              <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0066ff]" /> Response within 1 business day
              </div>
          </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                   <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight mb-4">
                       Where We Remove the Manual Work
                   </h2>
                   <p className="text-body text-[#A3A3A3] max-w-xl">
                       We specialize in eliminating operational drag for service businesses through intelligent system architecture.
                   </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {homeServices.map((svc, idx) => (
                    <div
                        key={svc.title}
                        className="p-8 border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#333333] transition-colors flex flex-col items-start"
                    >
                        {svc.icon}
                        <h3 className="text-xl font-medium text-[#F5F5F5] mb-3">{svc.title}</h3>
                        <p className="text-[#A3A3A3] mb-8 leading-relaxed flex-1">{svc.description}</p>
                        <Link href="/services" className="text-[#0066ff] font-medium text-[14px] flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <Link href="/services" className="inline-block px-8 py-4 border border-[#333] text-[#F5F5F5] hover:bg-[#111] transition-colors font-medium">
                    View All Services
                </Link>
            </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ─────────────────────────── */}
      <section id="process" className="py-24 lg:py-32 border-b border-[#1A1A1A] bg-[#050505]">
          <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-20">
                  <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight mb-4">
                      How It Works
                  </h2>
                  <p className="text-body text-[#A3A3A3] max-w-2xl mx-auto">
                      A transparent, milestone-driven approach to deploying your automation systems.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Desktop Connecting Line */}
                  <div className="hidden md:block absolute top-[24px] left-[50px] right-[50px] h-[1px] bg-[#1A1A1A] z-0" />
                  
                  {processPhases.map((phase) => (
                      <div key={phase.step} className="relative z-10 flex flex-col items-start md:items-center md:text-center p-6 bg-[#0A0A0A] md:bg-transparent border border-[#1A1A1A] md:border-transparent">
                          <div className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[#F5F5F5] font-medium mb-6 mx-0 md:mx-auto pt-1 shadow-[0_0_0_10px_#050505]">
                              {phase.step}
                          </div>
                          <div className="text-[#0066ff] font-medium text-[12px] uppercase tracking-wider mb-2">
                              {phase.timeline}
                          </div>
                          <h3 className="text-xl font-medium text-[#F5F5F5] mb-4">{phase.title}</h3>
                          <p className="text-[#A3A3A3] text-[15px] leading-relaxed">
                              {phase.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ── TRUST & TRANSPARENCY SECTION ────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1A1A1A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                  <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight mb-6">
                      We're early-stage, and proud of it. Here's what that means for you.
                  </h2>
                  <p className="text-body-lg text-[#A3A3A3] mb-8 leading-relaxed">
                      BoldFlow Labs is built by practitioners, not salespeople. We are actively seeking our first "Founding Clients" to build incredible case studies out of.
                  </p>
                  
                  <ul className="space-y-6 mb-12">
                      <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                          <div>
                              <strong className="text-[#F5F5F5] font-medium block mb-1">Direct Architect Access</strong>
                              <span className="text-[#A3A3A3]">No account managers. You work directly with the engineer building your system.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                          <div>
                              <strong className="text-[#F5F5F5] font-medium block mb-1">Favorable Pricing Scope</strong>
                              <span className="text-[#A3A3A3]">Because we want the case study, we will over-deliver on scope compared to established legacy agencies.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#0066ff] shrink-0 mt-0.5" />
                          <div>
                              <strong className="text-[#F5F5F5] font-medium block mb-1">Hyper-Responsive Support</strong>
                              <span className="text-[#A3A3A3]">You are not a ticket number. We fix issues immediately and answer questions directly.</span>
                          </div>
                      </li>
                  </ul>
                  
                  <div className="p-6 bg-[#0066ff]/5 border border-[#0066ff]/20">
                      <h4 className="text-[#F5F5F5] font-medium mb-2">Founding Client Programme</h4>
                      <p className="text-[#A3A3A3] text-[14px] mb-4">Limited spots available for ambitious service businesses ready to scale.</p>
                      <Link href="/work" className="text-[#0066ff] font-medium text-[14px] flex items-center gap-2 hover:gap-3 transition-all">
                          Read about the programme <ArrowRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>
              
              <div className="lg:pl-12 flex flex-col justify-center">
                  <h3 className="text-[#F5F5F5] text-xl font-medium mb-8 text-center lg:text-left">Built entirely on industry-leading tools:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                      {/* Temporary textual logos since we don't have SVG files yet */
                      techStackImages.map((tech) => (
                          <div key={tech.name} className="flex items-center justify-center lg:justify-start h-12 text-[#F5F5F5] font-bold text-xl tracking-tight opacity-50">
                              {tech.name}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* ── PRICING PREVIEW ─────────────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-h2 text-[#F5F5F5] font-medium tracking-tight mb-4">
                      Simple, Predictable Pricing
                  </h2>
                  <p className="text-body text-[#A3A3A3] max-w-2xl mx-auto">
                      Choose the capacity that matches your workflow bottleneck.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                  {pricingTiers.map((tier) => (
                      <div key={tier.name} className={`p-8 border bg-[#050505] flex flex-col ${tier.popular ? 'border-[#0066ff] relative shadow-[0_0_30px_rgba(0,102,255,0.05)]' : 'border-[#1A1A1A]'}`}>
                          {tier.popular && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066ff] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1">
                                  Most Popular
                              </div>
                          )}
                          <h3 className="text-xl font-medium text-[#F5F5F5] mb-2">{tier.name}</h3>
                          <div className="text-[18px] font-medium text-[#0066ff] mb-4">{tier.target}</div>
                          <p className="text-[#A3A3A3] text-[15px] mb-8 flex-1">{tier.description}</p>
                      </div>
                  ))}
              </div>

              <div className="text-center">
                  <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F5F5] text-[#050505] font-medium hover:bg-white transition-colors">
                      See Full Pricing & What's Included
                  </Link>
              </div>
          </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-32 flex justify-center px-6 border-b border-[#1A1A1A]">
          <div className="w-full max-w-[800px] text-center">
              <h2 className="text-[36px] md:text-[48px] font-medium text-[#F5F5F5] mb-6 tracking-tight leading-tight">
                  Book a Free Discovery Call
              </h2>
              <p className="text-body-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto leading-relaxed">
                  We'll scope your project, recommend the right tier, and give you a clear price — no pressure, no ambiguity.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                  <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-[16px] text-center w-full sm:w-auto min-w-[280px]">
                      Book Your Free Strategy Call
                  </Link>
                  <p className="text-[14px] text-[#71717A]">
                      No commitment required. Honest answers guaranteed.
                  </p>
              </div>
          </div>
      </section>
    </>
  );
}
