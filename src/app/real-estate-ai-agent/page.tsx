"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  MessageCircle,
  ShieldCheck,
  Calendar
} from "lucide-react";

export default function RealEstateAiAgentPage() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen pt-36 pb-32">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />

      {/* ── HERO SECTION ──────────────────────────── */}
      <section className="relative pb-20 border-b border-[#1C1C24]">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-[#FF5A1F]/10 text-[#FF5A1F] uppercase border border-[#FF5A1F]/20 rounded-sm">
              Real Estate Solution
            </span>
            <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              99acres · MagicBricks · Housing.com · Meta Ads
            </span>
          </motion.div>

          <h1 className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight leading-tight">
            58% of Property Inquiries Come After Hours. <span className="text-[#0047FF]">Your Competitor Answers. You Don't.</span>
          </h1>

          <p className="text-body-lg text-[#A3A3B3] max-w-2xl mb-10 leading-relaxed">
            Our 24/7 AI phone assistants call back property portal leads in under 60 seconds, converse naturally in Kannada, Tamil, Hindi, or Hinglish, verify budget & BHK preferences, and book site visits directly into your CRM.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
              Book a Free Real Estate AI Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20test%20the%20Real%20Estate%20AI%20Voice%20Agent."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS SECTION ────────────────────── */}
      <section className="py-24 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// THE BROKERAGE BOTTLENECK</span>
            <h2 className="text-h2 text-white mb-4">Why Indian Real Estate Brokers Lose Commissions</h2>
            <p className="text-body max-w-xl mx-auto">Manual lead callbacks cannot keep up with evening portal browsing spikes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-full flex items-center justify-center text-[#FF5A1F] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">After-Hours Portal Calls</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                99acres and MagicBricks buyers browse property listings at 8 PM after office hours. Office lines are closed, leaving high-intent leads unattended until next morning.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">One Missed Call = Lost Commission</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                One missed call equals one lost site visit, which equals one lost brokerage commission of ₹1 Lakh to ₹5 Lakhs. The broker who answers first locks in the showing.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Agent Follow-up Fatigue</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Agents making 80+ manual outbound calls per day cannot handle simultaneous inbound calls while on property site visits, creating huge response delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO SCENARIO & CONVERSATION COPY ─────── */}
      <section className="py-24 bg-[#0A0A0F] border-b border-[#1C1C24]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">// CONVERSATION DEMO COPY</span>
            <h2 className="text-h2 text-white mb-6">How Rahul Handles Portal Buyers</h2>
            <p className="text-body mb-6 leading-relaxed">
              Our AI real estate assistant Rahul greets callers in Bangalore, Chennai, Mumbai, or Delhi, speaking in Kannada, Tamil, Hindi, or English based on location and caller preference.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Instant 45s Callback:</strong> Triggers phone call as soon as lead submits 99acres or Facebook ad form.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Verifies Budget & Config:</strong> Asks if caller is looking for 2 BHK or 3 BHK, price range, and loan status.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Books Site Visit:</strong> Schedules weekend site visit directly on broker's Google Calendar or LeadSquared.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>WhatsApp Confirmation:</strong> Sends location pin drop and project e-brochure via WhatsApp instantly.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 rounded-[8px]">
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-4">SAMPLE AUDIO DIALOGUE</span>
            <div className="bg-[#0A0A0F] border border-[#1C1C24] p-5 rounded-[6px] space-y-3 font-sans text-xs">
              <div className="text-[#0047FF] font-mono font-bold">AI Agent (Rahul):</div>
              <p className="text-white italic">"Namaskara! BoldFlow Properties inda Rahul mathadthidini. Namma Indiranagar 3BHK project nodoke site visit book madla?"</p>
              <div className="text-[#A3A3B3] font-mono font-bold pt-2 border-t border-[#1C1C24]">Buyer:</div>
              <p className="text-[#A3A3B3] italic">"Haan, Sunday morning 11 AM subah mil sakta hai kya site visit?"</p>
              <div className="text-[#0047FF] font-mono font-bold pt-2 border-t border-[#1C1C24]">AI Agent (Rahul):</div>
              <p className="text-white italic">"Bilkul! Sunday 11 AM slot confirm kar diya hai. Location pin map aur brochure WhatsApp pe bhej diya hai."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI STAT BANNER ────────────────────────── */}
      <section className="py-20 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// HARD ROI BENCHMARK</span>
          <h2 className="text-3xl font-bold font-space text-white mb-6">
            "Average real estate lead in India costs ₹800–₹1,500 from portals like 99acres and MagicBricks. Missing the call means burning that spend."
          </h2>
          <p className="text-body max-w-lg mx-auto mb-8">
            BoldFlow AI recovers your portal ad spend by answering 100% of calls within 60 seconds 24/7/365.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
            Deploy Real Estate AI Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
