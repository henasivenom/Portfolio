'use client'

import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion, Variants } from 'framer-motion'
import { FaAws, FaJava } from 'react-icons/fa6'
import { SiOpenjdk, SiReact, SiSelenium, SiSpringboot, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { initParticlesEngine, Particles } from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import AnimatedText from '@/components/ui/AnimatedText'
import CountUp from '@/components/ui/CountUp'
import GlassCard from '@/components/ui/GlassCard'
import MagneticButton from '@/components/ui/MagneticButton'

const roleCycle = ['Spring Boot Developer', 'Test Automation Engineer', 'Full Stack Builder', 'QA Architect']

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
    },
  }),
}

const statItems = [
  { label: 'Projects Shipped', value: 28, suffix: '+' },
  { label: 'Automation Suites', value: 16, suffix: '+' },
  { label: 'LeetCode Solved', value: 482, suffix: '' },
  { label: 'Collab Score', value: 98, suffix: '%' },
]

interface TechPill {
  name: string
  Icon: IconType
  brandVar: string
}

const techPills: TechPill[] = [
  { name: 'Java', Icon: FaJava, brandVar: 'var(--brand-java)' },
  { name: 'Spring', Icon: SiSpringboot, brandVar: 'var(--brand-spring)' },
  { name: 'TypeScript', Icon: SiTypescript, brandVar: 'var(--brand-typescript)' },
  { name: 'React', Icon: SiReact, brandVar: 'var(--brand-react)' },
  { name: 'Selenium', Icon: SiSelenium, brandVar: 'var(--brand-selenium)' },
  { name: 'AWS', Icon: FaAws, brandVar: 'var(--brand-aws)' },
  { name: 'OpenJDK', Icon: SiOpenjdk, brandVar: 'var(--brand-playwright)' },
]

const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: 'transparent' },
  particles: {
    number: { value: 80 },
    color: { value: '#00f5d4' },
    links: {
      enable: true,
      color: '#7c3aed',
      opacity: 0.3,
      distance: 130,
    },
    move: {
      enable: true,
      speed: 0.8,
    },
    opacity: { value: 0.4 },
    size: { value: { min: 1, max: 2 } },
  },
  detectRetina: true,
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [typedCopy, setTypedCopy] = useState('')
  const [particlesReady, setParticlesReady] = useState(false)
  const reduceMotion = useReducedMotion()
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const descriptionVisible = useInView(descriptionRef, { once: true, margin: '-20% 0px' })

  useEffect(() => {
    if (reduceMotion) return

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [reduceMotion])

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roleCycle.length)
    }, 2200)

    return () => clearInterval(roleTimer)
  }, [])

  useEffect(() => {
    const phrase = 'I design products with layered depth, kinetic clarity, and recruiter-first storytelling.'
    if (typedCopy.length >= phrase.length) return

    const timer = window.setTimeout(() => {
      setTypedCopy(phrase.slice(0, typedCopy.length + 1))
    }, 20)

    return () => window.clearTimeout(timer)
  }, [typedCopy])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-8 lg:px-10">
      <div className="noise-overlay pointer-events-none absolute inset-0" aria-hidden />
      {!reduceMotion && particlesReady ? (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
          <Particles id="hero-particles" options={particlesOptions} />
        </div>
      ) : null}

      <div className="pointer-events-none absolute right-16 top-24 -z-[1] h-64 w-64 rounded-full bg-[var(--accent-violet)]/20 blur-[90px] hero-float" />
      <div className="pointer-events-none absolute bottom-14 right-40 -z-[1] h-56 w-56 rounded-full bg-[var(--accent-teal)]/20 blur-[90px] hero-float-delayed" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 -z-[1] h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--accent-amber)]/10 blur-[90px] hero-float" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.span
            variants={itemVariants}
            className="relative inline-flex items-center rounded-full border border-transparent bg-[linear-gradient(var(--card-bg),var(--card-bg))_padding-box,conic-gradient(from_var(--angle),var(--accent-teal),var(--accent-violet),var(--accent-amber),var(--accent-teal))_border-box] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-primary"
          >
            ✦ Crafted with creative code ✦
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl font-display font-extrabold leading-[0.95] text-text-primary sm:text-6xl lg:text-7xl">
            <AnimatedText text="Mukesh Patel" className="inline-block" />
          </motion.h1>

          <motion.div variants={itemVariants} className="relative min-h-[38px] text-lg text-text-secondary sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleCycle[currentRole]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="inline-block font-medium text-[var(--accent-teal)]"
              >
                {roleCycle[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            ref={descriptionRef}
            initial={{ opacity: 0, y: 26 }}
            animate={descriptionVisible || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base leading-8 text-text-secondary"
          >
            I build high-trust engineering systems across backend development and test automation, while delivering immersive interfaces that recruiters remember.
          </motion.p>

          <div className="flex flex-wrap gap-3">
            {techPills.map((tech, index) => (
              (() => {
                const IconComponent = tech.Icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>

                return (
                  <motion.span
                    key={tech.name}
                    custom={index}
                    variants={pillVariants}
                    whileHover={{ scale: 1.08, boxShadow: `0 0 24px ${tech.brandVar}` }}
                    style={{ '--brand-color': tech.brandVar } as React.CSSProperties}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--card-bg)] px-4 py-2 text-sm text-text-primary transition-shadow"
                  >
                    <IconComponent className="h-4 w-4" style={{ color: 'var(--brand-color)' }} />
                    {tech.name}
                  </motion.span>
                )
              })()
            ))}
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="focus-ring group relative inline-flex items-center rounded-full border border-transparent bg-[linear-gradient(var(--bg-primary),var(--bg-primary))_padding-box,linear-gradient(135deg,var(--accent-violet),var(--accent-teal))_border-box] px-6 py-3 font-medium text-text-primary"
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] opacity-0 transition group-hover:opacity-100 group-hover:animate-[sweep_1.2s_linear]" />
              Explore Projects 🚀
            </Link>

            <Link
              href="/resume.pdf"
              download
              className="focus-ring group relative inline-flex items-center overflow-hidden rounded-full bg-[var(--accent-teal)] px-6 py-3 font-medium text-[#00110f]"
            >
              <span className="absolute inset-y-0 left-[-100%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)] group-hover:animate-[sweep_0.8s_ease]" />
              Download Resume 📄
            </Link>

            <MagneticButton
              data-magnetic
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="focus-ring inline-flex items-center rounded-full border border-white/20 bg-transparent px-6 py-3 font-medium text-text-primary"
            >
              Contact Me 💬
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative"
        >
          <GlassCard className="relative rounded-[2rem] p-6" accent="violet">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
              Snapshot
              <Image src="/logo.svg" alt="MP" width={20} height={20} sizes="20px" className="h-5 w-5" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {statItems.map((item) => (
                <motion.article
                  key={item.label}
                  whileHover={{ y: -6, boxShadow: '0 0 24px rgba(0,245,212,0.2)' }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-2xl font-semibold text-text-primary">
                    <CountUp end={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-text-secondary">{item.label}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-[var(--accent-amber)]">Design Philosophy</p>
              <p className="min-h-[72px] text-sm leading-7 text-text-secondary">
                {typedCopy}
                <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[var(--accent-teal)]" />
              </p>
            </div>
          </GlassCard>
        </motion.aside>
      </div>
    </section>
  )
}
