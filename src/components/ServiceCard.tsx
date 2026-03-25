"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Terminal, Cpu } from "lucide-react";

interface ServiceCardProps {
    index: number;
    icon: ReactNode;
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
}

export default function ServiceCard({ index, icon, title, subtitle, description, features }: ServiceCardProps) {
    const formattedIndex = String(index + 1).padStart(2, "0");
    
    return (
        <div className="border-t border-[#1A1A1A] group hover:bg-[#050505] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                
                {/* Left Column: Number & Sub-headline */}
                <div className="lg:w-5/12 relative z-10 flex flex-col">
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-4xl md:text-6xl font-mono text-[#1A1A1A] group-hover:text-[#00a2ff]/40 transition-colors tracking-tighter">
                            {formattedIndex}
                        </span>
                        <div className="w-12 h-12 rounded-[2px] bg-[#111] border border-[#1A1A1A] flex items-center justify-center">
                            {icon}
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium text-white mb-4 leading-tight tracking-tight">
                        {title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#00a2ff] mb-6">
                        {subtitle}
                    </p>
                    <p className="text-[#A1A1AA] leading-relaxed font-light text-sm max-w-lg">
                        {description}
                    </p>
                </div>

                {/* Middle Column: API/Terminal Outcomes */}
                <div className="lg:w-4/12 relative z-10">
                    <div className="rounded-[2px] bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden group-hover:border-[#333] transition-colors duration-300">
                        <div className="bg-[#111] border-b border-[#1A1A1A] px-5 py-3 flex items-center gap-3">
                            <Terminal className="w-3.5 h-3.5 text-[#A1A1AA]" />
                            <span className="text-[10px] uppercase font-mono text-[#A1A1AA] tracking-widest">System Outputs</span>
                        </div>
                        <div className="p-6 font-mono text-xs text-[#71717A] space-y-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="text-[#00a2ff] mt-0.5">{">"}</span>
                                    <span className="leading-relaxed group-hover:text-[#A1A1AA] transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: CTA */}
                <div className="lg:w-3/12 relative z-10 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
                    <div className="mb-10 hidden lg:block opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <Cpu className="w-12 h-12 text-[#1A1A1A] group-hover:text-[#00a2ff]/20 transition-colors" />
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-transparent border border-[#333] text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-[2px]"
                    >
                        Deploy This System
                    </Link>
                </div>

            </div>
        </div>
    );
}
