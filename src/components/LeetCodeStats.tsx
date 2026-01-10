'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Trophy, Flame, Target, GitBranch, Star, GitFork } from 'lucide-react'

export default function LeetCodeStats() {
  const leetcodeUsername = 'henasi_venom'
  const githubUsername = 'henasivenom'
  
  return (
    <section id="leetcode" className="relative py-16 md:py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary-400 font-mono text-xs md:text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            CODING PRACTICE & CONTRIBUTIONS
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Code & Contributions</span>
          </motion.h2>
          
          <motion.p
            className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Daily problem-solving on LeetCode and active open-source contributions on GitHub
          </motion.p>
        </motion.div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-6">
          {/* LeetCode Stats Card */}
          <motion.div
            className="glass-panel p-4 md:p-6 rounded-xl flex flex-col group"
            style={{ willChange: 'transform' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">LeetCode Stats</h3>
                <p className="text-slate-400 text-xs">Problem Solving Progress</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg bg-slate-900/50 p-3 flex-1 transition-all duration-300 ease-out group-hover:bg-slate-900/70">
              <img 
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Noto%20Sans&ext=heatmap`}
                alt="LeetCode Stats"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Hover overlay for premium effect */}
            <style jsx>{`
              .group:hover {
                transform: scale(1.06);
                box-shadow: 0 20px 40px -12px rgba(168, 85, 247, 0.25), 
                            0 0 30px -10px rgba(217, 70, 239, 0.2);
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .group {
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}</style>
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div
            className="glass-panel p-4 md:p-6 rounded-xl flex flex-col group"
            style={{ willChange: 'transform' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
                <GitBranch className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">GitHub Activity</h3>
                <p className="text-slate-400 text-xs">Open Source Contributions</p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-3">
              {/* Contribution Graph */}
              <div className="relative overflow-hidden rounded-lg bg-slate-900/50 p-3 flex-1 transition-all duration-300 ease-out group-hover:bg-slate-900/70">
                <img 
                  src={`https://ghchart.rshah.org/a855f7/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto brightness-110"
                  loading="lazy"
                />
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2.5">
                <a 
                  href={`https://github.com/${githubUsername}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 rounded-lg p-3 border border-slate-800 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-slate-400 text-xs">Repositories</span>
                  </div>
                  <p className="text-base font-bold text-white group-hover:text-primary-400 transition-colors">View All →</p>
                </a>
                
                <a 
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 rounded-lg p-3 border border-slate-800 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <GitFork className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-400 text-xs">Activity</span>
                  </div>
                  <p className="text-base font-bold text-white group-hover:text-primary-400 transition-colors">View Stats →</p>
                </a>
              </div>
            </div>
            
            {/* Hover overlay for premium effect */}
            <style jsx>{`
              .group:hover {
                transform: scale(1.06);
                box-shadow: 0 20px 40px -12px rgba(168, 85, 247, 0.25), 
                            0 0 30px -10px rgba(217, 70, 239, 0.2);
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .group {
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}</style>
          </motion.div>
        </div>

        {/* GitHub Profile Summary */}
        <motion.div
          className="glass-panel p-4 md:p-6 rounded-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Active Developer</h3>
              <p className="text-slate-400 text-xs">Building and contributing to open source</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-lg p-4">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300 font-medium text-sm">Projects</span>
              </div>
              <p className="text-xl font-bold text-white mb-0.5">Multiple</p>
              <p className="text-slate-400 text-xs">Active repositories</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div className="flex items-center gap-1.5 mb-1.5">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium text-sm">Commits</span>
              </div>
              <p className="text-xl font-bold text-white mb-0.5">Regular</p>
              <p className="text-slate-400 text-xs">Consistent contributions</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-300 font-medium text-sm">Experience</span>
              </div>
              <p className="text-xl font-bold text-white mb-0.5">Growing</p>
              <p className="text-slate-400 text-xs">Continuous learning</p>
            </div>
          </div>
        </motion.div>

        {/* Profile Links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={`https://leetcode.com/u/${leetcodeUsername}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group"
          >
            <motion.button
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Trophy className="w-4 h-4" />
              View LeetCode Profile
            </motion.button>
          </a>
          
          <a 
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group"
          >
            <motion.button
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-violet-600 text-white py-2.5 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitBranch className="w-4 h-4" />
              View GitHub Profile
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
