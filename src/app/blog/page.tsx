"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
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

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog?published=true");
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

  // Auto-slideshow for featured blogs
  const featuredBlogs = blogs.slice(0, 5);
  const sidebarBlogs = blogs.slice(0, 4);
  const terkiniBlogs = blogs.slice(0, 8);
  const allBlogs = blogs;

  const goToNext = useCallback(() => {
    setFeaturedIndex((prev) => (prev + 1) % featuredBlogs.length);
  }, [featuredBlogs.length]);

  useEffect(() => {
    if (featuredBlogs.length <= 1) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [featuredBlogs.length, goToNext]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const timeAgo = (dateStr: string) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Hari ini";
    if (diff === 1) return "1 hari yang lalu";
    if (diff < 7) return `${diff} hari yang lalu`;
    if (diff < 14) return "1 minggu yang lalu";
    if (diff < 30) return `${Math.floor(diff / 7)} minggu yang lalu`;
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <section className="bg-primary pt-24 pb-6 lg:pt-28 lg:pb-8">
          <div className="container">
            <h1 className="text-2xl md:text-3xl font-extrabold italic text-white mb-2">
              Berita
            </h1>
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors underline">Home</Link>
              <span>/</span>
              <span className="text-white/60">Berita</span>
            </nav>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container">
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        </section>
      </>
    );
  }

  const currentFeatured = featuredBlogs[featuredIndex];

  return (
    <>
      {/* Breadcrumb Header */}
      <section className="bg-primary pt-24 pb-6 lg:pt-28 lg:pb-8">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-extrabold italic text-white mb-2">
            Berita
          </h1>
          <nav className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors underline">Home</Link>
            <span>/</span>
            <span className="text-white/60">Berita</span>
          </nav>
        </div>
      </section>

      {/* Featured + Sidebar Section */}
      {featuredBlogs.length > 0 && (
        <section className="bg-white dark:bg-bg-color-dark pt-10 pb-6">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Featured Blog Slideshow */}
              <div className="w-full lg:w-7/12">
                <Link href={`/blog/${currentFeatured?.id}`} className="block relative rounded-lg overflow-hidden group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={currentFeatured?.image || "/images/blog/blog-01.jpg"}
                      alt={currentFeatured?.title || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-lg mb-3 capitalize">
                      {currentFeatured?.tags?.split(",")[0]?.trim() || "Berita"}
                    </span>
                    <h2 className="text-white text-lg md:text-2xl font-bold leading-tight mb-3 line-clamp-3">
                      {currentFeatured?.title}
                    </h2>
                    <span className="inline-flex items-center text-white text-sm font-medium hover:opacity-80">
                      Mulai Baca
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>

                  {/* Dot Indicators */}
                  {featuredBlogs.length > 1 && (
                    <div className="absolute bottom-3 right-6 flex gap-1.5">
                      {featuredBlogs.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            setFeaturedIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === featuredIndex ? "bg-white w-5" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </Link>
              </div>

              {/* Right: Numbered News List */}
              <div className="w-full lg:w-5/12">
                <div className="bg-gray-50 dark:bg-dark rounded-lg p-5 h-full">
                  <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
                    {sidebarBlogs.map((blog, idx) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.id}`}
                        className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 group"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-black dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-1">
                            {blog.title}
                          </h3>
                          <p className="text-xs text-body-color">
                            {timeAgo(blog.createdAt)}
                          </p>
                        </div>
                        {blog.image && (
                          <div className="relative w-[80px] h-[55px] flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Berita Terkini - Horizontal Scroll */}
      {terkiniBlogs.length > 0 && (
        <section className="bg-white dark:bg-bg-color-dark pb-10">
          <div className="container">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl md:text-2xl font-extrabold text-primary dark:text-white">
                Berita Terkini
              </h2>
            </div>
            <div className="w-full h-0.5 bg-primary rounded-full mb-6"></div>

            <div className="relative">
              {/* Arrow Buttons */}
              <div className="absolute -top-18 right-0 flex gap-2 z-10">
                <button
                  onClick={scrollLeft}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-primary text-gray-400 hover:text-primary flex items-center justify-center transition-colors"
                  aria-label="Scroll left"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="w-8 h-8 rounded-full border-2 border-primary bg-primary text-white hover:bg-primary/90 flex items-center justify-center transition-colors"
                  aria-label="Scroll right"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Cards */}
              <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              >
                {terkiniBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="min-w-[220px] max-w-[220px] flex-shrink-0 snap-start"
                  >
                    <Link href={`/blog/${blog.id}`} className="block group">
                      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-3">
                        <Image
                          src={blog.image || "/images/blog/blog-01.jpg"}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute bottom-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded capitalize">
                          {blog.tags?.split(",")[0]?.trim() || "Berita"}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-black dark:text-white leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Blogs Grid */}
      {allBlogs.length > 0 && (
        <section className="bg-gray-50 dark:bg-bg-color-dark py-10">
          <div className="container">
            <div className="mb-2">
              <h2 className="text-xl md:text-2xl font-extrabold text-primary dark:text-white">
                Semua Berita
              </h2>
            </div>
            <div className="w-full h-0.5 bg-primary rounded-full mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
              {allBlogs.map((blog) => (
                <div key={blog.id}>
                  <SingleBlog
                    blog={{
                      id: blog.id,
                      title: blog.title,
                      paragraph:
                        blog.excerpt || blog.content.substring(0, 100) + "...",
                      image: blog.image || "/images/blog/blog-01.jpg",
                      tags: blog.tags
                        ? blog.tags.split(",").map((tag) => tag.trim())
                        : ["Blog"],
                      publishDate: new Date(blog.createdAt).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPage;