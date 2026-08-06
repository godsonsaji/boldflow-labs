import Link from "next/link";

export const metadata = {
  title: "Terms of Service | BoldFlow Labs",
  description: "Terms of Service for BoldFlow Labs AI voice agents and telephony services in India.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen pt-40 pb-32 text-white">
      <div className="max-w-[900px] mx-auto px-6 font-sans">
        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">// TERMS & SERVICE AGREEMENT</span>
        <h1 className="text-4xl font-bold font-space mb-8">Terms of Service</h1>
        <p className="text-xs font-mono text-[#626272] mb-12">LAST UPDATED: AUGUST 2026 · KERALA, INDIA</p>

        <div className="space-y-8 text-sm text-[#A3A3B3] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">1. Services Provided</h2>
            <p>
              BoldFlow Labs provides custom AI voice phone receptionists, automated outbound callbacks, CRM sync services, and WhatsApp messaging integrations for businesses in India. Services operate on flat monthly retainer tiers (Starter ₹9,999/mo, Growth ₹19,999/mo, Scale ₹34,999/mo) with specified included call minutes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">2. Invoicing & GST Compliance</h2>
            <p>
              All fees are billed in Indian Rupees (INR, ₹). Tax invoices compliant with Goods and Services Tax (GST) laws in India will be issued for each monthly billing cycle. Overage minutes beyond included package caps are billed at stated per-minute rates (₹6/min, ₹4/min, or ₹3/min).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">3. Client Responsibilities & Telephony Use</h2>
            <p>
              Clients agree to use BoldFlow Labs AI voice agents in compliance with TRAI regulations, DND rules, and Indian consumer protection laws. Clients must possess legitimate caller consent for outbound callback campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">4. Limitation of Liability</h2>
            <p>
              BoldFlow Labs strives for 99.9% uptime on telephony routes. We are not liable for third-party telecom carrier disruptions (Exotel/Plivo) or CRM API downtime beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Kerala, India.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1C1C24]">
          <Link href="/" className="text-xs font-mono text-[#0047FF] uppercase font-bold hover:underline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
