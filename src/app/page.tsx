import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Database,
  Network,
  Cpu,
  Bot,
  BarChart3,
  Layers,
  Activity,
  Shield,
  Clock,
  Code2
} from 'lucide-react';
import { FadeUp, SlideLeft } from '@/components/AnimationWrappers';
import { SystemPulse } from '@/components/SystemPulse';

export const metadata: Metadata = {
  title: 'BoldFlow Labs | Intelligent Automation Systems',
  description: 'We architect bespoke AI workflows that eliminate friction, capture revenue, and scale infinitely.',
};

const services = [
  {
    icon: Database,
    title: 'AI-Powered Lead Follow-Up',
    description: 'Instant, automated responses and smart follow-up sequences. No more leaked revenue from slow responses.',
    tags: ['Sub-minute SLAs', 'Dynamic Scoring', 'CRM Sync'],
    label: '01',
  },
  {
    icon: Bot,
    title: 'AI Support & Conversational Agents',
    description: 'Resolve customer queries 24/7. Capture leads and qualify prospects seamlessly without human intervention.',
    tags: ['Multi-platform', 'LLM Routing', 'Human Handoff'],
    label: '02',
  },
  {
    icon: Network,
    title: 'Automated Scheduling Systems',
    description: 'End-to-end booking flows with multi-channel reminders that drastically reduce cancellations and no-shows.',
    tags: ['2-Way Sync', 'Smart Reminders', 'Automated Triage'],
    label: '03',
  },
  {
    icon: Layers,
    title: 'Social & Content Pipelines',
    description: 'Intelligent content distribution systems that draft, schedule, and repurpose assets across your entire stack.',
    tags: ['Cross-platform', 'GenAI Drafting', 'Auto-publishing'],
    label: '04',
  },
  {
    icon: BarChart3,
    title: 'Automated BI Dashboards',
    description: 'Real-time operational reporting. Surface the metrics that matter and eliminate manual spreadsheet management.',
    tags: ['Data Aggregation', 'Custom KPIs', 'Real-time Sync'],
    label: '05',
  },
  {
    icon: Cpu,
    title: 'Custom Agentic Workflows',
    description: 'Bespoke AI architectures designed specifically for complex, multi-step operations unique to your business.',
    tags: ['Multi-agent logic', 'API Integration', 'Full IP Rights'],
    label: '06',
  },
];

const processPhases = [
  {
    id: '01',
    title: 'Discovery & Schema Design',
    desc: 'Complete audit of operational bottlenecks and technical requirements to define system architecture.',
  },
  {
    id: '02',
    title: 'Architecture Approval',
    desc: 'Review data flows, security protocols, and integration schemas prior to engineering.',
  },
  {
    id: '03',
    title: 'Build & Integration',
    desc: 'Iterative development sprints integrating core enterprise tools with custom AI agentic logic.',
  },
  {
    id: '04',
    title: 'Deployment & Telemetry',
    desc: 'System go-live with real-time error monitoring, logging, and ongoing optimization cycles.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute inset-0 bg-[#050505] noise-overlay z-0" />
        
        {/* Kinetic Tech Background equivalent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.15] pointer-events-none mix-blend-screen z-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.15),transparent_60%)] animate-pulse-glow" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="max-w-4xl">
            <SlideLeft custom={1} viewport={false}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="text-[10px] font-mono text-gray-300 tracking-widest uppercase">Systems Operational</span>
              </div>
            </SlideLeft>

            <SlideLeft custom={2} viewport={false}>
              <h1 className="text-6xl sm:text-7xl md:text-[6rem] font-medium tracking-tighter leading-[0.9] mb-8 text-white">
                Intelligent Automation.<br />
                <span className="text-[#A1A1AA] italic font-serif">Built for Scale.</span>
              </h1>
            </SlideLeft>

            <SlideLeft custom={3} viewport={false}>
              <p className="text-lg md:text-xl text-[#71717A] max-w-2xl mb-12 leading-relaxed font-light">
                Stop doing manually what intelligent systems can do better. We architect bespoke AI workflows that eliminate friction, capture revenue, and scale infinitely.
              </p>
            </SlideLeft>

            <SlideLeft custom={4} viewport={false} className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#EDEDED] text-[#050505] font-medium text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 text-center rounded-[2px]"
              >
                Initialize Strategy Call
              </Link>
              <Link
                href="/services"
                className="group w-full sm:w-auto px-8 py-4 border border-[#1A1A1A] text-[#EDEDED] font-medium text-sm hover:border-[#333] hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 rounded-[2px]"
              >
                Explore the Architecture
                <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />
              </Link>
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ── Core Services Peek ────────────────────── */}
      <section className="py-32 border-b border-[#1A1A1A] relative" aria-label="System Architectures">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp custom={0} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] mb-4">
                {"//"} System Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                End-to-End Autonomous Systems
              </h2>
            </div>
            <Link href="/services" className="text-sm font-mono text-[#00a2ff] hover:text-[#00d4ff] transition-colors flex items-center gap-2">
              [ View All Systems ] <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
            {services.map((service, i) => (
              <FadeUp
                key={service.label}
                custom={i}
                className="group relative bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors duration-300 h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722] opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity duration-500 rounded-full pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-12">
                    <service.icon className="w-5 h-5 text-[#71717A] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono text-[#333]">{service.label}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#71717A] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono bg-white/5 text-[#A1A1AA] px-2 py-1 border border-white/5 rounded-[2px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us (The Manifesto) ────────────────── */}
      <section className="py-32 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] mb-4">
                {"//"} Engineering Integrity
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                Built on rigorous technical standards.
              </h2>
              <p className="text-sm text-[#71717A] leading-relaxed">
                We refuse to deploy fragile boilerplate. Every workflow, model, and integration we architect is built with enterprise security, infinite scalability, and immediate ROI in mind.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <FadeUp custom={1} className="flex gap-4">
                <Shield className="w-5 h-5 text-[#FF5722] shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Security-First Architecture</h4>
                  <p className="text-xs text-[#71717A] leading-relaxed">Enterprise-grade encryption, role-based access controls, and strict PII data handling protocols from day one.</p>
                </div>
              </FadeUp>
              <FadeUp custom={2} className="flex gap-4">
                <Clock className="w-5 h-5 text-[#FF5722] shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Weeks, Not Months</h4>
                  <p className="text-xs text-[#71717A] leading-relaxed">Milestone-driven agile sprints designed to deliver compounding value and working systems to your team fast.</p>
                </div>
              </FadeUp>
              <FadeUp custom={3} className="flex gap-4">
                <Activity className="w-5 h-5 text-[#FF5722] shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Telemetry & Optimization</h4>
                  <p className="text-xs text-[#71717A] leading-relaxed">Advanced logging and runtime monitoring to ensure systems process flawlessly and improve autonomously over time.</p>
                </div>
              </FadeUp>
              <FadeUp custom={4} className="flex gap-4">
                <Code2 className="w-5 h-5 text-[#FF5722] shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Dedicated Engineers</h4>
                  <p className="text-xs text-[#71717A] leading-relaxed">You communicate directly with the lead system architects building your product. No middle-men account managers.</p>
                </div>
              </FadeUp>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
             <FadeUp custom={5}>
                <SystemPulse />
             </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4-Phase Architecture Process ──────────── */}
      <section className="py-32 border-b border-[#1A1A1A] relative" aria-label="Deployment Process">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp custom={0} className="mb-20 text-center">
             <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] mb-4">
                {"//"} Deployment Vector
             </p>
             <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                The Engineering Lifecycle.
             </h2>
          </FadeUp>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {processPhases.map((phase, i) => (
                <FadeUp key={phase.id} custom={i} className="relative group">
                  <div className="h-0.5 w-full bg-[#1A1A1A] mb-6 relative overflow-hidden">
                    {/* Glowing progress line on hover */}
                    <div className="absolute inset-y-0 left-0 w-0 bg-[#00a2ff] group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                  <span className="text-xs font-mono text-[#71717A] group-hover:text-white transition-colors">Phase {phase.id}</span>
                  <h4 className="text-lg font-medium text-white mt-3 mb-3">{phase.title}</h4>
                  <p className="text-sm text-[#71717A] leading-relaxed">{phase.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contextual CTA ────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-[#050505] text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,102,255,0.08),transparent_70%)] pointer-events-none" />
         
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Ready to execute?
            </h2>
            <p className="text-[#A1A1AA] mb-10 text-lg font-light">
              Book a strategic diagnostic call to analyze your current stack, uncover immediate operational friction, and map a scalable automation architecture.
            </p>
            
            <Link
                href="/contact"
                className="inline-flex px-10 py-4 bg-white text-black font-medium text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow duration-300 rounded-[2px]"
              >
                Book Technical Diagnostic
            </Link>
         </div>
      </section>
    </>
  );
}
