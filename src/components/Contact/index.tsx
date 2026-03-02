
import { Tabs } from "../ui/tabs";

const Contact = () => {
  const tabs = [
    {
      title: "Self Learning",
      value: "self-learning",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Self Learning</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Konten untuk menu Self Learning akan ditampilkan di sini.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Fitur Utama</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Materi pembelajaran interaktif</li>
                  <li>• Video tutorial berkualitas</li>
                  <li>• Kuis dan latihan soal</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Keunggulan</h3>
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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Jadwal Pembelajaran</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Jadwal pembelajaran dan kegiatan akan ditampilkan di sini.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Jadwal Harian</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Senin - Jumat: 08:00 - 16:00</li>
                  <li>• Sabtu: 08:00 - 12:00</li>
                  <li>• Minggu: Libur</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Kegiatan</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Kelas reguler</li>
                  <li>• Bimbingan belajar</li>
                  <li>• Ujian bulanan</li>
                  <li>• Kegiatan ekstrakurikuler</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Modul",
      value: "modul",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Modul Pembelajaran</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Modul-modul pembelajaran tersedia di sini.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Modul SD</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Matematika</li>
                  <li>• Bahasa Indonesia</li>
                  <li>• IPA</li>
                  <li>• IPS</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Modul SMP</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Matematika</li>
                  <li>• Bahasa Indonesia</li>
                  <li>• Bahasa Inggris</li>
                  <li>• IPA</li>
                  <li>• IPS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Kurikulum",
      value: "kurikulum",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Kurikulum</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Kurikulum pembelajaran sesuai standar nasional.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Kurikulum SD</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• KTSP</li>
                  <li>• Kurikulum Merdeka</li>
                  <li>• Penilaian berbasis proyek</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Kurikulum SMP</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• KTSP</li>
                  <li>• Kurikulum Merdeka</li>
                  <li>• Penilaian berbasis proyek</li>
                  <li>• Ujian Nasional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jurnal",
      value: "jurnal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Jurnal Pembelajaran</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Catatan dan jurnal pembelajaran siswa.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Jurnal Harian</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Aktivitas belajar</li>
                  <li>• Catatan penting</li>
                  <li>• Refleksi harian</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Jurnal Mingguan</h3>
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
        <div className="w-full overflow-hidden relative h-full rounded-md p-4 md:p-6 bg-primary">
          <div className="text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Donasi</h2>
            <p className="text-white/90 text-sm md:text-base mb-6">Dukung pendidikan dengan berdonasi.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Cara Berdonasi</h3>
                <ul className="space-y-2 text-white/90 text-base">
                  <li>• Transfer bank</li>
                  <li>• QRIS</li>
                  <li>• Donasi online</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
                <h3 className="text-sm md:text-lg font-semibold mb-3">Manfaat Donasi</h3>
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

  return (
    <section id="contact" className="overflow-hidden bg-white py-16 md:py-15 lg:py-15">
      <div className="container mx-10">
        <div className="h-[24rem] md:h-[48rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
