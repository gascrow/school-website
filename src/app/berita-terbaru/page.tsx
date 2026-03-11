import type { Metadata } from "next";
import BlogPage from "../blog/page";

export const metadata: Metadata = {
  title: "Berita Terbaru | PKBM Kejuruan Terbuka",
  description:
    "Informasi terbaru seputar kegiatan, prestasi, dan perkembangan PKBM Kejuruan Terbuka.",
};

const BeritaTerbaruPage = () => {
  return <BlogPage />;
};

export default BeritaTerbaruPage;
