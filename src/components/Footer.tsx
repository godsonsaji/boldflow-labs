import Link from "next/link";
import { Bot } from "lucide-react";

const footerLinks = {
    Main: [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/use-cases", label: "Use Cases" },
        { href: "/work", label: "Work" },
    ],
    Resources: [
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ],
};

export default function Footer() {
    return (
        <footer aria-label="Footer" className="bg-[#0A0A0F] border-t border-[#1C1C24] pt-24 pb-0 relative">
            <div className="max-w-[1280px] mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter text-[#F5F6FA] mb-16 leading-[1.1] uppercase w-full font-space">
                    Reliable Systems.<br />
                    Zero Friction.
                </h2>

                {/* Trust Stat Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#1C1C24] pb-12 mb-16">
                    <div>
                        <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-1">{"//"} RESPONSE GUARANTEE</span>
                        <span className="text-xl font-bold font-space text-white leading-tight block">Under 60 Seconds</span>
                        <span className="text-xs text-[#A3A3B3] block">Call and text back routing day or night</span>
                    </div>
                    <div>
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-1">{"//"} VERTICALS SERVED</span>
                        <span className="text-xl font-bold font-space text-white leading-tight block">Home Services & Real Estate</span>
                        <span className="text-xs text-[#A3A3B3] block">HVAC, roofing, solar, and brokerages</span>
                    </div>
                    <div>
                        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-1">{"//"} TELEPHONY & AI INFRA</span>
                        <span className="text-xl font-bold font-space text-white leading-tight block">Gemini · Claude · OpenAI · Telnyx</span>
                        <span className="text-xs text-[#A3A3B3] block">Low-latency live voice networks</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Brand Core - Column 1 */}
                    <div className="py-12 md:pr-12 md:border-r border-[#1C1C24] flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="flex items-center mb-6">
                                <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                                    Bold<span className="text-[#0047FF]">Flow</span>
                                </span>
                            </Link>
                            <p className="text-[#A3A3B3] text-[15px] mb-8 max-w-[280px] leading-relaxed">
                                We deploy AI voice agents and messaging receptionists for service businesses that book jobs in under 60 seconds, 24/7.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 font-mono text-[11px] text-[#A3A3B3] mt-auto">
                            <span className="uppercase tracking-widest text-[#F5F6FA] opacity-80">GLOBAL AI AUTOMATION AGENCY</span>
                            <span className="uppercase tracking-widest text-[#F5F6FA] opacity-60">SERVING CLIENTS GLOBALLY</span>
                        </div>
                    </div>

                    {/* Directory Links - Column 2 */}
                    <div className="py-12 md:px-12 md:border-r border-[#1C1C24] grid grid-cols-2 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-label text-[#71717A] mb-6 font-semibold uppercase tracking-wider">
                                    {title}
                                </h3>
                                <ul className="space-y-4">
                                    {links.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                href={link.href}
                                                className="text-[#A3A3B3] hover:text-[#0047FF] text-[14px] transition-colors duration-150"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Transmit - Column 3 */}
                    <div className="py-12 md:pl-12 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-label text-[#71717A] font-semibold uppercase tracking-wider">
                                Contact
                            </h3>
                        </div>

                        <ul className="space-y-4 mb-auto">
                            <li>
                                <a href="mailto:hello@boldflowlabs.com" className="text-[#A3A3B3] hover:text-[#0047FF] text-[14px] transition-colors duration-150 block break-all font-mono">
                                    hello@boldflowlabs.com
                                </a>
                            </li>
                            <li>
                                <a href="https://cal.com/boldflow-labs/30min" target="_blank" rel="noopener noreferrer" className="text-[#0047FF] hover:text-white text-[13px] font-mono font-bold transition-colors duration-150 block">
                                    Book 30-Min Call ↗
                                </a>
                            </li>
                            <li className="pt-2 flex gap-4">
                                <a href="https://linkedin.com/company/boldflowlabs" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#A3A3B3] hover:text-[#0047FF] transition-colors duration-150 font-medium">LinkedIn</a>
                                <a href="https://x.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#A3A3B3] hover:text-[#0047FF] transition-colors duration-150 font-medium">X</a>
                            </li>
                        </ul>

                        <div className="mt-12 flex justify-between items-end">
                            <div className="flex gap-4 text-label text-[#525252]">
                                <Link href="#" className="hover:text-[#A3A3B3] transition-colors">Privacy</Link>
                                <Link href="#" className="hover:text-[#A3A3B3] transition-colors">Terms</Link>
                                <Link href="#" className="hover:text-[#A3A3B3] transition-colors">Status</Link>
                            </div>
                            <span className="text-[12px] text-[#525252]">© {new Date().getFullYear()} BoldFlow Labs.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solid Absolute Bottom Marker Element */}
            <div className="w-full h-[4px] bg-[#0047FF]" />
        </footer>
    );
}
