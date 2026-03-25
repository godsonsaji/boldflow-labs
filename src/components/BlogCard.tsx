import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Terminal } from "lucide-react";

interface BlogCardProps {
    post: {
        id: string;
        title: string;
        slug: string;
        coverImage: string;
        excerpt: string;
        createdAt: any;
        readTime?: string;
        authorName?: string;
        authorImage?: string;
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();

    return (
        <Link href={`/blog/${post.slug}`} className="group h-full flex flex-col bg-[#050505] border border-[#1A1A1A] rounded-[2px] overflow-hidden hover:border-[#FF5722]/40 transition-colors duration-500">
            {/* Top Bar (Terminal style) */}
            <div className="bg-[#111] border-b border-[#1A1A1A] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-[#A1A1AA]" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#A1A1AA]">
                        Telemetry_Log
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#00a2ff]">
                    <span>[ {post.readTime || "5 min read"} ]</span>
                </div>
            </div>

            {/* Image Container */}
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0A0A0A] border-b border-[#1A1A1A]">
                <img
                    src={post.coverImage || "/placeholder-blog.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0"
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-[#050505]">
                <div className="flex items-center gap-3 text-[10px] text-[#A1A1AA] mb-4 font-mono uppercase tracking-widest">
                    <span>{format(date, "MMM dd, yyyy")}</span>
                    <span className="w-1 h-1 rounded-full bg-[#333]"></span>
                    <span>UID: {post.id.slice(0, 8)}</span>
                </div>

                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#00a2ff] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                </h3>

                <p className="text-[#71717A] text-sm leading-relaxed font-light line-clamp-3 mb-8 flex-grow">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#1A1A1A] mt-auto">
                    {post.authorName ? (
                        <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-[2px] overflow-hidden bg-[#111] border border-[#333]">
                                <img
                                    src={post.authorImage || "https://ui-avatars.com/api/?name=" + post.authorName + "&background=0066ff&color=fff"}
                                    alt={post.authorName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">{post.authorName}</span>
                        </div>
                    ) : (
                        <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">System Config</span>
                    )}

                    <div className="flex items-center text-[10px] uppercase font-mono tracking-widest text-white group-hover:text-[#FF5722] transition-colors gap-2">
                        Execute Read
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
