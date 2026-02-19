"use client";

import { useState, type ReactNode } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { CollapsibleContent } from "@/components/AnimationWrappers";

interface ServiceCardProps {
    index: number;
    icon: ReactNode;
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    technologies?: string;
}

export default function ServiceCard({ index, icon, title, subtitle, description, features, technologies }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group relative border-b border-white/[0.04] last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start gap-6 py-8 md:py-10 text-left hover:bg-white/[0.01] transition-colors duration-300 px-2"
                aria-expanded={isOpen}
            >
                <div className="shrink-0 flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/30 font-bold tabular-nums w-6">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center group-hover:bg-[#0066ff]/10 group-hover:border-[#00a2ff]/20 transition-all duration-300">
                        {icon}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#00a2ff] transition-colors duration-300">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-[#00a2ff]/60 text-sm font-medium mb-1">{subtitle}</p>
                    )}
                    <p className="text-gray-400 text-sm line-clamp-1 md:line-clamp-none max-w-2xl">
                        {description}
                    </p>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 mt-2 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00a2ff]" : ""}`}
                />
            </button>

            <CollapsibleContent isOpen={isOpen}>
                <div className="pl-24 pb-8 pr-8">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl">
                        {description}
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#00a2ff]/50 font-semibold mb-3">
                        Ideal for
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00a2ff]/60 shrink-0" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    {technologies && (
                        <div className="pt-4 border-t border-white/[0.04]">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#00a2ff]/50 font-semibold mb-2">
                                Core Technologies
                            </p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {technologies}
                            </p>
                        </div>
                    )}
                </div>
            </CollapsibleContent>
        </div>
    );
}
