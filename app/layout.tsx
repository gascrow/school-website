import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kejuruan Terbuka - PKBM LKP LPK TUK BNSP",
  description: "Lembaga pendidikan profesional yang bergerak di bidang pelatihan dan sertifikasi kompetensi kerja. Berdaya dimana saja, belajar tanpa batas.",
  keywords: ["kejuruan", "pendidikan", "kursus", "pelatihan", "sertifikasi", "BNSP", "PKBM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Tips: Link CSS eksternal seperti Font Awesome tetap bisa di head, 
        tapi pastikan Navbar ada di dalam body agar membungkus semua page.
      */}
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar dipasang di sini agar otomatis ada di semua halaman */}
        <Navbar />

        {/* Memberi padding top agar konten tidak tertutup Navbar yang posisinya 'fixed' */}
        <main>
          {children}
        </main>
        <Footer />
        {/* Anda bisa menambahkan Footer di sini nanti agar muncul di semua halaman */}
      </body>
    </html>
  );
}