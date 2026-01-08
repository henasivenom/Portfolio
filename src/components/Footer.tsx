import { motion } from 'framer-motion';

const Footer = () => {
  return (
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
  );
};

export default Footer;
