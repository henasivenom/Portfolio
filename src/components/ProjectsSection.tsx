'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles, DollarSign, Plane, Brain } from 'lucide-react'

const projects: {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  color: string
  logoColor: string
  icon: React.ElementType
  github: string
  live: string | undefined
}[] = [
  {
    id: 1,
    title: 'ATM Banking System',
    description: 'A comprehensive Java-based ATM simulation featuring account management, transaction history, and secure PIN authentication with an intuitive console interface.',
    image: '/projects/atm.jpg',
    tags: ['Java', 'OOP', 'File I/O'],
    color: 'from-blue-500 to-cyan-500',
    logoColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    icon: DollarSign,
    github: 'https://github.com/mukesh/atm-system',
    live: undefined
  },
  {
    id: 2,
    title: 'Airline Reservation System',
    description: 'Full-stack airline booking platform with flight search, seat selection, and booking management. Built with modern web technologies for seamless user experience.',
    image: '/projects/airline.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-purple-500 to-pink-500',
    logoColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    icon: Plane,
    github: 'https://github.com/mukesh/airline-reservation',
    live: 'https://airline.demo.com'
  },
  {
    id: 3,
    title: 'Quiz Application',
    description: 'Interactive quiz platform with multiple categories, timed questions, leaderboards, and detailed performance analytics for educational purposes.',
    image: '/projects/quiz.jpg',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    color: 'from-emerald-500 to-teal-500',
    logoColor: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    icon: Brain,
    github: 'https://github.com/mukesh/quiz-app',
    live: 'https://quiz.demo.com'
  }
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section id="projects" className="relative py-16 md:py-20 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            FEATURED WORK
          </span>
          <h2 className="section-title mt-4">
            <span className="text-slate-100">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my best work, demonstrating problem-solving and technical skills
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 glass rounded-full text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 glass rounded-full text-slate-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Project Cards Container */}
          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  {/* Project Image */}
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden glass"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient placeholder */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].color} opacity-20`} />
                    
                    {/* Project number */}
                    <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-sm font-mono">
                      0{projects[activeProject].id}/0{projects.length}
                    </div>

                    {/* Large project logo icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`w-48 h-48 rounded-3xl ${projects[activeProject].logoColor} flex items-center justify-center shadow-2xl`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                        {React.createElement(projects[activeProject].icon, {
                          className: "w-24 h-24 text-white",
                          strokeWidth: 2
                        })}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-center">
                    {/* Project Logo */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl ${projects[activeProject].logoColor} flex items-center justify-center shadow-lg`}>
                        {React.createElement(projects[activeProject].icon, {
                          className: "w-8 h-8 text-white",
                          strokeWidth: 2.5
                        })}
                      </div>
                    </motion.div>

                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-slate-100 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {projects[activeProject].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-slate-400 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {projects[activeProject].description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {projects[activeProject].tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${projects[activeProject].color} bg-opacity-10 text-slate-200 border border-slate-700/50`}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    <motion.div 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <a
                        href={projects[activeProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                      {projects[activeProject].live && (
                        <a
                          href={projects[activeProject].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeProject 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => {
                  setDirection(index > activeProject ? 1 : -1)
                  setActiveProject(index)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
