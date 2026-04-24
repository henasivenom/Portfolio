'use client'

import { motion, useInView, useReducedMotion, Variants } from 'framer-motion'
import { useRef } from 'react'

const fillVariants: Variants = {
  hidden: { width: 0 },
  visible: (value: number) => ({
    width: `${value}%`,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

interface ProgressBarProps {
  value: number
  label: string
}

export default function ProgressBar({ value, label }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()

  return (
    <div ref={ref} className="group rounded-xl border border-white/5 bg-white/[0.015] p-3 transition-colors hover:border-white/15">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-text-primary">{label}</span>
        <span className="font-mono text-text-secondary">{value}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-[linear-gradient(90deg,var(--accent-teal),var(--accent-violet))]"
          custom={value}
          variants={fillVariants}
          initial="hidden"
          animate={inView || reduceMotion ? 'visible' : 'hidden'}
        >
          <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--accent-teal)] shadow-[0_0_18px_var(--accent-teal)]" />
        </motion.div>
      </div>
    </div>
  )
}
