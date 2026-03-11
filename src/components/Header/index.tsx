"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (window.scrollY < 80) {
      setSticky(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (window.scrollY < 80) {
      setSticky(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler for mobile only
  const [openIndex, setOpenIndex] = useState(-1);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  
  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };
  
  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
  };

  const usePathName = usePathname();
  const isBlogPage = /^\/blog(\/|$)/.test(usePathName);

  return (
    <>
      {/* Overlay Blur */}
      {isDropdownHovered && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md z-40 transition-all duration-300"></div>
      )}
      
      <header
        className={`header h-20 top-0 left-0 z-50 flex w-full items-center ${
          sticky || isBlogPage
            ? "dark:bg-black dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white backdrop- transition"
            : "fixed bg-transparant"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container">
          <div className="relative -mx-2 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-10" : "py-10"
                } `}
              >
                <Image
                  src="/images/logo/PKBM-KT.png"
                  alt="logo"
                  width={80}
                  height={15}
                  className="w-30 h-auto dark:hidden"
                />

                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-2 py-1 focus:ring-1 lg:hidden"
                >
                  <span
                    className={`relative my-1 block h-0.5 w-[24px] transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[6px] rotate-45" : " "
                    } ${sticky || isBlogPage ? "bg-black" : "bg-white"}`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[24px] transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    } ${sticky || isBlogPage ? "bg-black" : "bg-white"}`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[24px] transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-7px] -rotate-45" : " "
                    } ${sticky || isBlogPage ? "bg-black" : "bg-white"}`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar dark:bg-dark fixed top-[80px] left-0 right-0 bottom-0 z-40 overflow-y-auto bg-white px-6 py-8 transition-all duration-300 lg:static lg:z-auto lg:overflow-visible lg:!bg-transparent lg:p-0 lg:opacity-100 lg:visible lg:pointer-events-auto lg:bottom-auto lg:top-auto ${
                    navbarOpen
                      ? "visible opacity-100 pointer-events-auto"
                      : "invisible opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8">


                    {/* Tentang Kami */}
                    <li className="group relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <p
                        onClick={() => handleSubmenu(1)}
                        className="relative z-10 text-mitra flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-0 lg:after:bottom-[12px] after:h-[2px] after:w-full after:bg-yellow after:opacity-0 after:transition-opacity after:duration-200 hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
                      >
                        <span>Tentang Kami</span>
                        <span className="ml-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu z-50 dark:bg-dark bg-white
                          absolute top-full left-0 w-full
                          lg:absolute lg:top-[70%] lg:left-0 lg:right-0 lg:w-screen lg:max-w-4xl
                          lg:mt-4 lg:bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-lg lg:p-8
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:transition-all lg:duration-300
                          ${openIndex === 1 ? "block" : "hidden"}
                          transition-all duration-200 ease-in-out
                          lg:block lg:opacity-0 lg:invisible
                        `}
                      >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:w-[820px]">
                          {/* Kolom 1: Tenaga Kependidikan & Struktur Organisasi */}
                          <div className="space-y-6 border-r border-gray-200 pr-8">
                            <div>
                              <ul className="space-y-3">
                                <li>
                                  <Link
                                    href="/tenaga-kependidikan"
                                    className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                                  >
                                    Tenaga Kependidikan
                                  </Link>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Profil lengkap tenaga kependidikan yang mendukung kegiatan akademik dan administrasi.
                                  </p>
                                </li>
                                <li>
                                  <Link
                                    href="/struktur-organisasi"
                                    className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                                  >
                                    Struktur Organisasi
                                  </Link>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Diagram dan penjelasan struktur organisasi lembaga pendidikan.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Kolom 2: Tentang Kami */}
                          <div className="space-y-8">
                            <Image
                              src="/images/logo/PKBM-KT.png"
                              alt="logo"
                              width={80}
                              height={15}
                              className="w-50 h-auto dark:hidden"
                            />
                            <div>
                              <Link
                                href="/about"
                                className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                              >
                                Profil Kami
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Sejarah, visi, misi, dan nilai-nilai yang mendasari lembaga pendidikan kami dalam memberikan pendidikan berkualitas.
                              </p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Program */}
                    <li className="group relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <p
                        onClick={() => handleSubmenu(2)}
                        className="relative z-20 text-mitra flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-0 lg:after:bottom-[12px] after:h-[2px] after:w-full after:bg-yellow after:opacity-0 after:transition-opacity after:duration-200 hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
                      >
                        <span>Program</span>
                        <span className="ml-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu z-50 dark:bg-dark bg-white
                          absolute top-full left-0 w-full
                          lg:absolute lg:top-[70%] lg:left-[-156px] lg:right-0 lg:w-screen lg:max-w-4xl
                          lg:mt-4 lg:bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-lg lg:p-8
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:transition-all lg:duration-300
                          ${openIndex === 2 ? "block" : "hidden"}
                          transition-all duration-200 ease-in-out
                          lg:block lg:opacity-0 lg:invisible
                        `}
                      >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:w-[850px]">
                          {/* Kolom 1: Paket Setara SD */}
                          <div className="space-y-6 border-r border-gray-200 pr-4">
                            <div>
                              <Link
                                href="/paket-setara-sd"
                                className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                              >
                                Sertifikasi
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program sertifikasi yang dirancang untuk meningkatkan kompetensi dan keterampilan peserta didik dalam berbagai bidang kejuruan.
                              </p>
                            </div>
                          </div>

                          {/* Kolom 2: Paket Setara SMP */}
                          <div className="space-y-6 border-r border-gray-200">
                            <div>
                              <Link
                                href="/paket-setara-smp"
                                className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                              >
                                Kejar Paket
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program pendidikan kejar paket yang memberikan kesempatan kepada peserta didik untuk menyelesaikan pendidikan formal dengan metode pembelajaran yang fleksibel dan adaptif.
                              </p>
                            </div>
                          </div>

                          {/* Kolom 3: Paket Setara SMA */}
                          <div className="space-y-6 ">
                            <div>
                              <Link
                                href="/paket-setara-sma"
                                className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                              >
                                Pelatihan
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program pelatihan yang dirancang untuk meningkatkan kompetensi dan keterampilan peserta didik dalam berbagai bidang kejuruan.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Informasi */}
                    <li className="group relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <p
                        onClick={() => handleSubmenu(3)}
                        className="relative z-20 text-mitra flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-0 lg:after:bottom-[12px] after:h-[2px] after:w-full after:bg-yellow after:opacity-0 after:transition-opacity after:duration-200 hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
                      >
                        <span>Informasi</span>
                        <span className="ml-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu z-50 dark:bg-dark bg-white
                          absolute top-full left-0 w-full
                          lg:absolute lg:top-[70%] lg:left-[-276px] lg:right-0 lg:w-screen lg:max-w-4xl
                          lg:mt-4 lg:bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-lg lg:p-8
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:transition-all lg:duration-300
                          ${openIndex === 3 ? "block" : "hidden"}
                          transition-all duration-200 ease-in-out
                          lg:block lg:opacity-0 lg:invisible
                        `}
                      >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:w-[800px]">
                          {/* Kolom 1: Berita */}
                          <div className="space-y-6 border-r border-gray-200">
                            <div>
                              <ul className="space-y-3">
                                <li>
                                  <Link
                                    href="/berita-terbaru"
                                    className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                                  >
                                    Berita Terbaru
                                  </Link>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Informasi terkini mengenai kegiatan dan perkembangan lembaga pendidikan.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Kolom 2: Dokumentasi */}
                          <div className="space-y-6">
                            <div>
                              <ul className="space-y-3">
                                <li>
                                  <Link
                                    href="/dokumentasi"
                                    className="block text-primary dark:text-white font-bold mb-3 hover:underline hover:underline-offset-2 hover:decoration-[1px] hover:decoration-primary"
                                  >
                                    Dokumentasi
                                  </Link>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Dokumentasi kegiatan mengajar PBKM Balikpapan
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Kontak */}
                    <li className="group relative">
                      <Link
                        href="/contact"
                        className={`relative z-20 flex pt-2 pb-1 text-mitra text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-0 lg:after:bottom-[12px] after:h-[2px] after:w-full after:bg-yellow after:opacity-0 after:transition-opacity after:duration-200 ${
                          usePathName === "/contact"
                            ? "text-primary after:opacity-100 dark:text-white"
                            : "text-dark hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        Akademik
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0 space-x-2">
                {/* Contact Button - Desktop Only */}
                <div className="hidden lg:flex">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-opacity-90 transition-all"
                  >
                    Contact
                  </Link>
                </div>

                {/* Social Media Buttons - Desktop Only (disabled) */}
                {/* <div className="hidden lg:flex space-x-2">
                  {[
                    { href: "https://instagram.com", label: "Instagram", icon: Instagram, bg: "bg-pink-500" },
                    { href: "https://facebook.com", label: "Facebook", icon: Facebook, bg: "bg-blue-600" },
                    { href: "https://wa.me", label: "WhatsApp", icon: MessageCircle, bg: "bg-green-500" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.label} className="relative group w-10 h-10">
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 w-full h-full flex items-center justify-center rounded-lg bg-gray-200 overflow-hidden transition-all duration-300"
                          aria-label={social.label}
                        >
                          <div className={`absolute inset-0 ${social.bg} scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out rounded-lg`}></div>
                          <Icon className="h-5= w-5 text-gray-700 group-hover:text-white relative z-20 transition-colors duration-300" />
                        </Link>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-[-80] px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {social.label === "WhatsApp" ? "WhatsApp" : `${social.label}`}
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;