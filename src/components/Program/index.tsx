"use client";

import { Program } from "@/types/program";
import SectionTitle from "../Common/SectionTitle";
import SingleProgram from "./SingleProgram";

const programData: Program[] = [
  {
    id: 1,
    name: "Pendidikan Kesetaraan Paket A",
    designation: "Setara SD",
    content:
      "Program pendidikan kesetaraan Paket A yang setara dengan Sekolah Dasar (SD), memberikan kesempatan bagi masyarakat yang belum sempat menyelesaikan pendidikan dasar untuk mendapatkan ijazah yang diakui secara nasional.",
    image: "/images/program/sd.jpg",
    url: "/program/paket-a",
  },
  {
    id: 2,
    name: "Pendidikan Kesetaraan Paket ABC",
    designation: "Setara SD,SMP dan SMA",
    content:
      "Program pendidikan kesetaraan Paket A yang setara dengan Sekolah Menengah Pertama (SMP), dirancang untuk memberikan kesempatan belajar bagi masyarakat yang ingin melanjutkan pendidikan menengah pertama.",
    image: "/images/program/smp.jpg",
    url: "/program/paket-b",
  },
  {
    id: 3,
    name: "Pendidikan Kesetaraan Paket C",
    designation: "Setara SMA",
    content:
      "Program pendidikan kesetaraan Paket C yang setara dengan Sekolah Menengah Atas (SMA), memberikan kesempatan bagi masyarakat untuk mendapatkan ijazah setara SMA yang dapat digunakan untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.",
    image: "/images/program/sma.jpg",
    url: "/program/paket-c",
  },
];

const ProgramSection = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-white px-4 md:px-6 text-white relative z-20 py-10 md:py-20 lg:py-20">
      <div className="container">
        <div className="-mt-32 md:-mt-44 lg:-mt-52 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-0 lg:items-end">
          {programData.map((program, index) => (
            <div key={program.id} className={index === 1 ? "lg:-translate-y-15" : ""}>
              <SingleProgram program={program} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ProgramSection;