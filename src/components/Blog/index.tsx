"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SingleBlog from "./SingleBlog";

interface BlogAPI {
  id: number;
  title: string;
  content: string;
  image: string | null;
  tags: string | null;
  createdAt: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogAPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog?published=true");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-10">
        <div className="container px-4 md:px-6 lg:px-25">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white">
              Berita Terbaru 
            </h2>
          </div>
          <div className="w-28 md:w-40 h-1 bg-yellow rounded-full mb-8"></div>
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  const featuredBlog = {
    title: blogs[0].title,
    tag: blogs[0].tags?.split(",")[0]?.trim() || "Berita",
    image: blogs[0].image || "/images/blog/blog-01.jpg",
  };

  const displayBlogs = blogs.slice(0, 6).map((b) => ({
    id: b.id,
    title: b.title,
    paragraph: b.content.substring(0, 100) + "...",
    image: b.image || "/images/blog/blog-01.jpg",
    tags: b.tags ? b.tags.split(",").map((t) => t.trim()) : ["Blog"],
    publishDate: new Date(b.createdAt).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }));

  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-10"
    >
      <div className="container px-4 md:px-6 lg:px-25">
        {/* --- Section Header --- */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white">
            Berita Terbaru
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm md:text-base font-bold px-5 py-2.5 rounded-lg transition-colors duration-300"
          >
            Berita Lainnya
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="w-28 md:w-40 h-1 bg-yellow rounded-full mb-8"></div>

        {/* --- Featured Blog Section --- */}
        <div className="relative bg-primary rounded-lg mb-10 overflow-hidden min-h-[250px] md:min-h-[400px] flex items-center">
              <div className="absolute inset-0 z-0">
                <img
                  src={featuredBlog.image}
                  alt="Blog background"
                  className="w-full h-full object-cover opacity-50 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
              </div>

              <div className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col justify-center items-start">
                <div className="mb-6">
                  <span className="bg-white backdrop-blur-sm text-primary px-4 py-1.5 rounded-lg text-xs font-bold capitalize tracking-wider border border-white/30">
                    {featuredBlog.tag}
                  </span>
                </div>

                <h2 className="text-xl md:text-4xl lg:text-2xl font-bold text-white mb-8 leading-tight max-w-2xl antialiased">
                  {featuredBlog.title}
                </h2>

                <div className="mt-2">
                  <Link
                    href={`/blog/${blogs[0]?.id}`}
                    className="inline-flex items-center text-white px-0 py-0 font-bold hover:opacity-50 transition-all duration-300"
                  >
                    Mulai Baca
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* --- Blog Grid Section --- */}
            <div className="relative">
              <div className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {displayBlogs.map((blog) => (
                  <div key={blog.id} className="min-w-[calc(33.333%-1rem)] max-w-[calc(33.333%-1rem)] flex-shrink-0 snap-start max-md:min-w-[calc(50%-0.75rem)] max-md:max-w-[calc(50%-0.75rem)] max-sm:min-w-full max-sm:max-w-full">
                    <SingleBlog blog={blog} />
                  </div>
                ))}
              </div>
            </div>

      </div>
    </section>
  );
};

export default Blog;