import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/AnimationWrappers";
import CaseStudyFilter from "@/components/CaseStudyFilter";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Explore how BoldFlow Labs has delivered AI automation solutions for 150+ companies. Real results: 40% cost reduction, 3.5x ROI, and 98% client satisfaction.",
    alternates: { canonical: "/case-studies" },
    openGraph: {
        title: "Case Studies — BoldFlow Labs",
        description:
            "Real AI automation case studies with measurable results. See how we've helped companies across fintech, healthcare, e-commerce, and more.",
        url: "/case-studies",
    },
};

const caseStudies = [
    {
        title: "FinTech Payment Automation",
        description:
            "Automated payment reconciliation and fraud detection for a Series B fintech company processing $50M+ monthly.",
        category: "Fintech",
        metrics: [
            { label: "Cost Saved", value: "$2.1M" },
            { label: "Accuracy", value: "99.7%" },
            { label: "Time Saved", value: "85%" },
        ],
        tags: ["Workflow Automation", "Fraud Detection", "ML Models"],
    },
    {
        title: "E-commerce Customer Support AI",
        description:
            "Deployed an AI assistant handling 80% of customer inquiries autonomously, reducing support costs while improving satisfaction.",
        category: "E-commerce",
        metrics: [
            { label: "Auto-Resolved", value: "80%" },
            { label: "CSAT Score", value: "4.8/5" },
            { label: "Cost Reduction", value: "60%" },
        ],
        tags: ["AI Chatbot", "NLP", "Multi-channel"],
    },
    {
        title: "Healthcare Data Pipeline",
        description:
            "Built a HIPAA-compliant data pipeline processing 10M+ patient records for AI-driven diagnostic insights.",
        category: "Healthcare",
        metrics: [
            { label: "Records/Day", value: "10M+" },
            { label: "Uptime", value: "99.99%" },
            { label: "Compliance", value: "100%" },
        ],
        tags: ["Data Pipeline", "HIPAA", "Cloud Architecture"],
    },
    {
        title: "SaaS Churn Prediction Engine",
        description:
            "Developed an ML model predicting customer churn with 94% accuracy, enabling proactive retention campaigns.",
        category: "SaaS",
        metrics: [
            { label: "Accuracy", value: "94%" },
            { label: "Churn Reduced", value: "35%" },
            { label: "Revenue Saved", value: "$4.2M" },
        ],
        tags: ["Predictive Analytics", "ML", "Customer Success"],
    },
    {
        title: "Manufacturing Quality Control AI",
        description:
            "Computer vision system detecting product defects on assembly lines with superhuman accuracy and speed.",
        category: "Manufacturing",
        metrics: [
            { label: "Defect Detection", value: "99.5%" },
            { label: "Speed Increase", value: "12x" },
            { label: "Waste Reduced", value: "45%" },
        ],
        tags: ["Computer Vision", "Quality Control", "IoT"],
    },
    {
        title: "Real Estate Market Intelligence",
        description:
            "AI-powered analytics platform providing real-time property valuations and market trend predictions.",
        category: "Real Estate",
        metrics: [
            { label: "Valuation Accuracy", value: "97%" },
            { label: "Data Sources", value: "200+" },
            { label: "Predictions/Day", value: "50K" },
        ],
        tags: ["Predictive Analytics", "Data Aggregation", "API"],
    },
];

const categories = ["All", ...Array.from(new Set(caseStudies.map((c) => c.category)))];

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden" aria-label="Case studies overview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#00a2ff] mb-4 font-medium">
                            Case Studies
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Proven <span className="shimmer-text">Results</span>
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-base text-gray-500 max-w-xl mx-auto">
                            Real projects, real metrics. See how we&apos;ve helped businesses
                            across industries transform their operations with AI automation.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Filterable Case Studies */}
            <section className="section-padding pt-4" aria-label="Case study portfolio">
                <div className="max-w-6xl mx-auto">
                    <CaseStudyFilter categories={categories} caseStudies={caseStudies} />
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" aria-label="Start your own case study">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp custom={0}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready for Your Own{" "}
                            <span className="shimmer-text">Success Story?</span>
                        </h2>
                        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
                            Let&apos;s discuss how AI automation can deliver measurable results
                            for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.03] btn-magnetic"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
