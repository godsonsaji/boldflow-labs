"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const solutionLinks = [
    { href: "/real-estate-ai-agent", label: "Real Estate Brokers" },
    { href: "/coaching-institute-ai-agent", label: "Coaching Institutes" },
    { href: "/clinic-ai-agent", label: "Clinics & Doctors" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line
        setIsOpen(false);
        setSolutionsOpen(false);
    }, [pathname]);

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
            <nav
                aria-label="Main navigation"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                    scrolled || isOpen
                        ? "bg-[#0A0A0F]/90 backdrop-blur-[16px] border-white/5"
                        : "bg-transparent border-transparent"
                }`}
            >
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group z-50 relative">
                            <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                                Bold<span className="text-[#0047FF]">Flow</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center justify-center flex-1 gap-5">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`group relative text-[12px] uppercase tracking-wider font-semibold font-mono transition-colors duration-150 ${
                                            isActive ? "text-[#0047FF]" : "text-[#A3A3B3] hover:text-[#F5F6FA]"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            {/* Dropdown for Solutions */}
                            <div className="relative group/dropdown">
                                <button
                                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                                    className="flex items-center gap-1 text-[12px] uppercase tracking-wider font-semibold font-mono text-[#A3A3B3] hover:text-[#F5F6FA] transition-colors py-2"
                                >
                                    <span>Solutions</span>
                                    <ChevronDown className="w-3 h-3 text-[#0047FF]" />
                                </button>

                                <div className="absolute top-full left-0 hidden group-hover/dropdown:flex flex-col bg-[#111116] border border-[#1C1C24] p-3 rounded-[6px] shadow-2xl min-w-[210px] gap-2 z-50">
                                    {solutionLinks.map((sLink) => (
                                        <Link
                                            key={sLink.href}
                                            href={sLink.href}
                                            className="text-[12px] font-mono text-[#A3A3B3] hover:text-white hover:bg-[#0047FF]/10 p-2 rounded transition-colors"
                                        >
                                            {sLink.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA + WhatsApp + Mobile Toggle */}
                        <div className="flex items-center justify-end shrink-0 gap-3">
                            <a
                                href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20learn%20more%20about%20your%20AI%20voice%20agents."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] uppercase font-semibold font-mono tracking-wider bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black rounded-[4px] transition-colors"
                            >
                                <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
                            </a>

                            <Link
                                href="/contact"
                                className="hidden lg:inline-flex px-4 py-2 text-[11px] uppercase font-semibold font-mono tracking-wider btn-primary rounded-[4px]"
                            >
                                Book Free Call
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-2 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <span className="font-medium text-[12px] uppercase tracking-widest text-[#F5F5F5]">
                                    {isOpen ? "CLOSE" : "MENU"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 top-[80px] z-40 bg-[#0A0A0F] lg:hidden flex flex-col justify-start overflow-y-auto"
                    >
                        <div className="px-6 py-8 flex flex-col gap-5">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: i * 0.03 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }}
                                            className={`text-[24px] font-bold tracking-tight flex items-center transition-colors ${
                                                isActive ? "text-[#0047FF]" : "text-[#A3A3B3] hover:text-[#F5F6FA]"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <div className="pt-4 border-t border-[#1C1C24]">
                                <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-widest block mb-3 font-bold">Solutions</span>
                                <div className="flex flex-col gap-3">
                                    {solutionLinks.map((sLink) => (
                                        <Link
                                            key={sLink.href}
                                            href={sLink.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-sm font-mono text-[#A3A3B3] hover:text-white"
                                        >
                                            → {sLink.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 }}
                                className="pt-6 mt-2 border-t border-[#1C1C24] flex flex-col gap-3"
                            >
                                <a
                                    href="https://wa.me/919447178166?text=Hi%20BoldFlow%20Labs,%20I'd%20like%20to%20learn%20more%20about%20your%20AI%20voice%20agents."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-6 py-3.5 text-xs font-mono font-bold tracking-wider uppercase bg-[#25D366] text-black rounded-[4px] gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                                </a>

                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full px-6 py-3.5 text-xs font-mono font-bold tracking-wider uppercase btn-primary rounded-[4px]"
                                >
                                    Book a Free Call
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
