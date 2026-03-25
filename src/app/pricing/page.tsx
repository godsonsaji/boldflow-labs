import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { FadeUp } from '@/components/AnimationWrappers';
import { PricingCards, FAQAccordion } from '@/components/PricingInteractive';

export const metadata: Metadata = {
  title: 'AI Architecture Pricing | BoldFlow Labs',
  description: 'Transparent AI system deployment pricing. One-time build fee + predictable maintenance. No hidden costs.',
};

export const plans = [
    {
        name: "Starter Architecture",
        tagline: "Initial Velocity",
        bestFor: "Solopreneurs & local businesses validating automation.",
        oneTimeSetup: "$997",
        monthlyMaintenance: "$497 / month",
        setupIncludes: [
            "1 Core Automation (Lead Follow-up, Support Bot, or Booking)",
            "Up to 3 API integrations",
            "Basic system logging",
            "1-week sprint delivery"
        ],
        atAGlance: "1 Core System · 3 Integrations · 1-Week Sprint",
        ctaButton: "Initialize Starter",
        popular: false
    },
    {
        name: "Growth Architecture",
        tagline: "Intelligent Scale",
        bestFor: "Growing SMBs & agencies requiring deeper integrated systems.",
        badge: "Recommended Architecture",
        popular: true,
        oneTimeSetup: "$2,500",
        monthlyMaintenance: "$997 / month",
        setupIncludes: [
            "3 Interconnected Systems (e.g. Bot + CRM + Routing)",
            "Full CRM data pipeline setup",
            "Monthly performance & telemetry dashboard",
            "Priority Slack Connect channel",
            "3-week sprint delivery"
        ],
        atAGlance: "3 Core Systems · CRM Pipeline · Telemetry · 3-Week Sprint",
        ctaButton: "Initialize Growth"
    },
    {
        name: "Enterprise Ecosystem",
        tagline: "Full-Stack Autonomy",
        bestFor: "Established operations needing complete end-to-end operational automation.",
        oneTimeSetup: "$6,000+",
        monthlyMaintenance: "$2,500+ / month",
        isEnterprise: true,
        setupIncludes: [
            "Bespoke multi-agent workflows handling complex reasoning tasks",
            "Deploy all 6 core system endpoints simultaneously",
            "Real-time centralized BI dashboard",
            "Custom LLM routing and fine-tuning if required",
            "Quarterly full-system audits and optimizations",
            "4-6 week sprint delivery with dedicated architect"
        ],
        atAGlance: "Unlimited Systems · Custom Agents · BI Dashboard · Dedicated Architect",
        ctaButton: "Request Enterprise Specs"
    }
];

export const faqs = [
    {
        q: "Why is there a setup fee and a separate monthly retainer?",
        a: "The setup fee covers the full cost of building your automation systems — the discovery, architecture, integrations, testing, and deployment. The monthly retainer covers what happens after: monitoring, maintenance, performance reviews, and ongoing optimisation. Separating the two keeps things honest — you're not paying a bloated monthly fee that hides the real cost of the build."
    },
    {
        q: "Do I have to commit to the monthly retainer?",
        a: "The monthly retainer is optional, but strongly recommended. Without it, your systems will continue to run, but you won't have proactive monitoring, performance reporting, or priority access to make adjustments as your business evolves."
    },
    {
        q: "What's the difference between Starter and Growth Architecture?",
        a: "The Starter Architecture is built around a single, focused automation — one clear win, deployed quickly. Growth bundles three interconnected automations (e.g. chatbot, lead follow-up, and appointment booking) into a unified system with full CRM data sync."
    },
    {
        q: "Can I upgrade my plan after getting started?",
        a: "Yes. Many clients start on Starter to validate value, then upgrade. We structure upgrades so that the work already done isn't wasted — your initial systems operate as nodes within the new expanded architecture."
    },
    {
        q: "How long does the deployment take?",
        a: "Build windows are outlined in each plan: 1 week for Starter, 3 weeks for Growth, and 4-6 weeks for Enterprise. These timelines are strictly enforced and assume timely access to your platforms and feedback."
    }
];

export default function PricingPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none mix-blend-screen z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#00a2ff] mb-4">
                            {"//"} System Deployment Models
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-6 tracking-tighter">
                            Predictable Pricing.<br/> 
                            <span className="text-[#A1A1AA] italic font-serif">Infinite Scale.</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-[#71717A] max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                            Every BoldFlow Labs engagement follows a strict engineering model: a one-time build fee to architect your systems, and a straightforward monthly maintenance retainer to ensure runtime stability and optimization.
                        </p>
                        <div className="inline-flex px-4 py-2 bg-[#111] border border-[#1A1A1A] rounded-[2px]">
                            <p className="text-[11px] font-mono text-[#00a2ff]">
                                INITIAL BUILD FROM $997 · RUNTIME FROM $497/MO 
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 border-b border-[#1A1A1A] bg-[#030303]">
                <div className="max-w-7xl mx-auto px-6">
                    <PricingCards plans={plans} />
                </div>
            </section>

            <section className="py-32 border-b border-[#1A1A1A] bg-[#050505]">
                <div className="max-w-3xl mx-auto px-6">
                    <FadeUp className="mb-16">
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] mb-4">
                            {"//"} Knowledge Base
                        </p>
                        <h2 className="text-3xl font-medium tracking-tight text-white">
                            System FAQ
                        </h2>
                    </FadeUp>
                    <FadeUp custom={2}>
                        <FAQAccordion faqs={faqs} />
                    </FadeUp>
                </div>
            </section>

            <section className="py-40 relative overflow-hidden bg-[#0A0A0A] text-center border-t border-[#1A1A1A]">
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <Code2 className="w-8 h-8 text-[#00a2ff] mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Define Your Parameters
                    </h2>
                    <p className="text-[#A1A1AA] mb-10 text-lg font-light">
                        Book a 20-minute diagnostic. Tell us where your workflow breaks down, and we&apos;ll draft the architecture that eliminates it.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
                    >
                        Schedule Diagnostic
                    </Link>
                </div>
            </section>
        </>
    );
}
