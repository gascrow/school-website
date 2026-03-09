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
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      content: <AkademikTabContent category="jadwal" label="Jadwal Pembelajaran" />,
    },
    {
      title: "Modul",
      value: "modul",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      content: <AkademikTabContent category="modul" label="Modul Pembelajaran" />,
    },
    {
      title: "Kurikulum",
      value: "kurikulum",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      content: <AkademikTabContent category="kurikulum" label="Kurikulum" />,
    },
    {
      title: "Jurnal",
      value: "jurnal",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
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
          <div className="bg-white shadow rounded-lg flex flex-row items-center overflow-x-auto p-1 w-full flex-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={
                  "relative flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors " +
                  (activeTab === tab.value
                    ? "bg-primary text-white"
                    : "text-mitra hover:text-gray-700")
                }
              >
                {tab.icon}
                <span>{tab.title}</span>
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
