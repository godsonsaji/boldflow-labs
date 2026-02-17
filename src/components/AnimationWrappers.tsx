"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence, type TargetAndTransition } from "framer-motion";

/* ── Animation Variants ────────────────────────── */

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
    }),
};

const slideLeftVariants = {
    hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

const slideRightVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

/* ── FadeUp Wrapper ────────────────────────────── */

interface AnimationProps {
    children: ReactNode;
    custom?: number;
    className?: string;
    viewport?: boolean;
    as?: keyof HTMLElementTagNameMap;
    whileHover?: TargetAndTransition;
}

export function FadeUp({
    children,
    custom = 0,
    className = "",
    viewport = true,
    whileHover,
}: AnimationProps) {
    const props = viewport
        ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" } }
        : { initial: "hidden", animate: "visible" };

    return (
        <motion.div
            {...props}
            variants={fadeUpVariants}
            custom={custom}
            className={className}
            whileHover={whileHover}
        >
            {children}
        </motion.div>
    );
}

/* ── SlideLeft Wrapper ─────────────────────────── */

export function SlideLeft({
    children,
    custom = 0,
    className = "",
    viewport = true,
}: AnimationProps) {
    const props = viewport
        ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" } }
        : { initial: "hidden", animate: "visible" };

    return (
        <motion.div {...props} variants={slideLeftVariants} custom={custom} className={className}>
            {children}
        </motion.div>
    );
}

/* ── SlideRight Wrapper ────────────────────────── */

export function SlideRight({
    children,
    custom = 0,
    className = "",
    viewport = true,
}: AnimationProps) {
    const props = viewport
        ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" } }
        : { initial: "hidden", animate: "visible" };

    return (
        <motion.div {...props} variants={slideRightVariants} custom={custom} className={className}>
            {children}
        </motion.div>
    );
}

/* ── AnimatedCounter ───────────────────────────── */

export function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionVal = useMotionValue(0);
    const springVal = useSpring(motionVal, { duration: 2000, bounce: 0 });
    const displayRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (isInView) {
            motionVal.set(value);
        }
    }, [isInView, motionVal, value]);

    useEffect(() => {
        const unsubscribe = springVal.on("change", (v) => {
            if (displayRef.current) {
                const formatted = value % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toString();
                displayRef.current.textContent = formatted + suffix;
            }
        });
        return unsubscribe;
    }, [springVal, suffix, value]);

    return (
        <span ref={ref}>
            <span ref={displayRef}>0{suffix}</span>
        </span>
    );
}

/* ── Spinning Rings (Hero geometric) ───────────── */

export function SpinningRings() {
    return (
        <>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#0066ff]/10"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-[#00a2ff]/15"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-[#00d4ff]/10"
            />
        </>
    );
}

/* ── Floating Node ─────────────────────────────── */

export function FloatingNode({
    children,
    delay,
    style,
}: {
    children: ReactNode;
    delay: number;
    style: React.CSSProperties;
}) {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
            className="absolute w-10 h-10 rounded-xl bg-[#0066ff]/10 border border-[#00a2ff]/20 flex items-center justify-center backdrop-blur-sm"
            style={style}
        >
            {children}
        </motion.div>
    );
}

/* ── MetricBar (animated width bar) ────────────── */

export function MetricBar({ width, index }: { width: number; index: number }) {
    return (
        <div className="w-full h-1 rounded-full bg-white/[0.04]">
            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${width}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="metric-bar"
            />
        </div>
    );
}

/* ── AnimatedLayoutTab (underline tab) ─────────── */

export function AnimatedUnderline() {
    return (
        <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00a2ff]"
            transition={{ duration: 0.3, ease: "easeOut" }}
        />
    );
}

/* ── AnimatePresenceWrapper ────────────────────── */

export function AnimatePresenceWrapper({
    children,
    mode = "wait",
}: {
    children: ReactNode;
    mode?: "wait" | "sync" | "popLayout";
}) {
    return <AnimatePresence mode={mode}>{children}</AnimatePresence>;
}

/* ── AnimatedPrice ─────────────────────────────── */

export function AnimatedPrice({ price, isYearly }: { price: string; isYearly: boolean }) {
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={isYearly ? "yearly" : "monthly"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-5xl font-bold text-white"
            >
                {price}
            </motion.span>
        </AnimatePresence>
    );
}

/* ── Collapsible Section ───────────────────────── */

export function CollapsibleContent({
    isOpen,
    children,
}: {
    isOpen: boolean;
    children: ReactNode;
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    className="overflow-hidden"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
