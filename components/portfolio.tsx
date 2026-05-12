'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { fetchPortfolio, Portfolio } from '@/lib/fetchPortfolio'
import PortfolioGalleryModal from './portfolio-gallery-modal'

const categoryBadge: Record<string, string> = {
  industri: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  warehouse: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  residensial: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  komersial: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Portfolio[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('semua')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchPortfolio()
        setProjects(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadProjects()
  }, [])

  const categories = ['semua', ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = activeCategory === 'semua' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="section-base relative w-full theme-bg-secondary py-24 md:py-36 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase theme-text-accent mb-4">PORTOFOLIO PROYEK</p>
          <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-5">Rekam Jejak <span className="gradient-text">Nyata</span></h2>
          <p className="theme-text-body max-w-2xl mx-auto">Lintas sektor industri — dari infrastruktur migas hingga properti premium</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[var(--accent)] text-white border-transparent shadow-lg'
                  : 'bg-transparent theme-text-body theme-border-subtle hover:border-[var(--accent)] hover:theme-text-heading'
              }`}>
              {cat === 'semua' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="sync">
            {filtered.map((project) => {
              const badge = categoryBadge[project.category] || categoryBadge.industri
              const imageUrls = project.images.map(img => img.asset?.url).filter(Boolean)

              return (
                <motion.div key={project._id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProjectId(project._id)}
                  className="theme-bg-card border theme-border rounded-2xl group cursor-pointer overflow-hidden hover:border-[var(--accent)] transition-all duration-300 card-hover"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProjectId(project._id)}
                >
                  <div className="relative h-48 overflow-hidden theme-bg-primary">
                    <div className="blueprint-grid" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badge} transition-all duration-300 group-hover:scale-110`}>{project.category}</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-[var(--accent)]/20">
                        <span className="text-[var(--accent)] font-bold text-lg">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-t theme-border-subtle">
                    <h3 className="theme-text-heading font-semibold text-sm mb-3 group-hover:theme-accent transition-colors">{project.name}</h3>
                    <div className="flex items-center gap-4 theme-text-muted text-xs">
                      <span className="flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-1"><MapPin size={12} />{project.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} />{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Gallery Modal */}
        {selectedProjectId && (() => {
          const project = projects.find(p => p._id === selectedProjectId)
          const imageUrls = project?.images.map(img => img.asset?.url).filter(Boolean) || []
          return project ? (
            <PortfolioGalleryModal
              projectId={project._id}
              projectName={project.name}
              images={imageUrls}
              onClose={() => setSelectedProjectId(null)}
            />
          ) : null
        })()}
      </div>
    </section>
  )
}
