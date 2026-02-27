export default function Video() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-yellow-600 font-semibold uppercase tracking-wider">Presentasi Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
              Tonton Video untuk Pelajari Lebih Lanjut <em className="not-italic text-yellow-600">tentang Kami</em>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kejuruan Terbuka adalah lembaga pendidikan profesional yang bergerak di bidang pelatihan 
              dan sertifikasi kompetensi kerja. Kami berkomitmen untuk memberikan pendidikan berkualitas 
              yang dapat diakses oleh semua orang.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan dukungan tim instruktur berpengalaman dan fasilitas modern, kami siap membantu 
              Anda mencapai tujuan kariermu.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" 
                alt="Video Thumbnail"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <a 
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                >
                  <i className="fa fa-play text-white text-2xl ml-1"></i>
                </a>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
