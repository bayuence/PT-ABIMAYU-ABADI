'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <motion.a href="https://wa.me/6287825167150" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Contact via WhatsApp">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)]">
            <MessageCircle size={22} className="text-white" />
          </div>
        </div>
      </motion.a>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button onClick={scrollToTop} aria-label="Back to top"
            className="fixed bottom-40 sm:bottom-24 right-4 sm:right-6 w-11 h-11 rounded-xl theme-bg-card border theme-border flex items-center justify-center theme-accent hover:border-[var(--accent)] transition-all duration-300 z-50 shadow-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
