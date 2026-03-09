"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 md:pb-28 pt-24 md:pt-32">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 block"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-[700px]"
          >
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[44px]">
              Kejuruan Terbuka siap berjalan bersama Anda.
            </h2>
            <p className="mb-8 text-base text-white/85 md:text-lg">
              Kami di sini untuk membantu Anda berkembang. Apakah sebagai peserta didik,
              mitra komunitas, atau mitra industri — mari bersama membangun masa depan yang lebih baik.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-4 text-base font-semibold text-primary shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
              >
                Daftar Menjadi Mitra
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
