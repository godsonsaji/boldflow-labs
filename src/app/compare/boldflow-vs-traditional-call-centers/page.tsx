"use client";

import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight, 
  Phone, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Clock, 
  DollarSign,
  AlertCircle
} from "lucide-react";

export default function CompareCallCentersPage() {
  const comparisonRows = [
    {
      feature: "Monthly Cost per Seat / Pipeline",
      traditional: "₹25,000 – ₹35,000 / seat (Salary + Dialers + PF + Hardware)",
      boldflow: "₹9,999 – ₹19,999 / month flat retainer (All-inclusive)",
      winner: "boldflow"
    },
    {
      feature: "Night & Weekend After-Hours Coverage",
      traditional: "2x – 3x overtime shift pay or completely unattended after 7 PM",
      boldflow: "24/7/365 active with zero overtime surcharge",
      winner: "boldflow"
    },
    {
      feature: "Speed to Lead (Portal & Web Inquiries)",
      traditional: "15 to 45 minutes average (delayed queue times)",
      boldflow: "Under 10 seconds instant automated callback",
      winner: "boldflow"
    },
    {
      feature: "Agent Turnover & Attrition",
      traditional: "45% – 60% annual telecaller turnover (constant retraining)",
      boldflow: "0% attrition — deterministic AI knowledge base that never quits",
      winner: "boldflow"
    },
    {
      feature: "Concurrent Call Capacity",
      traditional: "1 call per agent (busy tones during peak marketing ad bursts)",
      boldflow: "Infinite elastic scaling — 100+ callers answered simultaneously",
      winner: "boldflow"
    },
    {
      feature: "Multilingual Dialect Code-Switching",
      traditional: "Requires hiring distinct regional telecallers per state",
      boldflow: "Fluid Hindi, Tamil, Kannada, Telugu, Bengali, Hinglish auto-switch",
      winner: "boldflow"
    },
    {
      feature: "CRM Data Logging Accuracy",
      traditional: "Manual, subjective agent notes with frequent typos or missing fields",
      boldflow: "100% automated JSON webhooks, diarized audio & WhatsApp sync",
      winner: "boldflow"
    },
    {
      feature: "Regulatory Compliance (TRAI & DND)",
      traditional: "Frequent rogue agent cold calls leading to corporate number blocks",
      boldflow: "Built-in real-time NDNC DLT registry scrubbing & 9 AM–9 PM routing",
      winner: "boldflow"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-36 pb-24 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-[#A3A3B3]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0047FF]">Compare</span>
          <span>/</span>
          <span className="text-white">vs Traditional Call Centers</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047FF]/10 border border-[#0047FF]/30 text-[#0047FF] font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Operational & Financial TCO Breakdown</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-space tracking-tight mb-4 leading-tight">
            BoldFlow AI vs. Traditional <span className="text-[#0047FF]">Telecalling Agencies</span> in India
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3B3] leading-relaxed">
            Human telecalling agencies struggle with 50%+ attrition, high night-shift costs, and missed lead callbacks. Here is an honest, data-backed comparison of unit economics, speed-to-lead, and operational reliability.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-6 bg-[#111116] border border-[#1C1C24] rounded-[8px]">
            <div className="font-mono text-xs text-[#A3A3B3] uppercase mb-1">// Cost Reduction</div>
            <div className="text-3xl font-bold font-space text-[#10B981] mb-2">60% – 75%</div>
            <p className="text-xs text-[#A3A3B3]">Lower total cost of ownership compared to an outsourced 5-seat telecaller team.</p>
          </div>
          <div className="p-6 bg-[#111116] border border-[#1C1C24] rounded-[8px]">
            <div className="font-mono text-xs text-[#A3A3B3] uppercase mb-1">// Speed-to-Lead</div>
            <div className="text-3xl font-bold font-space text-[#0047FF] mb-2">&lt;10 Seconds</div>
            <p className="text-xs text-[#A3A3B3]">Instant inbound answering & portal callbacks vs. 25-minute agency delays.</p>
          </div>
          <div className="p-6 bg-[#111116] border border-[#1C1C24] rounded-[8px]">
            <div className="font-mono text-xs text-[#A3A3B3] uppercase mb-1">// Turnover / Training</div>
            <div className="text-3xl font-bold font-space text-white mb-2">Zero Attrition</div>
            <p className="text-xs text-[#A3A3B3]">No staff retraining, no sick leaves, and 100% knowledge retention permanently.</p>
          </div>
        </div>

        {/* Head to Head Table */}
        <div className="mb-16 overflow-hidden rounded-[8px] border border-[#1C1C24] bg-[#111116]">
          <div className="p-6 border-b border-[#1C1C24] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold font-space text-white">Feature & Capability Matrix</h2>
              <p className="text-xs text-[#A3A3B3]">Direct comparison across critical telecalling operational metrics in India</p>
            </div>
            <span className="font-mono text-xs px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded border border-[#10B981]/30">
              Verified 2026 Telephony Benchmarks
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1C1C24] bg-[#161622]/60 text-xs font-mono text-[#A3A3B3] uppercase">
                  <th className="p-4 sm:p-5 w-1/3">Evaluation Metric</th>
                  <th className="p-4 sm:p-5 w-1/3 text-[#FF5A1F]">Traditional Telecalling Agency</th>
                  <th className="p-4 sm:p-5 w-1/3 text-[#0047FF] bg-[#0047FF]/5">BoldFlow Labs AI Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C1C24] text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#161622]/30 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-[#A3A3B3] flex items-start gap-2">
                      <X className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white bg-[#0047FF]/5 font-medium flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{row.boldflow}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-[#111116] border border-[#1C1C24] rounded-[8px]">
            <div className="w-10 h-10 rounded-[6px] bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F] mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-space text-white mb-3">The Hidden Toll of Telecaller Attrition</h3>
            <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed mb-4">
              Indian BPOs and outsourced telecalling agencies face an annual attrition rate of 45% to 60%. By the time an agent learns your property inventory, D2C catalog, or insurance policy terms, they leave.
            </p>
            <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed">
              Every transition results in missed customer context, inconsistent pitch quality, and constant management overhead for your internal leadership.
            </p>
          </div>

          <div className="p-8 bg-[#111116] border border-[#0047FF]/30 rounded-[8px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047FF]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-10 h-10 rounded-[6px] bg-[#0047FF]/10 border border-[#0047FF]/30 flex items-center justify-center text-[#0047FF] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-space text-white mb-3">The Deterministic AI Advantage</h3>
            <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed mb-4">
              BoldFlow voice agents are custom-trained on your specific business rules, pricing tiers, and objection scripts. They never experience emotional fatigue, never get flustered by rude callers, and never call in sick.
            </p>
            <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed">
              When a buyer calls at 11:30 PM on Sunday, the AI responds with the exact same energetic, professional tone as 10:00 AM on Monday morning.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#0E1528] via-[#111116] to-[#12101E] border border-[#0047FF]/40 rounded-[8px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-space text-white mb-2">
              Ready to Upgrade from Human Agency Fatigue?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3B3]">
              Deploy your custom voice assistant in 5 to 10 days. Keep your existing phone numbers with zero hardware.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="px-6 py-4 bg-[#0047FF] hover:bg-[#1E5CFF] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-all text-center"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919447178166"
              className="px-6 py-4 bg-[#161622] hover:bg-[#1C1C28] border border-[#1C1C24] text-white font-mono text-xs uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#0047FF]" />
              <span>Call Agency: +91 94471 78166</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
