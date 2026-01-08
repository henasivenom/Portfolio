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

const DigitalExperience = () => {
  return (
    <section className="py-20 px-8 relative z-10">
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
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Building Digital Experience
          </span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { 
              icon: '💻', 
              title: 'Frontend Excellence', 
              description: 'Creating responsive, intuitive user interfaces with modern frameworks and smooth animations',
              gradient: 'from-cyan-500/10 to-blue-500/10',
              border: 'border-cyan-400/30'
            },
            { 
              icon: '🔐', 
              title: 'Secure Backend', 
              description: 'Building robust backend systems with secure authentication, database optimization, and scalable architecture',
              gradient: 'from-blue-500/10 to-purple-500/10',
              border: 'border-blue-400/30'
            },
            { 
              icon: '⚡', 
              title: 'Performance Optimization', 
              description: 'Ensuring fast load times, smooth interactions, and efficient resource usage across all devices',
              gradient: 'from-purple-500/10 to-pink-500/10',
              border: 'border-purple-400/30'
            },
            { 
              icon: '🎨', 
              title: 'Modern Design', 
              description: 'Implementing beautiful, contemporary designs that engage users and enhance brand experience',
              gradient: 'from-pink-500/10 to-cyan-500/10',
              border: 'border-pink-400/30'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: i * 0.15 }
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} ${item.border} p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden h-full`}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 20px 40px -20px rgba(168, 85, 247, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.div
                  className="text-5xl mb-6 relative z-10"
                  animate={{
                    rotate: [0, -5, 5, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                
                <p className="text-gray-300 relative z-10 leading-relaxed">{item.description}</p>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DigitalExperience;
