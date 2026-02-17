"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
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

    return (
        <nav
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-black/60 backdrop-blur-xl shadow-[0_1px_0_rgba(0,162,255,0.06)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 lg:h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a2ff] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066ff]" />
                        </span>
                        <span className="text-lg font-bold text-white tracking-tight">
                            Bold<span className="gradient-text">Flow</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${pathname === link.href
                                    ? "text-white bg-[#0066ff]/15 shadow-[0_0_12px_rgba(0,102,255,0.15)]"
                                    : "text-gray-500 hover:text-gray-200"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold text-white btn-outline transition-all duration-300"
                        >
                            Get Started
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" as const }}
                        className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/[0.04] overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                                            ? "text-white bg-[#0066ff]/10"
                                            : "text-gray-500 hover:text-white hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.04 }}
                            >
                                <Link
                                    href="/contact"
                                    className="block mt-3 px-4 py-2.5 rounded-full btn-outline text-white text-sm font-semibold text-center"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
