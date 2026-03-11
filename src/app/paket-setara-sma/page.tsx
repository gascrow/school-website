import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pelatihan | PKBM Kejuruan Terbuka",
  description:
    "Program pelatihan berbasis praktik untuk meningkatkan daya saing peserta didik di dunia kerja.",
};

const PelatihanPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Program Pelatihan"
        description="Program pelatihan dikembangkan untuk mengasah keterampilan praktis peserta didik agar siap menghadapi kebutuhan industri dan kewirausahaan."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-4">Materi Utama</h2>
            <ul className="space-y-3 text-body-color leading-relaxed list-disc pl-5">
              <li>Pelatihan keterampilan teknis sesuai kompetensi bidang.</li>
              <li>Studi kasus dan praktik langsung berbasis proyek.</li>
              <li>Pendampingan pengembangan portofolio hasil karya.</li>
              <li>Penguatan orientasi kerja dan kesiapan profesional.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PelatihanPage;
