import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Kami | PKBM Kejuruan Terbuka",
  description:
    "Sejarah, visi, misi, dan nilai PKBM Kejuruan Terbuka dalam mendukung pendidikan yang inklusif dan relevan.",
};

const ProfilKamiPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Profil Kami"
        description="Mengenal sejarah, visi, misi, dan komitmen PKBM Kejuruan Terbuka dalam menghadirkan layanan pendidikan yang fleksibel dan berdampak."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default ProfilKamiPage;
