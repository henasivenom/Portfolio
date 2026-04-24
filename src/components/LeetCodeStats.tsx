'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Code2, ExternalLink, GitBranch, Layers3, Trophy } from 'lucide-react'

const leetcodeUsername = 'henasi_venom'
const githubUsername = 'henasivenom'

const modernStack = [
  'Java',
  'Spring Boot',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Selenium',
  'Playwright',
  'Cypress',
  'Postman',
  'GitHub Actions',
]

export default function LeetCodeStats() {
  return (
    <section id="leetcode" className="scroll-mt-28 relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-500/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Coding Universe ✨
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Metrics + Momentum 🚀
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            Live coding activity from LeetCode and GitHub, combined with the modern tools and libraries I use in real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.article
            className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 text-white">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">LeetCode 🧠</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Problem Solving</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-2">
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Noto%20Sans&ext=heatmap`}
                alt="LeetCode statistics"
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Visit profile ↗️
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>

          <motion.article
            className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-2.5 text-white">
                <GitBranch className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub 🌌</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Open Source Activity</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-3">
              <img
                src={`https://ghchart.rshah.org/a855f7/${githubUsername}`}
                alt="GitHub contribution graph"
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.13em] text-slate-300 hover:border-violet-400/40"
              >
                Profile
              </a>
              <a
                href={`https://github.com/${githubUsername}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.13em] text-slate-300 hover:border-violet-400/40"
              >
                Repositories
              </a>
            </div>
          </motion.article>

          <motion.article
            className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 text-white">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Stack Highlights</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Languages + Libraries</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {modernStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-4">
              <div className="flex items-start gap-3">
                <Code2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-300">
                  I combine backend logic, automation-first QA, and modern frontend libraries to create polished products.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-xl font-bold text-white">12+</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Tech Stack</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-xl font-bold text-white">Daily</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Practice</p>
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Activity className="h-4 w-4 text-cyan-300" />
          Continuous growth through build + test + iterate
        </motion.div>
      </div>
    </section>
  )
}
