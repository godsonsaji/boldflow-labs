import Link from "next/link";
import { format } from "date-fns";

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
        <Link href={`/blog/${post.slug}`} className="group h-full">
            <div className="bg-[#0a0a0d] border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#0066ff]/50 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)] h-full flex flex-col">
                {/* Image Container */}
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                    <img
                        src={post.coverImage || "/placeholder-blog.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                        <span>{format(date, "MMM dd, yyyy")}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{post.readTime || "5 min read"}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0066ff] transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {post.excerpt}
                    </p>

                    {post.authorName && (
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-5 h-5 rounded-full overflow-hidden bg-white/5 border border-white/10">
                                <img
                                    src={post.authorImage || "https://ui-avatars.com/api/?name=" + post.authorName + "&background=0066ff&color=fff"}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs text-gray-400">{post.authorName}</span>
                        </div>
                    )}

                    <div className="flex items-center text-sm font-semibold text-[#0066ff]">
                        Read Full Article
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
