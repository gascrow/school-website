import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-screen flex items-center pb-16 pt-[120px] md:pb-[140px] md:pt-[160px] xl:pb-[180px] xl:pt-[200px] 2xl:pb-[220px] 2xl:pt-[230px]"
        style={{ backgroundImage: "url('/images/hero/hero-new.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Kejuruan Terbuka,{" "} <br />
                  <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Berdaya di Mana Saja</span>
                </h1>
                <p className="mb-8 text-base leading-relaxed text-white/90 md:text-lg">
                  Akses pendidikan kesetaraan dan kompetensi kerja dalam satu sistem belajar yang fleksibel,relevan, dan diakui nasional.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-opacity-90 transition-all"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
