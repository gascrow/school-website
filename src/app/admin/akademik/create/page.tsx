"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateAkademikPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "jadwal",
    tahunAjaran: "",
    semester: "",
    downloadUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/akademik", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create");
      }

      router.push("/admin/akademik");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Tambah Akademik
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Tambahkan jadwal, kurikulum, atau modul baru
          </p>
        </div>
        <Link
          href="/admin/akademik"
          className="text-sm text-[#CA281E] hover:underline font-medium"
        >
          ← Kembali
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Judul *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              placeholder="e.g. Jadwal Paket C Semester I 2025/2026"
            />
          </div>

          {/* Category + Tahun Ajaran */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Kategori *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              >
                <option value="jadwal">Jadwal</option>
                <option value="kurikulum">Kurikulum</option>
                <option value="modul">Modul</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="tahunAjaran"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Tahun Ajaran *
              </label>
              <input
                type="text"
                id="tahunAjaran"
                name="tahunAjaran"
                value={formData.tahunAjaran}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
                placeholder="e.g. 2025/2026"
              />
            </div>
          </div>

          {/* Semester */}
          <div>
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Semester / Periode
            </label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              placeholder="e.g. Semester 1, Triwulan II"
            />
          </div>

          {/* Download URL */}
          <div>
            <label
              htmlFor="downloadUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Link Download *
            </label>
            <input
              type="url"
              id="downloadUrl"
              name="downloadUrl"
              value={formData.downloadUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              placeholder="https://drive.google.com/..."
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Deskripsi
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition resize-none"
              placeholder="Deskripsi singkat (opsional)"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#CA281E] hover:bg-[#a82018] disabled:opacity-50 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {loading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-lg animate-spin" />
              )}
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <Link
              href="/admin/akademik"
              className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
