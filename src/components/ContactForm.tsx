"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const WEBHOOK_URL = "https://n8n.srv1336580.hstgr.cloud/webhook/boldflow-data";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem("contact-name") as HTMLInputElement).value,
            email: (form.elements.namedItem("contact-email") as HTMLInputElement).value,
            company: (form.elements.namedItem("contact-company") as HTMLInputElement).value,
            service: (form.elements.namedItem("contact-service") as HTMLSelectElement).value,
            message: (form.elements.namedItem("contact-message") as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message. Please try again.");
            }

            setSubmitted(true);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again or email us directly."
            );
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
            >
                <div className="w-16 h-16 rounded-full bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center mb-6 animate-glow-pulse">
                    <CheckCircle2 className="w-8 h-8 text-[#00a2ff]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                </h3>
                <p className="text-gray-300 text-sm max-w-sm mb-8">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours with next steps.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#00a2ff] hover:text-white transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1 block">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        className="input-minimal"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1 block">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        className="input-minimal"
                        placeholder="john@company.com"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="contact-company" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1 block">
                    Company
                </label>
                <input
                    id="contact-company"
                    type="text"
                    className="input-minimal"
                    placeholder="Your company name"
                />
            </div>

            <div>
                <label htmlFor="contact-service" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1 block">
                    Service Interested In
                </label>
                <select
                    id="contact-service"
                    className="input-minimal appearance-none cursor-pointer"
                    required
                >
                    <option value="" className="bg-black">Select a service</option>
                    <option value="chatbots" className="bg-black">AI Chatbots &amp; Conversational Agents</option>
                    <option value="workflow" className="bg-black">Intelligent Workflow Automation</option>
                    <option value="analytics" className="bg-black">Predictive Analytics &amp; AI-Powered Insights</option>
                    <option value="custom" className="bg-black">Custom AI Solutions</option>
                    <option value="unsure" className="bg-black">Not Sure — Need Guidance</option>
                </select>
            </div>

            <div>
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1 block">
                    Tell Us About Your Project
                </label>
                <textarea
                    id="contact-message"
                    rows={5}
                    className="input-minimal resize-none"
                    placeholder="Describe your automation needs, current challenges, and goals..."
                    required
                />
            </div>

            {error && (
                <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a2ff] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#0066ff]/30 transition-all duration-300 hover:scale-[1.02] btn-magnetic disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {loading ? (
                    <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );
}
