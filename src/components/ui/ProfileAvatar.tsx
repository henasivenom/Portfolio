'use client'

import { motion } from 'framer-motion'

export default function ProfileAvatar() {
  return (
    <div className="avatar-wrapper" style={{ position: 'relative', width: 200, height: 200, margin: '0 auto' }}>
      <div className="avatar-ring-outer" />
      <div className="avatar-ring-inner" />

      <motion.div whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }} className="avatar-photo">
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,245,212,0.15), rgba(124,58,237,0.25))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-syne)',
            fontSize: '4rem',
            fontWeight: 800,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            border: '1px solid rgba(0,245,212,0.2)',
          }}
        >
          MP
        </div>
      </motion.div>

      <div
        style={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          background: 'rgba(5,8,22,0.9)',
          border: '1px solid #22c55e',
          borderRadius: '999px',
          padding: '4px 10px',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#e2e8f0',
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#22c55e',
            animation: 'pulseGreen 2s ease-in-out infinite',
            display: 'inline-block',
          }}
          aria-hidden="true"
        />
        <span>Open to work</span>
      </div>
    </div>
  )
}
