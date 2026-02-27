export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <em className="not-italic">Kejuruan</em> Terbuka
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Lembaga pendidikan profesional yang berkomitmen memberikan pelatihan berkualitas 
              untuk meningkatkan kompetensi kerja masyarakat Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#profil" className="text-gray-400 hover:text-yellow-500 transition-colors">Tentang Kami</a></li>
              <li><a href="#program" className="text-gray-400 hover:text-yellow-500 transition-colors">Program</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fa fa-map-marker mt-1 mr-3 text-yellow-500"></i>
                <span>Jl. Contoh No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone mr-3 text-yellow-500"></i>
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope mr-3 text-yellow-500"></i>
                <span>info@kejuruanterbuka.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kejuruan Terbuka. All Rights Reserved.
            <span className="mx-2">|</span>
            Design: <a href="#" className="text-yellow-500 hover:text-yellow-400">Kejuruan Terbuka</a>
            <span className="mx-2">|</span>
            Distributed By: <a href="#" className="text-yellow-500 hover:text-yellow-400">School Web</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
