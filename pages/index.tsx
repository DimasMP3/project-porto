import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown, Globe, Star, Code, Sparkles, BookOpen, MessageCircle } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'
import { MarqueeText } from '../components/MarqueeText'
import { AnimatedText } from '../components/AnimatedText'
import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import { SkillCard } from '../components/SkillCard'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { ImageCarousel } from '../components/ImageCarousel'
import { MobileNav } from '../components/MobileNav'
import dynamic from 'next/dynamic'

// Dynamically import heavy components for better performance
const DynamicTestimonialCarousel = dynamic(() => import('../components/TestimonialCarousel').then(mod => ({ default: mod.TestimonialCarousel })), { ssr: false, loading: () => <div className="min-h-[300px] bg-white/30 dark:bg-gray-800/30 rounded-xl flex items-center justify-center">Loading...</div> })
const DynamicImageCarousel = dynamic(() => import('../components/ImageCarousel').then(mod => ({ default: mod.ImageCarousel })), { ssr: false, loading: () => <div className="min-h-[300px] bg-gray-900 rounded-xl flex items-center justify-center">Loading...</div> })



export default function Home() {
  // Optimized scroll handling to improve performance
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  })
  
  // State for intersection observer to lazy load components
  const [isProjectsVisible, setIsProjectsVisible] = useState(false)
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const [isSkillsVisible, setIsSkillsVisible] = useState(false)
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false)
  
  // References for sections that will be lazy loaded
  const projectsRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  
  // Setup intersection observer for better performance
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    }
    
    const projectsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsProjectsVisible(true)
        projectsObserver.disconnect()
      }
    }, observerOptions)
    
    const carouselObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCarouselVisible(true)
        carouselObserver.disconnect()
      }
    }, observerOptions)
    
    const skillsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsSkillsVisible(true)
        skillsObserver.disconnect()
      }
    }, observerOptions)
    
    const testimonialsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsTestimonialsVisible(true)
        testimonialsObserver.disconnect()
      }
    }, observerOptions)
    
    if (projectsRef.current) projectsObserver.observe(projectsRef.current)
    if (carouselRef.current) carouselObserver.observe(carouselRef.current)
    if (skillsRef.current) skillsObserver.observe(skillsRef.current)
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current)
    
    return () => {
      projectsObserver.disconnect()
      carouselObserver.disconnect()
      skillsObserver.disconnect()
      testimonialsObserver.disconnect()
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Kampanye Digital Awareness",
      description: "Strategi komunikasi digital untuk meningkatkan kesadaran masyarakat tentang isu lingkungan",
      tags: ["Social Media", "Content Strategy", "Analytics"],
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Research Communication Study",
      description: "Penelitian tentang efektivitas komunikasi massa dalam era digital",
      tags: ["Research", "Data Analysis", "Academic Writing"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Brand Communication Strategy",
      description: "Pengembangan strategi komunikasi brand untuk startup teknologi",
      tags: ["Brand Strategy", "PR", "Content Creation"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      demoUrl: "#",
      githubUrl: "#"
    }
  ]

  const skills = [
    { name: "Public Speaking", icon: "🎤", level: 90 },
    { name: "Content Writing", icon: "✍️", level: 85 },
    { name: "Social Media Management", icon: "📱", level: 88 },
    { name: "SEO", icon: "🔍", level: 75 },
    { name: "Digital Marketing", icon: "📊", level: 82 },
    { name: "Research & Analysis", icon: "📝", level: 92 }
  ]

  const testimonials = [
    {
      id: 1,
      content: "Indah's strategic approach to digital communication transformed our brand's online presence. Her expertise and creativity helped us achieve remarkable engagement metrics across all platforms.",
      author: "Dimas Maulana Putra",
      role: "Marketing Director",
      company: "Tech Innovate",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 2,
      content: "Working with Indah on our research communication project was enlightening. Her analytical skills and ability to translate complex data into compelling content made our findings accessible to a wider audience.",
      author: "Dimas Maulana Putra",
      role: "Research Lead",
      company: "Data Analytics Institute",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 3,
      content: "The content strategy Indah developed for our social media campaigns exceeded our expectations. Her understanding of audience behavior and digital trends resulted in significantly improved engagement and conversion rates.",
      author: "Dimas Maulana Putra",
      role: "Digital Campaign Manager",
      company: "Creative Solutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
    }
  ]

  const featuredImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
      title: "Social Media Campaign",
      description: "Comprehensive digital strategy for environmental awareness"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=1470",
      title: "Content Strategy",
      description: "Engaging storytelling approach for brand communication"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470",
      title: "Research Analysis",
      description: "Data-driven insights for communication effectiveness"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      title: "Digital Marketing",
      description: "Integrated campaign across multiple platforms"
    }
  ]

  


  // Memoized navigation component
  const Navigation = useMemo(() => (
    <nav className="fixed top-0 w-full z-30">
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
            >
              <Link href="/">MyPortfolio</Link>
            </motion.div>
            <div className="flex items-center space-x-4 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex space-x-8 relative"
              >
                <Link href="/" className="text-blue-600 font-medium">
                  Beranda
                </Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Tentang
                </Link>
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Proyek
                </Link>
                <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Keahlian
                </Link>
              </motion.div>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </nav>
  ), []);
  
  return (
    <>
      <Head>
        <title>MyPortfolio - Communication Science Student</title>
        <meta name="description" content="Personal portfolio - Communication Science Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-indigo-900/10 dark:to-purple-900/10 dark:text-white transition-colors duration-300">
        {/* Modern Glass Morphism Navigation - Memoized */}
        {Navigation}

        {/* Hero Section - With Modern Design */}
        <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative" ref={targetRef}>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] relative">
              <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                  className="max-w-xl relative z-10"
                >
                  {/* Decorative elements - optimized with will-change-transform */}
                  <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl will-change-transform"></div>
                  <div className="absolute -z-10 -bottom-10 right-10 w-60 h-60 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl will-change-transform"></div>
                  
                  <AnimatedText 
                    text="Indah Nur Syifa" 
                    className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6"
                    delay={0.2}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex items-center mb-8 text-lg font-medium"
                  >
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="text-xl text-gray-700 dark:text-gray-300">
                      Communication Science Student & Digital Strategist
                    </span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
                  >
                    Passionate in digital communication, content strategy, and research. 
                    Experienced in developing effective communication strategies for various digital platforms.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button 
                      href="#projects"
                      variant="primary"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-none shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      View My Projects
                    </Button>
                    <Button 
                      href="#contact"
                      variant="outline"
                      size="lg"
                      className="border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                      icon={<Mail className="h-4 w-4" />}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex space-x-4 mt-8"
                  >
                    {[
                      { icon: <Linkedin className="h-5 w-5" />, color: "hover:bg-blue-500" },
                      { icon: <Github className="h-5 w-5" />, color: "hover:bg-gray-800" },
                      { icon: <Mail className="h-5 w-5" />, color: "hover:bg-red-500" }
                    ].map((item, i) => (
                    <motion.a
                        key={i}
                        whileHover={{ y: -3 }}
                      href="#" 
                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-md ${item.color} hover:text-white transition-all duration-300`}
                    >
                        {item.icon}
                    </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex justify-center"
              >
                <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-700 rounded-full blur-3xl opacity-20 dark:opacity-30 will-change-transform"></div>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center relative z-10 will-change-transform"
                >
                  <div className="w-64 h-64 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden shadow-inner">
                    <Image 
                      src="/images/karina.jpg" 
                      alt="Profile Image"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Modern glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-10"></div>
                  </div>
                </motion.div>
                
                {/* Floating elements - optimized with will-change-transform */}
                <motion.div 
                  className="absolute top-10 -right-5 w-16 h-16 bg-purple-400 dark:bg-purple-600 rounded-xl rotate-12 flex items-center justify-center text-white text-2xl shadow-lg will-change-transform"
                  animate={{ y: [0, -10, 0], rotate: [12, 5, 12] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  📱
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 -left-5 w-16 h-16 bg-blue-400 dark:bg-blue-600 rounded-xl -rotate-12 flex items-center justify-center text-white text-2xl shadow-lg will-change-transform"
                  animate={{ y: [0, 10, 0], rotate: [-12, -5, -12] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                >
                  💡
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modern Gradient Marquee Section */}
        <section className="py-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 text-white overflow-hidden shadow-xl">
          <MarqueeText className="text-xl font-medium py-2" speed="normal">
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Digital Communication</span>
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Content Strategy</span>
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Social Media Management</span>
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Research & Analysis</span>
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Public Relations</span>
            <span className="mx-4 flex items-center"><span className="mr-2">✨</span> Brand Strategy</span>
          </MarqueeText>
        </section>

        {/* Featured Projects - With Modern Cards */}
        <section 
          id="projects" 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
          ref={projectsRef}
        >
          {/* Background decorative elements - optimized with reduced blur for better performance */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
            <div className="absolute top-40 right-10 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3 block">Portfolio</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Showcasing my best work in digital communication and strategy</p>
            </motion.div>
            
            {/* Conditionally render projects based on visibility for better performance */}
            {isProjectsVisible && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                    index={index}
                  />
                ))}
              </div>
            )}
            
            <div className="mt-14 text-center">
              <Button 
                href="/projects"
                variant="ghost"
                size="lg"
                className="group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                icon={<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>
        
        <section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden"
          ref={carouselRef}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-wider text-blue-400 font-medium bg-blue-900/30 px-3 py-1 rounded-full mb-3 block">Showcase</span>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">A visual journey through some of my highlighted projects</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Use dynamic import for better performance */}
              {isCarouselVisible ? (
                <DynamicImageCarousel 
                  images={featuredImages} 
                  aspectRatio="video"
                  interval={6000}
                />
              ) : (
                <div className="aspect-video bg-gray-800 rounded-xl animate-pulse flex items-center justify-center text-gray-600">
                  <p>Loading carousel...</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Skills Preview - Modern Design with optimized rendering */}
        <section 
          id="skills" 
          className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-800 bg-gray-50 relative"
          ref={skillsRef}
        >
          {/* Background decorations - simplified for better performance */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 text-white dark:text-gray-900 opacity-20" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-3 block">Expertise</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Abilities</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">My communication expertise and professional capabilities</p>
            </motion.div>
            
            {/* Conditionally render skills based on visibility for better performance */}
            {isSkillsVisible && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section - Optimized with lazy loading */}
        <section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/30 relative overflow-hidden"
          ref={testimonialsRef}
        >
          {/* Background elements - optimized with reduced blur intensity */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white dark:from-gray-800 to-transparent opacity-70"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 dark:bg-blue-600/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-600/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-3 block">Testimonials</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Feedback from clients and collaborators about my work and expertise</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Use dynamic import with lazy loading for better performance */}
              {isTestimonialsVisible ? (
                <DynamicTestimonialCarousel testimonials={testimonials} />
              ) : (
                <div className="h-[300px] bg-white/30 dark:bg-gray-800/30 rounded-xl animate-pulse flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <p>Loading testimonials...</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Services Section - Glass Morphism Design */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-800 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-600 dark:from-blue-700 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto relative">
              <motion.div
              initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm uppercase tracking-wider text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full mb-3 block">Offerings</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Communication solutions I offer to help your brand succeed</p>
              </motion.div>
              
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Digital Strategy",
                  description: "Effective digital communication strategies to build brand awareness and engagement.",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: "Content Creation",
                  description: "Creating engaging and relevant content for social media, blogs, and other digital platforms.",
                  color: "from-purple-400 to-purple-600"
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Research & Analysis",
                  description: "Research and data analysis to develop data-driven communication strategies.",
                  color: "from-green-400 to-green-600"
                }
              ].map((service, index) => (
              <motion.div
                  key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                  className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg text-white`}>
                    {service.icon}
                </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                </p>
              </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA - Modern Gradient */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/20"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-[40px] border-white/20"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">Let's Collaborate</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Interested in working together? I'm ready to help with your communication projects and bring your brand's message to life
              </p>
              <div className="relative">
                {/* Decorative rings */}
                <motion.div 
                  className="absolute -inset-4 rounded-full border-2 border-white/20 dark:border-white/10 -z-10"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div 
                  className="absolute -inset-8 rounded-full border-2 border-white/10 dark:border-white/5 -z-20"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                ></motion.div>
                
              <Button 
                  href="mailto:contact@example.com"
                  variant="custom"
                size="lg"
                  className="relative overflow-hidden bg-white hover:bg-gray-50 dark:bg-white dark:hover:bg-gray-50 text-indigo-600 hover:text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-700 font-bold border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 group"
                  icon={<Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />}
              >
                  <motion.span 
                    className="relative z-10"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  >
                    Get In Touch
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-100 dark:via-indigo-100 dark:to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.span>
                  <motion.span 
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 rounded-lg blur" 
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 4,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
              </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modern Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
                MyPortfolio
              </div>
              <div className="flex space-x-6">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, color: "hover:text-blue-500" },
                  { icon: <Github className="h-5 w-5" />, color: "hover:text-gray-300" },
                  { icon: <Mail className="h-5 w-5" />, color: "hover:text-red-400" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href="#" 
                    className={`text-gray-500 ${item.color} transition-colors`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500">
                © 2025 MyPortfolio. Created with{' '}
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="block text-red-500"
              >
                ❤️
              </motion.span>{' '}
                using Next.js and Tailwind CSS.
            </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

