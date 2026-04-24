'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="logo-shell relative"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <polygon
            points="21,3 36,12 36,30 21,39 6,30 6,12"
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="logo-hex-outer"
          />

          <polygon
            points="21,8 31,14 31,28 21,34 11,28 11,14"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="0.6"
            opacity="0.35"
          />

          <circle cx="21" cy="3" r="1.5" fill="#00f5d4" opacity="0.9" />
          <circle cx="36" cy="12" r="1.2" fill="#7c3aed" opacity="0.7" />
          <circle cx="36" cy="30" r="1.2" fill="#7c3aed" opacity="0.7" />
          <circle cx="21" cy="39" r="1.5" fill="#00f5d4" opacity="0.9" />
          <circle cx="6" cy="30" r="1.2" fill="#7c3aed" opacity="0.7" />
          <circle cx="6" cy="12" r="1.2" fill="#7c3aed" opacity="0.7" />

          <text
            x="21"
            y="26.5"
            textAnchor="middle"
            fill="url(#textGrad)"
            fontSize="18"
            fontWeight="700"
            fontFamily="Syne, sans-serif"
            filter="url(#glow)"
          >
            M
          </text>
        </svg>

        <div className="logo-pulse-ring" />
      </motion.div>

      <div className="hidden md:flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.12em] text-slate-100" style={{ fontFamily: 'Syne, sans-serif' }}>
          MUKESH
        </span>
        <span
          className="text-[10px] tracking-[0.35em] font-normal"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'linear-gradient(90deg, #00f5d4, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PATEL
        </span>
      </div>
    </Link>
  )
}