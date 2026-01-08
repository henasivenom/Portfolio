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

const Skills = () => {
  return (
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
            { num: '01', title: 'Backend Development', skills: ['Java', 'MySQL', 'MongoDB', 'JDBC'], icon: '⚙️' },
            { num: '02', title: 'Database Design', skills: ['Schema Design', 'Optimization', 'Query Performance'], icon: '🗄️' },
            { num: '03', title: 'Full Stack Solutions', skills: ['Swing GUI', 'Web Development', 'System Architecture'], icon: '🚀' },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={staggerItem}
            >
              <motion.div
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 p-8 rounded-2xl backdrop-blur-sm overflow-hidden h-full"
                whileHover={{ 
                  borderColor: 'rgb(168, 85, 247)', 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: '0 20px 40px -20px rgba(168, 85, 247, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {card.icon}
                </motion.div>
                
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
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
  );
};

export default Skills;
