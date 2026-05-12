'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { fetchServices, Service } from '@/lib/fetchServices'
import { fetchContactInfo, ContactInfo } from '@/lib/fetchContactInfo'
import { fetchFooter, FooterData } from '@/lib/fetchFooter'

const SOCIAL_ICONS: Record<string, any> = {
  Facebook, Instagram, LinkedIn: Linkedin, Twitter, YouTube: Youtube, TikTok: ExternalLink, WhatsApp: MessageCircle, Email: Mail
}

export default function Footer() {
  const [services, setServices] = useState<Service[]>([])
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [footerData, setFooterData] = useState<FooterData | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const [servicesData, contactData, footerSettings] = await Promise.all([
        fetchServices(),
        fetchContactInfo(),
        fetchFooter()
      ])
      setServices(servicesData)
      setContactInfo(contactData)
      setFooterData(footerSettings)
    }
    loadData()
  }, [])

  const footerSections = [
    { 
      title: 'Perusahaan', 
      links: footerData?.quickLinks || [
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Portofolio', href: '#portfolio' },
        { label: 'Klien', href: '#clients' },
        { label: 'Karir', href: '#' },
      ]
    },
    { 
      title: 'Layanan', 
      links: services.map(s => ({
        label: s.title,
        href: '#services'
      })).slice(0, 4) 
    },
    { 
      title: 'Kontak', 
      links: [
        { 
          label: contactInfo?.phones?.[0] || '021-22708806', 
          href: `tel:${(contactInfo?.phones?.[0] || '021-22708806').replace(/\D/g, '')}` 
        },
        { 
          label: contactInfo?.emails?.[0] || 'ops.abimanyu@gmail.com', 
          href: `mailto:${contactInfo?.emails?.[0] || 'ops.abimanyu@gmail.com'}` 
        },
        { 
          label: contactInfo?.address?.split('\n')[0] || 'Jakarta, Indonesia', 
          href: '#contact' 
        },
      ]
    },
  ]

  const dynamicSocials = footerData?.socialLinks?.map(s => ({
    icon: SOCIAL_ICONS[s.platform] || ExternalLink,
    href: s.url,
    label: s.platform
  })) || []

  return (
    <footer className="relative w-full theme-bg-primary border-t border-[var(--divider)] px-4 snap-start">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-5">
            <a href="#hero" className="flex items-center gap-3 group">
              <Image 
                src="/logo.png" 
                alt="PT. Abimanyu Abadi Logo" 
                width={36} 
                height={36} 
                className="rounded-lg"
              />
              <div>
                <p className="font-bold text-sm tracking-wide theme-text-heading">{footerData?.brandName || 'PT. ABIMANYU ABADI'}</p>
                <p className="theme-gold text-[10px] tracking-[0.12em]">{footerData?.tagline || 'General Contractor'}</p>
              </div>
            </a>
            <p className="theme-text-muted text-sm leading-relaxed">
              {footerData?.description || 'Membangun dengan Integritas — kontraktor umum dan supplier terpercaya untuk kebutuhan konstruksi korporat Indonesia.'}
            </p>
            <div className="flex items-center gap-2">
              {dynamicSocials.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a key={i} href={social.href} aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
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
          <p className="theme-text-muted text-xs text-center md:text-left">{footerData?.copyright || '© 2025 PT. Abimanyu Abadi. All rights reserved.'}</p>
          <p className="theme-text-muted text-xs">
            {footerData?.footerInfo || 'General Contractor & Supplier · Jakarta, Indonesia'}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
