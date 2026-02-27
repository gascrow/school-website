'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              <em className="not-italic">Kejuruan</em> Terbuka
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-500 transition-colors font-medium">Home</a>
            <div className="relative group">
              <button className="text-white hover:text-yellow-500 transition-colors font-medium py-2">
                Profil ▾
              </button>
              <div className="absolute left-0 top-full mt-0 w-48 bg-black/95 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                <a href="#profil" className="block px-4 py-3 text-white hover:text-yellow-500 hover:bg-white/10">Tentang Kami</a>
                <a href="#program" className="block px-4 py-3 text-white hover:text-yellow-500 hover:bg-white/10">Program</a>
                <a href="#features" className="block px-4 py-3 text-white hover:text-yellow-500 hover:bg-white/10">Keunggulan</a>
              </div>
            </div>
            <a href="#program" className="text-white hover:text-yellow-500 transition-colors font-medium">Program</a>
            <a href="#contact" className="text-white hover:text-yellow-500 transition-colors font-medium">Kontak</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 pb-4">
          <nav className="flex flex-col px-4">
            <a href="#home" className="text-white hover:text-yellow-500 py-3 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#profil" className="text-white hover:text-yellow-500 py-3 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>Profil</a>
            <a href="#program" className="text-white hover:text-yellow-500 py-3 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>Program</a>
            <a href="#contact" className="text-white hover:text-yellow-500 py-3 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>Kontak</a>
            <a href="#registration" className="text-white hover:text-yellow-500 py-3" onClick={() => setIsMenuOpen(false)}>Daftar Sekarang</a>
          </nav>
        </div>
      )}
    </header>
  )
}
