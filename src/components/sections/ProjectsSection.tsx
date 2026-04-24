'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import { projects } from '@/lib/data/projects'

const cardDirectionVariants: Variants[] = [
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.06 } },
  },
  {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12 } },
  },
  {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.18 } },
  },
]

const accentToBorderClass: Record<string, string> = {
  teal: 'before:bg-[var(--accent-teal)]',
  violet: 'before:bg-[var(--accent-violet)]',
  amber: 'before:bg-[var(--accent-amber)]',
  sky: 'before:bg-[var(--accent-sky)]',
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        04
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title mb-10">Projects That Ship Value</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardDirectionVariants[index % cardDirectionVariants.length]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <GlassCard
                accent={project.accent as 'teal' | 'violet' | 'amber' | 'sky'}
                className={`group relative h-full overflow-hidden pl-7 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:content-[""] ${accentToBorderClass[project.accent]}`}
              >
                {project.featured ? (
                  <span className="mb-4 inline-flex items-center gap-1 rounded-full border border-transparent bg-[linear-gradient(var(--card-bg),var(--card-bg))_padding-box,linear-gradient(120deg,var(--accent-violet),var(--accent-teal))_border-box] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-text-primary animate-pulse">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured
                  </span>
                ) : null}

                <h3 className="text-2xl font-display text-text-primary">{project.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--accent-teal)]">{project.summary}</p>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    aria-label={`${project.title} source`}
                    className="focus-ring rounded-full border border-white/15 p-2 text-text-secondary transition hover:border-white/30 hover:text-text-primary"
                    title="Source"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    aria-label={`${project.title} live demo`}
                    className="focus-ring rounded-full border border-white/15 p-2 text-text-secondary transition hover:border-white/30 hover:text-text-primary"
                    title="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>

                <motion.div
                  initial={{ y: '50%', opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="pointer-events-none absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-[rgba(5,8,22,0.75)] px-4 py-3 text-sm text-text-primary backdrop-blur-xl"
                >
                  View Project →
                </motion.div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
