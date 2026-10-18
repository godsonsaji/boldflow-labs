"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Target,
  MessageSquare,
  Search,
  Code2,
  MapPin,
  Cpu
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "performance-marketing": <Target className="w-4 h-4 text-[#2563FF]" />,
  "whatsapp-automation": <MessageSquare className="w-4 h-4 text-[#06B6D4]" />,
  "seo-services": <Search className="w-4 h-4 text-[#2563FF]" />,
  "website-development": <Code2 className="w-4 h-4 text-[#06B6D4]" />,
  "local-seo": <MapPin className="w-4 h-4 text-[#2563FF]" />,
  "business-automation-crm": <Cpu className="w-4 h-4 text-[#06B6D4]" />
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] rounded-lg py-1 transition-opacity hover:opacity-90"
              aria-label="BoldFlow Labs Homepage"
            >
              <Image
                src="/brand/logo/svg/boldflow-horizontal-full.svg"
                alt="BoldFlow Labs"
                width={175}
                height={38}
                priority
                className="h-8 md:h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop navigation">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/" ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    pathname.startsWith("/services") ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10 grid gap-1">
                      <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                        Core Systems & Services
                      </div>
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200 group-hover/item:border-[#2563FF]/40 transition-colors mt-0.5">
                            {iconMap[svc.slug]}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#2563FF] transition-colors">
                              {svc.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {svc.tagline}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-1 mt-1 border-t border-slate-100">
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#2563FF] hover:text-[#1D4ED8] transition-colors"
                        >
                          <span>Explore All 6 Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/work"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/work" ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Demonstrations
              </Link>

              <Link
                href="/blog"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/blog") ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/about" ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/contact" ? "text-[#2563FF] bg-blue-50 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-xs uppercase tracking-wider px-5 py-2.5 font-semibold"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563FF]"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 hover:text-slate-900 hover:bg-slate-50"
              >
                Home
              </Link>

              <div className="pt-2 pb-1">
                <div className="px-3 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Our Services
                </div>
                <div className="grid gap-1 pl-2">
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    >
                      {iconMap[svc.slug]}
                      <span>{svc.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#2563FF] hover:text-[#1D4ED8]"
                  >
                    <span>Overview of All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <Link
                href="/work"
                className="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 hover:text-slate-900 hover:bg-slate-50"
              >
                Demonstrations & Blueprints
              </Link>

              <Link
                href="/blog"
                className="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 hover:text-slate-900 hover:bg-slate-50"
              >
                Blog & Insights
              </Link>

              <Link
                href="/about"
                className="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 hover:text-slate-900 hover:bg-slate-50"
              >
                About BoldFlow Labs
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 hover:text-slate-900 hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-primary w-full text-center py-3 text-sm font-semibold"
              >
                Discuss Your Project
              </Link>
              <a
                href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center py-2.5 text-xs font-mono text-[#2563FF]"
              >
                Quick WhatsApp Inquiry
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
