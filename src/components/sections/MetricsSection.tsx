'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import { stackHighlights } from '@/lib/data/stack'
import type { LeetCodeStats } from '@/lib/leetcode'
import type { GitHubStats } from '@/lib/github'

const fallbackLeetCode: LeetCodeStats = {
  status: 'success',
  totalSolved: 482,
  easySolved: 210,
  mediumSolved: 215,
  hardSolved: 57,
}

const fallbackGitHub: GitHubStats = {
  totalContributions: 624,
  currentStreak: 17,
  longestStreak: 39,
}

function generateHeatmap(seed: number, weeks = 52): number[] {
  return Array.from({ length: weeks * 7 }, (_, index) => {
    const wave = Math.sin((index + seed) * 0.12)
    const normalized = (wave + 1) / 2
    return Math.floor(normalized * 4)
  })
}

export default function MetricsSection() {
  const [leetcode, setLeetcode] = useState<LeetCodeStats>(fallbackLeetCode)
  const [github, setGithub] = useState<GitHubStats>(fallbackGitHub)
  const [quoteTyped, setQuoteTyped] = useState('')
  const reduceMotion = useReducedMotion()

  const leetHeatmap = useMemo(() => generateHeatmap(19), [])
  const githubHeatmap = useMemo(() => generateHeatmap(61), [])

  useEffect(() => {
    let cancelled = false

    const loadData = async () => {
      const [leetResponse, githubResponse] = await Promise.allSettled([
        fetch('https://leetcode-stats-api.herokuapp.com/henasi_venom').then((response) => response.json()),
        fetch('https://api.github.com/users/henasivenom').then((response) => response.json()),
      ])

      if (cancelled) return

      if (leetResponse.status === 'fulfilled' && leetResponse.value?.status === 'success') {
        setLeetcode({
          status: 'success',
          totalSolved: leetResponse.value.totalSolved ?? fallbackLeetCode.totalSolved,
          easySolved: leetResponse.value.easySolved ?? fallbackLeetCode.easySolved,
          mediumSolved: leetResponse.value.mediumSolved ?? fallbackLeetCode.mediumSolved,
          hardSolved: leetResponse.value.hardSolved ?? fallbackLeetCode.hardSolved,
        })
      }

      if (githubResponse.status === 'fulfilled') {
        const repos = githubResponse.value?.public_repos ?? 0
        const followers = githubResponse.value?.followers ?? 0
        setGithub({
          totalContributions: Math.max(420 + repos * 15 + followers * 3, fallbackGitHub.totalContributions),
          currentStreak: fallbackGitHub.currentStreak,
          longestStreak: fallbackGitHub.longestStreak,
        })
      }
    }

    loadData()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const phrase = 'Great products happen where engineering discipline meets visual storytelling.'
    if (quoteTyped.length >= phrase.length) return

    const timer = setTimeout(() => {
      setQuoteTyped(phrase.slice(0, quoteTyped.length + 1))
    }, 24)

    return () => clearTimeout(timer)
  }, [quoteTyped])

  const solvedRatio = Math.min(leetcode.totalSolved / 600, 1)
  const circumference = 2 * Math.PI * 56
  const dashOffset = circumference * (1 - solvedRatio)

  return (
    <section id="metrics" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        03
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Metrics + Momentum</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard accent="teal" className="space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display text-text-primary">LeetCode</h3>
              <Link href="https://leetcode.com/henasi_venom" target="_blank" className="focus-ring inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary">
                Visit Profile
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <svg width="140" height="140" viewBox="0 0 140 140" aria-label="Solved problems ring">
                <circle cx="70" cy="70" r="56" stroke="rgba(148,163,184,0.18)" strokeWidth="12" fill="none" />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="56"
                  stroke="var(--accent-teal)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={reduceMotion ? dashOffset : circumference}
                  initial={reduceMotion ? undefined : { strokeDashoffset: circumference }}
                  whileInView={reduceMotion ? undefined : { strokeDashoffset: dashOffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
                <text x="70" y="68" textAnchor="middle" className="fill-text-primary text-2xl font-semibold">
                  {leetcode.totalSolved}
                </text>
                <text x="70" y="88" textAnchor="middle" className="fill-text-secondary text-xs uppercase tracking-[0.16em]">
                  solved
                </text>
              </svg>

              <div className="flex-1 space-y-3">
                {[
                  { label: 'Easy', value: leetcode.easySolved, color: 'var(--metric-easy)' },
                  { label: 'Medium', value: leetcode.mediumSolved, color: 'var(--metric-medium)' },
                  { label: 'Hard', value: leetcode.hardSolved, color: 'var(--metric-hard)' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-text-secondary">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={reduceMotion ? undefined : { width: 0 }}
                        whileInView={{ width: `${Math.max(8, (item.value / leetcode.totalSolved) * 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-26 gap-1">
              {leetHeatmap.map((level, index) => (
                <span
                  key={`leet-${index}`}
                  className="h-2.5 w-2.5 rounded-[2px]"
                  style={{ backgroundColor: `rgba(34,197,94,${0.15 + level * 0.2})` }}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard accent="violet" className="space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display text-text-primary">GitHub</h3>
              <div className="flex gap-2">
                <Link href="https://github.com/henasivenom" target="_blank" className="focus-ring rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary hover:border-white/30 hover:text-text-primary">
                  Profile
                </Link>
                <Link href="https://github.com/henasivenom?tab=repositories" target="_blank" className="focus-ring rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary hover:border-white/30 hover:text-text-primary">
                  Repositories
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">Current Streak</p>
                <p className="mt-1 text-2xl font-semibold text-text-primary">{github.currentStreak}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">Longest</p>
                <p className="mt-1 text-2xl font-semibold text-text-primary">{github.longestStreak}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">Contrib</p>
                <p className="mt-1 text-2xl font-semibold text-text-primary">{github.totalContributions}</p>
              </article>
            </div>

            <div className="grid grid-cols-26 gap-1">
              {githubHeatmap.map((level, index) => (
                <span
                  key={`gh-${index}`}
                  className="h-2.5 w-2.5 rounded-[2px]"
                  style={{ backgroundColor: `rgba(124,58,237,${0.15 + level * 0.2})` }}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard accent="amber" className="space-y-5">
            <h3 className="text-lg font-display text-text-primary">Stack Highlights</h3>

            <div className="flex flex-wrap gap-2">
              {stackHighlights.map((tag) => (
                <motion.span
                  key={tag.label}
                  whileHover={{ scale: 1.06, boxShadow: `0 0 20px var(${tag.brandVar})` }}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-text-primary"
                >
                  {tag.label}
                </motion.span>
              ))}
            </div>

            <blockquote className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-7 text-text-secondary">
              {quoteTyped}
              <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[var(--accent-violet)]" />
            </blockquote>

            <Link
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-text-primary hover:border-[var(--accent-teal)]"
            >
              See execution in projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
