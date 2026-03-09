"use client";

import { Program } from "@/types/program";
import Link from "next/link";
import { motion } from "framer-motion";

const getProgramIcon = (programName: string) => {
  if (programName === "LSP") {
    return (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  } else if (programName === "PKBM") {
    return (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  } else {
    return (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
};

const SingleProgram = ({ program }: { program: Program }) => {
  const { name, content, designation, url } = program;

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (program.id - 1) * 0.15, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center rounded-xl bg-white shadow-lg dark:bg-dark dark:shadow-three p-8 hover:-translate-y-2 transition-transform duration-300">
        {/* Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {getProgramIcon(name)}
        </div>

        {/* Title */}
        <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
          {name}
        </h3>
        <p className="mb-4 text-sm font-semibold text-primary uppercase tracking-wide">
          {designation}
        </p>

        {/* Divider */}
        <div className="mb-5 h-px w-full bg-stroke dark:bg-dark-3"></div>

        {/* Description */}
        <p className="flex-1 text-base text-body-color leading-relaxed dark:text-body-color-dark">
          {content}
        </p>

        {/* CTA */}
        {url && (
          <div className="mt-6">
            <Link
              href={url}
              className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Selengkapnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProgram;
