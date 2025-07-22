import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from './Button'
import { memo } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  index: number
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: Math.min(index * 0.1, 0.3), // Cap maximum delay at 0.3s for better UX
        duration: 0.5 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 flex flex-col h-full will-change-transform"
    >
      <div className="relative h-56 w-full overflow-hidden">
        {/* Gradient overlay - optimized */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        {/* Image - optimized with proper sizes */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 will-change-transform"
          loading="lazy"
        />
        
        {/* Floating action buttons - optimized animations */}
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-blue-600 shadow-md hover:shadow-lg transition-all"
            >
              <ExternalLink size={14} />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-blue-600 shadow-md hover:shadow-lg transition-all"
            >
              <Github size={14} />
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100/50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <motion.a
            href={demoUrl || githubUrl || "#"}
            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group/link"
            whileTap={{ x: 2 }} // Changed from whileHover to whileTap for better performance on touch devices
          >
            View Project
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}) 