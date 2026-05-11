'use client'

import { motion } from 'framer-motion'
import { HardHat, Package, PencilRuler, Factory, Home, ClipboardList, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: HardHat, title: 'General Kontraktor', description: 'Layanan konstruksi menyeluruh dengan standar korporat internasional, dari pondasi hingga finishing.' },
  { icon: Package, title: 'Supplier Material', description: 'Penyediaan material berkualitas tinggi untuk berbagai kebutuhan proyek berskala besar.' },
  { icon: PencilRuler, title: 'Konsultan Design', description: 'Desain inovatif yang selaras dengan visi dan budget proyek Anda.' },
  { icon: Factory, title: 'Konstruksi Industri', description: 'Spesialisasi pembangunan fasilitas industri, gudang, dan manufaktur.' },
  { icon: Home, title: 'Interior & Fit-out', description: 'Penyelesaian interior dengan presisi dan estetika premium.' },
  { icon: ClipboardList, title: 'Project Management', description: 'Manajemen proyek profesional dari perencanaan hingga serah terima.' },
]

export default function Services() {
  return (
    <section id="services" className="section-base relative w-full theme-bg-primary py-24 md:py-36 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-[var(--accent)]/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">LAYANAN KAMI</p>
          <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-5">
            Solusi Konstruksi <span className="gradient-text">Lengkap</span>
          </h2>
          <p className="theme-text-body max-w-2xl mx-auto text-base md:text-lg">
            Dari perencanaan hingga eksekusi, kami menyediakan rangkaian layanan komprehensif untuk setiap kebutuhan proyek
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true, margin: '-50px' }}
                className="theme-bg-card border theme-border rounded-2xl p-7 group cursor-pointer hover:border-[var(--accent)] transition-all duration-300 card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 mb-5">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 theme-accent" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold theme-text-heading mb-3 group-hover:theme-accent transition-colors duration-300 relative z-10">{service.title}</h3>
                <p className="theme-text-body text-sm leading-relaxed mb-5 relative z-10">{service.description}</p>
                <div className="flex items-center gap-1.5 theme-accent text-sm font-semibold group-hover:gap-2.5 transition-all duration-300 relative z-10">
                  <span>Pelajari</span>
                  <motion.div whileHover={{ x: 3, y: -3 }}>
                    <ArrowUpRight size={14} className="transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
