'use client'

import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import MagneticButton from '@/components/ui/MagneticButton'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const characterCount = useMemo(() => form.message.length, [form.message])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitted(false)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    const confetti = (await import('canvas-confetti')).default
    confetti({
      particleCount: 120,
      spread: 65,
      origin: { y: 0.7 },
    })

    setIsSubmitting(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        05
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title mb-10">Contact & Collaborate</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard accent="teal">
            <form onSubmit={onSubmit} className="space-y-5">
              {[
                { key: 'name', label: 'Your Name', type: 'text' },
                { key: 'email', label: 'Your Email', type: 'email' },
              ].map((field) => (
                <label key={field.key} className="group relative block">
                  <input
                    required
                    type={field.type}
                    value={form[field.key as 'name' | 'email']}
                    onChange={(event) => setForm((prev) => ({ ...prev, [field.key]: event.target.value }))}
                    className="peer w-full rounded-2xl border border-white/15 bg-transparent px-4 pb-3 pt-6 text-text-primary transition focus:border-[var(--accent-teal)] focus:shadow-[0_0_20px_rgba(0,245,212,0.22)] focus:outline-none"
                    placeholder=" "
                  />
                  <span className="pointer-events-none absolute left-4 top-4 text-sm text-text-secondary transition peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--accent-teal)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    {field.label}
                  </span>
                </label>
              ))}

              <label className="group relative block">
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value.slice(0, 500) }))}
                  className="peer w-full rounded-2xl border border-white/15 bg-transparent px-4 pb-3 pt-6 text-text-primary transition focus:border-[var(--accent-teal)] focus:shadow-[0_0_20px_rgba(0,245,212,0.22)] focus:outline-none"
                  placeholder=" "
                />
                <span className="pointer-events-none absolute left-4 top-4 text-sm text-text-secondary transition peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--accent-teal)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Message
                </span>
              </label>

              <p className="text-right text-xs font-mono text-text-secondary">{characterCount}/500</p>

              <MagneticButton
                type="submit"
                data-magnetic
                disabled={isSubmitting}
                className="focus-ring inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent-violet),var(--accent-teal))] px-6 py-3 font-semibold text-white disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </MagneticButton>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent. Thanks for reaching out.
                </motion.p>
              ) : null}
            </form>
          </GlassCard>

          <GlassCard accent="violet" className="space-y-4">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Open to Work
            </div>

            {[
              {
                label: 'Email',
                value: 'amukeshpatel222@gmail.com',
                href: 'mailto:amukeshpatel222@gmail.com',
                Icon: Mail,
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/henasivenom',
                href: 'https://www.linkedin.com/in/henasivenom',
                Icon: Linkedin,
              },
              {
                label: 'GitHub',
                value: 'github.com/henasivenom',
                href: 'https://github.com/henasivenom',
                Icon: Github,
              },
            ].map(({ label, value, href, Icon }) => (
              <motion.div key={label} whileHover={{ y: -4, boxShadow: '0 0 24px rgba(124,58,237,0.28)' }} className="rounded-2xl border border-white/10 bg-white/[0.02]">
                <Link href={href} target="_blank" className="focus-ring flex items-center gap-3 px-4 py-4">
                  <motion.span whileHover={{ y: -2 }} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary">
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <span>
                    <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">{label}</p>
                    <p className="text-sm text-text-primary">{value}</p>
                  </span>
                </Link>
              </motion.div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
