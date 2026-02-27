export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1523050853053-91589436206b?w=1920&h=1080&fit=crop"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h6 className="text-yellow-500 font-bold uppercase tracking-[0.2em] mb-4 text-lg">PKBM LKP LPK TUK BNSP</h6>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          <em className="not-italic font-serif">Kejuruan</em> Terbuka
        </h2>
        <p className="text-white/90 text-xl md:text-2xl mb-10 font-light">Berdaya dimana saja, belajar tanpa batas</p>
        <a 
          href="#profil" 
          className="inline-block px-10 py-4 bg-yellow-500 text-white font-bold text-lg rounded hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          SELENGKAPNYA
        </a>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#profil" className="text-white text-3xl">
          ↓
        </a>
      </div>
    </section>
  )
}
