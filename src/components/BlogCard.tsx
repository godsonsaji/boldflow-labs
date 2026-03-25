import Link from "next/link";
import { format } from "date-fns";

interface BlogCardProps {
    post: {
        id: string;
        title: string;
        slug: string;
        coverImage: string;
        excerpt: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createdAt: any;
        readTime?: string;
        authorName?: string;
        authorImage?: string;
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();

    return (
        <Link href={`/blog/${post.slug}`} className="group h-full flex flex-col bg-[#050505] relative overflow-hidden active:scale-[0.99] transition-transform duration-150">
            {/* Outer hover border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#333] z-20 pointer-events-none transition-colors duration-150" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-20 pointer-events-none" />

            <div className="target-hex target-hex-left-top z-30" />
            <div className="target-hex target-hex-right-bottom z-30" />

            {/* Top Bar (Terminal style) */}
            <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#525252] group-hover:bg-[#0066ff] transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#525252] group-hover:text-[#A3A3A3] transition-colors">
                        TLM_LOG
                    </span>
                </div>
                <div className="flex items-center text-[10px] font-mono text-[#525252]">
                    <span>[ {post.readTime || "5M_READ"} ]</span>
                </div>
            </div>

            {/* Image Container */}
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0A0A0A] border-b border-[#1A1A1A] shrink-0">
                <img
                    src={post.coverImage || "/placeholder-blog.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50 z-10" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-[#050505]">
                <div className="flex items-center gap-3 text-caption text-[#71717A] mb-4">
                    <span>{format(date, "MMM dd, yyyy")}</span>
                    <span className="text-[#333]">|</span>
                    <span className="font-mono">UID:{post.id.slice(0, 6)}</span>
                </div>

                <h3 className="text-[20px] font-medium text-[#F5F5F5] uppercase mb-4 group-hover:text-[#0066ff] transition-colors leading-tight line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-body text-[#A3A3A3] leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#1A1A1A] mt-auto">
                    {post.authorName ? (
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 border border-[#1A1A1A] bg-[#111] overflow-hidden">
                                <img
                                    src={post.authorImage || "https://ui-avatars.com/api/?name=" + post.authorName + "&background=111&color=fff"}
                                    alt={post.authorName}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <span className="text-caption text-[#F5F5F5] uppercase tracking-wider">{post.authorName}</span>
                        </div>
                    ) : (
                        <span className="text-caption text-[#525252] uppercase tracking-wider">SYS_CONFIG</span>
                    )}

                    <div className="flex items-center text-label text-[#525252] group-hover:text-[#F5F5F5] font-mono transition-colors">
                        [ READ ]
                    </div>
                </div>
            </div>
        </Link>
    );
}
