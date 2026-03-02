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

  return (
    <>
      {/* Overlay Blur */}
      {isDropdownHovered && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md z-40 transition-all duration-300"></div>
      )}
      
      <header
        className={`header h-20 top-0 left-0 z-50 flex w-full items-center ${
          sticky
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
                  src="/images/logo/pkbm-intan.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
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
                    className={`relative my-1 block h-0.5 w-[24px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[6px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[24px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[24px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-7px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-full h-screen bg-white px-6 py-8 lg:w-auto lg:h-auto lg:visible lg:static lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-50"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">

                    {/* Tentang Kami */}
                    <li className="group relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <p
                        onClick={() => handleSubmenu(1)}
                        className="relative z-10 text-dark flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-[12px] after:h-[2px] after:w-full after:bg-secondary after:opacity-0 after:transition-opacity after:duration-200 
                        hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
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
                        className="relative z-20 text-dark flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-[12px] after:h-[2px] after:w-full after:bg-secondary after:opacity-0 after:transition-opacity after:duration-200 hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
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
                          lg:absolute lg:top-[70%] lg:left-[-172] lg:right-0 lg:w-screen lg:max-w-4xl
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
                                Program Paket A
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program pendidikan setara Sekolah Dasar (SD) yang dirancang khusus untuk peserta didik yang membutuhkan pendidikan dasar dalam format yang fleksibel dan terstruktur.
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
                                Program Paket B
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program pendidikan setara Sekolah Menengah Pertama (SMP) yang memberikan kesempatan bagi peserta didik untuk melanjutkan pendidikan menengah pertama secara fleksibel.
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
                                Program Paket C
                              </Link>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Program pendidikan setara Sekolah Menengah Atas (SMA) yang memungkinkan peserta didik menyelesaikan pendidikan menengah atas dengan metode pembelajaran yang adaptif.
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
                        className="relative z-20 text-dark flex cursor-pointer items-center justify-between pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-[12px] after:h-[2px] after:w-full after:bg-secondary after:opacity-0 after:transition-opacity after:duration-200 hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
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
                          lg:absolute lg:top-[70%] lg:left-[-307] lg:right-0 lg:w-screen lg:max-w-4xl
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
                        className={`relative z-20 flex pt-2 pb-1 text-md font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-8 after:content-[''] after:absolute after:left-0 after:bottom-[12px] after:h-[2px] after:w-full after:bg-secondary after:opacity-0 after:transition-opacity after:duration-200 ${
                          usePathName === "/contact"
                            ? "text-primary after:opacity-100 dark:text-white"
                            : "text-dark hover:text-primary hover:after:opacity-100 group-hover:text-primary group-hover:after:opacity-100 dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        Kontak
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0 space-x-2">
                {/* Social Media Buttons - Desktop Only */}
                <div className="hidden lg:flex space-x-2">
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
                          className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-gray-200 overflow-hidden transition-all duration-300"
                          aria-label={social.label}
                        >
                          {/* Glass fill effect - rectangular inside circular button */}
                          <div className={`absolute inset-0 ${social.bg} scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out rounded-0`}></div>
                          <Icon className="h-5= w-5 text-gray-700 group-hover:text-white relative z-20 transition-colors duration-300" />
                        </Link>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-[-80] px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {social.label === "WhatsApp" ? "WhatsApp" : `${social.label}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;