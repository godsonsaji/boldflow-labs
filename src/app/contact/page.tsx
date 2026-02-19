import type { Metadata } from "next";
import { Mail, Clock, ArrowRight, Phone } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact BoldFlow Labs | Book a Free AI Automation Strategy Call",
    description:
        "Get in touch with BoldFlow Labs. Book a free, no-obligation strategy call to explore how AI automation can reduce costs, increase efficiency, and accelerate your business growth.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact BoldFlow Labs | Book a Free AI Automation Strategy Call",
        description:
            "Book a free, no-obligation strategy call to explore how AI automation can reduce costs, increase efficiency, and accelerate your business growth.",
        url: "/contact",
    },
};

const steps = [
    {
        step: "01",
        title: "We Schedule a Discovery Call",
        description:
            "Within one business day of your inquiry, we\u2019ll confirm a 30-minute video call at a time that works for you.",
    },
    {
        step: "02",
        title: "We Listen Before We Recommend",
        description:
            "We spend the first part of every call understanding your business, your current processes, and the challenges you\u2019re facing. We ask good questions before we say anything.",
    },
    {
        step: "03",
        title: "We Share What We See",
        description:
            "Based on what you share, we\u2019ll give you our honest assessment of the automation opportunities available to you \u2014 and what a realistic implementation path looks like.",
    },
    {
        step: "04",
        title: "You Decide the Next Step",
        description:
            "There\u2019s no hard close. If there\u2019s a natural fit, we\u2019ll outline a proposed engagement. If not, you\u2019ll leave with useful perspective regardless.",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* JSON-LD Contact Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        mainEntity: {
                            "@type": "Organization",
                            name: "BoldFlow Labs",
                            email: "hello@boldflowlabs.com",
                        },
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden" aria-label="Contact us">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Contact
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            Let&apos;s Talk About What Automation{" "}
                            <span className="shimmer-text">Can Do for Your Business</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto mb-2">
                            Whether you have a specific project in mind or just want to
                            explore what&apos;s possible, we&apos;re here for a real
                            conversation — not a sales pitch.
                        </p>
                        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                            Book a free 30-minute strategy session with our team. We&apos;ll
                            review your current workflows, identify your top automation
                            opportunities, and give you an honest, grounded view of what AI
                            automation could achieve in your specific context.
                        </p>
                        <p className="text-sm text-gray-400 font-medium mt-4">
                            No pressure. No obligation. Just clarity.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Split Layout: Info + Form */}
            <section className="section-padding pt-0" aria-label="Contact information and form">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Left — Contact Info + Process */}
                        <SlideLeft custom={0} className="lg:col-span-2">
                            <div
                                className="relative rounded-2xl p-8 md:p-10 overflow-hidden h-full"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(0,212,255,0.02) 50%, rgba(0,0,0,0.9) 100%)",
                                }}
                            >
                                <div className="orb orb-blue w-[300px] h-[300px] -bottom-40 -left-40 opacity-40" aria-hidden="true" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        What Happens After You Reach Out
                                    </h2>
                                    <p className="text-gray-300 text-sm mb-8">
                                        Here&apos;s exactly what to expect.
                                    </p>

                                    {/* Process Steps */}
                                    <div className="space-y-6 mb-8">
                                        {steps.map((s) => (
                                            <div key={s.step} className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center shrink-0">
                                                    <span className="text-[10px] font-bold text-[#00a2ff]">{s.step}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-white text-sm font-semibold mb-1">{s.title}</h3>
                                                    <p className="text-gray-400 text-xs leading-relaxed">{s.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Separator */}
                                    <div className="h-px bg-gradient-to-r from-[#0066ff]/15 to-transparent my-6" aria-hidden="true" />

                                    {/* Contact Details */}
                                    <address className="not-italic space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.08] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                                <Mail className="w-4 h-4 text-[#00a2ff]" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-medium">boldflowlabs@gmail.com</p>
                                                <p className="text-gray-400 text-xs mt-0.5">Primary contact</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.08] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                                <Phone className="w-4 h-4 text-[#00a2ff]" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-medium">+91-9447178166</p>
                                                <p className="text-gray-400 text-xs mt-0.5">Primary contact</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.08] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                                <Clock className="w-4 h-4 text-[#00a2ff]" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-medium">Within 1 business day</p>
                                                <p className="text-gray-400 text-xs mt-0.5">Response time</p>
                                            </div>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </SlideLeft>

                        {/* Right — Form */}
                        <SlideRight custom={0} className="lg:col-span-3">
                            <ContactForm />
                        </SlideRight>
                    </div>
                </div>
            </section>
        </>
    );
}
