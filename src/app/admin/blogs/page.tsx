"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blog");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
        <div className="container">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
              Blog Management
            </h1>
            <p className="text-body-color dark:text-white/70">
              Manage your blog posts
            </p>
          </div>
          <Link
            href="/admin/blogs/create"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
          >
            Create New Blog
          </Link>
        </div>

        <div className="bg-white dark:bg-dark rounded-lg shadow-one dark:shadow-gray-dark overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-dark-2">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-body-color uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-body-color uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-body-color uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-body-color uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-2">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-dark-2 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {blog.image && (
                          <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden mr-4">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-black dark:text-white">
                            {blog.title}
                          </div>
                          <div className="text-sm text-body-color dark:text-white/70">
                            {blog.excerpt || "No excerpt"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {blog.authorImage && (
                          <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden mr-3">
                            <Image
                              src={blog.authorImage}
                              alt={blog.authorName}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-black dark:text-white">
                            {blog.authorName}
                          </div>
                          <div className="text-sm text-body-color dark:text-white/70">
                            {blog.authorRole || "Author"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-body-color dark:text-white/70">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="text-primary hover:text-primary/90 transition-colors duration-300"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-700 transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body-color dark:text-white/70">
                No blog posts found.{" "}
                <Link href="/admin/blogs/create" className="text-primary hover:text-primary/90">
                  Create your first blog post
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}