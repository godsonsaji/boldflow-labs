import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BoldFlow Labs AI automation, business systems, and digital growth services.",
  alternates: {
    canonical: "https://www.boldflowlabs.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | BoldFlow Labs",
    description: "Privacy Policy for BoldFlow Labs AI automation, business systems, and digital growth services.",
    url: "https://www.boldflowlabs.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 font-sans">
        <span className="text-xs font-mono text-[#2563FF] uppercase tracking-wider block mb-3 font-semibold">
          LEGAL & DATA PROTECTION
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-[#0B1020]">Privacy Policy</h1>
        <p className="text-xs font-mono text-slate-500 mb-10">
          LAST UPDATED: OCTOBER 2026 · KERALA, INDIA
        </p>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Information We Collect</h2>
            <p>
              BoldFlow Labs (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects business contact details, company name, phone numbers, email addresses, and project requirement details when you request a diagnostic, submit an enquiry form, book a strategy call, or engage our digital systems services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. How We Use Your Information</h2>
            <p>
              We process information strictly to evaluate project scope, configure approved workflow automations, configure CRM integrations, manage paid acquisition campaigns, and provide client communication. We do not sell, rent, or trade client data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. WhatsApp Business Messaging Compliance</h2>
            <p>
              We build WhatsApp automations strictly over the official Meta WhatsApp Business Platform (Cloud API) in compliance with Meta&apos;s Business Messaging Policies. Automated messages are triggered exclusively upon opt-in or customer-initiated inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Third-Party Tools & API Services</h2>
            <p>
              Depending on your engagement scope, systems may integrate with verified third-party platforms including Meta Cloud API, Google Ads, Google Analytics 4, Google Tag Manager, HubSpot, Zoho CRM, LeadSquared, and n8n. All integrations are configured within client-owned or authorized accounts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Data Retention & Client Ownership</h2>
            <p>
              Clients retain full ownership of their contact records, automation blueprints, CRM data, and codebases. Upon project completion, full administration credentials remain with the client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Us</h2>
            <p>
              For privacy inquiries or data requests, contact us at{" "}
              <a href="mailto:hello@boldflowlabs.com" className="text-[#2563FF] hover:underline font-medium">
                hello@boldflowlabs.com
              </a>{" "}
              or via WhatsApp at{" "}
              <a href="https://wa.me/919447178166" className="text-[#2563FF] hover:underline font-medium">
                +91 9447178166
              </a>.
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
