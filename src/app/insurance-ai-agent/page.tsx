"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  MessageCircle,
  FileCheck,
  UserCheck
} from "lucide-react";

export default function InsuranceAiAgentPage() {
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
              Insurance Solution
            </span>
            <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              Health · Motor · Life · General Insurance Agencies
            </span>
          </motion.div>

          <h1 className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight leading-tight">
            Your Policy Book Is Expiring <span className="text-[#0047FF]">Faster Than You Can Call It.</span>
          </h1>

          <p className="text-body-lg text-[#A3A3B3] max-w-2xl mb-10 leading-relaxed">
            AI voice agents that call every policyholder ahead of renewal — in their language — so lapsed policies don't slip through.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
              Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20test%20the%20Insurance%20Renewal%20Reminder%20AI%20Voice%20Agent."
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
            <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// THE AGENCY RENEWAL BOTTLENECK</span>
            <h2 className="text-h2 text-white mb-4">Why Indian Insurance Agencies Lose Lapsed Clients</h2>
            <p className="text-body max-w-xl mx-auto">Manual renewal outreach cannot scale across thousands of expiring policies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-full flex items-center justify-center text-[#FF5A1F] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Expiring Policy Backlog</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Agencies managing large books of expiring policies cannot personally call every customer before lapse, especially during renewal-heavy months.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Cold Aggregator Leads</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Leads from insurance aggregator platforms go cold within hours without a fast follow-up call, leaving high-intent policy buyers to competitors.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Admin Hours Wasted</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Manual renewal reminder calls eat up administrative hours that licensed agents would rather spend advising clients and closing new business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE BANNER ───────────────────────── */}
      <section className="py-12 bg-[#0A0A0F] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="p-6 bg-[#0047FF]/10 border border-[#0047FF]/30 rounded-[6px] flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#0047FF] shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold font-space text-white mb-1">IRDAI & TRAI Compliance-First Messaging</h4>
              <p className="text-xs text-[#A3A3B3] leading-relaxed">
                All voice flows are strictly framed as service renewal reminders and customer care support under TRAI and IRDAI guidelines, ensuring DND compliance and respectful customer communication.
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
            <h2 className="text-h2 text-white mb-6">How Suresh Handles Renewal Reminders</h2>
            <p className="text-body mb-6 leading-relaxed">
              Our AI insurance voice agent Suresh calls policyholders in Chennai, Bangalore, Hyderabad, or Mumbai ahead of renewal dates, conversing naturally in Tamil, Hindi, or English.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Timely Renewal Call:</strong> Calls policyholders 30 days and 7 days prior to policy lapse date.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Service-Oriented Check:</strong> Reminds customer of key policy benefits, checks if they have questions or need changes.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Books Agent Callback:</strong> If policyholder has questions or wants to renew, books a callback directly with a licensed advisor.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Instant WhatsApp Renewal Link:</strong> Sends policy renewal document and payment link via WhatsApp immediately.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 rounded-[8px]">
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-4">SAMPLE AUDIO DIALOGUE (SURESH)</span>
            <div className="bg-[#0A0A0F] border border-[#1C1C24] p-5 rounded-[6px] space-y-3 font-sans text-xs">
              <div className="text-[#0047FF] font-mono font-bold">AI Agent (Suresh):</div>
              <p className="text-white italic">"Vanakkam! Main BoldFlow Insurance se Suresh pesuren. Ungaloda Health Insurance policy renewal next week due irukku. Renewal details verify panna senior agent callback book pannalaama?"</p>
              <div className="text-[#A3A3B3] font-mono font-bold pt-2 border-t border-[#1C1C24]">Policyholder:</div>
              <p className="text-[#A3A3B3] italic">"Hello, aama renewal pannamum. Pre-existing disease coverage doubt irukku, agent kitta pesa mudiyuma?"</p>
              <div className="text-[#0047FF] font-mono font-bold pt-2 border-t border-[#1C1C24]">AI Agent (Suresh):</div>
              <p className="text-white italic">"Kandippa! Senior advisor callback tomorrow 11 AM-ku book panniten. Renewal notice & link WhatsApp-la anuppirukken. Thank you!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI STAT BANNER ────────────────────────── */}
      <section className="py-20 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// HARD ROI BENCHMARK</span>
          <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">
            "A single lapsed policy means losing that customer's recurring commission entirely — a renewal reminder call costs a fraction of that."
          </h2>
          <p className="text-xs font-mono text-[#626272] mb-6 uppercase">
            * Note: Verify agency commission rates and retention metrics prior to campaign launch.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
            Deploy Insurance AI Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
