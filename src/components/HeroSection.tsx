'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Instagram, Twitter, Download, MapPin } from 'lucide-react'

const roles = ['Java Developer', 'Spring Boot Engineer', 'Automation Test Engineer', 'QA Engineer', 'AWS Cloud Practitioner']

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [mounted, displayed, typing, roleIndex])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16 md:pb-32">
      {/* Static gradient blobs — no JS animation to prevent compositor lag */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/15 via-accent-violet/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-fuchsia/15 via-accent-cyan/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-accent-purple/10 to-accent-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-8 md:py-20">
        {/* Glassmorphism Container */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            boxShadow: '0 0 80px rgba(168, 85, 247, 0.15), 0 0 40px rgba(217, 70, 239, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-fuchsia/5 pointer-events-none" />
          
          <div className="relative p-6 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Open to Work Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-xs md:text-sm font-semibold font-mono tracking-wide">Open to Work</span>
            </motion.div>

            {/* Greeting with sparkle */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-accent-cyan" />
              <span className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.2em] uppercase font-semibold">Welcome to my universe</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 md:mb-5 leading-[0.9] tracking-tighter text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-slate-100">Hey, I&apos;m </span>
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-fuchsia animate-gradient relative" 
                    style={{ backgroundSize: '200% auto' }}>
                Mukesh
                <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-fuchsia blur-2xl opacity-30 -z-10" />
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 tracking-tight min-h-[2.5rem] md:min-h-[3.5rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-slate-300">A </span>
              <span className="text-accent-cyan font-semibold">{displayed}</span>
              <span className="inline-block w-0.5 h-7 md:h-10 bg-accent-cyan ml-1 animate-blink align-middle rounded-full" />
            </motion.h2>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <MapPin className="w-4 h-4 text-accent-fuchsia" />
              <span>India &mdash; Available Remotely</span>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed px-2 md:px-0 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science graduate with strong SDLC &amp; STLC foundation, skilled in Java, Spring Boot, Selenium automation &amp; Agile-based QA. I build and test reliable end-to-end applications with a focus on quality.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              {[
                { number: '3+', label: 'Projects Built' },
                { number: 'AWS', label: 'Cloud Certified' },
                { number: '2025', label: 'CS Graduate' },
              ].map(({ number, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{number}</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(217, 70, 239, 0.4), 0 20px 40px rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-slate-200 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/60"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Download className="w-4 h-4 text-emerald-400 group-hover:animate-bounce" />
                <span>Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 glass rounded-xl font-semibold text-slate-200 transition-all duration-300 border border-accent-cyan/30"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(6, 182, 212, 0.08)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                  borderColor: 'rgba(6, 182, 212, 0.6)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Github, href: 'https://github.com/henasivenom', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/henasivenom', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/henasi_venom', label: 'Twitter' },
                { icon: Instagram, href: 'https://www.instagram.com/henasi_venom', label: 'Instagram' },
                { icon: Mail, href: 'mailto:amukeshpatel222@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image / Visual */}
          <motion.div 
            className="flex-1 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer animated rings */}
              <motion.div
                className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary-500/20"
                animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-accent-cyan/15 animate-spin-slow" />

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl hidden md:block" />
              
              {/* Profile container */}
              <motion.div 
                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary-500/30"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  background: 'rgba(255,255,255,0.04)',
                  boxShadow: '0 0 60px rgba(168, 85, 247, 0.35), 0 0 120px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-bold gradient-text select-none">M</span>
                </div>
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12"
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                />
              </motion.div>

              {/* Floating tech badges */}
              {[
                { text: 'Java ☕', color: 'from-orange-500 to-red-500', delay: 0, position: '-top-3 right-4 md:-top-3 md:right-0' },
                { text: 'Spring Boot 🌱', color: 'from-green-500 to-emerald-600', delay: 0.5, position: 'top-1/3 -left-2 md:top-1/3 md:-left-10' },
                { text: 'Selenium', color: 'from-teal-500 to-cyan-500', delay: 1.0, position: '-bottom-3 left-4 md:-bottom-3 md:left-0' },
                { text: 'AWS ☁️', color: 'from-yellow-500 to-amber-500', delay: 1.5, position: 'top-1/3 -right-2 md:top-1/3 md:-right-8' },
              ].map(({ text, color, delay, position }) => (
                <motion.div
                  key={text}
                  className={`absolute ${position} px-3 py-1.5 rounded-full bg-gradient-to-r ${color} text-white text-xs font-bold shadow-xl`}
                  animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Mobile optimized */}
      <motion.div
        className="absolute left-0 right-0 z-20 bottom-8 md:bottom-8 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#skills"
          className="flex flex-col items-center text-slate-400 hover:text-primary-400 transition-colors cursor-pointer p-4 md:p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs md:text-sm font-mono mb-2 text-center">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 md:w-5 md:h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
