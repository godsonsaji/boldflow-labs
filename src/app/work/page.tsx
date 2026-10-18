"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Calendar
} from "lucide-react";

interface Blueprint {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  architecture: string;
  flow: { step: string; name: string; detail: string }[];
  deliverables: string[];
  techStack: string[];
}

const blueprints: Blueprint[] = [
  {
    id: "whatsapp-triage",
    title: "Official WhatsApp Lead Qualification & Routing Engine",
    category: "Automation Architecture",
    tagline: "Instant <5s enquiry engagement, conversational triage, and calendar sync",
    problem: "When leads submit website forms or ad forms, human staff frequently take 2 to 6 hours to respond. Over 65% of buyers purchase from the business that responds first.",
    architecture: "An event-driven webhook architecture deployed on the official Meta WhatsApp Cloud API. Web forms trigger an automated conversational greeting asking qualifying questions (budget, timeline, service needed). Qualified leads receive a direct Cal.com booking link and are synchronized to the CRM pipeline.",
    flow: [
      { step: "01", name: "Form Submission Event", detail: "Lead submits website form; webhook payloads captured with UTM parameters." },
      { step: "02", name: "Sanitization & Triage", detail: "Payload sanitized, honeypot checked, and verified phone number extracted." },
      { step: "03", name: "Meta WhatsApp Trigger", detail: "Automated template message dispatched in under 5 seconds with quick-reply buttons." },
      { step: "04", name: "Qualification Logic", detail: "Customer answers triage questions; intent tier and budget category tagged." },
      { step: "05", name: "CRM Pipeline Sync", detail: "Contact record created in CRM with conversation transcript and scheduled follow-up." }
    ],
    deliverables: [
      "Official Meta WhatsApp Cloud API setup and verified business profile",
      "Custom conversational triage logic and interactive quick-reply menus",
      "Bidirectional webhooks connecting website forms to WhatsApp and CRM",
      "Shared team inbox setup for live escalation when required"
    ],
    techStack: ["Official WhatsApp Cloud API", "n8n Automation", "HubSpot / Zoho CRM", "Cal.com"]
  },
  {
    id: "jamstack-web",
    title: "High-Performance Modern Web & Technical SEO Architecture",
    category: "Web & SEO Architecture",
    tagline: "Sub-100ms global TTFB, 95+ Core Web Vitals, and semantic Schema.org",
    problem: "Traditional WordPress sites bloated with 30+ plugins take 4+ seconds to load on mobile networks, hurting Google search rankings and increasing bounce rates.",
    architecture: "A modern Jamstack architecture utilizing Next.js (App Router), TypeScript, and clean CSS pre-rendered at the edge CDN. Includes valid Schema.org JSON-LD structured data, dynamic XML sitemaps, server-side form validation, and zero layout shifts.",
    flow: [
      { step: "01", name: "Edge Static Pre-Rendering", detail: "Pages compiled to static HTML and served from globally distributed CDN edges." },
      { step: "02", name: "Zero Layout Shifts (CLS < 0.05)", detail: "Modern font swapping, aspect-ratio image containers, and fluid typography." },
      { step: "03", name: "Schema.org Validation", detail: "Automated injection of Organization, Service, and LocalBusiness JSON-LD markup." },
      { step: "04", name: "Honeypot Secure Forms", detail: "Serverless contact API route filtering spam without invasive CAPTCHA friction." },
      { step: "05", name: "Analytics Instrumentation", detail: "Pre-wired Google Tag Manager, GA4, and conversion event triggers." }
    ],
    deliverables: [
      "Bespoke responsive design system optimized for mobile and desktop viewports",
      "Production Next.js codebase with complete Git repository ownership",
      "Core Web Vitals benchmarked at 95+ performance",
      "Pre-configured technical SEO foundations and Schema.org metadata"
    ],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Vercel / Cloudflare"]
  },
  {
    id: "closed-loop-ads",
    title: "Closed-Loop Google & Meta Ads to CRM Attribution Pipeline",
    category: "Acquisition Architecture",
    tagline: "Server-side tracking (CAPI) and deal-stage conversion optimization",
    problem: "iOS privacy changes and browser ad-blockers cause ad platforms to lose up to 30% of conversion signals, resulting in poor algorithmic bid optimization and wasted spend.",
    architecture: "A dual-channel conversion tracking framework that dispatches conversion events both from the browser and directly from the server via Meta Conversions API (CAPI) and Google Enhanced Conversions, passing deal stages back from the CRM to train bidding algorithms on real customer revenue.",
    flow: [
      { step: "01", name: "High-Intent Search / Ad Click", detail: "Visitor arrives via Google Search or Meta feed with UTM and click IDs." },
      { step: "02", name: "Dual Event Dispatch", detail: "Landing page sends browser pixel event + server-side webhook simultaneously." },
      { step: "03", name: "Event Deduplication", detail: "Meta CAPI deduplicates events using unique event IDs for 100% signal accuracy." },
      { step: "04", name: "CRM Deal Creation", detail: "Lead record captures exact UTM campaign, ad ID, and landing page variant." },
      { step: "05", name: "Offline Conversion Feedback", detail: "When a deal closes, offline conversion ping trains ad algorithms on high-value buyers." }
    ],
    deliverables: [
      "Google Tag Manager and GA4 server-side container configuration",
      "Meta Conversions API (CAPI) webhook integration",
      "UTM capture script embedded into all lead forms",
      "Bi-weekly transparent campaign reporting dashboard"
    ],
    techStack: ["Meta Conversions API", "Google Tag Manager", "Google Analytics 4", "CRM Webhooks"]
  },
  {
    id: "local-seo-engine",
    title: "Local Search Optimization & Automated Review Collection System",
    category: "Local Growth Architecture",
    tagline: "Google Business Profile optimization and friction-free customer review links",
    problem: "Local businesses miss out on high-intent nearby customers because their Google Business Profile lacks secondary categories, citation consistency, and a systematic way to gather positive customer reviews.",
    architecture: "A comprehensive local search setup combining category alignment, localized on-page schema, and an automated post-service WhatsApp sequence that politely invites verified clients to leave a Google review via 1-click shortlinks.",
    flow: [
      { step: "01", name: "Profile & Citation Audit", detail: "Standardizing Name, Address, and Phone (NAP) across key maps and directory platforms." },
      { step: "02", name: "Category & Service Mapping", detail: "Configuring high-intent primary and secondary business categories and service lists." },
      { step: "03", name: "Local Schema Embed", detail: "Deploying Schema.org/LocalBusiness markup with geo-coordinates and business hours." },
      { step: "04", name: "Job Completion Webhook", detail: "CRM invoice payment or service completion triggers automated review workflow." },
      { step: "05", name: "1-Click Direct Link", detail: "Customer receives a polite WhatsApp follow-up with direct Google review shortlink." }
    ],
    deliverables: [
      "Complete Google Business Profile category and attribute optimization",
      "NAP directory audit and citation alignment recommendations",
      "LocalBusiness Schema.org code injection on your website",
      "Automated post-service review request sequence template"
    ],
    techStack: ["Google Business Profile API", "Schema.org JSON-LD", "WhatsApp Cloud API", "Local SEO Checklists"]
  }
];

export default function WorkPage() {
  const [selectedBlueprint, setSelectedBlueprint] = useState(0);
  const bp = blueprints[selectedBlueprint];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 text-slate-900">
      
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              Demonstrations & Blueprints
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight leading-tight">
              Sample System Architectures
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We present our functional system blueprints and technical workflows so you can inspect exactly how we build, automate, and measure before booking your project.
            </p>
          </div>
        </div>
      </section>

      {/* ── HONESTY & TRANSPARENCY BANNER ────────────────── */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 text-xs text-slate-700 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5 font-semibold">
                Truthful Agency Transparency:
              </strong>
              BoldFlow Labs is in its launch phase. We refuse to fabricate fake client logos, invented customer reviews, or unsupported performance statistics. Instead, we showcase our verified system architectures and technical blueprints so you can evaluate our engineering depth on its merits.
            </div>
          </div>
        </div>
      </section>

      {/* ── BLUEPRINTS EXPLORER ──────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
          {blueprints.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedBlueprint(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                selectedBlueprint === idx
                  ? "bg-[#2563FF] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Blueprint 0{idx + 1}: {item.category.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* All Blueprint Cards Rendered in HTML for Crawlers */}
        {blueprints.map((bp, idx) => (
          <div
            key={bp.id}
            id={`blueprint-panel-${bp.id}`}
            role="tabpanel"
            className={`p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-md ${
              selectedBlueprint === idx ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[11px] font-mono text-[#2563FF] font-semibold uppercase mb-2">
                  <span>{bp.category}</span>
                  <span>·</span>
                  <span>Demonstration Blueprint</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {bp.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1">
                  {bp.tagline}
                </p>
              </div>
              
              <Link
                href="/contact"
                className="btn-primary px-5 py-2.5 text-xs font-semibold shrink-0"
              >
                Deploy This System →
              </Link>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-rose-600 uppercase tracking-wider block font-semibold mb-2">
                  Operational Problem:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {bp.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-[#0891B2] uppercase tracking-wider block font-semibold mb-2">
                  Architectural Solution:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {bp.architecture}
                </p>
              </div>
            </div>

            {/* Step-by-Step Data Flow Diagram */}
            <div className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Step-by-Step Data & Interaction Flow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {bp.flow.map((node) => (
                  <div key={node.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono font-bold text-[#2563FF] uppercase mb-1">
                      Step {node.step}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1.5">{node.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {node.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Key Deliverables in This Setup
                </h4>
                <ul className="space-y-2">
                  {bp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Technologies & APIs Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {bp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}

      </section>

      {/* ── CALL TO ACTION ───────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 shadow-xl shadow-blue-500/5 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Custom System Design</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1020] tracking-tight">
            Need a Tailored System Architecture?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Every business has unique operational handoffs. Tell us what software you currently use and what bottlenecks you want to automate.
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
              <span>Book 30-Min Strategy Call ↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
