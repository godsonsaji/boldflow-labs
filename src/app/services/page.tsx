import Link from "next/link";
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
  Sparkles
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "performance-marketing": <Target className="w-6 h-6 text-[#2563FF]" />,
  "whatsapp-automation": <MessageSquare className="w-6 h-6 text-[#06B6D4]" />,
  "seo-services": <Search className="w-6 h-6 text-[#2563FF]" />,
  "website-development": <Code2 className="w-6 h-6 text-[#06B6D4]" />,
  "local-seo": <MapPin className="w-6 h-6 text-[#2563FF]" />,
  "business-automation-crm": <Cpu className="w-6 h-6 text-[#06B6D4]" />
};

export default function ServicesPage() {
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
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.boldflowlabs.com/services/#collection",
        name: "BoldFlow Labs Core Services",
        url: "https://www.boldflowlabs.com/services",
        description:
          "Explore BoldFlow Labs core services: Performance Marketing, WhatsApp Automation, Technical SEO, High-Performance Web Development, Local SEO, and CRM Systems.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span>Core Digital Growth & Automation Systems</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1020] tracking-tight max-w-4xl mx-auto leading-tight">
            Engineered Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#0891B2]">Predictable Business Growth</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We help ambitious businesses automate repetitive workflows, capture and qualify leads on WhatsApp, build fast modern websites, and run disciplined acquisition campaigns.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-sm font-semibold w-full sm:w-auto">
              Discuss Your Project
            </Link>
            <a href="#services-list" className="btn-secondary px-6 py-3.5 text-sm font-medium w-full sm:w-auto text-slate-700">
              Explore Our 6 Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES GRID ──────────────────────────── */}
      <section id="services-list" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
            INITIAL SERVICE OFFERINGS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
            Six Practical Services Built for Immediate Impact
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every service is architected to solve a verified operational or acquisition bottleneck. No vague consulting—only measurable deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              className="system-card p-6 sm:p-8 flex flex-col justify-between group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[#2563FF]">
                    {iconMap[service.slug]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2563FF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs font-mono text-[#0891B2] mb-4">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables preview */}
                <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    Key Deliverables:
                  </div>
                  {service.deliverables.slice(0, 3).map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563FF] shrink-0 mt-0.5" />
                      <span>{deliv.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-[#2563FF] transition-colors"
                >
                  <span>View Full Service Details & Demo</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SYSTEM MATRIX COMPARISON ─────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              DIAGNOSTIC MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1020] tracking-tight">
              Which System Does Your Business Need Right Now?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Match your primary operational bottleneck with our targeted service implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-rose-600 font-semibold uppercase tracking-wider mb-2">
                Bottleneck #1: Slow Response Times
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Leads go cold before your team replies
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                If prospective customers submit enquiries after hours or wait hours for follow-ups, competitors win them.
              </p>
              <div className="text-xs font-mono text-[#2563FF] font-semibold flex items-center gap-1.5">
                <span>Recommended:</span>
                <Link href="/services/whatsapp-automation" className="underline hover:text-[#1D4ED8]">
                  WhatsApp Automation →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-rose-600 font-semibold uppercase tracking-wider mb-2">
                Bottleneck #2: Manual Tool Chaos
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Leads scattered across spreadsheets & chat
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                If your sales reps manually copy data between forms, emails, and CRM with no clean pipeline tracking.
              </p>
              <div className="text-xs font-mono text-[#2563FF] font-semibold flex items-center gap-1.5">
                <span>Recommended:</span>
                <Link href="/services/business-automation-crm" className="underline hover:text-[#1D4ED8]">
                  CRM & Automation →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-rose-600 font-semibold uppercase tracking-wider mb-2">
                Bottleneck #3: Low Inbound Traffic
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Unpredictable pipeline & slow website
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                If your site is slow, fails Core Web Vitals, or paid ad campaigns burn budget without clean attribution.
              </p>
              <div className="text-xs font-mono text-[#2563FF] font-semibold flex items-center gap-1.5">
                <span>Recommended:</span>
                <Link href="/services/website-development" className="underline hover:text-[#1D4ED8]">
                  Web Dev & Marketing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HONESTY & DELIVERY MODEL ─────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563FF] block mb-2">
              OUR AGENCY APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] tracking-tight">
              Transparent Project Management & Execution
            </h2>
            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
              We operate an agile agency model focused on client project governance. Our senior engineering leads direct systems architecture and strategic alignment, collaborating with vetted technical delivery specialists for specialized engineering.
            </p>
            <div className="mt-6 space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2563FF]" />
                <span>No inflated agency overheads or hidden markups</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0891B2]" />
                <span>Zero vendor lock-in: You own all your accounts, scripts, and code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2563FF]" />
                <span>Truthful metrics: We never promise guaranteed rankings or ROAS</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563FF] font-mono text-xs font-bold mb-3">
                01
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Direct Developer Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Communicate directly with the system engineers building your workflows, avoiding game-of-telephone delays through intermediate sales reps.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0891B2] font-mono text-xs font-bold mb-3">
                02
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Official APIs Exclusively</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We build strictly on approved Meta WhatsApp Cloud APIs, Google APIs, and authorized CRM endpoints. Never risky scraped scripts.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563FF] font-mono text-xs font-bold mb-3">
                03
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Modern Jamstack Standards</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Next.js, TypeScript, Tailwind, and edge CDN deployments ensuring lightning-fast mobile performance and high Core Web Vitals.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#0891B2] font-mono text-xs font-bold mb-3">
                04
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">Clear Deliverable Milestones</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every project is structured into clear phases with concrete acceptance criteria and walkthrough demos before production signoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border border-blue-200/80 shadow-xl shadow-blue-500/5 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563FF] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
            <span>Ready for Systems That Scale?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1020] tracking-tight">
            Ready to Streamline Your Business Systems?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Tell us about your project goals. We will review your current systems and share a concrete implementation plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-sm font-semibold w-full sm:w-auto">
              Discuss Your Project
            </Link>
            <a
              href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3.5 text-sm font-medium w-full sm:w-auto text-slate-800 hover:text-[#2563FF] border border-slate-300 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#2563FF]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
