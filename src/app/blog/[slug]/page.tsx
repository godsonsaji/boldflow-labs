"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/firebase/config";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BlogPostPage() {
    const { slug } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const q = query(
                    collection(db, "blogs"),
                    where("slug", "==", slug),
                    where("status", "==", "published"),
                    limit(1)
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    setPost({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
                }
            } catch (error) {
                console.error("Error fetching blog post:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-[#050505]">
                <span className="text-[#0066ff] font-mono text-[14px] animate-pulse">█</span>
                <p className="text-label font-mono text-[#525252] uppercase tracking-widest mt-4">FETCHING_PAYLOAD...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] px-6 text-center">
                <div className="target-hex target-hex-left-top" />
                <div className="target-hex target-hex-right-bottom" />
                <span className="text-[#333] font-mono text-[64px] mb-8 block leading-none">[ 404 ]</span>
                <h1 className="text-h2 font-medium text-[#F5F5F5] uppercase mb-6 mt-4">RECORD NOT FOUND</h1>
                <p className="text-[#A3A3A3] mb-12 max-w-md">The requested telemetry log could not be located in the current database architecture.</p>
                <Link href="/blog" className="px-8 py-4 btn-ghost font-mono text-[13px] tracking-wider uppercase">
                    [ RETURN_TO_LOGS ]
                </Link>
            </div>
        );
    }

    const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();

    return (
        <article className="pt-32 pb-32 px-6 bg-[#050505] min-h-screen relative overflow-hidden">
            {/* Grid Array Background */}
            <div className="absolute inset-0 grid-overlay pointer-events-none z-0" />

            <div className="max-w-[800px] mx-auto relative z-10">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center text-label font-mono text-[#525252] hover:text-[#0066ff] mb-16 transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1 relative -top-px" />
                    [ RETRIEVE_LOGS ]
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-label text-[#0066ff] mb-6 uppercase"
                    >
                        {"//"} ARCHITECTURE LOG
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-h2 md:text-[64px] font-medium text-[#F5F5F5] uppercase leading-[0.9] mb-12 tracking-tighter"
                    >
                        {post.title}
                    </motion.h1>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-caption text-[#A3A3A3] font-mono border-y border-[#1A1A1A] py-6">
                        {post.authorName && (
                            <div className="flex items-center gap-3 pr-6 border-r border-[#1A1A1A]">
                                <div className="w-6 h-6 border border-[#333] bg-[#111] overflow-hidden">
                                    <img
                                        src={post.authorImage || "https://ui-avatars.com/api/?name=" + post.authorName + "&background=111&color=fff"}
                                        alt={post.authorName}
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                                <span className="uppercase tracking-wider">{post.authorName}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[#71717A]">
                            {format(date, "MMM dd, yyyy")}
                        </div>
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[#71717A] border-l border-[#1A1A1A] pl-6">
                            {post.readTime || "5M_READ"}
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="aspect-[21/9] w-full relative bg-[#0A0A0A] border border-[#1A1A1A] mb-16 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
                    <img
                        src={post.coverImage || "/placeholder-blog.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale opacity-80"
                    />
                    <div className="target-hex target-hex-left-top z-20" />
                    <div className="target-hex target-hex-right-bottom z-20" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert max-w-none 
                        prose-p:text-[#A3A3A3] prose-p:text-lg prose-p:leading-relaxed prose-p:font-light
                        prose-headings:text-[#F5F5F5] prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-medium
                        prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-8
                        prose-h3:text-[24px] prose-h3:mt-12 prose-h3:mb-6
                        prose-strong:text-[#F5F5F5] prose-strong:font-medium
                        prose-a:text-[#0066ff] prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-2 prose-blockquote:border-[#0066ff] prose-blockquote:bg-[#0A0A0A] prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-[#F5F5F5] 
                        prose-img:border prose-img:border-[#1A1A1A] prose-img:grayscale
                        prose-code:text-[#0066ff] prose-code:bg-[#0A0A0A] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[13px]
                        prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-[#1A1A1A] prose-pre:rounded-none
                        prose-ul:text-[#A3A3A3] prose-li:marker:text-[#0066ff]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / Tags & CTA */}
                <div className="mt-32 pt-16 border-t border-[#1A1A1A]">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-3 mb-16">
                            <span className="text-label text-[#525252] font-mono mr-4">{"//"} INDEX_TAGS</span>
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="font-mono text-[11px] text-[#A3A3A3] border border-[#333333] bg-[#0A0A0A] px-3 py-1.5 uppercase tracking-wider hover:border-[#0066ff] hover:text-[#F5F5F5] transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-12 text-center relative group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="target-hex target-hex-left-top" />
                        <div className="target-hex target-hex-right-bottom" />
                        
                        <h3 className="text-[24px] font-medium text-[#F5F5F5] uppercase mb-6">Want to deploy systems like this?</h3>
                        <p className="text-[#A3A3A3] mb-10 max-w-md mx-auto">We architect bespoke AI automation pipelines that eliminate manual work completely. Request an infrastructure diagnostic.</p>
                        <Link href="/contact" className="px-10 py-5 btn-primary font-medium text-sm text-center tracking-wide inline-block">
                            INITIALIZE TRANSMISSION
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
