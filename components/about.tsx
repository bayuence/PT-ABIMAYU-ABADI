'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Target, Award } from 'lucide-react'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { duration: 2000 })
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest: number) => {
      setDisplayValue(Math.min(Math.round(latest), value))
    })
    return () => unsubscribe()
  }, [rounded, value])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          count.set(value)
          hasAnimated.current = true
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold theme-accent tabular-nums">
      {displayValue}{suffix}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-base relative w-full theme-bg-secondary py-24 md:py-36 px-4 snap-start">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">
                TENTANG PERUSAHAAN
              </p>
              <h2 className="text-4xl md:text-5xl font-bold theme-text-heading leading-[1.1] mb-6">
                Integritas Dalam Setiap Proyek, Kualitas Dalam Setiap Detail
              </h2>
            </div>

            <p className="theme-text-body text-base md:text-lg leading-relaxed">
              PT. Abimanyu Abadi adalah kontraktor umum dan supplier terpercaya
              yang telah melayani klien-klien korporat tier-1 Indonesia selama
              lebih dari satu dekade. Kami memahami bahwa setiap proyek adalah
              kombinasi unik dari tantangan teknis, kebutuhan bisnis, dan standar
              kualitas tertinggi.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 theme-bg-card border theme-border rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                    <Target className="w-4 h-4 theme-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest theme-text-accent">VISI</p>
                </div>
                <p className="theme-text-heading text-sm font-medium leading-relaxed">
                  Profesional, Kreatif dan Berkomitmen
                </p>
              </div>

              <div className="p-6 theme-bg-card border theme-border rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                    <Award className="w-4 h-4 theme-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest theme-text-accent">MISI</p>
                </div>
                <ul className="text-sm space-y-2 theme-text-body">
                  <li className="flex gap-2"><span className="theme-accent mt-0.5">→</span><span>Memberikan solusi konstruksi terbaik</span></li>
                  <li className="flex gap-2"><span className="theme-accent mt-0.5">→</span><span>Menjaga kepercayaan klien</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                { value: 50, label: 'Proyek Selesai', suffix: '+' },
                { value: 15, label: 'Klien Korporat', suffix: '+' },
                { value: 10, label: 'Tahun Pengalaman', suffix: '+' },
                { value: 100, label: 'On-time Delivery', suffix: '%' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true, margin: '-50px' }} className="space-y-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="theme-text-muted text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-[var(--divider)]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-muted mb-5">LEGALITAS & SERTIFIKASI</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'SIUJK', desc: 'Surat Izin Usaha Jasa Konstruksi' },
                  { name: 'SBU', desc: 'Sertifikat Badan Usaha' },
                  { name: 'NIB', desc: 'Nomor Induk Berusaha' },
                ].map((cred, i) => (
                  <div key={i} className="px-5 py-3 border theme-border rounded-xl text-center group hover:border-[var(--accent)] transition-all duration-300 cursor-default">
                    <p className="font-bold theme-text-heading text-sm group-hover:theme-accent transition-colors">{cred.name}</p>
                    <p className="text-[10px] theme-text-muted">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
