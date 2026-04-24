'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import GlassCard from '@/components/ui/GlassCard'
import { AnimatedBar } from '@/components/ui/AnimatedBar'
import { skillCategories } from '@/lib/data/skills'

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
}

const accentColors = {
  teal: 'var(--teal)',
  violet: 'var(--violet)',
  amber: 'var(--amber)',
  sky: 'var(--accent-sky)',
} as const

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        02
      </span>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="section-title">Skills & Momentum</h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 block h-[2px] origin-left rounded-full bg-[linear-gradient(90deg,var(--teal),var(--violet))]"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const accent = accentColors[category.accent]

            return (
              <motion.div
                key={category.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <GlassCard accent={category.accent} className="h-full border-t-2 pt-6" style={{ borderTopColor: accent }}>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-[var(--text)]">{category.title}</h3>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm text-[var(--muted)]"
                    >
                      {category.icon}
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2 rounded-2xl p-2 transition-colors hover:bg-white/[0.02]">
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="text-[var(--text)]">{skill.name}</span>
                          <span className="font-mono text-[var(--teal)]">
                            <CountUp end={skill.value} duration={1.2} suffix="%" />
                          </span>
                        </div>
                        <AnimatedBar value={skill.value} color={accent} />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
