import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

const dokumentasiKategori = [
  {
    title: "Kegiatan Pembelajaran",
    description:
      "Dokumentasi proses belajar mengajar, praktik, dan pendampingan peserta didik.",
  },
  {
    title: "Kegiatan Komunitas",
    description:
      "Dokumentasi kolaborasi bersama mitra, komunitas, dan kegiatan sosial pendidikan.",
  },
  {
    title: "Prestasi dan Pencapaian",
    description:
      "Dokumentasi capaian peserta didik dan tenaga pendidik dalam berbagai kegiatan.",
  },
];

export const metadata: Metadata = {
  title: "Dokumentasi | PKBM Kejuruan Terbuka",
  description:
    "Dokumentasi kegiatan PKBM Kejuruan Terbuka sebagai bagian dari transparansi dan rekam jejak program.",
};

const DokumentasiPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Dokumentasi"
        description="Kumpulan dokumentasi kegiatan PKBM Kejuruan Terbuka sebagai rekam jejak pembelajaran, kolaborasi, dan pencapaian peserta didik."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-3">Kategori Dokumentasi</h2>
            <p className="text-body-color mb-6 leading-relaxed">
              Halaman ini memuat dokumentasi kegiatan utama yang dilaksanakan
              oleh PKBM Kejuruan Terbuka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {dokumentasiKategori.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-200 p-5"
                >
                  <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-opacity-90 transition-all"
            >
              Lihat Berita Terbaru
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DokumentasiPage;
