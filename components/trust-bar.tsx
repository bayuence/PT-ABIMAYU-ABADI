'use client'

import { useEffect, useRef } from 'react'

const clients = ['PERTAMINA','KAI SERVICES','BANK MANDIRI','SUMMARECON','WIKA GEDUNG','BUMN','TRAC ASTRA','WINGS GROUP','GREEN ANDARA','UIN JAKARTA']

export default function TrustBar() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const scrollContent = scroller.querySelector('.marquee-track')
    if (scrollContent) {
      Array.from(scrollContent.children).forEach((item) => {
        scrollContent.appendChild(item.cloneNode(true))
      })
    }
  }, [])

  return (
    <section className="section-base relative w-full theme-bg-secondary py-10 border-y theme-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-shrink-0">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase theme-gold whitespace-nowrap">DIPERCAYA OLEH</p>
          </div>
          <div className="hidden md:block w-px h-8 bg-[var(--divider)]" />
          <div ref={scrollerRef} className="overflow-hidden flex-1 w-full">
            <div className="marquee-track">
              {clients.map((client, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-8 px-6">
                  <span className="theme-text-muted font-semibold text-sm tracking-wider whitespace-nowrap hover:theme-text-body transition-colors duration-300 cursor-default">{client}</span>
                  <span className="text-[var(--border-subtle)] text-xs">●</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
