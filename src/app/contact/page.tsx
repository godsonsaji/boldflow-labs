import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Calendar, 
  MapPin, 
  ExternalLink
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 text-slate-900">
      
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="relative py-12 md:py-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1020] tracking-tight leading-tight">
              Start Your Project Consultation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Have an operational bottleneck, need a reliable WhatsApp automation workflow, or ready to launch a high-performance web asset? Let&apos;s evaluate your current setup.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM & VERIFIED CONTACT DETAILS ──────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Enquiry Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Verified Contacts & Process Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Strategy Call Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2563FF] font-semibold uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" />
                <span>Prefer a Direct Conversation?</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Book a 30-Minute Systems Strategy Call
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Schedule a focused 1-on-1 strategy session directly with founder Godson Saji to discuss your workflows, conversion bottlenecks, and project timeline.
              </p>
              <a
                href="https://cal.com/boldflow-labs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Select a Time on Cal.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verified Contact Details Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Verified Business Contacts
              </h3>
              
              <ul className="space-y-4 text-xs font-mono">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Direct Email</span>
                    <a href="mailto:hello@boldflowlabs.com" className="text-slate-900 hover:text-[#2563FF] transition-colors font-medium">
                      hello@boldflowlabs.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">WhatsApp Business</span>
                    <a
                      href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 hover:text-[#2563FF] transition-colors font-medium"
                    >
                      +91 9447178166
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2563FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Telephone</span>
                    <a href="tel:+919447178166" className="text-slate-900 hover:text-[#2563FF] transition-colors font-medium">
                      +91 9447178166
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Headquarters &amp; Service Area</span>
                    <span className="text-slate-900 font-medium block">Kochi, Kerala, India (PIN: 682001)</span>
                    <span className="text-slate-500 text-[11px] block mt-0.5">Hours: Mon–Fri, 9:00 AM – 6:00 PM IST · Global Remote Delivery</span>
                  </div>
                </li>
              </ul>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-mono">Response Time:</span>
                <span className="text-emerald-700 font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Within 24 Hours
                </span>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563FF] font-mono font-bold">1.</span>
                  <span>We review your submission and examine your current tool stack & website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563FF] font-mono font-bold">2.</span>
                  <span>We reach out with preliminary questions or confirm a calendar session.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563FF] font-mono font-bold">3.</span>
                  <span>You receive a clear scope of work with milestone timelines and deliverables.</span>
                </li>
              </ol>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
