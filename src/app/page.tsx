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
  Building,
  Volume2,
  Play,
  Pause,
  MessageCircle,
  Globe2,
  ShieldCheck
} from "lucide-react";
import founderImg from "@/img/founder_img.png";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";

const homeServices = [
  {
    icon: <Activity className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "24/7 AI Phone Receptionists",
    description: "Intelligent voice agents that answer calls in under 10 seconds in your customer's language, qualify inquiries, and book appointments 24/7.",
    href: "/services#01"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "Instant Portal & Ad Callbacks",
    description: "Automatically call back 99acres, MagicBricks, Meta, and website inquiries within 60 seconds. Never lose a lead to a faster competitor.",
    href: "/services#02"
  },
  {
    icon: <Database className="w-6 h-6 text-[#0047FF] mb-4" />,
    title: "Indian CRM & WhatsApp Automation",
    description: "Sync booked appointments and inquiry notes instantly into LeadSquared, Zoho CRM, Practo, WhatsApp Business API, Google Calendar, or Excel.",
    href: "/services#03"
  }
];

const processPhases = [
  {
    step: "01",
    title: "Missed Call Arrives",
    desc: "A parent calls your coaching center or a buyer calls your property line at 8:30 PM. Line is busy or unattended.",
    timeline: "Instant"
  },
  {
    step: "02",
    title: "AI Answers in 10 Seconds",
    desc: "Speaks in the caller's language (Hindi in Delhi/Kota, Tamil in Chennai, Kannada in Bangalore, and so on). Asks course, budget, and batch timing.",
    timeline: "Under 10 Secs"
  },
  {
    step: "03",
    title: "Books Counseling Session",
    desc: "Checks your Google Calendar and books a slot. Sends an instant WhatsApp confirmation message to the parent or buyer.",
    timeline: "2 Minutes"
  },
  {
    step: "04",
    title: "Syncs to Your System",
    desc: "Lead details and audio summary drop directly into LeadSquared, Zoho CRM, Practo, or Excel for your team tomorrow morning.",
    timeline: "Real-time"
  }
];

const demoAgents = [
  {
    id: "priya",
    name: "Priya",
    role: "Coaching Institute Admission Counselor",
    cityLanguage: "Delhi / Kota Belt · Hindi / English",
    specialty: "Inbound Admission Triage / Batch Booking",
    scenario: "Answers parent inquiries at 8:30 PM, captures student class and target exam (JEE/NEET), books counseling sessions on Google Calendar.",
    badge: "Interactive Demo Available",
    audioPreviewText: "“Namaste! Main Career Academy se Priya bol rahi hoon. Kya aap JEE ya NEET batch ke baare me enquiry kar rahe hain?”",
    status: "active"
  },
  {
    id: "rahul",
    name: "Rahul",
    role: "Real Estate Broker Assistant",
    cityLanguage: "Bangalore · Kannada / English",
    specialty: "99acres & Portal Lead Callbacks / Site Visits",
    scenario: "Calls back 99acres and MagicBricks leads within 45s, verifies budget and 2/3 BHK requirement in Kannada/English, books site visits.",
    badge: "Interactive Demo Available",
    audioPreviewText: "“Namaskara! BoldFlow Builders inda Rahul mathadthidini. Namma Indiranagar 3BHK project nodoke site visit book madla?”",
    status: "active"
  },
  {
    id: "dr-krishnan",
    name: "Dr. Krishnan's Assistant",
    role: "Clinic Appointment Booker",
    cityLanguage: "Chennai · Tamil / English",
    specialty: "Patient Screening & Practo Calendar Booking",
    scenario: "Handles high Sunday call volume for multi-specialty dental clinic in Chennai, books consultation slots, sends WhatsApp confirmation.",
    badge: "Active Agent",
    audioPreviewText: "“Vanakkam! Dr. Krishnan Dental Clinic receptionist. Doctor appointment Sunday 11 AM-ku slot available-ah irukku. Book panlama?”",
    status: "inactive"
  },
  {
    id: "vikram",
    name: "Vikram",
    role: "Loan Inquiry Handler",
    cityLanguage: "Mumbai · English / Hinglish",
    specialty: "Commercial & Business Loan Qualification",
    scenario: "Engages business owners asking about loan eligibility, screens monthly turnover, triggers callback from loan manager.",
    badge: "Active Agent",
    audioPreviewText: "“Hello! Main Capital Care se Vikram bol raha hoon. Aapke business loan application ki quick verification ke liye call kiya hai.”",
    status: "inactive"
  },
  {
    id: "anjali",
    name: "Anjali",
    role: "Auto Service Booking Agent",
    cityLanguage: "Hyderabad · Telugu / English",
    specialty: "Vehicle Service & Test Drive Scheduler",
    scenario: "Schedules periodic car service appointments and home test drives across Hyderabad, syncing directly with dealership calendar.",
    badge: "Active Agent",
    audioPreviewText: "“Namaskaram! Auto Care Hyderabad nundi Anjali matladutunnanu. Mee car service pickup slot tomorrow morning 10 AM ki fix cheyala?”",
    status: "inactive"
  }
];

const faqData = [
  {
    q: "How much does this cost?",
    a: "We deploy full-service AI phone assistants tailored for your business. Starter Plan starts at ₹9,999/month (1,000 mins included, English + 1 native language), Growth Plan is ₹19,999/month (3,000 mins included, 2 native languages), and Scale Plan is ₹34,999/month (6,000 mins included, 4 native languages)."
  },
  {
    q: "Will it sound like a robot?",
    a: "No. We build on low-latency Indian telephony pipelines (Exotel, Plivo, Vobiz) integrated with natural speech engines. Our AI speaks naturally, handles interruptions, and responds in under 200ms in native Indian accents and code-switched dialogues (Hinglish, Tanglish, etc.)."
  },
  {
    q: "How long does it take to go live?",
    a: "Our typical setup workflow takes between 5 and 10 days. This covers script customization, language model tuning, calendar mapping, Exotel/Plivo number setup, and CRM integration testing."
  },
  {
    q: "Does it work with my CRM?",
    a: "Yes. We integrate directly with Indian CRMs and calendar tools including LeadSquared, Zoho CRM, Practo, WhatsApp Business API, Google Calendar, and Excel."
  },
  {
    q: "What happens to leads after hours?",
    a: "Our AI agents function 24/7/365. They answer 8:30 PM parent calls, Sunday clinic requests, and midnight property portal inquiries instantly while your competitors are asleep."
  },
  {
    q: "Is calling TRAI compliant in India?",
    a: "Yes. All our AI voice agents operate over TRAI-compliant VoIP and telephony infrastructure (Exotel, Plivo, Vobiz) with proper DND filtering for outbound calls."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const toggleAudioDemo = (agentId: string) => {
    if (playingAudioId === agentId) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(agentId);
    }
  };

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 border-b border-[#1C1C24] overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0F] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0047FF]/15 via-[#0A0A0F] to-[#0A0A0F] -z-10" />
        <div className="absolute inset-0 grid-overlay opacity-10 -z-20" />
        
        <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
            {/* Left Col - Typography */}
            <div className="flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-6 flex-wrap"
                >
                    <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-[#FF5A1F]/10 text-[#FF5A1F] uppercase border border-[#FF5A1F]/20 rounded-sm">
                      Free 48-Hour Pilot Available
                    </span>
                    <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
                      Hindi · Tamil · Kannada · Telugu · Marathi · Bengali · English
                    </span>
                </motion.div>
                
                <h1 className="text-hero text-[#F5F6FA] mb-6 tracking-tight leading-[1.1]">
                  Missed Call = <span className="text-[#0047FF] underline decoration-[#0047FF]/40 underline-offset-8">Missed Revenue</span>
                </h1>

                <p className="text-body-lg mb-6 leading-relaxed">
                  AI phone assistants that answer your business calls in your customers' language — <strong className="text-white">Hindi, Tamil, Kannada, Telugu & more, plus English — 24/7</strong>. Built for Indian real estate brokers, coaching institutes, and clinics.
                </p>

                <p className="text-sm text-[#A3A3B3] mb-8 leading-relaxed italic border-l-2 border-[#0047FF] pl-4">
                  "Your 99acres leads call after 7 PM. Your coaching inquiries spike during admission season. Your clinic patients call on Sundays. Who answers?"
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
                className="flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0"
            >
                <div className="w-full max-w-[500px] bg-[#111116] border border-[#1C1C24] p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden rounded-[8px] shadow-[0_0_50px_rgba(0,71,255,0.08)]">
                    <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />
                    
                    {/* Panel Header */}
                    <div className="flex items-center justify-between border-b border-[#1C1C24] pb-4 z-10">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-[10px] font-mono text-[#F5F6FA] uppercase tracking-wider font-bold">EXOTEL_VOICE_STREAM_LIVE</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#FF5A1F] font-bold">LATENCY: &lt;180MS</span>
                    </div>

                    {/* Speech Banner */}
                    <div className="py-6 z-10 text-center">
                        <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-widest block mb-2 font-bold">MULTILINGUAL CONVERSATION ENGINE</span>
                        <div className="bg-[#0A0A0F] border border-[#1C1C24] p-4 rounded-[4px] text-xs font-sans text-[#F5F6FA] leading-relaxed">
                          "Namaste! Real Estate Inquiry ke liye connect kiya hai. Kya aap Bangalore Indiranagar project me 3BHK visit schedule karna chahte hain?"
                        </div>
                    </div>

                    {/* Waveform Visualization */}
                    <div className="h-24 flex items-end justify-center gap-1.5 px-4 z-10 relative">
                        {Array.from({ length: 24 }).map((_, i) => {
                            const heights = [30, 55, 80, 60, 45, 95, 110, 75, 50, 85, 120, 90, 65, 80, 105, 55, 40, 70, 90, 45, 30, 60, 40, 30];
                            const height = heights[i % heights.length];
                            const delay = (i * 0.04).toFixed(2);
                            return (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-[#0047FF] rounded-full opacity-80"
                                    animate={{
                                        height: [12, height * 0.6, 12],
                                    }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: parseFloat(delay),
                                    }}
                                    style={{ height: 12 }}
                                />
                            );
                        })}
                    </div>

                    {/* Telemetry info */}
                    <div className="border-t border-[#1C1C24] pt-4 font-mono text-[9px] text-[#626272] flex justify-between z-10">
                        <div className="flex flex-col">
                            <span>TELEPHONY: EXOTEL_PLIVO_SIP</span>
                            <span>CRM_SYNC: LEADSQUARED_ZOHO</span>
                        </div>
                        <div className="text-right flex flex-col">
                            <span>LANGUAGES: HINDI/TAMIL/KANNADA</span>
                            <span>COMPLIANCE: TRAI_DND_CLEARED</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* TRUST BAR CARDS UNDER HERO */}
        <div className="w-full max-w-[1280px] mx-auto px-6 mt-16 pt-10 border-t border-[#1C1C24]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-[#111116]/60 border border-[#1C1C24] rounded-[6px] flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
                    <div>
                        <span className="text-xs font-mono text-white font-bold block">TRAI-Compliant Calling</span>
                        <span className="text-[10px] font-mono text-[#A3A3B3]">DND filtered & legal in India</span>
                    </div>
                </div>
                <div className="p-4 bg-[#111116]/60 border border-[#1C1C24] rounded-[6px] flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0047FF] shrink-0" />
                    <div>
                        <span className="text-xs font-mono text-white font-bold block">Indian VoIP Ready</span>
                        <span className="text-[10px] font-mono text-[#A3A3B3]">Exotel, Plivo & Vobiz integration</span>
                    </div>
                </div>
                <div className="p-4 bg-[#111116]/60 border border-[#1C1C24] rounded-[6px] flex items-center gap-3">
                    <Building className="w-5 h-5 text-[#FF5A1F] shrink-0" />
                    <div>
                        <span className="text-xs font-mono text-white font-bold block">Indian Phone Numbers</span>
                        <span className="text-[10px] font-mono text-[#A3A3B3]">Native +91 virtual & mobile lines</span>
                    </div>
                </div>
                <div className="p-4 bg-[#111116]/60 border border-[#1C1C24] rounded-[6px] flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-[#0047FF] shrink-0" />
                    <div>
                        <span className="text-xs font-mono text-white font-bold block">Native Languages</span>
                        <span className="text-[10px] font-mono text-[#A3A3B3]">Hindi, Tamil, Kannada, Telugu & more</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ── "BUILT FOR INDIAN TELEPHONY" STRIP ───────────────── */}
      <section className="border-b border-[#1C1C24] w-full flex items-center justify-center bg-[#0A0A0F] py-8 px-4">
          <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                  <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-widest font-bold block mb-1">TELEPHONY INTEGRATION</span>
                  <h3 className="text-base font-bold font-space text-white">Built for Indian Telephony</h3>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
                  <div className="px-4 py-2.5 bg-[#111116] border border-[#1C1C24] text-[#F5F6FA] rounded-[4px] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Exotel & Plivo ready
                  </div>
                  <div className="px-4 py-2.5 bg-[#111116] border border-[#1C1C24] text-[#F5F6FA] rounded-[4px] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0047FF]" /> TRAI compliant
                  </div>
                  <div className="px-4 py-2.5 bg-[#111116] border border-[#1C1C24] text-[#FF5A1F] font-bold rounded-[4px] flex items-center gap-2">
                      ⚡ &lt;200ms voice latency
                  </div>
              </div>
          </div>
      </section>

      {/* ── CRM & INTEGRATION MARQUEE ────────────── */}
      <LogoMarquee />

      {/* ── SOLUTIONS & CAPTURE SECTION ────────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1C1C24] relative">
        <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                   <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// CAPTURING INDIAN INBOUND LEADS</span>
                   <h2 className="text-h2 text-[#F5F6FA] mb-4">
                       Capture Every Call, Book Every Slot
                   </h2>
                   <p className="text-body max-w-xl">
                       We deploy custom lead-booking voice assistants for high-volume Indian businesses to eliminate unanswered calls during peak admission seasons and after-hours portal spikes.
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
            
            {/* Quick Links to 3 New Niche Landing Pages */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/real-estate-ai-agent" className="p-5 bg-[#0A0A0F] border border-[#1C1C24] hover:border-[#0047FF] rounded-[4px] flex justify-between items-center group transition-colors">
                    <div>
                        <span className="text-xs font-mono text-[#FF5A1F] uppercase block font-bold">Real Estate Solution</span>
                        <span className="text-sm font-bold font-space text-white">99acres & Broker Voice AI →</span>
                    </div>
                </Link>
                <Link href="/coaching-institute-ai-agent" className="p-5 bg-[#0A0A0F] border border-[#1C1C24] hover:border-[#0047FF] rounded-[4px] flex justify-between items-center group transition-colors">
                    <div>
                        <span className="text-xs font-mono text-[#0047FF] uppercase block font-bold">Education Solution</span>
                        <span className="text-sm font-bold font-space text-white">Coaching Admission Voice AI →</span>
                    </div>
                </Link>
                <Link href="/clinic-ai-agent" className="p-5 bg-[#0A0A0F] border border-[#1C1C24] hover:border-[#0047FF] rounded-[4px] flex justify-between items-center group transition-colors">
                    <div>
                        <span className="text-xs font-mono text-[#10B981] uppercase block font-bold">Healthcare Solution</span>
                        <span className="text-sm font-bold font-space text-white">Clinic Appointment Voice AI →</span>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section id="process" className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#0A0A0F] relative">
          <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-20">
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// STREAMLINED WORKFLOW</span>
                  <h2 className="text-h2 text-[#F5F6FA] mb-4">
                      How It Works
                  </h2>
                  <p className="text-body max-w-xl mx-auto">
                      From missed call to booked counseling session or site visit on your calendar in under 2 minutes.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                  {processPhases.map((phase) => (
                      <div 
                        key={phase.step} 
                        className="relative z-10 flex flex-col items-start p-8 bg-[#111116] border border-[#1C1C24] rounded-[6px] hover:border-[#0047FF]/20 transition-colors"
                      >
                          <div className="w-10 h-10 rounded-full bg-[#161622] border border-[#1C1C24] flex items-center justify-center text-[#0047FF] font-bold mb-6 text-sm font-mono">
                              {phase.step}
                          </div>
                          <div className="text-[#FF5A1F] font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">
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

      {/* ── NEW LANGUAGE SUPPORT SECTION ───────────────── */}
      <section className="py-24 bg-[#111116] border-b border-[#1C1C24] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">// LOCAL LANGUAGE MASTERY</span>
                  <h2 className="text-h2 text-[#F5F6FA] mb-6">
                      Speaks Your Customer's Language
                  </h2>
                  <p className="text-body-lg mb-6 leading-relaxed">
                      Our AI agents converse naturally in: <strong className="text-white">Hindi, Tamil, Kannada, Telugu, Marathi, Bengali, and English</strong> — plus natural code-switching (<span className="text-[#FF5A1F]">Hinglish, Tanglish</span>, and how people actually speak in Indian cities).
                  </p>
                  
                  <div className="p-6 bg-[#0A0A0F] border border-[#0047FF]/30 rounded-[6px] mb-8">
                      <div className="text-3xl font-bold font-space text-[#0047FF] mb-2">75%</div>
                      <p className="text-sm text-[#A3A3B3] leading-relaxed">
                        of Indian consumers prefer communicating with businesses in their native language rather than English-only chatbots.
                      </p>
                  </div>

                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#A3A3B3]">
                      <span className="px-3 py-1 bg-[#161622] border border-[#1C1C24] rounded-sm text-white">Delhi / Kota (Hindi)</span>
                      <span className="px-3 py-1 bg-[#161622] border border-[#1C1C24] rounded-sm text-white">Bangalore (Kannada)</span>
                      <span className="px-3 py-1 bg-[#161622] border border-[#1C1C24] rounded-sm text-white">Chennai (Tamil)</span>
                      <span className="px-3 py-1 bg-[#161622] border border-[#1C1C24] rounded-sm text-white">Hyderabad (Telugu)</span>
                      <span className="px-3 py-1 bg-[#161622] border border-[#1C1C24] rounded-sm text-white">Mumbai (Hinglish)</span>
                  </div>
              </div>

              <div className="bg-[#0A0A0F] border border-[#1C1C24] p-8 rounded-[8px] flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-[#626272] uppercase tracking-wider">// DYNAMIC DIALECT DETECTION</span>
                  <h4 className="text-base font-bold font-space text-white">Code-Switching Capabilities</h4>
                  <p className="text-xs text-[#A3A3B3] leading-relaxed">
                      Callers in Bangalore might start in English and switch to Kannada. Callers in Delhi seamlessly mix Hindi and English. BoldFlow AI dynamically adapts without dropping the conversational thread.
                  </p>
                  <div className="pt-4 border-t border-[#1C1C24] flex items-center justify-between text-xs font-mono text-[#0047FF]">
                      <span>LATENCY GAP: NONE</span>
                      <span>CITY SWITCH: AUTOMATIC</span>
                  </div>
              </div>
          </div>
      </section>

      {/* ── VOICE BOT SIMULATIONS SECTION ────────────── */}
      <section id="demo" className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#0A0A0F] relative">
          <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left panel - text */}
              <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3">// REGIONAL VOICE BOT SIMULATIONS</span>
                  <h2 className="text-h2 text-[#F5F6FA] mb-6">
                      Voice Bot Agent Roster
                  </h2>
                  <p className="text-body mb-8">
                      Test our voice agents trained specifically for Indian coaching institutes, real estate brokerages, clinics, and automotive dealers across major metros.
                  </p>
                  
                  <div className="p-6 bg-[#111116] border border-[#1C1C24] rounded-[4px] mb-8">
                      <h4 className="text-sm font-bold font-space text-white mb-2">Want to test a live phone call?</h4>
                      <p className="text-[#A3A3B3] text-xs leading-relaxed mb-4">
                          Book a 15-min call and we'll trigger an instant live phone call to your mobile number in your preferred language.
                      </p>
                      <Link href="/contact" className="text-[#0047FF] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                          Request Live Outbound Test Call <ArrowUpRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>

              {/* Right panel - simulation cards */}
              <div className="grid grid-cols-1 gap-6">
                  {demoAgents.map((agent) => (
                      <div key={agent.id} className="p-6 border border-[#1C1C24] bg-[#111116] rounded-[6px] relative flex flex-col justify-between hover:border-[#0047FF]/40 transition-colors">
                          <div>
                              <div className="flex justify-between items-start mb-3 border-b border-[#1C1C24] pb-3">
                                  <div>
                                      <h3 className="text-lg font-bold font-space text-[#F5F6FA] leading-none mb-1">{agent.name}</h3>
                                      <span className="text-xs text-[#0047FF] font-mono font-bold">{agent.role}</span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#FF5A1F]/10 text-[#FF5A1F] border border-[#FF5A1F]/20 font-bold uppercase tracking-widest">
                                      {agent.badge}
                                  </span>
                              </div>
                              <div className="font-mono text-[10px] text-[#A3A3B3] mb-2 font-bold">{agent.cityLanguage}</div>
                              <div className="font-mono text-[10px] text-[#626272] mb-3">INTEGRATION: {agent.specialty}</div>
                              <p className="text-xs text-[#A3A3B3] leading-relaxed mb-4">{agent.scenario}</p>
                              
                              {/* Speech sample text box */}
                              <div className="p-3 bg-[#0A0A0F] border border-[#1C1C24] rounded-sm mb-4">
                                  <span className="text-[9px] font-mono text-[#626272] uppercase block mb-1">Sample Speech Audio Script:</span>
                                  <p className="text-xs text-white italic">{agent.audioPreviewText}</p>
                              </div>
                          </div>

                          <button 
                              onClick={() => toggleAudioDemo(agent.id)}
                              className={`w-full py-3 border font-mono text-[11px] uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 transition-all rounded-[4px] ${
                                playingAudioId === agent.id 
                                  ? "bg-[#0047FF] text-white border-[#0047FF]" 
                                  : "border-[#1C1C24] text-white hover:border-[#0047FF] bg-[#0A0A0F]"
                              }`}
                          >
                              {playingAudioId === agent.id ? (
                                <>
                                  <Pause className="w-3.5 h-3.5 text-white" /> Audio Preview Playing... (Click to Pause)
                                </>
                              ) : (
                                <>
                                  <Play className="w-3.5 h-3.5 text-[#0047FF]" /> Listen to Voice Sample Preview
                                </>
                              )}
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ── ROI / REVENUE RECOVERY SECTION ─────────────── */}
      <section className="py-24 lg:py-32 border-b border-[#1C1C24] bg-[#111116] relative">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
              <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// QUANTIFIABLE OPERATIONS</span>
              <h2 className="text-h2 text-[#F5F6FA] mb-6">
                  What Unanswered Calls Cost Indian SMBs
              </h2>
              <p className="text-body max-w-2xl mx-auto mb-12">
                  Answering phone inquiries in 10 seconds vs calling back the next morning is the difference between locking in an admission or losing site visits to a competitor.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2 uppercase">AFTER-HOURS CALL LOSS</span>
                      <strong className="text-3xl font-bold font-space text-[#FF5A1F] block mb-2">58%</strong>
                      <span className="text-xs text-[#A3A3B3]">of 99acres and property portal leads call after 7 PM after office hours.</span>
                  </div>
                  <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2 uppercase">ADMISSION SEASON SPIKE</span>
                      <strong className="text-3xl font-bold font-space text-[#FF5A1F] block mb-2">40+ Calls</strong>
                      <span className="text-xs text-[#A3A3B3]">unanswered per day at Kota and Delhi coaching centers during May–July.</span>
                  </div>
                  <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
                      <span className="text-[10px] font-mono text-[#626272] block mb-2 uppercase">CLINIC SLOT RECOVERY</span>
                      <strong className="text-3xl font-bold font-space text-[#0047FF] block mb-2">₹1,500+</strong>
                      <span className="text-xs text-[#A3A3B3]">recovered per empty dental or consultation slot filled via AI.</span>
                  </div>
              </div>
              
              <Link href="/pricing" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
                  Open Revenue ROI Calculator
              </Link>
          </div>
      </section>

      {/* ── CLIENT REVIEWS / BENCHMARKS ─────────────── */}
      <Testimonials />

      {/* ── NEW FREE PILOT CTA SECTION ───────────────── */}
      <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047FF]/10 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-[1000px] mx-auto px-6 text-center">
              <span className="px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-widest bg-[#FF5A1F]/10 text-[#FF5A1F] uppercase border border-[#FF5A1F]/20 rounded-sm inline-block mb-6">
                  LIMITED TIME OFFER
              </span>

              <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-6 tracking-tight">
                  Free 48-Hour Pilot for 3 Businesses
              </h2>

              <p className="text-body-lg text-[#A3A3B3] max-w-xl mx-auto mb-10 leading-relaxed">
                  We'll set up an AI voice agent on your phone line for 2 days. You hear real customer interactions in Hindi, Tamil, Kannada, Telugu or English. Zero commitment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="w-full sm:w-auto px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] shadow-xl">
                      Apply for Pilot — Only 3 Spots
                  </Link>
                  <a
                      href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20apply%20for%20the%20Free%2048-Hour%20Pilot."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2"
                  >
                      <MessageCircle className="w-4 h-4" /> Apply via WhatsApp
                  </a>
              </div>
          </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
          <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// FAQ OBJECTIONS</span>
                  <h2 className="text-h3 font-medium text-white tracking-tight mb-4">Frequently Asked Questions</h2>
                  <p className="text-xs text-[#626272] uppercase tracking-widest font-mono font-bold">INDIAN TELEPHONY & PRICING ANSWERS</p>
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
                                  <span className="text-[10px] font-mono text-[#0047FF] uppercase font-semibold">Founder & Chief Architect</span>
                              </div>
                              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                          </div>
                      </div>
                  </div>
              </div>
              
              <div>
                  <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3">// FOUNDER & ARCHITECT</span>
                  <h2 className="text-h2 text-white mb-4">Godson Saji</h2>
                  <p className="text-body mb-6 leading-relaxed">
                      "I founded BoldFlow Labs to solve a glaring bottleneck for Indian business owners: pouring money into digital ads and 99acres leads, only to lose sales because phone lines are busy after 7 PM or staff can't handle peak admission calls. We build AI agents that answer back in native Indian languages in under 10 seconds."
                  </p>
                  <p className="text-body mb-8">
                      Godson writes the core telephony code, Exotel/Plivo triggers, and LeadSquared/Zoho/Practo integrations. You work directly with the builder from day one.
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
              <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">// FREE TELEPHONY DIAGNOSTIC</span>
              <h2 className="text-[36px] md:text-[48px] font-bold font-space text-[#F5F6FA] mb-6 tracking-tight leading-tight">
                  Book Your Free Strategy Call
              </h2>
              <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                  We'll analyze your current phone call leaks, recommend the right language models and Exotel/Plivo setup, and show you live demos.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                  <Link href="/contact" className="px-6 sm:px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto sm:min-w-[280px] min-w-0 max-w-full rounded-[4px]">
                      INITIALIZE FREE STRATEGY CALL
                  </Link>
                  <p className="text-[11px] font-mono text-[#626272] uppercase tracking-wider">
                      PILOT COHORT CAPACITY LIMITS APPLY
                  </p>
              </div>
          </div>
      </section>
    </>
  );
}
