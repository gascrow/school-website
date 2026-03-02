"use client";

import { useState, useEffect } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "@/components/Blog/SingleBlog";

interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string | null;
  image: string | null;
  tags: string | null;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex justify-center">
            <div className="animate-spin rounded-md h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="bg-white py-16 md:py-20 lg:py-20"
    >
      <div className="container">

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={{
                id: blog.id,
                title: blog.title,
                paragraph: blog.excerpt || blog.content.substring(0, 100) + "...",
                image: blog.image || "/images/blog/blog-01.jpg",
                tags: blog.tags ? blog.tags.split(",").map(tag => tag.trim()) : ["Blog"],
                publishDate: new Date(blog.createdAt).toLocaleDateString(),
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;