"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    image: "",
    authorName: "",
    authorImage: "",
    authorRole: "",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
                <div>
                  <label
                    htmlFor="authorName"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Author Name *
                  </label>
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="Enter author name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="authorRole"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Author Role
                  </label>
                  <input
                    type="text"
                    id="authorRole"
                    name="authorRole"
                    value={formData.authorRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="e.g., Content Writer, Developer"
                  />
                </div>
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
                    placeholder="e.g., design, development, tutorial"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="excerpt"
                  className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                >
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                  placeholder="Enter a brief excerpt of your blog post"
                />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Blog Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="authorImage"
                    className="block text-sm font-medium text-body-color dark:text-white/70 mb-2"
                  >
                    Author Image URL
                  </label>
                  <input
                    type="url"
                    id="authorImage"
                    name="authorImage"
                    value={formData.authorImage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="https://example.com/author.jpg"
                  />
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
    </div>
  );
}