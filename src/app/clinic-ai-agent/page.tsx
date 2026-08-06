"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope, 
  Phone, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  MessageCircle,
  ShieldCheck,
  Calendar
} from "lucide-react";

export default function ClinicAiAgentPage() {
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
            <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-[#10B981]/10 text-[#10B981] uppercase border border-[#10B981]/20 rounded-sm">
              Healthcare & Clinic Solution
            </span>
            <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              Dental · Multi-Specialty · Diagnostic · Practo & Google Calendar Sync
            </span>
          </motion.div>

          <h1 className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight leading-tight">
            Your Receptionist Handles 60 Calls a Day. <span className="text-[#10B981]">15% of Appointment Slots Still Go Empty.</span>
          </h1>

          <p className="text-body-lg text-[#A3A3B3] max-w-2xl mb-10 leading-relaxed">
            Our 24/7 AI clinic receptionists answer patient phone calls in 10 seconds in Tamil, Kannada, Hindi, or English, book consultation slots in Practo or Google Calendar, and send instant WhatsApp reminders to eliminate no-shows.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
              Book Clinic AI Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20test%20the%20Clinic%20Appointment%20AI%20Voice%20Agent."
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
            <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">// THE CLINIC BOTTLENECK</span>
            <h2 className="text-h2 text-white mb-4">Why Urban Clinics Lose Patients & Empty Slots</h2>
            <p className="text-body max-w-xl mx-auto">Front-desk overload leads to dropped calls and empty doctor chairs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-full flex items-center justify-center text-[#FF5A1F] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">53 Calls / Provider / Day</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Front-desk receptionists average 53 patient calls daily while managing walk-ins. Putting patients on hold causes dropped calls and frustrated callers.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Sunday & Evening Voicemails</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Indian patients calling on Sundays or after clinic hours do not leave voicemails—they simply call the next clinic listed on Google or Practo.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">High Patient No-Show Rates</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Without automated voice reminders and WhatsApp location pins, up to 20% of patients forget appointments, leaving doctor schedule gaps.
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
            <h2 className="text-h2 text-white mb-6">How Dr. Krishnan's Assistant Books Patients</h2>
            <p className="text-body mb-6 leading-relaxed">
              Our AI clinic assistant answers patient calls across Chennai, Bangalore, and Delhi in Tamil, Kannada, Hindi, or English.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Verifies Patient Reason & Doctor:</strong> Asks if call is for general consult, dental cleaning, root canal, or follow-up.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Checks Doctor Schedule:</strong> Checks open doctor slots in Practo or Google Calendar in real-time.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Confirms Appointment Slot:</strong> Books slot instantly and locks doctor calendar.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>WhatsApp Pin & Reminders:</strong> Sends clinic location pin, pre-consult instructions, and reminder via WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 rounded-[8px]">
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-4">SAMPLE AUDIO DIALOGUE</span>
            <div className="bg-[#0A0A0F] border border-[#1C1C24] p-5 rounded-[6px] space-y-3 font-sans text-xs">
              <div className="text-[#0047FF] font-mono font-bold">AI Agent (Dr. Krishnan's Assistant):</div>
              <p className="text-white italic">"Vanakkam! Dr. Krishnan Dental Clinic receptionist. Doctor appointment Sunday 11 AM-ku slot available-ah irukku. Book panlama?"</p>
              <div className="text-[#A3A3B3] font-mono font-bold pt-2 border-t border-[#1C1C24]">Patient:</div>
              <p className="text-[#A3A3B3] italic">"Ama, teeth scaling clean-up ku Sunday 11 AM confirm pannunga."</p>
              <div className="text-[#0047FF] font-mono font-bold pt-2 border-t border-[#1C1C24]">AI Agent:</div>
              <p className="text-white italic">"Sunday 11 AM slot confirm aayiduchu! Clinic location pin map and details ungala WhatsApp-la anuppirukken."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI STAT BANNER ────────────────────────── */}
      <section className="py-20 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// HARD ROI BENCHMARK</span>
          <h2 className="text-3xl font-bold font-space text-white mb-6">
            "One empty slot per day = ₹1,500–₹5,000 lost revenue. Our AI fills them for ₹267/day."
          </h2>
          <p className="text-body max-w-lg mx-auto mb-8">
            Filling just two empty consultation slots per week completely covers your monthly BoldFlow Starter Plan.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
            Deploy Clinic Appointment AI Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
