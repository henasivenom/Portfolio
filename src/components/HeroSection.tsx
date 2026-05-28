'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from 'lucide-react'

const roles = [
  'Java Engineer 🚀',
  'Spring Boot Builder 🌱',
  'Automation Architect ⚙️',
  'SDLC/STLC Practitioner 📈',
  'AWS Cloud Learner ☁️',
]

const stackChips = ['Java ☕', 'Spring Boot 🌱', 'TypeScript 🔷', 'React/Next.js ⚛️', 'Selenium 🧪', 'Playwright 🎭', 'Tailwind ✨']

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    let timer: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < role.length) {
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
      } else {
        timer = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setTyping(true)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="scroll-mt-28 relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="bento-card gradient-outline rounded-[2rem] p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Crafted with creative code ✨
          </div>

          <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent break-words whitespace-normal max-w-full">
              Mukesh Patel 👨‍💻
            </span>
          </h1>

          <p className="mt-5 min-h-[2.25rem] text-lg font-medium text-slate-300 sm:text-2xl">
            <span className="text-slate-500">I build as a</span>{' '}
            <span className="text-cyan-300">{displayed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-blink rounded-full bg-cyan-300 align-middle" />
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I design and deliver smooth full-cycle experiences: backend engineering, automation,
            and polished UI delivery. Built for products that are fast ⚡, stable 🛡️, and recruiter-friendly 💼.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {stackChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'auto', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
            >
              Explore projects 🚀
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:border-emerald-300/50"
            >
              <Download className="h-4 w-4" />
              Download resume 📄
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'auto', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Contact me 💬
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/henasivenom', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/henasivenom', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/henasi_venom', label: 'Twitter' },
              { icon: Instagram, href: 'https://www.instagram.com/henasi_venom', label: 'Instagram' },
              { icon: Mail, href: 'mailto:amukeshpatel222@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="bento-card gradient-outline rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/15 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Snapshot ✨</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { value: '2025', label: 'Graduate 🎓' },
                  { value: '3+', label: 'Projects 🚀' },
                  { value: 'AWS', label: 'Certified ☁️' },
                  { value: '24/7', label: 'Creative Energy 🔥' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-center">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
              <p className="text-sm font-semibold text-slate-100">Design philosophy 🎨</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Minimal noise, premium contrast, and subtle interaction depth. Built for great first impression and
                faster recruiter scan. Beauty + performance in one experience ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('skills')?.scrollIntoView({ behavior: 'auto', block: 'start' })
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          Scroll ↓
          <ChevronDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  )
}
