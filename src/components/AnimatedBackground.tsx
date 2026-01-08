import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useMemo } from 'react';

const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  // Floating particles - memoized to prevent re-creation
  const particles = useMemo(() => Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
  })), []);

  // Geometric shapes for visual interest
  const shapes = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
    type: ['square', 'circle', 'triangle'][Math.floor(Math.random() * 3)] as 'square' | 'circle' | 'triangle',
  })), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Interactive Mouse Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Secondary mouse glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-30%',
          translateY: '-30%',
        }}
      />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #1a1a3e 0%, #0a0e27 100%)',
            'radial-gradient(circle at 20% 80%, #2d1b69 0%, #0a0e27 100%)',
            'radial-gradient(circle at 80% 20%, #1a3a52 0%, #0a0e27 100%)',
            'radial-gradient(circle at 30% 30%, #1e2952 0%, #0a0e27 100%)',
            'radial-gradient(circle at 70% 70%, #2a1a50 0%, #0a0e27 100%)',
            'radial-gradient(circle at 50% 50%, #1a1a3e 0%, #0a0e27 100%)',
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute opacity-5"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.02, 0.08, 0.02],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          {shape.type === 'square' && (
            <div className="w-full h-full border border-purple-400/30 rounded-lg" />
          )}
          {shape.type === 'circle' && (
            <div className="w-full h-full border border-cyan-400/30 rounded-full" />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 border-transparent border-b-pink-400/20"
              style={{ 
                borderLeftWidth: shape.size/2, 
                borderRightWidth: shape.size/2, 
                borderBottomWidth: shape.size,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Animated Blobs with more variety */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, -50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pulsing center orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.id % 3 === 0 ? 'rgba(6, 182, 212, 0.4)' : 
                            particle.id % 3 === 1 ? 'rgba(168, 85, 247, 0.4)' : 
                            'rgba(236, 72, 153, 0.4)',
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.sin(particle.id) * 100, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Shooting stars effect */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: '10%',
            boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            x: [0, 200],
            y: [0, 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 4 + 2,
            repeatDelay: 8,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
