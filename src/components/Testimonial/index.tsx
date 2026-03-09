"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rifki Ade Saputra",
    designation: "Alumni Program LPK",
    content:
      "Bergabung dengan Kejuruan Terbuka adalah keputusan terbaik dalam hidup saya. Saya bisa belajar sambil tetap bekerja, dan sekarang saya sudah mendapatkan sertifikasi profesi yang membuka banyak peluang karir baru.",
    image: "/images/hero/hero.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Adam Risky Putra R.",
    designation: "Alumni Program PKBM",
    content:
      "Program PKBM sangat membantu saya mendapatkan ijazah kesetaraan SMA. Pengajar yang sabar dan materi yang relevan membuat proses belajar terasa menyenangkan meski dilakukan secara fleksibel.",
    image: "/images/hero/hero3.jpg",
    star: 5,
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
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
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              <span className="relative inline-block text-primary">
                "Apa
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary"></span>
              </span>{" "}
              Kata Mereka?
            </h2>
            <p className="max-w-[560px] text-base text-body-color">
              Dengarkan cerita nyata dari para Alumni dan Peserta Kejuruan Terbuka yang telah merasakan manfaatnya.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="rounded-xl border border-stroke bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-dark-2 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: testimonial.star }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6 relative">
                <svg
                  className="absolute -top-2 -left-1 h-8 w-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="pl-6 text-base italic text-body-color leading-relaxed dark:text-body-color-dark">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-base font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-primary font-medium">{testimonial.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
