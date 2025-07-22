import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { createPortal } from 'react-dom'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Close the menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false)
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Menu button - always rendered in place
  const menuButton = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-full border border-gray-200/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 z-50 relative"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </motion.button>
  )

  // Mobile menu content - rendered via portal
  const mobileMenuContent = (
    <AnimatePresence>
      {isOpen && mounted && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/95 z-[100]"
            onClick={() => setIsOpen(false)}
            style={{
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
            }}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[250px] bg-gray-900 text-white z-[101] shadow-xl border-l border-gray-800/50 p-6 flex flex-col"
            style={{
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
            }}
          >
            <div className="flex justify-end mb-6">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/about', label: 'Tentang' },
                { href: '/projects', label: 'Proyek' },
                { href: '/skills', label: 'Keahlian' }
              ].map(link => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium ${
                    router.pathname === link.href 
                      ? 'text-blue-400' 
                      : 'text-gray-200 hover:text-blue-400'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-gray-400">
                  Let's connect
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      {menuButton}
      {mounted && createPortal(mobileMenuContent, document.body)}
    </div>
  )
} 