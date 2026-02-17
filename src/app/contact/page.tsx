import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with BoldFlow Labs. Schedule a free 30-minute AI strategy call, discuss your automation needs, or request a custom quotation.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Us — BoldFlow Labs",
        description:
            "Ready to transform your business with AI? Schedule a free strategy call with our AI experts.",
        url: "/contact",
    },
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@boldflowlabs.com",
        description: "We respond within 24 hours",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+1 (555) 123-4567",
        description: "Mon-Fri, 9am-6pm PST",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "San Francisco, CA",
        description: "By appointment only",
    },
    {
        icon: Clock,
        title: "Response Time",
        value: "< 24 Hours",
        description: "Average response time",
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
                            "@type": "LocalBusiness",
                            name: "BoldFlow Labs",
                            email: "hello@boldflowlabs.com",
                            telephone: "+1-555-123-4567",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "San Francisco",
                                addressRegion: "CA",
                                addressCountry: "US",
                            },
                            openingHours: "Mo-Fr 09:00-18:00",
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Let&apos;s Start{" "}
                            <span className="shimmer-text">Building</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-500 max-w-xl mx-auto">
                            Ready to transform your business with AI? Get in touch and
                            we&apos;ll schedule a free 30-minute strategy call.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Split Layout: Info + Form */}
            <section className="section-padding pt-0" aria-label="Contact information and form">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Left — Contact Info Panel */}
                        <SlideLeft custom={0} className="lg:col-span-2">
                            <div className="relative rounded-2xl p-8 md:p-10 overflow-hidden h-full" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(0,212,255,0.02) 50%, rgba(0,0,0,0.9) 100%)" }}>
                                <div className="orb orb-blue w-[300px] h-[300px] -bottom-40 -left-40 opacity-40" aria-hidden="true" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Get in Touch
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-10">
                                        We&apos;d love to hear about your project
                                    </p>

                                    <address className="space-y-7 not-italic">
                                        {contactInfo.map((info) => (
                                            <div key={info.title} className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/[0.08] border border-[#00a2ff]/10 flex items-center justify-center shrink-0">
                                                    <info.icon className="w-4 h-4 text-[#00a2ff]" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-medium">{info.value}</p>
                                                    <p className="text-gray-600 text-xs mt-0.5">{info.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </address>

                                    {/* Separator */}
                                    <div className="h-px bg-gradient-to-r from-[#0066ff]/15 to-transparent my-8" aria-hidden="true" />

                                    <div className="glass rounded-xl p-5">
                                        <p className="text-white text-sm font-medium mb-1">
                                            Free Strategy Call
                                        </p>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Book a 30-minute call to discuss your AI automation needs
                                            and get expert recommendations — no strings attached.
                                        </p>
                                    </div>
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
