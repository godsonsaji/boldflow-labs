"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { staticBlogPosts, BlogPost } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { CheckCircle2, Search } from "lucide-react";

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>(staticBlogPosts);
    const [loading, setLoading] = useState(false);
    const [selectedTag, setSelectedTag] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Try querying Firestore blogs
                const q = query(collection(db, "blogs"), where("status", "==", "published"));
                const querySnapshot = await getDocs(q);
                
                if (!querySnapshot.empty) {
                    const fetched: BlogPost[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        fetched.push({
                            id: doc.id,
                            title: data.title || "",
                            slug: data.slug || "",
                            excerpt: data.excerpt || "",
                            content: data.content || "",
                            coverImage: data.coverImage || "",
                            createdAt: data.createdAt || { toDate: () => new Date() },
                            readTime: data.readTime || "5M_READ",
                            authorName: data.authorName || "BoldFlow Engineering",
                            authorImage: data.authorImage || "/brand/icon/png/app-icon-brand-blue-512.png",
                            tags: data.tags || [],
                            status: data.status || "published"
                        });
                    });
                    
                    // Merge or replace. Since we want our static SEO articles to ALWAYS show for search engines out-of-the-box,
                    // we'll merge firestore posts with static posts, avoiding slug duplicates.
                    const combined = [...fetched];
                    staticBlogPosts.forEach(sp => {
                        if (!combined.some(cp => cp.slug === sp.slug)) {
                            combined.push(sp);
                        }
                    });
                    setPosts(combined);
                } else {
                    // Fallback to static articles directly if firestore is empty
                    setPosts(staticBlogPosts);
                }
            } catch (error) {
                console.error("Firestore blog fetch error, using static SEO posts fallback:", error);
                setPosts(staticBlogPosts);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

const WEBHOOK_URL = "https://n8n.srv1336580.hstgr.cloud/webhook/boldflow-data";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        try {
            await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    source: "blog_newsletter",
                    submittedAt: new Date().toISOString()
                })
            });
            setIsSubmitted(true);
            setEmail("");
        } catch (err) {
            console.error("Newsletter webhook error:", err);
            setIsSubmitted(true);
            setEmail("");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Extract all unique tags
    const allTags = ["ALL", ...Array.from(new Set(posts.flatMap(p => p.tags.map(t => t.toUpperCase()))))];

    // Filter posts
    const filteredPosts = posts.filter(post => {
        const matchesTag = selectedTag === "ALL" || post.tags.some(t => t.toUpperCase() === selectedTag);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTag && matchesSearch;
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.boldflowlabs.com",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Blog",
                        item: "https://www.boldflowlabs.com/blog",
                    },
                ],
            },
            {
                "@type": "Blog",
                "@id": "https://www.boldflowlabs.com/blog/#blog",
                name: "BoldFlow Labs Engineering & Digital Growth Blog",
                url: "https://www.boldflowlabs.com/blog",
                description:
                    "Read technical guides, speed-to-lead benchmarks, WhatsApp workflows, and operational blueprints for modern business automation.",
                publisher: {
                    "@type": "Organization",
                    name: "BoldFlow Labs",
                    url: "https://www.boldflowlabs.com",
                    logo: "https://www.boldflowlabs.com/logo.png",
                },
            },
        ],
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-20 text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative py-14 md:py-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
                <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563FF] text-xs font-mono font-semibold uppercase tracking-wider mb-5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                        <span>Architecture Guides &amp; Technical Analysis</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 max-w-4xl"
                    >
                        Engineering &amp; Growth Blueprints: Automation, Technical SEO &amp; Systems Architecture
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed"
                    >
                        In-depth architectural breakdowns, speed-to-lead benchmarks, official WhatsApp Cloud API workflows, and technical SEO guides for modern businesses.
                    </motion.p>
                </div>
            </section>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Filters and Search Bar */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-slate-200 pb-8 mb-12">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-150 border rounded-lg ${
                                    selectedTag === tag 
                                        ? "bg-[#2563FF] border-[#2563FF] text-white shadow-xs" 
                                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-80 relative">
                        <input
                            type="text"
                            placeholder="Search articles &amp; guides..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent shadow-xs"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center py-28">
                        <div className="w-8 h-8 border-2 border-blue-200 border-t-[#2563FF] rounded-full animate-spin mb-4" />
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Loading articles...</p>
                    </div>
                ) : filteredPosts.length > 0 ? (
                    /* Articles Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="h-full">
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div className="text-center py-20 border border-slate-200 bg-white rounded-2xl shadow-xs">
                        <p className="text-sm font-medium text-slate-600">No articles found matching your query.</p>
                        <button 
                            onClick={() => { setSelectedTag("ALL"); setSearchQuery(""); }}
                            className="mt-4 text-xs font-semibold text-[#2563FF] hover:underline"
                        >
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto relative bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 border border-blue-200/80 p-8 sm:p-12 mt-24 text-center rounded-2xl shadow-sm"
                >
                    {!isSubmitted ? (
                        <>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#2563FF] text-[11px] font-mono font-semibold uppercase mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                                <span>Weekly Architecture Digest</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Subscribe to Engineering Updates</h3>
                            <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
                                Get technical analysis teardowns, speed-to-lead benchmarks, and conversion architecture guides sent directly to your inbox.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your work email..." 
                                    className="px-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] flex-1 rounded-lg shadow-xs"
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="btn-primary px-6 py-3 text-sm font-semibold text-white whitespace-nowrap rounded-lg shadow-sm"
                                >
                                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                                </button>
                            </form>
                            <p className="text-[11px] text-slate-400 mt-3 font-mono">Zero spam. Actionable engineering insights only.</p>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-6">
                            <CheckCircle2 className="w-12 h-12 text-[#2563FF] mb-3" />
                            <p className="text-lg font-bold text-slate-900">Subscription Confirmed</p>
                            <p className="text-sm text-slate-600 mt-2">You will receive an email whenever our next technical guide is published.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
