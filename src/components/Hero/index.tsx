import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-screen flex items-center pb-16 pt-[100px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url('/images/hero/hero5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container relative z-10">
          <div className="-mx-2 flex flex-wrap">
          </div>
        </div>
        
        
      </section>
    </>
  );
};

export default Hero;
