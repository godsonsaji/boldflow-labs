"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const payloadMessages = [
  "INITIALIZING TELEMETRY PAYLOAD...",
  "[ OK ] DOMAIN_AUTH: verified",
  "FETCHING CRM_SYNC_STATUS...",
  "> SYNC_LATENCY: 12ms",
  "> DATA_INTEGRITY: 100%",
  "AWAITING NEXT EVENT_LOOP ENTRY.",
  "DETECTING MANUAL_PROCESSES...",
  "[ WARNING ] ANOMALY_FOUND: HUMAN_ENTRY_DELAYS",
  "> EXECUTING AUTO_RESOLUTION_ENGINE...",
  "[ OK ] BOT_DEPLOYED.",
];

export function SystemPulse({ customPayloads }: { customPayloads?: string[] }) {
    const messages = customPayloads && customPayloads.length > 0 ? customPayloads : payloadMessages;
    const [logs, setLogs] = useState<{ id: string, text: string }[]>([]);
    
    useEffect(() => {
        let index = 0;
        setLogs([]); // Reset on mount or messages change
        const interval = setInterval(() => {
            if (index < messages.length) {
                const currentText = messages[index];
                if (currentText) {
                    setLogs(prev => {
                        const newLogs = [...prev, { id: `${index}-${Date.now()}`, text: currentText }];
                        return newLogs.slice(-8); // Keep last 8
                    });
                }
                index++;
            } else {
                index = 0; 
                setLogs([]);
            }
        }, 800);
        return () => clearInterval(interval);
    }, [messages]);

    return (
        <div className="w-full h-full bg-[#050505] border border-[#1A1A1A] font-mono flex flex-col relative overflow-hidden">
            {/* Window Header */}
            <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                </div>
                <div className="text-[10px] text-[#525252] uppercase tracking-[0.2em] relative top-px">
                    terminal.exe
                </div>
            </div>
            
            {/* Terminal Body */}
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-end text-[12px] sm:text-[13px] text-[#A3A3A3] leading-relaxed relative z-10">
                 <AnimatePresence mode="popLayout">
                     {logs.map((log) => (
                         <motion.div 
                             key={log.id}
                             initial={{ opacity: 0, x: -5 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 0.1, ease: "linear" }}
                             className={`mb-1 ${log.text.includes("[ OK ]") ? "text-[#F5F5F5]" : log.text.includes("[ WARNING ]") ? "text-[#0066ff]" : ""}`}
                         >
                             {log.text.startsWith(">") ? (
                                 <span className="pl-4 text-[#F5F5F5]">{log.text}</span>
                             ) : (
                                 <>{log.text}</>
                             )}
                         </motion.div>
                     ))}
                 </AnimatePresence>
                 
                 <div className="mt-2 flex items-center">
                     <span className="text-[#0066ff] font-bold text-[14px] animate-cursor-blink">█</span>
                 </div>
            </div>
            
            {/* Grid background layer */}
            <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
        </div>
    );
}
