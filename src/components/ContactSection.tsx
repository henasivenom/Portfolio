'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Sparkles, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setFormState({ name: '', email: '', message: '' })
    
    setTimeout(() => setStatus('idle'), 3000)
  }

  const inputClasses = "w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-mono text-sm tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              LET&apos;S CONNECT
            </span>
            <h2 className="section-title mt-4">
              <span className="text-slate-100">Get In </span>
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 mt-6 leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
              Let&apos;s create something amazing together.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-10 space-y-4">
              <motion.a
                href="mailto:mukesh@example.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary-500/50 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email me at</p>
                  <p className="text-slate-200 group-hover:text-primary-400 transition-colors">mukesh@example.com</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 glass rounded-xl"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Based in</p>
                  <p className="text-slate-200">India 🇮🇳</p>
                </div>
              </motion.div>
            </div>

            {/* Availability Badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-slate-300">Available for new opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className={inputClasses}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className={inputClasses}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className={`${inputClasses} resize-none`}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-70 transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
