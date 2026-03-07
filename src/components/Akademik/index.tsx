"use client";

import { useState, useEffect } from "react";

interface AkademikItem {
  id: number;
  title: string;
  description: string | null;
  category: string;
  tahunAjaran: string;
  semester: string | null;
  downloadUrl: string;
  createdAt: string;
}

function AkademikTabContent({
  category,
  label,
}: {
  category: string;
  label: string;
}) {
  const [items, setItems] = useState<AkademikItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`/api/akademik?category=${category}`);
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        }
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [category]);

  return (
    <div className="w-full overflow-hidden relative h-[26rem] md:h-100 rounded-lg p-4 md:p-6 bg-primary">
      <div className="text-white">
        <h2 className="text-lg md:text-2xl font-bold mb-4">{label}</h2>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-lg animate-spin" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-white/70 text-sm md:text-base">
            Belum ada data {label.toLowerCase()} yang tersedia.
          </p>
        ) : (
          <div className="space-y-3 overflow-y-auto max-h-[18rem] md:max-h-[20rem] pr-2 scrollbar-thin">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-semibold truncate">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-white/70 text-xs md:text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
                      <span>TA {item.tahunAjaran}</span>
                      {item.semester && <span>• {item.semester}</span>}
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-white/20 px-2.5 py-1 rounded-lg group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Buka
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const Contact = () => {
  const [activeTab, setActiveTab] = useState("self-learning");

  const tabs = [
    {
      title: "Self Learning",
      value: "self-learning",
      content: (
        <div className="w-full overflow-hidden relative h-[26rem] md:h-100 rounded-lg p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Self Learning</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">
              Konten untuk menu Self Learning akan ditampilkan di sini.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Fitur Utama
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Materi pembelajaran interaktif</li>
                  <li>• Video tutorial berkualitas</li>
                  <li>• Kuis dan latihan soal</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Keunggulan
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Belajar kapan saja</li>
                  <li>• Akses seumur hidup</li>
                  <li>• Sertifikat penyelesaian</li>
                  <li>• Dukungan komunitas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jadwal",
      value: "jadwal",
      content: <AkademikTabContent category="jadwal" label="Jadwal Pembelajaran" />,
    },
    {
      title: "Modul",
      value: "modul",
      content: <AkademikTabContent category="modul" label="Modul Pembelajaran" />,
    },
    {
      title: "Kurikulum",
      value: "kurikulum",
      content: <AkademikTabContent category="kurikulum" label="Kurikulum" />,
    },
    {
      title: "Jurnal",
      value: "jurnal",
      content: (
        <div className="w-full overflow-hidden relative h-[26rem] md:h-100 rounded-lg p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">
              Jurnal Pembelajaran
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-6">
              Catatan dan jurnal pembelajaran siswa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Jurnal Harian
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Aktivitas belajar</li>
                  <li>• Catatan penting</li>
                  <li>• Refleksi harian</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Jurnal Mingguan
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Perkembangan belajar</li>
                  <li>• Target mingguan</li>
                  <li>• Evaluasi pembelajaran</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Donasi",
      value: "donasi",
      content: (
        <div className="w-full overflow-hidden relative h-[26rem] md:h-100 rounded-lg p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Donasi</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">
              Dukung pendidikan dengan berdonasi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Cara Berdonasi
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Transfer bank</li>
                  <li>• QRIS</li>
                  <li>• Donasi online</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">
                  Manfaat Donasi
                </h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Membantu siswa kurang mampu</li>
                  <li>• Pembangunan fasilitas</li>
                  <li>• Pengadaan alat belajar</li>
                  <li>• Beasiswa pendidikan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeContent = tabs.find((t) => t.value === activeTab)?.content;

  return (
    <section
      id="contact"
      className="overflow-visible bg-white py-8 md:py-6 lg:py-2 pb-12 md:pb-6"
    >
      <div className="container">
        {/* Yellow header card: title + tab navigation */}
        <div className="bg-yellow rounded-lg px-6 py-4 flex flex-col md:flex-row items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 shrink-0 md:mr-4">
            Akademik
          </h2>
          <div className="bg-white shadow rounded-lg flex flex-row items-center overflow-x-auto p-1 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={
                  "relative px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors " +
                  (activeTab === tab.value
                    ? "bg-primary text-white"
                    : "text-mitra hover:text-gray-700")
                }
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div>{activeContent}</div>
      </div>
    </section>
  );
};

export default Contact;
