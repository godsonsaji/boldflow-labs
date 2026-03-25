"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import BlogCard from "@/components/BlogCard";
import { FadeUp } from "@/components/AnimationWrappers";
import { Terminal, Database } from "lucide-react";

export default function BlogPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(
                    collection(db, "blogs"),
                    where("status", "in", ["published", "Published", "PUBLISHED"])
                );
                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Manually sort since index might be missing
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
        <section className="pt-32 pb-24 px-6 min-h-screen bg-[#050505] relative overflow-hidden">
            {/* Grid Array Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <FadeUp custom={0} viewport={false}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] border border-[#1A1A1A] bg-[#0A0A0A] mb-8">
                            <Terminal className="w-3.5 h-3.5 text-[#00a2ff]" />
                            <span className="text-[10px] font-mono text-[#00a2ff] tracking-widest uppercase">System Telemetry & Logs</span>
                        </div>
                    </FadeUp>
                    
                    <FadeUp custom={1} viewport={false}>
                        <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                            The Architecture <span className="text-[#A1A1AA] italic font-serif tracking-normal">Logbook.</span>
                        </h1>
                    </FadeUp>
                    
                    <FadeUp custom={2} viewport={false}>
                        <p className="text-[#71717A] text-lg font-light leading-relaxed">
                            Engineering notes, architectural breakthroughs, and live system deployment strategies derived from our active infrastructure.
                        </p>
                    </FadeUp>
                </div>

                {loading ? (
                    <div className="flex flex-col justify-center items-center h-64 gap-4">
                        <Database className="w-8 h-8 text-[#A1A1AA] animate-pulse" />
                        <p className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest">Querying Data Store...</p>
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A] rounded-[2px] overflow-hidden">
                        {posts.map((post, index) => (
                            <FadeUp key={post.id} custom={index} className="bg-[#050505]">
                                <BlogCard post={post} />
                            </FadeUp>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 border border-[#1A1A1A] bg-[#0A0A0A] rounded-[2px] shadow-[0_0_80px_rgba(255,87,34,0.02)]">
                        <Terminal className="w-8 h-8 text-[#333] mx-auto mb-4" />
                        <p className="text-[#A1A1AA] font-mono text-sm uppercase tracking-widest">Log array empty. No current telemetry available.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
