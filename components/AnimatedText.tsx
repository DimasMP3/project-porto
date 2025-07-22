import React, { useMemo } from 'react'
import { motion, Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export function AnimatedText({ text, className = '', once = true, delay = 0 }: AnimatedTextProps) {
  // Animasi untuk setiap karakter - optimized
  const characterAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 20, // Reduced from 50 to 20 for better performance
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // Memoize the split text to prevent unnecessary recalculations
  const words = useMemo(() => text.split(' '), [text]);

  return (
    <motion.p
      aria-label={text}
      role="heading"
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }} // Add margin to optimize when animation triggers
    >
      {words.map((word, wordIndex) => {
        // Limit the number of animated characters per word for better performance
        const characters = word.split('');
        
        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block overflow-hidden">
              {characters.map((character, index) => {
                // Group characters for better performance on longer text
                const groupFactor = Math.min(5, Math.ceil(characters.length / 10));
                const groupIndex = Math.floor(index / groupFactor);
                
                return (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={characterAnimation}
                    transition={{
                      delay: delay + groupIndex * 0.03, // Use group index for delay instead of character index
                      duration: 0.4, // Reduced from 0.5 to 0.4
                      ease: [0.2, 0.65, 0.3, 0.9] as any,
                    }}
                  >
                    {character}
                  </motion.span>
                )
              })}
            </span>{' '}
          </React.Fragment>
        )
      })}
    </motion.p>
  )
} 