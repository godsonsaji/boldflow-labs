"use client";

import React from "react";

interface LogoItem {
  id: string;
  name: string;
  svg: React.ReactNode;
}

const logoList: LogoItem[] = [
  {
    id: "gemini",
    name: "Gemini",
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
    name: "Claude",
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
  {
    id: "claude-code",
    name: "Claude Code",
    svg: (
      <svg viewBox="0 0 185 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="#D97757">
          <path d="M11.5 3L13.2 10.6L20 12.5L13.2 14.4L11.5 22L9.8 14.4L3 12.5L9.8 10.6Z" />
        </g>
        <text x="26" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          Claude
        </text>
        <rect x="100" y="6" width="76" height="20" rx="4" fill="#D97757" fillOpacity="0.15" stroke="#D97757" strokeOpacity="0.4" strokeWidth="1"/>
        <text x="108" y="20" fontFamily="var(--font-mono), monospace" fontSize="11" fontWeight="700" fill="#D97757" letterSpacing="0.5">
          &gt;_CODE
        </text>
      </svg>
    ),
  },
  {
    id: "openai",
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 135 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <path
          d="M22.5 12.8c-.3-1.8-1.4-3.4-3-4.3-2.5-1.4-5.6-1-7.7.9l-1.3.8V8c0-2.8-2.3-5.1-5.1-5.1-1.8 0-3.5.9-4.4 2.5-1.5 2.5-1 5.6 1 7.6l1.3.8-1.3.8c-2.1 1.2-3.4 3.4-3.4 5.9 0 2.8 2.3 5.1 5.1 5.1 1.8 0 3.5-.9 4.4-2.5l1.3-.8v2.2c0 2.8 2.3 5.1 5.1 5.1 1.8 0 3.5-.9 4.4-2.5 1.5-2.5 1-5.6-1-7.6l-1.3-.8 1.3-.8c2.1-1.2 3.4-3.4 3.4-5.9z"
          fill="#10A37F"
        />
        <text x="32" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          OpenAI
        </text>
      </svg>
    ),
  },
  {
    id: "anthropic",
    name: "Anthropic",
    svg: (
      <svg viewBox="0 0 160 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <path
          d="M13.8 5h-3.6L4.5 23h3.7l1.7-4.8h6.2l1.7 4.8h3.7L13.8 5zm-3.1 10.2l2.3-6.6 2.3 6.6h-4.6z"
          fill="#D97757"
        />
        <text x="28" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#F5F6FA" letterSpacing="1.5">
          ANTHROPIC
        </text>
      </svg>
    ),
  },
  {
    id: "cursor",
    name: "Cursor",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="none" stroke="#F5F6FA" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 4L20 8.5V17.5L12 22L4 17.5V8.5L12 4Z" fill="#0047FF" fillOpacity="0.3"/>
          <path d="M12 4V22" />
          <path d="M4 8.5L20 17.5" />
          <path d="M20 8.5L4 17.5" />
        </g>
        <text x="28" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          Cursor
        </text>
      </svg>
    ),
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    svg: (
      <svg viewBox="0 0 165 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="#F5F6FA">
          <rect x="4" y="6" width="4" height="18" rx="1" />
          <rect x="12" y="6" width="4" height="18" rx="1" />
        </g>
        <text x="24" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.4">
          ElevenLabs
        </text>
      </svg>
    ),
  },
  {
    id: "n8n",
    name: "n8n",
    svg: (
      <svg viewBox="0 0 110 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="#FF6584">
          <circle cx="8" cy="15" r="4" />
          <circle cx="20" cy="10" r="3.5" />
          <circle cx="20" cy="20" r="3.5" />
          <path d="M8 15L20 10M8 15L20 20" stroke="#FF6584" strokeWidth="2" />
        </g>
        <text x="30" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#F5F6FA" letterSpacing="-0.5">
          n8n
        </text>
      </svg>
    ),
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    svg: (
      <svg viewBox="0 0 195 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="#6E40C9">
          <path d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.3 18.54 9.5 19.6V23L13.5 20H16C20.42 20 24 16.42 24 12C24 7.58 20.42 4 16 4H12ZM10 10.5C10.83 10.5 11.5 11.17 11.5 12C11.5 12.83 10.83 13.5 10 13.5C9.17 13.5 8.5 12.83 8.5 12C8.5 11.17 9.17 10.5 10 10.5ZM18 10.5C18.83 10.5 19.5 11.17 19.5 12C19.5 12.83 18.83 13.5 18 13.5C17.17 13.5 16.5 12.83 16.5 12C16.5 11.17 17.17 10.5 18 10.5Z" />
        </g>
        <text x="30" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="17" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.3">
          GitHub Copilot
        </text>
      </svg>
    ),
  },
  {
    id: "perplexity",
    name: "Perplexity",
    svg: (
      <svg viewBox="0 0 165 32" className="h-6 md:h-8 w-auto" aria-hidden="true">
        <g fill="none" stroke="#22B8CD" strokeWidth="2">
          <path d="M6 7L18 21M18 7L6 21" />
          <path d="M12 3V25" />
          <rect x="6" y="7" width="12" height="14" strokeWidth="1" opacity="0.4" />
        </g>
        <text x="26" y="22" fontFamily="var(--font-space), system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F5F6FA" letterSpacing="-0.4">
          Perplexity
        </text>
      </svg>
    ),
  },
];

export default function LogoMarquee() {
  return (
    <section className="py-20 bg-transparent border-b border-[#1C1C24] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-12 text-center">
        <span className="text-[11px] font-mono text-[#0047FF] uppercase tracking-wider block mb-3 font-bold">
          {"//"} BUILT ON
        </span>
        <h2 className="text-2xl md:text-3xl font-bold font-space text-[#F5F6FA] max-w-2xl mx-auto tracking-tight">
          We build, ship, and work daily across the platforms behind the frontier.
        </h2>
      </div>

      {/* Marquee Outer Container */}
      <div
        aria-label="Technology partners"
        className="relative w-full overflow-hidden marquee-mask-fade py-4 group/marquee"
      >
        <div className="animate-marquee-track group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] gap-12 md:gap-16 items-center">
          {/* First loop of 10 logos */}
          {logoList.map((logo) => (
            <div
              key={logo.id}
              tabIndex={0}
              role="img"
              aria-label={logo.name}
              className="flex items-center shrink-0 opacity-50 grayscale transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-[1.05] focus:opacity-100 focus:grayscale-0 focus:scale-[1.05] focus:outline-none cursor-pointer p-1"
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
              className="flex items-center shrink-0 opacity-50 grayscale transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-[1.05] focus:opacity-100 focus:grayscale-0 focus:scale-[1.05] focus:outline-none cursor-pointer p-1"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
