import Link from "next/link";
import { LocateIcon, Globe2, Activity } from "lucide-react";

const footerLinks = {
    Architecture: [
        { href: "/about", label: "The Lead Engineer" },
        { href: "/testimonials", label: "Engineering Manifesto" },
        { href: "/contact", label: "Contact / Deploy" },
    ],
    Deployments: [
        { href: "/services", label: "System Capabilities" },
        { href: "/pricing", label: "Architecture Models" },
        { href: "/case-studies", label: "Founding Cohort" },
        { href: "/blog", label: "Telemetry & Logs" },
    ],
};

export default function Footer() {
    return (
        <footer aria-label="Footer" className="bg-[#050505] border-t border-[#1A1A1A] pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
                    
                    {/* Brand Core */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-1.5 group mb-6">
                            <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                                Bold<span className="gradient-text">Flow</span>
                            </span>
                        </Link>
                        <p className="text-sm text-[#71717A] font-light leading-relaxed max-w-sm mb-8">
                            We architect bespoke AI workflows that eliminate operational friction and replace manual tasks with deterministic code.
                        </p>
                        
                        <div className="flex flex-col gap-4 font-mono text-[11px] text-[#A1A1AA]">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#00a2ff] rounded-full animate-pulse" />
                                <span className="uppercase tracking-widest text-[#00a2ff]">Mainframe Online</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <LocateIcon className="w-3.5 h-3.5" />
                                <span className="uppercase tracking-wider">Kerala, India [ Server Edge ]</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe2 className="w-3.5 h-3.5" />
                                <span className="uppercase tracking-wider">Global Operations</span>
                            </div>
                        </div>
                    </div>

                    {/* Directory Links */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#71717A] mb-6">
                                    {"//"} {title}
                                </h3>
                                <ul className="space-y-4">
                                    {links.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#71717A] mb-6">
                                {"//"} Transmit
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="mailto:boldflowlabs@gmail.com" className="text-sm text-[#A1A1AA] hover:text-[#00a2ff] transition-colors duration-200 block break-all">
                                        boldflowlabs@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919447178166" className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200">
                                        +91-9447178166
                                    </a>
                                </li>
                                <li className="pt-4">
                                    <div className="flex items-center gap-4 text-[#71717A]">
                                        <a href="https://linkedin.com/company/boldflowlabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LN</a>
                                        <a href="https://x.com/boldflowlabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technical Footprint */}
                <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                        © {new Date().getFullYear()} BoldFlow Labs. v.1.0.0
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
