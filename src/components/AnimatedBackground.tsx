import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

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

  // Floating particles
  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
  }));

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

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #1a1a3e 0%, #0a0e27 100%)',
            'radial-gradient(circle at 20% 80%, #2d1b69 0%, #0a0e27 100%)',
            'radial-gradient(circle at 80% 20%, #1a3a52 0%, #0a0e27 100%)',
            'radial-gradient(circle at 50% 50%, #1a1a3e 0%, #0a0e27 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Animated Blob 1 */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated Blob 2 */}
      <motion.div
        className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated Blob 3 */}
      <motion.div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
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
    </div>
  );
};

export default AnimatedBackground;
