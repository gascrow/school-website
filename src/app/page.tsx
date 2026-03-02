import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
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
