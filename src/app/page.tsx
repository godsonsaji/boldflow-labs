"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SystemPulse } from '@/components/SystemPulse';

const services = [
  {
    label: '01',
    title: 'AI-Powered Lead Follow-Up',
    description: 'Instant, automated responses and smart follow-up sequences. No more leaked revenue from slow responses.',
    tags: ['<1M_SLA', 'DYNAMIC_SCORING', 'CRM_SYNC'],
  },
  {
    label: '02',
    title: 'AI Support & Conversational Agents',
    description: 'Resolve customer queries 24/7. Capture leads and qualify prospects seamlessly without human intervention.',
    tags: ['MULTI_PLATFORM', 'LLM_ROUTING', 'HUMAN_HANDOFF'],
  },
  {
    label: '03',
    title: 'Automated Scheduling Systems',
    description: 'End-to-end booking flows with multi-channel reminders that drastically reduce cancellations and no-shows.',
    tags: ['2_WAY_SYNC', 'SMART_REMINDERS', 'AUTO_TRIAGE'],
  },
  {
    label: '04',
    title: 'Social & Content Pipelines',
    description: 'Intelligent content distribution systems that draft, schedule, and repurpose assets across your entire stack.',
    tags: ['CROSS_PLATFORM', 'GENAI_DRAFTING', 'AUTO_PUBLISH'],
  },
  {
    label: '05',
    title: 'Automated BI Dashboards',
    description: 'Real-time operational reporting. Surface the metrics that matter and eliminate manual spreadsheet management.',
    tags: ['DATA_AGGREG', 'CUSTOM_KPI', 'REAL_TIME_SYNC'],
  },
  {
    label: '06',
    title: 'Custom Agentic Workflows',
    description: 'Bespoke AI architectures designed specifically for complex, multi-step operations unique to your business.',
    tags: ['MULTI_AGENT', 'API_INTEGRATION', 'FULL_IP_RIGHTS'],
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
    desc: 'Review data flows, security protocols, and integration schemas prior to engineering execution.',
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

const differentiators = [
  {
    id: '01',
    title: 'Security-First Architecture',
    desc: 'Enterprise-grade encryption, strict role-based access controls, and absolute compliance handling protocols designed immediately from day zero. We deploy infrastructure that guarantees total data sovereignty.',
    payload: [
      "REQUEST: SEC_AUDIT_HANDSHAKE",
      "[ OK ] ENCRYPTION: AES-256",
      "[ OK ] IAM_ROLE: RESTRICTED",
      "> PII_MASKING: ENABLED",
      "SYS: VAULT_SEAL_INTACT."
    ]
  },
  {
    id: '02',
    title: 'Weeks, Not Months',
    desc: 'Finite milestone-driven agile sprints designed purely to deliver compounding value and functional operational systems to your immediate team fast. Zero theoretical bloat.',
    payload: [
      "CALCULATING DEPLOY_VECTOR...",
      "TARGET_VELOCITY: EXCEEDED",
      "> SPRINT_01: COMPLETE",
      "> PIPELINE_BUILD: 14 DAYS",
      "[ OK ] SYSTEM_ONLINE."
    ]
  },
  {
    id: '03',
    title: 'Telemetry & Optimization',
    desc: 'Deep runtime observability, algorithmic logging architectures, and continuous runtime monitoring to ensure your autonomous pipelines process flawlessly and improve radically over time.',
    payload: [
      "PINGING LIVE_NODES...",
      "> LATENCY: 8ms",
      "> THROUGHPUT: MAX_CAPACITY",
      "[ WARNING ] THROTTLE_PREVENTED",
      "SYS: AUTO_SCALED INSTANCES."
    ]
  },
  {
    id: '04',
    title: 'Dedicated Engineers',
    desc: 'You communicate natively and exclusively with the direct lead system architects deploying your product. We completely eliminate the operational friction of middle-tier account managers.',
    payload: [
      "ESTABLISHING COMMS_LINK...",
      "ROUTING TO -> CHIEF_ARCHITECT",
      "[ OK ] DIRECT_STREAM_ESTABLISHED",
      "> NO_RELAYS",
      "> RAW_ACCESS_GRANTED."
    ]
  }
];

export default function HomePage() {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Manifesto Scroll Tracking for Terminal
  const [activeReason, setActiveReason] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll('.reason-section');
        let currentActive = 0;
        sections.forEach((sec, idx) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5) currentActive = idx;
        });
        setActiveReason(currentActive);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── SECTION 2: HERO ──────────────────────────── */}
      <section className="relative min-h-screen flex items-center border-b border-[#1A1A1A] overflow-hidden pt-20">
        <div className="noise-overlay" />
        <div className="absolute inset-0 radial-glow opacity-30 z-0" />
        
        <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Col - Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                    className="flex items-center gap-2 mb-8 bg-[#0066ff]/5 border border-[rgba(0,102,255,0.2)] px-3 py-1.5 w-max"
                >
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full animate-pulse-dot" />
                    <span className="text-label text-[#0066ff]">SYSTEMS OPERATIONAL</span>
                </motion.div>
                
                <h1 className="text-hero text-[#F5F5F5] mb-8 uppercase" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    >
                        Deterministic<br />
                        Automation.<br />
                        Finite<br />
                        Execution.
                    </motion.div>
                </h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="text-body-lg text-[#A3A3A3] max-w-xl mb-12"
                >
                    Stop paying humans to act like algorithms. We engineer bespoke AI pipelines that eliminate operational friction, execute with zero latency, and scale unconditionally.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link href="/contact" className="w-full sm:w-auto px-8 py-4 btn-primary font-medium text-sm text-center">
                        INITIALIZE DIAGNOSTIC
                    </Link>
                    <Link href="/services" className="w-full sm:w-auto px-8 py-4 btn-ghost font-mono text-[13px] text-center tracking-wider">
                        [ RUN ARCHITECTURE DOCS ]
                    </Link>
                </motion.div>
            </div>

            {/* Right Col - Visual Anchor */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.8 }}
                className="lg:col-span-5 h-[500px] lg:h-auto animate-crt relative"
            >
                <SystemPulse />
                <div className="target-hex target-hex-left-top" />
                <div className="target-hex target-hex-right-bottom" />
            </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: TRUST BAR ────────────────────── */}
      <section className="h-[120px] border-b border-[#1A1A1A] w-full overflow-hidden flex items-center bg-[#050505] relative">
          <div className="flex whitespace-nowrap overflow-hidden w-full font-mono text-label text-[#525252]">
              <motion.div
                  animate={{ x: [0, -1000] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                  className="flex items-center"
              >
                  {/* Repeated blocks for infinite marquee */}
                  {[1,2,3].map(i => (
                      <div key={i} className="flex items-center">
                          <span className="mx-12">{"//"} UPTIME: 99.999%</span>
                          <span className="text-[#1A1A1A]">[ + ]</span>
                          <span className="mx-12">{"//"} AVG_LATENCY: 12ms</span>
                          <span className="text-[#1A1A1A]">[ + ]</span>
                          <span className="mx-12">{"//"} ACTIVE_NODES: 2,048</span>
                          <span className="text-[#1A1A1A]">[ + ]</span>
                          <span className="mx-12">{"//"} ZERO_DAY_REDUNDANCY: ONLINE</span>
                          <span className="text-[#1A1A1A]">[ + ]</span>
                      </div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* ── SECTION 4: SERVICES ─────────────────────── */}
      <section className="py-32 lg:py-48 border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                   <p className="text-label text-[#71717A] mb-4 uppercase">
                       <span className="text-[#0066ff]">{"//"}</span> SYSTEM CAPABILITIES
                   </p>
                   <h2 className="text-h2 text-[#F5F5F5] uppercase">
                       Engineer Workflow<br/>Pipelines.
                   </h2>
                </div>
                <Link href="/services" className="font-mono text-[13px] text-[#A3A3A3] hover:text-[#0066ff] transition-colors relative group">
                    [ EXECUTE : VIEW ALL SYSTEMS ]
                    <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
                </Link>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1A1A1A]">
                {services.map((svc, idx) => (
                    <motion.div
                        key={svc.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.15, delay: idx * 0.1, ease: "linear" }}
                        className="service-card p-10 flex flex-col h-full"
                    >
                        <div className="text-label text-[#525252] mb-12">{"//"} {svc.label}</div>
                        <h3 className="text-h3 text-[#F5F5F5] mb-4">{svc.title}</h3>
                        <p className="text-body text-[#A3A3A3] mb-12 flex-1">{svc.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {svc.tags.map(tag => (
                                <span key={tag} className="mono-tag text-[#71717A] border border-[#1A1A1A] px-2 py-1 bg-[#050505]">{`[ ${tag} ]`}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY BOLDFLOW ─────────────────── */}
      <section className="py-32 lg:py-48 border-b border-[#1A1A1A]">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
              {/* Left Column - Sticky */}
              <div className="lg:col-span-5 relative">
                  <div className="sticky top-32">
                      <p className="text-label text-[#71717A] mb-4 uppercase">
                          <span className="text-[#0066ff]">{"//"}</span> ENGINEERING INTEGRITY
                      </p>
                      <h2 className="text-h2 text-[#F5F5F5] uppercase mb-12">
                          Absolute<br />Technical<br />Credibility.
                      </h2>
                      <div className="h-[300px] w-full opacity-100">
                          <SystemPulse customPayloads={differentiators[activeReason].payload} />
                      </div>
                  </div>
              </div>

              {/* Right Column - Scrolling */}
              <div className="lg:col-span-7 flex flex-col pt-[50vh] pb-[20vh] space-y-32">
                  {differentiators.map((diff, i) => (
                      <div key={diff.id} className="reason-section border-t border-[#1A1A1A] pt-8 relative">
                          <div className="target-hex target-hex-left-top" />
                          <div className="text-label text-[#0066ff] mb-6 block">
                              [ REASON_{diff.id} ]
                          </div>
                          <h3 className="text-[32px] font-medium text-[#F5F5F5] uppercase leading-tight mb-6">{diff.title}</h3>
                          <p className="text-body-lg text-[#A3A3A3] max-w-xl">{diff.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ── SECTION 6: PROCESS ──────────────────────── */}
      <section ref={processRef} className="py-32 lg:py-48 border-b border-[#1A1A1A]">
          <div className="max-w-[1280px] mx-auto px-6">
              <p className="text-label text-[#71717A] mb-4 uppercase">
                  <span className="text-[#0066ff]">{"//"}</span> DEPLOYMENT VECTOR
              </p>
              <h2 className="text-h2 text-[#F5F5F5] uppercase mb-24">
                  The Engineering<br/>Lifecycle.
              </h2>

              <div className="relative pl-0 md:pl-12 max-w-4xl">
                  {/* Vertical Rail */}
                  <div className="absolute left-[15px] top-[10px] bottom-[10px] w-[1px] bg-[#1A1A1A] hidden md:block">
                      <motion.div 
                          className="w-full bg-[#0066ff] transform origin-top"
                          style={{ scaleY: lineHeight }}
                      />
                  </div>

                  <div className="flex flex-col gap-20 relative">
                     {processPhases.map((phase, i) => (
                         <div key={phase.id} className="relative group md:pl-16 flex flex-col">
                             {/* Rail Node Indicator */}
                             <div className="hidden md:flex absolute left-[-2px] top-[10px] w-[9px] h-[9px] bg-[#050505] border border-[#525252] rounded-full z-10 items-center justify-center transition-colors duration-[0ms] group-hover:border-[#0066ff] group-hover:bg-[#0066ff]">
                             </div>

                             <div className="text-label text-[#525252] mb-4 transition-colors duration-[0ms] group-hover:text-[#0066ff]">
                                 PHASE_{phase.id}
                             </div>
                             
                             <div className="bg-transparent group-hover:bg-[#0A0A0A] p-0 md:group-hover:px-8 md:group-hover:py-6 transition-all duration-[0ms] border border-transparent group-hover:border-[#1A1A1A]">
                                 <h3 className="text-[28px] md:text-[32px] font-medium text-[#A3A3A3] group-hover:text-[#F5F5F5] uppercase mb-4 transition-colors duration-[0ms]">
                                     {phase.title}
                                 </h3>
                                 <p className="text-body text-[#71717A] max-w-2xl transition-colors duration-[0ms] group-hover:text-[#A3A3A3]">
                                     {phase.desc}
                                 </p>
                             </div>
                         </div>
                     ))}
                  </div>
              </div>
          </div>
      </section>

      {/* ── SECTION 7: MID-PAGE CTA ─────────────────── */}
      <section className="py-32 lg:py-48 flex justify-center px-6">
          <div className="w-full max-w-[800px] border border-[#1A1A1A] bg-[#0A0A0A] relative p-16 md:p-24 text-center group active:scale-[0.99] transition-transform duration-150">
              {/* Outer stroke animation on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-[1px] z-20">
                  <div className="w-full h-full animate-sweep-border opacity-50" />
              </div>

              {/* Grid & Glow */}
              <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
              <div className="absolute inset-0 radial-glow z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="target-hex target-hex-left-top" />
              <div className="target-hex target-hex-right-bottom" />
              <div className="target-hex target-hex-right-top" />
              <div className="target-hex target-hex-left-bottom" />

              <div className="absolute top-6 right-8 text-label text-[#525252]">
                  {"//"} ONDEMAND_CAPACITY: <span className="text-[#F5F5F5]">82% RESERVED</span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-[32px] md:text-h2 font-medium text-[#F5F5F5] uppercase mb-6 leading-tight">
                      SYSTEMS AWAITING<br/>DEPLOYMENT.
                  </h2>
                  <p className="text-body-lg text-[#A3A3A3] mb-12 max-w-md mx-auto">
                      Secure your infrastructure diagnostic. Zero theoreticals. Pure architectural clarity.
                  </p>
                  
                  <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide w-full sm:w-auto min-w-[240px]">
                      INITIALIZE DIAGNOSIS
                  </Link>
              </div>
          </div>
      </section>
    </>
  );
}
