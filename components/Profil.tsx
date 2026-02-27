'use client'

import { useState } from 'react'

// Sample images for the Why Us section
const whyUsImages = {
  best: 'https://images.unsplash.com/photo-1523050853053-91589436206b?w=500&h=400&fit=crop',
  top: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  quality: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop'
}

export default function Profil() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <section id="profil" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kejuruan Terbuka adalah lembaga pendidikan profesional yang berkomitmen memberikan pelatihan berkualitas
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Buttons */}
          <div className="md:w-1/4">
            <div className="flex flex-row md:flex-col gap-2">
              <button 
                onClick={() => setActiveTab(1)}
                className={`flex-1 md:flex-none px-6 py-4 rounded-lg font-semibold text-left transition-all duration-300 ${
                  activeTab === 1 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fa fa-trophy mr-3"></i>
                Pendidikan Terbaik
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`flex-1 md:flex-none px-6 py-4 rounded-lg font-semibold text-left transition-all duration-300 ${
                  activeTab === 2 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fa fa-users mr-3"></i>
                Manajemen Teratas
              </button>
              <button 
                onClick={() => setActiveTab(3)}
                className={`flex-1 md:flex-none px-6 py-4 rounded-lg font-semibold text-left transition-all duration-300 ${
                  activeTab === 3 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fa fa-check-circle mr-3"></i>
                Kualitas Terjamin
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:w-3/4">
            {activeTab === 1 && (
              <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={whyUsImages.best} 
                      alt="Best Education" 
                      className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Pendidikan Terbaik</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Kami menyediakan pendidikan berkualitas tinggi dengan kurikulum yang dirancang oleh para ahli industri. 
                      Metode pembelajaran inovatif memastikan Anda mendapatkan pengalaman belajar yang efektif dan menyenangkan.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Setiap program dirancang untuk memenuhi standar kompetensi kerja nasional dan internasional, 
                      memastikan lulusannya siap menghadapi dunia kerja.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={whyUsImages.top} 
                      alt="Top Management" 
                      className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Manajemen Teratas</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Tim manajemen kami terdiri dari profesional berpengalaman di bidang pendidikan dan industri. 
                      Kami berkomitmen untuk memberikan layanan terbaik kepada setiap siswa.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Sistem manajemen yang efisien memastikan proses pembelajaran berjalan lancar, 
                      dari pendaftaran hingga penyelesaian program.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={whyUsImages.quality} 
                      alt="Quality Meeting" 
                      className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Kualitas Terjamin</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Kami memiliki sertifikasi dari lembaga resmi seperti BNSP (Badan Nasional Sertifikasi Profesi). 
                      Setiap program menjamin kompetensi sesuai standar industri.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Kualitas kami didukung oleh fasilitas lengkap, tutor berpengalaman, dan sistem evaluasi yang ketat 
                      untuk memastikan kepuasan siswa.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
