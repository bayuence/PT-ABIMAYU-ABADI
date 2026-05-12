'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { fetchHeroSlides, HeroSlide } from '@/lib/fetchHeroSlides'

export default function Hero() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [current, setCurrent] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Fetch hero slides from Sanity
  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchHeroSlides()
        if (data && data.length > 0) {
          setSlides(data)
        } else {
          // Fallback data jika Sanity kosong
          setSlides([
            {
              _id: 'fallback-slide-1',
              tag: 'WELCOME',
              title: 'PT Abimayu Abadi',
              subtitle: 'Tambahkan hero slides di Sanity Studio untuk melihat konten yang disesuaikan',
              youtubeVideoId: 'dQw4w9WgXcQ',
              duration: 5000
            }
          ])
        }
      } finally {
        setIsLoading(false)
      }
    }
    loadSlides()
  }, [])

  // Auto advance slide menyesuaikan dengan 'duration' masing-masing slide
  useEffect(() => {
    if (!isPlaying || slides.length === 0) return; // Jika video di-pause manual oleh user, jangan ganti slide

    const duration = slides[current]?.duration || 30000
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, duration)

    return () => clearTimeout(timer)
  }, [current, isPlaying, slides])

  // Kirim perintah Play/Pause ke YouTube iframe via postMessage (Asli bawaan Browser, 100% Anti Error)
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const func = isPlaying ? 'playVideo' : 'pauseVideo'
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*')
    }
  }, [isPlaying])

  // Kirim perintah Mute/Unmute ke YouTube iframe via postMessage
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const func = isMuted ? 'mute' : 'unMute'
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*')
    }
  }, [isMuted])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden theme-bg-primary snap-start">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="text-white">Loading slides...</div>
        </div>
      )}

      {/* Background YouTube Videos via Native iFrame (Anti-Crash Next.js) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {slides.length > 0 && slides[current]?.youtubeVideoId ? (
          <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-[1.4] sm:scale-[1.2]">
            <iframe
              ref={iframeRef}
              key={slides[current].youtubeVideoId}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${slides[current].youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slides[current].youtubeVideoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Background Video"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-[#060B18]" />
        )}
      </div>

      {/* Dark Overlay - Disesuaikan untuk Mobile (Vertical) & Desktop (Horizontal) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          {slides.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-[var(--gold)]" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--gold)]">
                    {slides[current].tag}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                  {slides[current].title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl font-light">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                  <a href="#about" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-[11px] sm:text-sm font-bold tracking-widest uppercase hover:bg-blue-700 transition-all duration-300 group rounded-md sm:rounded-none">
                    Selengkapnya
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Bottom Navigation & Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8">

            {/* Slider Toggles */}
            <div className="flex-1 flex gap-2 sm:gap-6">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="flex-1 group text-left"
                >
                  <div className="w-full h-1 bg-white/20 mb-3 relative overflow-hidden">
                    {current === index && (
                      <motion.div
                        key={`${current}-${isPlaying}`} // Reset animasi jika pause/play
                        className="absolute left-0 top-0 bottom-0 bg-[var(--gold)] w-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: isPlaying ? 1 : 0 }}
                        transition={{ duration: (slide.duration ?? 30000) / 1000, ease: "linear" }}
                      />
                    )}
                  </div>
                  <h3 className={`text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 line-clamp-1 uppercase ${current === index ? 'theme-text-heading' : 'theme-text-muted group-hover:theme-text-body'
                    }`}>
                    {slide.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Media Controls (Play/Pause & Mute/Unmute) */}
            <div className="flex items-center gap-2 sm:gap-3 mr-20 sm:mr-0">
              {/* Tombol Play/Pause untuk HP & Desktop */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border theme-border theme-text-muted hover:theme-text-heading transition-all backdrop-blur-sm"
                aria-label="Toggle Play"
              >
                {isPlaying ? <Pause size={14} className="sm:w-4 sm:h-4" /> : <Play size={14} className="sm:w-4 sm:h-4" />}
              </button>

              {/* Tombol Audio */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border theme-border theme-text-muted hover:theme-text-heading transition-all backdrop-blur-sm"
                aria-label="Toggle Audio"
              >
                {isMuted ? <VolumeX size={14} className="sm:w-4 sm:h-4" /> : <Volume2 size={14} className="sm:w-4 sm:h-4" />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
