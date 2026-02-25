'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, DollarSign, Plane, MessageSquare, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects: {
  id: number
  title: string
  description: string
  tags: string[]
  color: string
  logoColor: string
  icon: React.ElementType
  github: string
  live: string | undefined
}[] = [
  {
    id: 1,
    title: 'Real-time Chat Application',
    description: 'Full-stack real-time messaging platform using Spring Boot and WebSocket. Features message persistence, user presence, typing indicators, XSS protection, and comprehensive JUnit/Mockito test coverage.',
    tags: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'JPA', 'Bootstrap'],
    color: 'from-emerald-500/20 to-teal-500/10',
    logoColor: 'from-emerald-500 to-teal-500',
    icon: MessageSquare,
    github: 'https://github.com/henasivenom',
    live: undefined,
  },
  {
    id: 2,
    title: 'ATM Simulator System',
    description: 'Secure desktop ATM system using Java Swing/AWT with signup, login, deposits, withdrawals, PIN change, and mini-statements. MySQL schemas for account and transaction management.',
    tags: ['Java', 'Swing', 'AWT', 'MySQL', 'JDBC'],
    color: 'from-blue-500/20 to-cyan-500/10',
    logoColor: 'from-blue-500 to-cyan-500',
    icon: DollarSign,
    github: 'https://github.com/henasivenom',
    live: undefined,
  },
  {
    id: 3,
    title: 'Airline Management System',
    description: 'GUI-based airline booking and management using Java Swing and MySQL. Applied OOP principles including abstraction, inheritance and polymorphism with full flight scheduling and passenger records.',
    tags: ['Java', 'Swing', 'MySQL', 'OOP'],
    color: 'from-purple-500/20 to-pink-500/10',
    logoColor: 'from-purple-500 to-pink-500',
    icon: Plane,
    github: 'https://github.com/henasivenom',
    live: undefined,
  },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '80%' : '-80%', opacity: 0, scale: 0.94 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-80%' : '80%', opacity: 0, scale: 0.94 }),
}

export default function ProjectsSection() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDir: number) => {
    const next = page + newDir
    if (next < 0 || next >= projects.length) return
    setPage([next, newDir])
  }

  const goTo = (i: number) => setPage([i, i > page ? 1 : -1])

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) paginate(1)
    else if (info.offset.x > 60) paginate(-1)
  }

  const project = projects[page]

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Static gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/8 via-teal-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/8 via-pink-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-accent-fuchsia font-mono text-sm md:text-base tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            Featured Work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6 mb-6 tracking-tighter text-balance leading-[0.9]">
            <span className="text-slate-100">My </span>
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-primary-400 to-pink-500 animate-gradient"
              style={{ backgroundSize: '200% auto' }}
            >
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4 text-balance leading-relaxed">
            A showcase of my best work &mdash; swipe or use arrows to explore
          </p>
        </motion.div>

        {/* Swipe Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Prev button — desktop only */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="hidden md:flex shrink-0 w-11 h-11 rounded-full glass border border-slate-700/50 items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card viewport */}
          <div className="w-full max-w-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing select-none"
                style={{ willChange: 'transform' }}
              >
                <div
                  className="rounded-2xl overflow-hidden border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
                >
                  {/* Banner */}
                  <div className={`relative h-52 md:h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${project.logoColor} flex items-center justify-center shadow-2xl`}>
                        <project.icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.8} />
                      </div>
                    </div>
                    {/* Counter badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-mono text-white/70 border border-white/10">
                      {page + 1} / {projects.length}
                    </div>
                    {/* Mobile swipe hint — first card only */}
                    {page === 0 && (
                      <motion.div
                        className="absolute bottom-4 right-4 text-xs text-white/40 font-mono flex items-center gap-1 md:hidden"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.4, repeat: 3, ease: 'easeInOut' }}
                      >
                        <span>swipe</span>
                        <ChevronRight className="w-3 h-3" />
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${project.logoColor} flex items-center justify-center shadow-lg`}>
                        <project.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-tight">{project.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:text-primary-400 text-sm font-medium border border-slate-700/50 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium bg-gradient-to-r ${project.logoColor}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          Desktop App
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button — desktop only */}
          <button
            onClick={() => paginate(1)}
            disabled={page === projects.length - 1}
            className="hidden md:flex shrink-0 w-11 h-11 rounded-full glass border border-slate-700/50 items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center items-center gap-2.5 mt-7">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page ? 'w-7 h-2.5 bg-primary-500' : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Mobile prev/next buttons */}
        <div className="flex justify-center gap-4 mt-5 md:hidden">
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-slate-700/50 text-slate-400 text-sm disabled:opacity-25 transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={page === projects.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-slate-700/50 text-slate-400 text-sm disabled:opacity-25 transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/henasivenom"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-3.5 glass rounded-2xl text-slate-300 hover:text-white border border-slate-700/50 hover:border-primary-500/40 transition-all font-medium text-sm"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
