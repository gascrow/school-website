import React from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

// Definisikan tipe data jika belum ada di file lain
interface BlogItem {
  id: number;
  title: string;
  tags: string[];
  // tambahkan properti lain sesuai kebutuhan
}

const Blog: React.FC = () => {
  // Mengambil data pertama untuk Featured Post
  const featuredBlog = blogData[0];

  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-10"
    >
      <div className="container px-4 md:px-6 lg:px-25">
        {/* --- Section Header --- */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white">
            Rilis Berita
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm md:text-base font-bold px-5 py-2.5 rounded-md transition-colors duration-300"
          >
            Berita Lainnya
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="w-28 md:w-40 h-1 bg-yellow rounded-full mb-8"></div>

        {/* --- Featured Blog Section --- */}
        <div className="relative bg-primary rounded-md mb-10 overflow-hidden min-h-[250px] md:min-h-[400px] flex items-center">
          
          {/* Background Image dengan Overlay Merah Dominan */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/blog-01.jpg" 
              alt="Blog background" 
              className="w-full h-full object-cover opacity-50 mix-blend-multiply"
            />
            {/* Gradient Overlay untuk memastikan teks terbaca dan warna merah pekat */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>

          {/* Content Wrapper: Menggunakan justify-center untuk menaruh konten di tengah vertikal */}
          <div className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col justify-center items-start">
            
            {/* Badge / Category */}
            <div className="mb-6">
              <span className="bg-white backdrop-blur-sm text-primary px-4 py-1.5 rounded-md text-xs font-bold capitalize tracking-wider border border-white/30">
                {featuredBlog?.tags?.[0] || "Creative"}
              </span>
            </div>

            {/* Title: Ukuran lebih besar agar proporsional */}
            <h2 className="text-xl md:text-4xl lg:text-2xl font-bold text-white mb-8 leading-tight max-w-2xl antialiased">
              {featuredBlog?.title || "Best UI components for modern websites: this is the best of website design ever"}
            </h2>

            {/* Button */}
            <div className="mt-2">
              <a 
                href="/blog-details" 
                className="inline-flex items-center text-white px-0 py-0 font-bold hover:opacity-50 transition-all duration-300"
              >
                Mulai Baca
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --- Blog Grid Section --- */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {blogData.slice(0, 6).map((blog) => (
              <div key={blog.id}>
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