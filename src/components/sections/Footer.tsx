'use client'

import type React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/henasi_venom',
    color: '#e2e8f0',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mukesh-patel',
    color: '#0a66c2',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:mukesh@email.com',
    color: '#00f5d4',
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        padding: '48px 0 24px',
        marginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="footer-fg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5d4" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <polygon points="21,3 36,12 36,30 21,39 6,30 6,12" fill="none" stroke="url(#footer-fg)" strokeWidth="1.5" />
                <text x="21" y="26" textAnchor="middle" fill="url(#footer-fg)" fontSize="16" fontWeight="700" fontFamily="sans-serif">M</text>
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: '0.1em',
                    color: '#e2e8f0',
                  }}
                >
                  MUKESH
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.35em',
                    color: '#00f5d4',
                  }}
                >
                  PATEL
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                color: '#64748b',
                lineHeight: 1.7,
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Building fast, stable, recruiter-friendly products with Spring Boot, Selenium, and modern frontend tech.
            </p>

            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
                    event.currentTarget.style.borderColor = color
                    event.currentTarget.style.color = color
                    event.currentTarget.style.boxShadow = `0 0 10px ${color}44`
                  }}
                  onMouseLeave={(event: React.MouseEvent<HTMLAnchorElement>) => {
                    event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    event.currentTarget.style.color = '#94a3b8'
                    event.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                color: '#00f5d4',
                fontFamily: 'var(--font-mono)',
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5, color: '#00f5d4' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    fontSize: 13,
                    color: '#64748b',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-dm-sans)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'color 0.2s',
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'currentColor',
                      opacity: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12,
              padding: '20px 24px',
              minWidth: 220,
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                color: '#7c3aed',
                fontFamily: 'var(--font-mono)',
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              CURRENT STATUS
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'block',
                  boxShadow: '0 0 8px #22c55e',
                  animation: 'pulseGreen 2s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, color: '#e2e8f0', fontFamily: 'var(--font-dm-sans)' }}>Open to full-time roles</span>
            </div>

            <div style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>📍 India · Remote OK</div>
            <div style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>🎓 2025 Graduate</div>

            <Link
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 999,
                background: 'linear-gradient(135deg, rgba(0,245,212,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(0,245,212,0.3)',
                color: '#00f5d4',
                fontSize: 12,
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,245,212,0.25), rgba(124,58,237,0.25))'
                event.currentTarget.style.boxShadow = '0 0 16px rgba(0,245,212,0.2)'
              }}
              onMouseLeave={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,245,212,0.15), rgba(124,58,237,0.15))'
                event.currentTarget.style.boxShadow = 'none'
              }}
            >
              <ExternalLink size={12} />
              Get in touch
            </Link>
          </div>
        </div>

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(0,245,212,0.3), rgba(124,58,237,0.3), transparent)',
            marginBottom: '24px',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              color: '#475569',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
              style={{
                display: 'inline-block',
                fontSize: 14,
                filter: 'drop-shadow(0 0 4px rgba(239,68,68,0.6))',
              }}
            >
              ❤️
            </motion.span>
            by{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00f5d4, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              Mukesh Patel
            </span>
          </motion.div>

          <div
            style={{
              fontSize: 12,
              color: '#334155',
              fontFamily: 'var(--font-mono)',
              textAlign: 'center',
            }}
          >
            <span suppressHydrationWarning>
              © {new Date().getFullYear()}
            </span>{' '}
            Mukesh Patel. All rights reserved.
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 14px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent',
              cursor: 'pointer',
              color: '#64748b',
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.currentTarget.style.borderColor = '#00f5d4'
              event.currentTarget.style.color = '#00f5d4'
            }}
            onMouseLeave={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              event.currentTarget.style.color = '#64748b'
            }}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>

        <div
          style={{
            marginTop: 16,
            textAlign: 'center',
            fontSize: 11,
            color: '#1e293b',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
          }}
        >
          Built with Next.js 14 · Framer Motion · Tailwind CSS · TypeScript
        </div>
      </div>
    </footer>
  )
}
