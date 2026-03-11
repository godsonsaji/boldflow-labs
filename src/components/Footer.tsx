import Link from "next/link";
import { Mail, Clock, Phone, LocateIcon, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
    Company: [
        { href: "/about", label: "About Us" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/testimonials", label: "What to Expect" },
        { href: "/contact", label: "Contact" },
    ],
    Services: [
        { href: "/services", label: "AI Chatbots & Agents" },
        { href: "/services", label: "Workflow Automation" },
        { href: "/services", label: "Analytics & Insights" },
        { href: "/services", label: "Custom AI Models" },
    ],
    Resources: [
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Book a Call" },
        { href: "/case-studies", label: "Portfolio" },
        { href: "/about", label: "Our Process" },
    ],
};

export default function Footer() {
    return (
        <footer aria-label="Footer" className="relative border-t border-white/[0.04] bg-black">
            {/* Gradient line accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-1.5 group">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Bold<span className="gradient-text">Flow</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            A specialist AI automation agency designing intelligent workflow
                            systems that eliminate operational friction and drive measurable
                            business growth.
                        </p>
                        <div className="space-y-2.5 text-sm text-gray-400">
                            <a href="mailto:boldflowlabs@gmail.com" className="flex items-center gap-2.5 hover:text-[#00a2ff] transition-colors duration-200 break-all py-2">
                                <Mail className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                boldflowlabs@gmail.com
                            </a>
                            <a href="tel:+91-9447178166" className="flex items-center gap-2.5 hover:text-[#00a2ff] transition-colors duration-200 py-3 min-h-[44px]">
                                <Phone className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                +91-9447178166</a>
                            <div className="flex items-center gap-2.5">
                                <LocateIcon className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                Pathanamthitta, Kerala, India
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Clock className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                Response within 1 business day
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 flex items-center gap-4">
                            <a href="https://linkedin.com/company/boldflowlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-[#00a2ff] hover:border-[#00a2ff]/30 hover:bg-[#00a2ff]/5 transition-all duration-300 group/social" aria-label="LinkedIn">
                                <Linkedin className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                            </a>
                            <a href="https://x.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-[#00a2ff] hover:border-[#00a2ff]/30 hover:bg-[#00a2ff]/5 transition-all duration-300 group/social" aria-label="X (Twitter)">
                                <Twitter className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                            </a>
                            <a href="https://facebook.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-[#00a2ff] hover:border-[#00a2ff]/30 hover:bg-[#00a2ff]/5 transition-all duration-300 group/social" aria-label="Facebook">
                                <Facebook className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                            </a>
                            <a href="https://instagram.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-[#00a2ff] hover:border-[#00a2ff]/30 hover:bg-[#00a2ff]/5 transition-all duration-300 group/social" aria-label="Instagram">
                                <Instagram className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-4">
                                {title}
                            </h3>
                            <ul className="space-y-2.5">
                                {links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-[#00a2ff] transition-colors duration-200 inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
                    <p className="text-center md:text-left order-2 md:order-1">© 2026 BoldFlow Labs. All rights reserved.</p>
                    <div className="flex items-center gap-8 order-1 md:order-2">
                        <Link href="#" className="hover:text-[#00a2ff] transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-[#00a2ff] transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
