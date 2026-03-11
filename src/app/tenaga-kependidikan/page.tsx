import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const tenagaKependidikan = [
  {
    jabatan: "Kepala PKBM",
    deskripsi:
      "Memimpin perencanaan strategis lembaga, pengembangan program pendidikan, dan kerja sama kelembagaan.",
  },
  {
    jabatan: "Koordinator Akademik",
    deskripsi:
      "Mengelola jadwal pembelajaran, kurikulum, evaluasi akademik, serta pendampingan proses belajar peserta didik.",
  },
  {
    jabatan: "Tutor dan Instruktur",
    deskripsi:
      "Melaksanakan pembelajaran teori dan praktik berbasis kompetensi sesuai kebutuhan peserta didik.",
  },
  {
    jabatan: "Staf Administrasi",
    deskripsi:
      "Mendukung pengelolaan data peserta didik, arsip akademik, layanan surat menyurat, dan administrasi harian.",
  },
];

export const metadata: Metadata = {
  title: "Tenaga Kependidikan | PKBM Kejuruan Terbuka",
  description:
    "Profil tenaga kependidikan PKBM Kejuruan Terbuka yang mendukung kegiatan akademik dan administrasi.",
};

const TenagaKependidikanPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tenaga Kependidikan"
        description="Tim pendidik dan tenaga kependidikan kami bekerja kolaboratif untuk memastikan layanan pendidikan berjalan profesional, ramah, dan terukur."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-3">Profil Tim</h2>
            <p className="text-body-color mb-6 leading-relaxed">
              Susunan peran berikut menjadi tulang punggung pelaksanaan program
              pendidikan di PKBM Kejuruan Terbuka.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tenagaKependidikan.map((item) => (
                <div
                  key={item.jabatan}
                  className="rounded-lg border border-gray-200 p-5"
                >
                  <h3 className="text-base font-bold text-primary mb-2">
                    {item.jabatan}
                  </h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TenagaKependidikanPage;
