"use client";

import { useEffect, useState } from "react";
import { Terminal, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const logMessages = [
  { id: 1, type: "sys", text: "INITIALIZING SYSTEM ORCHESTRATION..." },
  { id: 2, type: "warn", text: "FRICTION DETECTED: MANUAL DATA ENTRY (CRM_LEAD_092)" },
  { id: 3, type: "action", text: "ROUTING PAYLOAD -> N8N ARCHITECTURE NODE" },
  { id: 4, type: "success", text: "PIPELINE ESTABLISHED. RECORD SYNCED. LATENCY: 12ms" },
  { id: 5, type: "warn", text: "ANOMALY: HIGH SUPPORT VOLUME DETECTED (QUEUE > 15)" },
  { id: 6, type: "action", text: "SPINNING UP LLM-AGENT INSTANCE (CLAUDE_3.5_SONNET)" },
  { id: 7, type: "success", text: "AGENT ENGAGED. TICKETS RESOLVED AUTONOMOUSLY." },
  { id: 8, type: "sys", text: "OPTIMIZING EVENT LOOP. AWAITING NEXT PAYLOAD..." },
];

export function SystemPulse() {
    const [logs, setLogs] = useState<{uniqueId: string, id: number, type: string, text: string}[]>([]);
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < logMessages.length) {
                const currentLog = logMessages[index];
                if (currentLog) {
                    setLogs(prev => {
                        const newLogs = [...prev, { ...currentLog, uniqueId: `${currentLog.id}-${Date.now()}` }];
                        return newLogs.slice(-5); // Keep last 5
                    });
                }
                index++;
            } else {
                index = 0; 
                setLogs([]);
            }
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rounded-[2px] bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden w-full font-mono text-xs shadow-[0_0_80px_rgba(255,87,34,0.03)] group transition-border duration-300 hover:border-[#333]">
            <div className="bg-[#111] border-b border-[#1A1A1A] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em]">Live Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a2ff] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00a2ff]"></span>
                    </span>
                    <span className="text-[9px] text-[#00a2ff] tracking-widest uppercase truncate break-all sm:break-normal">Sys Active</span>
                </div>
            </div>
            <div className="p-6 h-[240px] flex flex-col justify-end gap-3 bg-[#050505] relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                 
                 <AnimatePresence>
                     {logs.map((log) => (
                         <motion.div 
                             key={log.uniqueId}
                             initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                             exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                             transition={{ duration: 0.3 }}
                             className={`flex items-start gap-3 relative z-10 ${
                                 log.type === 'warn' ? 'text-[#FF5722]' :
                                 log.type === 'success' ? 'text-[#00a2ff]' :
                                 log.type === 'action' ? 'text-white' : 'text-[#71717A]'
                             }`}
                         >
                             <span className={`mt-0.5 ${log.type === 'action' ? 'opacity-100 text-[#00a2ff]' : 'opacity-50'}`}>{">"}</span>
                             <span className="leading-relaxed">{log.text}</span>
                         </motion.div>
                     ))}
                 </AnimatePresence>
                 
                 {logs.length === 0 && (
                     <div className="flex items-center gap-2 text-[#71717A] absolute bottom-6 left-6">
                         <Activity className="w-4 h-4 animate-pulse" />
                         <span>Awaiting telemetry payload...</span>
                     </div>
                 )}
            </div>
        </div>
    );
}
