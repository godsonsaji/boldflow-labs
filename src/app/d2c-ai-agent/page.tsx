"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  Phone, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  MessageCircle,
  ShieldCheck,
  PackageCheck,
  AlertTriangle
} from "lucide-react";

export default function D2cAiAgentPage() {
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
              D2C & E-Commerce Solution
            </span>
            <span className="text-[11px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              Shopify · WooCommerce · Shiprocket · CommerceIQ
            </span>
          </motion.div>

          <h1 className="text-h1 text-[#F5F6FA] mb-6 max-w-4xl tracking-tight leading-tight">
            Every Unconfirmed COD Order Is a <span className="text-[#0047FF]">Return Waiting to Happen.</span>
          </h1>

          <p className="text-body-lg text-[#A3A3B3] max-w-2xl mb-10 leading-relaxed">
            AI voice agents that call every Cash-on-Delivery order within minutes of checkout — confirming address, payment mode, and intent — in your customer's language.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-[4px]">
              Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20test%20the%20D2C%20COD%20Confirmation%20AI%20Voice%20Agent."
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
            <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// THE RTO BOTTLENECK</span>
            <h2 className="text-h2 text-white mb-4">Why Indian D2C Brands Lose Margin to COD Returns</h2>
            <p className="text-body max-w-xl mx-auto">Unconfirmed Cash-on-Delivery orders severely drain e-commerce profitability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 rounded-full flex items-center justify-center text-[#FF5A1F] mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">RTO Margin Drain</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                COD orders shipped without a confirmation call see meaningfully higher return-to-origin rates. Every return means reverse shipping, repackaging, and lost margin twice over.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Flash Sales & Order Spikes</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Flash sales and peak promotional days spike order volume 5–10x. Ops teams physically cannot manually call every customer before dispatch cutoff.
              </p>
            </div>

            <div className="p-8 bg-[#0A0A0F] border border-[#1C1C24] rounded-[6px]">
              <div className="w-10 h-10 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] mb-6">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-space text-white mb-3">Impulsive & Fake Orders</h3>
              <p className="text-sm text-[#A3A3B3] leading-relaxed">
                Fake addresses, incorrect phone numbers, or impulsive COD orders slip through dispatch unless someone verifies intent immediately after checkout.
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
            <h2 className="text-h2 text-white mb-6">How Ananya Verifies COD Orders</h2>
            <p className="text-body mb-6 leading-relaxed">
              Our AI D2C voice agent Ananya calls buyers in Delhi NCR, Mumbai, Bangalore, or Tier-2 cities right after checkout, speaking naturally in Hindi, Hinglish, or English.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Instant Post-Checkout Call:</strong> Calls customer within 2–5 minutes of checkout before order processing begins.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Address & Intent Check:</strong> Verifies complete delivery address, pincode, item sizing, and intent to pay cash at delivery.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Flags High-Risk Orders:</strong> Automatically flags unreachable, invalid, or canceled orders for manual team review.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-1" />
                <p className="text-sm text-[#A3A3B3]"><strong>Instant WhatsApp Confirmation:</strong> Triggers verified dispatch status and tracking details over WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111116] border border-[#1C1C24] p-8 rounded-[8px]">
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase font-bold tracking-widest block mb-4">SAMPLE AUDIO DIALOGUE (ANANYA)</span>
            <div className="bg-[#0A0A0F] border border-[#1C1C24] p-5 rounded-[6px] space-y-3 font-sans text-xs">
              <div className="text-[#0047FF] font-mono font-bold">AI Agent (Ananya):</div>
              <p className="text-white italic">"Namaste! Main BoldFlow Brands se Ananya bol rahi hoon. Aapke recent Cash-on-Delivery order #4821 ke confirmation ke liye call kiya hai. Delivery address D-14 South Ext Delhi confirm kar dein?"</p>
              <div className="text-[#A3A3B3] font-mono font-bold pt-2 border-t border-[#1C1C24]">Customer:</div>
              <p className="text-[#A3A3B3] italic">"Haan ji, bilkul sahi address hai. Kal tak dispatch ho jayega na?"</p>
              <div className="text-[#0047FF] font-mono font-bold pt-2 border-t border-[#1C1C24]">AI Agent (Ananya):</div>
              <p className="text-white italic">"Bilkul! Aapka COD order confirm kar diya gaya hai. Tracking link WhatsApp par bhej diya gaya hai. Thank you!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI STAT BANNER ────────────────────────── */}
      <section className="py-20 bg-[#111116] border-b border-[#1C1C24]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3 font-bold">// HARD ROI BENCHMARK</span>
          <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">
            "Reverse logistics on a single returned COD order (pickup, RTO handling, repackaging) typically outweighs the cost of one confirmation call many times over."
          </h2>
          <p className="text-xs font-mono text-[#626272] mb-6 uppercase">
            * Note: Verify brand-specific RTO % and logistics figures prior to campaign launch.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
            Deploy D2C AI Voice Agent
          </Link>
        </div>
      </section>
    </div>
  );
}
