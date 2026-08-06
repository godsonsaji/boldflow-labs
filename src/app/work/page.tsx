"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const placeholders = [
    {
        industry: "Real Estate Brokers & Developers",
        system: "99acres After-Hours Lead Callback & Site Visit AI",
        status: "In Deployment",
        date: "Bangalore & Mumbai Cohort"
    },
    {
        industry: "D2C & E-Commerce Brands",
        system: "Post-Checkout COD Confirmation & RTO Voice AI",
        status: "In Deployment",
        date: "Delhi NCR & Gurgaon Cohort"
    },
    {
        industry: "Insurance Agencies",
        system: "Expiring Policy Renewal Reminder & Advisor Callback AI",
        status: "In Deployment",
        date: "Chennai & Hyderabad Cohort"
    }
];

export default function WorkPage() {
    return (
        <div className="bg-[#0A0A0F] min-h-screen">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
            
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-24 border-b border-[#1C1C24] overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} Our Client Work
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 max-w-4xl tracking-tight"
                    >
                        We Are Currently Building For Our Founding Indian Cohort.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg max-w-2xl"
                    >
                        BoldFlow Labs is in its early launch phase in India. Instead of inventing fake case studies with imaginary numbers, we are being transparent: Our first major client deployments are being architected right now across Kota, Delhi NCR, Bangalore, Chennai, and Mumbai.
                    </motion.p>
                </div>
            </section>

            {/* ── PLACEHOLDERS ─────────────────────────── */}
            <section className="py-24 bg-[#111116] border-b border-[#1C1C24] relative">
                 <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                     <h2 className="text-2xl font-bold font-space text-[#F5F6FA] mb-12">Systems In Active Deployment</h2>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {placeholders.map((p, i) => (
                              <div key={i} className="bg-[#0A0A0F] border border-[#1C1C24] p-8 flex flex-col justify-between rounded-[6px] hover:border-[#0047FF]/20 transition-colors">
                                  <div>
                                      <div className="flex justify-between items-start mb-6 border-b border-[#1C1C24] pb-6">
                                          <span className="text-[10px] uppercase font-mono tracking-wider text-[#FF5A1F] font-bold">{p.industry}</span>
                                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#0047FF] bg-[#0047FF]/10 px-2 py-0.5 rounded-sm border border-[#0047FF]/20 font-bold">{p.status}</span>
                                      </div>
                                      <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-4">{p.system}</h3>
                                  </div>
                                  <div className="pt-8 font-mono text-xs text-[#626272]">
                                      <span>REGION: {p.date}</span>
                                  </div>
                              </div>
                          ))}
                     </div>
                 </div>
            </section>

            {/* ── FOUNDING CLIENT OFFER ────────────────── */}
            <section className="py-32 bg-[#0A0A0F] border-b border-[#1C1C24] relative">
                 <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                     <div className="bg-[#111116] border border-[#0047FF]/30 p-10 md:p-16 relative overflow-hidden rounded-[8px] shadow-2xl">
                          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(0,71,255,0.06),transparent_70%)] pointer-events-none" />
                          
                          <div className="relative z-10">
                              <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider block mb-3">{"//"} COHORT INVITATION</span>
                              <h2 className="text-h2 text-white mb-6">
                                  The Founding Indian Client Program
                              </h2>
                              <p className="text-sm text-[#A3A3B3] leading-relaxed mb-10 max-w-2xl font-sans">
                                  We are looking for 5 businesses across real estate, D2C/e-commerce, and insurance to turn into our first case studies. Our founding clients receive senior engineering attention, free 48-hour live pilots, and highly favorable pricing in exchange for documenting operational results.
                              </p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                  <div className="flex items-start gap-4">
                                      <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                      <div>
                                          <span className="block text-[#F5F6FA] font-bold font-space mb-1">Architect-Level Access</span>
                                          <span className="text-xs text-[#A3A3B3] leading-relaxed block">Direct collaboration with our founder, bypassing junior telecallers or account managers.</span>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-4">
                                      <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                      <div>
                                          <span className="block text-[#F5F6FA] font-bold font-space mb-1">Free 48-Hour Live Pilot</span>
                                          <span className="text-xs text-[#A3A3B3] leading-relaxed block">Test a voice agent on your phone line for 2 days. Hear real Indian customer calls with zero obligation.</span>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-4">
                                      <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                      <div>
                                          <span className="block text-[#F5F6FA] font-bold font-space mb-1">At-Cost Exotel/Plivo Setup</span>
                                          <span className="text-xs text-[#A3A3B3] leading-relaxed block">Significantly reduced deployment costs designed to remove entry friction for Indian SMBs.</span>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-4">
                                      <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                                      <div>
                                          <span className="block text-[#F5F6FA] font-bold font-space mb-1">Permanent Price Lock</span>
                                          <span className="text-xs text-[#A3A3B3] leading-relaxed block">Your monthly plan tier is permanently locked in, regardless of future agency price increases.</span>
                                      </div>
                                  </div>
                              </div>

                              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4.5 btn-primary font-mono text-xs font-bold uppercase tracking-wider rounded-[4px]">
                                  Apply for Founding Client Cohort <ArrowRight className="w-4 h-4" />
                              </Link>
                          </div>
                      </div>
                 </div>
            </section>
        </div>
    );
}
