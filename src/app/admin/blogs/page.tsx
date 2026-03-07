"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  authorName: string;
  tags: string | null;
  archived: boolean;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

const tabs = [
  { label: "Semua", value: "all" },
  { label: "Published", value: "published" },
  { label: "Archived", value: "archived" },
];

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blog");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus blog ini?")) return;
    try {
      const response = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete blog");
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleToggleArchive = async (id: number, currentArchived: boolean) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archived: !currentArchived }),
      });
      if (!response.ok) throw new Error("Failed to update blog");
      setBlogs(blogs.map((b) => (b.id === id ? { ...b, archived: !currentArchived } : b)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    if (activeTab === "published") return !blog.archived;
    if (activeTab === "archived") return blog.archived;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Blog Management
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {blogs.length} artikel
          </p>
        </div>
        <Link
          href="/admin/blogs/create"
          className="bg-[#CA281E] hover:bg-[#a82018] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <span>+</span> Buat Blog
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.value
                ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#CA281E] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {blog.image && (
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={40}
                          height={40}
                          className="rounded-lg object-cover"
                        />
                      )}
                      <span className="font-medium text-gray-900 dark:text-white">
                        {blog.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                        blog.archived
                          ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                          : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {blog.archived ? "Archived" : "Published"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleToggleArchive(blog.id, blog.archived)}
                      className={`inline-flex px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        blog.archived
                          ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40"
                          : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/40"
                      }`}
                    >
                      {blog.archived ? "Publish" : "Arsipkan"}
                    </button>
                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="inline-flex px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="inline-flex px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-10 text-gray-400 dark:text-gray-500 text-sm">
              {activeTab === "archived"
                ? "Tidak ada blog yang diarsipkan."
                : activeTab === "published"
                ? "Tidak ada blog yang dipublikasikan."
                : "Belum ada blog. Mulai buat yang pertama!"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}