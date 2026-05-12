'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Download } from 'lucide-react'
import { fetchContactInfo, ContactInfo } from '@/lib/fetchContactInfo'

export default function Contact() {
  const [formData, setFormData] = useState({ nama: '', perusahaan: '', email: '', telepon: '', kebutuhan: '', estimasi: '', deskripsi: '' })
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const data = await fetchContactInfo()
        setContactInfo(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadContactInfo()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = contactInfo?.whatsappNumber || '6287825167150'
    const message = `*Permintaan Penawaran Baru*%0A%0A*Nama:* ${formData.nama}%0A*Perusahaan:* ${formData.perusahaan}%0A*Email:* ${formData.email}%0A*Telepon:* ${formData.telepon}%0A*Kebutuhan:* ${formData.kebutuhan}%0A*Estimasi:* ${formData.estimasi}%0A*Deskripsi:*%0A${formData.deskripsi}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const defaultContactInfo = [
    { icon: Phone, title: 'Telepon', lines: contactInfo?.phones || ['021-22708806', '0878-2516-7150', '0856-7135-400'], href: contactInfo?.phones?.[0] ? `tel:+62${contactInfo.phones[0].replace(/\D/g, '')}` : 'tel:+62212270880' },
    { icon: Mail, title: 'Email', lines: contactInfo?.emails || ['ops.abimanyu@gmail.com'], href: contactInfo?.emails?.[0] ? `mailto:${contactInfo.emails[0]}` : 'mailto:ops.abimanyu@gmail.com' },
    { icon: MapPin, title: 'Alamat', lines: contactInfo?.address?.split('\n') || ['Gd. AD Premier Lt.17 Suite 04B', 'Jl. TB Simatupang', 'Jakarta Selatan 12550'], href: undefined },
  ]

  return (
    <section id="contact" className="section-base relative w-full theme-bg-secondary py-24 md:py-36 px-4 snap-start">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">HUBUNGI KAMI</p>
              <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-5 leading-tight">Mulai Proyek Anda Bersama Kami</h2>
              <p className="theme-text-body text-base md:text-lg leading-relaxed">
                Konsultasi gratis dengan tim ahli kami untuk memahami kebutuhan proyek dan menemukan solusi terbaik yang sesuai dengan visi Anda.
              </p>
            </div>

            <div className="space-y-4">
              {defaultContactInfo.map((item, i) => {
                const Icon = item.icon
                const content = (
                  <>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-all duration-300">
                      <Icon className="w-5 h-5 theme-accent" />
                    </motion.div>
                    <div>
                      <p className="theme-text-heading font-semibold text-sm mb-1">{item.title}</p>
                      {item.lines.map((line, j) => (<p key={j} className="theme-text-body text-sm leading-relaxed">{line}</p>))}
                    </div>
                  </>
                )
                const cls = "flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                return item.href ? (
                  <motion.a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls} whileHover={{ scale: 1.05 }}>{content}</motion.a>
                ) : (<motion.div key={i} className={cls} whileHover={{ scale: 1.05 }}>{content}</motion.div>)
              })}
            </div>

            <motion.a 
              href={contactInfo?.companyProfileUrl || '#'} 
              target={contactInfo?.companyProfileUrl ? "_blank" : undefined}
              rel={contactInfo?.companyProfileUrl ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05, y: -5 }} 
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[var(--gold)] to-[#D4B85C] text-[#060B18] font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-sm btn-glow"
            >
              <Download size={18} /> Download Company Profile
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <div className="theme-bg-card border theme-border rounded-2xl p-8 md:p-10">
              <div className="mb-8">
                <h3 className="theme-text-heading font-bold text-xl mb-2">Kirim Penawaran</h3>
                <p className="theme-text-muted text-sm">Isi formulir di bawah — data akan langsung terkirim via WhatsApp</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Nama Lengkap</label>
                    <input type="text" name="nama" value={formData.nama} onChange={handleChange} required placeholder="John Doe"
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm placeholder:theme-text-muted focus:border-[var(--accent)] focus:outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Perusahaan</label>
                    <input type="text" name="perusahaan" value={formData.perusahaan} onChange={handleChange} required placeholder="PT. Nama Perusahaan"
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm placeholder:theme-text-muted focus:border-[var(--accent)] focus:outline-none transition-all duration-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Email Korporat</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@perusahaan.com"
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm placeholder:theme-text-muted focus:border-[var(--accent)] focus:outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">No. Telepon</label>
                    <input type="tel" name="telepon" value={formData.telepon} onChange={handleChange} required placeholder="+62 821-xxxx-xxxx"
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm placeholder:theme-text-muted focus:border-[var(--accent)] focus:outline-none transition-all duration-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Jenis Kebutuhan</label>
                    <select name="kebutuhan" value={formData.kebutuhan} onChange={handleChange} required
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm focus:border-[var(--accent)] focus:outline-none transition-all duration-300">
                      <option value="">Pilih Kebutuhan</option>
                      <option value="General Kontraktor">General Kontraktor</option>
                      <option value="Supplier Material">Supplier Material</option>
                      <option value="Konsultan Design">Konsultan Design</option>
                      <option value="Konstruksi Industri">Konstruksi Industri</option>
                      <option value="Interior & Fit-out">Interior & Fit-out</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Estimasi Nilai</label>
                    <select name="estimasi" value={formData.estimasi} onChange={handleChange} required
                      className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm focus:border-[var(--accent)] focus:outline-none transition-all duration-300">
                      <option value="">Pilih Range</option>
                      <option value="< Rp 500 Juta">{'< Rp 500 Juta'}</option>
                      <option value="Rp 500 Juta - 2 Miliar">Rp 500 Juta - 2 Miliar</option>
                      <option value="Rp 2 - 10 Miliar">Rp 2 - 10 Miliar</option>
                      <option value="> Rp 10 Miliar">{'> Rp 10 Miliar'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold theme-text-body mb-2 uppercase tracking-wider">Deskripsi Proyek</label>
                  <textarea name="deskripsi" value={formData.deskripsi} onChange={handleChange} rows={4} placeholder="Jelaskan detail proyek Anda..."
                    className="w-full px-4 py-3 theme-bg-input border theme-border rounded-xl theme-text-heading text-sm placeholder:theme-text-muted focus:border-[var(--accent)] focus:outline-none transition-all duration-300 resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[var(--accent)] to-[#2B5BA8] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <Send size={16} /> Kirim via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
