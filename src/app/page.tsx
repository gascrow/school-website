import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import AkademikSection from "@/components/Akademik";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/Program";
import WhyChooseUs from "@/components/WhyChooseUs";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonial";
import Partnership from "@/components/Partnership";
import CTABanner from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kejuruan Terbuka | Berdaya di Mana Saja",
  description:
    "Raih pendidikan berkualitas tanpa batasan tempat dan waktu. Kejuruan Terbuka menghadirkan program LSP, PKBM, dan LPK yang diakui secara nasional.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Program Cards (LSP, PKBM, LPK) */}
      <ProgramSection />
      {/* 3. Kenapa Harus Kejuruan Terbuka? */}
      <WhyChooseUs />
      {/* 4. Hasil yang Didapat Lulusan */}
      <Results />
      {/* 5. Berita Terbaru */}
      <Blog />
      {/* 6. Akademik */}
      <AkademikSection />
      {/* 7. Testimoni */}
      <Testimonials />
      {/* 8. Partnership / Community */}
      <Partnership />
      {/* 9. CTA Banner */}
      <CTABanner />
    </>
  );
}
