import { motion } from 'framer-motion'
import { memo } from 'react'

interface SkillCardProps {
  name: string
  icon: string
  level: number
  index: number
}

export const SkillCard = memo(function SkillCard({ name, icon, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: Math.min(index * 0.1, 0.3), // Cap maximum delay at 0.3s for better UX
        duration: 0.5 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileTap={{ y: -5, transition: { duration: 0.2 } }} // Changed from whileHover to whileTap for better performance on mobile
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden group will-change-transform"
    >
      {/* Background decoration - simplified for better performance */}
      <div className="absolute -right-10 -top-10 w-20 h-20 rounded-full bg-blue-100/30 dark:bg-blue-900/20 group-hover:bg-blue-100/50 dark:group-hover:bg-blue-900/30 transition-all duration-300" />
      <div className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-purple-100/30 dark:bg-purple-900/20 group-hover:bg-purple-100/50 dark:group-hover:bg-purple-900/30 transition-all duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-5">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-3xl mr-4 shadow-sm">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
        </div>
        
        <div className="w-full h-2 bg-gray-200/70 dark:bg-gray-700/70 rounded-full overflow-hidden mb-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ 
              delay: 0.2, // Reduced delay for better UX
              duration: 0.8, // Reduced duration for better performance
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full will-change-transform"
          />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Skill Level</span>
          <motion.div 
            className="text-sm font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-md"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} // Changed from scale to opacity for better performance
            transition={{ delay: 0.5, duration: 0.3 }} // Reduced delay and simplified animation
            viewport={{ once: true, margin: "-100px" }}
          >
            {level}%
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}) 