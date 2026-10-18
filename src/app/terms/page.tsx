import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for BoldFlow Labs AI automation, business systems, and digital growth services.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/terms",
  },
  openGraph: {
    title: "Terms of Service | BoldFlow Labs",
    description: "Terms of Service for BoldFlow Labs AI automation, business systems, and digital growth services.",
    url: "https://www.boldflowlabs.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 font-sans">
        <span className="text-xs font-mono text-[#2563FF] uppercase tracking-wider block mb-3 font-semibold">
          TERMS & SERVICE AGREEMENT
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0B1020]">Terms of Service</h1>
        <p className="text-xs font-mono text-slate-500 mb-10">
          LAST UPDATED: OCTOBER 2026 · KERALA, INDIA
        </p>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Scope of Services</h2>
            <p>
              BoldFlow Labs provides digital growth and business automation services, including Performance Marketing campaign setup and management, WhatsApp Business Automation, Technical SEO, Website Development, Google Business Profile &amp; Local SEO, and CRM &amp; Workflow Automations. Specific deliverables, fees, and milestone schedules are outlined in individual project proposals and service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Invoicing &amp; Payment Terms</h2>
            <p>
              Project engagements are billed in accordance with agreed milestone proposals. Monthly retainer services are billed at the beginning of each billing cycle. Ad spend budgets for Google Ads and Meta Ads are paid directly by the client to the respective advertising networks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Client Asset Ownership</h2>
            <p>
              BoldFlow Labs practices zero vendor lock-in. Clients retain 100% ownership of their ad accounts, domain registrations, website codebases, CRM data, and WhatsApp Business API assets upon settlement of agreed project fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Truthful Performance &amp; Disclaimers</h2>
            <p>
              While we engineer campaigns and systems according to rigorous technical and industry best practices, BoldFlow Labs does not guarantee specific commercial outcomes, such as guaranteed return on ad spend (ROAS), fixed revenue amounts, specific Google search ranking positions, or Google Maps pack placements. Marketing performance depends on market competition, product demand, and sales follow-up velocity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Third-Party Platform Policies</h2>
            <p>
              Clients agree to comply with all relevant third-party platform rules, including Meta Advertising Standards, Google Ads Policies, and Meta Business Messaging Guidelines for WhatsApp. BoldFlow Labs is not liable for account suspensions or restrictions resulting from client policy violations or external platform outages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Kerala, India.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-4">
          <Link href="/" className="text-xs font-mono text-[#2563FF] uppercase font-bold hover:underline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
