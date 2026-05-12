'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchClients, Client } from '@/lib/fetchClients'

export default function ClientsGrid() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchClients()
        setClients(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadClients()
  }, [])
  return (
    <section id="clients" className="section-base relative w-full theme-bg-primary py-24 md:py-36 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">KLIEN KAMI</p>
          <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-5">Dipercaya Oleh Perusahaan Terkemuka</h2>
          <p className="theme-text-body max-w-2xl mx-auto">Perusahaan dan institusi tier-1 Indonesia telah mempercayakan proyek-proyek strategis mereka kepada kami</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {clients.map((client, i) => (
            <motion.div key={client._id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }} viewport={{ once: true, margin: '-30px' }}
              className="theme-bg-card border theme-border rounded-2xl p-5 flex items-center justify-center min-h-[120px] cursor-default group hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300">
              {client.logo?.asset?.url ? (
                <img src={client.logo.asset.url} alt={client.name} className="max-w-full max-h-[80px] object-contain group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <p className="theme-text-body font-bold text-center text-xs tracking-wider group-hover:theme-accent transition-colors duration-300">{client.name}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="mt-12">
          <p className="theme-text-muted text-sm text-center">Dan banyak klien korporat lainnya di seluruh Indonesia — dari BUMN hingga swasta</p>
        </motion.div>
      </div>
    </section>
  )
}
