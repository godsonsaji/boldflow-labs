"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calculator, 
  TrendingUp, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  Shield, 
  DollarSign,
  AlertTriangle
} from "lucide-react";

interface IndustryPreset {
  name: string;
  icon: typeof Building2;
  dailyCalls: number;
  missedRate: number;
  dealValue: number;
  closeRate: number;
  label: string;
}

const PRESETS: IndustryPreset[] = [
  {
    name: "Real Estate",
    icon: Building2,
    dailyCalls: 40,
    missedRate: 45, // after 7 PM portal inquiries
    dealValue: 75000, // brokerage fee
    closeRate: 8,
    label: "Brokerages & Developers"
  },
  {
    name: "D2C E-Commerce",
    icon: ShoppingBag,
    dailyCalls: 120,
    missedRate: 35, // unverified COD orders
    dealValue: 2400, // average order value
    closeRate: 30,
    label: "Shopify / COD Merchants"
  },
  {
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    dailyCalls: 60,
    missedRate: 30, // busy receptionist
    dealValue: 3500, // consultation + diagnostics
    closeRate: 25,
    label: "Clinics & Diagnostic Labs"
  },
  {
    name: "Insurance Agency",
    icon: Shield,
    dailyCalls: 50,
    missedRate: 40, // renewal calls missed
    dealValue: 18000, // annual policy renewal commission
    closeRate: 15,
    label: "Brokers & Agents"
  }
];

export default function MissedCallRoiCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Real Estate");
  const [dailyCalls, setDailyCalls] = useState<number>(40);
  const [missedRate, setMissedRate] = useState<number>(45);
  const [dealValue, setDealValue] = useState<number>(75000);
  const [closeRate, setCloseRate] = useState<number>(8);

  const applyPreset = (preset: IndustryPreset) => {
    setSelectedIndustry(preset.name);
    setDailyCalls(preset.dailyCalls);
    setMissedRate(preset.missedRate);
    setDealValue(preset.dealValue);
    setCloseRate(preset.closeRate);
  };

  // Computations
  const monthlyInbound = dailyCalls * 30;
  const monthlyMissedCalls = Math.round(monthlyInbound * (missedRate / 100));
  const estimatedDealsLost = Math.round(monthlyMissedCalls * (closeRate / 100));
  const monthlyRevenueLost = estimatedDealsLost * dealValue;
  const annualRevenueLost = monthlyRevenueLost * 12;

  // BoldFlow Recovered Metrics (conservative 80% capture of missed calls)
  const boldFlowRecoveredDeals = Math.round(estimatedDealsLost * 0.8);
  const monthlyRecoveredRevenue = boldFlowRecoveredDeals * dealValue;
  const boldFlowRetainerCost = 19999; // Growth plan
  const netMonthlyProfit = Math.max(0, monthlyRecoveredRevenue - boldFlowRetainerCost);
  const roiMultiple = boldFlowRetainerCost > 0 
    ? Math.round(monthlyRecoveredRevenue / boldFlowRetainerCost) 
    : 0;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-36 pb-24 text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Breadcrumbs & Eyebrow */}
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-[#A3A3B3]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0047FF]">Tools</span>
          <span>/</span>
          <span className="text-white">Missed Call ROI Calculator</span>
        </div>

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047FF]/10 border border-[#0047FF]/30 text-[#0047FF] font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Audit Tool</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-space tracking-tight mb-4 leading-tight">
            How Much Revenue Does Your Business Lose to <span className="text-[#0047FF]">Missed Calls</span>?
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3B3] leading-relaxed">
            In India, 58% of high-intent portal inquiries arrive after 7 PM. When calls go unanswered or staff are occupied, buyers call your competitor. Use this calculator to quantify your true cost of silence.
          </p>
        </div>

        {/* Industry Presets */}
        <div className="mb-10">
          <label className="block font-mono text-xs text-[#A3A3B3] uppercase tracking-wider mb-3">
            // Select Your Industry Benchmark
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PRESETS.map((preset) => {
              const Icon = preset.icon;
              const isSelected = selectedIndustry === preset.name;
              return (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className={`p-4 rounded-[6px] border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#161B2E] border-[#0047FF] shadow-[0_0_20px_rgba(0,71,255,0.2)]"
                      : "bg-[#111116] border-[#1C1C24] hover:border-[#2C2C38]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-[#0047FF]" : "text-[#A3A3B3]"}`} />
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className="font-space font-bold text-sm text-white">{preset.name}</div>
                    <div className="font-mono text-[10px] text-[#A3A3B3] truncate">{preset.label}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111116] border border-[#1C1C24] rounded-[8px] p-6 sm:p-8 space-y-8">
            <h2 className="font-space text-lg font-bold text-white border-b border-[#1C1C24] pb-4 flex items-center justify-between">
              <span>Your Telephony Parameters</span>
              <span className="font-mono text-xs text-[#0047FF] font-normal">Customizable Inputs</span>
            </h2>

            {/* Slider 1: Daily Calls */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Average Daily Inbound Calls</span>
                <span className="font-mono text-base font-bold text-[#0047FF]">{dailyCalls} calls / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={dailyCalls}
                onChange={(e) => setDailyCalls(Number(e.target.value))}
                className="w-full h-2 bg-[#1C1C24] rounded-lg appearance-none cursor-pointer accent-[#0047FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#626272] mt-1">
                <span>10 calls</span>
                <span>{monthlyInbound.toLocaleString("en-IN")} calls/month</span>
                <span>500 calls</span>
              </div>
            </div>

            {/* Slider 2: Missed Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Estimated Unanswered / After-Hours Call Rate</span>
                <span className="font-mono text-base font-bold text-[#FF5A1F]">{missedRate}% missed</span>
              </div>
              <input
                type="range"
                min="10"
                max="75"
                step="5"
                value={missedRate}
                onChange={(e) => setMissedRate(Number(e.target.value))}
                className="w-full h-2 bg-[#1C1C24] rounded-lg appearance-none cursor-pointer accent-[#FF5A1F]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#626272] mt-1">
                <span>10% (Minimal)</span>
                <span>Industry Average: 35%–50%</span>
                <span>75% (High Loss)</span>
              </div>
            </div>

            {/* Slider 3: Deal Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Average Value per Customer Deal or Order</span>
                <span className="font-mono text-base font-bold text-[#10B981]">{formatINR(dealValue)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="300000"
                step="1000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-[#1C1C24] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#626272] mt-1">
                <span>₹1,000</span>
                <span>Adjust to your typical margin/ticket</span>
                <span>₹3,00,000+</span>
              </div>
            </div>

            {/* Slider 4: Close Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">Close / Conversion Rate on Answered Calls</span>
                <span className="font-mono text-base font-bold text-white">{closeRate}% conversion</span>
              </div>
              <input
                type="range"
                min="3"
                max="50"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-[#1C1C24] rounded-lg appearance-none cursor-pointer accent-[#0047FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#626272] mt-1">
                <span>3% (Conservative)</span>
                <span>Typical: 10%–20%</span>
                <span>50% (High Intent)</span>
              </div>
            </div>

            <div className="p-4 bg-[#161622] rounded-[6px] border border-[#1C1C24] text-xs text-[#A3A3B3] flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
              <span>
                <strong>Reality Check:</strong> In Indian telecom networks, 82% of prospective buyers who hit voicemail or an unanswered tone will never call back a second time. They immediately search the next Google or portal listing.
              </span>
            </div>
          </div>

          {/* Results Summary Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Loss Box */}
            <div className="bg-gradient-to-b from-[#1C1115] to-[#121116] border border-[#FF5A1F]/40 rounded-[8px] p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF5A1F]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold mb-2">
                // PROJECTED REVENUE LOSS
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-space text-white mb-1">
                {formatINR(monthlyRevenueLost)}
              </div>
              <div className="text-xs font-mono text-[#A3A3B3] mb-4">
                Lost every single month ({formatINR(annualRevenueLost)} / year)
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2A181C] text-xs font-mono">
                <div>
                  <span className="text-[#A3A3B3] block">Missed Calls/Mo:</span>
                  <span className="text-white font-bold">{monthlyMissedCalls} calls</span>
                </div>
                <div>
                  <span className="text-[#A3A3B3] block">Deals Slipped:</span>
                  <span className="text-[#FF5A1F] font-bold">~{estimatedDealsLost} customers</span>
                </div>
              </div>
            </div>

            {/* The BoldFlow Recovery Box */}
            <div className="bg-gradient-to-b from-[#0E172E] to-[#111116] border border-[#0047FF]/50 rounded-[8px] p-6 sm:p-7 relative overflow-hidden shadow-[0_0_40px_rgba(0,71,255,0.15)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0047FF]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#10B981] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WITH BOLDFLOW 24/7 AI AGENT</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-bold">
                  {roiMultiple}x ROI
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-space text-[#10B981] mb-1">
                +{formatINR(monthlyRecoveredRevenue)}
              </div>
              <div className="text-xs font-mono text-[#A3A3B3] mb-5">
                Estimated monthly revenue recovered (at 80% capture)
              </div>

              <div className="space-y-2 text-xs font-mono border-t border-[#1C253E] pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#A3A3B3]">Retainer Cost (Growth):</span>
                  <span className="text-white">₹19,999 / mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A3A3B3]">Net Monthly Profit Added:</span>
                  <span className="text-[#10B981] font-bold">+{formatINR(netMonthlyProfit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A3A3B3]">Speed-to-Answer:</span>
                  <span className="text-white">&lt;10 seconds (24/7/365)</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-[#0047FF] hover:bg-[#1E5CFF] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#0047FF]/40 text-center"
                >
                  <span>Stop Missing Leads · Deploy in 5 Days</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919447178166"
                  className="w-full py-3 bg-[#161622] hover:bg-[#1C1C28] border border-[#1C1C24] text-white font-mono text-xs uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0047FF]" />
                  <span>Call Agency Desk: +91 94471 78166</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Educational Content & E-E-A-T Architecture */}
        <div className="border-t border-[#1C1C24] pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-10 h-10 rounded-[6px] bg-[#0047FF]/10 border border-[#0047FF]/30 flex items-center justify-center text-[#0047FF] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-base text-white mb-2">Zero Hardware & Carrier Agnostic</h3>
            <p className="text-xs text-[#A3A3B3] leading-relaxed">
              You keep your existing Airtel, Jio, or Vi business numbers. We implement conditional call forwarding on busy or unanswered calls directly to our TRAI-compliant virtual DID.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-[6px] bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-base text-white mb-2">Sub-180ms Conversational Latency</h3>
            <p className="text-xs text-[#A3A3B3] leading-relaxed">
              Unlike clunky IVR menus that force buyers to press telephone keys, our voice assistant listens with full-duplex streaming audio, handles vernacular dialects, and supports acoustic barge-in.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-[6px] bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F] mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-base text-white mb-2">Automatic CRM Sync Under 30s</h3>
            <p className="text-xs text-[#A3A3B3] leading-relaxed">
              Every caller inquiry, qualification detail, and appointment time is logged directly into LeadSquared, Zoho, Practo, or Shopify with full audio recordings and WhatsApp confirmation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
