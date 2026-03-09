"use client";

import { Program } from "@/types/program";
import SectionTitle from "../Common/SectionTitle";
import SingleProgram from "./SingleProgram";

const programData: Program[] = [
  {
    id: 1,
    name: "LSP",
    designation: "Lembaga Sertifikasi Profesi",
    content:
      "LSP Kejuruan Terbuka hadir untuk memvalidasi kompetensi lulusan program pelatihan kerja dengan sertifikasi yang diakui secara nasional, sehingga peserta mampu bersaing di dunia kerja profesional.",
    image: "/images/program/sd.jpg",
    url: "/program/lsp",
  },
  {
    id: 2,
    name: "PKBM",
    designation: "Pusat Kegiatan Belajar Masyarakat",
    content:
      "PKBM menyediakan pendidikan kesetaraan Paket A, B, dan C yang terjangkau dan fleksibel bagi seluruh masyarakat, sehingga setiap orang berhak mendapatkan pendidikan berkualitas tanpa terkendala jarak dan waktu.",
    image: "/images/program/smp.jpg",
    url: "/program/pkbm",
  },
  {
    id: 3,
    name: "LPK",
    designation: "Lembaga Pelatihan Kerja",
    content:
      "LPK menyiapkan tenaga kerja terampil dan berkarakter melalui pelatihan vokasional berbasis industri. Program kami dirancang untuk menghasilkan lulusan yang siap kerja, berkompetensi nyata, dan beretika tinggi.",
    image: "/images/program/sma.jpg",
    url: "/program/lpk",
  },
];

const ProgramSection = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-white px-4 md:px-6 text-white relative z-20 py-10 md:py-20 lg:py-20">
      <div className="container">
        <div className="-mt-32 md:-mt-44 lg:-mt-52 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-0 lg:items-end">
          {programData.map((program, index) => (
            <div key={program.id} className={index === 1 ? "lg:-translate-y-16" : ""}>
              <SingleProgram program={program} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
      
      </div>
    </section>
  );
};

export default ProgramSection;