'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { X } from 'lucide-react'
import Image from 'next/image'
import type { CarouselApi } from '@/components/ui/carousel'

interface PortfolioGalleryModalProps {
  projectId: number
  projectName: string
  images: string[]
  onClose: () => void
}

export default function PortfolioGalleryModal({
  projectId,
  projectName,
  images,
  onClose,
}: PortfolioGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!carouselApi) return

    const handleSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap())
    }

    carouselApi.on('select', handleSelect)
    return () => {
      carouselApi.off('select', handleSelect)
    }
  }, [carouselApi])

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-screen md:h-auto md:max-h-[90vh] border-0 bg-black/95 p-0 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-4 md:p-6 border-b border-white/10"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{projectName}</h2>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              {currentIndex + 1} dari {images.length} foto
            </p>
          </div>
          <DialogClose asChild>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors p-2"
            >
              <X size={24} />
            </motion.button>
          </DialogClose>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 flex items-center justify-center p-4 md:p-6 overflow-hidden bg-black"
        >
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="m-0">
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex items-center justify-center p-0">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-96 md:h-[500px] lg:h-[600px]"
                  >
                    <Image
                      src={image}
                      alt={`${projectName} - Foto ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      priority={index === 0}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/20 hover:bg-white/40 border-0 text-white hover:text-white transition-all" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/20 hover:bg-white/40 border-0 text-white hover:text-white transition-all" />
            </motion.div>
          </Carousel>
        </motion.div>

        {/* Footer - Slide Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 p-4 md:p-6 border-t border-white/10"
        >
          {images.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === currentIndex ? 32 : 8,
                backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.3)',
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full cursor-pointer"
              onClick={() => {
                setCurrentIndex(index)
              }}
            />
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
