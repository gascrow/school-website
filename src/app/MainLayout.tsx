"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");

  return (
    <div className="isolate">
      {!isAdminPath && <Header />}
      {children}
      {!isAdminPath && <Footer />}
    </div>
  );
}