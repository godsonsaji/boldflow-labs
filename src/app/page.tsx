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
    "BoldFlow Labs is a specialist AI automation agency designing intelligent workflow systems that eliminate operational friction and drive measurable business growth. Book a free strategy call today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BoldFlow Labs | AI Automation Agency — Workflow Automation & Intelligent Systems",
    description:
      "BoldFlow Labs is a specialist AI automation agency designing intelligent workflow systems that eliminate operational friction and drive measurable business growth.",
    url: "/",
  },
};

const features = [
  {
    icon: Bot,
    title: "AI Chatbots & Conversational Agents",
    description:
      "Your customers expect instant, accurate, and consistent support — around the clock. We design and deploy AI-powered conversational agents that go beyond simple FAQ bots. Our systems handle complex multi-turn conversations, qualify inbound leads, triage support tickets, and integrate seamlessly with your CRM, help desk, or internal tools.",
    benefits: [
      "24/7 customer engagement without additional headcount",
      "Faster lead qualification and handoff to your sales team",
      "Reduced support volume and lower cost per interaction",
      "Consistent brand voice across every conversation",
    ],
    label: "01",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    description:
      "Manual, repetitive processes are the silent killers of growth. We map your existing workflows, identify the highest-impact automation opportunities, and build intelligent pipelines that connect your tools, route data accurately, and scale with your team — not against it.",
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
      "Data without context is noise. We build analytics pipelines and forecasting models that turn your raw operational data into clear, actionable intelligence — surfaced through dashboards your team will actually use.",
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
    title: "Custom AI Solutions & Bespoke Model Development",
    description:
      "Some challenges require more than a platform integration — they require custom intelligence. We develop purpose-built AI models trained on your proprietary data to solve the specific, nuanced problems that generic tools simply can't address.",
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
    title: "Security You Can Trust",
    desc: "We architect every solution with enterprise-grade security standards from day one — not as an afterthought. Our infrastructure approach follows SOC 2 principles, with end-to-end encryption, strict access controls, and data handling protocols that protect your most sensitive information at every layer of the stack.",
  },
  {
    icon: Clock,
    title: "Fast Time to Value",
    desc: "We operate on tight, milestone-driven sprints designed to get you to production quickly. Our agile methodology means you're not waiting months to see results — you're reviewing working systems in weeks. Speed matters, and we build our process around yours.",
  },
  {
    icon: TrendingUp,
    title: "Outcomes, Not Just Outputs",
    desc: "We don't measure success by the number of automations deployed. We measure it by the impact on your operations. Every engagement includes clearly defined KPIs, performance tracking, and a shared accountability for results — because a solution that doesn't move the needle isn't a solution.",
  },
  {
    icon: Users,
    title: "A Dedicated Team, Not a Ticket Queue",
    desc: "From kickoff to go-live and beyond, you'll work with a dedicated Automation Engineer — not a rotating cast of support reps. Direct access, clear communication, and full continuity across every phase of your project.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology Stack",
    desc: "We work with the most capable and battle-tested tools in the modern AI landscape — large language models (LLMs), agentic frameworks, vector databases, and ML infrastructure — selected deliberately to ensure your solutions are built on durable, scalable foundations.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Partnership, Not One-Time Delivery",
    desc: "Deployment is the beginning, not the end. Every engagement includes ongoing monitoring, performance optimization, and proactive maintenance. We stay engaged because AI systems that go unmanaged degrade in value — and we're not in the business of building things that fade.",
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
              "BoldFlow Labs is a specialist AI automation agency designing intelligent workflow systems that eliminate operational friction and drive measurable business growth.",
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
                  <span className="text-white">Turn Manual Processes Into</span>
                  <br />
                  <span className="shimmer-text">Intelligent, AI-Powered Systems</span>
                  <br />
                  <span className="text-white">Built for Growth</span>
                </h1>
              </SlideLeft>

              <SlideLeft custom={2} viewport={false}>
                <p className="text-base md:text-lg text-gray-400 max-w-lg mb-4 leading-relaxed">
                  BoldFlow Labs designs and deploys custom AI automation systems that eliminate operational bottlenecks, accelerate workflows, and give your team the space to focus on what actually moves the needle.
                </p>
              </SlideLeft>

              <SlideLeft custom={2.5} viewport={false}>
                <p className="text-sm text-gray-300 max-w-lg mb-10 leading-relaxed">
                  We are an AI automation agency built on a simple belief: the businesses that win in the next decade won&apos;t just use technology — they&apos;ll orchestrate it. From intelligent chatbots and agentic AI systems to full-scale workflow automation and predictive analytics, we architect solutions that are precise, scalable, and purpose-built for your operations.
                </p>
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
              End-to-End AI Automation Services,{" "}
              <span className="gradient-text">Engineered for Real Business Impact</span>
            </h2>
            <p className="text-gray-300 max-w-xl text-base">
              We don&apos;t offer off-the-shelf tools or generic templates. Every solution we build begins with a deep understanding of your operations, goals, and constraints — then we architect the most intelligent, efficient path forward.
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
              Built Different, <span className="gradient-text">Built Better</span>  — Here&apos;s What Sets Us Apart
            </h2>
            <p className="text-gray-300 text-lg md:text-lg">
              Choosing an AI automation partner is a consequential decision. We know that. Here&apos;s the commitment we make to every client we work with, from the very first conversation.
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
              A Proven Framework for AI Automation{" "}
              <span className="gradient-text">That Sticks</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
              AI automation fails when it&apos;s deployed without context. Our four-phase methodology ensures every solution we build is grounded in your actual operations — not a generic template applied to your problem.
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
                    Week 1–2
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Phase 1 — Discovery &amp; Diagnostic
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We begin every engagement with a structured operational audit. We map your current workflows, identify automation opportunities, quantify potential impact, and document the technical requirements needed to build with precision. You leave this phase with a clear roadmap — whether or not you proceed with us.
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
                    Week 2–3
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Phase 2 — Architecture &amp; Design
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our engineers design the full system architecture before writing a single line of code. This includes data flow diagrams, integration schemas, security protocols, and a modular design that allows for future expansion. You review and approve everything before we build.
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
                    Week 3–6
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Phase 3 — Build, Test &amp; Iterate
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We develop in tight, reviewable sprints. You see progress early and often — not just at the finish line. Each sprint ends with a working deliverable, a testing round, and a feedback loop that keeps the solution aligned with your evolving needs.
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
                    Ongoing
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-3">
                    Phase 4 — Deploy, Monitor &amp; Optimize
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Go-live is a milestone, not a finish line. We manage the deployment, monitor system performance in real time, and run continuous optimization cycles to ensure your automation delivers compounding value over time.
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
              Ready to Automate the Work{" "}
              <span className="shimmer-text">That&apos;s Slowing You Down?</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy call with our AI automation team. We&apos;ll review your current workflows, identify your highest-impact automation opportunities, and give you a clear, honest picture of what&apos;s possible — with no obligation and no sales pressure.
            </p>

            {/* Supporting points */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#00a2ff]/60" />
                Free, no-obligation diagnostic
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#00a2ff]/60" />
                Actionable clarity, regardless
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#00a2ff]/60" />
                Limited spots per quarter
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
