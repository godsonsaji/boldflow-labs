import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
    Company: [
        { href: "/about", label: "About Us" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
    ],
    Services: [
        { href: "/services", label: "AI Chatbots" },
        { href: "/services", label: "Workflow Automation" },
        { href: "/services", label: "Custom AI Agents" },
        { href: "/services", label: "Data Analytics" },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-1.5 mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066ff]" />
                            </span>
                            <span className="text-lg font-bold text-white tracking-tight">
                                Bold<span className="gradient-text">Flow</span>
                            </span>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
                            Intelligent AI automation solutions that transform business
                            operations and drive measurable growth.
                        </p>
                        <div className="space-y-2.5 text-sm text-gray-600">
                            <a href="mailto:hello@boldflowlabs.com" className="flex items-center gap-2.5 hover:text-[#00a2ff] transition-colors duration-200">
                                <Mail className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                hello@boldflowlabs.com
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-2.5 hover:text-[#00a2ff] transition-colors duration-200">
                                <Phone className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                +1 (555) 123-4567
                            </a>
                            <div className="flex items-center gap-2.5">
                                <MapPin className="w-3.5 h-3.5 text-[#0066ff]/60" />
                                San Francisco, CA
                            </div>
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
                                            className="text-gray-600 text-sm hover:text-[#00a2ff] transition-colors duration-200 inline-block"
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
                <div className="py-5 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-700">
                    <p>© 2026 BoldFlow Labs. All rights reserved.</p>
                    <div className="flex items-center gap-6">
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
