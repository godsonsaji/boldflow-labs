"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Plus, Edit2, Trash2, LogOut, Layout, FileText, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function AdminDashboard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        } catch (error) {
            console.error("Error fetching admin posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId: string) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await deleteDoc(doc(db, "blogs", postId));
                setPosts(posts.filter(p => p.id !== postId));
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("Failed to delete post.");
            }
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-[#050505] text-white">
                {/* Sidebar / Header */}
                <header className="border-b border-white/[0.05] bg-[#0a0a0d] sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="text-xl font-bold tracking-tight">
                                Bold<span className="gradient-text">Flow</span> Admin
                            </Link>
                            <nav className="hidden md:flex items-center gap-6">
                                <Link href="/admin" className="text-sm font-medium text-[#0066ff] flex items-center gap-2">
                                    <Layout className="w-4 h-4" /> Dashboard
                                </Link>
                                <Link href="/blog" target="_blank" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> View Site
                                </Link>
                            </nav>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Blog Posts</h1>
                            <p className="text-gray-400">Manage your agency&apos;s content and insights</p>
                        </div>
                        <Link
                            href="/admin/editor"
                            className="px-6 py-3 bg-[#0066ff] hover:bg-[#0052cc] rounded-xl flex items-center gap-2 text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
                        >
                            <Plus className="w-4 h-4" /> Create New Post
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0066ff]"></div>
                        </div>
                    ) : (
                        <div className="bg-[#0a0a0d] border border-white/[0.05] rounded-3xl overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/[0.05] bg-white/[0.02]">
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Post</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.03]">
                                    {posts.length > 0 ? (
                                        posts.map((post) => (
                                            <tr key={post.id} className="hover:bg-white/[0.01] transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-900 border border-white/[0.05] flex-shrink-0">
                                                            <img src={post.coverImage || "/placeholder-blog.jpg"} alt="" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-white group-hover:text-[#0066ff] transition-colors">{post.title}</div>
                                                            <div className="text-xs text-gray-500 mt-1">/{post.slug}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    {post.status === "published" ? (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/10 uppercase tracking-wide">
                                                            <CheckCircle className="w-3 h-3" /> Published
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/10 uppercase tracking-wide">
                                                            <Clock className="w-3 h-3" /> Draft
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-400">
                                                    {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM dd, yyyy") : "N/A"}
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            href={`/admin/editor?id=${post.id}`}
                                                            className="p-2 hover:bg-[#0066ff]/10 text-gray-400 hover:text-[#0066ff] rounded-lg transition-all"
                                                            title="Edit"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(post.id)}
                                                            className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-500 rounded-lg transition-all"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-20 text-center text-gray-500 italic">
                                                No blog posts found. Create your first post to get started!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>
        </ProtectedRoute>
    );
}
