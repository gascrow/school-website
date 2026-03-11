"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import TagButton from "@/components/Blog/TagButton";
import SingleBlog from "@/components/Blog/SingleBlog";

interface BlogDetail {
  id: number;
  title: string;
  content: string;
  detail: string | null;
  excerpt: string | null;
  image: string | null;
  images: string | null;
  authorName: string;
  authorImage: string | null;
  authorRole: string | null;
  tags: string | null;
  publishDate: string;
  createdAt: string;
}

interface BlogListItem {
  id: number;
  title: string;
  content: string;
  image: string | null;
  tags: string | null;
  createdAt: string;
}

function normalizeArticleText(value: string): string {
  return value
    .replace(/&(nbsp|#160);/gi, " ")
    .replace(/\u00A0/g, " ");
}

const BlogDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogListItem[]>([]);
  const [latestBlogs, setLatestBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes, allBlogsRes] = await Promise.all([
          fetch(`/api/blog/${id}`),
          fetch("/api/blog?published=true"),
        ]);

        if (!blogRes.ok) {
          setError("Berita tidak ditemukan");
          return;
        }

        const blogData = await blogRes.json();
        setBlog(blogData);

        if (allBlogsRes.ok) {
          const allBlogs: BlogListItem[] = await allBlogsRes.json();
          const others = allBlogs.filter((b) => b.id !== blogData.id);
          setRelatedBlogs(others.slice(0, 4));
          setLatestBlogs(others.slice(0, 3));
        }
      } catch {
        setError("Gagal memuat berita");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              {error || "Berita tidak ditemukan"}
            </h2>
            <Link href="/blog" className="text-primary hover:underline font-medium">
              ← Kembali ke Berita
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tags = blog.tags ? blog.tags.split(",").map((t) => t.trim()) : [];
  const formattedDate = new Date(blog.publishDate || blog.createdAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = new Date(blog.publishDate || blog.createdAt).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Use detail field if available, otherwise fall back to content
  const articleContent = normalizeArticleText(blog.detail || blog.content);
  const isHtml = /<[a-z][\s\S]*>/i.test(articleContent);

  // Parse gallery images
  let allImages: string[] = [];
  if (blog.image) allImages.push(blog.image);
  if (blog.images) {
    try {
      const parsed = JSON.parse(blog.images);
      if (Array.isArray(parsed)) allImages = [...allImages, ...parsed];
    } catch { /* ignore */ }
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Breadcrumb Header */}
      <section className="bg-primary pt-24 pb-6 lg:pt-28 lg:pb-8">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-extrabold italic text-white mb-2">
            Detail Berita
          </h1>
          <nav className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors underline">
              Berita
            </Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1 max-w-[400px]">
              {blog.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14 lg:py-16 bg-white dark:bg-bg-color-dark">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column - Article Content */}
            <div className="w-full px-4 lg:w-8/12 overflow-hidden">
              {/* Title */}
              <h2 className="mb-4 text-2xl font-bold leading-tight text-black sm:text-3xl sm:leading-tight dark:text-white">
                {blog.title}
              </h2>

              {/* Author & Date */}
              <div className="mb-6 pb-4 flex flex-wrap items-center gap-4">
                <span className="text-body-color text-sm font-medium">
                  {blog.authorName}
                </span>
                <span className="text-yellow text-lg">●</span>
                <span className="text-body-color text-sm">{formattedDate}</span>
                <span className="text-yellow text-lg">●</span>
                <span className="text-body-color text-sm">{formattedTime}</span>
              </div>

              {/* Image Slideshow */}
              {allImages.length > 0 && (
                <div className="mb-8 w-full overflow-hidden rounded-lg relative group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={allImages[currentImageIndex]}
                      alt={`${blog.title} - ${currentImageIndex + 1}`}
                      fill
                      className="object-cover transition-opacity duration-300"
                      priority
                    />
                  </div>

                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {allImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-white scale-110"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {currentImageIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Article Content */}
              {isHtml ? (
                <div
                  className="blog-content max-w-none"
                  dangerouslySetInnerHTML={{ __html: articleContent }}
                />
              ) : (
                <div className="max-w-none">
                  {articleContent.split(/\n\n|\n/).filter((p) => p.trim() !== "").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-black mb-6 text-base leading-relaxed font-medium sm:text-md sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="lg:sticky lg:top-[120px]">
                {/* Share Box */}
                <div className="mb-8 rounded-lg bg-primary px-4 py-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      Bagikan Artikel Ini:
                    </h3>
                    <div className="flex items-center gap-1">
                      <SharePost />
                    </div>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-base font-bold text-black dark:text-white">
                      Berita Terpopuler
                    </h3>
                    <Link href="/blog" className="text-primary text-sm font-medium hover:underline">
                      &gt;
                    </Link>
                  </div>
                  <div className="space-y-5">
                    {relatedBlogs.map((related) => (
                      <div key={related.id} className="flex gap-3">
                        <div className="flex-1">
                          <Link
                            href={`/blog/${related.id}`}
                            className="block text-sm font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary leading-snug mb-1 line-clamp-3"
                          >
                            {related.title}
                          </Link>
                          <p className="text-xs text-body-color">
                            {related.tags?.split(",")[0]?.trim() || "Berita"}
                          </p>
                        </div>
                        <div className="relative h-[70px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={related.image || "/images/blog/blog-01.jpg"}
                            alt={related.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                    {relatedBlogs.length === 0 && (
                      <p className="text-body-color text-sm">
                        Belum ada berita lainnya.
                      </p>
                    )}
                  </div>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                    <h3 className="mb-4 text-base font-bold text-black dark:text-white">
                      Tags
                    </h3>
                    <div className="flex flex-wrap">
                      {tags.map((tag, i) => (
                        <TagButton key={i} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terbaru Section */}
      {latestBlogs.length > 0 && (
        <section className="pb-16 md:pb-20 bg-white dark:bg-bg-color-dark">
          <div className="container">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white">
                Berita Terbaru
              </h2>
            </div>
            <div className="w-28 md:w-40 h-1 bg-yellow rounded-full mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestBlogs.map((b) => (
                <div key={b.id}>
                  <SingleBlog
                    blog={{
                      id: b.id,
                      title: b.title,
                      paragraph: b.content.substring(0, 100) + "...",
                      image: b.image || "/images/blog/blog-01.jpg",
                      tags: b.tags ? b.tags.split(",").map((t) => t.trim()) : ["Berita"],
                      publishDate: new Date(b.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }),
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

export default BlogDetailPage;
