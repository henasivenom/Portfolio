'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, ArrowUp, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/henasivenom', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/henasivenom', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/henasi_venom', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/henasi_venom', label: 'Instagram' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Gradient separator at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.6) 25%, rgba(168,85,247,0.8) 50%, rgba(217,70,239,0.6) 75%, transparent 100%)' }} />
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="MP Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold gradient-text">Mukesh</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Building reliable, scalable Java applications with clean architecture.
              Open to exciting opportunities and collaborations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap md:justify-center gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex md:justify-end gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-xl text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright with heartbeat */}
            <motion.p 
              className="text-sm text-slate-500 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>© {new Date().getFullYear()} Mukesh Patel. Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              <span>using Next.js &amp; Tailwind</span>
            </motion.p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-400 transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.5), rgba(168, 85, 247, 0.5), transparent)'
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </footer>
  )
}
