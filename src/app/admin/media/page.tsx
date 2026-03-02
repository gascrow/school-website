"use client";

import Link from "next/link";
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

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex md:flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            PKBM Intan
          </h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/blogs"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Blog Management
          </Link>

          <Link
            href="/admin/media"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            Media Library
          </Link>

          <Link
            href="/admin/analytics"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Analytics
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Media Library
          </h2>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
            />
            <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
        </header>

        <main className="flex-1 p-6">
          {/* Upload Section */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleUpload}
              className="block w-full text-sm border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-white p-2"
            />
            {loading && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Uploading...</p>
            )}
          </div>

          {/* Media Grid */}
          {media.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No media uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {media.map((item) => (
                <div key={item.id} className="group relative cursor-pointer">
                  <img
                    src={item.url}
                    alt={item.name || "Media file"}
                    className="rounded-lg object-cover w-full h-40 border-2 border-transparent group-hover:border-primary transition-colors"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDIwMCAyMDBIMHoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTAgMEwyMDAgMjAwVjBIMHoiIGZpbGw9IiM5Q0E0QUYiLz4KPHRleHQgeD0iMTAwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZDN0E4QiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";
                    }}
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 px-2 py-1 rounded">
                      Select
                    </span>
                  </div>

                  <button
                    onClick={async (e) => {
                      e.stopPropagation(); // Prevent image selection when clicking delete
                      const confirmDelete = confirm("Delete this image?");
                      if (!confirmDelete) return;

                      await fetch(`/api/media/${item.id}`, {
                        method: "DELETE",
                      });

                      fetchMedia();
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
