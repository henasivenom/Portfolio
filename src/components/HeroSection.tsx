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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting with sparkle */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="text-primary-400 font-mono text-sm tracking-wider">Welcome to my universe</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-slate-100">Hey, I&apos;m </span>
              <span className="gradient-text-animated">Mukesh</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              className="text-2xl md:text-3xl text-slate-300 font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A <span className="text-primary-400 font-medium">Software Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Crafting digital experiences that blend creativity with code. 
              I transform ideas into elegant, performant applications that make a difference.
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
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-8 py-4 glass rounded-xl font-semibold text-slate-200 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
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
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass border-2 border-primary-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder avatar with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <span className="text-8xl font-bold gradient-text">M</span>
                </div>
                
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-primary-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Floating elements around profile */}
              {[
                { emoji: '💻', delay: 0, position: '-top-4 -right-4' },
                { emoji: '🚀', delay: 0.5, position: '-bottom-2 -left-2' },
                { emoji: '✨', delay: 1, position: 'top-1/2 -right-8' },
              ].map(({ emoji, delay, position }) => (
                <motion.div
                  key={emoji}
                  className={`absolute ${position} text-2xl`}
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#skills"
          className="flex flex-col items-center text-slate-500 hover:text-primary-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
