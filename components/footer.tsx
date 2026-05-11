'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const footerSections = [
  { title: 'Perusahaan', links: [
    { label: 'Tentang Kami', href: '#about' },{ label: 'Portofolio', href: '#portfolio' },{ label: 'Klien', href: '#clients' },{ label: 'Karir', href: '#' },
  ]},
  { title: 'Layanan', links: [
    { label: 'General Kontraktor', href: '#services' },{ label: 'Supplier Material', href: '#services' },{ label: 'Konsultan Design', href: '#services' },{ label: 'Project Management', href: '#services' },
  ]},
  { title: 'Kontak', links: [
    { label: '021-22708806', href: 'tel:+62212270880' },{ label: 'ops.abimanyu@gmail.com', href: 'mailto:ops.abimanyu@gmail.com' },{ label: 'Jakarta, Indonesia', href: '#contact' },
  ]},
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative w-full theme-bg-primary border-t border-[var(--divider)] px-4">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-5">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-[#2B5BA8] flex items-center justify-center text-white font-bold rounded-lg text-xs">AA</div>
              <div>
                <p className="font-bold text-sm tracking-wide theme-text-heading">PT. ABIMANYU</p>
                <p className="theme-gold text-[10px] tracking-[0.12em]">General Contractor</p>
              </div>
            </a>
            <p className="theme-text-muted text-sm leading-relaxed">
              Membangun dengan Integritas — kontraktor umum dan supplier terpercaya untuk kebutuhan konstruksi korporat Indonesia.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a key={i} href={social.href} aria-label={social.label}
                    className="w-9 h-9 rounded-lg theme-bg-card border theme-border flex items-center justify-center theme-text-muted hover:theme-accent hover:border-[var(--accent)] transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    <Icon size={15} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {footerSections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: (i + 1) * 0.1 }} viewport={{ once: true }} className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-[0.15em] theme-text-body">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <motion.li key={j} whileHover={{ x: 5 }}>
                    <a href={link.href} className="theme-text-muted text-sm hover:theme-text-heading transition-colors duration-300 inline-block">{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-[var(--divider)] mb-8" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="theme-text-muted text-xs text-center md:text-left">© 2025 PT. Abimanyu Abadi. All rights reserved.</p>
          <p className="theme-text-muted text-xs">
            General Contractor & Supplier · Jakarta, Indonesia · <a href="https://abimanyu.id" className="theme-accent hover:underline">abimanyu.id</a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
