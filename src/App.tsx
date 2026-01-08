import { motion } from 'framer-motion';

// Animated Background Component with Creative Effects
const AnimatedBackground = () => {
  // Floating particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #0a0e27 0%, #1a1a3e 50%, #2d1b69 100%)',
            'linear-gradient(225deg, #0a0e27 0%, #1a1a3e 50%, #1a3a52 100%)',
            'linear-gradient(45deg, #0a0e27 0%, #2d2158 50%, #2d1b69 100%)',
            'linear-gradient(225deg, #0a0e27 0%, #1a1a3e 50%, #2d1b69 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
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
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Stagger container for animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Child animation variants
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1a3e] to-[#0f0f2e] text-white font-sans relative">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0e27]/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-3xl"
            >
              ⚡
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mukesh
            </span>
          </motion.div>
          
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {['Home', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hey, I'm Mukesh ✨
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Java Developer & Software Engineer building secure, scalable backend systems and intuitive interfaces.
          </motion.p>
        </motion.div>

        {/* Animated Status Pill */}
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-cyan-400/30 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium">Available for Work</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { label: 'View My Work', color: 'from-cyan-400 to-purple-400' },
            { label: 'Get in Touch', color: 'from-purple-400 to-pink-400' },
          ].map((btn, i) => (
            <motion.button
              key={i}
              className={`px-8 py-3 rounded-lg font-semibold bg-gradient-to-r ${btn.color} text-black relative overflow-hidden group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{btn.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 relative z-10" id="skills">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={staggerItem}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What I Can Do
            </span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { num: '01', title: 'Backend Development', skills: ['Java', 'MySQL', 'MongoDB', 'JDBC'] },
              { num: '02', title: 'Database Design', skills: ['Schema Design', 'Optimization', 'Query Performance'] },
              { num: '03', title: 'Full Stack Solutions', skills: ['Swing GUI', 'Web Development', 'System Architecture'] },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative"
                variants={staggerItem}
              >
                <motion.div
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 p-8 rounded-2xl backdrop-blur-sm overflow-hidden"
                  whileHover={{ borderColor: 'rgb(168, 85, 247)', scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:to-purple-400/10"
                    initial={false}
                  />
                  
                  <motion.div
                    className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {card.num}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{card.title}</h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {card.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-lg text-sm font-medium"
                        variants={staggerItem}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-8 relative z-10" id="projects">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={staggerItem}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: '🏧', title: 'ATM Simulator', tech: ['Java', 'Swing', 'MySQL'] },
              { icon: '✈️', title: 'Airline Management', tech: ['Java', 'JDBC', 'MySQL'] },
              { icon: '📝', title: 'Quiz Application', tech: ['Java', 'AWT', 'MySQL'] },
            ].map((proj, i) => (
              <motion.div
                key={i}
                className="group relative"
                variants={staggerItem}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden"
                  whileHover={{
                    borderColor: 'rgb(236, 72, 153)',
                    y: -15,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    className="text-6xl mb-4 relative z-10"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {proj.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{proj.title}</h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {proj.tech.map((t, j) => (
                      <motion.span
                        key={j}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-xs font-medium"
                        variants={staggerItem}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 relative z-10" id="contact">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden"
            variants={staggerItem}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-center relative z-10"
              variants={staggerItem}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bring Your Ideas to Life
              </span>
            </motion.h2>

            <motion.p
              className="text-center text-gray-300 mb-8 text-lg relative z-10"
              variants={staggerItem}
            >
              Let's collaborate and build something amazing together
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '📧', label: 'Email', link: 'mailto:amukeshpatel222@gmail.com' },
                { icon: '💼', label: 'LinkedIn', link: 'https://linkedin.com/in/henasivenom' },
                { icon: '🐙', label: 'GitHub', link: 'https://github.com/henasivenom' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 rounded-lg font-medium flex items-center gap-2 relative overflow-hidden group"
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(168, 85, 247, 0.3)',
                    borderColor: 'rgb(168, 85, 247)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="text-xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {social.icon}
                  </motion.span>
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/20 py-12 px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with <motion.span
              className="text-red-500 inline-block"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              ❤️
            </motion.span> in India
          </motion.p>
          <p className="text-gray-500 text-sm mt-4">© 2024 Mukesh Patel. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
