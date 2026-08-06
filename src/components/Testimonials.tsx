"use client";

import { ShieldCheck, TrendingUp, Building2, GraduationCap, Stethoscope } from "lucide-react";

interface ExpectedResultCard {
  id: string;
  vertical: string;
  industry: string;
  location: string;
  metric: string;
  metricLabel: string;
  quote: string;
  icon: any;
}

const expectedResults: ExpectedResultCard[] = [
  {
    id: "coaching-expected",
    vertical: "Education & Coaching",
    industry: "Coaching Institutes & Academies",
    location: "Kota / Delhi NCR / Hyderabad",
    metric: "40+ Calls/Day",
    metricLabel: "Recovered Admission Enquiries",
    quote:
      "A coaching institute in Kota typically receives 80+ inquiry calls/day during peak admission season. Our AI phone assistant captures the 40+ calls their front-desk staff misses after hours.",
    icon: GraduationCap,
  },
  {
    id: "realestate-expected",
    vertical: "Real Estate Brokerage",
    industry: "Property Brokers & Developers",
    location: "Bangalore / Mumbai / Gurgaon",
    metric: "₹1,500/Lead",
    metricLabel: "Portal Ad Spend Saved",
    quote:
      "Average real estate lead in India costs ₹800–₹1,500 from portals like 99acres and MagicBricks. Missing the call after 7 PM means burning that spend. Our AI locks in site visits instantly.",
    icon: Building2,
  },
  {
    id: "clinic-expected",
    vertical: "Healthcare & Clinics",
    industry: "Dental & Multi-Specialty Clinics",
    location: "Chennai / Bangalore / Delhi",
    metric: "₹45,000/Mo",
    metricLabel: "Recovered Consultation Revenue",
    quote:
      "One empty slot per day = ₹1,500–₹5,000 lost revenue for a urban clinic. Our AI phone receptionist fills them 24/7 for just ₹267/day, confirming appointments via WhatsApp.",
    icon: Stethoscope,
  },
];

function ResultCard({ res }: { res: ExpectedResultCard }) {
  const IconComponent = res.icon;
  return (
    <div
      tabIndex={0}
      role="article"
      aria-label={`Expected result for ${res.industry}`}
      className="w-[320px] sm:w-[380px] md:w-[420px] max-w-[85vw] shrink-0 bg-[#111116] border border-[#1C1C24] p-6 rounded-[8px] flex flex-col justify-between hover:border-[#0047FF]/50 hover:shadow-[0_0_40px_rgba(0,71,255,0.06)] hover:scale-[1.01] focus:scale-[1.01] focus:border-[#0047FF] focus:outline-none transition-all duration-300 relative group cursor-pointer"
    >
      <div>
        {/* Top Badge & Icon */}
        <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#1C1C24]">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0047FF]/10 text-[#0047FF] border border-[#0047FF]/20 font-bold uppercase tracking-wider">
            {res.vertical}
          </span>
          <div className="p-2 bg-[#0A0A0F] border border-[#1C1C24] rounded-full text-[#FF5A1F]">
            <IconComponent className="w-4 h-4" />
          </div>
        </div>

        {/* Metric Callout */}
        <div className="p-4 bg-[#0A0A0F] border border-[#1C1C24] rounded-[4px] mb-5 flex items-center justify-between">
          <div>
            <span className="text-xl md:text-2xl font-bold font-space text-white block">
              {res.metric}
            </span>
            <span className="text-[10px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              {res.metricLabel}
            </span>
          </div>
          <TrendingUp className="w-5 h-5 text-[#0047FF]" />
        </div>

        {/* Detailed Quote */}
        <p className="text-[#A3A3B3] text-sm leading-relaxed mb-6">
          "{res.quote}"
        </p>
      </div>

      {/* Target Industry Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1C1C24] mt-auto">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold font-space text-[#F5F6FA]">
              {res.industry}
            </h4>
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          </div>
          <span className="text-[10px] font-mono text-[#626272] block">
            Target Metros: {res.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0F] border-b border-[#1C1C24] relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16 text-center">
        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">
          {"//"} PILOT ROI BENCHMARKS
        </span>
        <h2 className="text-h2 text-[#F5F6FA] mb-4">
          What Our Pilot Businesses Expect to Recover
        </h2>
        <p className="text-body max-w-xl mx-auto">
          Built explicitly for high-ticket Indian SMBs—coaching centers, real estate agencies, and clinics—to capture missed after-hours phone calls and recover lost revenue.
        </p>
      </div>

      {/* Free-Flow Marquee Container - Single Row */}
      <div
        aria-label="Expected operational results for pilot clients"
        className="relative w-full overflow-hidden marquee-mask-fade"
      >
        <div className="group/track relative overflow-hidden py-2">
          <div className="animate-free-flow-left group-hover/track:[animation-play-state:paused] group-focus-within/track:[animation-play-state:paused] gap-6 md:gap-8 items-stretch">
            {expectedResults.map((res) => (
              <ResultCard key={res.id} res={res} />
            ))}
            {expectedResults.map((res) => (
              <ResultCard key={`${res.id}-dup`} res={res} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
