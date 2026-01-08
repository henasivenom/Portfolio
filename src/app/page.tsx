'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CinematicOpening from '../components/CinematicOpening'
import LivingBackground from '../components/LivingBackground'
import ThreeDReality from '../components/ThreeDReality'
import Navbar from '../components/NewNavbar'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
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

      {/* Living Background - Always present */}
      <LivingBackground />

      {/* 3D Reality Layer */}
      <ThreeDReality />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
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
