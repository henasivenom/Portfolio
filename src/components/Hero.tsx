import { motion } from 'framer-motion';

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

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <section className="pt-48 pb-20 px-8 text-center relative z-10" id="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={staggerItem}
          className="mb-6 inline-block"
        >
          <motion.span 
            className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          variants={staggerItem}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hey, I'm Mukesh ✨
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-400"
          variants={staggerItem}
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
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[
          { label: 'View My Work', color: 'from-cyan-400 to-purple-400', link: '#projects' },
          { label: 'Get in Touch', color: 'from-purple-400 to-pink-400', link: '#contact' },
        ].map((btn, i) => (
          <motion.a
            key={i}
            href={btn.link}
            className={`px-8 py-3 rounded-lg font-semibold bg-gradient-to-r ${btn.color} text-black relative overflow-hidden group block`}
            variants={staggerItem}
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
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
