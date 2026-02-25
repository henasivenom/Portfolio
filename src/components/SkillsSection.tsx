'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Zap, ChevronRight, Award, GitBranch, Cloud } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    skills: [
      { name: 'Java (Core, OOP)', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'HTML / CSS', level: 78 },
      { name: 'JavaScript', level: 65 },
    ]
  },
  {
    title: 'Technologies & Databases',
    icon: Database,
    color: 'from-purple-400 to-pink-500',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    skills: [
      { name: 'Spring Boot', level: 80 },
      { name: 'MySQL / MongoDB', level: 82 },
      { name: 'Mockito / Maven', level: 78 },
      { name: 'Git & GitHub', level: 85 },
    ]
  },
  {
    title: 'Testing & Automation',
    icon: Zap,
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    skills: [
      { name: 'Selenium WebDriver', level: 85 },
      { name: 'TestNG / JUnit 5', level: 82 },
      { name: 'Cucumber (BDD)', level: 75 },
      { name: 'Manual Testing', level: 90 },
    ]
  }
]

const expertiseItems = [
  { icon: Code2, title: 'Java Development', description: 'Spring Boot, Swing/AWT, JDBC, Agile/SDLC — building robust end-to-end applications', color: 'from-cyan-500 to-blue-500' },
  { icon: Cloud, title: 'AWS Certified', description: 'Cloud Foundations certified — knowledgeable in core AWS services', color: 'from-yellow-500 to-orange-500' },
  { icon: GitBranch, title: 'Version Control', description: 'Git workflows, branching strategies, and collaborative dev with GitHub', color: 'from-emerald-500 to-teal-500' },
  { icon: Award, title: 'QA & Automation', description: 'Selenium WebDriver, TestNG, Cucumber BDD, Page Object Model & CI/CD test pipelines', color: 'from-purple-500 to-pink-500' },
]

/* ── Variants for staggered card entrance ── */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
}

const expertiseGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const expertiseCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Static gradient blobs — no animation to keep it smooth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/8 via-blue-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-400/8 via-teal-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.3em] uppercase font-semibold inline-block">
            My Expertise
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6 mb-6 tracking-tighter text-balance leading-[0.9]">
            <span className="text-slate-100">Skills & </span>
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary-400 to-emerald-500 animate-gradient"
                  style={{ backgroundSize: '200% auto' }}>
              Technologies
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4 text-balance leading-relaxed">
            A curated collection of technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid — cards appear one by one via staggerChildren */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`relative p-5 md:p-6 rounded-2xl glass cursor-pointer border ${category.borderColor} transition-colors duration-300 hover:border-opacity-60`}
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              style={{ willChange: 'transform' }}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                {category.title}
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeCategory === index ? 'rotate-90 text-primary-400' : 'text-slate-600'}`} />
              </h3>

              {/* Skill bars — each bar staggers within its card */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400 font-mono">{skill.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800/60 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        style={{ willChange: 'width' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Active border highlight — CSS only, no layoutId */}
              {activeCategory === index && (
                <div className="absolute -inset-px rounded-2xl border-2 border-primary-500/40 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Cards — also stagger one by one */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          variants={expertiseGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {expertiseItems.map((item) => (
            <motion.div
              key={item.title}
              variants={expertiseCardVariants}
              className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              style={{ willChange: 'transform' }}
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-md`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-slate-100 mb-1.5 leading-tight">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
