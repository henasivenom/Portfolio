'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Logo from '@/components/ui/Logo'

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Skills', href: 'skills' },
  { label: 'Metrics', href: 'metrics' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.25 },
  }),
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const currentTheme = useMemo(() => (resolvedTheme === 'light' ? 'light' : 'dark'), [resolvedTheme])

  useEffect(() => {
    setMounted(true)

    const sections = navItems
      .map((item) => document.getElementById(item.href))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: '-20% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[100] px-4 sm:top-6 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/15 bg-[rgba(5,8,22,0.72)] px-3 py-2 shadow-[0_18px_60px_rgba(2,6,23,0.65)] backdrop-blur-xl"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <li key={item.href} className="relative">
                <button
                  onClick={() => scrollTo(item.href)}
                  className="relative rounded-full px-4 py-2 text-sm text-text-secondary transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-[var(--accent-teal)]"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
            aria-label="Toggle theme"
          >
            {mounted && currentTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="group hidden rounded-full border border-transparent bg-[linear-gradient(var(--bg-primary),var(--bg-primary))_padding-box,conic-gradient(from_0deg,var(--accent-teal),var(--accent-violet),var(--accent-teal))_border-box] px-4 py-2 text-sm font-semibold text-text-primary transition hover:shadow-[0_0_25px_rgba(0,245,212,0.35)] md:block"
          >
            Hire Me ✦
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)] md:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="pointer-events-auto mx-auto mt-3 max-w-5xl rounded-3xl border border-white/10 bg-[rgba(5,8,22,0.94)] p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="w-full rounded-2xl border border-transparent px-4 py-3 text-left text-text-secondary transition hover:border-white/10 hover:bg-white/5 hover:text-text-primary"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollTo('contact')
                  }}
                  className="mt-1 block rounded-2xl bg-[linear-gradient(135deg,var(--accent-violet),var(--accent-teal))] px-4 py-3 text-center font-semibold text-white"
                >
                  Hire Me ✦
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
