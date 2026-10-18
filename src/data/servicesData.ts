export interface Deliverable {
  title: string;
  description: string;
  tag: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SuitableCustomer {
  title: string;
  reason: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDemonstration {
  type: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  flowSteps: { label: string; detail: string; status: string }[];
  keySpecs: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  shortDescription: string;
  longDescription: string;
  customerProblem: {
    headline: string;
    points: string[];
    consequence: string;
  };
  deliverables: Deliverable[];
  howItWorks: ProcessStep[];
  suitableFor: SuitableCustomer[];
  demonstration: ServiceDemonstration;
  faqs: ServiceFAQ[];
  disclaimer: string;
  category: "Growth" | "Automation" | "Web & SEO";
  accentColor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "High-Intent Google & Meta Ad Campaigns",
    heroHeadline: "Data-Driven Google & Meta Ads Built for Measurable Lead Generation",
    shortDescription: "Strategic campaign setup, conversion tracking, audience targeting, and budget monitoring across Google Ads and Meta platforms.",
    longDescription: "We structure, manage, and optimize paid acquisition campaigns across Google Search, Performance Max, and Meta Ads. Every campaign is wired directly to verified conversion events, transparent analytics, and daily budget oversight to eliminate wasted ad spend.",
    customerProblem: {
      headline: "Why most businesses burn money on paid advertising",
      points: [
        "Running campaigns without server-side tracking (Meta CAPI / Google Enhanced Conversions) leaves ad algorithms guessing who actually converted.",
        "Targeting broad, low-intent keywords and unsegmented audiences drains daily budgets on unqualified clicks.",
        "Sending paid traffic to generic homepages rather than dedicated, conversion-optimized landing pages drops conversion rates below 2%.",
        "No weekly negative keyword scrubbing allows irrelevant search queries to consume significant budget."
      ],
      consequence: "Rising customer acquisition costs with zero clarity on which campaigns generate profitable business."
    },
    deliverables: [
      {
        title: "Account Structure & Strategy",
        description: "Custom campaign architecture built around your high-margin offerings, target locations, and buyer personas.",
        tag: "Strategy"
      },
      {
        title: "Full-Funnel Conversion Tracking",
        description: "Google Tag Manager, Meta Conversions API (CAPI), and GA4 event tracking setup for accurate attribution.",
        tag: "Analytics"
      },
      {
        title: "Creative & Ad Copy Direction",
        description: "High-relevance ad copy variants, responsive search ads, and creative recommendations tailored to buyer intent.",
        tag: "Creative"
      },
      {
        title: "Budget & Bid Optimization",
        description: "Target CPA/ROAS bid management, dayparting, device bid adjustments, and proactive budget reallocation.",
        tag: "Management"
      },
      {
        title: "Negative Keyword & Search Hygiene",
        description: "Continuous search term audits to block irrelevant search queries and protect your media spend.",
        tag: "Hygiene"
      },
      {
        title: "Transparent Bi-Weekly Reporting",
        description: "Clean performance dashboards showing cost-per-lead, lead volumes, conversion rates, and action items.",
        tag: "Reporting"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Audience & Competitor Audit",
        description: "We analyze competitor ad strategies, historical campaign data, keyword intent profiles, and customer acquisition costs."
      },
      {
        step: "02",
        title: "Tracking & Conversion Foundations",
        description: "We configure GA4, GTM, Meta CAPI, and custom webhook triggers to record every form submit, call, or transaction."
      },
      {
        step: "03",
        title: "Campaign Build & Creative Launch",
        description: "We build tightly-themed ad groups, write compelling ad angles, configure audience exclusions, and launch campaigns."
      },
      {
        step: "04",
        title: "Search Term & Bid Pruning",
        description: "Within the first 14 days, we scrub search queries, adjust keyword match types, and tune bidding algorithms based on conversion data."
      },
      {
        step: "05",
        title: "Scale & Creative Iteration",
        description: "We scale budget toward proven keywords and ad variants while introducing fresh hooks to prevent ad fatigue."
      }
    ],
    suitableFor: [
      {
        title: "B2B Service Providers & Consultancies",
        reason: "Looking to capture high-intent buyers actively searching for specialized professional services."
      },
      {
        title: "Local & Regional Service Businesses",
        reason: "Seeking a steady stream of localized quote requests and inbound consultation bookings."
      },
      {
        title: "E-Commerce & High-Ticket Brands",
        reason: "Requiring rigorous tracking, retargeting funnels, and clean catalog sales campaigns."
      }
    ],
    demonstration: {
      type: "Sample Ad Funnel Architecture",
      title: "Closed-Loop Attribution Pipeline",
      subtitle: "Demonstration of tracking setup from initial ad impression to verified CRM lead",
      badge: "Sample Architecture (Demonstration)",
      description: "This blueprint illustrates how we wire Meta CAPI and Google Tag Manager to prevent signal loss from iOS privacy updates and browser ad-blockers.",
      flowSteps: [
        { label: "High-Intent Ad Click", detail: "Google Search (Targeted Keywords) or Meta Feed Carousel", status: "Trigger" },
        { label: "Dedicated Landing Page", detail: "Fast-loading page with dynamic UTM capture and clear CTA", status: "Session" },
        { label: "Dual Conversion Dispatch", detail: "Browser Pixel + Server-Side Meta CAPI / Google Enhanced Conversions", status: "Tracking" },
        { label: "CRM Ingestion & Attribution", detail: "Lead record created with UTM campaign, ad ID, and click identifier", status: "Verified" }
      ],
      keySpecs: [
        { label: "Platforms Supported", value: "Google Ads (Search & PMax), Meta Ads (Facebook & Instagram)" },
        { label: "Tracking Tech", value: "Meta Conversions API (CAPI), GTM, GA4, Server-side Webhooks" },
        { label: "Reporting Cadence", value: "Real-time dashboard + Bi-weekly video walkthrough" },
        { label: "Policy Compliance", value: "Strict adherence to Google Ads & Meta Advertising Standards" }
      ]
    },
    faqs: [
      {
        question: "Do you guarantee a specific ROAS or number of leads?",
        answer: "No. We never make false ROAS or volume guarantees because market demand, product pricing, competitor bids, and sales closing abilities vary. What we guarantee is rigorous campaign structure, verified tracking accuracy, active negative keyword pruning, and complete transparency on budget allocation."
      },
      {
        question: "Who pays for the advertising budget?",
        answer: "You pay the ad networks (Google and Meta) directly through your own ad account. BoldFlow Labs charges a transparent agency management fee. You retain 100% ownership of your accounts, creative assets, and campaign data."
      },
      {
        question: "What minimum ad spend do you recommend?",
        answer: "We typically recommend a minimum ad spend of ₹25,000 to ₹50,000 ($300 to $600 USD) per month per platform to allow the ad algorithms sufficient conversion data to exit the learning phase effectively."
      },
      {
        question: "How do you prevent wasted spend on accidental clicks?",
        answer: "We implement daily search query monitoring, extensive negative keyword lists, tight geographic radiuses, and bot-filtering CAPTCHAs on landing page forms."
      }
    ],
    disclaimer: "Advertising results vary based on market conditions, product viability, target location, and your sales follow-up velocity. BoldFlow Labs does not guarantee specific revenue, return on ad spend (ROAS), or lead volumes.",
    category: "Growth",
    accentColor: "#2563FF"
  },
  {
    id: "whatsapp-automation",
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    tagline: "Official WhatsApp Business Platform Systems",
    heroHeadline: "Convert Inquiries Instantly With Compliant WhatsApp Workflows",
    shortDescription: "Official WhatsApp Business API integration for automated lead qualification, instant enquiry response, and scheduled appointment reminders.",
    longDescription: "Engage prospective clients on their preferred messaging channel without manual chaos. We build official WhatsApp Business Platform automations that greet new leads within seconds, qualify their needs, route hot leads to your team, and send transactional updates.",
    customerProblem: {
      headline: "The cost of slow, manual customer communication",
      points: [
        "Over 65% of customer inquiries convert with the first business that responds, but human teams take hours to reply to website forms.",
        "Manual messaging from personal WhatsApp numbers leads to lost chat histories, untracked leads, and non-compliance with privacy laws.",
        "Using unofficial 'scraped' WhatsApp tools puts your primary business phone number at severe risk of permanent ban.",
        "Manual appointment reminders result in high no-show rates for booked consultations."
      ],
      consequence: "High drop-off rates between initial enquiry and scheduled consultation."
    },
    deliverables: [
      {
        title: "Official Meta WhatsApp API Setup",
        description: "Registration, Meta Business Manager verification, phone number migration, and display name approval.",
        tag: "Infrastructure"
      },
      {
        title: "Interactive Qualification Flows",
        description: "Automated multi-branch menus that ask qualifying questions (budget, timeline, service needed) before human handoff.",
        tag: "Automation"
      },
      {
        title: "Lead Capture & CRM Webhooks",
        description: "Bidirectional sync connecting WhatsApp conversations directly with your CRM, Google Sheets, or email alerts.",
        tag: "Integration"
      },
      {
        title: "Pre-Approved Message Templates",
        description: "Drafting, categorization, and Meta approval of transactional message templates (utility and marketing).",
        tag: "Compliance"
      },
      {
        title: "Automated Reminders & Confirmations",
        description: "Scheduled consultation reminders 24 hours and 1 hour prior to meetings to slash no-show rates.",
        tag: "Workflows"
      },
      {
        title: "Agent Live-Chat Inbox Routing",
        description: "Shared team inbox setup so multiple team members can manage conversations with clear assignment.",
        tag: "Operations"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "API Onboarding & Meta Verification",
        description: "We guide you through Meta Business Manager verification and register your dedicated phone number on the official WhatsApp Cloud API."
      },
      {
        step: "02",
        title: "Conversation Architecture",
        description: "We map out conversational branches: FAQ answers, lead qualification parameters, service selector menus, and escalation rules."
      },
      {
        step: "03",
        title: "Template Drafting & Approval",
        description: "We write compliant message templates according to Meta's Business Messaging Policy and submit them for fast approval."
      },
      {
        step: "04",
        title: "CRM & Webhook Connection",
        description: "We connect the automation engine (via n8n, Make, or custom webhooks) to your website forms, ad lead forms, and CRM."
      },
      {
        step: "05",
        title: "Testing & Live Deployment",
        description: "We simulate incoming leads, verify mobile formatting, test fallback triggers, and launch the workflow live."
      }
    ],
    suitableFor: [
      {
        title: "High-Volume Service Companies",
        reason: "Needing to triage dozens of daily quote requests without keeping prospective clients waiting."
      },
      {
        title: "Appointment-Driven Businesses",
        reason: "Clinics, consultancies, agencies, and real estate professionals aiming to eliminate consultation no-shows."
      },
      {
        title: "D2C & E-Commerce Brands",
        reason: "Looking to automate order tracking updates, address verification, and customer support queries."
      }
    ],
    demonstration: {
      type: "Sample Conversation Flow",
      title: "Interactive Lead Qualification & Booking Flow",
      subtitle: "Demonstration of an automated conversational sequence for service inquiries",
      badge: "Sample Architecture (Demonstration)",
      description: "This sample shows the sequence of automated interactions triggered immediately when a prospect clicks a WhatsApp CTA or submits a web form.",
      flowSteps: [
        { label: "Trigger: Inbound Web Form", detail: "Customer requests a project quotation on website", status: "Trigger" },
        { label: "Step 1: Welcome & Service Selection", detail: "Instant message (<5s): 'Thanks for reaching out! Which service are you exploring?' [Interactive Buttons]", status: "Automated" },
        { label: "Step 2: Budget & Timing Filter", detail: "User taps selection. Automated follow-up asks for project start timeframe and rough budget tier.", status: "Qualification" },
        { label: "Step 3: Calendar Link & CRM Sync", detail: "System generates dedicated Cal.com booking link + pushes lead record to CRM with full transcript.", status: "Completion" }
      ],
      keySpecs: [
        { label: "API Standard", value: "Official WhatsApp Cloud API (Meta)" },
        { label: "Response Latency", value: "< 5 seconds automated trigger" },
        { label: "Integration Points", value: "HubSpot, Zoho, LeadSquared, Google Sheets, Slack, Webhooks" },
        { label: "Compliance", value: "100% Meta Business Messaging Policy compliant (Opt-in required)" }
      ]
    },
    faqs: [
      {
        question: "Do you use unofficial WhatsApp tools or web scrapers?",
        answer: "Never. Unofficial tools risk having your business number permanently banned by Meta. BoldFlow Labs exclusively builds on the official WhatsApp Business Platform (Cloud API), ensuring reliable delivery, verified business branding, and complete compliance."
      },
      {
        question: "Are there additional costs for WhatsApp messages?",
        answer: "Yes. Meta charges per conversation based on category (Utility, Authentication, Service, Marketing). Service conversations (replies to user-initiated messages within 24 hours) are free up to 1,000 conversations/month, with minimal regional rates thereafter. We help you design efficient flows to keep messaging costs as low as possible."
      },
      {
        question: "Can multiple team members reply to WhatsApp chats?",
        answer: "Yes. We configure multi-agent shared inboxes so your team can assign conversations, view notes, and collaborate from desktop and mobile without sharing a single phone."
      },
      {
        question: "Can we connect WhatsApp directly to our website forms?",
        answer: "Yes. Whenever a prospect submits an enquiry form on your website, our system can immediately trigger an automated WhatsApp confirmation message to their phone within seconds."
      }
    ],
    disclaimer: "All WhatsApp automations require an active WhatsApp Business API account subject to Meta's Business Messaging Policies, template approvals, and conversation fees. We do not provide cold unsolicited mass-messaging tools.",
    category: "Automation",
    accentColor: "#06B6D4"
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    tagline: "Technical, On-Page & Content Optimization",
    heroHeadline: "Build Organic Search Visibility Through Clean Technical Foundations",
    shortDescription: "Technical SEO audits, keyword research, on-page optimization, site architecture refinement, and transparent search reporting.",
    longDescription: "Earn durable organic search visibility from prospective buyers looking for your exact services. We audit and rebuild technical site foundations, optimize semantic on-page elements, fix crawlability roadblocks, and structure content clusters designed to rank over time.",
    customerProblem: {
      headline: "Why commercial websites fail to rank on search engines",
      points: [
        "Hidden technical errors (slow Core Web Vitals, duplicate canonicals, render-blocking scripts) block search engine crawlers from indexing pages.",
        "Targeting overly broad, vanity keywords instead of high-intent commercial search phrases that actually drive inquiries.",
        "Missing or broken Schema.org structured data prevents rich snippet visibility in search engine results pages (SERPs).",
        "Thin, unhelpful content generated without topical authority or search intent matching fails search quality benchmarks."
      ],
      consequence: "Reliance on costly paid ads because your website receives virtually zero qualified organic traffic."
    },
    deliverables: [
      {
        title: "Comprehensive Technical SEO Audit",
        description: "Full crawl inspection checking indexing status, canonical tags, 404 errors, robots.txt, and XML sitemaps.",
        tag: "Technical"
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description: "Diagnostics and remedies for Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).",
        tag: "Performance"
      },
      {
        title: "High-Intent Keyword Research",
        description: "Identification of commercial and transactional search queries with realistic competition difficulty and buyer intent.",
        tag: "Research"
      },
      {
        title: "On-Page Optimization & Meta Data",
        description: "Refining title tags, meta descriptions, semantic H1-H3 structures, URL slugs, and internal linking hierarchy.",
        tag: "On-Page"
      },
      {
        title: "Schema.org Structured Data",
        description: "Implementation of clean JSON-LD markup for Organizations, Local Businesses, Services, Breadcrumbs, and FAQs.",
        tag: "Structured Data"
      },
      {
        title: "Google Search Console Monitoring",
        description: "Monthly reporting tracking indexation coverage, organic impressions, click-through rates, and query rankings.",
        tag: "Analytics"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Technical Discovery & Crawl Audit",
        description: "We crawl your entire website using professional diagnostic tools to identify all indexation blocks, broken links, and metadata gaps."
      },
      {
        step: "02",
        title: "Keyword & Intent Mapping",
        description: "We map target keyword clusters to specific existing or planned URLs based on search intent and commercial value."
      },
      {
        step: "03",
        title: "On-Page & Architecture Fixes",
        description: "We rewrite metadata, optimize page headings, improve internal anchor links, and implement Schema.org markup."
      },
      {
        step: "04",
        title: "Technical Remediation",
        description: "We work directly on your codebase or CMS to fix render-blocking assets, optimize image delivery, and resolve crawl errors."
      },
      {
        step: "05",
        title: "Ongoing Performance Tracking",
        description: "We monitor Google Search Console metrics, address new crawl errors, and iteratively refine underperforming pages."
      }
    ],
    suitableFor: [
      {
        title: "Professional Service Agencies",
        reason: "Aiming to generate consistent organic inbound enquiries for high-value client contracts."
      },
      {
        title: "B2B Software & Tech Companies",
        reason: "Needing clean technical SEO foundations and authoritative topic clusters."
      },
      {
        title: "Businesses Rebuilding Their Website",
        reason: "Wanting to preserve existing search equity and prevent traffic drops during migration."
      }
    ],
    demonstration: {
      type: "Sample Technical SEO Blueprint",
      title: "Full-Stack SEO Hygiene Architecture",
      subtitle: "Demonstration of our on-page and technical SEO standard operating procedure",
      badge: "Sample Architecture (Demonstration)",
      description: "This sample showcases the technical checklist applied to every client page before publication to ensure search crawlability and schema validation.",
      flowSteps: [
        { label: "Crawl & Semantic Validation", detail: "Check clean semantic hierarchy (single H1, structured H2-H4s, valid canonical)", status: "Validated" },
        { label: "Core Web Vitals Benchmark", detail: "Ensure LCP under 2.5s, CLS under 0.1, INP under 200ms on real devices", status: "Benchmarked" },
        { label: "JSON-LD Schema Injection", detail: "Inject structured Organization, Service, and FAQPage data verified with Schema validator", status: "Verified" },
        { label: "Sitemap & Indexing Ping", detail: "Automated inclusion in XML sitemap and submission to Google Search Console API", status: "Indexed" }
      ],
      keySpecs: [
        { label: "Audit Tools", value: "Google Search Console, PageSpeed Insights, Screaming Frog" },
        { label: "Schema Standards", value: "Schema.org JSON-LD compliant (Organization, Service, FAQ, Breadcrumb)" },
        { label: "Approach", value: "100% White-Hat Technical & Editorial SEO" },
        { label: "Timeline Expectation", value: "3 to 6 months for sustained organic indexation momentum" }
      ]
    },
    faqs: [
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No. Anyone promising a guaranteed #1 position on Google is using deceptive tactics. Google's search algorithms use hundreds of proprietary signals that no third party controls. We focus on what is proven and defensible: rock-solid technical health, fast page speed, clean schema data, and high-intent keyword optimization."
      },
      {
        question: "How long does SEO take to produce measurable results?",
        answer: "SEO is a medium-to-long-term channel. While technical fixes and indexing corrections often show crawl improvements within 3 to 6 weeks, noticeable increases in organic impressions and keyword rankings generally take 3 to 6 months depending on existing domain authority and competition."
      },
      {
        question: "Do you buy backlinks or use private blog networks (PBNs)?",
        answer: "Never. We adhere strictly to Google Search Essentials. We do not participate in shady backlink schemes or PBNs that risk algorithmic manual penalties. We focus on technical excellence and high-relevance site architecture."
      },
      {
        question: "Can you fix an existing website without a total rebuild?",
        answer: "Yes. In many cases, we can audit your current CMS or codebase (WordPress, Next.js, Shopify, Webflow) and implement technical, on-page, and schema improvements without disrupting your live design."
      }
    ],
    disclaimer: "SEO is an ongoing process. BoldFlow Labs does not guarantee specific rankings, positions, or traffic volumes. All strategies adhere to Google's Search Essentials guidelines.",
    category: "Web & SEO",
    accentColor: "#2563FF"
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    tagline: "High-Performance Modern Web Engineering",
    heroHeadline: "Bespoke, Fast, Conversion-Focused Websites Engineered for Real Business",
    shortDescription: "Custom business websites and landing pages built with clean code, responsive layouts, rapid load times, and built-in technical SEO.",
    longDescription: "Your website is your primary business asset. We design and build modern websites using Next.js, TypeScript, and clean CSS that load instantly, display flawlessly on mobile devices, and guide qualified visitors directly into submitting enquiries.",
    customerProblem: {
      headline: "The hidden business cost of slow, outdated websites",
      points: [
        "Bloated page builders loaded with dozens of plugins cause 4+ second load times, causing over 50% of mobile visitors to bounce before the page loads.",
        "Unresponsive mobile layouts where buttons overlap, text is illegible, and forms are painful to fill out on smartphones.",
        "Vague, generic messaging with weak calls-to-action that leaves visitors confused about what your business actually does.",
        "Missing technical foundations: broken meta tags, uncompressed images, missing accessibility features, and zero conversion tracking."
      ],
      consequence: "Paying to send traffic to a digital storefront that loses prospects before they ever get in touch."
    },
    deliverables: [
      {
        title: "Bespoke Modern UI/UX Design",
        description: "Tailored visual design system with clear typography, intentional whitespace, strong contrast, and zero generic template feel.",
        tag: "Design"
      },
      {
        title: "Modern Jamstack Engineering",
        description: "Built on Next.js, React, and TypeScript for rapid page loads, static pre-rendering, and enterprise-grade reliability.",
        tag: "Development"
      },
      {
        title: "100% Mobile & Tablet Optimization",
        description: "Every layout, form, button, and interaction designed and tested across modern iOS and Android viewport sizes.",
        tag: "Responsive"
      },
      {
        title: "High-Conversion Form Architecture",
        description: "Friction-reduced enquiry forms featuring client/server validation, spam honeypots, and instant webhook triggers.",
        tag: "Conversion"
      },
      {
        title: "Built-In Technical SEO & Schema",
        description: "Semantic HTML5, automated XML sitemaps, robots.txt, Open Graph preview tags, and structured JSON-LD data.",
        tag: "SEO"
      },
      {
        title: "Analytics & Tracking Wiring",
        description: "Pre-wired Google Analytics 4, Google Tag Manager, and Meta Pixel events for complete visibility on user actions.",
        tag: "Analytics"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Strategy & Information Architecture",
        description: "We map out your core offerings, primary customer journeys, wireframes, and conversion conversion triggers."
      },
      {
        step: "02",
        title: "Design System & Visual Styling",
        description: "We establish the color palette, typography hierarchy, UI components, and layout compositions aligned with your brand."
      },
      {
        step: "03",
        title: "Modern Front-End Engineering",
        description: "We build the application using Next.js and clean CSS, implementing accessible semantic components and fast asset delivery."
      },
      {
        step: "04",
        title: "Form Integrations & Analytics",
        description: "We connect contact forms to your CRM or email, set up honeypot spam filters, and test tracking pixels."
      },
      {
        step: "05",
        title: "Cross-Device QA & Launch",
        description: "We test across Chrome, Safari, iOS, and Android, verify Core Web Vitals, configure custom domains, and deploy to production."
      }
    ],
    suitableFor: [
      {
        title: "Growing Businesses & Agencies",
        reason: "Needing a credible, professional digital presence that reflects their quality of service."
      },
      {
        title: "Campaign & Ad-Driven Companies",
        reason: "Requiring dedicated, fast-loading landing pages with high conversion focus for ad traffic."
      },
      {
        title: "Companies Migrating From Bloated CMSs",
        reason: "Tired of broken WordPress plugins, slow hosting, and recurring maintenance vulnerabilities."
      }
    ],
    demonstration: {
      type: "Sample Website Architecture",
      title: "High-Performance Modern Web Architecture",
      subtitle: "Demonstration of our engineering stack and Core Web Vitals benchmark",
      badge: "Sample Architecture (Demonstration)",
      description: "This sample showcases the technical architecture we deploy: static edge generation, zero layout shifts, and semantic accessibility.",
      flowSteps: [
        { label: "Edge Static Generation", detail: "Pages pre-rendered on edge CDN for instantaneous global TTFB (<100ms)", status: "Edge CDN" },
        { label: "Modern Responsive Layout", detail: "Fluid typography with CSS clamp() and mobile-first container queries", status: "Responsive" },
        { label: "Secure Serverless Forms", detail: "Form submissions validated server-side with honeypot spam protection", status: "Secure" },
        { label: "Core Web Vitals Target", detail: "Lighthouse Performance 95+, Accessibility 100, SEO 100", status: "Audited" }
      ],
      keySpecs: [
        { label: "Core Framework", value: "Next.js (App Router), React, TypeScript" },
        { label: "Styling", value: "Tailwind CSS / Clean Modern CSS Tokens" },
        { label: "Hosting Compatibility", value: "Vercel, Cloudflare Pages, Netlify, Custom Node/Docker" },
        { label: "Asset Optimization", value: "Modern WebP/AVIF images, SVG iconography, zero layout shifts" }
      ]
    },
    faqs: [
      {
        question: "Do I own the website and code after launch?",
        answer: "Yes, 100%. BoldFlow Labs never holds your digital assets hostage. You receive full ownership of the GitHub repository, domain settings, design assets, and hosting accounts."
      },
      {
        question: "How long does a website build take?",
        answer: "A focused business website or high-converting landing page typically takes 2 to 4 weeks from strategy approval to production launch, depending on the number of pages and content readiness."
      },
      {
        question: "Can I update content myself later?",
        answer: "Yes. Depending on your preference, we can integrate a lightweight headless CMS (like Sanity, Strapi, or Decap) or structure clean data files so your team can make updates without touching code."
      },
      {
        question: "Do you build on WordPress or Wix?",
        answer: "We specialize in modern Jamstack frameworks (Next.js, TypeScript, clean modern web stacks) because they deliver vastly superior page load speeds, tighter security, lower hosting costs, and zero plugin breakdown issues compared to traditional WordPress or drag-and-drop builders."
      }
    ],
    disclaimer: "Website timelines depend on timely provision of brand assets, copy reviews, and domain access. Hosting and domain registration fees are paid directly to your chosen provider.",
    category: "Web & SEO",
    accentColor: "#2563FF"
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Google Business Profile & Local SEO",
    tagline: "Local Search Visibility & Review Management",
    heroHeadline: "Dominate Local Search & Win Nearby Customers When They Need You Most",
    shortDescription: "Complete Google Business Profile optimization, local citation consistency, geo-targeted search presence, and review generation systems.",
    longDescription: "When local prospects search for services near them, your business needs to show up prominently with accurate information and compelling reviews. We optimize your Google Business Profile, align NAP citations across directories, and implement systematic review collection workflows.",
    customerProblem: {
      headline: "Why local businesses lose customers to competitors down the street",
      points: [
        "Incomplete or unverified Google Business Profiles missing secondary categories, updated operating hours, and service menus.",
        "Inconsistent NAP (Name, Address, Phone Number) across local business directories that confuses search engine verification algorithms.",
        "No structured process to gather positive reviews from satisfied clients, allowing competitors with higher review counts to win trust.",
        "Zero localized service area pages or geo-tagged imagery to support search visibility in target neighborhoods."
      ],
      consequence: "Losing high-intent local phone calls and direction requests to nearby competitors."
    },
    deliverables: [
      {
        title: "Google Business Profile Audit & Optimization",
        description: "Primary and secondary category selection, keyword-rich business descriptions, services list, and attribute configuration.",
        tag: "GBP Optimization"
      },
      {
        title: "NAP Citation Alignment",
        description: "Standardizing your business Name, Address, and Phone number across primary directories and maps platforms.",
        tag: "Citations"
      },
      {
        title: "Local Review Generation Workflow",
        description: "Automated SMS/WhatsApp workflows sending direct Google review links to happy clients post-service.",
        tag: "Reviews"
      },
      {
        title: "Geo-Targeted Content & Service Areas",
        description: "Configuration of defined service radiuses, local zip codes, and neighborhood-specific service highlights.",
        tag: "Local Content"
      },
      {
        title: "Local Schema Markup Implementation",
        description: "LocalBusiness JSON-LD markup on your website specifying address, coordinates, opening hours, and phone numbers.",
        tag: "Schema"
      },
      {
        title: "Monthly Local Insights Reporting",
        description: "Tracking local search queries, profile views, phone call actions, website clicks, and direction requests.",
        tag: "Reporting"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Local Presence & Profile Audit",
        description: "We audit your existing Google Business Profile, identifying missing attributes, category misalignments, and citation errors."
      },
      {
        step: "02",
        title: "Profile Refinement & Media Uploads",
        description: "We optimize profile descriptions, update high-resolution photos, configure service menus, and clarify service areas."
      },
      {
        step: "03",
        title: "Citation Clean-Up & Synchronization",
        description: "We ensure your business name, address, phone number, and website URL are identical across key directory listings."
      },
      {
        step: "04",
        title: "Review System Deployment",
        description: "We build a simple, friction-free link system to prompt your customers for Google reviews right after a successful project."
      },
      {
        step: "05",
        title: "Ongoing Profile Activity",
        description: "We guide regular Google updates, respond professionally to customer reviews, and monitor monthly call/click metrics."
      }
    ],
    suitableFor: [
      {
        title: "Regional Service Contractors",
        reason: "Plumbers, electricians, builders, and maintenance professionals relying on urgent local calls."
      },
      {
        title: "Clinics, Practices & Consultancies",
        reason: "Doctors, dental clinics, wellness centers, and legal advisors serving patients in specific cities."
      },
      {
        title: "Multi-Location Retail & Brick-and-Mortar",
        reason: "Businesses with one or more physical branches needing uniform local visibility."
      }
    ],
    demonstration: {
      type: "Sample Local SEO Framework",
      title: "Local Search Optimization & Review Funnel",
      subtitle: "Demonstration of our localized directory and customer review workflow",
      badge: "Sample Architecture (Demonstration)",
      description: "This sample illustrates the end-to-end framework used to optimize a local profile and generate authentic Google customer reviews.",
      flowSteps: [
        { label: "1. Profile Integrity", detail: "Audit primary category, service listings, and verified location attributes", status: "Audited" },
        { label: "2. Website Local Schema", detail: "Embed Schema.org LocalBusiness with exact geo-coordinates and telephone", status: "Embedded" },
        { label: "3. Service Completion Trigger", detail: "Automated trigger fires when an invoice is marked paid or service completed", status: "Triggered" },
        { label: "4. Direct Review Link", detail: "Polite message with 1-click Google review shortlink sent to customer", status: "Delivered" }
      ],
      keySpecs: [
        { label: "Platforms Covered", value: "Google Business Profile, Google Maps, Apple Maps, Bing Places" },
        { label: "Review Policy", value: "100% compliant with Google's review guidelines (no review gating or incentives)" },
        { label: "Reporting Metrics", value: "Calls, Direction requests, Website clicks, Search impressions" },
        { label: "Schema Format", value: "Valid Schema.org/LocalBusiness JSON-LD" }
      ]
    },
    faqs: [
      {
        question: "Do you guarantee our business will appear in the top 3 'Map Pack'?",
        answer: "No. Google's local algorithm determines Map Pack rankings based on relevance, distance (proximity to the searcher), and prominence (reviews, citations, authority). Proximity is physical and uncontrollable. We guarantee complete profile optimization, category alignment, review generation infrastructure, and citation consistency."
      },
      {
        question: "Can we incentivize or buy positive Google reviews?",
        answer: "No. Buying reviews or offering discounts in exchange for positive reviews explicitly violates Google's policies and risks having your profile suspended. We implement genuine, friction-free follow-up workflows that make it effortless for your actual happy clients to leave authentic reviews."
      },
      {
        question: "What if our business does not have a physical storefront?",
        answer: "If you travel to clients or deliver services at their location, Google allows 'Service Area Businesses' (SAB) where your physical address is hidden, and you define the cities and zip codes you serve. We configure this properly to protect your privacy."
      },
      {
        question: "How long does it take for Google Business Profile updates to reflect?",
        answer: "Most profile text edits and photo uploads update within 10 minutes to 48 hours. Meaningful improvements in local search visibility and map impressions typically compound over 4 to 8 weeks as review signals and citation consistency solidify."
      }
    ],
    disclaimer: "Google Maps and local search positions depend on Google's proprietary algorithms, searcher location, and competition. BoldFlow Labs does not guarantee specific map pack rankings.",
    category: "Web & SEO",
    accentColor: "#06B6D4"
  },
  {
    id: "business-automation-crm",
    slug: "business-automation-crm",
    title: "Business Automation & CRM",
    tagline: "Streamline Lead Management & Repetitive Workflows",
    heroHeadline: "Connect Your Tools, Automate Follow-Ups, and Eliminate Manual Chaos",
    shortDescription: "Custom CRM setup, pipeline configuration, webhook integrations, and automated lead routing between your sales, marketing, and operational tools.",
    longDescription: "Stop losing leads in messy spreadsheets and manual email handoffs. We build connected business backends using modern CRM platforms and automation tools that instantly capture inquiries, route tasks to your team, trigger follow-ups, and keep pipelines clean.",
    customerProblem: {
      headline: "The operational drag of disconnected tools and manual work",
      points: [
        "Inquiries coming from website forms, ad campaigns, and emails end up in different inboxes with no central tracking.",
        "Sales reps spending 2+ hours every day manually copying contact details into spreadsheets instead of talking to prospects.",
        "Zero automated follow-up sequences: if a lead doesn't reply to the first email, they are forgotten forever.",
        "Management has zero visibility into pipeline stages, conversion bottlenecks, or true deal values."
      ],
      consequence: "Valuable leads slip through the cracks, response times drag, and operational overhead balloons."
    },
    deliverables: [
      {
        title: "CRM Setup & Custom Pipeline Architecture",
        description: "Configuration of HubSpot, Zoho CRM, or custom lightweight CRM systems with custom fields, deal stages, and lifecycle statuses.",
        tag: "CRM Architecture"
      },
      {
        title: "Multi-Source Lead Capture & Normalization",
        description: "Instant webhooks connecting website forms, ad leads, and WhatsApp chats into unified contact records.",
        tag: "Data Ingestion"
      },
      {
        title: "Automated Lead Routing & Notifications",
        description: "Round-robin sales rep assignment, instant Slack/WhatsApp team alerts, and high-priority lead tagging.",
        tag: "Routing"
      },
      {
        title: "Multi-Step Nurture & Follow-Up Sequences",
        description: "Automated email and SMS sequences triggered when leads enter specific deal stages or fail to respond.",
        tag: "Nurture"
      },
      {
        title: "Tool Integration via n8n / Make / Webhooks",
        description: "Connecting compatible tools (billing, calendar, forms, internal databases) with robust error logging.",
        tag: "Integration"
      },
      {
        title: "Operational Dashboard & Health Reports",
        description: "Clear pipeline view showing conversion velocities, bottleneck stages, and weekly pipeline volume.",
        tag: "Reporting"
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Operational Workflow Mapping",
        description: "We audit how leads currently enter your business, how your team handles them, where bottlenecks occur, and what tools are in play."
      },
      {
        step: "02",
        title: "Data Schema & Pipeline Design",
        description: "We define clean contact properties, deal stages, mandatory qualification fields, and automated transition rules."
      },
      {
        step: "03",
        title: "CRM & Automation Engineering",
        description: "We configure your CRM, set up webhooks, build automation logic (via n8n/Make/Zapier), and test data integrity."
      },
      {
        step: "04",
        title: "End-to-End Stress Testing",
        description: "We test test leads through every scenario: missing data, duplicate submissions, edge cases, and notification triggers."
      },
      {
        step: "05",
        title: "Team Onboarding & Standard Operating Procedures",
        description: "We document the workflows and train your team on pipeline hygiene so everyone follows the same efficient process."
      }
    ],
    suitableFor: [
      {
        title: "B2B Sales & Consulting Teams",
        reason: "Needing disciplined lead tracking and automated follow-ups across multi-week sales cycles."
      },
      {
        title: "Service Companies Managing Multiple Inquiries",
        reason: "Looking to route customer inquiries to the right team members instantly without manual triage."
      },
      {
        title: "Growing Businesses Outgrowing Spreadsheets",
        reason: "Ready for an institutional system that provides clear visibility into deal values and conversion rates."
      }
    ],
    demonstration: {
      type: "Sample Automation Pipeline",
      title: "Closed-Loop Lead-to-CRM Routing Pipeline",
      subtitle: "Demonstration of automated data synchronization across marketing and sales tools",
      badge: "Sample Architecture (Demonstration)",
      description: "This sample showcases the exact multi-system pipeline that takes a raw website form submit and converts it into an actionable CRM deal within 3 seconds.",
      flowSteps: [
        { label: "Step 1: Inbound Lead Submission", detail: "Form submitted on website or ad with UTM parameters", status: "Triggered" },
        { label: "Step 2: Webhook Ingestion & Validation", detail: "n8n / Make webhook validates email format, sanitizes inputs, and checks duplicates", status: "Validated" },
        { label: "Step 3: CRM Record & Deal Creation", detail: "Creates/updates contact in CRM with lead score and assigns round-robin rep", status: "Created" },
        { label: "Step 4: Instant Team & Client Alerts", detail: "Dispatches Slack notification to sales rep + sends instant confirmation to customer", status: "Dispatched" }
      ],
      keySpecs: [
        { label: "Supported CRMs", value: "HubSpot, Zoho CRM, LeadSquared, Pipedrive, Airtable" },
        { label: "Automation Platforms", value: "n8n (Self-hosted or Cloud), Make.com, Custom Webhooks" },
        { label: "Latency", value: "< 3 seconds end-to-end sync time" },
        { label: "Ownership", value: "Client retains full admin ownership of all accounts and workflows" }
      ]
    },
    faqs: [
      {
        question: "Do we need an expensive enterprise CRM subscription?",
        answer: "No. We select and configure the right CRM for your actual business scale and budget. Many businesses can operate effectively using free tiers of HubSpot, Zoho, or lightweight Airtable setups before ever needing expensive enterprise tiers."
      },
      {
        question: "What happens if a webhook fails or an API is down?",
        answer: "We engineer automations with error-handling logic, automatic retry queues, and notification alerts that notify us immediately if an external service encounters downtime, preventing lost data."
      },
      {
        question: "Do we have to rebuild our existing tools?",
        answer: "Usually not. Our goal is to connect and streamline your existing compatible tools (Google Workspace, Calendly, WhatsApp, existing website forms) rather than forcing you onto an entirely new stack unless your current system is obsolete."
      },
      {
        question: "Who owns the automation workflows after they are built?",
        answer: "You own 100% of the workflows, accounts, and credentials. BoldFlow Labs builds the systems inside your accounts, with complete documentation provided upon handoff."
      }
    ],
    disclaimer: "Automation reliability depends on third-party API availability, rate limits, and plan tier limits of the integrated software tools.",
    category: "Automation",
    accentColor: "#2563FF"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
