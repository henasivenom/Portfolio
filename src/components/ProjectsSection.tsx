'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles, DollarSign, Plane, MessageSquare, ArrowUpRight } from 'lucide-react'

const projects: {
  id: number
  title: string
  description: string
  tags: string[]
  color: string
  logoColor: string
  accentColor: string
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
    accentColor: 'rgba(16, 185, 129, 0.5)',
    icon: MessageSquare,
    github: 'https://github.com/henasivenom',
    live: undefined
  },
  {
    id: 2,
    title: 'ATM Simulator System',
    description: 'Secure desktop ATM system using Java Swing/AWT with signup, login, deposits, withdrawals, PIN change, and mini-statements. MySQL schemas for account and transaction management.',
    tags: ['Java', 'Swing', 'AWT', 'MySQL', 'JDBC'],
    color: 'from-blue-500/20 to-cyan-500/10',
    logoColor: 'from-blue-500 to-cyan-500',
    accentColor: 'rgba(59, 130, 246, 0.5)',
    icon: DollarSign,
    github: 'https://github.com/henasivenom',
    live: undefined
  },
  {
    id: 3,
    title: 'Airline Management System',
    description: 'GUI-based airline booking and management using Java Swing and MySQL. Applied OOP principles including abstraction, inheritance and polymorphism with full flight scheduling and passenger records.',
    tags: ['Java', 'Swing', 'MySQL', 'OOP'],
    color: 'from-purple-500/20 to-pink-500/10',
    logoColor: 'from-purple-500 to-pink-500',
    accentColor: 'rgba(168, 85, 247, 0.5)',
    icon: Plane,
    github: 'https://github.com/henasivenom',
    live: undefined
  }
]

export default function ProjectsSection() {
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
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-fuchsia font-mono text-sm md:text-base tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            Featured Work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6 mb-6 tracking-tighter text-balance leading-[0.9]">
            <span className="text-slate-100">My </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-primary-400 to-pink-500 animate-gradient"
                  style={{ backgroundSize: '200% auto' }}>
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4 text-balance leading-relaxed">
            A showcase of my best work, demonstrating problem-solving and technical skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-white/8 card-shine"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, borderColor: `${project.accentColor}` }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
              }}
            >
              {/* Card top gradient banner */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />
                {/* Large icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.logoColor} flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </motion.div>
                </div>
                {/* Project number */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-mono text-white/70 border border-white/10">
                  0{project.id} / 0{projects.length}
                </div>
                {/* Hover shine overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Icon small */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.logoColor} flex items-center justify-center mb-4 shadow-lg`}>
                  <project.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:text-primary-400 text-sm font-medium transition-all border border-slate-700/50 hover:border-primary-500/40 hover:bg-primary-500/5"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium bg-gradient-to-r ${project.logoColor}`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      Desktop App
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/henasivenom"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 glass rounded-2xl text-slate-300 hover:text-white border border-slate-700/50 hover:border-primary-500/40 transition-all font-medium"
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
