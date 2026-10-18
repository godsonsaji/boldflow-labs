import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, Mail, ArrowUpRight, ShieldCheck, CheckCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer aria-label="Footer" className="bg-white border-t border-slate-200 pt-16 pb-12 relative mt-auto text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Core Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] rounded-lg transition-opacity hover:opacity-90"
                aria-label="BoldFlow Labs Homepage"
              >
                <Image
                  src="/brand/logo/svg/boldflow-horizontal-full.svg"
                  alt="BoldFlow Labs"
                  width={170}
                  height={36}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                BoldFlow Labs helps businesses streamline operations, automate lead follow-ups, improve their digital presence, and build practical systems for sustainable growth.
              </p>
              
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0891B2]" />
                  <span>Official WhatsApp Business Platform Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563FF]" />
                  <span>100% Client Asset Ownership & Zero Vendor Lock-In</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-mono text-slate-500">
              <span className="block text-slate-800 font-semibold mb-0.5">LOCATION</span>
              <span>Kochi, Kerala, India · Serving Clients Globally</span>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Core Initial Services
            </h4>
            <ul className="space-y-2.5">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-slate-600 hover:text-[#2563FF] text-sm transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#2563FF] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Verification Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  Demonstrations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  About BoldFlow Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-[#2563FF] transition-colors">
                  Blueprints & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Verified Contacts
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <a
                  href="mailto:hello@boldflowlabs.com"
                  className="text-slate-700 hover:text-[#2563FF] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                  <span className="truncate">hello@boldflowlabs.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919447178166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-[#2563FF] transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
                  <span>+91 9447178166</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919447178166"
                  className="text-slate-700 hover:text-[#2563FF] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                  <span>+91 9447178166</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://cal.com/boldflow-labs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563FF] hover:underline font-semibold block"
                >
                  Book 30-Min Strategy Call ↗
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3 text-slate-500">
                <a
                  href="https://linkedin.com/company/boldflowlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563FF] transition-colors"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href="https://x.com/boldflowlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563FF] transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BoldFlow Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
