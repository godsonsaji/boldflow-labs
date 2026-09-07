"use client";

import { ShieldCheck, TrendingUp, Building2, ShoppingBag } from "lucide-react";

interface ExpectedResultCard {
  id: string;
  vertical: string;
  industry: string;
  location: string;
  metric: string;
  metricLabel: string;
  quote: string;
  icon: React.ComponentType<{ className?: string }>;
}

const expectedResults: ExpectedResultCard[] = [
  {
    id: "d2c-expected",
    vertical: "D2C & E-Commerce",
    industry: "D2C Brands & E-Commerce",
    location: "Delhi NCR / Mumbai / Gurgaon",
    metric: "Instant Call",
    metricLabel: "COD Order Confirmation",
    quote:
      "COD orders without a confirmation call see meaningfully higher return-to-origin rates. Our AI confirms every order within minutes of checkout.",
    icon: ShoppingBag,
  },
  {
    id: "realestate-expected",
    vertical: "Real Estate Brokerage",
    industry: "Property Brokers & Developers",
    location: "Bangalore / Mumbai / Gurgaon",
    metric: "7x Conversion",
    metricLabel: "Speed-to-Lead Response",
    quote:
      "Real estate leads called back within 60s are 7x more likely to book site visits than those called back after 1 hour. The broker who answers first locks in the showing.",
    icon: Building2,
  },
  {
    id: "insurance-expected",
    vertical: "Insurance & Advisory",
    industry: "Insurance Agencies & Brokers",
    location: "Chennai / Bangalore / Hyderabad",
    metric: "100% Reach",
    metricLabel: "Lapsing Policy Coverage",
    quote:
      "Agencies with large expiring-policy books can't call every lapsing customer in time. Our AI reaches every policyholder before renewal date, every time.",
    icon: ShieldCheck,
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
          &ldquo;{res.quote}&rdquo;
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
          Built explicitly for high-growth Indian verticals—real estate agencies, D2C brands, and insurance brokers—to verify orders, capture leads, and prevent policy lapses.
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
