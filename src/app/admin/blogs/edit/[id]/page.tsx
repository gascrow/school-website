"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  image: string | null;
  authorName: string;
  authorImage: string | null;
  authorRole: string | null;
  tags: string | null;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blog, setBlog] = useState<Blog | null>(null);

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

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blog/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      const data = await response.json();
      setBlog(data);
      setFormData({
        title: data.title,
        content: data.content,
        excerpt: data.excerpt || "",
        image: data.image || "",
        authorName: data.authorName,
        authorImage: data.authorImage || "",
        authorRole: data.authorRole || "",
        tags: data.tags || "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

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
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      const updatedBlog = await response.json();
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
        <div className="container">
          <div className="flex justify-center">
            <div className="animate-spin rounded-md h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Error
            </h2>
            <p className="text-body-color dark:text-white/70">{error}</p>
            <Link
              href="/admin/blogs"
              className="text-primary hover:text-primary/90 transition-colors duration-300 mt-4 inline-block"
            >
              ← Back to Blog Management
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Blog Not Found
            </h2>
            <p className="text-body-color dark:text-white/70">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/admin/blogs"
              className="text-primary hover:text-primary/90 transition-colors duration-300 mt-4 inline-block"
            >
              ← Back to Blog Management
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
                Edit Blog: {blog.title}
              </h1>
              <p className="text-body-color dark:text-white/70">
                Update your blog post information
              </p>
            </div>
            <Link
              href="/admin/blogs"
              className="text-primary hover:text-primary/90 transition-colors duration-300"
            >
              ← Back to Blog Management
            </Link>
          </div>

          <div className="bg-white dark:bg-dark rounded-md shadow-one dark:shadow-gray-dark p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-body-color/10 dark:border-white/10 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark-2 text-black dark:text-white transition-all duration-300"
                    placeholder="https://example.com/author.jpg"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>
                <Link
                  href="/admin/blogs"
                  className="bg-gray-200 dark:bg-dark-2 text-black dark:text-white px-8 py-3 rounded-md font-bold transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-dark-3"
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