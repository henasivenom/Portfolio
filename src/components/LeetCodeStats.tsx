'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Trophy, Flame, Target, GitBranch, Star, GitFork } from 'lucide-react'

export default function LeetCodeStats() {
  const leetcodeUsername = 'henasi_venom'
  const githubUsername = 'henasivenom'
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <section id="leetcode" className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
        >
          <motion.span 
            className="text-primary-400 font-mono tracking-wider block mb-2"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            CODING PRACTICE & CONTRIBUTIONS
          </motion.span>
          
          <motion.h2 
            className="font-bold mb-3 sm:mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            <span className="gradient-text">Code & Contributions</span>
          </motion.h2>
          
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto px-4 leading-relaxed"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', lineHeight: '1.6' }}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            Daily problem-solving on LeetCode and active open-source contributions on GitHub
          </motion.p>
        </motion.div>

        {/* Stats Cards Grid - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
          {/* LeetCode Stats Card - Touch Optimized */}
          <motion.div
            className="glass-panel rounded-xl flex flex-col overflow-hidden touch-card"
            style={{ 
              willChange: 'transform',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              minHeight: '44px'
            }}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98, y: -2 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div 
                className="rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0"
                style={{ 
                  width: 'clamp(36px, 10vw, 44px)',
                  height: 'clamp(36px, 10vw, 44px)'
                }}
              >
                <Trophy style={{ width: 'clamp(18px, 5vw, 22px)', height: 'clamp(18px, 5vw, 22px)' }} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-white truncate" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
                  LeetCode Stats
                </h3>
                <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                  Problem Solving Progress
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg bg-slate-900/50 p-2 sm:p-3 flex-1">
              <img 
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Noto%20Sans&ext=heatmap`}
                alt="LeetCode Stats"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* GitHub Stats Card - Touch Optimized */}
          <motion.div
            className="glass-panel rounded-xl flex flex-col overflow-hidden touch-card"
            style={{ 
              willChange: 'transform',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              minHeight: '44px'
            }}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98, y: -2 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div 
                className="rounded-lg bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center flex-shrink-0"
                style={{ 
                  width: 'clamp(36px, 10vw, 44px)',
                  height: 'clamp(36px, 10vw, 44px)'
                }}
              >
                <GitBranch style={{ width: 'clamp(18px, 5vw, 22px)', height: 'clamp(18px, 5vw, 22px)' }} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-white truncate" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
                  GitHub Activity
                </h3>
                <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                  Open Source Contributions
                </p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-2 sm:gap-3">
              {/* Contribution Graph */}
              <div className="relative overflow-hidden rounded-lg bg-slate-900/50 p-2 sm:p-3 flex-1">
                <img 
                  src={`https://ghchart.rshah.org/a855f7/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto brightness-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Quick Stats - Touch Friendly */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <motion.a 
                  href={`https://github.com/${githubUsername}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 rounded-lg border border-slate-800 active:border-primary-500/50 touch-none"
                  style={{ 
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Star style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} className="text-yellow-400" />
                    <span className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
                      Repositories
                    </span>
                  </div>
                  <p className="font-bold text-white truncate" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                    View All →
                  </p>
                </motion.a>
                
                <motion.a 
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 rounded-lg border border-slate-800 active:border-primary-500/50 touch-none"
                  style={{ 
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <GitFork style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} className="text-emerald-400" />
                    <span className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
                      Activity
                    </span>
                  </div>
                  <p className="font-bold text-white truncate" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                    View Stats →
                  </p>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Summary - Mobile Optimized */}
        <motion.div
          className="glass-panel rounded-xl mb-5 sm:mb-6 overflow-hidden"
          style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
            <div 
              className="rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center flex-shrink-0"
              style={{ 
                width: 'clamp(36px, 10vw, 44px)',
                height: 'clamp(36px, 10vw, 44px)'
              }}
            >
              <Code2 style={{ width: 'clamp(18px, 5vw, 22px)', height: 'clamp(18px, 5vw, 22px)' }} className="text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-white truncate" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
                Active Developer
              </h3>
              <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                Building and contributing to open source
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {/* Projects Card - Premium Popup Effect */}
            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-lg overflow-hidden"
              style={{ 
                padding: 'clamp(0.875rem, 2.5vw, 1rem)',
                minHeight: '44px',
                WebkitTapHighlightColor: 'transparent',
                willChange: 'transform'
              }}
              whileHover={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(168, 85, 247, 0.4), 0 0 30px -8px rgba(217, 70, 239, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(168, 85, 247, 0.4), 0 0 30px -8px rgba(217, 70, 239, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Code2 style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} className="text-purple-400" />
                <span className="text-slate-300 font-medium truncate" style={{ fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}>
                  Projects
                </span>
              </div>
              <p className="font-bold text-white mb-0.5" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                Multiple
              </p>
              <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
                Active repositories
              </p>
            </motion.div>
            
            {/* Commits Card - Premium Popup Effect */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg overflow-hidden"
              style={{ 
                padding: 'clamp(0.875rem, 2.5vw, 1rem)',
                minHeight: '44px',
                WebkitTapHighlightColor: 'transparent',
                willChange: 'transform'
              }}
              whileHover={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.4), 0 0 30px -8px rgba(6, 182, 212, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.4), 0 0 30px -8px rgba(6, 182, 212, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <GitBranch style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} className="text-emerald-400" />
                <span className="text-slate-300 font-medium truncate" style={{ fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}>
                  Commits
                </span>
              </div>
              <p className="font-bold text-white mb-0.5" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                Regular
              </p>
              <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
                Consistent contributions
              </p>
            </motion.div>
            
            {/* Experience Card - Premium Popup Effect */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg overflow-hidden"
              style={{ 
                padding: 'clamp(0.875rem, 2.5vw, 1rem)',
                minHeight: '44px',
                WebkitTapHighlightColor: 'transparent',
                willChange: 'transform'
              }}
              whileHover={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(234, 179, 8, 0.4), 0 0 30px -8px rgba(249, 115, 22, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ 
                scale: 1.06, 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(234, 179, 8, 0.4), 0 0 30px -8px rgba(249, 115, 22, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Star style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} className="text-yellow-400" />
                <span className="text-slate-300 font-medium truncate" style={{ fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}>
                  Experience
                </span>
              </div>
              <p className="font-bold text-white mb-0.5" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                Growing
              </p>
              <p className="text-slate-400 truncate" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
                Continuous learning
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Links - Touch Optimized */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center px-2 sm:px-0"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: 0.2 }}
        >
          <motion.a 
            href={`https://leetcode.com/u/${leetcodeUsername}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto touch-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.96 }}
          >
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 active:shadow-orange-500/40"
              style={{ 
                padding: 'clamp(0.75rem, 2.5vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                minHeight: '44px'
              }}
            >
              <Trophy style={{ width: 'clamp(16px, 4vw, 18px)', height: 'clamp(16px, 4vw, 18px)' }} />
              <span className="whitespace-nowrap">View LeetCode Profile</span>
            </button>
          </motion.a>
          
          <motion.a 
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto touch-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.96 }}
          >
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg font-medium shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 active:shadow-purple-500/40"
              style={{ 
                padding: 'clamp(0.75rem, 2.5vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                minHeight: '44px'
              }}
            >
              <GitBranch style={{ width: 'clamp(16px, 4vw, 18px)', height: 'clamp(16px, 4vw, 18px)' }} />
              <span className="whitespace-nowrap">View GitHub Profile</span>
            </button>
          </motion.a>
        </motion.div>

        {/* Premium Glassmorphism + Neon Interaction Styles */}
        <style jsx global>{`
          @media (hover: none) and (pointer: coarse) {
            /* Mobile-specific touch interactions */
            .touch-card:active {
              transform: scale(0.98) translateY(-2px);
              box-shadow: 0 10px 25px -8px rgba(168, 85, 247, 0.3),
                          0 0 20px -8px rgba(217, 70, 239, 0.2);
            }
          }
          
          @media (hover: hover) and (pointer: fine) {
            /* Desktop hover interactions */
            .touch-card:hover {
              transform: scale(1.02) translateY(-4px);
              box-shadow: 0 15px 35px -10px rgba(168, 85, 247, 0.3),
                          0 0 25px -8px rgba(217, 70, 239, 0.2);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          
          /* Performance optimization */
          .touch-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Prevent text selection during touch */
          .touch-none {
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .touch-card {
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
