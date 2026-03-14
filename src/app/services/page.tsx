import type { Metadata } from "next";
import Link from "next/link";
import {
    Users,
    Bot,
    Calendar,
    Share2,
    BarChart3,
    Workflow,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
    title: "AI Automation Services | BoldFlow Labs — CRM, Chatbots, Scheduling & More",
    description:
        "BoldFlow Labs designs and deploys intelligent AI automation systems — from lead follow-up and CRM automation to AI chatbots, appointment booking, social media, reporting dashboards, and custom AI voice agents. Built for businesses ready to scale.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "AI Automation Services | BoldFlow Labs — CRM, Chatbots, Scheduling & More",
        description:
            "BoldFlow Labs designs and deploys intelligent AI automation systems — from lead follow-up and CRM automation to AI chatbots, appointment booking, social media, reporting dashboards, and custom AI voice agents. Built for businesses ready to scale.",
        url: "/services",
    },
};const services = [
    {
        icon: Users,
        title: "AI-Powered Lead Follow-Up & CRM Automation",
        subtitle: "Never Let a Hot Lead Go Cold Again",
        description:
            "Most businesses lose potential revenue not because their product is wrong — but because follow-up is slow, inconsistent, or forgotten entirely. Manual lead management is one of the highest-cost inefficiencies in modern sales operations. We build intelligent lead follow-up systems that automatically engage new enquiries the moment they come in, nurture prospects through multi-step sequences, update your CRM in real time, and escalate sales-ready leads to your team — without anyone lifting a finger.",
        features: [
            "Instant, automated responses to new leads across email, SMS, and messaging platforms",
            "Smart follow-up sequences that adapt based on prospect behaviour and engagement signals",
            "Automatic CRM data entry, tagging, pipeline stage updates, and task creation",
            "Lead scoring logic that prioritises your team's attention on the highest-value opportunities",
            "Full integration with tools like HubSpot, Salesforce, GoHighLevel, Pipedrive, and more",
        ],
    },
    {
        icon: Bot,
        title: "AI Chatbot & Customer Support Automation",
        subtitle: "24/7 Customer Engagement — Without Expanding Your Team",
        description:
            "Your customers don't work business hours. Your support workload shouldn't have to either. We design and deploy AI-powered chatbots and conversational agents that handle real customer interactions — resolving queries, capturing leads, qualifying prospects, and escalating complex issues to your human team — around the clock, across every channel. These aren't generic FAQ bots. They're purpose-built agents trained on your business, your tone, and your processes — delivering consistent, on-brand experiences at every touchpoint.",
        features: [
            "Intelligent chatbot deployment across your website, WhatsApp, Instagram, and other platforms",
            "Automated handling of FAQs, product queries, order tracking, and common support requests",
            "Lead capture and qualification flows embedded directly within conversations",
            "Seamless human handoff logic when escalation is needed",
            "CRM integration so every interaction is logged, tracked, and actionable",
        ],
    },
    {
        icon: Calendar,
        title: "Automated Appointment Booking & Reminder Systems",
        subtitle: "Fill Your Calendar Automatically. Eliminate No-Shows.",
        description:
            "Manually coordinating appointments is a time drain that no growing business can afford. Between back-and-forth scheduling, missed confirmations, and last-minute no-shows, the hidden cost of unautomated booking systems is significant. We build end-to-end automated scheduling systems that let prospects and clients book appointments instantly — and keep them engaged with smart, multi-channel reminders that dramatically reduce cancellations and no-shows.",
        features: [
            "Automated booking flows integrated with Calendly, Google Calendar, Cal.com, or custom systems",
            "Multi-channel confirmation and reminder sequences via email, SMS, and WhatsApp",
            "Pre-appointment intake forms that collect information before the meeting begins",
            "Rescheduling and cancellation handling — fully automated, no manual intervention needed",
            "Post-appointment follow-up sequences to drive reviews, rebooking, or next steps",
        ],
    },
    {
        icon: Share2,
        title: "Social Media & Content Automation",
        subtitle: "Consistent Presence. Zero Manual Posting.",
        description:
            "Maintaining an active, consistent social media presence is critical for visibility — but it shouldn't consume your team's time or attention. We design content automation systems that keep your brand active across platforms, repurpose existing content intelligently, and schedule posts for maximum reach — all without daily manual effort. Combined with AI-assisted content generation, your business can show up professionally and consistently online without building an in-house content team.",
        features: [
            "Automated content scheduling and cross-platform publishing (LinkedIn, Instagram, Facebook, X, and more)",
            "AI-assisted content drafting and repurposing pipelines built around your brand voice",
            "Content calendar automation that pulls from blogs, offers, and campaign assets",
            "Performance-based scheduling that posts at optimal engagement windows",
            "Integration with tools like Buffer, Hootsuite, Make, and Zapier for seamless workflow management",
        ],
    },
    {
        icon: BarChart3,
        title: "Automated Reporting & Business Dashboards",
        subtitle: "Real-Time Intelligence. No More Manual Reporting.",
        description:
            "Decision-making slows down when the data leaders need is buried in spreadsheets, scattered across tools, or only available after someone spends hours compiling it. We build automated reporting systems and real-time operational dashboards that surface the metrics that matter — the moment they change. Whether you need a live sales performance view, a marketing attribution report, or an operational KPI tracker, we engineer the data infrastructure and visualisation layer that keeps your team informed and your decisions grounded in reality.",
        features: [
            "Automated data aggregation from CRMs, ad platforms, finance tools, and operational systems",
            "Custom real-time dashboards built to your specific KPIs and reporting needs",
            "Scheduled automated reports delivered to key stakeholders via email or Slack",
            "Elimination of manual spreadsheet updates, copy-paste reporting, and data inconsistencies",
            "Scalable data infrastructure designed to grow as your reporting complexity increases",
        ],
    },
    {
        icon: Workflow,
        title: "Custom AI Workflows & AI Voice Agents",
        subtitle: "When Off-the-Shelf Automation Isn't Enough",
        description:
            "Some business challenges are too specific, too complex, or too strategically important to be solved with a generic automation template. For these, we build fully custom AI workflows and intelligent voice agents engineered from the ground up around your exact operations, data, and objectives. From AI voice agents that handle inbound calls and outbound follow-up, to multi-step intelligent workflows that orchestrate decisions across your entire tech stack — this is where BoldFlow Labs operates at the frontier of what AI automation can deliver.",
        features: [
            "Custom AI voice agents that handle inbound enquiries, outbound follow-up, and appointment confirmation via phone",
            "Proprietary multi-step AI workflows that automate complex, multi-system business processes",
            "Agentic AI systems capable of reasoning, deciding, and acting across tools without human input",
            "Full ownership of your automation logic, models, and data — no vendor lock-in",
            "Ongoing refinement and performance optimisation post-deployment, as your business evolves",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* JSON-LD Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        provider: {
                            "@type": "Organization",
                            name: "BoldFlow Labs",
                        },
                        name: "AI Automation Services",
                        description:
                            "Enterprise AI automation services including chatbots, workflow automation, predictive analytics, and custom AI solutions.",
                        serviceType: "AI Automation",
                        areaServed: "Worldwide",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "AI Services",
                            itemListElement: services.map((service, i) => ({
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: service.title,
                                    description: service.description,
                                },
                                position: i + 1,
                            })),
                        },
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Services overview">
                <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-20" aria-hidden="true" />
                <div className="watermark-number top-16 -right-10" aria-hidden="true">AI</div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <FadeUp custom={0} viewport={false}>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                                What We Build
                            </p>
                        </FadeUp>
                        <FadeUp custom={1} viewport={false}>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                Stop Doing Manually What{" "}
                                <span className="shimmer-text">Intelligent Systems</span> Can Do Better
                            </h1>
                        </FadeUp>
                        <FadeUp custom={2} viewport={false}>
                            <p className="text-base text-gray-300 max-w-2xl">
                                Every service we design starts with a single question: where is repetitive, manual work quietly costing your business time, money, and momentum? From AI-powered lead follow-up to fully custom voice agents, BoldFlow Labs engineers automation that fits the way your business actually operates — not how a template assumes it does.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Services — Accordion List */}
            <section className="section-padding pt-0" aria-label="Detailed service offerings">
                <div className="max-w-5xl mx-auto">
                    {services.map((service, i) => (
                        <FadeUp key={service.title} custom={i}>
                            <ServiceCard
                                index={i}
                                icon={<service.icon className="w-5 h-5 text-[#00a2ff]" />}
                                title={service.title}
                                subtitle={service.subtitle}
                                description={service.description}
                                features={service.features}
                            />
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Get started with a free assessment">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Automate What&apos;s{" "}
                            <span className="shimmer-text">Slowing You Down?</span>
                        </h2>
                        <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
                            Book a free 30-minute strategy session. We&apos;ll map your current workflows, identify your highest-impact automation opportunities, and give you a clear, honest picture of what&apos;s possible — no obligation, no pressure, no generic proposals.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-2 mb-10 text-sm text-gray-400">
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00a2ff]" /> Free, no-obligation workflow diagnostic</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00a2ff]" /> Actionable clarity you keep — regardless of next steps</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00a2ff]" /> Limited discovery spots available each quarter</div>
                        </div>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Schedule Your Free Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
