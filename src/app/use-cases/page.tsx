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
    industry: "HVAC Contractors",
    title: "24/7 Diagnostics Intake & Dispatch Agent",
    tagline: "Answering emergency breakdowns, diagnostics triage, and booking direct jobs into ServiceTitan.",
    description: "During peak seasons (summer heatwaves or winter freezes), HVAC teams are flooded with calls. Missed calls go straight to competitors. Our HVAC receptionist answers instantly, classifies standard vs. emergency calls, runs basic diagnostic checklists, and schedules repairs directly into the technician's queue.",
    kpis: [
      { label: "Lead Response Latency", value: "< 2 Secs" },
      { label: "Voicemail Leak Restored", value: "100%" },
      { label: "Average HVAC Ticket Captured", value: "$3,400" }
    ],
    flow: [
      { step: "01", label: "Inbound Call", desc: "Customer calls during after-hours with a furnace blowout." },
      { step: "02", label: "Diagnostic Check", desc: "AI agent asks system type, age, error codes, and home size." },
      { step: "03", label: "Schedule Sync", desc: "Checks dispatch capacity in ServiceTitan in real-time." },
      { step: "04", label: "Confirm Booking", desc: "Writes dispatch job, books technician, and SMS-confirms details." }
    ],
    integration: "ServiceTitan / Housecall Pro / Jobber",
    badge: "Most Popular",
    color: "#0047FF"
  },
  {
    id: "roofing",
    category: "Home Services",
    industry: "Roofing Dispatch",
    title: "Storm-Event Lead Response Dispatcher",
    tagline: "Instantly qualifying and booking emergency inspection jobs during severe weather events.",
    description: "After hailstorms or heavy winds, roofing firms get hundreds of leads from directories and local ads. The first company to call back wins the project. Our Roofing Dispatcher makes proactive outbound text/calls to incoming quote request forms in 60 seconds, scheduling inspections immediately before they call competitor listings.",
    kpis: [
      { label: "Speed-to-Lead Interval", value: "45 Secs" },
      { label: "Storm Lead Booking Rate", value: "84%" },
      { label: "Average Roof Job Value", value: "$12,500" }
    ],
    flow: [
      { step: "01", label: "Storm Lead Submission", desc: "Hail storm hits. Lead fills out a Facebook or Google quote form." },
      { step: "02", label: "Immediate Outbound", desc: "AI agent triggers outbound call/text sequence in under 60 seconds." },
      { step: "03", label: "Triage & Screen", desc: "Confirms owner status, leak location, and insurance status." },
      { step: "04", label: "Calendar Booking", desc: "Schedules inspection on calendar; routes contact profile to CRM." }
    ],
    integration: "Housecall Pro / Salesforce / n8n / Make",
    badge: "Limited Cohort",
    color: "#FF5A1F"
  },
  {
    id: "solar",
    category: "Home Services",
    industry: "Solar Installers",
    title: "Utility Bill Screener & Design Scheduler",
    tagline: "Qualifying solar prospects by screening bill costs, home shading, and booking consultations.",
    description: "Solar lead generation produces high volumes of low-intent leads. Human reps spend hours filtering junk. Our solar agent screeners verify monthly utility bills, check home ownership, analyze shading objections, and book qualified consultations for field reps.",
    kpis: [
      { label: "Consultation Booking Lift", value: "2.5x" },
      { label: "Junk Lead Reduction", value: "65%" },
      { label: "System Payback Term", value: "1 Month" }
    ],
    flow: [
      { step: "01", label: "Lead Ingest", desc: "Solar ad click. System triggers immediate SMS interaction." },
      { step: "02", label: "Utility Verification", desc: "AI agent prompts client for average bill cost and home orientation." },
      { step: "03", label: "Check Qualifications", desc: "Filters out renters, low utility bills (<$150/mo), and heavily shaded lots." },
      { step: "04", label: "Close Consultation", desc: "Passes lead info to CRM, books home energy assessment consultant." }
    ],
    integration: "HubSpot / Salesforce / Google Calendar",
    badge: "Early Stage",
    color: "#FFB020"
  },
  {
    id: "realestate",
    category: "Real Estate",
    industry: "Real Estate Agencies",
    title: "Zillow / Realtor Lead Fast-Response Qualifier",
    tagline: "Capturing Realtor.com and Zillow inquiries instantly, pre-qualifying, and routing to agents.",
    description: "Real estate portals sell the same lead to multiple agents. The agent who responds first gets the relationship. Chloe, our Realtor assistant, makes automatic outbound phone callbacks and SMS prompts inside 60 seconds of any portal submission, qualifying pre-approval, timeline, and budget.",
    kpis: [
      { label: "Lead Contact Rate", value: "91%" },
      { label: "Agent Pipeline Cleanliness", value: "100%" },
      { label: "Missed-Lead Revenue Saved", value: "Var" }
    ],
    flow: [
      { step: "01", label: "Portal Ping", desc: "Lead submits inquiry on Zillow or Realtor.com." },
      { step: "02", label: "Immediate Ring", desc: "AI agent rings the buyer/seller instantly with personalized context." },
      { step: "03", label: "Prequalify Screening", desc: "Asks about buyer agent status, pre-approval status, and buying timeframe." },
      { step: "04", label: "Agent Hand-off", desc: "Routes prospect profile to Follow Up Boss and sets up active live agent call." }
    ],
    integration: "Follow Up Boss / LionDesk / KVCore",
    badge: "Enterprise Core",
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
            Explore how we build specific, deterministic conversational pathways for trade companies and real estate brokerages to stop lead leaks and drive bookings.
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-[#1C1C24] pb-6 mb-16">
          {[
            { id: "all", label: "All Use Cases" },
            { id: "hvac", label: "HVAC Repair" },
            { id: "roofing", label: "Roofing storm dispatch" },
            { id: "solar", label: "Solar Qualifier" },
            { id: "realestate", label: "Real Estate Brokerage" }
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
