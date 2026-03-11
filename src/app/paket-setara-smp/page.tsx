import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kejar Paket | PKBM Kejuruan Terbuka",
  description:
    "Program Kejar Paket untuk penyelesaian pendidikan kesetaraan dengan sistem belajar fleksibel.",
};

const KejarPaketPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Program Kejar Paket"
        description="Program Kejar Paket memberikan akses pendidikan kesetaraan yang fleksibel, terstruktur, dan sesuai kebutuhan peserta didik."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-4">Fokus Layanan</h2>
            <ul className="space-y-3 text-body-color leading-relaxed list-disc pl-5">
              <li>Fasilitasi penyelesaian jenjang pendidikan kesetaraan.</li>
              <li>Jadwal pembelajaran adaptif untuk peserta didik pekerja.</li>
              <li>Pendampingan akademik berkala oleh tutor berpengalaman.</li>
              <li>Persiapan ujian dan asesmen akhir secara bertahap.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default KejarPaketPage;
