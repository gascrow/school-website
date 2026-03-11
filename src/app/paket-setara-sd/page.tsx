import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sertifikasi | PKBM Kejuruan Terbuka",
  description:
    "Program sertifikasi untuk meningkatkan kompetensi peserta didik sesuai kebutuhan dunia kerja.",
};

const SertifikasiPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Program Sertifikasi"
        description="Program sertifikasi dirancang untuk menguatkan kompetensi praktis dan kesiapan kerja peserta didik melalui pembelajaran berbasis capaian."
      />

      <section className="pt-2 pb-16">
        <div className="container">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-4">Ruang Lingkup Program</h2>
            <ul className="space-y-3 text-body-color leading-relaxed list-disc pl-5">
              <li>Pelatihan kompetensi dasar dan lanjutan sesuai bidang kejuruan.</li>
              <li>Pendampingan praktik dengan pendekatan project-based learning.</li>
              <li>Evaluasi kompetensi sebagai dasar penerbitan sertifikat.</li>
              <li>Penguatan soft skills: komunikasi, disiplin, dan kerja tim.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SertifikasiPage;
