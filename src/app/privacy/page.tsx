import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BoldFlow Labs",
  description: "Privacy Policy for BoldFlow Labs AI automation and telephony services in India.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen pt-40 pb-32 text-white">
      <div className="max-w-[900px] mx-auto px-6 font-sans">
        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-4">// LEGAL & DATA PROTECTION</span>
        <h1 className="text-4xl font-bold font-space mb-8">Privacy Policy</h1>
        <p className="text-xs font-mono text-[#626272] mb-12">LAST UPDATED: AUGUST 2026 · KERALA, INDIA</p>

        <div className="space-y-8 text-sm text-[#A3A3B3] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">1. Information We Collect</h2>
            <p>
              BoldFlow Labs ("we", "our", "us") collects business contact details, phone numbers, email addresses, and voice call audio metadata when you request a diagnostic, apply for a pilot, or use our AI phone receptionists and voice agents.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">2. Telephony & Speech Data Usage</h2>
            <p>
              Voice call recordings, transcripts, and telephone metadata processed through our Indian telephony partners (Exotel, Plivo, Vobiz) are strictly used to execute real-time AI speech interaction, train client-specific custom conversational state machines, and sync lead records to your CRM (LeadSquared, Zoho CRM, Practo, Google Calendar).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">3. TRAI & DND Compliance</h2>
            <p>
              We comply with the Telecom Regulatory Authority of India (TRAI) guidelines and National Do Not Call (NDNC) registry regulations. Outbound voice calls and WhatsApp messages are executed strictly for qualified inbound lead form requests and existing business relationships.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">4. Third-Party Integrations</h2>
            <p>
              We process data through secure APIs including OpenAI Realtime API, Anthropic Claude API, Google Cloud Gemini, Exotel, Plivo, LeadSquared, Zoho CRM, Practo, and Meta WhatsApp Business API. We do not sell or monetize client or caller data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-space text-white mb-3">5. Contact Us</h2>
            <p>
              For privacy inquiries or data removal requests, contact our privacy team at <a href="mailto:hello@boldflowlabs.com" className="text-[#0047FF] hover:underline">hello@boldflowlabs.com</a> or via WhatsApp at <a href="https://wa.me/919447178166" className="text-[#25D366] hover:underline">+91 9447178166</a>.
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
