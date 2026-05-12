'use client'

import { useEffect, useState } from 'react'
import { fetchClients, Client } from '@/lib/fetchClients'

export default function TrustBar() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadClients = async () => {
      const data = await fetchClients()
      setClients(data)
      setIsLoaded(true)
    }
    loadClients()
  }, [])

  if (!isLoaded || clients.length === 0) return null

  const count = clients.length

  /**
   * SMART DUPLICATION
   * - 1 logo  → ulang 15× agar track selalu memenuhi layar
   * - Banyak logo → ulang minimal agar total ≥ 12 slot, loop mulus
   * Track dirender DUA kali (A + A) → animasi -50% = seamless infinite scroll
   */
  const minSlots = 12
  const repeatCount = Math.max(2, Math.ceil(minSlots / count))
  const trackItems: Client[] = Array.from({ length: repeatCount }, () => clients).flat()
  const loopItems = [...trackItems, ...trackItems]

  // Kecepatan: minimal 40s, tiap logo tambah 6s → pelan & nyaman dilihat
  const animDuration = Math.max(40, count * 6)

  return (
    <section className="section-base relative w-full py-10 border-y theme-border-subtle overflow-hidden"
      style={{ background: 'var(--bg-secondary, #0f172a)' }}
    >
      <style>{`
        @keyframes trust-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-track {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 3vw, 3rem);
          width: max-content;
          animation: trust-scroll ${animDuration}s linear infinite;
          will-change: transform;
        }
        .trust-track:hover {
          animation-play-state: paused;
        }
        .trust-logo-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 2.5vw, 2rem);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }
        .trust-logo-card:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.30);
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        }
        .trust-logo-img {
          height: clamp(36px, 5vw, 60px);
          width: auto;
          object-fit: contain;
          opacity: 0.85;
          transition: opacity 0.35s ease;
          display: block;
        }
        .trust-logo-card:hover .trust-logo-img {
          opacity: 1;
        }
        .trust-logo-text {
          font-size: clamp(0.75rem, 1.2vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          white-space: nowrap;
          color: rgba(255,255,255,0.65);
          transition: color 0.35s ease;
        }
        .trust-logo-card:hover .trust-logo-text {
          color: rgba(255,255,255,1);
        }
        .trust-fade-left {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: clamp(60px, 8vw, 120px); z-index: 10;
          pointer-events: none;
          background: linear-gradient(to right, var(--bg-secondary, #0f172a) 0%, transparent 100%);
        }
        .trust-fade-right {
          position: absolute; right: 0; top: 0; bottom: 0;
          width: clamp(60px, 8vw, 120px); z-index: 10;
          pointer-events: none;
          background: linear-gradient(to left, var(--bg-secondary, #0f172a) 0%, transparent 100%);
        }
      `}</style>

      {/* Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-4 rounded-full" style={{ background: 'var(--gold, #c9a84c)' }} />
          <p
            className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: 'var(--gold, #c9a84c)' }}
          >
            DIPERCAYA OLEH
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="trust-fade-left" />
        <div className="trust-fade-right" />

        <div className="overflow-hidden py-2">
          <div className="trust-track">
            {loopItems.map((client, i) => (
              <div key={i} className="trust-logo-card">
                {client.logo?.asset?.url ? (
                  <img
                    src={client.logo.asset.url}
                    alt={client.name}
                    className="trust-logo-img"
                    draggable={false}
                    onError={(e) => {
                      // Fallback ke nama jika gambar gagal load
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = 'none'
                      const span = document.createElement('span')
                      span.className = 'trust-logo-text'
                      span.textContent = client.name
                      target.parentNode?.appendChild(span)
                    }}
                  />
                ) : (
                  <span className="trust-logo-text">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
