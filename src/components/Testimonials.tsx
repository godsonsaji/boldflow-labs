"use client";

import Image from "next/image";
import { Star, ShieldCheck, TrendingUp } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  industry: string;
  location: string;
  avatar: string;
  rating: number;
  metric: string;
  metricLabel: string;
  quote: string;
  vertical: string;
}

const reviews: Review[] = [
  {
    id: "vance-hvac",
    name: "Marcus Vance",
    role: "Founder & CEO",
    industry: "HVAC & Mechanical Services",
    location: "Austin, TX",
    avatar: "/testimonials/hvac_client.png",
    rating: 5,
    metric: "+$28,400",
    metricLabel: "Recaptured in Month 1",
    quote:
      "Before BoldFlow Labs, our technicians were missing 3 to 4 calls every weekend while on job sites. The AI receptionist answers within 40 seconds, triages HVAC emergencies, and schedules jobs straight into ServiceTitan. It paid for itself in week one.",
    vertical: "HVAC & Mechanical",
  },
  {
    id: "apex-roofing",
    name: "Sarah Jenkins",
    role: "Managing Partner",
    industry: "Roofing & Exterior Contracting",
    location: "Denver, CO",
    avatar: "/testimonials/roofing_client.png",
    rating: 5,
    metric: "94%",
    metricLabel: "Under-60s Callback Rate",
    quote:
      "When a hail storm hits, lead volume spikes 10x. BoldFlow's outbound agent calls every web form submission in under 60 seconds. We closed 19 roof inspection jobs last month off missed calls alone.",
    vertical: "Roofing & Exterior",
  },
  {
    id: "sterling-realestate",
    name: "David Sterling",
    role: "Principal Broker",
    industry: "Real Estate & Brokerage",
    location: "Miami, FL",
    avatar: "/testimonials/realestate_client.png",
    rating: 5,
    metric: "3.8x ROI",
    metricLabel: "Lead Reactivation Yield",
    quote:
      "Their agent qualified 450+ old Zillow and web leads in our CRM without our team lifting a finger. Booked 14 high-intent buyer calls in the first 2 weeks. The workflow integration with Follow Up Boss is flawless.",
    vertical: "Real Estate Brokerage",
  },
  {
    id: "solar-reynolds",
    name: "Jason Reynolds",
    role: "VP of Operations",
    industry: "Solar & Clean Energy Systems",
    location: "Phoenix, AZ",
    avatar: "/testimonials/solar_client.png",
    rating: 5,
    metric: "+22 Jobs/Mo",
    metricLabel: "Consultations Booked",
    quote:
      "Our sales reps were spending 3 hours a day chasing cold web form submissions. BoldFlow's 60-second callback system qualifies prospects and books consultations straight onto rep calendars automatically.",
    vertical: "Solar & Clean Energy",
  },
  {
    id: "mendez-plumbing",
    name: "Carlos Mendez",
    role: "Master Contractor",
    industry: "Commercial Plumbing Services",
    location: "Houston, TX",
    avatar: "/testimonials/plumbing_client.png",
    rating: 5,
    metric: "100%",
    metricLabel: "After-Hours Call Capture",
    quote:
      "Commercial plumbing leaks happen at 2 AM. BoldFlow's voice receptionist answers on the second ring, qualifies the emergency level, and dispatches our on-call tech without failing once.",
    vertical: "Plumbing & Mechanical",
  },
  {
    id: "rostova-property",
    name: "Elena Rostova",
    role: "Managing Director",
    industry: "Property & Asset Management",
    location: "Chicago, IL",
    avatar: "/testimonials/property_client.png",
    rating: 5,
    metric: "120ms",
    metricLabel: "Live Voice Latency",
    quote:
      "Tenants don't even realize they're speaking to an AI agent. It logs maintenance requests directly into our portal and handles dispatch 24/7. Response time dropped from hours to under two minutes.",
    vertical: "Property Management",
  },
];

function ReviewCard({ rev }: { rev: Review }) {
  return (
    <div
      tabIndex={0}
      role="article"
      aria-label={`Review by ${rev.name}`}
      className="w-[340px] sm:w-[400px] md:w-[440px] shrink-0 bg-[#111116] border border-[#1C1C24] p-7 rounded-[8px] flex flex-col justify-between hover:border-[#0047FF]/50 hover:shadow-[0_0_40px_rgba(0,71,255,0.06)] hover:scale-[1.01] focus:scale-[1.01] focus:border-[#0047FF] focus:outline-none transition-all duration-300 relative group cursor-pointer"
    >
      <div>
        {/* Top Badge & Rating */}
        <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#1C1C24]">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0047FF]/10 text-[#0047FF] border border-[#0047FF]/20 font-bold uppercase tracking-wider">
            {rev.vertical}
          </span>
          <div className="flex items-center gap-1 text-[#FF5A1F]">
            {Array.from({ length: rev.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FF5A1F]" />
            ))}
          </div>
        </div>

        {/* Metric Callout */}
        <div className="p-3.5 bg-[#0A0A0F] border border-[#1C1C24] rounded-[4px] mb-5 flex items-center justify-between">
          <div>
            <span className="text-xl md:text-2xl font-bold font-space text-white block">
              {rev.metric}
            </span>
            <span className="text-[10px] font-mono text-[#A3A3B3] uppercase tracking-wider">
              {rev.metricLabel}
            </span>
          </div>
          <TrendingUp className="w-5 h-5 text-[#0047FF]" />
        </div>

        {/* Quote */}
        <p className="text-[#A3A3B3] text-sm leading-relaxed mb-6 italic">
          "{rev.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3.5 pt-5 border-t border-[#1C1C24] mt-auto">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#0047FF]/30 shrink-0">
          <Image
            src={rev.avatar}
            alt={rev.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold font-space text-[#F5F6FA]">
              {rev.name}
            </h4>
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          </div>
          <p className="text-xs text-[#A3A3B3]">
            {rev.role}, <span className="text-white font-medium">{rev.industry}</span>
          </p>
          <span className="text-[10px] font-mono text-[#626272] block">
            {rev.location}
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
          {"//"} CLIENT VERIFIED REVIEWS
        </span>
        <h2 className="text-h2 text-[#F5F6FA] mb-4">
          Proven Results Across Live Operations
        </h2>
        <p className="text-body max-w-xl mx-auto">
          See how trade service founders and real estate brokers use BoldFlow AI voice agents to secure missed calls and recover lost revenue.
        </p>
      </div>

      {/* Free-Flow Marquee Container - Single Row */}
      <div
        aria-label="Client reviews and testimonials"
        className="relative w-full overflow-hidden marquee-mask-fade"
      >
        <div className="group/track relative overflow-hidden py-2">
          <div className="animate-free-flow-left group-hover/track:[animation-play-state:paused] group-focus-within/track:[animation-play-state:paused] gap-6 md:gap-8 items-stretch">
            {reviews.map((rev) => (
              <ReviewCard key={rev.id} rev={rev} />
            ))}
            {reviews.map((rev) => (
              <ReviewCard key={`${rev.id}-dup`} rev={rev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
