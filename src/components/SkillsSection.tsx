'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Cpu, Layers, Zap, ChevronRight } from 'lucide-react'

const skillCategories = [
  {
    title: 'What I can do',
    icon: Code2,
    color: 'from-cyan-400 to-blue-500',
    skills: ['Web Application Development', 'Fullstack Web Development', 'Mobile App Development', 'Database Design', 'API Integration']
  },
  {
    title: 'Tools I Use',
    icon: Layers,
    color: 'from-purple-400 to-pink-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL', 'MongoDB', 'Figma', 'Photoshop']
  },
  {
    title: 'My Expertise',
    icon: Zap,
    color: 'from-emerald-400 to-teal-500',
    skills: ['Java Backend Development', 'Database Design & Optimization', 'UI/UX Implementation', 'System Architecture', 'Problem Solving']
  }
]

const expertiseItems = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: Cpu, title: 'Performance', description: 'Optimized for speed and efficiency' },
  { icon: Zap, title: 'Modern Stack', description: 'Latest technologies and best practices' }
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary-400 font-mono text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            MY EXPERTISE
          </motion.span>
          <h2 className="section-title mt-4">
            <span className="text-slate-100">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A curated collection of technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative p-6 rounded-2xl glass cursor-pointer transition-all duration-300 ${
                activeCategory === index ? 'border-primary-500/50 shadow-lg shadow-primary-500/10' : 'hover:border-slate-600'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                whileHover={{ rotate: 5 }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                {category.title}
                <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === index ? 'rotate-90' : ''}`} />
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(14, 165, 233, 0.1)',
                      borderColor: 'rgba(14, 165, 233, 0.3)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Active indicator */}
              {activeCategory === index && (
                <motion.div
                  className="absolute -inset-px rounded-2xl border-2 border-primary-500/50 pointer-events-none"
                  layoutId="skillsActiveIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30"
              whileHover={{ y: -5, borderColor: 'rgba(14, 165, 233, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <item.icon className="w-8 h-8 text-primary-400 mb-4" />
              <h4 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
