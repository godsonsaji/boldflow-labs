"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Systems" },
    { href: "/case-studies", label: "Founding Cohort" },
    { href: "/testimonials", label: "Architecture" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Telemetry" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    if (pathname?.startsWith("/admin")) return null;

    return (
        <>
            <nav
                aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#1A1A1A]"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 group">
                        <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                            Bold<span className="gradient-text">Flow</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[13px] font-medium transition-colors duration-200 ${pathname === link.href
                                    ? "text-white"
                                    : "text-[#71717A] hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[13px] font-medium rounded-[2px] hover:bg-gray-200 transition-colors"
                        >
                            Deploy System
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-[#71717A] hover:text-white transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[64px] sm:top-[80px] z-40 bg-[#050505]/98 backdrop-blur-xl lg:hidden flex flex-col justify-start overflow-y-auto"
                    >
                        <div className="px-6 py-12 flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-medium block transition-colors ${pathname === link.href
                                            ? "text-white"
                                            : "text-[#71717A] hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: navLinks.length * 0.05 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="pt-8 mt-4 border-t border-[#1A1A1A]"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-between w-full px-6 py-4 bg-white text-black text-sm font-medium rounded-[2px]"
                                >
                                    Deploy System
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
