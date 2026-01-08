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

const Contact = () => {
  return (
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
          whileHover={{ boxShadow: '0 0 50px -10px rgba(168, 85, 247, 0.3)' }}
        >
          {/* Animated background shapes for contact card */}
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

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
  );
};

export default Contact;
