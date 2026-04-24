'use client'

import { motion } from 'framer-motion'

export default function ProfileAvatar() {
  return (
    <div className="avatar-wrapper" style={{ width: 220, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: 220, height: 220 }}>
        <div className="avatar-ring-outer" />
        <div className="avatar-ring-inner" />

        <motion.div whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }} className="avatar-photo">
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,245,212,0.12) 0%, rgba(124,58,237,0.2) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '1px solid rgba(0,245,212,0.15)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '3.2rem',
                fontWeight: 800,
                letterSpacing: '-2px',
                background: 'linear-gradient(135deg, #ffffff 0%, #00f5d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                filter: 'drop-shadow(0 0 12px rgba(0,245,212,0.6))',
              }}
            >
              MP
            </span>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#00f5d4',
                marginTop: 6,
                boxShadow: '0 0 8px #00f5d4, 0 0 16px rgba(0,245,212,0.5)',
                animation: 'pulseGreen 2s ease-in-out infinite',
              }}
            />
          </div>
        </motion.div>
      </div>

      <div
        style={{
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
          padding: '6px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(34,197,94,0.5)',
          background: 'rgba(34,197,94,0.08)',
          width: 'fit-content',
          fontSize: 12,
          color: '#e2e8f0',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px #22c55e',
            animation: 'pulseGreen 2s ease-in-out infinite',
            flexShrink: 0,
          }}
        />
        Open to work
      </div>
    </div>
  )
}
