import { useState, useEffect, useCallback, memo, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import Image from 'next/image'

interface ImageSlide {
  id: number
  url: string
  title: string
  description?: string
}

interface ImageCarouselProps {
  images: ImageSlide[]
  autoplay?: boolean
  interval?: number
  showThumbnails?: boolean
  aspectRatio?: 'square' | 'video' | 'wide'
}

// Memoize image component for better performance
const CarouselImage = memo(({ image, hasOverlay = true }: { image: ImageSlide, hasOverlay?: boolean }) => (
  <div className="relative w-full h-full">
    <Image
      src={image.url}
      alt={image.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={false}
      className="object-cover"
    />
    
    {hasOverlay && (
      <>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
          {image.description && (
            <p className="text-sm md:text-base text-gray-200">{image.description}</p>
          )}
        </div>
      </>
    )}
  </div>
));

CarouselImage.displayName = 'CarouselImage';

// Memoize thumbnail component
const Thumbnail = memo(({ 
  image, 
  isActive, 
  onClick 
}: { 
  image: ImageSlide, 
  isActive: boolean, 
  onClick: () => void 
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all duration-300 ${
      isActive 
        ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' 
        : 'opacity-70 hover:opacity-100'
    }`}
  >
    <Image
      src={image.url}
      alt={image.title}
      fill
      sizes="64px"
      className="object-cover"
    />
  </motion.button>
));

Thumbnail.displayName = 'Thumbnail';

export function ImageCarousel({
  images,
  autoplay = true,
  interval = 5000,
  showThumbnails = true,
  aspectRatio = 'video'
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Memoize aspect ratio classes to prevent re-renders
  const aspectRatioClasses = useMemo(() => ({
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]'
  }), []);

  // Optimize slide transition variants
  const slideVariants = useMemo(() => ({
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  }), []);

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])
  
  // Memoize thumbnail click handler to prevent recreating functions on each render
  const handleThumbnailClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!autoplay || isPaused) return
    
    const timer = setInterval(() => {
      nextSlide()
    }, interval)
    
    return () => clearInterval(timer)
  }, [autoplay, interval, isPaused, nextSlide])

  const currentImage = useMemo(() => images[currentIndex], [images, currentIndex]);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 will-change-transform">
      <div 
        className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ position: 'relative' }}
      >
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 will-change-transform"
            style={{ position: 'absolute' }}
          >
            <CarouselImage image={currentImage} />
            
            {/* Zoom button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all"
              onClick={() => window.open(currentImage.url, '_blank')}
              aria-label="View full size image"
            >
              <ZoomIn size={20} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows - optimized */}
        {images.length > 1 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -mt-6 pointer-events-none">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        )}
      </div>
      
      {/* Thumbnails - optimized */}
      {showThumbnails && images.length > 1 && (
        <div className="bg-gray-900 p-3 overflow-x-auto">
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <Thumbnail 
                key={image.id}
                image={image}
                isActive={index === currentIndex}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 