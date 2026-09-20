"use client";

import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight, 
  Phone, 
  Cpu, 
  Mic, 
  Layers, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck,
  Zap,
  PhoneCall
} from "lucide-react";

export default function CompareMyOperatorPage() {
  const comparisonRows = [
    {
      feature: "Caller Interaction Paradigm",
      myoperator: "Legacy Keypad IVR ('Press 1 for Sales, Press 2 for Accounts')",
      boldflow: "Natural Spoken Dialogue ('Hi, I saw the 3BHK flat on 99acres...')",
      winner: "boldflow"
    },
    {
      feature: "Voice Latency & Interruption",
      myoperator: "Rigid pre-recorded audio loops; callers cannot interrupt",
      boldflow: "Sub-180ms streaming full-duplex audio with instant acoustic barge-in",
      winner: "boldflow"
    },
    {
      feature: "Regional Dialect & Code-Mixing",
      myoperator: "Static single-language prompts recorded in studio",
      boldflow: "Real-time Hinglish, Tanglish, Kanglish & regional language understanding",
      winner: "boldflow"
    },
    {
      feature: "Lead Qualification & Booking",
      myoperator: "Dumb forwarder: merely rings human extensions until someone picks up",
      boldflow: "Active qualification: gathers budget, dates & books on Google Calendar",
      winner: "boldflow"
    },
    {
      feature: "WhatsApp & CRM Sync",
      myoperator: "Basic call logs (caller ID + duration) in proprietary dashboard",
      boldflow: "Structured webhook payload (transcript, audio URL, JSON parameters) into LeadSquared/Zoho",
      winner: "boldflow"
    },
    {
      feature: "Caller Drop-Off Rate",
      myoperator: "High (over 60% of mobile callers hang up on multi-level IVR trees)",
      boldflow: "Minimal — immediate human-like voice greeting on the 2nd ring",
      winner: "boldflow"
    },
    {
      feature: "Pricing Transparency",
      myoperator: "Complex annual enterprise contracts + per-user seat fees + call rates",
      boldflow: "Predictable flat monthly retainer (₹9,999 or ₹19,999) with minutes included",
      winner: "boldflow"
    },
    {
      feature: "Setup & Calibration Speed",
      myoperator: "Standard telecom routing setup (requires recording scripts yourself)",
      boldflow: "Full turnkey engineering sprint (prompt engineering, sandbox testing, live in 5 days)",
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
          <span className="text-white">vs MyOperator</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047FF]/10 border border-[#0047FF]/30 text-[#0047FF] font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Architecture & Interaction Teardown</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-space tracking-tight mb-4 leading-tight">
            BoldFlow Labs vs. MyOperator: <span className="text-[#0047FF]">Conversational Voice AI</span> vs. Legacy IVR
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3B3] leading-relaxed">
            In 2026, mobile customers despise "Press 1 for Sales, Press 2 for Support" phone trees. Discover why high-growth Indian real estate, D2C, and healthcare firms are replacing static cloud telephony with sub-180ms conversational AI.
          </p>
        </div>

        {/* Side by Side Audio Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Legacy IVR Box */}
          <div className="p-8 bg-[#161114] border border-[#FF5A1F]/30 rounded-[8px] relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#FF5A1F]/15 flex items-center justify-center text-[#FF5A1F]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#FF5A1F] uppercase font-bold block">The Legacy Cloud Telephony Experience</span>
                <span className="font-space font-bold text-white text-base">MyOperator / Traditional IVR</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-[#A3A3B3] bg-[#0E0E12] p-4 rounded border border-[#22171C] mb-6">
              <p className="text-[#FF5A1F]">Caller dials your number...</p>
              <p>🤖 "Welcome to ABC Realty. For Sales, press 1. For Site Visits, press 2. For Customer Support, press 3. For all other queries..."</p>
              <p className="text-[#E2E8F0]">👉 Caller presses 1 while driving...</p>
              <p>🎵 *Muzak hold music plays for 45 seconds*</p>
              <p className="text-[#FF5A1F]">❌ "All agents are busy. Please leave a message or call back."</p>
              <p className="text-white font-bold">Outcome: 64% of callers hang up forever.</p>
            </div>

            <ul className="space-y-2 text-xs text-[#A3A3B3]">
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-[#FF5A1F] shrink-0" /> Zero conversational intelligence</li>
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-[#FF5A1F] shrink-0" /> Callers cannot speak freely or interrupt</li>
              <li className="flex items-center gap-2"><X className="w-4 h-4 text-[#FF5A1F] shrink-0" /> High drop-off during peak traffic bursts</li>
            </ul>
          </div>

          {/* BoldFlow Conversational Box */}
          <div className="p-8 bg-[#0E1528] border border-[#0047FF]/40 rounded-[8px] relative overflow-hidden shadow-[0_0_40px_rgba(0,71,255,0.12)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047FF]/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#0047FF]/20 flex items-center justify-center text-[#0047FF]">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#10B981] uppercase font-bold block">The Modern Voice AI Experience</span>
                <span className="font-space font-bold text-white text-base">BoldFlow Labs Conversational Agent</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-[#A3A3B3] bg-[#0A0E18] p-4 rounded border border-[#162238] mb-6">
              <p className="text-[#0047FF]">Caller dials your number...</p>
              <p className="text-[#10B981]">⚡ Rings once. AI answers in &lt;2 seconds:</p>
              <p className="text-white">🎙️ "Hi, thank you for calling ABC Realty! This is Ananya. Are you looking for 2BHK or 3BHK flats in Whitefield?"</p>
              <p className="text-[#E2E8F0]">🗣️ Caller speaks: "3BHK under 1.5 Crores, can I visit Saturday?"</p>
              <p className="text-[#10B981]">🎙️ "Perfect, we have 2 ready units. I’ve reserved Saturday at 11 AM with Rahul. I'll send the location pin on WhatsApp right now!"</p>
              <p className="text-[#10B981] font-bold">Outcome: Lead qualified, calendar booked, WhatsApp sent.</p>
            </div>

            <ul className="space-y-2 text-xs text-[#A3A3B3]">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#10B981] shrink-0" /> Sub-180ms fluid acoustic interruption</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#10B981] shrink-0" /> Speaks Hindi, Tamil, Kannada, Telugu, Hinglish</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#10B981] shrink-0" /> Direct 2-way sync with LeadSquared & Zoho</li>
            </ul>
          </div>

        </div>

        {/* Feature Comparison Matrix */}
        <div className="mb-16 overflow-hidden rounded-[8px] border border-[#1C1C24] bg-[#111116]">
          <div className="p-6 border-b border-[#1C1C24] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold font-space text-white">Feature Matrix Comparison</h2>
              <p className="text-xs text-[#A3A3B3]">Comparing cloud IVR routing with intelligent conversational voice agents</p>
            </div>
            <span className="font-mono text-xs px-3 py-1 bg-[#0047FF]/10 text-[#0047FF] rounded border border-[#0047FF]/30">
              Direct Capability Breakdown
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1C1C24] bg-[#161622]/60 text-xs font-mono text-[#A3A3B3] uppercase">
                  <th className="p-4 sm:p-5 w-1/3">Capability</th>
                  <th className="p-4 sm:p-5 w-1/3 text-[#FF5A1F]">MyOperator / Cloud IVR</th>
                  <th className="p-4 sm:p-5 w-1/3 text-[#0047FF] bg-[#0047FF]/5">BoldFlow Voice AI</th>
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
                      <span>{row.myoperator}</span>
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

        {/* Integration & Co-existence Callout */}
        <div className="p-8 bg-[#111116] border border-[#1C1C24] rounded-[8px] mb-16">
          <h3 className="text-lg font-bold font-space text-white mb-2">
            Already Using MyOperator or Exotel? You Don't Have to Switch Carriers.
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed mb-4">
            BoldFlow Labs works smoothly with your existing cloud telephony provider. If you have numbers registered on MyOperator, Exotel, or Tata Tele, we configure conditional SIP forwarding on unanswered calls to our voice engine.
          </p>
          <p className="text-xs sm:text-sm text-[#A3A3B3] leading-relaxed">
            You maintain your telecom carrier relationship, while BoldFlow provides the conversational intelligence that actually answers your callers and books appointments.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#0E1528] via-[#111116] to-[#12101E] border border-[#0047FF]/40 rounded-[8px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-space text-white mb-2">
              Ready to Upgrade from Robotic Keypad Menus?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3B3]">
              Speak with our telephony engineering team to design your custom conversational voice assistant.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="px-6 py-4 bg-[#0047FF] hover:bg-[#1E5CFF] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-all text-center"
            >
              <span>Book Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919447178166"
              className="px-6 py-4 bg-[#161622] hover:bg-[#1C1C28] border border-[#1C1C24] text-white font-mono text-xs uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-[#0047FF]" />
              <span>Call Agency: +91 94471 78166</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
