'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Floating Circle 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-cyan"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating Circle 2 */}
      <motion.div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-accent-fuchsia"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Floating Square */}
      <motion.div
        className="absolute bottom-1/4 left-2/3 w-4 h-4 rotate-45 bg-gradient-to-br from-accent-violet to-transparent"
        animate={{
          y: [0, -50, 0],
          rotate: [45, 225, 45],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Floating Line */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
        animate={{
          x: [0, 30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      
      {/* Small dot cluster */}
      <div className="absolute bottom-1/3 left-1/5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-emerald-400"
            style={{
              left: i * 8,
              top: i * 8,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
