import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Akademik";
import Hero from "@/components/Hero";

import ProgramSection from "@/components/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PKBM Web",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      <ProgramSection />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
