"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

interface Akademik {
  id: number;
  title: string;
  description: string | null;
  category: string;
  tahunAjaran: string;
  semester: string | null;
  downloadUrl: string;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

const categories = [
  { value: "", label: "Semua" },
  { value: "jadwal", label: "Jadwal" },
  { value: "kurikulum", label: "Kurikulum" },
  { value: "modul", label: "Modul" },
];

const categoryLabel: Record<string, string> = {
  jadwal: "Jadwal",
  kurikulum: "Kurikulum",
  modul: "Modul",
};

const categoryColor: Record<string, string> = {
  jadwal: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  kurikulum: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  modul: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function AdminAkademikPage() {
  const [items, setItems] = useState<Akademik[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    fetchItems();
  }, [activeCategory]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const url = activeCategory
        ? `/api/akademik?category=${activeCategory}`
        : "/api/akademik";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus item ini?")) return;

    try {
      const response = await fetch(`/api/akademik/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete");
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Akademik
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Kelola jadwal, kurikulum, dan modul
          </p>
        </div>
        <Link
          href="/admin/akademik/create"
          className="bg-[#CA281E] hover:bg-[#a82018] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <span>+</span> Tambah
        </Link>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-[#CA281E] text-white"
                : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#CA281E] border-t-transparent rounded-lg animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : items.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg py-16 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Belum ada data akademik. Mulai tambahkan yang pertama!
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Judul</th>
                <th className="px-5 py-3">Kategori</th>
                <th className="px-5 py-3">Tahun Ajaran</th>
                <th className="px-5 py-3">Link</th>
                <th className="px-5 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      {item.semester && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          {item.semester}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${
                        categoryColor[item.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {categoryLabel[item.category] || item.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400">
                    {item.tahunAjaran}
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#CA281E] hover:underline text-xs font-medium"
                    >
                      <ExternalLink size={13} />
                      Buka
                    </a>
                  </td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <Link
                      href={`/admin/akademik/edit/${item.id}`}
                      className="inline-flex px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-flex px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
