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
                className="theme-bg-card border theme-border rounded-2xl p-7 group cursor-pointer hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300">
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 theme-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-bold theme-text-heading mb-3 group-hover:theme-accent transition-colors duration-300">{service.title}</h3>
                <p className="theme-text-body text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center gap-1.5 theme-accent text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                  <span>Pelajari</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
