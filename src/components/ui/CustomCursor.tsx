'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const isMobile = typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20 })
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  const handleHoverEnter = useCallback(() => {
    setHovered(true)
  }, [])

  const handleHoverLeave = useCallback(() => {
    setHovered(false)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    const handleEnter = () => setHidden(false)
    const handleLeave = () => setHidden(true)

    const elements = globalThis.document.querySelectorAll('a,button,[data-cursor="pointer"]')
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleHoverEnter)
      element.addEventListener('mouseleave', handleHoverLeave)
    })

    globalThis.addEventListener('mousemove', handleMove)
    globalThis.document.addEventListener('mouseenter', handleEnter)
    globalThis.document.addEventListener('mouseleave', handleLeave)

    const observer = new MutationObserver(() => {
      globalThis.document.querySelectorAll('a,button,[data-cursor="pointer"]').forEach((element) => {
        element.addEventListener('mouseenter', handleHoverEnter)
        element.addEventListener('mouseleave', handleHoverLeave)
      })
    })
    observer.observe(globalThis.document.body, { childList: true, subtree: true })

    return () => {
      globalThis.removeEventListener('mousemove', handleMove)
      globalThis.document.removeEventListener('mouseenter', handleEnter)
      globalThis.document.removeEventListener('mouseleave', handleLeave)
      observer.disconnect()
    }
  }, [cursorX, cursorY, handleHoverEnter, handleHoverLeave, isMobile])

  if (isMobile) {
    return null
  }

  let ringOpacity = 0.5
  if (hidden) {
    ringOpacity = 0
  } else if (hovered) {
    ringOpacity = 0.9
  }

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 6 : 4,
          height: hovered ? 6 : 4,
          borderRadius: '50%',
          background: hovered ? 'var(--violet)' : 'var(--teal)',
          opacity: hidden ? 0 : 1,
          transition: 'width 0.2s, height 0.2s, background 0.2s',
        }}
      />

      <motion.div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99998,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'var(--violet)' : 'var(--teal)'}`,
          opacity: ringOpacity,
          mixBlendMode: hovered ? 'difference' : 'normal',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s',
        }}
      />
    </>
  )
}
