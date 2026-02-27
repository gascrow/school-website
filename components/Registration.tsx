'use client'

import { useState, useEffect } from 'react'

export default function Registration() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Countdown timer - 30 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
    }

    const timer = setInterval(updateCountdown, 1000)
    updateCountdown()

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="registration" className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Countdown */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ambil Kursus Online</h2>
            <p className="text-xl text-gray-300 mb-8">Daftar sekarang dan mulai perjalanan kariermu menuju sukses!</p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center md:justify-start gap-4 md:gap-8">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-3xl md:text-4xl font-bold">{String(days).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-400 text-sm">Hari</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-3xl md:text-4xl font-bold">{String(hours).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-400 text-sm">Jam</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-3xl md:text-4xl font-bold">{String(minutes).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-400 text-sm">Menit</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-3xl md:text-4xl font-bold">{String(seconds).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-400 text-sm">Detik</span>
              </div>
            </div>
          </div>

          {/* Right - Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Daftar Akun Gratis</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nama Lengkap" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Nomor Telepon" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Daftar Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
