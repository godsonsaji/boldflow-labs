"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/firebase/config";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const q = query(
                    collection(db, "blogs"),
                    where("slug", "==", slug),
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
            <div className="flex justify-center items-center min-h-screen bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0066ff]"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">
                <h1 className="text-4xl font-bold text-white mb-6">Article Not Found</h1>
                <p className="text-gray-400 mb-8 max-w-md">The blog post you're looking for might have been moved or deleted.</p>
                <Link href="/blog" className="px-6 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold rounded-lg transition-colors">
                    Back to Blog
                </Link>
            </div>
        );
    }

    const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();

    return (
        <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#0066ff] mb-12 transition-colors">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to all articles
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-gray-400">
                        {post.authorName && (
                            <div className="flex items-center gap-3 pr-6 border-r border-white/10">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0066ff]/30">
                                    <img
                                        src={post.authorImage || "https://ui-avatars.com/api/?name=" + post.authorName + "&background=0066ff&color=fff"}
                                        alt={post.authorName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-white font-medium">{post.authorName}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#0066ff]" />
                            {format(date, "MMMM dd, yyyy")}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0066ff]" />
                            {post.readTime || "5 min read"}
                        </div>
                        {post.tags && post.tags.length > 0 && (
                            <div className="hidden sm:flex items-center gap-2">
                                <Tag className="w-4 h-4 text-[#0066ff]" />
                                <div className="flex gap-2">
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="text-[#0066ff] font-medium">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-[16/9] md:aspect-[21/9] w-full relative rounded-2xl md:rounded-3xl overflow-hidden mb-12 md:mb-16 border border-white/[0.05]"
                >
                    <img
                        src={post.coverImage || "/placeholder-blog.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-invert prose-blue w-full max-w-none 
            prose-headings:text-white prose-p:text-gray-300 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed
            prose-strong:text-white prose-a:text-[#0066ff] prose-blockquote:border-l-[#0066ff]
            prose-blockquote:bg-[#0066ff]/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-img:rounded-2xl prose-pre:bg-[#0a0a0d] prose-pre:border prose-pre:border-white/5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer actions */}
                <div className="mt-20 pt-12 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-white font-medium">Share this article:</span>
                        <div className="flex gap-3">
                            {/* Share icons would go here */}
                            <button className="p-2 rounded-full bg-white/[0.03] hover:bg-[#0066ff]/20 text-gray-400 hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </button>
                            <button className="p-2 rounded-full bg-white/[0.03] hover:bg-[#0066ff]/20 text-gray-400 hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            </button>
                        </div>
                    </div>

                    <Link href="/contact" className="px-8 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:scale-105">
                        Discuss Your AI Project
                    </Link>
                </div>
            </div>
        </article>
    );
}
