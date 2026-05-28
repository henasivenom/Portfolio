'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Linkedin, Loader2, Mail, CheckCircle2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import GlassCard from '@/components/ui/GlassCard'

type ContactIcon = React.ComponentType<{ className?: string }>

interface ContactValues {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = handleSubmit(async () => {
    setIsSubmitting(true)
    setSuccess(false)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    const confetti = (await import('canvas-confetti')).default
    confetti({
      particleCount: 120,
      spread: 70,
      colors: ['#00f5d4', '#7c3aed', '#f97316'],
      origin: { y: 0.6 },
    })

    reset()
    setIsSubmitting(false)
    setSuccess(true)
  })

  return (
    <section id="contact" className="section-shell relative px-4 py-24 sm:px-8 lg:px-10">
      <span className="section-number" aria-hidden>
        05
      </span>

      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Contact & Collaborate</h2>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">Open to full-time roles, high-trust freelance work, and product collaborations.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard accent="teal" className="relative overflow-hidden">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="input-wrapper">
                <input
                  id="contact-name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/10 bg-transparent px-4 pb-3 pt-6 text-[var(--text)] outline-none transition focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(0,245,212,0.1)]"
                />
                <label htmlFor="contact-name" className="float-label">Name</label>
                {errors.name ? <p className="mt-2 text-xs text-[var(--amber)]">{errors.name.message}</p> : null}
              </div>

              <div className="input-wrapper">
                <input
                  id="contact-email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/10 bg-transparent px-4 pb-3 pt-6 text-[var(--text)] outline-none transition focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(0,245,212,0.1)]"
                />
                <label htmlFor="contact-email" className="float-label">Email</label>
                {errors.email ? <p className="mt-2 text-xs text-[var(--amber)]">{errors.email.message}</p> : null}
              </div>

              <div className="input-wrapper">
                <textarea
                  id="contact-message"
                  {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please write a bit more detail' } })}
                  placeholder=" "
                  rows={7}
                  className="peer w-full rounded-2xl border border-white/10 bg-transparent px-4 pb-3 pt-6 text-[var(--text)] outline-none transition focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(0,245,212,0.1)]"
                />
                <label htmlFor="contact-message" className="float-label">Message</label>
                {errors.message ? <p className="mt-2 text-xs text-[var(--amber)]">{errors.message.message}</p> : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--teal),var(--violet))] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute inset-y-0 left-[-100%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)] group-hover:animate-[sweep_0.9s_ease]" />
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully.
                </motion.div>
              ) : null}
            </form>
          </GlassCard>

          <GlassCard accent="violet" className="space-y-5">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Let's build something great</h3>
            <p className="text-sm leading-7 text-[var(--muted)]">If you need a Spring Boot engineer, an automation-first problem solver, or a portfolio that converts attention into interviews, let&apos;s talk.</p>

            {[
              {
                label: 'Email',
                value: 'amukeshpatel222@gmail.com',
                href: 'mailto:amukeshpatel222@gmail.com',
                Icon: Mail as ContactIcon,
                border: 'rgba(0,245,212,0.25)',
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/henasivenom',
                href: 'https://www.linkedin.com/in/henasivenom',
                Icon: Linkedin as ContactIcon,
                border: 'rgba(124,58,237,0.25)',
              },
              {
                label: 'GitHub',
                value: 'github.com/henasivenom',
                href: 'https://github.com/henasivenom',
                Icon: SiGithub as ContactIcon,
                border: 'rgba(249,115,22,0.25)',
              },
            ].map(({ label, value, href, Icon, border }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02]"
                style={{ boxShadow: `0 0 0 1px ${border}` }}
              >
                <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-4 transition hover:bg-white/[0.03]">
                  <motion.span whileHover={{ y: -4 }} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text)]">
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <span>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p>
                    <p className="text-sm text-[var(--text)]">{value}</p>
                  </span>
                </Link>
              </motion.div>
            ))}

            <div className="mt-6 flex w-fit items-center gap-2 rounded-full border border-[#22c55e] bg-[rgba(34,197,94,0.08)] px-4 py-2.5">
              <span className="pulse-green-dot" />
              <span className="text-sm text-[var(--text)]">Available for full-time roles</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
