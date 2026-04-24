'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Moon, Sun, Sparkles, Zap, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { name: 'Home 🏠', href: '#home' },
  { name: 'Skills 🛠️', href: '#skills' },
  { name: 'Projects 🚀', href: '#projects' },
  { name: 'Contact 💬', href: '#contact' },
]

const themeIcons = {
  dark: Moon,
  light: Sun,
  cosmic: Sparkles,
  aurora: Zap,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section - include leetcode but don't highlight navbar
      const allSections = ['home', 'skills', 'projects', 'leetcode', 'contact']
      allSections.reverse()
      for (const section of allSections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'auto', block: 'start' })
    setIsOpen(false)
  }

  const ThemeIcon = themeIcons[theme]

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #06b6d4, #a855f7, #d946ef)',
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
        }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-4.5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`gradient-outline flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 border ${
              scrolled
                ? 'bg-slate-900/75 border-white/10 backdrop-blur-xl shadow-[0_10px_35px_rgba(2,6,23,0.55)]'
                : 'bg-slate-900/45 border-white/10 backdrop-blur-lg'
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group flex items-center gap-0 shrink-0"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo.svg" alt="MP Logo" className="h-8 w-8 drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]" />
              <div>
                <span className="text-[1.45rem] font-bold gradient-text tracking-tight leading-none">Mukesh</span>
              </div>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 ml-6 xl:ml-14">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium px-2 py-1 transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    scrollToSection(item.href.replace('#', ''))
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                title={`Current theme: ${theme}`}
              >
                <ThemeIcon className="w-5 h-5" />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl text-white text-sm font-semibold shadow-lg shadow-violet-600/25"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowUpRight className="w-4 h-4" />
                Hire Me ✨
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 left-4 right-4 p-6 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault()
                      scrollToSection(item.href.replace('#', ''))
                    }}
                    className={`text-lg font-medium py-2 transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-primary-400'
                        : 'text-slate-200'
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}
                  className="mt-4 py-3 text-center bg-gradient-to-r from-cyan-500 via-primary-500 to-purple-500 rounded-xl text-white font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Hire Me ✨
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
