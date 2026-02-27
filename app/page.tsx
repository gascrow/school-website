import Hero from '@/components/Hero'
import Profil from '@/components/Profil'
import Registration from '@/components/Registration'
import Program from '@/components/Program'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Profil />
      <Registration />
      <Program />
      <Contact />
    </div>
  )
}
