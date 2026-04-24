import Hero from '@/components/sections/Hero'
import Skills from './(sections)/Skills'
import Metrics from './(sections)/Metrics'
import Projects from './(sections)/Projects'
import Contact from './(sections)/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Skills />
      <Metrics />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
