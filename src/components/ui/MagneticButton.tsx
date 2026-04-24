'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  className?: string
}

export default function MagneticButton({ className, children, onMouseMove, onMouseLeave, ...props }: Readonly<MagneticButtonProps>) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * 0.3
    const y = (event.clientY - rect.top - rect.height / 2) * 0.3

    element.style.transform = `translate(${x}px, ${y}px)`
    onMouseMove?.(event)
  }

  const handleLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current
    if (!element) return

    element.style.transform = 'translate(0px, 0px)'
    onMouseLeave?.(event)
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        'magnetic transition-transform duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]',
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
