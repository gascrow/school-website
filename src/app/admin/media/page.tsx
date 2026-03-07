"use client";

import { useEffect, useState } from "react";

export default function MediaPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    const res = await fetch("/api/media");
    const data = await res.json();
    setMedia(data);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    await fetchMedia();
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Media Library
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {media.length} file
          </p>
        </div>
      </div>

      {/* Upload */}
      <div className="bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
        <label className="cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#CA281E]/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#CA281E]"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Klik untuk upload gambar
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              PNG, JPG, WEBP
            </p>
          </div>
          <input
            type="file"
            onChange={handleUpload}
            className="hidden"
            accept="image/*"
          />
        </label>
        {loading && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-[#CA281E] border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-gray-500">Uploading...</span>
          </div>
        )}
      </div>

      {/* Media Grid */}
      {media.length === 0 ? (
        <div className="text-center py-10 text-gray-400 dark:text-gray-500 text-sm">
          Belum ada media. Upload gambar pertama Anda.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.name || "Media file"}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+";
                }}
              />
              <button
                onClick={async () => {
                  if (!confirm("Hapus gambar ini?")) return;
                  await fetch(`/api/media/${item.id}`, { method: "DELETE" });
                  fetchMedia();
                }}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
