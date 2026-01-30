'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Instagram, Twitter } from 'lucide-react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16 md:pb-32">
      {/* Aurora Background - Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 via-accent-violet/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-fuchsia/20 via-accent-cyan/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-accent-purple/15 to-accent-violet/15 rounded-full blur-3xl"
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['20%', '-20%', '20%'],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            {/* Floating decorative elements */}
            <div className="absolute -left-20 top-0 hidden lg:block">
              <motion.div
                className="text-6xl opacity-10"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                💻
              </motion.div>
            </div>
            <div className="absolute -right-20 bottom-20 hidden lg:block">
              <motion.div
                className="text-6xl opacity-10"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                ⚡
              </motion.div>
            </div>

            {/* Greeting with sparkle */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-accent-cyan" />
              </motion.div>
              <span className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.2em] uppercase font-semibold">Welcome to my universe</span>
            </motion.div>

            {/* Main heading with MASSIVE typography */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 leading-[0.9] tracking-tighter text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-slate-100">Hey, I&apos;m </span>
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-fuchsia animate-gradient relative" 
                    style={{ backgroundSize: '200% auto' }}>
                Mukesh
                {/* Glow effect behind text */}
                <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-fuchsia blur-2xl opacity-30 -z-10" />
              </span>
            </motion.h1>

            {/* Subtitle with enhanced hierarchy */}
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl text-slate-300 font-light mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A <span className="text-accent-cyan font-semibold">Java Developer</span>
            </motion.h2>

            {/* Description with better spacing */}
            <motion.p 
              className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed px-2 md:px-0 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Highly motivated Computer Science graduate skilled in Java development, manual testing, SQL databases, and GUI-based application design. Experienced in building end-to-end applications using Java Swing, AWT, JDBC, and MySQL with a strong understanding of SDLC and Agile methodologies.
            </motion.p>

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
                href="#contact"
                className="px-8 py-4 glass rounded-xl font-semibold text-slate-200 transition-all duration-300 border border-accent-cyan/30"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
                  borderColor: 'rgba(6, 182, 212, 0.6)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
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
              {/* Glow effect - Reduced on mobile */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl hidden md:block"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Profile container */}
              <motion.div 
                className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden glass border-2 border-primary-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder avatar with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <span className="text-8xl font-bold gradient-text">M</span>
                </div>
                
                {/* Animated ring - Reduced on mobile */}
                <motion.div
                  className="absolute inset-0 border-4 border-primary-400/30 rounded-full hidden md:block"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Floating elements around profile - Desktop only */}
              {[
                { emoji: '💻', delay: 0, position: '-top-4 -right-4' },
                { emoji: '🚀', delay: 0.5, position: '-bottom-2 -left-2' },
                { emoji: '✨', delay: 1, position: 'top-1/2 -right-8' },
              ].map(({ emoji, delay, position }) => (
                <motion.div
                  key={emoji}
                  className={`absolute ${position} text-2xl hidden md:block`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay,
                    ease: 'easeInOut',
                  }}
                >
                  {emoji}
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
