"use client";

import { motion } from "framer-motion";

const results = [
  {
    id: 1,
    color: "bg-red-100",
    iconColor: "text-red-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Ijazah Kesetaraan",
    description:
      "Mendapatkan ijazah resmi yang diakui secara nasional setara SD, SMP, dan SMA dari Kemendikbud.",
  },
  {
    id: 2,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Kompetensi Nyata",
    description:
      "Menguasai keterampilan praktis dan kompetensi vokasional yang langsung dapat diterapkan di dunia kerja.",
  },
  {
    id: 3,
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Sertifikasi Profesi",
    description:
      "Memiliki sertifikasi kompetensi dari LSP yang diakui industri, membuka peluang karir yang lebih luas.",
  },
  {
    id: 4,
    color: "bg-green-100",
    iconColor: "text-green-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Karakter dan Etika Kerja",
    description:
      "Membentuk pribadi yang disiplin, berintegritas, dan memiliki etos kerja tinggi yang dihargai di mana saja.",
  },
];

const Results = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-primary">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
              Hasil yang Didapat Lulusan
            </h2>
            <p className="max-w-[640px] text-base text-white/80 md:text-lg">
              Setiap lulusan Kejuruan Terbuka membawa bekal nyata yang membedakan mereka
              di pasar kerja dan kehidupan bermasyarakat.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center text-center rounded-xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-colors"
            >
              <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}>
                <span className={item.iconColor}>{item.icon}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
