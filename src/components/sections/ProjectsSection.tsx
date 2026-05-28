'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import GlassCard from '@/components/ui/GlassCard'
import { projects } from '@/lib/data/projects'

type ProjectIcon = React.ComponentType<{ className?: string }>

const GithubIcon = SiGithub as ProjectIcon

const cardVariants = [
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        04
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Projects 🚀</h2>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">Things I&apos;ve built that matter</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={cardVariants[index % cardVariants.length].hidden}
              whileInView={cardVariants[index % cardVariants.length].visible}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={project.featured ? 'md:col-span-2' : 'md:col-span-1'}
            >
              <GlassCard
                accent={project.featured ? 'teal' : project.color === 'var(--violet)' ? 'violet' : 'amber'}
                className="group relative h-full overflow-hidden border border-white/7 bg-[rgba(255,255,255,0.03)] p-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-white/20"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div style={{ borderTop: `3px solid ${project.color}` }} className="relative p-6">
                  {project.featured ? (
                    <div
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        padding: '4px 10px',
                        borderRadius: 999,
                        border: '1px solid var(--teal)',
                        color: 'var(--teal)',
                        fontFamily: 'var(--font-mono)',
                        animation: 'borderSpin 3s linear infinite',
                      }}
                    >
                      ★ FEATURED
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full px-3 py-1 text-xs"
                        style={{
                          background: `${project.color}1a`,
                          color: project.color,
                          border: `1px solid ${project.color}33`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--teal)] hover:text-[var(--teal)]"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Link>

                    {project.live ? (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--violet)] hover:text-[var(--violet)]"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: '45%', opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden bg-[rgba(5,8,22,0.85)] backdrop-blur-sm"
                >
                  <div className="flex h-full flex-col justify-end p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
