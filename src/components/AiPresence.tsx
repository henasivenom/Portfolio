'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const aiResponses: Record<string, string> = {
  'default': "Hi! I'm Mukesh's AI assistant. I can tell you about his skills, projects, or how to get in touch. What would you like to know?",
  'skills': "Mukesh specializes in React, Next.js, TypeScript, and Node.js. He's also experienced with Python, Java, and cloud technologies like AWS. Want to know more about a specific technology?",
  'projects': "Mukesh has built several exciting projects including an ATM Banking System, an Airline Reservation System, and an interactive Quiz Application. Each showcases his full-stack development skills!",
  'contact': "You can reach Mukesh at mukesh@example.com or through the contact form above. He's currently open to new opportunities and collaborations!",
  'experience': "Mukesh is a passionate software developer focused on creating elegant, performant applications. He believes in clean code, continuous learning, and user-centric design.",
  'hello': "Hello! Great to meet you! 👋 How can I help you learn more about Mukesh today?",
  'hire': "Mukesh is available for freelance projects and full-time opportunities! You can reach out through the contact form or email at mukesh@example.com. He'd love to hear about your project!",
}

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
  
  return aiResponses['default']
}

export default function AiPresence() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/25 ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse effect */}
        <motion.span
          className="absolute inset-0 rounded-full bg-primary-500"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] glass rounded-2xl shadow-2xl shadow-slate-950/50 flex flex-col overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 flex items-center gap-1">
                    Ask Mukesh
                    <Sparkles className="w-4 h-4 text-primary-400" />
                  </h3>
                  <p className="text-xs text-slate-400">AI-powered assistant</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                      ? 'bg-gradient-to-br from-primary-500 to-purple-500' 
                      : 'bg-slate-700'
                  }`}>
                    {message.sender === 'ai' 
                      ? <Bot className="w-4 h-4 text-white" />
                      : <User className="w-4 h-4 text-slate-300" />
                    }
                  </div>
                  <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    message.sender === 'ai'
                      ? 'bg-slate-800/80 text-slate-200 rounded-tl-md'
                      : 'bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-tr-md'
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
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">
                Try asking about skills, projects, or contact info
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
