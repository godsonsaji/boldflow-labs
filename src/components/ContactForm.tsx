"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Calendar, AlertCircle, Send } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  className?: string;
}

const serviceOptions = [
  "Performance Marketing (Google & Meta Ads)",
  "WhatsApp Automation & Workflows",
  "SEO Services (Technical & On-Page)",
  "Website Development & Landing Pages",
  "Google Business Profile & Local SEO",
  "Business Automation & CRM Setup",
  "Multiple Systems / End-to-End Growth"
];

const budgetOptions = [
  "Less than ₹25,000 / $300",
  "₹25,000 - ₹50,000 / $300 - $600",
  "₹50,000 - ₹1,50,000 / $600 - $1,800",
  "₹1,50,000+ / $1,800+",
  "Flexible / To be discussed"
];

export default function ContactForm({ initialService = "", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService || "Performance Marketing (Google & Meta Ads)",
    budget: "Flexible / To be discussed",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Client-side quick checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid business email.");
      return;
    }

    if (!formData.company.trim()) {
      setError("Please enter your company or brand name.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError("Please share a brief project summary (at least 10 characters).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email us directly at hello@boldflowlabs.com";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Enquiry Received</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. We have received your project details. We will review your requirements and reach out within 24 business hours.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto mb-6 text-left">
          <div className="text-xs font-mono text-[#2563FF] uppercase tracking-wider mb-1 font-semibold">
            Want to skip the inbox wait?
          </div>
          <p className="text-xs text-slate-600 mb-3">
            Pick a convenient 30-minute introductory strategy session directly on our calendar:
          </p>
          <a
            href="https://cal.com/boldflow-labs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Select a Time on Cal.com ↗</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              service: serviceOptions[0],
              budget: budgetOptions[0],
              message: "",
              honeypot: "",
            });
          }}
          className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-4"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm ${className}`}
      noValidate
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Discuss Your Project
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Tell us about your operational challenges and target growth milestones.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-700 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Honeypot field for anti-spam (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave empty</label>
        <input
          id="website_hp"
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
              Your Name <span className="text-[#2563FF]">*</span>
            </label>
            <input
              id="form-name"
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
              Business Email <span className="text-[#2563FF]">*</span>
            </label>
            <input
              id="form-email"
              type="email"
              required
              placeholder="rahul@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-company" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
              Company / Brand Name <span className="text-[#2563FF]">*</span>
            </label>
            <input
              id="form-company"
              type="text"
              required
              placeholder="e.g. Apex Health Logistics"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="form-service" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
              Primary Service of Interest <span className="text-[#2563FF]">*</span>
            </label>
            <select
              id="form-service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-slate-900">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="form-budget" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
            Approximate Monthly / Project Budget
          </label>
          <select
            id="form-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-white text-slate-900">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="form-message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-medium">
            Project Overview / Current Bottlenecks <span className="text-[#2563FF]">*</span>
          </label>
          <textarea
            id="form-message"
            required
            rows={4}
            placeholder="Tell us what you're trying to solve (e.g. leads taking too long to qualify, manual CRM data entry, poor landing page conversions, high-intent local search visibility)..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] transition-colors resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-500">
          We respect your privacy. No spam or aggressive sales follow-ups. Responses provided within 24 business hours.
        </p>
      </div>
    </form>
  );
}
