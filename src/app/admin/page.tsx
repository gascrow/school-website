"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FileText,
  Image,
  GraduationCap,
  Plus,
  ArrowRight,
} from "lucide-react";

interface DashboardStats {
  totalPosts: number;
  totalMedia: number;
  totalAkademik: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    totalMedia: 0,
    totalAkademik: 0,
  });
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogsRes, mediaRes, akademikRes] = await Promise.all([
          fetch("/api/blog"),
          fetch("/api/media"),
          fetch("/api/akademik"),
        ]);
        const blogs = blogsRes.ok ? await blogsRes.json() : [];
        const media = mediaRes.ok ? await mediaRes.json() : [];
        const akademik = akademikRes.ok ? await akademikRes.json() : [];

        setStats({
          totalPosts: blogs.length,
          totalMedia: media.length,
          totalAkademik: akademik.length,
        });
        setRecentBlogs(blogs.slice(0, 5));
      } catch {
        // keep defaults
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const statCards = [
    {
      label: "Total Blog",
      value: stats.totalPosts,
      icon: FileText,
      color: "bg-[#CA281E]/10 text-[#CA281E]",
      href: "/admin/blogs",
    },
    {
      label: "Total Akademik",
      value: stats.totalAkademik,
      icon: GraduationCap,
      color: "bg-emerald-500/10 text-emerald-600",
      href: "/admin/akademik",
    },
    {
      label: "Total Media",
      value: stats.totalMedia,
      icon: Image,
      color: "bg-amber-500/10 text-amber-600",
      href: "/admin/media",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-[#CA281E] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Selamat Datang, Admin
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Kelola konten website PKBM Kejuruan Terbuka dari sini.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 flex items-center gap-4 hover:shadow-md transition-shadow group"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center ${card.color}`}
              >
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-gray-300 dark:text-gray-600 group-hover:text-[#CA281E] transition-colors"
              />
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/admin/blogs/create"
          className="bg-[#CA281E] hover:bg-[#a82018] text-white rounded-lg p-5 flex items-center gap-4 transition-colors"
        >
          <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center">
            <Plus size={20} />
          </div>
          <div>
            <p className="font-semibold">Buat Blog Baru</p>
            <p className="text-sm text-white/70">Tulis dan publikasikan artikel</p>
          </div>
        </Link>

        <Link
          href="/admin/akademik/create"
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className="w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <GraduationCap size={20} className="text-emerald-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              Tambah Akademik
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jadwal, kurikulum, atau modul
            </p>
          </div>
        </Link>
      </div>

      {/* Recent blogs */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Blog Terbaru
          </h3>
          <Link
            href="/admin/blogs"
            className="text-sm text-[#CA281E] hover:underline font-medium"
          >
            Lihat Semua
          </Link>
        </div>

        {recentBlogs.length === 0 ? (
          <div className="px-5 py-10 text-center text-gray-400 dark:text-gray-500 text-sm">
            Belum ada blog. Buat blog pertama Anda!
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {recentBlogs.map((blog: any) => (
              <Link
                key={blog.id}
                href={`/admin/blogs/edit/${blog.id}`}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FileText size={16} className="text-gray-400" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {blog.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
