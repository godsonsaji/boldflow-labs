import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, 
  ChevronRight, 
  AlertTriangle, 
  HelpCircle, 
  ShieldCheck, 
  Target, 
  MessageSquare, 
  Search, 
  Code2, 
  MapPin, 
  Cpu,
  Sparkles
} from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `https://www.boldflowlabs.com/services/${service.slug}`;

  return {
    title: `${service.title} Services`,
    description: service.shortDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} Services | BoldFlow Labs`,
      description: service.shortDescription,
      url,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — BoldFlow Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | BoldFlow Labs`,
      description: service.shortDescription,
      images: ["/og-image.png"],
    },
  };
}

const iconMap: Record<string, React.ReactNode> = {
  "performance-marketing": <Target className="w-8 h-8 text-[#2563FF]" />,
  "whatsapp-automation": <MessageSquare className="w-8 h-8 text-[#06B6D4]" />,
  "seo-services": <Search className="w-8 h-8 text-[#2563FF]" />,
  "website-development": <Code2 className="w-8 h-8 text-[#06B6D4]" />,
  "local-seo": <MapPin className="w-8 h-8 text-[#2563FF]" />,
  "business-automation-crm": <Cpu className="w-8 h-8 text-[#06B6D4]" />
};

export default async function IndividualServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://www.boldflowlabs.com/services/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.boldflowlabs.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.boldflowlabs.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: service.title,
        serviceType: service.category,
        description: service.longDescription,
        provider: {
          "@type": "Organization",
          name: "BoldFlow Labs",
          url: "https://www.boldflowlabs.com",
          logo: "https://www.boldflowlabs.com/logo.png",
        },
        areaServed: {
          "@type": "Country",
          name: "Global",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables`,
          itemListElement: service.deliverables.map((d) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: d.title,
              description: d.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── BREADCRUMBS & HERO ─────────────────────────── */}
      <section className="relative py-12 md:py-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#2563FF] font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <span>{service.category} Service</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.longDescription}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-3.5 text-sm font-semibold text-center"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="#demonstration"
                  className="btn-secondary px-6 py-3.5 text-sm font-medium text-center text-slate-700"
                >
                  View Sample Blueprint ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 inline-block mb-4">
                  {iconMap[service.slug]}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 font-semibold">
                  Service Snapshot
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {service.tagline}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Implementation:</span>
                    <span className="text-slate-900 font-semibold">Bespoke Setup</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Management:</span>
                    <span className="text-slate-900 font-semibold">Direct Founder Oversight</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Asset Ownership:</span>
                    <span className="text-[#2563FF] font-semibold">100% Client Owned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CUSTOMER PROBLEM / PAIN POINTS ──────────────── */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 block mb-2">
              THE BUSINESS CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight mb-4">
              {service.customerProblem.headline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {service.customerProblem.points.map((point, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ×
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-800 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
              <span>
                <strong>Net Business Consequence:</strong> {service.customerProblem.consequence}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES GRID ───────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
            DETAILED SCOPE OF WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
            Specific Deliverables Included in This Service
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every component is specified with clear criteria so you know exactly what is built and delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="system-card p-6 sm:p-7 flex flex-col justify-between bg-white border border-slate-200/90 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#2563FF] uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/70 font-semibold">
                    {item.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2563FF]" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1020] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS: 5-STAGE PROCESS ───────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              THE IMPLEMENTATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
              How We Execute: From Audit to Production
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Our structured step-by-step rollout minimizes your operational disruption while guaranteeing edge-case testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.howItWorks.map((step) => (
              <div key={step.step} className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black font-mono text-[#2563FF] mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUITABLE CUSTOMERS ───────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0891B2] block mb-2">
            TARGET FIT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
            Who This Service Is Built For
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            We focus exclusively on businesses where this architecture creates demonstrable operational leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.suitableFor.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0891B2] font-mono text-xs font-bold mb-4">
                ✓
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEMONSTRATION / SAMPLE BLUEPRINT ────────────── */}
      <section id="demonstration" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <span>{service.demonstration.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
                {service.demonstration.title}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                {service.demonstration.subtitle}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg bg-slate-50">
              Note: Clearly labelled demonstration system
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-8 max-w-3xl">
              {service.demonstration.description}
            </p>

            {/* Workflow steps visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {service.demonstration.flowSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563FF]">
                      {step.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1.5">{step.label}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Specifications Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.demonstration.keySpecs.map((spec, i) => (
                <div key={i} className="text-xs">
                  <span className="text-[11px] font-mono text-slate-500 block mb-0.5 uppercase font-medium">
                    {spec.label}:
                  </span>
                  <span className="text-slate-900 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ──────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
            QUESTIONS & CLARIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Common questions regarding our {service.title} scope, tools, and expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-start gap-3 mb-2">
                <HelpCircle className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
                <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANDATORY TRUTHFUL DISCLAIMER ───────────────── */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 block mb-0.5 font-semibold">Truthful Agency Disclosure:</strong>
            {service.disclaimer}
          </div>
        </div>
      </section>

      {/* ── FINAL SERVICE ENQUIRY CTA ───────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 shadow-xl shadow-blue-500/5 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Implementation & Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1020] tracking-tight">
            Ready to Deploy {service.title}?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Let&apos;s evaluate your current setup, discuss technical prerequisites, and provide a clear implementation timeline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 text-sm font-semibold w-full sm:w-auto"
            >
              Discuss Your Project
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3.5 text-sm font-medium w-full sm:w-auto text-slate-800 hover:text-[#2563FF] border border-slate-300 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#2563FF]" />
              <span>Chat on WhatsApp ↗</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
