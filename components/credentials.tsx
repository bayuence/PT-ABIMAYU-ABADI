'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fetchCredentials, Credential } from '@/lib/fetchCredentials'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { duration: 2000 })
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest: number) => {
      setDisplayValue(Math.round(latest))
    })
    return () => unsubscribe()
  }, [rounded])

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
    <div ref={ref} className="text-5xl md:text-6xl font-bold gradient-text-gold tabular-nums">
      {displayValue}
      {suffix}
    </div>
  )
}

export default function Credentials() {
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const data = await fetchCredentials()
        setCredentials(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadCredentials()
  }, [])

  // Split credentials: first few for stats, rest for credential cards
  const stats = credentials.slice(0, 4)
  const credCards = credentials.slice(4)

  const credentialCardsList = credCards.length > 0 ? credCards : [
    {
      _id: '1',
      label: 'BERPENGALAMAN',
      value: '01',
      description: 'Multi-sektor industri dari migas hingga properti premium',
      order: 1,
    },
    {
      _id: '2',
      label: 'BERKUALITAS',
      value: '02',
      description: 'Material dan metode kerja berstandar korporat nasional',
      order: 2,
    },
    {
      _id: '3',
      label: 'TEPAT WAKTU',
      value: '03',
      description: 'Track record penyelesaian proyek sesuai milestone',
      order: 3,
    },
    {
      _id: '4',
      label: 'TERPERCAYA',
      value: '04',
      description: 'Klien tier-1 yang berulang kali mempercayakan proyek baru',
      order: 4,
    },
  ]
  return (
    <section
      id="credentials"
      className="section-base relative w-full theme-bg-secondary py-24 md:py-36 px-4"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-[#C9A84C]/[0.02] rounded-full blur-[120px]" />
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* ── Left: Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-4">MENGAPA MEMILIH KAMI</p>
              <div className="gold-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-6 leading-tight">
                Track Record{' '}
                <span className="gradient-text">Terbukti</span>
              </h2>
              <p className="theme-text-body text-base md:text-lg leading-relaxed mb-14">
                Dengan pengalaman lebih dari satu dekade, kami telah menunjukkan
                komitmen terhadap keunggulan. Klien korporat kami mempercayai kami
                karena kami konsisten memberikan hasil yang melampaui ekspektasi.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => {
                  const numValue = parseInt(stat.value) || 0
                  const suffix = stat.value.includes('%') ? '%' : '+'
                  return (
                    <motion.div
                      key={stat._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="space-y-2"
                    >
                      <AnimatedCounter value={numValue} suffix={suffix} />
                      <p className="theme-text-muted text-sm font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Credential Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {credentialCardsList.map((cred, i) => {
              const accents = [
                'from-[#4A90D9] to-[#60A5FA]',
                'from-[#C9A84C] to-[#E8D48B]',
                'from-[#60A5FA] to-[#4A90D9]',
                'from-[#4A90D9] to-[#2B5BA8]',
              ]
              const accent = accents[i % 4]
              return (
                <motion.div
                  key={cred._id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="glass-card p-6 group cursor-default overflow-hidden relative card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Left gradient accent with animation */}
                  <motion.div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    whileHover={{ scaleY: 1.1 }}
                  />

                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="flex items-start gap-5 pl-4 relative z-10">
                    {/* Number Badge with rotation */}
                    <motion.div className="flex-shrink-0" whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center font-bold text-white text-lg shadow-lg`}
                      >
                        {cred.value}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold theme-text-heading mb-1.5 tracking-wide group-hover:theme-accent transition-colors duration-300">
                        {cred.label}
                      </h3>
                      <p className="theme-text-body text-sm leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
