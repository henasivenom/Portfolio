'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  value: number
  color?: string
}

export function AnimatedBar({ value, color = 'var(--teal)' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '4px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '2px',
        overflow: 'visible',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
        style={{
          height: '100%',
          borderRadius: '2px',
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          position: 'relative',
        }}
      >
        <motion.div
          animate={inView ? { opacity: [0.6, 1, 0.6] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute',
            right: -3,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}44`,
          }}
        />
      </motion.div>
    </div>
  )
}
