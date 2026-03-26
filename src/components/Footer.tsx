import Link from "next/link";
import { Bot } from "lucide-react";

const footerLinks = {
    Main: [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About" },
    ],
    Resources: [
        { href: "/work", label: "Work" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
    ],
};

export default function Footer() {
    return (
        <footer aria-label="Footer" className="bg-[#050505] border-t border-[#1A1A1A] pt-24 pb-0 relative">
            <div className="max-w-[1280px] mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-6xl lg:text-[72px] font-medium tracking-tighter text-[#F5F5F5] mb-16 leading-[1.1] uppercase w-full">
                    Reliable Systems.<br />
                    Zero Friction.
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#1A1A1A]">
                    {/* Brand Core - Column 1 */}
                    <div className="py-12 md:pr-12 md:border-r border-[#1A1A1A] flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="flex items-center mb-6">
                                <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                                    Bold<span className="text-[#0066ff]">Flow</span>
                                </span>
                            </Link>
                            <p className="text-[#A3A3A3] text-body mb-8 max-w-[280px]">
                                We build custom automation systems for service businesses so you can stop doing repetitive tasks and focus on revenue.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-2 font-mono text-[11px] text-[#A3A3A3] mt-auto">
                            <span className="uppercase tracking-widest text-[#F5F5F5] opacity-80">BASED IN KERALA, INDIA</span>
                            <span className="uppercase tracking-widest text-[#F5F5F5] opacity-60">SERVING GLOBAL CLIENTS</span>
                        </div>
                    </div>

                    {/* Directory Links - Column 2 */}
                    <div className="py-12 md:px-12 md:border-r border-[#1A1A1A] grid grid-cols-2 gap-8">
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
                                                className="text-[#A3A3A3] hover:text-[#F5F5F5] text-[14px] transition-colors duration-150"
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
                                <a href="mailto:hello@boldflowlabs.com" className="text-[#A3A3A3] hover:text-[#F5F5F5] text-[14px] transition-colors duration-150 block break-all">
                                    hello@boldflowlabs.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919447178166" className="text-[#A3A3A3] hover:text-[#F5F5F5] text-[14px] transition-colors duration-150">
                                    +91-9447178166
                                </a>
                            </li>
                            <li className="pt-4 flex gap-4">
                                <a href="https://linkedin.com/company/boldflowlabs" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-150">LinkedIn</a>
                                <a href="https://x.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-150">X</a>
                            </li>
                        </ul>

                        <div className="mt-12 flex justify-between items-end">
                            <div className="flex gap-4 text-label text-[#525252]">
                                <Link href="#" className="hover:text-[#A3A3A3] transition-colors">Privacy</Link>
                                <Link href="#" className="hover:text-[#A3A3A3] transition-colors">Terms</Link>
                                <Link href="#" className="hover:text-[#A3A3A3] transition-colors">Status</Link>
                            </div>
                            <span className="text-[12px] text-[#525252]">© {new Date().getFullYear()} BoldFlow Labs.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solid Absolute Bottom Marker Element */}
            <div className="w-full h-[4px] bg-[#0066ff]" />
        </footer>
    );
}
