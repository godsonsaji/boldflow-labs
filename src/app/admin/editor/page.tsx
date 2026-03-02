"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import ProtectedRoute from "@/components/ProtectedRoute";
import dynamic from "next/dynamic";
import { ChevronLeft, Save, Loader2, Image as ImageIcon, Tag, Globe, Eye } from "lucide-react";
import Link from "next/link";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
    loading: () => <div className="h-64 bg-white/5 animate-pulse rounded-xl"></div>
});
import "react-quill-new/dist/quill.snow.css";

function EditorContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const postId = searchParams.get("id");

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        coverImage: "",
        authorName: "",
        authorRole: "",
        authorImage: "",
        tags: "",
        status: "draft", // draft or published
    });

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, [postId]);

    const fetchPost = async () => {
        setFetching(true);
        try {
            const docRef = doc(db, "blogs", postId as string);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setFormData({
                    title: data.title || "",
                    slug: data.slug || "",
                    excerpt: data.excerpt || "",
                    content: data.content || "",
                    coverImage: data.coverImage || "",
                    authorName: data.authorName || "",
                    authorRole: data.authorRole || "",
                    authorImage: data.authorImage || "",
                    tags: data.tags ? data.tags.join(", ") : "",
                    status: data.status || "draft",
                });
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setFetching(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from title if slug is empty
        if (name === "title" && !formData.slug) {
            setFormData(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            }));
        }
    };

    const handleEditorChange = (content: string) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const postData = {
            ...formData,
            tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
            updatedAt: serverTimestamp(),
        };

        try {
            if (postId) {
                await updateDoc(doc(db, "blogs", postId), postData);
            } else {
                await addDoc(collection(db, "blogs"), {
                    ...postData,
                    createdAt: serverTimestamp(),
                });
            }
            router.push("/admin");
        } catch (error) {
            console.error("Error saving post:", error);
            alert("Failed to save post.");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <Loader2 className="w-10 h-10 text-[#0066ff] animate-spin mb-4" />
                <p className="text-gray-400">Loading post data...</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 pb-20">
            {/* Action Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-16 z-20 bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-bold">{postId ? "Edit Post" : "Create New Post"}</h1>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="bg-[#0a0a0d] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0066ff] transition-all"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-grow md:flex-grow-0 px-8 py-2.5 bg-[#0066ff] hover:bg-[#0052cc] rounded-xl text-sm font-bold transition-all shadow-[0_4px_15px_rgba(0,102,255,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {postId ? "Update Post" : "Publish Post"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Area */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-2">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Post Title"
                            className="w-full bg-transparent border-none text-4xl md:text-5xl font-bold text-white placeholder:text-white/10 focus:outline-none focus:ring-0 px-0"
                            required
                        />
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Globe className="w-3.5 h-3.5" />
                            <span>boldflowlabs.com/blog/</span>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="bg-transparent border-none text-[#0066ff] focus:outline-none focus:ring-0 p-0"
                                placeholder="url-slug"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Eye className="w-4 h-4" /> Excerpt (Short Summary)
                        </label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full bg-[#0a0a0d] border border-white/[0.05] rounded-2xl p-6 text-gray-300 focus:outline-none focus:border-[#0066ff]/50 transition-all resize-none"
                            placeholder="Write a brief overview to entice readers..."
                            required
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Content</label>
                        <div className="quill-container border border-white/[0.05] rounded-2xl overflow-hidden bg-white/5">
                            <ReactQuill
                                theme="snow"
                                value={formData.content}
                                onChange={handleEditorChange}
                                style={{ height: "500px", background: "white", color: "black" }} // Restoring standard light theme for editor readability
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-8">
                    <div className="bg-[#0a0a0d] border border-white/[0.05] rounded-3xl p-6 space-y-6">
                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <ImageIcon className="w-3.5 h-3.5" /> Cover Image URL
                            </label>
                            <input
                                type="url"
                                name="coverImage"
                                value={formData.coverImage}
                                onChange={handleInputChange}
                                placeholder="https://images.unsplash.com/..."
                                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-all"
                                required
                            />
                            {formData.coverImage && (
                                <div className="aspect-video rounded-xl overflow-hidden border border-white/[0.1] mt-2">
                                    <img src={formData.coverImage} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/[0.05]">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                Author Name
                            </label>
                            <input
                                type="text"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleInputChange}
                                placeholder="e.g. John Doe"
                                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-all"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Author Role
                            </label>
                            <input
                                type="text"
                                name="authorRole"
                                value={formData.authorRole}
                                onChange={handleInputChange}
                                placeholder="e.g. AI Strategy Lead"
                                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-all"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Author Image URL
                            </label>
                            <input
                                type="url"
                                name="authorImage"
                                value={formData.authorImage}
                                onChange={handleInputChange}
                                placeholder="https://..."
                                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-all"
                            />
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/[0.05]">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <Tag className="w-3.5 h-3.5" /> Tags (Comma separated)
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleInputChange}
                                placeholder="AI, Automation, Business"
                                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-all"
                            />
                            <div className="flex flex-wrap gap-2">
                                {formData.tags.split(",").map(tag => tag.trim()).filter(Boolean).map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-[#0066ff]/10 text-[#0066ff] text-[10px] font-bold rounded uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0066ff]/20 to-purple-500/5 border border-[#0066ff]/30 rounded-3xl p-6">
                        <h4 className="font-bold text-white mb-2">Publishing Tip</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Ensure your SEO title and slug are optimized for the keywords you want to rank for. High-quality images increase engagement by up to 80%.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default function AdminEditorPage() {
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-[#050505] text-white">
                <header className="border-b border-white/[0.05] bg-[#0a0a0d] sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <Link href="/admin" className="text-xl font-bold tracking-tight">
                            Bold<span className="gradient-text">Flow</span> Admin
                        </Link>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <Suspense fallback={<div>Loading editor...</div>}>
                        <EditorContent />
                    </Suspense>
                </main>
            </div>

            <style jsx global>{`
        .ql-toolbar.ql-snow {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          border-color: rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.05);
        }
        .ql-container.ql-snow {
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          border-color: rgba(255, 255, 255, 0.05);
          font-family: inherit;
          font-size: 16px;
        }
        .ql-editor {
          min-height: 400px;
          color: black;
          background: white;
        }
      `}</style>
        </ProtectedRoute>
    );
}
