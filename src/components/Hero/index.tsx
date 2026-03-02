import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="-mx-2 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Selamat datang di PKBM Balikpapan School
                </h1>
                <p className="mb-8 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                  Lembaga pendidikan non-formal yang memberikan kesempatan belajar bagi masyarakat yang ingin melanjutkan pendidikan setara SD, SMP, dan SMA. Kami berkomitmen memberikan pendidikan berkualitas dengan metode pembelajaran yang fleksibel dan terstruktur.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Lihat Profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
    </>
  );
};

export default Hero;
