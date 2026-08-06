"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Phone, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  MessageCircle,
  ShieldCheck,
  Calendar
} from "lucide-react";

export default function CoachingInstituteAiAgentPage() {
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
            <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest bg-[#0047FF]/10 text-[#0047FF] uppercase border border-[#0047FF]/20 rounded-sm">
              Education & Coaching Solution
            </span>
            <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              JEE · NEET · UPSC · Foundation · Kota & Delhi Belts
            </span>
          </motion.div>

          <h1 className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight leading-tight">
            60 Admission Calls Go Unanswered Every Day. <span className="text-[#FF5A1F]">That's ₹12 Lakh in Lost Enrollments.</span>
          </h1>

          <p className="text-body-lg text-[#A3A3B3] max-w-2xl mb-10 leading-relaxed">
            During May–July admission season, coaching centers receive 80–100 calls per day. Our 24/7 AI phone counselors answer parent calls in 10 seconds in Hindi, Tamil, Telugu, or English, capture student details, and book counseling sessions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
              Book Coaching AI Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20test%20the%20Coaching%20Institute%20Admission%20AI%20Voice%20Agent."
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
            <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">// THE ADMISSION BOTTLENECK</span>
            <h2 className="text-h2 text-white mb-4">Why Coaching Centers Leak Student Enrollments</h2>
            <p className="text-body max-w-xl mx-auto">Admission season volume overpowers front-desk staff.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-full flex items-center justify-center text-[#FF5A1F] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Front-Desk Call Overload</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                During May–July admission season, institutes get 80–100 inquiry calls/day. Staff can only answer 35–40 calls, leaving over half of parent inquiries unhandled.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">8 PM Evening Parent Calls</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Working parents call at 8 PM after office hours to inquire about JEE/NEET batch timings, hostel facilities, and fees. Phone lines go unanswered.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Costly Temp Telecallers</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Hiring temp seasonal telecallers costs ₹60,000–₹1,00,000/month, requires constant training, and still misses after-hours parent calls.
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
            <h2 className="text-h2 text-white mb-6">How Priya Captures Parent Inquiries</h2>
            <p className="text-body mb-6 leading-relaxed">
              Our AI admission counselor Priya answers parent calls across Kota, Delhi, Hyderabad, and South Indian hubs, conversing naturally in Hindi, Tamil, Telugu, or English.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Captures Parent & Student Details:</strong> Asks student class (10th/11th/12th), target exam (JEE/NEET), and current marks.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Answers Batch & Fee FAQs:</strong> Explains batch start dates, scholarship test details, and hostel options.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Books Counseling Session:</strong> Checks Google Calendar and books a 1-on-1 counseling slot with senior faculty.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>WhatsApp Fee PDF:</strong> Sends instant prospectus PDF and appointment confirmation to parent on WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 rounded-[8px]">
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-4">SAMPLE AUDIO DIALOGUE</span>
            <div className="bg-[#0A0A0F] border border-[#1C1C24] p-5 rounded-[6px] space-y-3 font-sans text-xs">
              <div className="text-[#0047FF] font-mono font-bold">AI Agent (Priya):</div>
              <p className="text-white italic">"Namaste! Career Academy me aapka swagat hai. Main Priya bol rahi hoon. Kya aap JEE ya NEET batch ke baare me inquiry kar rahe hain?"</p>
              <div className="text-[#A3A3B3] font-mono font-bold pt-2 border-t border-[#1C1C24]">Parent:</div>
              <p className="text-[#A3A3B3] italic">"Haan ji, mera beta Class 11th me hai. NEET dropper batch ki fee aur timings kya hain?"</p>
              <div className="text-[#0047FF] font-mono font-bold pt-2 border-t border-[#1C1C24]">AI Agent (Priya):</div>
              <p className="text-white italic">"NEET 11th batch May 15th se shuru ho raha hai. Main aapke WhatsApp pe detailed fee structure bhej rahi hoon. Kya kal shaam 5 baje counseling slot book kar doon?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI STAT BANNER ────────────────────────── */}
      <section className="py-20 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// HARD ROI BENCHMARK</span>
          <h2 className="text-3xl font-bold font-space text-white mb-6">
            "One JEE enrollment = ₹50,000–₹2,00,000. Our AI costs less than one student's fee for the entire year."
          </h2>
          <p className="text-body max-w-lg mx-auto mb-8">
            Capturing just one extra student enrollment per month pays for your entire BoldFlow AI Growth Plan.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
            Deploy Coaching Admission AI Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
