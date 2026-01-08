'use client'

import { useEffect, useCallback, useRef } from 'react'

export function useEasterEggs() {
  const konamiSequence = useRef<string[]>([])
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  const triggerConfetti = useCallback(() => {
    // Create confetti particles
    const colors = ['#0ea5e9', '#a855f7', '#ec4899', '#22d3ee', '#10b981']
    
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div')
      particle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        pointer-events: none;
        z-index: 9999;
        animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
      `
      document.body.appendChild(particle)
      
      setTimeout(() => particle.remove(), 4000)
    }

    // Add confetti animation styles
    const style = document.createElement('style')
    style.textContent = `
      @keyframes confettiFall {
        to {
          transform: translateY(100vh) rotate(${Math.random() * 720}deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    setTimeout(() => style.remove(), 5000)
  }, [])

  const handleKonamiCode = useCallback((e: KeyboardEvent) => {
    konamiSequence.current.push(e.code)
    konamiSequence.current = konamiSequence.current.slice(-10)
    
    if (konamiSequence.current.join(',') === konamiCode.join(',')) {
      triggerConfetti()
      
      // Show secret message
      const message = document.createElement('div')
      message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0ea5e9, #a855f7);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: popIn 0.5s ease-out;
      `
      message.textContent = '🎮 Konami Code Activated! 🎉'
      document.body.appendChild(message)
      
      setTimeout(() => {
        message.style.animation = 'popOut 0.3s ease-in forwards'
        setTimeout(() => message.remove(), 300)
      }, 3000)

      // Add pop animations
      const popStyle = document.createElement('style')
      popStyle.textContent = `
        @keyframes popIn {
          from { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes popOut {
          to { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
      `
      document.head.appendChild(popStyle)
      setTimeout(() => popStyle.remove(), 5000)

      konamiSequence.current = []
    }
  }, [triggerConfetti, konamiCode])

  // Secret click pattern on logo
  const logoClickCount = useRef(0)
  const logoClickTimer = useRef<NodeJS.Timeout>()

  const handleLogoClick = useCallback(() => {
    logoClickCount.current++
    
    if (logoClickTimer.current) {
      clearTimeout(logoClickTimer.current)
    }
    
    if (logoClickCount.current >= 7) {
      // Matrix rain effect
      const canvas = document.createElement('canvas')
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9998;
        pointer-events: none;
      `
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      document.body.appendChild(canvas)
      
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const chars = 'MUKESH01'.split('')
        const fontSize = 14
        const columns = canvas.width / fontSize
        const drops: number[] = Array(Math.floor(columns)).fill(1)
        
        const draw = () => {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = '#0ea5e9'
          ctx.font = `${fontSize}px monospace`
          
          for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)]
            ctx.fillText(text, i * fontSize, drops[i] * fontSize)
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0
            }
            drops[i]++
          }
        }
        
        const interval = setInterval(draw, 33)
        setTimeout(() => {
          clearInterval(interval)
          canvas.style.transition = 'opacity 1s'
          canvas.style.opacity = '0'
          setTimeout(() => canvas.remove(), 1000)
        }, 5000)
      }
      
      logoClickCount.current = 0
    }
    
    logoClickTimer.current = setTimeout(() => {
      logoClickCount.current = 0
    }, 2000)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKonamiCode)
    
    return () => {
      window.removeEventListener('keydown', handleKonamiCode)
      if (logoClickTimer.current) {
        clearTimeout(logoClickTimer.current)
      }
    }
  }, [handleKonamiCode])

  return { handleLogoClick, triggerConfetti }
}
