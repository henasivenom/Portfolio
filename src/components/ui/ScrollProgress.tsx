'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.2,
  })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[110] h-[3px] w-full origin-left bg-[linear-gradient(90deg,var(--accent-teal),var(--accent-violet),var(--accent-amber))]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
