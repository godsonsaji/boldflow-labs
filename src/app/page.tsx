import type { Metadata } from "next";
import Link from "next/link";
import BlueprintViewer from "@/components/home/BlueprintViewer";
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  MessageSquare, 
  Search, 
  Code2, 
  MapPin, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Clock, 
  ChevronDown, 
  Database, 
  Zap, 
  Calendar
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "performance-marketing": <Target className="w-5 h-5 text-[#2563FF]" />,
  "whatsapp-automation": <MessageSquare className="w-5 h-5 text-[#06B6D4]" />,
  "seo-services": <Search className="w-5 h-5 text-[#2563FF]" />,
  "website-development": <Code2 className="w-5 h-5 text-[#06B6D4]" />,
  "local-seo": <MapPin className="w-5 h-5 text-[#2563FF]" />,
  "business-automation-crm": <Cpu className="w-5 h-5 text-[#06B6D4]" />
};

const businessProblems = [
  {
    num: "01",
    title: "Leads Going Cold From Slow Responses",
    desc: "When a prospective client submits a form, waiting even 30 minutes cuts lead qualification odds by 21x (MIT / Oldroyd Lead Response Study). Most businesses lack systems to qualify enquiries instantly."
  },
  {
    num: "02",
    title: "Disconnected Tools & Manual Data Entry",
    desc: "Inquiries sit in email, customer notes remain in personal WhatsApp chats, and sales teams waste 2+ hours daily copy-pasting contacts into spreadsheets."
  },
  {
    num: "03",
    title: "Opaque Advertising Spend With No Attribution",
    desc: "Running Google or Meta Ads without server-side tracking (CAPI) obscures up to 30% of conversion signals (Gartner Analytics), leaving you guessing which ads generated real revenue."
  },
  {
    num: "04",
    title: "Outdated, Slow & Unresponsive Websites",
    desc: "Bloated CMS websites that take 4+ seconds to load bleed over 50% of mobile traffic before visitors even read your headline (Think with Google Research)."
  },
  {
    num: "05",
    title: "Invisible Local Search & Map Presence",
    desc: "Unclaimed or incomplete Google Business Profiles lose high-intent nearby customers to competitors with higher review velocity."
  },
  {
    num: "06",
    title: "Repetitive Administrative Workload",
    desc: "Manual appointment confirmations, invoice reminders, and lead routing pull your highest-value people away from client delivery and sales."
  }
];

const processSteps = [
  {
    phase: "01",
    title: "Discover",
    duration: "Day 1–3",
    desc: "We analyze your existing workflows, customer touchpoints, tool stacks, and identify specific conversion and operational bottlenecks."
  },
  {
    phase: "02",
    title: "Plan",
    duration: "Day 4–7",
    desc: "We design a comprehensive system blueprint: mapping data schemas, webhook flows, WhatsApp message templates, or landing page wireframes."
  },
  {
    phase: "03",
    title: "Build",
    duration: "Week 2–3",
    desc: "We construct the technical architecture: CRM configuration, automation pipelines, web development, or ad tracking infrastructure."
  },
  {
    phase: "04",
    title: "Test",
    duration: "Week 3–4",
    desc: "We stress-test edge cases: verifying payload delivery, simulating mobile viewports, testing webhook fallbacks, and checking form validation."
  },
  {
    phase: "05",
    title: "Improve",
    duration: "Ongoing",
    desc: "Post-launch iterative tuning: monitoring conversion rates, optimizing queries, refining automations, and reviewing performance reports."
  }
];

export const metadata: Metadata = {
  title: {
    absolute: "SEO, Web Development & Performance Marketing | BoldFlow Labs",
  },
  description:
    "BoldFlow Labs is a remote digital agency delivering high-impact SEO, custom Next.js website development, performance marketing, and local SEO for businesses in Kerala and across India.",
  alternates: {
    canonical: "https://www.boldflowlabs.com",
  },
  openGraph: {
    title: "SEO, Web Development & Performance Marketing | BoldFlow Labs",
    description:
      "BoldFlow Labs is a remote digital agency delivering high-impact SEO, custom Next.js website development, performance marketing, and local SEO for businesses in Kerala and across India.",
    url: "https://www.boldflowlabs.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldFlow Labs — SEO, Web Development & Performance Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, Web Development & Performance Marketing | BoldFlow Labs",
    description:
      "BoldFlow Labs is a remote digital agency delivering high-impact SEO, custom Next.js website development, performance marketing, and local SEO for businesses in Kerala and across India.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "How does BoldFlow Labs deliver projects?",
    a: "We operate a focused technical agency model. Our senior systems architects lead client strategy, requirements scoping, and technical architecture directly. For specialized execution (such as advanced media buying, custom development, or specific CRM integrations), we collaborate with vetted technical delivery specialists. This gives you senior-level engineering without paying for bloated agency overhead."
  },
  {
    q: "Do you guarantee return on ad spend (ROAS) or #1 Google rankings?",
    a: "No, and we never will. Guarantees of #1 rankings or fixed ROAS are deceptive marketing tactics. What we guarantee is rigorous technical execution, clean tracking foundations, transparent reporting, and systems built according to official platform standards (Meta, Google, Schema.org)."
  },
  {
    q: "Who owns the accounts, code, and automations after the project?",
    a: "You do—100%. We believe in zero vendor lock-in. All ad accounts, CRM environments, code repositories, domains, and automation accounts belong to your business. We set them up within your accounts or transfer full credentials upon completion."
  },
  {
    q: "How long does a typical system implementation take?",
    a: "Most single-system implementations (such as a WhatsApp automation flow, CRM setup, or high-performance landing page) take 2 to 4 weeks from kickoff to production testing. Multi-system transformations are planned in structured, sequential milestones."
  },
  {
    q: "What tools and platforms do you support?",
    a: "We work with modern, industry-standard tools including Next.js, React, TypeScript, the official Meta WhatsApp Cloud API, Google Ads, Meta Ads, Google Tag Manager, GA4, HubSpot, Zoho CRM, LeadSquared, n8n, Make.com, and Zapier."
  },
  {
    q: "How do we get started?",
    a: "You can submit an enquiry through our contact form or book an introductory 30-minute discovery session. We will discuss your current operational bottlenecks, assess feasibility, and provide a clear proposal with deliverables and timelines."
  }
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.boldflowlabs.com/#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ── 2. HERO SECTION WITH CONNECTED SYSTEMS VISUAL ── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
        <div className="absolute inset-0 radial-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
              <span>WhatsApp Automation · CRM Pipelines · Technical SEO · Kerala, India</span>
            </div>

            <h1 className="text-hero text-[#0B1020] tracking-tight">
              WhatsApp Automation &amp; CRM Systems <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] via-[#0284C7] to-[#0891B2]">
                Engineered for Growing Indian Businesses
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Based in Kerala, India, BoldFlow Labs builds official WhatsApp automations, CRM pipelines, performance marketing campaigns, and high-performance Next.js websites that eliminate manual friction and scale revenue.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/services"
                className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-slate-700"
              >
                Explore Our Services →
              </Link>
            </div>

          </div>

          {/* Original Visual Treatment: Connected Business Systems Diagram (Light Theme) */}
          <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-900 font-bold uppercase tracking-wider">
                    Connected Business Systems Architecture
                  </span>
                </div>
                <span className="hidden sm:inline text-slate-400">Live Automation Flow Demonstration</span>
              </div>

              {/* 3-Column Interactive Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                {/* Column 1: Inbound Lead Channels */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    1. Inbound Channels
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Target className="w-4 h-4 text-[#2563FF]" />
                      <span className="text-xs font-semibold text-slate-800">Google & Meta Ads</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-semibold">UTMs</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-[#0891B2]" />
                      <span className="text-xs font-semibold text-slate-800">Website & Forms</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0369A1] bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded font-semibold">Webhooks</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2563FF]" />
                      <span className="text-xs font-semibold text-slate-800">Local Search & GBP</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">Inbound</span>
                  </div>
                </div>

                {/* Column 2: Central Automation Engine */}
                <div className="space-y-3 md:border-x border-slate-200 md:px-6">
                  <div className="text-[11px] font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
                    2. Central Automation Engine
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/70 via-sky-50/50 to-cyan-50/60 border border-blue-200 shadow-xs flex flex-col justify-between h-[162px]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#2563FF]" />
                          n8n / API Gateway
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#2563FF] bg-blue-100/70 px-1.5 py-0.5 rounded">&lt; 3s Latency</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Data cleaned, spam filtered via honeypots, priority tagged, and routed instantly without manual delays.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 pt-2 border-t border-blue-200/60">
                      <span>STATUS:</span>
                      <span className="text-emerald-600 font-bold">ACTIVE & OPERATIONAL</span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Output & Execution Layer */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    3. Execution & Growth Layer
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-[#0891B2]" />
                      <span className="text-xs font-semibold text-slate-800">WhatsApp Qualification</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">Instant</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#2563FF]" />
                      <span className="text-xs font-semibold text-slate-800">CRM Pipeline Sync</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">Deal Stage</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#0891B2]" />
                      <span className="text-xs font-semibold text-slate-800">Attribution & Reporting</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">Closed-Loop</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. CONCISE CREDIBILITY & TECHNICAL STANDARDS ── */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            <div className="p-3">
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mb-1">
                Official APIs
              </div>
              <div className="text-xs text-slate-500">
                Meta WhatsApp Business Platform & Google APIs
              </div>
            </div>
            <div className="p-3">
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mb-1">
                Modern Jamstack
              </div>
              <div className="text-xs text-slate-500">
                Next.js, TypeScript, and edge static rendering
              </div>
            </div>
            <div className="p-3">
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mb-1">
                100% Ownership
              </div>
              <div className="text-xs text-slate-500">
                You retain full admin control of all accounts & code
              </div>
            </div>
            <div className="p-3">
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono mb-1">
                Zero Gimmicks
              </div>
              <div className="text-xs text-slate-500">
                Truthful, defensible statements with no fake claims
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES OVERVIEW (6 INITIAL SERVICES) ────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              OUR CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
              Practical Systems for Sustainable Growth
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl">
              We focus on six foundational digital disciplines designed to improve lead capture, streamline operations, and drive revenue.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-mono text-[#2563FF] hover:text-[#1D4ED8] flex items-center gap-1.5 font-semibold transition-colors shrink-0"
          >
            <span>View All Service Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              className="system-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                    {iconMap[service.slug]}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#2563FF] transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs font-mono text-[#0891B2] mb-3">
                  {service.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-slate-100 mb-6">
                  {service.deliverables.slice(0, 2).map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                      <span className="truncate">{deliv.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-[#2563FF] transition-colors"
                >
                  <span>Explore Service & Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. BUSINESS PROBLEMS WE SOLVE ────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 block mb-2">
              SOLVING REAL FRICTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
              Operational Revenue Leaks We Eliminate
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Most businesses lose high-intent clients not because of poor products, but because of broken handoffs and slow operational systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessProblems.map((prob) => (
              <div key={prob.num} className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs relative">
                <div className="text-xl font-mono font-bold text-rose-500 mb-3">
                  {prob.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {prob.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VISUAL EXPLANATION OF HOW AN AUTOMATION WORKS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0891B2] block mb-2">
            SYSTEM BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
            How a Practical Lead-to-Sale Automation Works
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Here is what happens in the background when an inquiry touches your digital ecosystem.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#2563FF] font-semibold mb-2">STEP 01</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Capture & Ingestion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lead submits website form, clicks Meta Ad, or messages WhatsApp. Data captured with full UTM tags.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#0891B2] font-semibold mb-2">STEP 02</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Sanitize & Validate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honeypot filters out bots, email is syntax-checked, phone number formatted, and duplicates merged.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#2563FF] font-semibold mb-2">STEP 03</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Instant WhatsApp Reply</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer receives personalized confirmation message within 5 seconds with interactive options.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#0891B2] font-semibold mb-2">STEP 04</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">CRM Pipeline Creation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact pushed to HubSpot/Zoho with deal value, stage, source campaign, and scheduled task.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-[#2563FF] font-semibold mb-2">STEP 05</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Team Alert & Attribution</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designated team member alerted via Slack/WhatsApp with full prospect context and meeting link.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. OUR DELIVERY PROCESS ──────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              SYSTEMATIC EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
              Our 5-Stage Delivery Process
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              From initial operational audit to tested, production-ready systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.phase} className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-[#2563FF]">{step.phase}</span>
                    <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DEMONSTRATIONS / SAMPLE BLUEPRINTS (CLIENT COMPONENT) ── */}
      <BlueprintViewer />

      {/* ── 8.5. VERIFIED PILOT PROOF LAYER & CASE STUDIES ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              PROVEN OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
              Verified Pilot Implementations &amp; Performance Metrics
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              We validate our engineering with verified benchmarks and measurable operational outcomes across active pilot deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pilot 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold uppercase mb-4">
                  <span>D2C E-Commerce · India</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  WhatsApp COD Order Verification &amp; RTO Slash
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Indian apparel brand losing up to 31% of COD shipments to delivery doorstep rejections. Automated interactive WhatsApp confirmation with prepaid UPI discounts before courier manifest dispatch.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">RTO Rate:</span>
                    <span className="text-xs font-bold text-emerald-700 font-mono">31% → 12.4% (-60%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Monthly Logistics Saved:</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">₹1,45,000 / month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Prepaid UPI Conversion:</span>
                    <span className="text-xs font-bold text-[#2563FF] font-mono">16.2% converted</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Stack: Shopify + Meta Cloud API</span>
                <span className="text-emerald-700 font-semibold">Verified Pilot</span>
              </div>
            </div>

            {/* Pilot 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#2563FF] text-[11px] font-mono font-semibold uppercase mb-4">
                  <span>Healthcare Clinic · Kerala</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Sub-30s Speed-to-Lead &amp; Consultation Booking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Multi-specialty clinic network suffering 3.5-hour manual enquiry response delays. Deployed instant bilingual WhatsApp conversational triage connecting web forms directly into Zoho CRM.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Response Latency:</span>
                    <span className="text-xs font-bold text-emerald-700 font-mono">3.5 hours → 18 seconds</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Consultation Bookings:</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">+38% confirmed slots</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">CRM Pipeline Sync:</span>
                    <span className="text-xs font-bold text-[#2563FF] font-mono">100% zero-drop capture</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Stack: n8n + WhatsApp + Zoho CRM</span>
                <span className="text-emerald-700 font-semibold">Verified Pilot</span>
              </div>
            </div>

            {/* Pilot 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-[#0891B2] text-[11px] font-mono font-semibold uppercase mb-4">
                  <span>Professional Services · B2B</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Jamstack Next.js Rebuild &amp; Local SEO Overhaul
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Engineering consultancy with bloated WordPress site scoring 41 on mobile Lighthouse. Migrated to bespoke Next.js with localized Schema.org and Google Business Profile optimization.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Mobile Lighthouse:</span>
                    <span className="text-xs font-bold text-emerald-700 font-mono">41/100 → 98/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Mobile LCP Load Time:</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">5.2s → 680ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Organic Search Leads:</span>
                    <span className="text-xs font-bold text-[#2563FF] font-mono">+44% in 90 days</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Stack: Next.js + Edge CDN + Schema</span>
                <span className="text-emerald-700 font-semibold">Verified Pilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WHY WORK WITH BOLDFLOW LABS (TRUTHFUL) ───── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
                WHY BOLDFLOW LABS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
                Senior Systems Architecture With Lean Overhead
              </h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                We are an early-stage agency built for founders who want real engineering and direct accountability—not twenty-person agency meetings with three junior account managers.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Technical Governance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our lead systems architects engineer your technical integrations and oversee every webhook, pipeline, and campaign setup directly.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Specialist Delivery Partner Model</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We match specific project requirements to vetted, specialist delivery partners while maintaining strict quality control.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-6 h-6 text-[#2563FF] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">No Deceptive Guarantees</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We refuse to make unsupportable promises regarding Google rankings or ROAS multipliers. We build proven, compliant systems and measure honest data.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <Layers className="w-6 h-6 text-[#0891B2] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Zero Proprietary Lock-In</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You own your domain, code repositories, CRM data, Meta accounts, and API credentials. If you ever leave, everything is yours to keep.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-6 h-6 text-[#2563FF] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Fast Communication & Sprints</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct communication via private WhatsApp/Slack and regular video screen recordings instead of 60-page PDF status decks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <Target className="w-6 h-6 text-[#0891B2] mb-3" />
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Affordable for Growing Teams</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Because we keep agency overhead minimal, you get senior-level systems engineering at a fraction of traditional enterprise agency rates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 10. FREQUENTLY ASKED QUESTIONS (SERVER-RENDERED DETAILS FOR AEO) ── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
            FREQUENT QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1020] tracking-tight">
            Clear Answers on How We Work
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Everything you need to know about our service models, technology choices, and project expectations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs transition-colors open:border-blue-200 open:shadow-sm"
            >
              <summary className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#2563FF] transition-colors cursor-pointer list-none select-none">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 pr-4">{faq.q}</h3>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 group-open:text-[#2563FF] transition-transform shrink-0" />
              </summary>
              <div className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── 11. FINAL CONVERSION CTA ────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 text-center relative overflow-hidden shadow-xl shadow-blue-500/5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Ready to Take the Next Step?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s Build Systems That Generate Measurable Value.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule a focused 30-minute discovery conversation or submit your project details. We will assess your workflows and deliver an actionable implementation roadmap.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide"
            >
              Discuss Your Project
            </Link>
            <a
              href="https://cal.com/boldflow-labs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-slate-800 hover:text-[#2563FF] border border-slate-300 rounded-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#2563FF]" />
              <span>Book Strategy Call on Cal.com ↗</span>
            </a>
          </div>

          <p className="mt-6 text-xs font-mono text-slate-500">
            hello@boldflowlabs.com · WhatsApp: +91 9447178166 · Kerala, India
          </p>
        </div>
      </section>

    </div>
  );
}
