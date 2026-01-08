'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'

// Types for Three.js objects
interface ThreeScene {
  scene: THREE.Scene | null
  camera: THREE.PerspectiveCamera | null
  renderer: THREE.WebGLRenderer | null
  geometry: THREE.IcosahedronGeometry | null
  material: THREE.MeshBasicMaterial | null
  wireframeMaterial: THREE.MeshBasicMaterial | null
  mesh: THREE.Mesh | null
  wireframe: THREE.Mesh | null
}

// Import Three.js dynamically
let THREE: typeof import('three')

export default function ThreeDReality() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<ThreeScene>({
    scene: null,
    camera: null,
    renderer: null,
    geometry: null,
    material: null,
    wireframeMaterial: null,
    mesh: null,
    wireframe: null,
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    }
  }, [])

  useEffect(() => {
    const loadThree = async () => {
      try {
        THREE = await import('three')
        setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load Three.js:', error)
      }
    }
    loadThree()
  }, [])

  useEffect(() => {
    if (!isLoaded || !containerRef.current || !THREE) return

    const container = containerRef.current
    const width = window.innerWidth
    const height = window.innerHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Geometry - Icosahedron
    const geometry = new THREE.IcosahedronGeometry(2, 1)
    
    // Main mesh material
    const material = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Wireframe overlay
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial)
    scene.add(wireframe)

    // Store refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      geometry,
      material,
      wireframeMaterial,
      mesh,
      wireframe
    }

    // Mouse move handler
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      const { mesh, wireframe, renderer: r, scene: s, camera: c } = sceneRef.current
      
      if (mesh && wireframe && r && s && c) {
        // Rotation
        mesh.rotation.x += 0.002
        mesh.rotation.y += 0.003
        wireframe.rotation.x += 0.002
        wireframe.rotation.y += 0.003

        // Mouse influence
        const targetRotationX = mouseRef.current.y * 0.3
        const targetRotationY = mouseRef.current.x * 0.3
        
        mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.02
        mesh.rotation.y += (targetRotationY - mesh.rotation.y) * 0.02
        wireframe.rotation.x = mesh.rotation.x
        wireframe.rotation.y = mesh.rotation.y

        r.render(s, c)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      const { camera: c, renderer: r } = sceneRef.current
      if (c && r) {
        c.aspect = window.innerWidth / window.innerHeight
        c.updateProjectionMatrix()
        r.setSize(window.innerWidth, window.innerHeight)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      const { renderer: r, geometry: g, material: m, wireframeMaterial: wm, mesh: me, wireframe: w, scene: s } = sceneRef.current
      
      if (me && s) s.remove(me)
      if (w && s) s.remove(w)
      if (g) g.dispose()
      if (m) m.dispose()
      if (wm) wm.dispose()
      if (r) {
        r.dispose()
        if (r.domElement && container.contains(r.domElement)) {
          container.removeChild(r.domElement)
        }
      }
    }
  }, [isLoaded, handleMouseMove])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
