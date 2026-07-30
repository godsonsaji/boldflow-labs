"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Phone, 
  Building2, 
  TrendingUp, 
  Cpu, 
  Calendar, 
  Layers, 
  MessageSquare,
  Wrench,
  Sun,
  Home,
  Database
} from "lucide-react";

const useCases = [
  {
    id: "clinic",
    category: "Healthcare",
    industry: "Clinics & Hospitals",
    title: "24/7 Patient Consultation & Triage Receptionist",
    tagline: "Answering missed calls, triaging appointment urgency, and booking doctor consultations directly into your schedule.",
    description: "During peak patient hours, reception desks are swamped with walk-ins and phone calls. Missed calls mean lost patients seeking treatment elsewhere. Our AI receptionist answers instantly, classifies emergency vs routine consultations, collects patient symptoms, and schedules doctor slots in real-time.",
    kpis: [
      { label: "Enquiry Latency", value: "< 60 Secs" },
      { label: "Missed Call Capture", value: "100%" },
      { label: "CRM Sync", value: "Zoho / LeadSquared" }
    ],
    flow: [
      { step: "01", label: "Inbound Call / Form", desc: "Patient calls clinic or submits inquiry on website/ads." },
      { step: "02", label: "Medical Triage", desc: "AI agent asks doctor preference, symptom urgency, and consultation type." },
      { step: "03", label: "Availability Check", desc: "Checks doctor calendar and slot capacity in real-time." },
      { step: "04", label: "Confirm Booking", desc: "Books appointment slot, sends SMS confirmation, and logs to CRM." }
    ],
    integration: "Zoho CRM / LeadSquared / Kylas / Google Calendar",
    badge: "Most Popular",
    color: "#0047FF"
  },
  {
    id: "realestate",
    category: "Real Estate",
    industry: "Real Estate Developers",
    title: "60-Second Property Enquiry Callback Qualifier",
    tagline: "Reaching out to project enquiry leads within 60 seconds, checking budget & timeline, booking site visits.",
    description: "High-end residential and commercial buyers enquire on multiple developer projects. Speed-to-lead dictates who gets the first site visit. Rohan, our Real Estate Qualifier, rings or texts new ad leads in under 60 seconds, qualifies budget range and buying timeframe, and schedules site visits.",
    kpis: [
      { label: "Speed-to-Lead Interval", value: "< 60 Secs" },
      { label: "Site Visit Booking Rate", value: "78%" },
      { label: "CRM Sync Latency", value: "Real-Time" }
    ],
    flow: [
      { step: "01", label: "Lead Submission", desc: "Buyer submits enquiry on Facebook, Google Ad, or project website." },
      { step: "02", label: "Immediate Ringback", desc: "AI agent triggers outbound call/text sequence in under 60 seconds." },
      { step: "03", label: "Qualify Intent", desc: "Confirms BHK preference, budget range, and site visit availability." },
      { step: "04", label: "Calendar Booking", desc: "Schedules site visit with relationship manager; syncs with CRM." }
    ],
    integration: "Kylas / LeadSquared / Zoho / Salesforce",
    badge: "High Conversion",
    color: "#FF5A1F"
  },
  {
    id: "education",
    category: "Education",
    industry: "Coaching Institutes & Colleges",
    title: "Admissions Spike & Student Screening Counselor",
    tagline: "Handling admission-season enquiry spikes for coaching institutes and colleges, qualifying course fit, booking counseling calls.",
    description: "During admission cycles, institute counselors get overwhelmed with student and parent calls. Priya, our AI Admissions Counselor, handles enquiry spikes 24/7, answers course eligibility queries, screens student background, and books 1-on-1 counseling calls.",
    kpis: [
      { label: "Admissions Peak Capacity", value: "Infinite" },
      { label: "Counseling Booking Lift", value: "3.2x" },
      { label: "Response Latency", value: "Instant" }
    ],
    flow: [
      { step: "01", label: "Student Enquiry", desc: "Parent or student fills admission form or calls hotline." },
      { step: "02", label: "Course Eligibility", desc: "AI agent screens academic background, target batch, and stream." },
      { step: "03", label: "Counseling Schedule", desc: "Matches available counselor slot and reserves 1-on-1 session." },
      { step: "04", label: "CRM Data Push", desc: "Pushes complete student profile and call notes directly into CRM." }
    ],
    integration: "LeadSquared / Zoho CRM / Google Workspace",
    badge: "Seasonal Scaler",
    color: "#FFB020"
  },
  {
    id: "labs",
    category: "Healthcare",
    industry: "Diagnostic Labs & Imaging Centers",
    title: "Home Sample Collection & Lab Test Booking Agent",
    tagline: "Booking diagnostic test appointments and home sample collection visits automatically 24/7.",
    description: "Patients calling diagnostic centers want quick test pricing, fasting requirements, and home collection slots. Our Diagnostic AI Receptionist answers instant queries, provides test instructions, and schedules phlebotomist home visits.",
    kpis: [
      { label: "Call Answer Rate", value: "100%" },
      { label: "Home Booking Conversion", value: "88%" },
      { label: "After-Hours Capture", value: "24/7" }
    ],
    flow: [
      { step: "01", label: "Test Enquiry", desc: "Patient calls or messages for blood test / health package." },
      { step: "02", label: "Instruction Guidance", desc: "AI confirms test requirements (e.g. 10-hr fasting) and collection address." },
      { step: "03", label: "Phlebotomist Slot", desc: "Schedules home sample collection time window." },
      { step: "04", label: "Dispatch Sync", desc: "Syncs dispatch ticket and address details into lab software." }
    ],
    integration: "Custom LIMS / Zoho / LeadSquared",
    badge: "24/7 Dispatch",
    color: "#0047FF"
  }
];

export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCases = activeTab === "all" 
    ? useCases 
    : useCases.filter(c => c.id === activeTab || c.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-40 pb-32">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
      
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <header className="mb-20 max-w-4xl">
          <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">{"//"} SYSTEM TEMPLATE LIBRARY</span>
          <h1 className="text-h1 text-[#F5F6FA] mb-6 tracking-tight">
            Vertical Use Cases
          </h1>
          <p className="text-body-lg">
            Explore how we build specific, deterministic conversational pathways for healthcare clinics, education institutes, real estate developers, and diagnostic labs to stop lead leaks and drive bookings.
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex overflow-x-auto pb-4 sm:pb-6 gap-2 no-scrollbar border-b border-[#1C1C24] mb-16 sm:flex-wrap">
          {[
            { id: "all", label: "All Use Cases" },
            { id: "clinic", label: "Clinics & Hospitals" },
            { id: "realestate", label: "Real Estate Developers" },
            { id: "education", label: "Education Admissions" },
            { id: "labs", label: "Diagnostic Labs" }
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
            {filteredCases.map((caseItem, idx) => (
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
                        Request {caseItem.industry} Setup Proposal <ArrowRight className="w-4 h-4" />
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
