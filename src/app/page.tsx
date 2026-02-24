import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Workflow,
  BarChart3,
  Sparkles,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  Target,
  UserCheck,
} from "lucide-react";
import {
  FadeUp,
  SlideLeft,
  SlideRight,
  SpinningRings,
  FloatingNode,
} from "@/components/AnimationWrappers";

export const metadata: Metadata = {
  title: "BoldFlow Labs | AI Automation Agency — Workflow Automation & Intelligent Systems",
  description:
    "BoldFlow Labs designs and deploys custom AI automation systems — from intelligent chatbots and workflow pipelines to predictive analytics and bespoke AI models.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BoldFlow Labs | AI Automation Agency — Workflow Automation & Intelligent Systems",
    description:
      "BoldFlow Labs designs and deploys custom AI automation systems engineered specifically around how your business operates.",
    url: "/",
  },
};

const features = [
  {
    icon: Bot,
    title: "AI Chatbots & Conversational Agents",
    description:
      "Deploy AI-powered agents that handle multi-turn conversations, qualify leads, resolve support queries, and integrate directly with your CRM — 24/7, without additional headcount.",
    benefits: [
      "24/7 customer engagement without scaling your support team",
      "Faster lead qualification and seamless handoff to sales",
      "Reduced support volume and lower cost per interaction",
      "Consistent brand voice across every customer touchpoint",
    ],
    label: "01",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    description:
      "We map your existing processes, identify high-impact automation opportunities, and build smart pipelines that eliminate manual errors, reduce delays, and scale alongside your team.",
    benefits: [
      "Automated data flows between your CRM, ERP, and operational tools",
      "Elimination of manual entry errors and processing delays",
      "Scalable systems that adapt as your business evolves",
      "More time for your team to focus on high-value, strategic work",
    ],
    label: "02",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & AI-Powered Insights",
    description:
      "Turn raw operational data into clear intelligence. We build forecasting models and real-time dashboards that help you anticipate demand, spot risks early, and make confident decisions faster.",
    benefits: [
      "Real-time operational dashboards tailored to your KPIs",
      "Demand forecasting models to reduce waste and improve planning",
      "Pattern recognition to surface opportunities and flag risks early",
      "Data infrastructure built to grow with your reporting needs",
    ],
    label: "03",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions & Model Development",
    description:
      "When off-the-shelf tools fall short, we build proprietary AI models trained on your data — giving you competitive differentiation and full ownership of your intelligence layer.",
    benefits: [
      "AI solutions designed specifically for your industry and use case",
      "Competitive differentiation through proprietary intelligence",
      "Full ownership of your models, data, and outputs",
      "Ongoing refinement and performance optimization post-deployment",
    ],
    label: "04",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Security-First Architecture",
    desc: "Enterprise-grade encryption, access controls, and data handling protocols from day one — not as an afterthought.",
  },
  {
    icon: Clock,
    title: "Fast Time to Value",
    desc: "Milestone-driven sprints that deliver working systems in weeks, not months. We build for speed and durability.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Focused Delivery",
    desc: "Clearly defined KPIs and shared accountability for results. We measure success by the impact on your operations.",
  },
  {
    icon: Users,
    title: "Dedicated Automation Engineer",
    desc: "One point of contact across every phase of your project. Direct access, clear communication, and no ticket queues.",
  },
  {
    icon: Zap,
    title: "Modern AI Stack",
    desc: "LLMs, agentic frameworks, vector databases, and ML infrastructure selected for durability, scale, and performance.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Optimization",
    desc: "Post-launch monitoring and continuous improvement cycles, because deployed AI needs to evolve alongside your business.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BoldFlow Labs",
            url: "https://boldflowlabs.com",
            description:
              "BroadFlow Labs designs and deploys custom AI automation systems that eliminate operational bottlenecks and drive growth.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://boldflowlabs.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* ── Hero Section ──────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
        aria-label="Hero — AI Automation Agency"
      >
        {/* Background Effects */}
        <div className="orb orb-blue w-[700px] h-[700px] -top-60 -left-60 opacity-30" aria-hidden="true" />
        <div className="orb orb-cyan w-[500px] h-[500px] bottom-[-200px] right-[-100px] opacity-20" aria-hidden="true" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(0,162,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <SlideLeft custom={1} viewport={false}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
                  <span className="text-white">Intelligent AI</span>
                  <br />
                  <span className="shimmer-text">Automation Systems,</span>
                  <br />
                  <span className="text-white">Built for Growth</span>
                </h1>
              </SlideLeft>

              <SlideLeft custom={2} viewport={false}>
                <p className="text-base md:text-xl text-gray-300 max-w-lg mb-6 leading-relaxed font-medium">
                  Built to Eliminate Friction and Unlock Growth
                </p>
              </SlideLeft>

              <SlideLeft custom={2.5} viewport={false}>
                <div className="space-y-4 text-gray-400 max-w-lg mb-10 leading-relaxed text-sm">
                  <p>
                    Most businesses aren&apos;t losing to competitors — they&apos;re losing to inefficiency. Manual workflows, disconnected tools, and reactive decision-making quietly drain time, money, and momentum every single day.
                  </p>
                  <p className="text-white/90">
                    BoldFlow Labs exists to change that.
                  </p>
                  <p>
                    We design and deploy custom AI automation systems engineered specifically around how your business operates, not how a template assumes it does.
                  </p>
                </div>
              </SlideLeft>

              <SlideLeft custom={3} viewport={false} className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-gray-400 text-sm font-semibold btn-outline transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </SlideLeft>
            </div>

            {/* Right — Abstract Geometric Art */}
            <SlideRight custom={1} viewport={false} className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <SpinningRings />
                {/* Center orb */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 backdrop-blur-sm animate-glow-pulse" />

                {/* Floating nodes */}
                <FloatingNode delay={0} style={{ top: "5%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <Bot className="w-4 h-4 text-[#00a2ff]" />
                </FloatingNode>
                <FloatingNode delay={1} style={{ top: "50%", right: "0%", transform: "translate(-50%, -50%)" }}>
                  <Sparkles className="w-4 h-4 text-[#00a2ff]" />
                </FloatingNode>
                <FloatingNode delay={2} style={{ bottom: "5%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <BarChart3 className="w-4 h-4 text-[#00a2ff]" />
                </FloatingNode>
                <FloatingNode delay={3} style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)" }}>
                  <Workflow className="w-4 h-4 text-[#00a2ff]" />
                </FloatingNode>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── Trust Signal ──────────────────────────── */}
      <section className="py-10 border-y border-white/[0.03] relative overflow-hidden" aria-label="Trust signal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp custom={0}>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
              A new kind of automation agency — built from the ground up on{" "}
              <span className="text-gray-300 font-medium not-italic">transparency</span>,{" "}
              <span className="text-gray-300 font-medium not-italic">technical rigor</span>, and a genuine obsession with{" "}
              <span className="text-gray-300 font-medium not-italic">outcomes</span>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Features — Bento Grid ─────────────────── */}
      <section className="section-padding relative" aria-label="Our AI automation services">
        <div className="max-w-7xl mx-auto">
          <FadeUp custom={0} className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-lg">
              End-to-End AI Automation Services for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-gray-300 max-w-xl text-base">
              Every solution we build starts with one question: where is friction costing you the most? From there, we architect intelligent, scalable systems that connect your tools, automate your processes, and surface insights your team can actually act on.
            </p>
          </FadeUp>

          <div className="bento-grid">
            {features.map((feature, i) => (
              <FadeUp
                key={feature.title}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative glass glass-hover rounded-2xl p-8 transition-all duration-300 card-interactive overflow-hidden"
              >
                {/* Watermark label */}
                <span className="absolute top-4 right-6 text-[5rem] font-black leading-none bg-gradient-to-b from-[#0066ff]/[0.06] to-transparent bg-clip-text text-transparent select-none pointer-events-none" aria-hidden="true">
                  {feature.label}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066ff]/15 to-[#00d4ff]/10 flex items-center justify-center mb-5 group-hover:from-[#0066ff]/25 group-hover:to-[#00d4ff]/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-[#00a2ff] icon-hover-spin" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#00a2ff]/50 font-semibold mb-2">
                    What this means for you
                  </p>
                  <ul className="space-y-1.5">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-[#00a2ff]/50 mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — Alternating Steps ────── */}
      <section className="section-padding" aria-label="Why choose BoldFlow Labs">
        <div className="max-w-7xl mx-auto">
          <FadeUp custom={0} className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
              Why BoldFlow Labs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              A Different Kind of <span className="gradient-text">AI Automation Partner</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-lg mt-4">
              We don&apos;t just deploy tools — we take accountability for outcomes.
            </p>
          </FadeUp>

          <div className="space-y-0">
            {whyChooseUs.map((item, i) => {
              const Wrapper = i % 2 === 0 ? SlideLeft : SlideRight;
              return (
                <Wrapper key={item.title} custom={0} className="step-line">
                  <div
                    className={`flex items-start gap-6 py-8 ${i % 2 === 0 ? "" : "lg:flex-row-reverse lg:text-right"}`}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0066ff]/10 border border-[#00a2ff]/15 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#00a2ff]" />
                    </div>
                    <div className="max-w-lg">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold" aria-hidden="true">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Process — Methodology ─────────────── */}
      <section className="section-padding relative overflow-hidden" aria-label="Our four-phase methodology">
        {/* Subtle background accent */}
        <div className="orb orb-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp custom={0} className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto">
              A Four-Phase Framework That{" "}
              <span className="gradient-text">Eliminates Guesswork</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
              AI automation fails when it&apos;s deployed without context. Our structured methodology ensures every solution we build is grounded in your actual operations — not a generic template applied to your problem.
            </p>
          </FadeUp>

          {/* Phase Timeline */}
          <div className="relative">
            {/* Connecting vertical line */}
            <div className="absolute left-[23px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#0066ff]/30 via-[#00d4ff]/20 to-transparent" aria-hidden="true" />

            {/* Phase 1 */}
            <SlideLeft custom={0} className="relative mb-16 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                {/* Left content */}
                <div className="lg:w-1/2 lg:text-right lg:pr-12 order-2 lg:order-1 pl-16 lg:pl-0">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold">
                    Phase 1  ·  Week 1–2
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Discovery & Diagnostic
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We audit your current workflows, map automation opportunities, quantify potential impact, and document technical requirements — delivering a clear roadmap whether or not you move forward with us.
                  </p>
                </div>
                {/* Center node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00a2ff] flex items-center justify-center shadow-lg shadow-[#0066ff]/20 z-10 order-1 lg:order-2">
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                {/* Right spacer */}
                <div className="lg:w-1/2 order-3 hidden lg:block" />
              </div>
            </SlideLeft>

            {/* Phase 2 */}
            <SlideRight custom={0} className="relative mb-16 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                {/* Left spacer */}
                <div className="lg:w-1/2 order-1 hidden lg:block" />
                {/* Center node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00a2ff] flex items-center justify-center shadow-lg shadow-[#0066ff]/20 z-10 order-1 lg:order-2">
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                {/* Right content */}
                <div className="lg:w-1/2 lg:pl-12 order-2 lg:order-3 pl-16 lg:pl-12">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold">
                    Phase 2  ·  Week 2–3
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Architecture & Design
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Full system design — data flows, integration schemas, security protocols, and modular architecture — reviewed and approved by you before a single line of code is written.
                  </p>
                </div>
              </div>
            </SlideRight>

            {/* Phase 3 */}
            <SlideLeft custom={0} className="relative mb-16 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                {/* Left content */}
                <div className="lg:w-1/2 lg:text-right lg:pr-12 order-2 lg:order-1 pl-16 lg:pl-0">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold">
                    Phase 3  ·  Week 3–6
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Build, Test & Iterate
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tight development sprints with working deliverables at each stage. You see progress early and often — not just at the finish line. Every sprint ends with a review and feedback loop.
                  </p>
                </div>
                {/* Center node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00a2ff] flex items-center justify-center shadow-lg shadow-[#0066ff]/20 z-10 order-1 lg:order-2">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                {/* Right spacer */}
                <div className="lg:w-1/2 order-3 hidden lg:block" />
              </div>
            </SlideLeft>

            {/* Phase 4 */}
            <SlideRight custom={0} className="relative">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                {/* Left spacer */}
                <div className="lg:w-1/2 order-1 hidden lg:block" />
                {/* Center node */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00a2ff] flex items-center justify-center shadow-lg shadow-[#0066ff]/20 z-10 order-1 lg:order-2">
                  <span className="text-white font-bold text-sm">04</span>
                </div>
                {/* Right content */}
                <div className="lg:w-1/2 lg:pl-12 order-2 lg:order-3 pl-16 lg:pl-12">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold">
                    Phase 4  ·  Ongoing
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Deploy, Monitor & Optimize
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Go-live is a milestone, not a finish line. We manage deployment, monitor performance in real time, and run continuous optimization cycles to ensure your automation delivers compounding ROI over time.
                  </p>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── CTA Section — Full Bleed ─────────────── */}
      <section
        className="relative overflow-hidden noise-overlay"
        style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(0,0,0,1) 50%, rgba(0,212,255,0.04) 100%)" }}
        aria-label="Call to action"
      >
        <div className="orb orb-blue w-[600px] h-[600px] -bottom-60 -left-60 opacity-25" aria-hidden="true" />
        <div className="orb orb-cyan w-[400px] h-[400px] -top-40 -right-40 opacity-15" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10 py-28 px-4">
          <FadeUp custom={0}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Automate What&apos;s{" "}
              <span className="shimmer-text">Slowing You Down?</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy session. We&apos;ll review your current workflows, pinpoint your highest-impact automation opportunities, and give you an honest, actionable picture of what&apos;s possible — no obligation, no pressure.
            </p>

            {/* Supporting points */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#00a2ff]/60" />
                Free, no-obligation workflow diagnostic
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#00a2ff]/60" />
                Actionable clarity you keep, regardless of next steps
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#00a2ff]/60" />
                Limited spots available each quarter
              </div>
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
