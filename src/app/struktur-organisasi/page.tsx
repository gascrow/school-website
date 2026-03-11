import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const strukturOrganisasi = [
  {
    level: "Pimpinan Lembaga",
    unit: "Kepala PKBM",
    tugas:
      "Menetapkan arah kebijakan, pengembangan kelembagaan, dan pengawasan mutu layanan pendidikan.",
  },
  {
    level: "Koordinasi Akademik",
    unit: "Koordinator Program dan Tutor",
    tugas:
      "Mengelola pelaksanaan pembelajaran, penyusunan modul, asesmen, serta monitoring capaian peserta didik.",
  },
  {
    level: "Administrasi dan Layanan",
    unit: "Staf Administrasi dan Pelayanan",
    tugas:
      "Menangani data peserta didik, surat menyurat, pelaporan, dan dukungan operasional kegiatan harian.",
  },
];

export const metadata: Metadata = {
  title: "Struktur Organisasi | PKBM Kejuruan Terbuka",
  description:
    "Informasi struktur organisasi PKBM Kejuruan Terbuka untuk mendukung tata kelola pendidikan yang efektif.",
};

const StrukturOrganisasiPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Struktur Organisasi"
        description="Struktur organisasi dirancang untuk memastikan koordinasi yang jelas antara pimpinan, tim akademik, dan layanan administrasi."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-3">Susunan Organisasi</h2>
            <p className="text-body-color mb-6 leading-relaxed">
              Setiap level organisasi memiliki fungsi spesifik agar pelayanan
              pendidikan berjalan cepat, tepat, dan akuntabel.
            </p>

            <div className="space-y-4">
              {strukturOrganisasi.map((item) => (
                <div
                  key={item.level}
                  className="rounded-lg border border-gray-200 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    {item.level}
                  </p>
                  <h3 className="text-base font-bold text-primary mb-2">{item.unit}</h3>
                  <p className="text-sm text-body-color leading-relaxed">{item.tugas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrukturOrganisasiPage;
