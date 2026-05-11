'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Klien', href: '#clients' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--nav-bg)] backdrop-blur-xl shadow-[0_1px_0_var(--nav-shadow)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-[var(--accent)] to-[#2B5BA8] flex items-center justify-center text-white font-bold text-sm rounded-lg overflow-hidden">
                <span className="relative z-10">AA</span>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-bright)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                {/* Judul PT - Memaksa Putih jika di paling atas, mengikuti theme jika sudah scroll */}
                <p className={`text-[13px] font-bold leading-tight tracking-wide transition-colors duration-300 ${isScrolled ? 'theme-text-heading' : 'theme-text-heading'}`}>
                  PT. ABIMANYU ABADI
                </p>
                <p className="text-[10px] font-medium theme-gold tracking-[0.15em]">
                  General Contractor & Supplier
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 group ${
                    isScrolled
                      ? 'theme-text-body hover:theme-text-heading'
                      : 'theme-text-body hover:theme-text-heading'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Solid Corporate Button - Sharp & Bold */}
              <a
                href="#contact"
                className={`px-7 py-3 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[var(--accent)] text-white hover:bg-blue-700'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Right */}
            <div className="flex lg:hidden items-center gap-5">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors ${
                  isScrolled
                    ? 'theme-text-heading'
                    : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="mx-4 theme-bg-card backdrop-blur-xl border theme-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 theme-text-body hover:theme-text-heading hover:bg-[var(--bg-card-hover)] rounded-xl text-sm font-medium transition-all duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-2 px-4">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 text-center bg-gradient-to-r from-[var(--accent)] to-[#2B5BA8] text-white rounded-xl font-semibold text-sm"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
