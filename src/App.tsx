import { motion, useScroll, useSpring } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DigitalExperience from './components/DigitalExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1a3e] to-[#0f0f2e] text-white font-sans relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <DigitalExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
