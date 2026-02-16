"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Target,
    Users,
    Lightbulb,
    Heart,
    ArrowRight,
    Rocket,
    Shield,
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

const values = [
    {
        icon: Target,
        title: "Results-Obsessed",
        description:
            "We measure our success by your outcomes. Every solution is built to deliver measurable, meaningful business impact.",
    },
    {
        icon: Users,
        title: "Client-First",
        description:
            "Your goals drive everything we do. We build deep partnerships, not transactional vendor relationships.",
    },
    {
        icon: Lightbulb,
        title: "Innovation-Led",
        description:
            "We stay at the cutting edge of AI research and apply the latest breakthroughs to solve real business problems.",
    },
    {
        icon: Heart,
        title: "Transparent & Honest",
        description:
            "No black boxes. We explain how our AI works, set realistic expectations, and deliver on our promises.",
    },
    {
        icon: Rocket,
        title: "Agile Delivery",
        description:
            "Fast iteration with continuous feedback loops. We ship early, test often, and optimize relentlessly.",
    },
    {
        icon: Shield,
        title: "Trust & Security",
        description:
            "Enterprise-grade security from day one. SOC 2 compliance, data encryption, and privacy-first design.",
    },
];

const team = [
    {
        name: "Alex Chen",
        role: "CEO & Co-Founder",
        bio: "Former ML lead at Google. Stanford PhD in AI. 15+ years building intelligent systems at scale.",
        initials: "AC",
        gradient: "from-[#0066ff] to-[#00d4ff]",
    },
    {
        name: "Sarah Kim",
        role: "CTO & Co-Founder",
        bio: "Ex-Amazon principal engineer. Expert in distributed systems and cloud-native AI infrastructure.",
        initials: "SK",
        gradient: "from-[#00a2ff] to-[#00d4ff]",
    },
    {
        name: "Marcus Reed",
        role: "Head of AI",
        bio: "Published researcher in NLP and reinforcement learning. Led AI teams at DeepMind and OpenAI.",
        initials: "MR",
        gradient: "from-[#0066ff] to-[#00a2ff]",
    },
    {
        name: "Priya Sharma",
        role: "Head of Engineering",
        bio: "Full-stack engineering leader with 12+ years at startups and enterprises. Passionate about clean architecture.",
        initials: "PS",
        gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
];

const timeline = [
    { year: "2022", title: "Founded", description: "BoldFlow Labs launched with a mission to democratize AI automation for businesses of all sizes." },
    { year: "2023", title: "First 50 Clients", description: "Reached 50 active clients across fintech, healthcare, and e-commerce verticals." },
    { year: "2024", title: "Series A Funding", description: "Secured $12M in Series A funding to scale our platform and expand the team to 40+." },
    { year: "2025", title: "150+ Projects", description: "Surpassed 150 delivered projects with a 98% client satisfaction rate." },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero — Editorial, clean */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideLeft}
                        custom={0}
                        className="max-w-3xl"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            About Us
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05]">
                            We Build AI That{" "}
                            <span className="shimmer-text">Actually Works</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                            BoldFlow Labs is a team of AI engineers, data scientists, and
                            strategists on a mission to make intelligent automation accessible
                            to every business. We don&apos;t just build AI — we build AI that
                            delivers measurable results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding relative" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, transparent 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0}
                        >
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                                Our Mission
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Democratizing AI for{" "}
                                <span className="gradient-text">Every Business</span>
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                We believe AI shouldn&apos;t be a luxury reserved for tech
                                giants. Every business, regardless of size, deserves access to
                                intelligent automation that can transform their operations.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our approach combines cutting-edge AI research with practical
                                business acumen. We don&apos;t chase trends — we build
                                solutions that solve real problems and generate real ROI.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "150+", label: "Projects Delivered" },
                                    { number: "98%", label: "Satisfaction Rate" },
                                    { number: "40+", label: "Team Members" },
                                    { number: "$50M+", label: "Client Revenue Generated" },
                                ].map((stat, i) => (
                                    <div key={stat.label} className="glass rounded-xl p-6 text-center">
                                        <p className="text-2xl font-bold gradient-text mb-1">{stat.number}</p>
                                        <p className="text-gray-600 text-xs uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="mb-14"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Values
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            What Drives <span className="gradient-text">Us</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                variants={fadeUp}
                                custom={i}
                                className="group glass glass-hover rounded-xl p-7 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.06] border border-[#00a2ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066ff]/10 group-hover:border-[#00a2ff]/20 transition-all duration-300">
                                    <value.icon className="w-5 h-5 text-[#00a2ff] icon-hover-spin" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team — Hover-flip Cards */}
            <section className="section-padding relative" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, transparent 100%)" }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="mb-14"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Team
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Meet the <span className="gradient-text">Minds</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="group relative [perspective:1000px]"
                            >
                                <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] min-h-[280px]">
                                    {/* Front */}
                                    <div className="absolute inset-0 glass rounded-xl p-7 flex flex-col items-center justify-center [backface-visibility:hidden]">
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                                            {member.initials}
                                        </div>
                                        <h3 className="text-base font-semibold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs">{member.role}</p>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute inset-0 glass rounded-xl p-7 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#00a2ff]/15">
                                        <h3 className="text-base font-semibold text-white mb-3">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="mb-14"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-3 font-medium">
                            Our Journey
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            The <span className="gradient-text">Timeline</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#0066ff]/40 via-[#00a2ff]/20 to-transparent" />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="flex items-start gap-6 relative"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center relative z-10">
                                        <span className="text-xs font-bold text-[#00a2ff]">{item.year}</span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want to Work with{" "}
                            <span className="shimmer-text">Us?</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            We&apos;re always looking for the next challenge. Tell us about
                            your vision and let&apos;s build something incredible together.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Let&apos;s Talk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
