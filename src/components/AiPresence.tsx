'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const aiResponses: Record<string, string> = {
  'default': "Hi! 👋 I'm Mukesh's AI assistant. Ask me about skills, projects, resume, achievements, or availability 🚀",
  'skills': "Mukesh works with Java, Spring Boot, React, Next.js, TypeScript, and modern UI tooling like Tailwind + Framer Motion. He also uses Selenium, Playwright, Postman, and Git workflows ⚙️",
  'projects': "Featured builds include an ATM Banking System, Airline Reservation System, and interactive web apps with polished UI + performance tuning. Want project-wise tech stack details? ✨",
  'contact': "You can reach Mukesh at amukeshpatel222@gmail.com or via the contact section. He is open to internships, freelance projects, and full-time roles 🤝",
  'experience': "Mukesh focuses on reliable engineering + attractive product design: backend architecture, test automation, and smooth frontend delivery 💡",
  'hello': "Hello! Great to meet you! 👋 How can I help you learn more about Mukesh today?",
  'hire': "Mukesh is available for freelance and full-time opportunities. Share your project goals and timeline via email/contact, and he can quickly suggest a plan ✅",
  'resume': "You can download Mukesh's resume from the hero section. It highlights Java backend development, automation testing, cloud foundations, and modern frontend work 📄",
  'availability': "Current status: available for interviews and collaboration. Preferred roles include Java developer, full-stack intern, and automation-focused engineering roles 🟢",
  'achievements': "Highlights include AWS Cloud Foundations, strong DSA practice on LeetCode, and multiple end-to-end projects delivered with responsive UI and clean architecture 🏆",
  'services': "Mukesh can help with Java backend APIs, Spring Boot app architecture, automation test setup, responsive UI polishing, and end-to-end delivery support 🧩",
  'timeline': "Typical timelines: portfolio enhancements in days, feature modules in 1-2 weeks, and larger full-stack builds based on scope + review checkpoints 🗓️",
  'design': "Design style blends modern gradients, glassmorphism, bento sections, and subtle motion for premium visuals without heavy lag 🎨",
  'backend': "Backend strengths include Java, Spring Boot, JDBC/JPA, REST APIs, MySQL/MongoDB, and practical testing with JUnit/TestNG/Mockito ⚙️",
}

const quickPrompts = [
  'Show top skills ⚙️',
  'Best projects 🚀',
  'How to contact 📩',
  'Resume details 📄',
  'Services offered 🧩',
  'Design style 🎨',
]

function getAiResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
    return aiResponses['skills']
  }
  if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
    return aiResponses['projects']
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return aiResponses['contact']
  }
  if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('about')) {
    return aiResponses['experience']
  }
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return aiResponses['hello']
  }
  if (lowerMessage.includes('hire') || lowerMessage.includes('job') || lowerMessage.includes('work together')) {
    return aiResponses['hire']
  }
  if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
    return aiResponses['resume']
  }
  if (lowerMessage.includes('available') || lowerMessage.includes('availability')) {
    return aiResponses['availability']
  }
  if (lowerMessage.includes('achievement') || lowerMessage.includes('certification') || lowerMessage.includes('leetcode')) {
    return aiResponses['achievements']
  }
  if (lowerMessage.includes('service') || lowerMessage.includes('help') || lowerMessage.includes('offer')) {
    return aiResponses['services']
  }
  if (lowerMessage.includes('timeline') || lowerMessage.includes('deadline') || lowerMessage.includes('duration')) {
    return aiResponses['timeline']
  }
  if (lowerMessage.includes('design') || lowerMessage.includes('ui') || lowerMessage.includes('style')) {
    return aiResponses['design']
  }
  if (lowerMessage.includes('backend') || lowerMessage.includes('api') || lowerMessage.includes('spring')) {
    return aiResponses['backend']
  }
  
  return aiResponses['default']
}

export default function AiPresence() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: aiResponses['default'],
        sender: 'ai',
        timestamp: new Date()
      }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    // Keep auto-scroll scoped to the chat panel and avoid moving the document.
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAiResponse(input),
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    const userMessage: Message = {
      id: messages.length + 1,
      text: prompt,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAiResponse(prompt),
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setInput('')
      setIsTyping(false)
    }, 700)
  }

  const handleResetChat = () => {
    setMessages([
      {
        id: 1,
        text: aiResponses['default'],
        sender: 'ai',
        timestamp: new Date(),
      },
    ])
    setInput('')
    setIsTyping(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/35 ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse effect */}
        <motion.span
          className="absolute inset-0 rounded-full bg-violet-500"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="gradient-outline fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100vh-80px)] glass rounded-3xl shadow-2xl shadow-slate-950/65 flex flex-col overflow-hidden border border-fuchsia-400/20"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-violet-950/40">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 flex items-center gap-1">
                    Ask Mukesh AI ✨
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                  </h3>
                  <p className="text-xs text-slate-400">Smart portfolio assistant • instant answers • 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleResetChat}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 transition-colors"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  title="Reset chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="px-4 py-3 border-b border-slate-700/40 bg-slate-900/45">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-300/30"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.sender === 'ai' 
                      ? 'bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500' 
                      : 'bg-slate-700'
                  }`}>
                    {message.sender === 'ai' 
                      ? <Bot className="w-4 h-4 text-white" />
                      : <User className="w-4 h-4 text-slate-300" />
                    }
                  </div>
                  <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-6 ${
                    message.sender === 'ai'
                      ? 'bg-slate-800/85 text-slate-200 rounded-tl-md border border-white/10'
                      : 'bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white rounded-tr-md'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800/80 px-4 py-3 rounded-2xl rounded-tl-md">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-slate-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about skills, projects, resume, contact..."
                  className="flex-1 px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">
                Try quick prompts above for faster answers ⚡
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
