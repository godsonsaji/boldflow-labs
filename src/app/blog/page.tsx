"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(
                    collection(db, "blogs"),
                    where("status", "==", "published")
                );
                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Sort descending
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setPosts(postsData.sort((a: any, b: any) => b.createdAt - a.createdAt));
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative pt-40 pb-32 border-b border-[#1A1A1A] overflow-hidden">
                <div className="noise-overlay" />
                <div className="grid-overlay pointer-events-none absolute inset-0 z-0" />
                
                <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} SYSTEM LOGS
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 md:text-hero text-[#F5F5F5] uppercase leading-[0.9] mb-8 max-w-4xl tracking-tighter"
                    >
                        The Architecture<br/>Logbook.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-[#A3A3A3] max-w-2xl font-light"
                    >
                        Engineering notes, architectural breakthroughs, and live system deployment strategies derived from our active infrastructure.
                    </motion.p>
                </div>
            </section>

            {/* ── POSTS GRID ───────────────────────────── */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-[1280px] mx-auto px-6">
                    {loading ? (
                        <div className="flex flex-col justify-center items-center h-64 gap-4 border border-[#1A1A1A] bg-[#0A0A0A]">
                            <span className="text-[#0066ff] font-mono text-[14px] animate-pulse">█</span>
                            <p className="text-label font-mono text-[#525252] uppercase tracking-widest">QUERYING_DATA_STORE...</p>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1A1A1A] border border-[#1A1A1A]">
                            {posts.map((post, index) => (
                                <motion.div 
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="h-full"
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 border border-[#1A1A1A] bg-[#0A0A0A] relative">
                            <div className="target-hex target-hex-left-top" />
                            <div className="target-hex target-hex-right-bottom" />
                            <span className="text-[#333] font-mono text-2xl mb-4 block">[ _ ]</span>
                            <p className="text-[#525252] font-mono text-label uppercase tracking-widest">LOG_ARRAY_EMPTY // NO_RECORDS_FOUND</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
