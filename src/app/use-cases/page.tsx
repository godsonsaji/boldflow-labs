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
    id: "hvac",
    category: "Home Services",
    industry: "HVAC & Mechanical Contractors",
    title: "24/7 After-Hours Emergency Triage & Job Dispatcher",
    tagline: "Answering missed calls after-hours, triaging AC/heating emergencies, and scheduling service jobs into ServiceTitan.",
    description: "When an AC breaks down in July or a furnace stops in January, homeowners don't leave voicemails—they call the next contractor. Our AI receptionist answers within 2 rings 24/7/365, triages emergency urgency, collects customer details, and books service jobs directly into your dispatcher calendar.",
    kpis: [
      { label: "Enquiry Latency", value: "< 60 Secs" },
      { label: "After-Hours Call Capture", value: "100%" },
      { label: "CRM Sync", value: "ServiceTitan / Housecall Pro" }
    ],
    flow: [
      { step: "01", label: "Inbound Call / Form", desc: "Homeowner calls emergency line or submits online service request." },
      { step: "02", label: "Emergency Triage", desc: "AI agent classifies heating/cooling urgency and collects job site details." },
      { step: "03", label: "Dispatcher Slot Sync", desc: "Checks technician availability and open time windows in real-time." },
      { step: "04", label: "Job Confirmation", desc: "Books appointment slot, sends SMS confirmation, and dispatches tech." }
    ],
    integration: "ServiceTitan / Housecall Pro / Jobber / Google Calendar",
    badge: "Most Popular",
    color: "#0047FF"
  },
  {
    id: "roofing",
    category: "Home Services",
    industry: "Roofing & Exterior Contracting",
    title: "Storm Lead Callback & Inspection Booking Agent",
    tagline: "Reaching out to hail and storm damage web leads in under 60 seconds to book inspection appointments.",
    description: "During severe storm seasons, roof inspection lead volume spikes 10x. Speed-to-lead dictates who locks in the roof replacement. Our AI outbound agent rings web form submissions within 45 seconds, screens roof age and insurance status, and books inspection estimates for sales reps.",
    kpis: [
      { label: "Speed-to-Lead Interval", value: "< 60 Secs" },
      { label: "Inspection Booking Rate", value: "84%" },
      { label: "CRM Sync Latency", value: "Real-Time" }
    ],
    flow: [
      { step: "01", label: "Form Submission", desc: "Homeowner requests estimate via Facebook Ad, Google, or website form." },
      { step: "02", label: "Immediate Outbound Call", desc: "AI triggers outbound phone call or SMS sequence in under 60 seconds." },
      { step: "03", label: "Qualify Damage Intent", desc: "Confirms storm damage type, roof age, and insurance claim status." },
      { step: "04", label: "Inspector Booking", desc: "Schedules free inspection with rep and writes full call transcript to CRM." }
    ],
    integration: "AccuLynx / HubSpot / Jobber / Salesforce",
    badge: "High Conversion",
    color: "#FF5A1F"
  },
  {
    id: "realestate",
    category: "Real Estate",
    industry: "Real Estate Brokerages & Teams",
    title: "Zillow & Web Lead Qualification Concierge",
    tagline: "Reactivating cold CRM databases and qualifying buyer leads for real estate agents 24/7.",
    description: "Real estate agents spend up to 4 hours a day chasing cold lead form submissions. Our AI real estate concierge reaches out to Zillow, Realtor.com, and website leads in under a minute, qualifies budget and timeframe, and schedules buyer consultation calls onto rep calendars.",
    kpis: [
      { label: "Database Reactivation", value: "3.8x Yield" },
      { label: "Agent Time Saved", value: "15 Hrs/Wk" },
      { label: "Response Latency", value: "Instant" }
    ],
    flow: [
      { step: "01", label: "Portal Enquiry", desc: "Buyer submits inquiry on Zillow, Realtor.com, or team website." },
      { step: "02", label: "Instant Qualification", desc: "AI verifies pre-approval status, desired neighborhood, and move-in timeline." },
      { step: "03", label: "Schedule Call", desc: "Matches available agent calendar slot and books 15-min discovery call." },
      { step: "04", label: "Follow Up Boss Sync", desc: "Syncs buyer profile, notes, and call audio directly into Follow Up Boss." }
    ],
    integration: "Follow Up Boss / KvCORE / Salesforce / HubSpot",
    badge: "Top ROI",
    color: "#FFB020"
  },
  {
    id: "solar",
    category: "Clean Energy",
    industry: "Solar Installers & Clean Energy",
    title: "Solar Bill Qualification & Consultation Scheduler",
    tagline: "Qualifying monthly electric bill thresholds and scheduling residential solar consultations.",
    description: "Solar ad campaigns generate thousands of clicks, but only homeowners with $150+ monthly electric bills and owned roofs qualify. Our AI agent calls incoming leads instantly, verifies utility bill eligibility, and schedules solar design consultations.",
    kpis: [
      { label: "Call Answer Rate", value: "100%" },
      { label: "Consultation Conversion", value: "76%" },
      { label: "After-Hours Capture", value: "24/7" }
    ],
    flow: [
      { step: "01", label: "Ad Lead Capture", desc: "Homeowner requests free solar quote via online quiz or ad." },
      { step: "02", label: "Utility Verification", desc: "AI agent asks average electric bill amount and roof ownership." },
      { step: "03", label: "Design Consultation", desc: "Schedules remote or on-site solar proposal presentation." },
      { step: "04", label: "CRM Pipeline Update", desc: "Pushes qualified lead details and bill amount straight into CRM." }
    ],
    integration: "HubSpot / Salesforce / Sunbase / Google Calendar",
    badge: "24/7 Qualification",
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
