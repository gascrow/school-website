"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Kurikulum Berbasis Dunia Nyata",
    description:
      "Materi pembelajaran dirancang bersama praktisi industri sehingga relevan dengan kebutuhan pasar kerja dan kehidupan sehari-hari.",
  },
  {
    id: 2,
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sistem Jenjang Sejak Awal",
    description:
      "Program terstruktur dari Paket A hingga Sertifikasi Profesi, memastikan setiap peserta berkembang secara bertahap sesuai kemampuannya.",
  },
  {
    id: 3,
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Percepatan Belajar Fleksibel",
    description:
      "Belajar kapan saja dan di mana saja tanpa harus meninggalkan pekerjaan. Jadwal fleksibel yang menyesuaikan kebutuhan dan ritme hidup Anda.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
              Kenapa Harus{" "}
              <span className="relative inline-block text-primary">
                Kejuruan Terbuka?
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary"></span>
              </span>
            </h2>
            <p className="max-w-[640px] text-base text-body-color md:text-lg">
              Kami hadir sebagai solusi pendidikan yang inklusif, terjangkau, dan berkualitas untuk
              seluruh lapisan masyarakat Indonesia.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
              className="rounded-xl bg-white p-8 shadow-sm dark:bg-dark-2 border border-stroke dark:border-dark-3 hover:shadow-md transition-shadow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-base text-body-color leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
