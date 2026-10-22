import type { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "About BoldFlow Labs | Digital Systems & Automation Agency",
  },
  description:
    "BoldFlow Labs is an independent systems engineering and digital growth agency building production-grade WhatsApp automation, CRM pipelines, and fast Next.js websites based in Kerala, India.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/about",
  },
  openGraph: {
    title: "About BoldFlow Labs | Digital Systems & Automation Agency",
    description:
      "BoldFlow Labs is an independent systems engineering and digital growth agency building production-grade WhatsApp automation, CRM pipelines, and fast Next.js websites based in Kerala, India.",
    url: "https://www.boldflowlabs.com/about",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.boldflowlabs.com/about/#webpage",
        url: "https://www.boldflowlabs.com/about",
        name: "About BoldFlow Labs | Systems Architecture & Digital Growth Agency",
        description:
          "Independent business systems architecture and digital growth agency in Kochi, Kerala, India specializing in WhatsApp automations, CRM pipelines, and high-performance websites.",
        mainEntity: {
          "@type": "Organization",
          "@id": "https://www.boldflowlabs.com/#organization",
          name: "BoldFlow Labs",
          url: "https://www.boldflowlabs.com",
          logo: "https://www.boldflowlabs.com/logo.png",
          sameAs: [
            "https://www.linkedin.com/company/boldflowlabs",
            "https://x.com/boldflowlabs",
            "https://www.facebook.com/boldflowlabs",
            "https://www.instagram.com/boldflowlabs"
          ],
          knowsAbout: [
            "WhatsApp Business API",
            "Next.js & TypeScript",
            "CRM Architecture & Webhooks",
            "Technical SEO & Core Web Vitals",
            "Server-Side Conversion APIs"
          ],
        },
      },
    ],
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              About BoldFlow Labs
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight leading-tight">
              Building Pragmatic Digital Systems for Growing Businesses
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              BoldFlow Labs is an independent digital growth and business automation agency based in Kerala, India. We help businesses transition from chaotic manual tasks to reliable automated systems, fast websites, and disciplined marketing funnels.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY & WHY WE EXIST ─────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
                WHY WE EXIST
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
                Eliminating the Manual Friction That Slows Companies Down
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Most growing businesses do not suffer from a lack of ambition—they suffer from operational fragmentation. Customer enquiries sit unanswered in email inboxes for hours, sales reps spend hours copying contacts into spreadsheets, and paid ad traffic lands on sluggish, outdated websites that fail to convert.
              </p>
              <p>
                Traditional agencies often respond by selling expensive, generic retainers filled with vanity metrics and junior account management layers. Meanwhile, the actual technical bottlenecks—slow speed-to-lead, zero CRM hygiene, and missing attribution—remain completely unresolved.
              </p>
              <p>
                BoldFlow Labs was founded to solve this gap. We focus on what actually moves the needle: connecting your tools, building friction-free WhatsApp automations, optimizing technical SEO, and building high-performance modern websites that turn visitors into qualified enquiries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── TECHNICAL GOVERNANCE & ARCHITECTURAL PRINCIPLES ─ */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563FF]" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
                      Engineering Standards
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Production Verified
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Architecture Base</div>
                    <div className="text-sm font-bold text-slate-900">Kochi, Kerala Tech Hub · Global Delivery</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">API Standards</div>
                    <div className="text-sm font-bold text-slate-900">Official Meta WhatsApp Cloud API (Graph v21.0+)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Frameworks</div>
                    <div className="text-sm font-bold text-slate-900">Next.js App Router, TypeScript &amp; Jamstack</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Code &amp; Asset Ownership</div>
                    <div className="text-sm font-bold text-[#2563FF]">100% Client Owned · Zero Vendor Lock-In</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                Technical Governance &amp; Principles
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
                Systems Architecture Engineered for Production Reliability
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                BoldFlow Labs operates on a foundational engineering principle: digital growth systems must be engineered with the same rigor, version control, and observability as core production software.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than delegating client projects to junior account managers or sales representatives, your team collaborates directly with senior systems architects who understand webhook latencies, API rate limits, database schemas, and conversion tracking firsthand.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 pb-2">
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  Senior Systems Engineering
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  Official WhatsApp Cloud API
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  Next.js &amp; Jamstack
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  Server-Side Meta CAPI &amp; GA4
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="btn-primary px-4 py-2 text-xs font-semibold flex items-center gap-2"
                >
                  <span>Explore Systems &amp; Services</span>
                  <span>→</span>
                </Link>
                <span className="text-xs font-mono text-emerald-700 flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Verified Engineering Hub · Kochi, Kerala
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE SPECIALIST-PARTNER DELIVERY MODEL ────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              DELIVERY MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
              How We Deliver: The Specialist-Partner Model
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              We are completely transparent about our agency structure. We do not claim to employ a hundred in-house staff members because we believe massive agency overheads only penalize clients with inflated retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-[#2563FF] font-bold text-xs mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Strategic &amp; Architectural Oversight
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our lead systems architects handle project discovery, map your data schemas, write technical specifications, and manage quality assurance across every milestone.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 border border-cyan-200 flex items-center justify-center text-[#0891B2] font-bold text-xs mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Vetted Specialist Delivery Partners
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For deep execution (such as specialized media buying, custom software development, or niche CRM setups), we collaborate with battle-tested specialist freelancers and technical partners.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-[#2563FF] font-bold text-xs mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Direct Value, Zero Agency Bloat
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You get senior-level systems engineering and dedicated project governance without paying for lavish agency offices or layers of middle management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ──────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              OPERATING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
              Truthful, Defensible Agency Standards
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Our core commitments to clients who trust us with their critical business infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#0891B2] font-bold uppercase mb-2">
                01 / INTEGRITY
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">No Fake Guarantees</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never make unprovable promises about guaranteed ROAS or #1 Google rankings. We focus on verifiable engineering, clean tracking, and proven best practices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#2563FF] font-bold uppercase mb-2">
                02 / OWNERSHIP
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">100% Client Ownership</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All accounts, domains, CRM properties, automation blueprints, and GitHub repositories belong exclusively to you. We never lock clients into proprietary software.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#0891B2] font-bold uppercase mb-2">
                03 / COMPLIANCE
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Official APIs Only</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy strictly over approved developer APIs (Meta WhatsApp Cloud API, Google Ads API). We never use scraped or unofficial tools that risk account bans.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#2563FF] font-bold uppercase mb-2">
                04 / SPEED
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Fast Feedback Loops</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct communication, transparent sprint updates, and rapid iteration. When you have a question, you talk to the person architecting your system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 shadow-xl shadow-blue-500/5 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Direct Partnership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1020] tracking-tight">
            Ready to Build Better Systems?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Let&apos;s schedule a 30-minute discovery conversation. We will review your current systems and share actionable recommendations for your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-sm font-semibold w-full sm:w-auto">
              Discuss Your Project
            </Link>
            <a
              href="https://cal.com/boldflow-labs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-7 py-3.5 text-sm font-medium w-full sm:w-auto text-slate-800 hover:text-[#2563FF] border border-slate-300 rounded-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#2563FF]" />
              <span>Book Strategy Session ↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
