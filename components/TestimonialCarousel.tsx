import { useState, useEffect, useCallback, memo, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  content: string
  author: string
  role: string
  company?: string
  avatar?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

// Memoize testimonial content component for better performance
const TestimonialContent = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <>
    <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 italic text-center mb-8 relative z-10">
      "{testimonial.content}"
    </blockquote>
    
    <div className="flex flex-col items-center">
      {testimonial.avatar ? (
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white dark:border-gray-700 shadow-md">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.author} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
          {testimonial.author.charAt(0)}
        </div>
      )}
      
      <div className="text-center">
        <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.role}
          {testimonial.company && ` · ${testimonial.company}`}
        </p>
      </div>
    </div>
  </>
));

TestimonialContent.displayName = 'TestimonialContent';

// Memoize indicator button
const IndicatorButton = memo(({ 
  index, 
  currentIndex, 
  onClick 
}: { 
  index: number, 
  currentIndex: number, 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
      index === currentIndex 
        ? 'bg-blue-600 dark:bg-blue-500 w-6' 
        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
    }`}
    aria-label={`Go to testimonial ${index + 1}`}
  />
));

IndicatorButton.displayName = 'IndicatorButton';

export function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [testimonials.length])
  
  // Memoize indicator click handler
  const handleIndicatorClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!autoplay || isPaused || testimonials.length <= 1) return
    
    const timer = setInterval(() => {
      nextSlide()
    }, interval)
    
    return () => clearInterval(timer)
  }, [autoplay, interval, isPaused, nextSlide, testimonials.length])

  // Optimize animation variants
  const variants = useMemo(() => ({
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30, // Reduced from 50 to 30
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 30 : -30, // Reduced from 50 to 30
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    })
  }), []);

  const currentTestimonial = useMemo(() => testimonials[currentIndex], [testimonials, currentIndex]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-6 sm:p-10 shadow-xl border border-white/20 dark:border-gray-700/30 will-change-transform"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ position: 'relative' }}
    >
      {/* Background decorations */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-2xl"></div>
      
      {/* Quote icon */}
      <div className="absolute top-8 left-8 text-blue-400/30 dark:text-blue-300/20">
        <Quote size={48} />
      </div>
      
      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center"
            style={{ position: 'relative' }}
          >
            <TestimonialContent testimonial={currentTestimonial} />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation - only show if more than one testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-between absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors -translate-x-5 pointer-events-auto"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors translate-x-5 pointer-events-auto"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        
        {/* Indicators - only show if more than one testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <IndicatorButton 
                key={index}
                index={index}
                currentIndex={currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 