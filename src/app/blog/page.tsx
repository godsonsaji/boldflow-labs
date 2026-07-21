"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { staticBlogPosts, BlogPost } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { CheckCircle2, Search, Filter } from "lucide-react";

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
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
                            authorName: data.authorName || "Godson Saji",
                            authorImage: data.authorImage || "",
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setEmail("");
        }, 1500);
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

    return (
        <div className="min-h-screen bg-[#0A0A0F] pt-40 pb-32">
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
            
            <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
                {/* Header */}
                <header className="mb-20 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] tracking-wider text-[#0047FF] font-mono font-bold mb-6 uppercase"
                    >
                        {"//"} System Logs & Documentation
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-h1 text-[#F5F6FA] mb-8 tracking-tight"
                    >
                        Thoughts & Teardowns.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg"
                    >
                        Read our technical specifications, speed-to-lead breakdowns, and operational blueprints for trade automation systems.
                    </motion.p>
                </header>

                {/* Filters and Search Bar */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-[#1C1C24] pb-8 mb-16">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider font-bold transition-all duration-150 border rounded-sm ${
                                    selectedTag === tag 
                                        ? "bg-[#0047FF] border-[#0047FF] text-white" 
                                        : "border-[#1C1C24] text-[#A3A3B3] hover:border-[#2E2E3E] hover:text-white"
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
                            placeholder="SEARCH LOGS..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-[#111116] border border-[#1C1C24] text-white text-[12px] font-mono rounded-sm focus:outline-none focus:border-[#0047FF]"
                        />
                        <Search className="w-4 h-4 text-[#626272] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center py-32">
                        <span className="text-[#0047FF] font-mono text-lg animate-pulse">█</span>
                        <p className="text-[11px] font-mono text-[#626272] uppercase tracking-widest mt-4">PULLING_BLUEPRINTS...</p>
                    </div>
                ) : filteredPosts.length > 0 ? (
                    /* Articles Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="h-full">
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div className="text-center py-24 border border-[#1C1C24] bg-[#111116] rounded-[6px]">
                        <p className="text-sm font-mono text-[#626272] uppercase">NO_RECORDS_MATCHING_QUERY</p>
                    </div>
                )}

                {/* Newsletter Subscription Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto relative bg-[#111116] border border-[#1C1C24] p-8 md:p-12 mt-32 text-center rounded-[6px]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.03),transparent_70%)] pointer-events-none" />
                    {!isSubmitted ? (
                        <>
                            <h3 className="text-lg font-bold font-space text-[#F5F6FA] mb-2 uppercase">Subscribe to the Logbook</h3>
                            <p className="text-xs text-[#A3A3B3] mb-8 leading-relaxed max-w-sm mx-auto">
                                Get technical analysis updates and conversion diagnostics strategies sent directly to your inbox.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com" 
                                    className="px-4 py-3 bg-[#0A0A0F] border border-[#1C1C24] text-white text-[12px] font-mono focus:outline-none focus:border-[#0047FF] flex-1 rounded-sm"
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="px-6 py-3 bg-[#0047FF] hover:bg-[#1E5CFF] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors min-w-[120px] rounded-sm"
                                >
                                    {isSubmitting ? "SYNCING..." : "SUBSCRIBE"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-4">
                            <CheckCircle2 className="w-10 h-10 text-[#0047FF] mb-4" />
                            <p className="text-sm font-bold font-space text-[#F5F6FA] uppercase">TRANSMISSION_ESTABLISHED</p>
                            <p className="text-xs text-[#A3A3B3] mt-2">You will receive an alert when the next teardown drops.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
