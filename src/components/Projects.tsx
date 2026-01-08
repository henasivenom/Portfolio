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

const Projects = () => {
  return (
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: i * 0.2 }
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden h-full"
                whileHover={{
                  borderColor: 'rgb(236, 72, 153)',
                  y: -15,
                  boxShadow: '0 20px 40px -20px rgba(236, 72, 153, 0.4)',
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
  );
};

export default Projects;
