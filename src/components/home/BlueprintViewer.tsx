"use client";

import { useState } from "react";

export interface BlueprintNode {
  step: string;
  title: string;
  meta: string;
}

export interface Blueprint {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  nodes: BlueprintNode[];
  techStack: string[];
}

export const sampleBlueprints: Blueprint[] = [
  {
    id: "whatsapp",
    title: "WhatsApp Lead Qualification & Booking Engine",
    category: "Automation Architecture",
    badge: "Sample Architecture (Demonstration)",
    description:
      "An automated conversational flow that ingests web form submissions, greets the customer via official WhatsApp API within 5 seconds, filters project budget and service requirements, and creates a qualified calendar meeting.",
    nodes: [
      { step: "Trigger", title: "Web / Ad Lead Form Submit", meta: "Instant Webhook (<500ms)" },
      { step: "Triage", title: "Data Sanitization & Deduplication", meta: "Checked via n8n / Make" },
      { step: "WhatsApp Message", title: "Automated Interactive Qualification", meta: "Official Meta Cloud API" },
      { step: "CRM Sync", title: "Deal Created & Cal.com Slot Booked", meta: "HubSpot / Zoho CRM" },
    ],
    techStack: ["Official WhatsApp Cloud API", "n8n Webhook Engine", "HubSpot / Zoho CRM", "Cal.com"],
  },
  {
    id: "crm-ads",
    title: "Closed-Loop Performance Ads & CRM Attribution",
    category: "Acquisition Architecture",
    badge: "Sample Architecture (Demonstration)",
    description:
      "A tracking and lead management architecture linking Meta Ads and Google Search Ads directly to server-side conversion APIs and CRM pipeline deal stages, eliminating signal loss from browser ad-blockers.",
    nodes: [
      { step: "Ad Click", title: "Google Search / Meta Feed Impression", meta: "UTM Parameters Captured" },
      { step: "Landing Page", title: "Fast-loading Edge Page (Next.js)", meta: "TTFB <100ms, Lighthouse 95+" },
      { step: "Server Tracking", title: "Meta CAPI & Google Enhanced Events", meta: "Server-Side Event Dispatch" },
      { step: "Attribution", title: "Deal Status Synchronized to Ad Manager", meta: "Optimizes Smart Bidding" },
    ],
    techStack: ["Next.js App Router", "Meta Conversions API (CAPI)", "Google Tag Manager", "GA4"],
  },
  {
    id: "local-seo",
    title: "Local Search Visibility & Review Engine",
    category: "Local SEO Architecture",
    badge: "Sample Architecture (Demonstration)",
    description:
      "A local optimization framework synchronizing Google Business Profile data, LocalBusiness Schema.org markup, and post-service WhatsApp review invitation links to build genuine Google reviews.",
    nodes: [
      { step: "GBP Audit", title: "Primary Category & Service Radius Alignment", meta: "Verified Profile Optimization" },
      { step: "Schema Embed", title: "LocalBusiness JSON-LD on Domain", meta: "Accurate Geo Coordinates" },
      { step: "Job Complete", title: "Service Invoice Marked Complete", meta: "Automated Webhook Trigger" },
      { step: "Review Link", title: "1-Click Direct Google Review Link Sent", meta: "Zero-Friction Review Flow" },
    ],
    techStack: ["Google Business Profile API", "Schema.org JSON-LD", "WhatsApp Cloud API", "Local SEO Checklists"],
  },
];

export default function BlueprintViewer() {
  const [activeBlueprint, setActiveBlueprint] = useState(0);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>DEMONSTRATIONS &amp; SYSTEM BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
            Sample System Implementations
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-xl">
            Inspect how we architect systems before scheduling your project. These are functional demonstrations clearly labelled as sample blueprints.
          </p>
        </div>

        <div className="flex gap-2">
          {sampleBlueprints.map((bp, i) => (
            <button
              key={bp.id}
              onClick={() => setActiveBlueprint(i)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeBlueprint === i
                  ? "bg-[#2563FF] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Sample 0{i + 1}
            </button>
          ))}
        </div>
      </div>

      {sampleBlueprints.map((bp, i) => (
        <div
          key={bp.id}
          id={`sample-blueprint-${bp.id}`}
          role="tabpanel"
          className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md ${
            activeBlueprint === i ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-2">
            <div>
              <span className="text-[11px] font-mono text-[#0891B2] uppercase tracking-wider font-semibold block mb-1">
                {bp.category} · {bp.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{bp.title}</h3>
            </div>
            <div className="text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 shrink-0">
              Label: Demonstration Model
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-3xl">
            {bp.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {bp.nodes.map((node, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] font-mono font-bold text-[#2563FF] uppercase mb-1">
                  {node.step}
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{node.title}</h4>
                <span className="text-[11px] text-slate-500 block">{node.meta}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
              Engineered With:
            </span>
            {bp.techStack.map((tech, tidx) => (
              <span
                key={tidx}
                className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
