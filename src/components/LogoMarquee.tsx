"use client";

import React from "react";

interface LogoItem {
  id: string;
  name: string;
  svg: React.ReactNode;
}

const logoList: LogoItem[] = [
  {
    id: "exotel",
    name: "Exotel",
    svg: (
      <svg viewBox="0 0 135 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#0047FF" letterSpacing="-0.5">
          Exotel
        </text>
      </svg>
    ),
  },
  {
    id: "plivo",
    name: "Plivo",
    svg: (
      <svg viewBox="0 0 120 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#FF5A1F" letterSpacing="-0.5">
          Plivo
        </text>
      </svg>
    ),
  },
  {
    id: "leadsquared",
    name: "LeadSquared",
    svg: (
      <svg viewBox="0 0 170 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          LeadSquared
        </text>
      </svg>
    ),
  },
  {
    id: "zoho",
    name: "Zoho CRM",
    svg: (
      <svg viewBox="0 0 140 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#E42526" letterSpacing="-0.3">
          Zoho CRM
        </text>
      </svg>
    ),
  },
  {
    id: "practo",
    name: "Practo",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#10B981" letterSpacing="-0.3">
          Practo
        </text>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    svg: (
      <svg viewBox="0 0 210 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#25D366" letterSpacing="-0.3">
          WhatsApp Business
        </text>
      </svg>
    ),
  },
  {
    id: "google-cal",
    name: "Google Calendar",
    svg: (
      <svg viewBox="0 0 180 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <text x="5" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="17" fontWeight="700" fill="#4285F4" letterSpacing="-0.3">
          Google Calendar
        </text>
      </svg>
    ),
  },
  {
    id: "gemini",
    name: "Gemini Live",
    svg: (
      <svg viewBox="0 0 135 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="gemini-grad-marquee" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#9B51E0" />
            <stop offset="100%" stopColor="#D9657B" />
          </linearGradient>
        </defs>
        <path
          d="M14 2C14 8.627 8.627 14 2 14C8.627 14 14 19.373 14 26C14 19.373 19.373 14 26 14C19.373 14 14 8.627 14 2Z"
          fill="url(#gemini-grad-marquee)"
        />
        <text x="34" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.5">
          Gemini
        </text>
      </svg>
    ),
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="#D97757">
          <path d="M12.5 3L14.4 10.6L22 12.5L14.4 14.4L12.5 22L10.6 14.4L3 12.5L10.6 10.6Z" />
        </g>
        <text x="30" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          Claude
        </text>
      </svg>
    ),
  },
];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-transparent border-b border-[#1C1C24] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-10 text-center">
        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">
          {"//"} NATIVE CRM & TELEPHONY INTEGRATIONS
        </span>
        <h2 className="text-2xl md:text-3xl font-bold font-space text-[#F5F6FA] max-w-2xl mx-auto tracking-tight">
          Built for Indian Telephony & CRM Ecosystems
        </h2>
      </div>

      {/* Marquee Outer Container */}
      <div
        aria-label="Technology and CRM partners"
        className="relative w-full overflow-hidden marquee-mask-fade py-4 group/marquee"
      >
        <div className="animate-marquee-track group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] gap-12 md:gap-16 items-center">
          {/* First loop */}
          {logoList.map((logo) => (
            <div
              key={logo.id}
              tabIndex={0}
              role="img"
              aria-label={logo.name}
              className="flex items-center shrink-0 opacity-70 grayscale transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-[1.05] focus:opacity-100 focus:grayscale-0 focus:scale-[1.05] focus:outline-none cursor-pointer p-1"
            >
              {logo.svg}
            </div>
          ))}

          {/* Duplicated loop for seamless loop */}
          {logoList.map((logo) => (
            <div
              key={`${logo.id}-dup`}
              tabIndex={0}
              role="img"
              aria-label={logo.name}
              className="flex items-center shrink-0 opacity-70 grayscale transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-[1.05] focus:opacity-100 focus:grayscale-0 focus:scale-[1.05] focus:outline-none cursor-pointer p-1"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
