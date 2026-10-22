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
        tags?: string[];
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    const date = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();
    const primaryTag = post.tags?.[0] || "TECHNICAL GUIDE";
    const cleanReadTime = post.readTime
        ? post.readTime.replace("_READ", " min read").replace("M_READ", " min read")
        : "5 min read";

    return (
        <article className="group h-full flex flex-col bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md">
            {/* Top Meta Bar */}
            <div className="bg-slate-50/80 border-b border-slate-100 px-5 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2563FF] font-semibold">
                        {primaryTag}
                    </span>
                </div>
                <div className="text-xs font-mono text-slate-500">
                    <span>{cleanReadTime}</span>
                </div>
            </div>

            {/* Image Container with Linked Anchor */}
            <Link 
                href={`/blog/${post.slug}`} 
                className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100 border-b border-slate-100 shrink-0 block group/img"
                aria-label={`Read article: ${post.title}`}
            >
                <img
                    src={post.coverImage || "/og-image.png"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
            </Link>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5 font-mono">
                    <time dateTime={date.toISOString()}>{format(date, "MMMM dd, yyyy")}</time>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-600 font-medium">Analysis</span>
                </div>

                {/* Post Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#2563FF] transition-colors mb-2.5 leading-snug line-clamp-2">
                    <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#2563FF] transition-colors"
                    >
                        {post.title}
                    </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                </p>

                {/* Author and Read Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-[9px] font-bold font-mono text-[#2563FF] shrink-0">
                            BF
                        </div>
                        <span className="text-xs text-slate-700 font-medium">
                            {post.authorName || "BoldFlow Engineering"}
                        </span>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-mono font-semibold text-[#2563FF] hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
                        aria-label={`Read complete guide: ${post.title}`}
                    >
                        <span>Read Guide</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
