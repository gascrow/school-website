// Program data for SD, SMP, SMA
const programs = [
  {
    level: 'SD',
    title: 'Sekolah Dasar',
    description: 'Program pendidikan dasar untuk anak usia 7-12 tahun dengan kurikulum berkualitas',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop',
    features: ['Les Privat', 'Bimbel Intensif', 'Persiapan UN'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    level: 'SMP',
    title: 'Sekolah Menengah Pertama',
    description: 'Program pendidikan menengah untuk usia 13-15 tahun dengan fokus persiapan SMA',
    image: 'https://images.unsplash.com/photo-1427504744786-3a9ca7044f45?w=500&h=400&fit=crop',
    features: ['Kelas Reguler', 'Try Out UN', 'Bimbing Konseling'],
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    level: 'SMA',
    title: 'Sekolah Menengah Atas',
    description: 'Program pendidikan menengah atas untuk usia 16-18 tahun dengan Jurusan IPA dan IPS',
    image: 'https://images.unsplash.com/photo-1523050853053-91589436206b?w=500&h=400&fit=crop',
    features: ['Jurusan IPA/IPS', 'Persiapan PTN', 'Sertifikasi BNSP'],
    color: 'from-green-500 to-green-700'
  }
]

export default function Program() {
  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Program Pendidikan</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan program pendidikan untuk semua jenjang dari SD hingga SMA
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.level}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${program.color} text-white font-bold rounded-full`}>
                  {program.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <i className="fa fa-check-circle text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#registration" 
                  className="block w-full text-center py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
