"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
    }, [pathname]);

    if (pathname?.startsWith("/admin")) return null;

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                    scrolled || isOpen
                        ? "bg-[#0A0A0A]/85 backdrop-blur-[16px] border-[#333333]"
                        : "bg-transparent border-transparent"
                }`}
            >
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group z-50 relative">
                            <span style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white tracking-tight">
                                Bold<span className="text-[#0066ff]">Flow</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`group relative text-[14px] font-medium transition-colors duration-150 ${
                                            isActive ? "text-[#F5F5F5]" : "text-[#A3A3A3] hover:text-[#F5F5F5]"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center justify-end shrink-0 gap-4">
                            <Link
                                href="/contact"
                                className="hidden lg:inline-flex px-6 py-2.5 text-[14px] font-medium btn-primary"
                            >
                                Book a Free Call
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
                        className="fixed inset-0 top-[80px] z-40 bg-[#050505] lg:hidden flex flex-col justify-start overflow-y-auto"
                    >
                        <div className="px-6 py-12 flex flex-col gap-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-[32px] font-medium flex items-center transition-colors ${
                                                isActive ? "text-[#F5F5F5]" : "text-[#A3A3A3] hover:text-[#F5F5F5]"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                                className="pt-8 mt-4 border-t border-[#1A1A1A]"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full px-6 py-4 text-sm font-medium btn-primary"
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
