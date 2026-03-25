import type { Metadata } from "next";
import { Terminal, Activity, GitCommit } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/AnimationWrappers";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Deploy | BoldFlow Labs",
    description: "Book an architectural diagnostic call to begin system deployment.",
};

const deploymentVectors = [
    {
        step: "01",
        title: "Diagnostic Initialization",
        description: "We map your current data structures and operational limits. No hypotheticals—just engineering facts.",
    },
    {
        step: "02",
        title: "System Architecture Proposal",
        description: "We draft a strictly logical workflow diagram demonstrating where autonomous agents will replace manual execution.",
    },
    {
        step: "03",
        title: "Engineering & Integration",
        description: "Direct API connections, local LLM deployment, and custom webhook orchestration mapped strictly to your stack.",
    },
    {
        step: "04",
        title: "Launch & Telemetry",
        description: "Production go-live with real-time error monitoring and continuous system optimization.",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#1A1A1A]" aria-label="Deployment">
                <div className="absolute inset-0 bg-[#050505] noise-overlay z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.03),transparent_70%)] pointer-events-none z-0" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <FadeUp custom={0} viewport={false}>
                        <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#FF5722] mb-4">
                            {"//"} Initialize Setup
                        </p>
                    </FadeUp>
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium text-white mb-6 tracking-tighter leading-[0.9]">
                            System Deployment.
                        </h1>
                    </FadeUp>
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-lg text-[#71717A] max-w-2xl mx-auto font-light leading-relaxed mb-4">
                            We don't do hard sales or vague marketing pitches. You will speak directly to the lead architect responsible for writing your infrastructure code. 
                        </p>
                        <p className="text-sm font-mono text-[#00a2ff] uppercase tracking-widest mt-8">
                            [ Secure Comm Link Established ]
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Split Layout */}
            <section className="py-24 bg-[#030303]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Deployment Protocol */}
                        <SlideLeft custom={0}>
                            <div className="mb-12">
                                <Terminal className="w-6 h-6 text-[#A1A1AA] mb-6" />
                                <h2 className="text-2xl font-medium text-white mb-2">
                                    The Deployment Protocol
                                </h2>
                                <p className="text-sm text-[#71717A] font-light">
                                    Execution is strictly phased. Here is what happens when you initialize contact.
                                </p>
                            </div>

                            <div className="relative border-l border-[#1A1A1A] ml-3 space-y-12">
                                {deploymentVectors.map((v) => (
                                    <div key={v.step} className="relative pl-8">
                                        <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#111] border-[2px] border-[#00a2ff]" />
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="text-[10px] font-mono text-[#00a2ff] uppercase tracking-wider">{v.step}.</span>
                                            <h3 className="text-base font-medium text-white">{v.title}</h3>
                                        </div>
                                        <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">{v.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 p-6 border border-[#1A1A1A] bg-[#0A0A0A] rounded-[2px]">
                                <div className="flex items-center gap-3 mb-4 text-[#A1A1AA]">
                                    <Activity className="w-4 h-4 text-[#FF5722]" />
                                    <span className="text-[10px] uppercase font-mono tracking-widest">Active Mainframe</span>
                                </div>
                                <div className="space-y-2 text-sm text-[#71717A]">
                                    <p><strong className="font-medium text-white">Email:</strong> boldflowlabs@gmail.com</p>
                                    <p><strong className="font-medium text-white">Ping:</strong> +91-9447178166</p>
                                    <p><strong className="font-medium text-white">SLA:</strong> T+24hrs Response Frame</p>
                                </div>
                            </div>
                        </SlideLeft>

                        {/* Contact Form Module */}
                        <SlideRight custom={0} className="w-full">
                            <div className="p-8 md:p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-[2px] shadow-[0_0_80px_rgba(255,87,34,0.02)] relative overflow-hidden group hover:border-[#333] transition-colors duration-500">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 border-b border-[#1A1A1A] pb-6 mb-8">
                                        <GitCommit className="w-4 h-4 text-[#00a2ff]" />
                                        <h3 className="text-sm font-mono text-white uppercase tracking-widest">Transmit Payload</h3>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </SlideRight>

                    </div>
                </div>
            </section>
        </>
    );
}
