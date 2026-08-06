"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  Building2, 
  GraduationCap,
  Stethoscope,
  Phone,
  MessageCircle,
  Database
} from "lucide-react";

const useCases = [
  {
    id: "realestate",
    category: "Real Estate",
    industry: "Real Estate Brokers & Developers",
    title: "99acres & MagicBricks After-Hours AI Call Concierge",
    tagline: "Calling back portal leads in under 60 seconds in Kannada, Tamil, Hindi, or Hinglish to book site visits.",
    description: "58% of Indian property portal inquiries arrive after 7 PM. When a buyer calls your sales office at 8:30 PM, lines go unanswered. Our AI voice agent calls back in under 60 seconds, verifies budget, locality, and configuration (2 BHK / 3 BHK), and schedules a site visit on your calendar.",
    kpis: [
      { label: "Speed-to-Lead", value: "< 60 Secs" },
      { label: "After-Hours Capture", value: "100%" },
      { label: "CRM Sync", value: "LeadSquared / Zoho CRM" }
    ],
    flow: [
      { step: "01", label: "Portal Inquiry / Call", desc: "Buyer submits form on 99acres, MagicBricks, or Meta ad after office hours." },
      { step: "02", label: "60s Outbound Callback", desc: "AI triggers call to buyer's phone speaking in caller's language." },
      { step: "03", label: "Qualify Budget & Locality", desc: "Verifies move-in timeframe, pre-approval status, and site visit preference." },
      { step: "04", label: "WhatsApp & Calendar Sync", desc: "Books site visit, sends WhatsApp pin drop, and pushes lead to LeadSquared." }
    ],
    integration: "LeadSquared / Zoho CRM / Google Calendar / WhatsApp API",
    badge: "Most Popular",
    color: "#0047FF"
  },
  {
    id: "coaching",
    category: "Education",
    industry: "Coaching Institutes & Academies",
    title: "Admission Season Parent Inquiry & Counseling Booker",
    tagline: "Handling 80+ daily calls during JEE/NEET admission spikes across Kota, Delhi NCR, and South Indian hubs.",
    description: "During peak admission season (May–July), coaching center staff are overwhelmed by 80–100 parent calls per day. Our AI receptionist answers in 10 seconds in Hindi, Tamil, Telugu, or English, captures student target exam details, and books counselor appointments.",
    kpis: [
      { label: "Call Answer Latency", value: "< 10 Secs" },
      { label: "Peak Capacity", value: "Unlimited Concurrent" },
      { label: "Enrollment Yield", value: "40+ Extra Calls/Day" }
    ],
    flow: [
      { step: "01", label: "Parent Phone Call", desc: "Parent calls coaching center at 8:30 PM asking about batch timings." },
      { step: "02", label: "Multilingual AI Triage", desc: "AI converses in Hindi/Tamil/Telugu, collecting class, exam target, and budget." },
      { step: "03", label: "Counseling Slot Sync", desc: "Checks Google Calendar for open counselor slots and books appointment." },
      { step: "04", label: "WhatsApp Confirmation", desc: "Sends fee structure PDF and appointment confirmation via WhatsApp." }
    ],
    integration: "LeadSquared / Zoho CRM / Excel / WhatsApp API",
    badge: "High Conversion",
    color: "#FF5A1F"
  },
  {
    id: "clinic",
    category: "Healthcare",
    industry: "Clinics & Multi-Specialty Practices",
    title: "Sunday & After-Hours Patient Appointment Booking Agent",
    tagline: "Answering patient phone inquiries 24/7, reducing empty appointment slots for urban clinics.",
    description: "Front-desk staff putting patients on hold leads to dropped calls and empty doctor schedules. Our AI phone assistant handles routine appointment bookings, screens patient consult requirements, and syncs directly with Practo and Google Calendar.",
    kpis: [
      { label: "Slot Recovery", value: "₹45,000 / Mo" },
      { label: "Patient No-Show Drop", value: "-40%" },
      { label: "Response Latency", value: "< 200ms" }
    ],
    flow: [
      { step: "01", label: "Patient Call", desc: "Patient calls clinic line on Sunday or evening for dental/general consultation." },
      { step: "02", label: "Natural Language Booking", desc: "AI verifies consult reason, doctor preference, and open time slots." },
      { step: "03", label: "Practo / Calendar Write", desc: "Writes appointment directly into doctor's Practo or Google Calendar." },
      { step: "04", label: "WhatsApp Reminder", desc: "Dispatches automated location pin and pre-appointment reminder." }
    ],
    integration: "Practo / Google Calendar / WhatsApp Business API",
    badge: "Top ROI",
    color: "#10B981"
  }
];

export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCases = activeTab === "all" 
    ? useCases 
    : useCases.filter(c => c.id === activeTab || c.category.toLowerCase().includes(activeTab));

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-40 pb-32">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
      
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <header className="mb-20 max-w-4xl">
          <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">// INDIAN VERTICAL BLUEPRINTS</span>
          <h1 className="text-h1 text-[#F5F6FA] mb-6 tracking-tight">
            Vertical Use Cases
          </h1>
          <p className="text-body-lg">
            Explore how we deploy multilingual conversational voice agents tailored for Indian real estate brokers, coaching institutes, and healthcare clinics to capture missed calls and drive bookings.
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex overflow-x-auto pb-4 sm:pb-6 gap-2 no-scrollbar border-b border-[#1C1C24] mb-16 sm:flex-wrap">
          {[
            { id: "all", label: "All Solutions" },
            { id: "realestate", label: "Real Estate Brokers" },
            { id: "coaching", label: "Coaching Institutes" },
            { id: "clinic", label: "Clinics & Doctors" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 border rounded-sm font-bold ${
                activeTab === tab.id 
                  ? "bg-[#0047FF] border-[#0047FF] text-white" 
                  : "border-[#1C1C24] text-[#A3A3B3] hover:border-[#2E2E3E] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <div className="flex flex-col gap-16">
          <AnimatePresence mode="wait">
            {filteredCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12 border border-[#1C1C24] bg-[#111116] rounded-[8px] relative overflow-hidden"
              >
                {/* Accent Background Corner Glow */}
                <div 
                  className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] rounded-full blur-[80px] pointer-events-none"
                  style={{ backgroundColor: caseItem.color }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                  
                  {/* Left Column: Descriptions and KPI stats */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-[10px] font-bold text-[#FF5A1F] uppercase tracking-widest bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 px-2 py-0.5 rounded-sm">
                          {caseItem.industry}
                        </span>
                        <span className="text-xs text-[#626272] font-mono">{"//"} {caseItem.category}</span>
                      </div>

                      <h2 className="text-2xl lg:text-[32px] font-bold font-space text-white tracking-tight mb-4 leading-tight">
                        {caseItem.title}
                      </h2>

                      <p className="text-sm text-[#0047FF] font-mono mb-6 uppercase tracking-wider">{caseItem.tagline}</p>

                      <p className="text-body mb-8 leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>

                    {/* KPI stats Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-[#1C1C24] pt-8">
                      {caseItem.kpis.map((kpi, kIdx) => (
                        <div key={kIdx}>
                          <span className="text-[10px] text-[#626272] uppercase font-mono tracking-wider block mb-1">{kpi.label}</span>
                          <strong className="text-xl lg:text-2xl font-bold font-space text-white">{kpi.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Execution steps & Integrations */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="p-6 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px] mb-8">
                      <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-wider block mb-6">{"//"} CONVERSATION FLOW</span>
                      
                      <div className="flex flex-col gap-6">
                        {caseItem.flow.map((flowStep, fIdx) => (
                          <div key={fIdx} className="flex gap-4 items-start">
                            <span className="w-6 h-6 rounded-full bg-[#161622] border border-[#1C1C24] flex items-center justify-center text-[10px] font-bold font-mono text-[#FF5A1F] shrink-0 mt-0.5">
                              {flowStep.step}
                            </span>
                            <div>
                              <h4 className="text-xs font-bold font-space text-white leading-tight mb-1">{flowStep.label}</h4>
                              <p className="text-[11px] text-[#A3A3B3] leading-relaxed">{flowStep.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrations & Call-to-action */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#626272] bg-[#0A0A0F] border border-[#1C1C24] px-4 py-3 rounded-sm">
                        <span>INTEGRATES NATIVELY:</span>
                        <span className="text-white font-bold">{caseItem.integration}</span>
                      </div>
                      
                      <Link 
                        href="/contact" 
                        className="py-4 w-full text-center text-xs font-mono font-bold uppercase tracking-wider btn-primary flex items-center justify-center gap-2 rounded-[4px]"
                      >
                        Request {caseItem.industry} Solution Proposal <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
