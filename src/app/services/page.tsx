"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: "01",
        title: "24/7 AI Inbound Voice Receptionists",
        subheadline: "Instant 10s Call Answer · Multilingual Triage · LeadSquared & Practo Sync",
        description: "We deploy custom-trained conversational voice agents that answer inbound business calls on the second ring, 24/7/365. They converse naturally in Hindi, Tamil, Kannada, Telugu, Marathi, Bengali, Hinglish, and English, answering FAQs and booking appointments directly on your calendar.",
        whatsIncluded: [
            "Sub-200ms voice response latency over Exotel, Plivo, and Vobiz Indian VoIP trunks",
            "Custom triage rules for real estate site visits, D2C COD confirmation, and insurance renewals",
            "Direct calendar & system integration with LeadSquared, Zoho CRM, Shopify, and Google Calendar",
            "Instant WhatsApp confirmation messages sent to customer automatically"
        ],
        outcome: "Zero missed calls after 7 PM or on Sundays — capturing 100% of high-intent portal and ad leads"
    },
    {
        icon: "02",
        title: "60-Second Outbound Portal & Ad Callbacks",
        subheadline: "99acres / MagicBricks / Meta Hook · Instant Voice Qualification",
        description: "Speed-to-lead dictates close rates. When a parent or property buyer submits a form on 99acres, MagicBricks, Meta Ads, or your website, our system calls them back in under 60 seconds to qualify intent and book a consultation.",
        whatsIncluded: [
            "Automated webhook trigger initiating outbound calls within 45 seconds of portal lead form submit",
            "Conversational screening verifying budget, preferred location/batch, and move-in timeline",
            "Live transfer capability to on-duty sales brokers or counselors",
            "Automated multi-step WhatsApp text retry sequences if the lead misses the initial call"
        ],
        outcome: "300%+ higher lead contact rate by locking in site visits before competitors even wake up"
    },
    {
        icon: "03",
        title: "CRM & WhatsApp Pipeline Automation",
        subheadline: "LeadSquared · Zoho CRM · Practo · WhatsApp Business API · Google Calendar",
        description: "We eliminate manual data entry by wiring deep bidirectional webhooks between your voice agents, ad platforms, and CRM software.",
        whatsIncluded: [
            "Instant lead enrichment and ticket creation in LeadSquared, Zoho CRM, or Practo",
            "Automatic sales rep or counselor assignment based on city, course, and budget",
            "Zero manual CRM entry — call audio summaries, tags, and transcripts push instantly",
            "Automated post-call follow-up sequences via WhatsApp Business API"
        ],
        outcome: "Clean, automated pipeline hygiene with zero manual front-desk data entry"
    },
    {
        icon: "04",
        title: "Database Reactivation & Outbound AI Campaigns",
        subheadline: "Stale Lead Reactivation · Admission Deadline Calls · EMI Due Reminders",
        description: "Turn cold leads sitting in your CRM into booked revenue. Our AI agents execute targeted outbound phone and WhatsApp campaigns to reactivate past inquiries and remind clients of upcoming deadlines.",
        whatsIncluded: [
            "Automated outbound campaign triggers targeting leads older than 30-90 days",
            "Conversational re-engagement pitching upcoming batches, new property launches, or health checkups",
            "Real-time objection handling and calendar slot booking in native languages",
            "Automatic DND filter compliance according to TRAI guidelines"
        ],
        outcome: "Recovered revenue from existing CRM database without extra advertising spend"
    },
    {
        icon: "05",
        title: "Multi-Channel WhatsApp & Conversational Automation",
        subheadline: "Instant Text Response · Web Chat Sync · 24/7 WhatsApp AI Assistant",
        description: "Meet Indian consumers where they live: WhatsApp. We deploy intelligent conversational bots that unite phone calls, SMS text, and WhatsApp under one unified engine.",
        whatsIncluded: [
            "Instant 2-way WhatsApp text sequences following up on missed calls and web forms",
            "Smart web chat widgets trained on your exact pricing policies, batch timings, and FAQs",
            "Seamless handoff protocols to human staff when complex questions arise",
            "Automated appointment reminders and location pin drops sent directly via WhatsApp"
        ],
        outcome: "Faster response times, lower no-show rates, and 24/7 coverage across WhatsApp"
    },
    {
        icon: "06",
        title: "Revenue Recovery & Voice Analytics Dashboards",
        subheadline: "Real-Time Call Analytics · Lead Latency · Call Outcome Audits",
        description: "Ditch manual tracking spreadsheets. We build visual analytics panels mapping your call answer speed, appointment booking rate, and recaptured revenue.",
        whatsIncluded: [
            "Custom dashboard mapping call volume, speed-to-lead latency, and conversion rates",
            "Real-time call transcription analysis identifying top parent, buyer, and patient objections",
            "Weekly automated executive summaries delivered directly to your email or WhatsApp",
            "Complete transparency on ROI and cost per booked appointment"
        ],
        outcome: "Decisions grounded in real-time operational data, not gut feeling"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-[#0A0A0F] min-h-screen">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />

            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1C1C24] overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} WHAT WE BUILD FOR INDIAN SMBS
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 max-w-4xl tracking-tight"
                    >
                        AI Voice Systems Built for Indian Businesses.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-body-lg max-w-2xl leading-relaxed"
                    >
                        We don't sell generic templates. Every voice assistant BoldFlow Labs deploys is built from first principles for Indian real estate, D2C e-commerce, and insurance operations — integrated with Exotel, Plivo, LeadSquared, Zoho, Shopify, and WhatsApp.
                    </motion.p>
                </div>
            </section>

            {/* ── SERVICES LIST ────────────────────────── */}
            <section className="py-24 lg:py-32 bg-[#111116] border-b border-[#1C1C24] relative">
                <div className="max-w-[1000px] mx-auto px-6 flex flex-col space-y-24 md:space-y-32 relative z-10">
                    {services.map((svc) => (
                        <motion.div
                            key={svc.icon}
                            id={svc.icon}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative scroll-mt-28"
                        >
                             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                 {/* Left: Numbering Matrix */}
                                 <div className="shrink-0 flex items-start">
                                     <div className="text-[48px] md:text-[64px] font-bold text-white/5 font-mono tracking-tighter select-none">
                                         {svc.icon}
                                     </div>
                                 </div>

                                 {/* Right: Content */}
                                 <div className="flex-1 pt-2 md:pt-4">
                                     <h2 className="text-2xl md:text-3xl font-bold font-space text-[#F5F6FA] mb-2 leading-tight">
                                         {svc.title}
                                     </h2>
                                     <h3 className="text-sm font-mono font-bold text-[#0047FF] mb-6 uppercase tracking-wider">
                                         {svc.subheadline}
                                     </h3>
                                     {svc.description && (
                                         <p className="text-sm text-[#A3A3B3] leading-relaxed mb-8">
                                             {svc.description}
                                         </p>
                                     )}
                                     
                                     {/* Micro-Lists & Tags */}
                                     <div className="bg-[#0A0A0F] border border-[#1C1C24] p-6 lg:p-8 mb-4 rounded-[6px]">
                                         <h4 className="text-xs font-mono text-[#0047FF] uppercase tracking-widest mb-4 font-bold">
                                             {"//"} SYSTEM_FEATURES_INCLUDED
                                         </h4>
                                         <ul className="space-y-3 mb-8">
                                             {svc.whatsIncluded.map((item, i) => (
                                                 <li key={i} className="flex items-start gap-3">
                                                     <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                                     <span className="text-[#A3A3B3] text-[14px] leading-relaxed">{item}</span>
                                                 </li>
                                             ))}
                                         </ul>
                                         
                                         <div className="pt-6 border-t border-[#1C1C24]">
                                             <span className="text-[#626272] text-xs font-mono uppercase tracking-wider font-bold">OUTCOME_METRIC: </span>
                                             <span className="text-white text-xs font-space">{svc.outcome}</span>
                                         </div>
                                     </div>
                                     
                                     <div className="mt-8">
                                         <Link href="/contact" className="text-[#FF5A1F] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:gap-3 transition-all inline-flex group">
                                             Discuss this system <ArrowRight className="w-4 h-4" />
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── PAGE CTA ─────────────────────────────── */}
            <section className="py-24 lg:py-32 flex justify-center px-6 bg-[#0A0A0F]">
                <div className="w-full max-w-[800px] text-center">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-space text-white mb-6 tracking-tight leading-tight">
                        Not sure which system fits?
                    </h2>
                    
                    <p className="text-body-lg text-[#A3A3B3] mb-10 max-w-lg mx-auto leading-relaxed">
                        Book a free strategy call or test our 48-hour pilot. We look at your current call volume and tell you honestly what to automate first.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-10 py-5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center w-full sm:w-auto min-w-[280px] rounded-[4px]">
                            Book a Free Strategy Call
                        </Link>
                        <p className="text-[11px] font-mono text-[#626272] uppercase tracking-wider">
                            ZERO PRESSURE. ZERO OBLIGATIONS.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
