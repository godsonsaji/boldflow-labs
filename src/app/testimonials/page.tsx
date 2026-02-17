import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import { FadeUp, AnimatedCounter } from "@/components/AnimationWrappers";

export const metadata: Metadata = {
    title: "Testimonials & Results",
    description:
        "See what our clients say about BoldFlow Labs. 98% client satisfaction, 150+ projects delivered, and an average 3.5x ROI — backed by real testimonials.",
    alternates: { canonical: "/testimonials" },
    openGraph: {
        title: "Testimonials & Results — BoldFlow Labs",
        description:
            "Real client testimonials and measurable business results from our AI automation projects.",
        url: "/testimonials",
    },
};

const highlightedTestimonial = {
    name: "Sarah Chen",
    role: "CEO",
    company: "DataPulse Analytics",
    content:
        "BoldFlow Labs didn't just build us an AI solution — they transformed how we think about our entire business. The automation pipeline they designed reduced our operational costs by 40% and freed our team to focus on innovation. Within 6 months, we saw a 3.2x return on our investment. They're not vendors, they're true partners.",
    rating: 5,
    metric: { value: "3.2x", label: "ROI in 6 months" },
};

const testimonials = [
    {
        name: "Michael Torres",
        role: "VP of Operations",
        company: "TechForge Inc.",
        content:
            "The AI chatbot BoldFlow built handles 80% of our support tickets autonomously. Our CSAT score went from 3.8 to 4.7 in three months.",
        rating: 5,
    },
    {
        name: "Emily Watson",
        role: "Head of Data",
        company: "NovaStar Health",
        content:
            "Their data pipeline processes 10M+ records daily with 99.99% uptime. The predictive analytics dashboard is now our most critical decision-making tool.",
        rating: 5,
    },
    {
        name: "David Park",
        role: "COO",
        company: "Synthetix.io",
        content:
            "We evaluated five AI agencies. BoldFlow was the only one that understood both the technical requirements AND the business context. Exceptional work.",
        rating: 5,
    },
    {
        name: "Lisa Mueller",
        role: "Director of Marketing",
        company: "CloudBase",
        content:
            "The content generation pipeline saves us 30+ hours per week. The quality is indistinguishable from our best human writers. Game-changing.",
        rating: 5,
    },
    {
        name: "James Kim",
        role: "CTO",
        company: "FinSpeed Capital",
        content:
            "Their fraud detection model caught $2.1M in fraudulent transactions in the first quarter alone. The ROI was immediate and undeniable.",
        rating: 5,
    },
    {
        name: "Rachel Adams",
        role: "Product Manager",
        company: "Quantum AI Labs",
        content:
            "Working with BoldFlow feels like having an elite AI team embedded in your company. Communication is crisp, delivery is on time, and quality is outstanding.",
        rating: 5,
    },
];

const resultStats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 40, suffix: "%", label: "Avg Cost Reduction" },
    { value: 3.5, suffix: "x", label: "Average ROI" },
];

export default function TestimonialsPage() {
    return (
        <>
            {/* JSON-LD Review Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "BoldFlow Labs",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: String(testimonials.length + 1),
                            bestRating: "5",
                            worstRating: "1",
                        },
                        review: [highlightedTestimonial, ...testimonials].map((t) => ({
                            "@type": "Review",
                            author: { "@type": "Person", name: t.name },
                            reviewRating: {
                                "@type": "Rating",
                                ratingValue: String(t.rating),
                                bestRating: "5",
                            },
                            reviewBody: t.content,
                        })),
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden" aria-label="Testimonials overview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Testimonials
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Client <span className="shimmer-text">Stories</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-500 max-w-xl mx-auto">
                            Don&apos;t just take our word for it. Hear from the leaders who&apos;ve
                            transformed their businesses with BoldFlow Labs.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Highlighted Testimonial */}
            <section className="section-padding pt-4" aria-label="Featured testimonial">
                <div className="max-w-4xl mx-auto">
                    <FadeUp custom={0}>
                        <article className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <Quote className="absolute top-8 right-8 w-16 h-16 text-[#0066ff]/[0.06]" aria-hidden="true" />

                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-6" aria-label={`${highlightedTestimonial.rating} out of 5 stars`}>
                                    {Array.from({ length: highlightedTestimonial.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[#00a2ff] fill-[#00a2ff]" />
                                    ))}
                                </div>

                                <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 italic">
                                    &ldquo;{highlightedTestimonial.content}&rdquo;
                                </blockquote>

                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center text-white font-bold text-sm">
                                            SC
                                        </div>
                                        <div>
                                            <cite className="not-italic text-white font-semibold text-sm block">
                                                {highlightedTestimonial.name}
                                            </cite>
                                            <p className="text-gray-600 text-xs">
                                                {highlightedTestimonial.role}, {highlightedTestimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="glass rounded-lg px-4 py-2 text-center">
                                        <p className="text-lg font-bold gradient-text">{highlightedTestimonial.metric.value}</p>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-wider">{highlightedTestimonial.metric.label}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </FadeUp>
                </div>
            </section>

            {/* Stats Band */}
            <section className="relative overflow-hidden" aria-label="Key performance metrics">
                <div className="relative py-16 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, rgba(0,212,255,0.02) 100%)" }}>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="flex flex-wrap justify-center divide-x divide-white/[0.06]">
                            {resultStats.map((stat, i) => (
                                <FadeUp key={stat.label} custom={i} className="text-center px-8 md:px-14 py-4">
                                    <p className="text-3xl md:text-5xl font-bold gradient-text mb-1.5">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-gray-600 text-xs uppercase tracking-widest">{stat.label}</p>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Grid */}
            <section className="section-padding" aria-label="All client testimonials">
                <div className="max-w-7xl mx-auto">
                    <FadeUp custom={0} className="mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            More <span className="gradient-text">Voices</span>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {testimonials.map((testimonial, i) => (
                            <FadeUp key={testimonial.name} custom={i}>
                                <article className="glass glass-hover rounded-xl p-7 h-full flex flex-col transition-all duration-300">
                                    <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                                            <Star key={j} className="w-3 h-3 text-[#00a2ff] fill-[#00a2ff]" />
                                        ))}
                                    </div>

                                    <blockquote className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 italic">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </blockquote>

                                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.04]">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066ff]/30 to-[#00d4ff]/30 flex items-center justify-center text-white text-[10px] font-bold">
                                            {testimonial.name.split(" ").map((n) => n[0]).join("")}
                                        </div>
                                        <div>
                                            <cite className="not-italic text-white text-xs font-medium block">
                                                {testimonial.name}
                                            </cite>
                                            <p className="text-gray-700 text-[10px]">
                                                {testimonial.role}, {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Become our next success story">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Become Our Next{" "}
                            <span className="shimmer-text">Success Story</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            Join the 150+ companies transforming their business with AI. Your
                            success story starts with a conversation.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Let&apos;s Talk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
