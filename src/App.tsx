import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1a1a1a] font-sans">
      {/* Hero Section */}
      <section className="p-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Hi, I'm Mukesh Patel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-80">
            Java Developer & Software Engineer building secure, end-to-end applications.
          </p>
        </motion.div>
        {/* Available for Work Pill */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium">Available for Work</span>
        </motion.div>
      </section>

      {/* Bento Grid Container */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-4 gap-6">
          {/* Mission Statement - Full Width */}
          <motion.div
            className="col-span-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-12 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">My Mission</h2>
            <p className="text-2xl leading-relaxed">
              To build scalable, secure backend systems and intuitive user interfaces for modern enterprises using Java technologies.
            </p>
          </motion.div>

          {/* Services Cards */}
          <motion.div
            className="bg-white border border-blue-50/50 p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">01 Java Development</h3>
            <p>Swing, AWT, JDBC</p>
          </motion.div>
          <motion.div
            className="bg-white border border-green-50/50 p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">02 Database Design</h3>
            <p>MySQL, MongoDB</p>
          </motion.div>
          <motion.div
            className="bg-white border border-purple-50/50 p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">03 Manual Testing & QA</h3>
            <p>JIRA, Test Case Design</p>
          </motion.div>
          <motion.div
            className="bg-white border border-orange-50/50 p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">04 Cloud Solutions</h3>
            <p>AWS Foundations</p>
          </motion.div>
        </div>

        {/* Work Gallery */}
        <motion.h2
          className="text-4xl font-bold text-center my-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Work
        </motion.h2>
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="group bg-white p-8 rounded-[40px] shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img src="/placeholder-atm.jpg" alt="ATM Simulator" className="w-full h-64 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-4">ATM Simulator</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Java</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Swing</span>
            </div>
          </motion.div>
          <motion.div
            className="group bg-white p-8 rounded-[40px] shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/placeholder-airline.jpg" alt="Airline Management System" className="w-full h-64 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-4">Airline Management System</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Java</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Swing</span>
            </div>
          </motion.div>
          <motion.div
            className="group bg-white p-8 rounded-[40px] shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="/placeholder-quiz.jpg" alt="Quiz Application" className="w-full h-64 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-4">Quiz Application</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Java</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Swing</span>
            </div>
          </motion.div>
          {/* Empty space for grid balance */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm opacity-0"></div>
        </div>

        {/* Experience Section */}
        <motion.h2
          className="text-4xl font-bold text-center my-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="bg-white p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">G</div>
              <div>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-gray-600">Google</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">2022 - Present</p>
            <p>Developed scalable Java applications using Spring Boot and microservices architecture.</p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-[40px] shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-xl font-bold">A</div>
              <div>
                <h3 className="text-xl font-bold">Java Developer</h3>
                <p className="text-gray-600">Airbnb</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">2020 - 2022</p>
            <p>Built backend systems for booking platform using Java, SQL, and AWS services.</p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-12 bg-black text-white p-12 rounded-[40px] shadow-sm text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8">amukeshpatel222@gmail.com</p>
          <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition">
            Book a Call
          </button>
          <div className="flex justify-center gap-8 mt-8">
            <a href="https://github.com/henasivenom" className="text-teal-400 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" className="text-teal-400 hover:underline">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
