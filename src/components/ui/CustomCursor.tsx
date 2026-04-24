'use client'

import { motion, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [hidden, setHidden] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [target, setTarget] = useState({ x: 0, y: 0 })

  const ringX = useSpring(0, { stiffness: 400, damping: 35, mass: 0.6 })
  const ringY = useSpring(0, { stiffness: 400, damping: 35, mass: 0.6 })

  useEffect(() => {
    if (reduceMotion) return

    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (coarse) return

    const move = (event: MouseEvent) => {
      setTarget({ x: event.clientX, y: event.clientY })
      ringX.set(event.clientX)
      ringY.set(event.clientY)
      setHidden(false)
    }

    const detectHover = (event: MouseEvent) => {
      const element = event.target as HTMLElement | null
      const interactive = element?.closest('a, button, input, textarea, [role="button"], [data-magnetic]')
      setHovering(Boolean(interactive))
    }

    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', detectHover)
    window.addEventListener('mouseout', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', detectHover)
      window.removeEventListener('mouseout', leave)
    }
  }, [ringX, ringY, reduceMotion])

  if (reduceMotion) return null

  return (
    <>
      <motion.span
        aria-hidden
        className="pointer-events-none fixed z-[120] h-1 w-1 rounded-full bg-[var(--accent-teal)]"
        animate={{
          x: target.x - 2,
          y: target.y - 2,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: 'tween', duration: 0.05 }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none fixed z-[119] rounded-full border border-[var(--accent-teal)]"
        style={{
          x: ringX,
          y: ringY,
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          marginLeft: hovering ? -26 : -16,
          marginTop: hovering ? -26 : -16,
          mixBlendMode: hovering ? 'difference' : 'normal',
          opacity: hidden ? 0 : 0.9,
        }}
      />
    </>
  )
}
