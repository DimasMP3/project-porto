import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls, useTransform, useSpring, useScroll, useMotionValue } from 'framer-motion'

interface MarqueeTextProps {
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right'
  speed?: 'slow' | 'normal' | 'fast'
  pauseOnHover?: boolean
}

export function MarqueeText({
  children,
  className = '',
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  
  // Define animation speeds in pixels per second
  const speedValues = {
    slow: 15, // Reduced from 25 for smoother animation
    normal: 30, // Reduced from 50 for smoother animation
    fast: 60   // Reduced from 100 for smoother animation
  }
  
  // Use motion value instead of state for smoother animation
  const x = useMotionValue(0)
  
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return
    
    const measure = () => {
      if (!contentRef.current) return
      const contentWidth = contentRef.current.offsetWidth
      setContentWidth(contentWidth)
    }
    
    measure()
    
    // Create a more efficient resize observer
    const resizeObserver = new ResizeObserver(measure)
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }
    
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current)
      }
    }
  }, [children])
  
  useEffect(() => {
    if (contentWidth === 0) return
    
    const directionMultiplier = direction === 'left' ? -1 : 1
    const pixelsPerSecond = speedValues[speed]
    const durationInSeconds = contentWidth / pixelsPerSecond
    const durationInMs = durationInSeconds * 1000
    
    let animationId: number
    let lastTime = performance.now()
    
    const animate = (time: number) => {
      if (isPaused) {
        lastTime = time
        animationId = requestAnimationFrame(animate)
        return
      }
      
      const delta = time - lastTime
      lastTime = time
      
      const pixelsToMove = (delta / 1000) * pixelsPerSecond * directionMultiplier
      const currentX = x.get()
      
      // Reset position when it's moved a full content width
      if (Math.abs(currentX) >= contentWidth) {
        x.set(0)
      } else {
        x.set(currentX + pixelsToMove)
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [contentWidth, direction, isPaused, speed, x])
  
  // Use CSS transform for better performance
  const transformStyle = {
    transform: `translateX(${x.get()}px)`,
    willChange: 'transform',
  }
  
  return (
    <div 
      className={`overflow-hidden whitespace-nowrap ${className}`} 
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="inline-flex will-change-transform">
        <motion.div
          ref={contentRef}
          className="flex items-center"
          style={{ x }}
        >
          {children}
        </motion.div>
        <motion.div
          className="flex items-center"
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
} 