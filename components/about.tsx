'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Target, Award } from 'lucide-react'
import { fetchAbout, AboutData } from '@/lib/fetchAbout'

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

// Fallback data if Sanity is empty or fails
const defaultData: AboutData = {
  tagline: 'TENTANG PERUSAHAAN',
  title: 'Integritas Dalam Setiap Proyek, Kualitas Dalam Setiap Detail',
  description: 'PT. Abimanyu Abadi adalah kontraktor umum dan supplier terpercaya yang telah melayani klien-klien korporat tier-1 Indonesia selama lebih dari satu dekade. Kami memahami bahwa setiap proyek adalah kombinasi unik dari tantangan teknis, kebutuhan bisnis, dan standar kualitas tertinggi.',
  stats: [
    { value: 50, label: 'Proyek Selesai', suffix: '+' },
    { value: 15, label: 'Klien Korporat', suffix: '+' },
    { value: 10, label: 'Tahun Pengalaman', suffix: '+' },
  ],
  badges: [
    { name: 'SIUJK', description: 'Jasa Konstruksi' },
    { name: 'SBU', description: 'Badan Usaha' },
    { name: 'NIB', description: 'Induk Berusaha' },
  ],
  videos: [
    { title: 'High-Rise Construction', location: 'Jakarta Project', videoId: 'iGCH44aqfcE' },
    { title: 'Industrial Development', location: 'Surabaya Site', videoId: 'MNg6fr2iKX0' }
  ]
}

export default function About() {
  const [data, setData] = useState<AboutData>(defaultData)

  useEffect(() => {
    const loadAbout = async () => {
      const sanityData = await fetchAbout()
      if (sanityData) {
        setData(sanityData)
      }
    }
    loadAbout()
  }, [])

  return (
    <section id="about" className="section-base relative w-full theme-bg-secondary py-24 md:py-36 px-4 snap-start">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-10"
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">
                {data.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold theme-text-heading leading-[1.1] mb-6">
                {data.title}
              </h2>
              <p className="theme-text-body text-base md:text-lg leading-relaxed mb-10">
                {data.description}
              </p>
            </div>

            {/* Stats and Legal */}
            <div className="space-y-16 pt-12 border-t border-[var(--divider)]">
              {/* Premium Executive Stats Row */}
              <div className="flex flex-nowrap items-center justify-between no-scrollbar overflow-x-auto gap-4 sm:gap-0">
                {data.stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }} 
                    viewport={{ once: true }} 
                    className="flex flex-col items-center flex-1 min-w-[90px] px-2 relative"
                  >
                    {/* Minimalist vertical divider */}
                    {i !== 0 && (
                      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[var(--divider)] to-transparent" />
                    )}
                    
                    <div className="text-3xl md:text-5xl font-extrabold theme-text-heading tracking-tighter mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="w-4 h-[2px] bg-[var(--accent)] mb-2" />
                      <p className="theme-text-muted text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">
                        {stat.label.split(' ')[0]} <br className="hidden sm:block" />
                        <span className="opacity-60">{stat.label.split(' ').slice(1).join(' ')}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legal Badges */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[var(--divider)]" />
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase theme-text-muted">CERTIFICATIONS</p>
                  <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[var(--divider)]" />
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {data.badges.map((cred, i) => (
                    <div key={i} className="relative group p-4 border theme-border rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent hover:border-[var(--accent)] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="relative font-black theme-text-heading text-xs tracking-tighter mb-1 group-hover:theme-accent transition-colors">{cred.name}</p>
                      <p className="relative text-[8px] theme-text-muted uppercase font-bold tracking-widest">{cred.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {data.videos.map((video, i) => (
              <div key={i} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border theme-border bg-black">
                {/* YouTube iFrame Embed */}
                <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.01]">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.videoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title={video.title}
                  />
                </div>

                {/* Overlays for Aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-[1px] bg-[var(--gold)]" />
                    <p className="text-[9px] font-black text-[var(--gold)] uppercase tracking-[0.3em]">{video.location}</p>
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg leading-[1.2] tracking-tight">{video.title}</h3>
                </div>

                {/* Cover to catch click */}
                <div className="absolute inset-0 z-10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
