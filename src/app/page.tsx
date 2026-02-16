"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
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
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const features = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    description:
      "Deploy intelligent conversational agents that handle customer inquiries, qualify leads, and support your team 24/7.",
    label: "01",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate manual processes with smart automation pipelines that connect your tools and scale your operations.",
    label: "02",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Transform raw data into actionable insights with AI-powered analytics dashboards and forecasting models.",
    label: "03",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description:
      "Bespoke AI models trained on your data to solve unique challenges and unlock competitive advantages.",
    label: "04",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "%", label: "Avg. Cost Reduction" },
  { value: 3.5, suffix: "x", label: "ROI for Clients" },
];

const trustedBy = [
  "TechForge",
  "DataPulse",
  "NovaStar",
  "Synthetix",
  "CloudBase",
  "Quantum AI",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (v) => {
      if (displayRef.current) {
        const formatted = value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toString();
        displayRef.current.textContent = formatted + suffix;
      }
    });
    return unsubscribe;
  }, [springVal, suffix, value]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section — Asymmetric Split ──────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
        {/* Background Effects */}
        <div className="orb orb-blue w-[700px] h-[700px] -top-60 -left-60 opacity-30" />
        <div className="orb orb-cyan w-[500px] h-[500px] bottom-[-200px] right-[-100px] opacity-20" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,162,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                custom={0}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0066ff]/20 text-xs text-gray-400 mb-8 animate-glow-pulse"
              >
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                Trusted by 150+ innovative companies
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                custom={1}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              >
                <span className="text-white">AI-Powered</span>
                <br />
                <span className="shimmer-text">Automation</span>
                <span className="text-white"> for</span>
                <br />
                <span className="text-white">Modern Business</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                custom={2}
                className="text-base md:text-lg text-gray-500 max-w-lg mb-10 leading-relaxed"
              >
                We design and deploy intelligent automation systems that streamline
                your workflows, reduce costs, and unlock exponential growth.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                custom={3}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-gray-400 text-sm font-semibold btn-outline transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right — Abstract Geometric Art */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideRight}
              custom={1}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-[#0066ff]/10"
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-dashed border-[#00a2ff]/15"
                />
                {/* Inner ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border border-[#00d4ff]/10"
                />
                {/* Center orb */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 backdrop-blur-sm animate-glow-pulse" />

                {/* Floating nodes */}
                {[
                  { top: "5%", left: "50%", delay: 0, icon: Bot },
                  { top: "50%", right: "0%", delay: 1, icon: Sparkles },
                  { bottom: "5%", left: "50%", delay: 2, icon: BarChart3 },
                  { top: "50%", left: "0%", delay: 3, icon: Workflow },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    className="absolute w-10 h-10 rounded-xl bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center backdrop-blur-sm"
                    style={{
                      top: node.top,
                      left: node.left,
                      right: node.right,
                      bottom: node.bottom,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <node.icon className="w-4 h-4 text-[#00a2ff]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trusted By — Infinite Marquee ────────── */}
      <section className="py-8 border-y border-white/[0.03] relative overflow-hidden">
        <div className="relative">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-700 mb-6">
            Trusted by forward-thinking companies
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-gray-700 font-semibold text-lg tracking-wide px-10 whitespace-nowrap hover:text-[#00a2ff] transition-colors duration-300 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features — Bento Grid ─────────────────── */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-lg">
              Intelligent Solutions,{" "}
              <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-base">
              From conversational AI to enterprise-grade automation, we deliver
              end-to-end solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="bento-grid">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative glass glass-hover rounded-2xl p-8 transition-all duration-300 card-interactive overflow-hidden"
              >
                {/* Watermark label */}
                <span className="absolute top-4 right-6 text-[5rem] font-black leading-none bg-gradient-to-b from-[#0066ff]/[0.06] to-transparent bg-clip-text text-transparent select-none pointer-events-none">
                  {feature.label}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066ff]/15 to-[#00d4ff]/10 flex items-center justify-center mb-5 group-hover:from-[#0066ff]/25 group-hover:to-[#00d4ff]/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-[#00a2ff] icon-hover-spin" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats — Horizontal Band ──────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative py-16 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, rgba(0,212,255,0.02) 100%)" }}>
          <div className="absolute inset-0 scanline-overlay" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-wrap justify-center divide-x divide-white/[0.06]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="text-center px-8 md:px-14 py-4"
                >
                  <p className="text-3xl md:text-5xl font-bold gradient-text mb-1.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-600 text-xs uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — Alternating Steps ────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
              Why BoldFlow Labs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Built Different, <span className="gradient-text">Built Better</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                desc: "SOC 2 compliant infrastructure with end-to-end encryption and data protection built into every solution.",
              },
              {
                icon: Clock,
                title: "Rapid Deployment",
                desc: "Go from concept to production in weeks, not months. Our agile methodology ensures fast time-to-value.",
              },
              {
                icon: TrendingUp,
                title: "Measurable ROI",
                desc: "Every project comes with KPI tracking and performance dashboards so you can see the impact in real-time.",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                desc: "A senior AI engineer and project manager assigned to your account for seamless communication.",
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tech",
                desc: "We leverage the latest in LLMs, agentic frameworks, and ML infrastructure to future-proof your solutions.",
              },
              {
                icon: CheckCircle2,
                title: "Ongoing Support",
                desc: "24/7 monitoring, maintenance, and optimization included in every engagement. We don't just build and leave.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={i % 2 === 0 ? slideLeft : slideRight}
                custom={0}
                className="step-line"
              >
                <div
                  className={`flex items-start gap-6 py-8 ${i % 2 === 0 ? "" : "lg:flex-row-reverse lg:text-right"
                    }`}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0066ff]/10 border border-[#00a2ff]/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00a2ff]" />
                  </div>
                  <div className="max-w-lg">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#0066ff]/40 font-bold">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section — Full Bleed ─────────────── */}
      <section className="relative overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(0,0,0,1) 50%, rgba(0,212,255,0.04) 100%)" }}>
        <div className="orb orb-blue w-[600px] h-[600px] -bottom-60 -left-60 opacity-25" />
        <div className="orb orb-cyan w-[400px] h-[400px] -top-40 -right-40 opacity-15" />
        <div className="max-w-4xl mx-auto text-center relative z-10 py-28 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="shimmer-text">Extraordinary</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Book a free strategy call with our AI experts and discover how
              automation can transform your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
            >
              Schedule Your Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
