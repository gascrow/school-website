"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    tags: "",
  });

  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMediaSelect = (url: string) => {
    setSelectedImage(url);
    setFormData(prev => ({ ...prev, image: url }));
    setMediaLibraryOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      const newBlog = await response.json();
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
                Create New Blog
              </h1>
              <p className="text-body-color dark:text-white/70">
                Add a new blog post to your website
              </p>
            </div>
            <Link
              href="/admin/blogs"
              className="text-primary hover:text-primary/90 transition-colors duration-300"
            >
              ← Back to Blog Management
            </Link>
          </div>

          <div className="bg-white dark:bg-dark rounded-lg shadow-one dark:shadow-gray-dark p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="Enter blog title"
                  />
                </div>
              </div>

              {/* Content & Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="tags"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="e.g., school, education, news"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                >
                  Blog Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  required
                  className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                  placeholder="Write your blog content here..."
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                >
                  Blog Image
                </label>
                <div className="space-y-3">
                  {selectedImage && (
                    <div className="border border-body-color/10 dark:border-white/10 rounded-lg p-2">
                      <img
                        src={selectedImage}
                        alt="Selected blog image"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setMediaLibraryOpen(true)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                    >
                      Select from Media Library
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setFormData(prev => ({ ...prev, image: "" }));
                      }}
                      className="bg-gray-200 dark:bg-dark-2 text-black dark:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-dark-3"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating..." : "Create Blog"}
                </button>
                <Link
                  href="/admin/blogs"
                  className="bg-gray-200 dark:bg-dark-2 text-black dark:text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-dark-3"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Media Library Modal */}
      {mediaLibraryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-body-color/10 dark:border-white/10">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Media Library
              </h3>
              <button
                onClick={() => setMediaLibraryOpen(false)}
                className="text-body-color dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <MediaLibrary onSelect={handleMediaSelect} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Media Library Component
function MediaLibrary({ onSelect }: { onSelect: (url: string) => void }) {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center py-8">
          <p className="text-body-color dark:text-white/70">Loading media...</p>
        </div>
      ) : media.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-body-color dark:text-white/70">No media uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {media.map((item) => (
            <div key={item.id} className="group relative cursor-pointer" onClick={() => onSelect(item.url)}>
              <img
                src={item.url}
                alt={item.name || "Media file"}
                className="rounded-lg object-cover w-full h-32 border-2 border-transparent group-hover:border-primary transition-colors"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDIwMCAyMDBIMHoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTAgMEwyMDAgMjAwVjBIMHoiIGZpbGw9IiM5Q0E0QUYiLz4KPHRleHQgeD0iMTAwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZDN0E4QiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 px-2 py-1 rounded">
                  Select
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
