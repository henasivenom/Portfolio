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
    glowColor: 'rgba(6, 182, 212, 0.3)',
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
    glowColor: 'rgba(168, 85, 247, 0.3)',
    skills: [
      { name: 'Spring Boot', level: 80 },
      { name: 'MySQL / MongoDB', level: 82 },
      { name: 'Java Swing / AWT', level: 88 },
      { name: 'Git & GitHub', level: 85 },
    ]
  },
  {
    title: 'Skills & Methodologies',
    icon: Zap,
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    skills: [
      { name: 'Manual Testing', level: 87 },
      { name: 'SDLC & Agile', level: 80 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Debugging', level: 85 },
    ]
  }
]

const expertiseItems = [
  { icon: Code2, title: 'Java Development', description: 'GUI apps with Swing, AWT & JDBC connected to MySQL databases', color: 'from-cyan-500 to-blue-500' },
  { icon: Cloud, title: 'AWS Certified', description: 'Cloud Foundations certified — knowledgeable in core AWS services', color: 'from-yellow-500 to-orange-500' },
  { icon: GitBranch, title: 'Version Control', description: 'Git workflows, branching strategies, and collaborative dev with GitHub', color: 'from-emerald-500 to-teal-500' },
  { icon: Award, title: 'QA & Testing', description: 'Test case design, manual testing, JUnit & Mockito for unit tests', color: 'from-purple-500 to-pink-500' },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-bg absolute inset-0" />
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 via-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['15%', '-15%', '15%'],
            y: ['-15%', '15%', '-15%'],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 via-teal-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: ['-15%', '15%', '-15%'],
            y: ['15%', '-15%', '15%'],
            scale: [1, 1.15, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      <div className="section-container relative z-10">
        {/* Section Header with enhanced typography */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.3em] uppercase font-semibold inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My Expertise
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6 mb-6 tracking-tighter text-balance leading-[0.9]">
            <span className="text-slate-100">Skills & </span>
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary-400 to-emerald-500 animate-gradient relative" 
                  style={{ backgroundSize: '200% auto' }}>
              Technologies
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-primary-400 to-emerald-500 blur-3xl opacity-20 -z-10" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4 text-balance leading-relaxed">
            A curated collection of technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative p-5 md:p-6 rounded-2xl glass cursor-pointer transition-all duration-300 border ${category.borderColor} card-shine`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 40px ${category.glowColor}, 0 0 80px ${category.glowColor.replace('0.3', '0.15')}`
              }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className="w-5 h-5 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                {category.title}
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeCategory === index ? 'rotate-90 text-primary-400' : 'text-slate-600'}`} />
              </h3>

              {/* Skill bars */}
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
                        transition={{ duration: 0.9, delay: index * 0.1 + skillIndex * 0.1, ease: 'easeOut' }}
                        style={{ boxShadow: `0 0 8px ${category.glowColor}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Active indicator */}
              {activeCategory === index && (
                <motion.div
                  className="absolute -inset-px rounded-2xl border-2 border-primary-500/40 pointer-events-none"
                  layoutId="skillsActiveIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 card-shine"
              whileHover={{ y: -6, borderColor: 'rgba(168, 85, 247, 0.4)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              custom={index}
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
