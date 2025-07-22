import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'custom'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  isExternal?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  iconPosition = 'right',
  isExternal = false,
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3 text-lg',
  }

  // Variant classes with improved hover effects
  const baseButtonClass = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
  
  // If custom class is provided and significantly modifies the button, prioritize it
  if (variant === 'custom') {
    const buttonClasses = `${baseButtonClass} ${className}`;
    
    return renderButton(buttonClasses);
  }
  
  // Standard variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg border-2 border-blue-600 hover:border-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-600 dark:hover:border-blue-700',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg border-2 border-purple-600 hover:border-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:border-purple-600 dark:hover:border-purple-700',
    outline: 'bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
    ghost: 'bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-2 border-transparent',
    custom: '',
  }

  const buttonClasses = `
    ${baseButtonClass}
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
  `

  return renderButton(buttonClasses);
  
  // Helper function to render the button with appropriate wrapper
  function renderButton(classes: string) {
    const buttonContent = (
      <>
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    )
    
    // Enhanced motion animations
    const motionProps = {
      whileHover: { 
        scale: 1.03,
        transition: { 
          duration: 0.2 
        }
      },
      whileTap: { 
        scale: 0.97,
        transition: { 
          duration: 0.1 
        }
      },
      initial: { 
        scale: 1 
      },
      className: "inline-block"
    }
    
    if (href) {
      if (isExternal) {
        return (
          <motion.div {...motionProps}>
            <a 
              href={href} 
              className={classes}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonContent}
            </a>
          </motion.div>
        )
      }
      
      return (
        <motion.div {...motionProps}>
          <Link href={href} className={classes}>
            {buttonContent}
          </Link>
        </motion.div>
      )
    }
  
    return (
      <motion.div {...motionProps}>
        <button onClick={onClick} className={classes}>
          {buttonContent}
        </button>
      </motion.div>
    )
  }
} 