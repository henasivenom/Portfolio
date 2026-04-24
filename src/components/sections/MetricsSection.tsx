'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import { AnimatedBar } from '@/components/ui/AnimatedBar'
import { GitHubHeatmap } from '@/components/ui/GitHubHeatmap'
import { getLeetCodeStats } from '@/lib/leetcode'

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  totalQuestions: number
  easyTotal: number
  mediumTotal: number
  hardTotal: number
}

interface HeatmapDay {
  date: string
  count: number
}

interface ContributionWeek {
  days?: Array<{ date: string; contributionCount: number }>
}

const diffColors: Record<'Easy' | 'Medium' | 'Hard', string> = {
  Easy: 'var(--metric-easy)',
  Medium: 'var(--metric-medium)',
  Hard: 'var(--metric-hard)',
}

function flattenContributionDays(weeks: ContributionWeek[]): HeatmapDay[] {
  const days: HeatmapDay[] = []

  for (const week of weeks) {
    for (const day of week.days ?? []) {
      days.push({ date: day.date, count: day.contributionCount })
    }
  }

  return days
}

function CircularProgress({ value, max, color, size = 120 }: Readonly<{ value: number; max: number; color: string; size?: number }>) {
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(value / Math.max(max, 1), 1)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference * (1 - pct) : circumference }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-syne)', color: 'var(--text)' }}>{value}</span>
        <span style={{ fontSize: '10px', color: 'var(--muted)' }}>solved</span>
      </div>
    </div>
  )
}

function SectionSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {[0, 1, 2].map((index) => (
        <div key={index} className="animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
          <div className="h-4 w-24 rounded-full bg-white/10" />
          <div className="mt-5 h-40 rounded-3xl bg-white/[0.04]" />
          <div className="mt-4 space-y-3">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MetricsSection() {
  const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null)
  const [heatmap, setHeatmap] = useState<HeatmapDay[]>([])
  const [quoteTyped, setQuoteTyped] = useState('')
  const [loading, setLoading] = useState(true)
  const heatmapSeed = useMemo(() => 61, [])

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const [leetResponse, githubResponse] = await Promise.all([
          getLeetCodeStats('henasi_venom'),
          fetch('https://github-contributions-api.jogruber.de/v4/henasivenom?y=last').then((response) => response.json()),
        ])

        if (cancelled) return

        setLeetcode(leetResponse as LeetCodeStats)
        const contributions = flattenContributionDays(githubResponse?.contributions ?? [])
        setHeatmap(
          contributions.length > 0
            ? contributions
            : Array.from({ length: 364 }, (_, index) => ({ date: `Day ${index + 1}`, count: (index + heatmapSeed) % 11 })),
        )
      } catch {
        if (cancelled) return

        setLeetcode({
          totalSolved: 78,
          easySolved: 50,
          mediumSolved: 28,
          hardSolved: 0,
          totalQuestions: 3907,
          easyTotal: 938,
          mediumTotal: 2045,
          hardTotal: 924,
        })
        setHeatmap(Array.from({ length: 364 }, (_, index) => ({ date: `Day ${index + 1}`, count: (index + heatmapSeed) % 11 })))
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [heatmapSeed])

  useEffect(() => {
    const quote = 'Great products happen where engineering discipline meets visual storytelling.'
    if (quoteTyped.length >= quote.length) return

    const timer = globalThis.setTimeout(() => {
      setQuoteTyped(quote.slice(0, quoteTyped.length + 1))
    }, 24)

    return () => globalThis.clearTimeout(timer)
  }, [quoteTyped])

  const stats = leetcode ?? {
    totalSolved: 78,
    easySolved: 50,
    mediumSolved: 28,
    hardSolved: 0,
    totalQuestions: 3907,
    easyTotal: 938,
    mediumTotal: 2045,
    hardTotal: 924,
  }

  const solvedTotal = Math.max(stats.totalQuestions, 1)

  return (
    <section id="metrics" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        03
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Metrics + Momentum</h2>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">Live stats that show consistency, practice, and ship-ready momentum.</p>

        {loading ? (
          <div className="mt-10">
            <SectionSkeleton />
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard accent="teal" className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--text)]">LeetCode</h3>
                <Link href="https://leetcode.com/henasi_venom" target="_blank" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] transition hover:text-[var(--text)]">
                  Visit Profile
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <CircularProgress value={stats.totalSolved} max={solvedTotal} color="var(--teal)" size={120} />

                <div className="flex-1 space-y-3">
                  {([
                    { label: 'Easy', solved: stats.easySolved, total: stats.easyTotal, color: diffColors.Easy },
                    { label: 'Medium', solved: stats.mediumSolved, total: stats.mediumTotal, color: diffColors.Medium },
                    { label: 'Hard', solved: stats.hardSolved, total: stats.hardTotal, color: diffColors.Hard },
                  ] as const).map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.14em]">
                        <span style={{ color: item.color }}>{item.label}</span>
                        <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                          {item.solved} / {item.total}
                        </span>
                      </div>
                      <AnimatedBar value={(item.solved / Math.max(item.total, 1)) * 100} color={item.color} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-26 gap-1">
                {heatmap.slice(0, 364).map((day) => (
                  <span
                    key={day.date}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{ backgroundColor: `rgba(34,197,94,${0.15 + Math.min(day.count, 10) * 0.08})` }}
                  />
                ))}
              </div>
            </GlassCard>

            <GlassCard accent="violet" className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--text)]">GitHub</h3>
                <div className="flex gap-2">
                  <Link href="https://github.com/henasivenom" target="_blank" className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)] transition hover:border-white/30 hover:text-[var(--text)]">
                    Profile
                  </Link>
                  <Link href="https://github.com/henasivenom?tab=repositories" target="_blank" className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)] transition hover:border-white/30 hover:text-[var(--text)]">
                    Repositories
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Current Streak</p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--text)]">17</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Longest</p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--text)]">39</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Contrib</p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--text)]">624</p>
                </article>
              </div>

              <GitHubHeatmap data={heatmap} />
            </GlassCard>

            <GlassCard accent="amber" className="space-y-5">
              <h3 className="text-lg font-semibold text-[var(--text)]">Stack Highlights</h3>

              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring', 'TypeScript', 'React', 'Selenium', 'AWS', 'Playwright', 'Next.js'].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(124,58,237,0.18)' }}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-[var(--text)]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <blockquote className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-7 text-[var(--muted)]">
                {quoteTyped}
                <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[var(--violet)]" />
              </blockquote>

              <Link href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--text)] transition hover:border-[var(--teal)]">
                See execution in projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  )
}
