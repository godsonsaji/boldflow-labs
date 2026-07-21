"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Activity,
  Phone, 
  MessageSquare,
  Sparkles, 
  Database,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Layers,
  Wrench,
  Building
} from "lucide-react";
import founderImg from "@/img/founder_img.png";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";

const homeServices = [
  {
    icon: <Activity className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "24/7 AI Voice Receptionists",
    description: "Intelligent voice agents that answer calls instantly, qualify leads, and book jobs directly into your calendar day and night.",
    href: "/services#01"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "60-Second Lead Callbacks",
    description: "Automatically call or text new inbound web leads within 60 seconds of form submission. Stop losing clients to faster competitors.",
    href: "/services#02"
  },
  {
    icon: <Database className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "CRM & Calendar Automation",
    description: "Sync booked appointments and customer details instantly with ServiceTitan, Housecall Pro, Salesforce, or your existing software.",
    href: "/services#02"
  }
];

const processPhases = [
  {
    step: "01",
    title: "Lead Arrives",
    desc: "A customer fills out a form on your site, sends a text message, or calls your phone number (including missed calls).",
    timeline: "Instant"
  },
  {
    step: "02",
    title: "60-Second Response",
    desc: "Our AI calls or texts the lead back in under 60 seconds — day, night, or weekends — so you never lose a job.",
    timeline: "Under 1 Min"
  },
  {
    step: "03",
    title: "Qualify & Book",
    desc: "The AI answers questions, checks your availability, qualifies the job type, and books the appointment.",
    timeline: "2 Minutes"
  },
  {
    step: "04",
    title: "Synced to CRM",
    desc: "The booked job and detailed conversation notes sync automatically into your calendar and software database.",
    timeline: "Real-time"
  }
];

const demoAgents = [
  {
    id: "hvac",
    name: "Aria",
    role: "HVAC Receptionist",
    specialty: "ServiceTitan / Diagnostic Triage",
    scenario: "Answers missed calls, asks diagnostic triage questions, books emergency repairs directly into dispatch queue.",
    badge: "Coming Soon",
    status: "inactive"
  },
  {
    id: "roofing",
    name: "Marcus",
    role: "Roofing Dispatcher",
    specialty: "Housecall Pro / Estimate Scheduling",
    scenario: "Handles storm lead spikes, schedules roof inspection estimates, and filters solicitation calls.",
    badge: "Coming Soon",
    status: "inactive"
  },
  {
    id: "realestate",
    name: "Chloe",
    role: "Real Estate Qualifier",
    specialty: "Follow Up Boss / Zillow Lead Callbacks",
    scenario: "Reaches out to Realtor/Zillow leads within 60s, checks buying timeline, budget, pre-approval, and books call.",
    badge: "Coming Soon",
    status: "inactive"
  }
];

const faqData = [
  {
    q: "How much does this cost?",
    a: "We design and deploy custom agents. Our implementation plans operate across flat monthly tiers starting at ~$297/mo for inbound reception, scaling to ~$797/mo for full-stack pipeline and outbound call campaigns. You only pay for what fits your operations."
  },
  {
    q: "Will it sound like a robot?",
    a: "No. We build our agents on low-latency voice pipelines (Gemini Live and custom LLM routing) integrated with high-quality natural text-to-speech engines. They pause naturally, handle interruptions, and respond in under 120ms, providing a human-like caller experience."
  },
  {
    q: "How long does it take to go live?",
    a: "Our typical design-to-deployment workflow takes between 7 and 14 days. This covers script writing, model training, speech integration, calendar mapping, and full CRM end-to-end testing."
  },
  {
    q: "Does it work with ServiceTitan / Housecall Pro?",
    a: "Yes. We specialize in home services integrations. Our systems write jobs, customer profiles, and voice transcripts directly into ServiceTitan, Housecall Pro, Jobber, Salesforce, Follow Up Boss, and other major CRMs."
  },
  {
    q: "What happens to leads after hours?",
    a: "Our AI agents function 24/7/365. They respond immediately to midnight calls or weekend web forms, booking appointments directly on your calendar while your competitors are asleep."
  },
  {
    q: "Are you an agency or a software product?",
    a: "We are an agency. We do not sell you a template tool and expect you to construct it yourself. We write the custom conversational paths, wire the integrations, configure the telephony networks, and actively monitor caller performance."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 flex items-center border-b border-[#1C1C24] overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0F] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0047FF]/10 via-[#0A0A0F] to-[#0A0A0F] -z-10" />
        <div className="absolute inset-0 grid-overlay opacity-10 -z-20" />
        
        <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Col - Typography */}
            <div className="flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-[#FF5A1F]/10 text-[#FF5A1F] uppercase border border-[#FF5A1F]/20 rounded-sm">
                      Founding Cohort Open
                    </span>
                    <span className="text-[11px] font-mono text-[#626272] uppercase tracking-wider">
                      5 spots total
                    </span>
                </motion.div>
                
                <h1 className="text-hero text-[#F5F6FA] mb-6 tracking-tight leading-[1.05]">
                  We answer your leads in <span className="text-[#0047FF] underline decoration-[#0047FF]/30 underline-offset-8">60 seconds</span>, every time.
                  <span className="text-[#A3A3B3] block mt-2 font-light text-2xl md:text-4xl">Day or night, 24/7.</span>
                </h1>

                <p className="text-body-lg mb-12 max-w-xl">
                  Never lose another customer to a slower competitor. Our custom AI voice receptionists and smart message systems qualify inbound leads and book them directly into your calendar.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
                        Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="#demo" className="w-full sm:w-auto px-8 py-4.5 btn-ghost font-mono text-xs font-bold uppercase tracking-wider text-center rounded-[4px]">
                        See a Live Demo
                    </Link>
                </div>
            </div>

            {/* Right Col - Audio Waveform Panel */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center relative"
            >
                <div className="w-full max-w-[480px] aspect-[4/3] bg-[#111116] border border-[#1C1C24] p-6 relative flex flex-col justify-between overflow-hidden rounded-[6px] shadow-2xl">
                    <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />
                    
                    {/* Panel Header */}
                    <div className="flex items-center justify-between border-b border-[#1C1C24] pb-4 z-10">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-[10px] font-mono text-[#F5F6FA] uppercase tracking-wider">LIVE_VOICE_STREAM_CONNECTED</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#FF5A1F]">RTT: 120MS</span>
                    </div>

                    {/* Waveform Visualization */}
                    <div className="h-32 flex items-end justify-center gap-1.5 px-4 z-10 relative">
                        {Array.from({ length: 26 }).map((_, i) => {
                            const heights = [30, 55, 80, 60, 45, 95, 110, 75, 50, 85, 120, 90, 65, 80, 105, 55, 40, 70, 90, 45, 30, 60, 40, 30, 50, 20];
                            const height = heights[i % heights.length];
                            const delay = (i * 0.04).toFixed(2);
                            return (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-[#0047FF] rounded-full opacity-80"
                                    animate={{
                                        height: [15, height, 15],
                                    }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: parseFloat(delay),
                                    }}
                                    style={{ height: 15 }}
                                />
                            );
                        })}
                    </div>

                    {/* Telemetry info */}
                    <div className="border-t border-[#1C1C24] pt-4 font-mono text-[9px] text-[#626272] flex justify-between z-10">
                        <div className="flex flex-col">
                            <span>RECEPTIONIST: ACTIVE_INTENT_TRIAGE</span>
                            <span>DATABASE_SYNC: SERVICETITAN_LIVE</span>
                        </div>
                        <div className="text-right flex flex-col">
                            <span>TELEPHONY: TELNYX_VOIP</span>
                            <span>MODEL: CLAUDE_3.5_SONNET</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────── */}
      <section className="border-b border-[#1C1C24] w-full flex items-center justify-center bg-[#0A0A0F] py-6 px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0047FF]" /> Avg Response Time: Under 60 Secs
              </div>
              <span className="hidden md:block text-[#1C1C24]">|</span>
              <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0047FF]" /> Gemini · Claude · OpenAI · Cursor
              </div>
              <span className="hidden md:block text-[#1C1C24]">|</span>
              <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#0047FF]" /> Serving HVAC, Roofing & Real Estate
              </div>
          </div>
      </section>

      {/* ── WHO WE BUILD WITH / LOGO MARQUEE ────────────── */}
      <LogoMarquee />

      {/* ── CAPTURE EVERY LEAD SECTION ────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1C1C24] relative">
        <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                   <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// SECURING LEAD PIPELINES</span>
                   <h2 className="text-h2 text-[#F5F6FA] mb-4">
                       Capture Every Lead, Book Every Job
                   </h2>
                   <p className="text-body max-w-xl">
                       We deploy custom lead-booking tools built specifically for service businesses to stop lead leakage.
                   </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {homeServices.map((svc) => (
                    <div
                        key={svc.title}
                        className="p-8 border border-[#1C1C24] bg-[#111116] hover:border-[#0047FF]/40 hover:shadow-[0_0_30px_rgba(0,71,255,0.03)] transition-all flex flex-col items-start rounded-[6px]"
                    >
                        {svc.icon}
                        <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-3">{svc.title}</h3>
                        <p className="text-[#A3A3B3] text-sm mb-8 leading-relaxed flex-1">{svc.description}</p>
                        <Link href={svc.href} className="text-[#0047FF] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto group">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <Link href="/services" className="inline-flex px-8 py-4.5 btn-ghost font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
                    View All Services
                </Link>
            </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section id="process" className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#0A0A0F] relative">
          <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-20">
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// STREAMLINED PIPELINE</span>
                  <h2 className="text-h2 text-[#F5F6FA] mb-4">
                      How It Works
                  </h2>
                  <p className="text-body max-w-xl mx-auto">
                      From inbound lead to booked appointment on your calendar in under 3 minutes.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {processPhases.map((phase, idx) => (
                      <div 
                        key={phase.step} 
                        className="relative z-10 flex flex-col items-start p-8 bg-[#111116] border border-[#1C1C24] rounded-[6px] hover:border-[#0047FF]/20 transition-colors"
                      >
                          <div className="w-10 h-10 rounded-full bg-[#161622] border border-[#1C1C24] flex items-center justify-center text-[#0047FF] font-bold mb-6 text-sm">
                              {phase.step}
                          </div>
                          <div className="text-[#FF5A1F] font-mono text-[10px] uppercase tracking-wider mb-2">
                              {phase.timeline}
                          </div>
                          <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-4">{phase.title}</h3>
                          <p className="text-[#A3A3B3] text-sm leading-relaxed">
                              {phase.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ── INTERACTIVE LIVE DEMO SECTION ────────────── */}
      <section id="demo" className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#111116] relative">
          <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16">
                  {/* Left panel - text */}
                  <div className="lg:w-2/5 flex flex-col justify-center">
                      <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3">// VOICE BOT SIMULATIONS</span>
                      <h2 className="text-h2 text-[#F5F6FA] mb-6">
                          Experience the Agent Craft.
                      </h2>
                      <p className="text-body mb-8">
                          We train conversational voice bots tailored for trade verticals. Click to call our dispatch and qualifier models to test response latency, scheduling syncs, and custom scripts.
                      </p>
                      
                      <div className="p-6 bg-[#0A0A0F] border border-[#1C1C24] rounded-[4px] mb-8">
                          <h4 className="text-sm font-bold font-space text-white mb-2">Looking for a live test?</h4>
                          <p className="text-[#A3A3B3] text-xs leading-relaxed mb-4">
                              Book a quick operations discovery call and we will trigger a live outbound call to your phone demonstrating your specific trade scenario.
                          </p>
                          <Link href="/contact" className="text-[#0047FF] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                              Request a Live Outbound Call <ArrowUpRight className="w-4 h-4" />
                          </Link>
                      </div>
                  </div>

                  {/* Right panel - simulation cards */}
                  <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
                      {demoAgents.map((agent) => (
                          <div key={agent.id} className="p-6 border border-[#1C1C24] bg-[#0A0A0F]/60 rounded-[6px] relative flex flex-col justify-between">
                              <div>
                                  <div className="flex justify-between items-start mb-4 border-b border-[#1C1C24] pb-4">
                                      <div>
                                          <h3 className="text-lg font-bold font-space text-[#F5F6FA] leading-none mb-1">{agent.name}</h3>
                                          <span className="text-xs text-[#0047FF] font-mono">{agent.role}</span>
                                      </div>
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#FF5A1F]/10 text-[#FF5A1F] border border-[#FF5A1F]/20 font-bold uppercase tracking-widest">
                                          {agent.badge}
                                      </span>
                                  </div>
                                  <div className="font-mono text-[10px] text-[#626272] mb-3">INTEGRATION: {agent.specialty}</div>
                                  <p className="text-xs text-[#A3A3B3] leading-relaxed mb-6">{agent.scenario}</p>
                              </div>

                              <button 
                                  disabled
                                  className="w-full py-3 border border-[#2E2E3E] text-[#626272] bg-transparent font-mono text-[11px] uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 cursor-not-allowed"
                              >
                                  <Phone className="w-3.5 h-3.5" /> Call Agent Offline
                              </button>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* ── ROI TEASER / SECTION ─────────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#0A0A0F] relative">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
              <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// QUANTIFIABLE OPERATIONS</span>
              <h2 className="text-h2 text-[#F5F6FA] mb-6">
                  What is slow response costing your business?
              </h2>
              <p className="text-body max-w-2xl mx-auto mb-12">
                  Answering leads in 60 seconds vs 30 minutes is the difference between booking a job or paying for a competitor's click. Calculate the exact revenue recovered by deploying automated instant response.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  <div className="p-8 bg-[#111116] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2">INDUSTRY AVERAGE</span>
                      <strong className="text-3xl font-bold font-space text-[#FF5A1F] block mb-2">32%</strong>
                      <span className="text-xs text-[#A3A3B3]">of trade phone calls and leads go directly to voicemail.</span>
                  </div>
                  <div className="p-8 bg-[#111116] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2">SPEED-TO-LEAD DROP</span>
                      <strong className="text-3xl font-bold font-space text-[#FF5A1F] block mb-2">80%</strong>
                      <span className="text-xs text-[#A3A3B3]">reduction in closing rate if response takes over 5 minutes.</span>
                  </div>
                  <div className="p-8 bg-[#111116] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2">AVERAGE TICKET RECOVERED</span>
                      <strong className="text-3xl font-bold font-space text-[#0047FF] block mb-2">$3,200+</strong>
                      <span className="text-xs text-[#A3A3B3]">Typical job value captured from immediate callbacks.</span>
                  </div>
              </div>
              
              <Link href="/pricing" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
                  Open Revenue ROI Calculator
              </Link>
          </div>
      </section>

      {/* ── CLIENT TESTIMONIALS & REVIEWS ─────────────── */}
      <Testimonials />

      {/* ── FOUNDING COHORT SCARCITY ─────────────────── */}
      <section className="py-24 bg-[#111116] border-b border-[#1C1C24] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047FF]/5 rounded-full blur-[100px] -z-10" />
          
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                  <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3">// HONEST PROGRAM SCARCITY</span>
                  <h2 className="text-h2 text-[#F5F6FA] mb-6">
                      Founding Client Programme
                  </h2>
                  <p className="text-body-lg mb-8">
                      We are an early-stage agency. We don't hide this — we use it as our biggest differentiator. We are looking for exactly 5 service businesses to turn into legendary case studies.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                      <li className="flex gap-3 text-sm text-[#A3A3B3] items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                          <span><strong>Direct Architect Access:</strong> Work directly with our developer (no junior account managers).</span>
                      </li>
                      <li className="flex gap-3 text-sm text-[#A3A3B3] items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                          <span><strong>Over-Delivered Scope:</strong> We build features outside of terms if they yield better case study outcomes.</span>
                      </li>
                      <li className="flex gap-3 text-sm text-[#A3A3B3] items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                          <span><strong>At-Cost Setup Fees:</strong> Significant discount on build prices to remove entry friction.</span>
                      </li>
                  </ul>
                  
                  <div className="inline-flex items-center gap-4 px-4 py-3 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-[4px]">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                      <span className="text-xs font-mono text-[#FF5A1F] font-bold uppercase tracking-wider">
                          Scarcity: Only 2 of 5 Founding Spots Remaining
                      </span>
                  </div>
              </div>
              
              <div className="lg:col-span-5 lg:pl-8">
                  <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px] relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(0,71,255,0.05),transparent_70%)]" />
                      <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-4">Enterprise Telenet Core</h3>
                      <p className="text-xs text-[#A3A3B3] leading-relaxed mb-6">
                          Our solutions sit directly on low-latency VoIP trunks (Telnyx) and integrate natively with OpenAI's realtime audio API and Claude 3.5. This ensures sub-second responses and flawless speech processing.
                      </p>
                      <Link href="/work" className="text-xs font-mono font-bold text-[#0047FF] uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all">
                          Read cohort specifications <ArrowRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
          <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// FAQ OBJECTIONS</span>
                  <h2 className="text-h3 font-medium text-white tracking-tight mb-4">Frequently Asked Questions</h2>
                  <p className="text-xs text-[#626272] uppercase tracking-widest font-mono font-bold">OBJECTION_HYPERTHREADING_RESPONSES</p>
              </div>
              
              <div className="flex flex-col gap-4">
                  {faqData.map((faq, i) => (
                      <div key={i} className="border border-[#1C1C24] bg-[#111116] hover:border-[#2E2E3E] transition-colors overflow-hidden rounded-[4px]">
                          <button 
                              onClick={() => setOpenFaq(openFaq === i ? null : i)}
                              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                          >
                              <span className="text-[15px] font-bold font-space text-[#F5F6FA] pr-8">
                                  {faq.q}
                              </span>
                              <span className="text-[#626272] shrink-0">
                                  {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </span>
                          </button>
                          
                          <AnimatePresence initial={false}>
                              {openFaq === i && (
                                  <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                  >
                                      <div className="px-6 pb-6 text-[#A3A3B3] text-sm leading-relaxed border-t border-[#1C1C24] pt-4 mt-2 font-sans">
                                          {faq.a}
                                      </div>
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ── FOUNDER / ABOUT TEASER ─────────────────── */}
      <section className="py-24 bg-[#111116] border-b border-[#1C1C24]">
          <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:justify-start">
                  <div className="w-[280px] md:w-[320px] aspect-[4/5] bg-[#0A0A0F] border border-[#1C1C24] p-3 rounded-[6px] relative group overflow-hidden">
                      <div className="w-full h-full relative overflow-hidden bg-[#161622] rounded-[4px]">
                          <Image
                              src={founderImg}
                              alt="Godson Saji - Founder of BoldFlow Labs"
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-103 grayscale opacity-80 group-hover:opacity-100"
                              priority
                          />
                      </div>
                  </div>
              </div>
              
              <div>
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// FOUNDER & ARCHITECT</span>
                  <h2 className="text-h2 text-white mb-4">Godson Saji</h2>
                  <p className="text-body mb-6 leading-relaxed">
                      "I founded BoldFlow Labs because I grew tired of watching service businesses pour thousands of dollars into Google Ads, only to let leads slip into voicemail. If you don't answer back in 60 seconds, they book with the next trade in line. We built this to solve that exact bottleneck."
                  </p>
                  <p className="text-body mb-8">
                      Godson writes the core telephony code, script logic, and CRM triggers. You have direct access to the builder of your system from day one.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A1F] uppercase tracking-wider hover:gap-3 transition-all">
                      Read Our Operating Philosophy <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
          </div>
      </section>

      {/* ── FINAL CTA BLOCK ─────────────────────────── */}
      <section className="py-32 flex justify-center px-6 bg-[#0A0A0F] relative">
          <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
          <div className="w-full max-w-[800px] text-center relative z-10">
              <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">// TELEMETRY DIAGNOSTIC</span>
              <h2 className="text-[36px] md:text-[48px] font-bold font-space text-[#F5F6FA] mb-6 tracking-tight leading-tight">
                  Book Your Free Strategy Call
              </h2>
              <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                  We'll scope your project, analyze your current response speed leaks, and propose a clear deployment strategy. No obligation, no sales pitches.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                  <Link href="/contact" className="px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto min-w-[280px] rounded-[4px]">
                      INITIALIZE CORE STRATEGY CALL
                  </Link>
                  <p className="text-[11px] font-mono text-[#626272] uppercase tracking-wider">
                      COHORT CAPACITY LIMITS APPLY
                  </p>
              </div>
          </div>
      </section>
    </>
  );
}
