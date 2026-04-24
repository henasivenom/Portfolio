'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        scaleX,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, var(--teal), var(--violet), var(--amber))',
        zIndex: 9999,
        boxShadow: '0 0 8px var(--teal)',
      }}
    />
  )
}
