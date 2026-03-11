"use client";

import { memo } from "react";
import Link from "next/link";

interface PartnerCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaHref: string;
  image: string;
  accentColor: string;
}

const cards: PartnerCard[] = [
  {
    id: "1",
    tag: "01",
    title: "Menjadi bagian",
    subtitle: "Kelompok Belajar",
    description:
      "Bergabunglah dalam ekosistem belajar bersama komunitas Kejuruan Terbuka. Bersama kelompok belajar yang solid, Anda akan saling mendukung, berbagi ilmu, dan tumbuh bersama menuju kompetensi yang lebih tinggi.",
    cta: "Daftar Sekarang",
    ctaHref: "/contact",
    image: "/images/hero/hero5.jpg",
    accentColor: "",
  },
  {
    id: "2",
    tag: "02",
    title: "Menjadi mitra",
    subtitle: "Komunitas",
    description:
      "Jadilah bagian dari jaringan komunitas Kejuruan Terbuka yang luas. Kami membuka peluang kemitraan bagi organisasi, yayasan, dan komunitas yang ingin berkontribusi dalam pemerataan pendidikan di seluruh Indonesia.",
    cta: "Hubungi Kami",
    ctaHref: "/contact",
    image: "/images/hero/hero3.jpg",
    accentColor: "",
  },
  {
    id: "3",
    tag: "03",
    title: "Menjadi mitra",
    subtitle: "Industri",
    description:
      "Temukan talenta terlatih yang siap kerja dari lulusan program Kejuruan Terbuka. Kami membuka kolaborasi dengan perusahaan dan industri untuk penempatan kerja, magang, dan pengembangan kurikulum berbasis kebutuhan industri.",
    cta: "Hubungi Kami",
    ctaHref: "/contact",
    image: "/images/hero/hero.jpg",
    accentColor: "",
  },
];

const PartnershipCard = memo(
  ({ card, index }: { card: PartnerCard; index: number }) => (
    <div
      className="sticky top-8 min-h-screen w-full flex items-center justify-center px-4 py-6"
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:h-[65vh] lg:max-h-[500px] items-stretch rounded-3xl shadow-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1 group relative">

        {/* Left — content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between p-5 sm:p-7 md:p-10 lg:p-14">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-5 text-white bg-primary">
              {card.tag}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-1">
              {card.title}
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              {card.subtitle}
            </h3>
            <p className="text-base text-body-color leading-relaxed max-w-lg">
              {card.description}
            </p>
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href={card.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-base font-semibold text-white bg-primary shadow-md hover:opacity-90 hover:gap-3 transition-all duration-300"
            >
              {card.cta}
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative w-full lg:w-5/12 h-56 sm:h-64 lg:h-full overflow-hidden">
          <img
            src={card.image}
            alt={card.subtitle}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
        </div>

      </div>
    </div>
  )
);

PartnershipCard.displayName = "PartnershipCard";

const Partnership = () => {
  return (
    <section className="relative bg-white dark:bg-dark py-10">

      {/* Scroll space — 100vh per card gives enough room for stacking */}
      <div className="relative" style={{ minHeight: `${cards.length * 100}vh` }}>
        {cards.map((card, index) => (
          <PartnershipCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Partnership;
