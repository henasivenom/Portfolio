'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CinematicOpening from '../components/CinematicOpening'
import Navbar from '../components/NewNavbar'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import LeetCodeStats from '../components/LeetCodeStats'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/NewFooter'
import AiPresence from '../components/AiPresence'
import { useEasterEggs } from '../hooks/useEasterEggs'

export default function Home() {
  const [showOpening, setShowOpening] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  // Initialize easter eggs
  useEasterEggs()

  useEffect(() => {
    setMounted(true)
    
    // Check if user has seen the opening before (session storage)
    const hasSeenOpening = sessionStorage.getItem('hasSeenOpening')
    if (hasSeenOpening) {
      setShowOpening(false)
    }
  }, [])

  const handleOpeningComplete = () => {
    setShowOpening(false)
    sessionStorage.setItem('hasSeenOpening', 'true')
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      {/* Cinematic Opening */}
      <AnimatePresence>
        {showOpening && (
          <CinematicOpening onComplete={handleOpeningComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 isolate aurora-bg">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(236,72,153,0.08),transparent_26%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.17] mesh-overlay" />
        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <LeetCodeStats />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* AI Assistant */}
      <AiPresence />
    </>
  )
}
