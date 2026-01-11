'use client'

import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

export default function LivingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const createParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    // Reduce particles on mobile
    const isMobile = width < 768
    const baseCount = isMobile ? 30 : 80
    const count = Math.min(baseCount, Math.floor((width * height) / 15000))
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 180 // Cyan to purple range
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createParticles(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          const force = (150 - dist) / 150
          particle.vx -= (dx / dist) * force * 0.02
          particle.vy -= (dy / dist) * force * 0.02
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check with wrap
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.6})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `hsla(${(particle.hue + other.hue) / 2}, 60%, 50%, ${0.08 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createParticles])

  // Floating orbs with memoization
  const orbs = useMemo(() => [
    { color: 'from-primary-500/15 to-cyan-500/15', size: 'w-[600px] h-[600px]', position: '-top-48 -left-48', delay: 0 },
    { color: 'from-purple-500/15 to-pink-500/15', size: 'w-[500px] h-[500px]', position: '-bottom-32 -right-32', delay: 2 },
    { color: 'from-emerald-500/10 to-primary-500/10', size: 'w-[400px] h-[400px]', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', delay: 4 },
  ], [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Aurora gradient overlay - Reduced on mobile */}
      <motion.div
        className="absolute inset-0 opacity-30 hidden md:block"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%), radial-gradient(ellipse at 20% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 40%)'
        }}
        animate={{
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating orbs - Desktop only */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.position} ${orb.size} rounded-full bg-gradient-radial ${orb.color} blur-3xl hidden md:block`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/80" />
    </div>
  )
}
