'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import ProgressBar from '@/components/ui/ProgressBar'
import GlassCard from '@/components/ui/GlassCard'
import { skillCategories } from '@/lib/data/skills'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const accentMap: Record<string, 'teal' | 'violet' | 'amber' | 'sky'> = {
  teal: 'teal',
  violet: 'violet',
  amber: 'amber',
  sky: 'sky',
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        02
      </span>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <svg viewBox="0 0 900 150" className="h-auto w-full max-w-3xl" role="img" aria-label="Skills heading">
            <defs>
              <linearGradient id="skills-gradient" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--accent-teal)" />
                <stop offset="100%" stopColor="var(--accent-violet)" />
              </linearGradient>
              <clipPath id="skills-clip">
                <motion.rect
                  initial={{ width: 0 }}
                  animate={inView ? { width: 900 } : { width: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  height="150"
                />
              </clipPath>
            </defs>

            <text
              x="0"
              y="95"
              fill="transparent"
              stroke="rgba(148,163,184,0.45)"
              strokeWidth="1.2"
              fontSize="95"
              fontFamily="var(--font-display)"
            >
              Skills & Momentum
            </text>

            <text
              x="0"
              y="95"
              fill="url(#skills-gradient)"
              clipPath="url(#skills-clip)"
              fontSize="95"
              fontFamily="var(--font-display)"
            >
              Skills & Momentum
            </text>
          </svg>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 block h-[2px] origin-left rounded-full bg-[linear-gradient(90deg,var(--accent-teal),var(--accent-violet))]"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <GlassCard accent={accentMap[category.accent]} className="h-full">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-display text-text-primary">{category.title}</h3>
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.65 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm text-text-secondary"
                  >
                    {category.icon}
                  </motion.span>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <ProgressBar key={skill.name} label={skill.name} value={skill.value} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
