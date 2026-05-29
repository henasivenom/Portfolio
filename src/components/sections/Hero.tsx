'use client'

import Link from 'next/link'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Download, Linkedin, Mail } from 'lucide-react'
import { FaAws, FaJava } from 'react-icons/fa6'
import { SiGithub, SiInstagram, SiReact, SiSelenium, SiSpringboot, SiTypescript, SiX } from 'react-icons/si'
import type { IconType } from 'react-icons'
import ClientOnly from '@/components/ui/ClientOnly'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import ProfileAvatar from '@/components/ui/ProfileAvatar'

const name = 'Mukesh Patel'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
}

const roleEntryVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

const roles = [
  'Spring Boot Developer',
  'Test Automation Engineer',
  'Full Stack Builder',
  'QA Architect',
  'AWS Certified Engineer',
]

const stackPills: Array<{ name: string; Icon: IconType; colorVar: string }> = [
  { name: 'Java', Icon: FaJava, colorVar: 'var(--brand-java)' },
  { name: 'Spring Boot', Icon: SiSpringboot, colorVar: 'var(--brand-spring)' },
  { name: 'TypeScript', Icon: SiTypescript, colorVar: 'var(--brand-typescript)' },
  { name: 'React', Icon: SiReact, colorVar: 'var(--brand-react)' },
  { name: 'Selenium', Icon: SiSelenium, colorVar: 'var(--brand-selenium)' },
  { name: 'AWS', Icon: FaAws, colorVar: 'var(--brand-aws)' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [typedDescription, setTypedDescription] = useState('')
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const interval = globalThis.setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length)
    }, 3000)

    return () => globalThis.clearInterval(interval)
  }, [])

  useEffect(() => {
    setDisplayed('')
    setIsTyping(true)

    const role = roles[roleIndex]
    let index = 0

    const timer = globalThis.setInterval(() => {
      index += 1
      setDisplayed(role.slice(0, index))

      if (index >= role.length) {
        globalThis.clearInterval(timer)
        setIsTyping(false)
      }
    }, 60)

    return () => globalThis.clearInterval(timer)
  }, [roleIndex])

  useEffect(() => {
    const description =
      'I build fast, stable, recruiter-ready products across Spring Boot, test automation, and polished front-end delivery.'

    if (!descriptionInView || reduceMotion) {
      return
    }

    setTypedDescription('')
    let index = 0

    const timer = globalThis.setInterval(() => {
      index += 1
      setTypedDescription(description.slice(0, index))

      if (index >= description.length) {
        globalThis.clearInterval(timer)
      }
    }, 24)

    return () => globalThis.clearInterval(timer)
  }, [descriptionInView, reduceMotion])

  const descriptionVisible = descriptionInView || reduceMotion

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-8 lg:px-10">
      <div className="noise-overlay pointer-events-none absolute inset-0" aria-hidden />

      {!reduceMotion ? (
        <ClientOnly fallback={null}>
          <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
            <ParticlesBackground />
          </div>
        </ClientOnly>
      ) : null}

      <div className="pointer-events-none absolute right-16 top-24 -z-[1] h-64 w-64 rounded-full bg-[var(--accent-violet)]/20 blur-[90px] hero-float" />
      <div className="pointer-events-none absolute bottom-14 right-40 -z-[1] h-56 w-56 rounded-full bg-[var(--accent-teal)]/20 blur-[90px] hero-float-delayed" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 -z-[1] h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--accent-amber)]/10 blur-[90px] hero-float" />

      <div className="relative z-10 mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[60fr_40fr] lg:px-16">
        <div style={{ maxWidth: '620px', minWidth: 0 }}>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="badge-border-animated"
            >
              ✦ CRAFTED WITH CREATIVE CODE ✦
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
              }}
            >
              <span style={{ color: '#e2e8f0', display: 'block' }}>Hi, I'm</span>
              <span
                style={{
                  display: 'inline',
                  background: 'linear-gradient(135deg, #00f5d4 0%, #7c3aed 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap',
                  overflowWrap: 'normal',
                }}
              >
                {name.split('').map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    variants={letterVariants}
                    style={{
                      display: 'inline-block',
                      whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <div style={{ height: '2rem', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  variants={roleEntryVariants}
                  initial={reduceMotion ? false : 'hidden'}
                  animate={reduceMotion ? { opacity: 1, y: 0 } : 'visible'}
                  exit={reduceMotion ? undefined : 'exit'}
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--teal)',
                  }}
                >
                  I build as a{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg,var(--teal),var(--violet))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {displayed}
                  </span>
                  <span
                    className="cursor-blink"
                    style={{
                      opacity: isTyping ? 1 : undefined,
                      animationPlayState: isTyping ? 'paused' : 'running',
                    }}
                  >
                    |
                  </span>
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              ref={descriptionRef}
              initial={{ opacity: 0, y: 28 }}
              animate={descriptionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxWidth: '42rem',
                fontFamily: 'var(--font-dm-sans)',
                color: 'var(--muted)',
                lineHeight: 1.9,
              }}
            >
              {typedDescription}
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {stackPills.map((pill, index) => {
                const Icon = pill.Icon as React.ComponentType<{ style?: React.CSSProperties }>

                return (
                  <motion.span
                    key={pill.name}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.35 }}
                    whileHover={{ scale: 1.08 }}
                    style={{
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--text)',
                    }}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                  >
                    <Icon style={{ color: pill.colorVar }} />
                    <span>{pill.name}</span>
                  </motion.span>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Explore Projects 🚀
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-6 py-3 font-semibold text-[#00110f] transition-transform hover:-translate-y-0.5"
              >
                Download Resume 📄
                <Download className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-[var(--text)] transition-transform hover:-translate-y-0.5"
              >
                Contact Me 💬
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: SiGithub, href: 'https://github.com/henasivenom', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/henasivenom', label: 'LinkedIn' },
                { icon: SiX, href: 'https://x.com/henasi_venom', label: 'Twitter' },
                { icon: SiInstagram, href: 'https://www.instagram.com/henasi_venom', label: 'Instagram' },
                { icon: Mail, href: 'mailto:amukeshpatel222@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => {
                const SocialIcon = Icon as React.ComponentType<{ className?: string }>

                return (
                  <Link
                    key={label}
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition-transform hover:-translate-y-0.5 hover:text-[var(--teal)]"
                  >
                    <SocialIcon className="h-4.5 w-4.5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-10 top-12 h-40 w-40 rounded-full bg-[var(--teal)]/10 blur-3xl" />
            <div className="absolute bottom-12 left-8 h-40 w-40 rounded-full bg-[var(--violet)]/10 blur-3xl" />
            <div className="absolute right-20 bottom-24 h-28 w-28 rounded-full bg-[var(--amber)]/10 blur-3xl" />
          </div>

          <div className="w-full max-w-md space-y-6">
            <ProfileAvatar />

            <motion.div
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="glass-card rounded-[2rem] border border-white/10 p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--teal)]">Snapshot</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { value: '2025', label: 'Graduate' },
                  { value: '3+', label: 'Projects' },
                  { value: 'AWS', label: 'Certified' },
                  { value: '24/7', label: 'Energy' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                    <p className="text-2xl font-semibold text-[var(--text)]">{item.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.45 }}
      >
        <Link
          href="#skills"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
        >
          Scroll ↓
          <ChevronDown className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
