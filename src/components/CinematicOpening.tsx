'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicOpeningProps {
  onComplete: () => void
}

export default function CinematicOpening({ onComplete }: CinematicOpeningProps) {
  const [phase, setPhase] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const advancePhase = useCallback(() => {
    setPhase(prev => prev + 1)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timings = [1000, 1500, 1500, 1200, 800]
    
    if (phase < timings.length) {
      const timer = setTimeout(advancePhase, timings[phase])
      return () => clearTimeout(timer)
    } else if (phase === timings.length) {
      const timer = setTimeout(onComplete, 500)
      return () => clearTimeout(timer)
    }
  }, [phase, mounted, advancePhase, onComplete])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {phase <= 5 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated background lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
                style={{
                  top: `${5 + i * 5}%`,
                  left: 0,
                  right: 0,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: phase >= 1 ? 1 : 0, 
                  opacity: phase >= 1 ? 0.5 : 0 
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.05,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 text-center">
            {/* Initial spark */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: phase >= 0 ? [0, 1.5, 1] : 0, 
                opacity: phase >= 0 ? [0, 1, 0.8] : 0 
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="w-4 h-4 rounded-full bg-primary-400 blur-sm" />
            </motion.div>

            {/* Expanding rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-500/30"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ 
                  width: phase >= 1 ? 200 * ring : 0,
                  height: phase >= 1 ? 200 * ring : 0,
                  opacity: phase >= 1 ? [0, 0.5, 0] : 0
                }}
                transition={{ 
                  duration: 2,
                  delay: ring * 0.2,
                  ease: 'easeOut'
                }}
              />
            ))}

            {/* Name reveal */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 20
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold tracking-tight"
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ 
                  letterSpacing: phase >= 2 ? '0.05em' : '0.5em',
                  opacity: phase >= 2 ? 1 : 0
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="gradient-text">Mukesh</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-xl md:text-2xl text-slate-400 font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: phase >= 3 ? 1 : 0,
                y: phase >= 3 ? 0 : 10
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Software Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-lg text-primary-400/80 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 4 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              crafting digital experiences
            </motion.p>
          </div>

          {/* Corner decorations */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
            <motion.div
              key={corner}
              className={`absolute w-32 h-32 ${
                corner.includes('top') ? 'top-8' : 'bottom-8'
              } ${corner.includes('left') ? 'left-8' : 'right-8'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: phase >= 1 ? 0.3 : 0,
                scale: phase >= 1 ? 1 : 0.8
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`w-full h-full border-primary-500/20 ${
                corner === 'top-left' ? 'border-l-2 border-t-2' :
                corner === 'top-right' ? 'border-r-2 border-t-2' :
                corner === 'bottom-left' ? 'border-l-2 border-b-2' :
                'border-r-2 border-b-2'
              }`} />
            </motion.div>
          ))}

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 text-slate-500 hover:text-slate-300 text-sm font-mono transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onComplete}
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
