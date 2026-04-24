'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
  Instagram,
} from 'lucide-react'

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
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }

  return (
    <footer className="relative overflow-hidden py-10 sm:py-12 lg:py-14">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.65) 25%, rgba(168,85,247,0.85) 50%, rgba(217,70,239,0.65) 75%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_36%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="bento-card gradient-outline mb-8 sm:mb-10 overflow-hidden rounded-[2rem]"
        >
          <div className="grid gap-px lg:grid-cols-[1.1fr_0.9fr] bg-white/5">
            <div className="relative overflow-hidden px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]" />
              <div className="relative max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Crafted to feel premium on every screen ✨
                </div>

                <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Clean design. Fast motion. Memorable developer experience. 🎨
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  I build Java, Spring Boot, and automation-driven portfolios that stay smooth,
                  feel responsive, and leave a strong impression from the very first scroll 🚀
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Java
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Spring Boot
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Selenium Automation
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    SDLC / STLC
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
                  >
                    Start a conversation 💬
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('projects')
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    Explore projects 🚀
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/45 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <div className="grid gap-6">
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Quick Links
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    {quickLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.href.replace('#', ''))
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Connect
                  </h4>

                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/0 p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-2xl bg-emerald-500/15 p-2 text-emerald-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Need a Java + automation partner? 🤝</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        I&apos;m open to internships, freelance work, and collaborative projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr] text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5 }}
            className="bento-card rounded-3xl p-6 sm:p-7"
          >
            <div className="flex items-center justify-center gap-3 lg:justify-start mb-4">
              <img src="/logo.svg" alt="MP Logo" className="h-9 w-9" />
              <span className="text-2xl font-bold gradient-text">Mukesh Patel</span>
            </div>
            <p className="mx-auto max-w-sm text-sm leading-7 text-slate-400 lg:mx-0">
              Building reliable, scalable Java applications with clean architecture, automation
              testing, and a user-first mindset.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/15 bg-emerald-500/8 px-4 py-3 text-xs font-semibold text-emerald-300 lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Available for opportunities and collaboration
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bento-card rounded-3xl p-6 sm:p-7"
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              What You Get ✨
            </h4>
            <div className="grid gap-3 text-left sm:grid-cols-2">
              {[
                '🎨 Modern UI polish',
                '📱 Fully responsive layout',
                '⚡ Smooth fast interactions',
                '🚀 Production-ready quality',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-cyan-500/15 via-violet-500/15 to-pink-500/15 px-4 py-3 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bento-card rounded-3xl p-6 sm:p-7"
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Quick Links
            </h4>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href.replace('#', ''))
                  }}
                  className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-slate-800/50 pt-6 sm:pt-7">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <motion.p
              className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500 sm:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>© {new Date().getFullYear()} Mukesh Patel.</span>
              <span className="inline-flex items-center gap-2">
                Built with
                <motion.span
                  animate={{ scale: [1, 1.14, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </motion.span>
                Next.js &amp; Tailwind
              </span>
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Back to top</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.55), rgba(168, 85, 247, 0.65), rgba(244, 114, 182, 0.55), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />
      </div>
    </footer>
  )
}
