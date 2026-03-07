"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/Admin/RichTextEditor"), { ssr: false });

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    detail: "",
    image: "",
    images: [] as string[],
    tags: "",
    authorName: "Admin",
    authorRole: "Administrator",
  });

  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<"cover" | "gallery">("cover");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMediaSelect = (url: string) => {
    if (mediaTarget === "cover") {
      setSelectedImage(url);
      setFormData((prev) => ({ ...prev, image: url }));
    } else {
      setFormData((prev) => ({ ...prev, images: [...prev.images, url] }));
    }
    setMediaLibraryOpen(false);
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          images: formData.images.length > 0 ? JSON.stringify(formData.images) : null,
        }),
      });

      if (!response.ok) throw new Error("Failed to create blog");

      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Buat Blog Baru
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Tulis dan publikasikan artikel baru
          </p>
        </div>
        <Link
          href="/admin/blogs"
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
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Judul Blog *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              placeholder="Masukkan judul blog"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition"
              placeholder="e.g. pendidikan, berita, kegiatan"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Ringkasan / Konten Singkat *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-[#CA281E]/30 focus:border-[#CA281E] outline-none transition resize-none"
              placeholder="Tulis ringkasan singkat berita..."
            />
            <p className="text-xs text-gray-400 mt-1">Teks singkat yang muncul di daftar berita</p>
          </div>

          {/* Detail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Detail Berita
            </label>
            <RichTextEditor
              value={formData.detail}
              onChange={(val) => setFormData((prev) => ({ ...prev, detail: val }))}
            />
            <p className="text-xs text-gray-400 mt-1">Isi lengkap berita yang tampil di halaman detail.</p>
          </div>

          {/* Image Cover */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Gambar Cover *
            </label>
            <div className="space-y-3">
              {selectedImage && (
                <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img src={selectedImage} alt="Selected" className="w-full h-48 object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null);
                      setFormData((prev) => ({ ...prev, image: "" }));
                    }}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded-lg transition-colors"
                  >
                    Hapus
                  </button>
                </div>
              )}
              {!selectedImage && (
                <button
                  type="button"
                  onClick={() => { setMediaTarget("cover"); setMediaLibraryOpen(true); }}
                  className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center hover:border-[#CA281E]/50 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#CA281E]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CA281E]">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pilih dari Media Library</p>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Gallery Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Gambar Tambahan (Slideshow)
            </label>
            <p className="text-xs text-gray-400 mb-3">Gambar-gambar ini akan muncul sebagai slideshow di halaman detail berita.</p>
            <div className="space-y-3">
              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-28 object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveGalleryImage(i)}
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => { setMediaTarget("gallery"); setMediaLibraryOpen(true); }}
                className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center hover:border-[#CA281E]/50 transition-colors"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#CA281E] text-lg">+</span>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tambah Gambar</p>
                </div>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#CA281E] hover:bg-[#a82018] disabled:opacity-50 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              {loading ? "Menyimpan..." : "Publikasikan"}
            </button>
            <Link href="/admin/blogs" className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Batal
            </Link>
          </div>
        </form>
      </div>

      {/* Media Library Modal */}
      {mediaLibraryOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white">Media Library</h3>
              <button onClick={() => setMediaLibraryOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[65vh]">
              <MediaLibrary onSelect={handleMediaSelect} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MediaLibrary({ onSelect }: { onSelect: (url: string) => void }) {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/media");
        const data = await res.json();
        setMedia(data);
      } catch (error) {
        console.error("Failed to fetch media:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-6 h-6 border-2 border-[#CA281E] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : media.length === 0 ? (
        <div className="text-center py-10 text-gray-400 dark:text-gray-500 text-sm">
          Belum ada media. Upload gambar dulu di halaman Media.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {media.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.url)}
              className="group relative rounded-lg overflow-hidden border-2 border-transparent hover:border-[#CA281E] transition-colors focus:outline-none focus:border-[#CA281E]"
            >
              <img
                src={item.url}
                alt={item.name || "Media"}
                className="w-full h-28 object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+";
                }}
              />
              <div className="absolute inset-0 bg-[#CA281E]/0 group-hover:bg-[#CA281E]/10 transition-colors flex items-center justify-center">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 bg-[#CA281E] px-3 py-1 rounded-lg transition-opacity">
                  Pilih
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
