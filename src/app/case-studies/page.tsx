"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} CASE STUDIES
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-tight mb-8"
                    >
                        We&apos;re Building<br/>Our Portfolio.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light"
                    >
                        Results should speak louder than marketing. Case studies are currently being co-created with our founding client cohort based on measurable, deployed outcomes.
                    </motion.p>
                </div>
            </section>

            {/* ── COMING SOON CONTENT ──────────────────── */}
            <section className="py-24 bg-[#050505] border-b border-[#1A1A1A] text-center px-6">
                 <div className="max-w-2xl mx-auto flex flex-col items-center">
                     <span className="font-mono text-[48px] text-[#111111] mb-8 font-bold leading-none tracking-tighter">
                         [ AWAITING_DATA ]
                     </span>
                     <h2 className="text-h3 text-[#F5F5F5] uppercase mb-6">
                         Real Results, Coming Soon.
                     </h2>
                     <p className="text-body text-[#71717A] leading-relaxed mb-12">
                         We are fiercely focused on exceptional delivery and verifiable infrastructure before packaging it for public consumption. Every published architectural review here will soon include deterministic outcomes, transparent methodology, and direct client validation.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                         <Link href="/testimonials" className="font-mono text-[13px] text-[#A3A3A3] hover:text-[#0066ff] transition-colors relative group">
                             [ REVIEW_OUR_COMMITMENTS ]
                             <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
                         </Link>
                         <span className="hidden sm:inline text-[#333]">|</span>
                         <Link href="/services" className="font-mono text-[13px] text-[#A3A3A3] hover:text-[#0066ff] transition-colors relative group">
                             [ EXPLORE_SYSTEMS ]
                             <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
                         </Link>
                     </div>
                 </div>
            </section>

            {/* ── PAGE CTA ─────────────────────────────── */}
            <section className="py-32 lg:py-48 flex justify-center px-6 bg-[#050505]">
                <div className="w-full max-w-[800px] border border-[#1A1A1A] bg-[#0A0A0A] relative p-16 md:p-24 text-center group active:scale-[0.99] transition-transform duration-150">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-[1px] z-20">
                        <div className="w-full h-full animate-sweep-border opacity-50" />
                    </div>

                    <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                    <div className="absolute inset-0 radial-glow z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="target-hex target-hex-left-top" />
                    <div className="target-hex target-hex-right-bottom" />
                    <div className="target-hex target-hex-right-top" />
                    <div className="target-hex target-hex-left-bottom" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-6 leading-tight max-w-md">
                            Want to be one of our first Case Studies?
                        </h2>
                        <p className="text-body text-[#A3A3A3] mb-12 max-w-sm mx-auto">
                            Join our founding client cohort. Gain hands-on AI automation at introductory pricing in exchange for co-creating a published architectural case study with us.
                        </p>

                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                            APPLY FOR FOUNDING CLIENT
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
