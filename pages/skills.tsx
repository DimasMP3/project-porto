import { motion, useInView } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, Star, TrendingUp, Award, Users } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'
import { MobileNav } from '../components/MobileNav'
import { useState, useEffect, useRef } from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Digital Communication",
      icon: "📱",
      skills: [
        { name: "Social Media Strategy", level: 90, description: "Pengembangan strategi media sosial yang efektif" },
        { name: "Content Marketing", level: 85, description: "Pembuatan dan distribusi konten yang engaging" },
        { name: "Digital Advertising", level: 80, description: "Pengelolaan kampanye iklan digital" },
        { name: "Email Marketing", level: 75, description: "Strategi komunikasi melalui email" }
      ]
    },
    {
      title: "Content Creation",
      icon: "✍️",
      skills: [
        { name: "Copywriting", level: 95, description: "Penulisan copy yang persuasif dan engaging" },
        { name: "Content Strategy", level: 90, description: "Perencanaan konten yang strategis" },
        { name: "Visual Storytelling", level: 80, description: "Bercerita melalui elemen visual" },
        { name: "Video Content", level: 70, description: "Produksi konten video untuk media sosial" }
      ]
    },
    {
      title: "Research & Analytics",
      icon: "📊",
      skills: [
        { name: "Market Research", level: 85, description: "Riset pasar dan analisis kompetitor" },
        { name: "Data Analysis", level: 80, description: "Analisis data untuk insight komunikasi" },
        { name: "Survey Design", level: 90, description: "Perancangan survei dan kuesioner" },
        { name: "SPSS", level: 75, description: "Analisis statistik menggunakan SPSS" }
      ]
    },
    {
      title: "Brand & PR",
      icon: "🎨",
      skills: [
        { name: "Brand Strategy", level: 85, description: "Pengembangan strategi brand yang kuat" },
        { name: "Public Relations", level: 90, description: "Manajemen hubungan dengan media dan publik" },
        { name: "Crisis Communication", level: 80, description: "Penanganan komunikasi dalam situasi krisis" },
        { name: "Event Management", level: 75, description: "Perencanaan dan eksekusi event" }
      ]
    },
    {
      title: "Technical Skills",
      icon: "💻",
      skills: [
        { name: "Google Analytics", level: 85, description: "Analisis performa website dan kampanye" },
        { name: "Canva", level: 90, description: "Desain grafis untuk media sosial" },
        { name: "Hootsuite", level: 80, description: "Manajemen dan scheduling media sosial" },
        { name: "Adobe Creative Suite", level: 70, description: "Desain dan editing konten visual" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Public Speaking", level: 95, description: "Presentasi dan berbicara di depan umum" },
        { name: "Team Leadership", level: 85, description: "Memimpin dan mengelola tim" },
        { name: "Project Management", level: 80, description: "Pengelolaan proyek dari awal hingga selesai" },
        { name: "Cross-cultural Communication", level: 85, description: "Komunikasi lintas budaya" }
      ]
    }
  ]

  // Create skill refs after skillCategories is defined
  const skillRefs = skillCategories.map(() => useRef(null));
  
  // Track window width for responsive behavior
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Set up responsive visibility tracking with useInView
  const isInView = skillRefs.map(ref => useInView(ref, { 
    once: false, 
    amount: 0.2
  }));
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        
        // Force re-render on window resize to re-evaluate visibility
        // This helps with responsive behavior
        requestAnimationFrame(() => {
          const tempWidth = window.innerWidth;
          setWindowWidth(0);
          setTimeout(() => setWindowWidth(tempWidth), 10);
        });
      };
      
      // Set initial width
      setWindowWidth(window.innerWidth);
      
      // Add resize listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const achievements = [
    {
      title: "Certified Digital Marketing Professional",
      issuer: "Google Digital Marketing Institute",
      year: "2024",
      icon: "🏆"
    },
    {
      title: "Social Media Marketing Specialist",
      issuer: "Facebook Blueprint",
      year: "2025",
      icon: "📱"
    },
    {
      title: "Content Strategy Certification",
      issuer: "HubSpot Academy",
      year: "2025",
      icon: "✍️"
    },
    {
      title: "Public Speaking Champion",
      issuer: "UI Communication Week",
      year: "2024",
      icon: "🎤"
    }
  ]

  return (
    <>
      <Head>
        <title>Keahlian - Indah Nur Syifa</title>
        <meta name="description" content="Keahlian dan kompetensi Indah Nur Syifa dalam bidang komunikasi" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link 
                href="/" 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                MyPortfolio
              </Link>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Beranda
                  </Link>
                  <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Tentang
                  </Link>
                  <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Proyek
                  </Link>
                  <Link href="/skills" className="text-blue-600 dark:text-blue-400 font-medium">
                    Keahlian
                  </Link>
                </div>
                <ThemeToggle />
                <MobileNav />
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Keahlian & Kompetensi</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Kumpulan keahlian yang telah saya kembangkan melalui pendidikan, pengalaman praktis, 
                dan pembelajaran berkelanjutan dalam bidang komunikasi dan digital marketing.
              </p>
            </motion.div>

            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">25+</h3>
                <p className="text-gray-600 dark:text-gray-300">Keahlian Dikuasai</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4</h3>
                <p className="text-gray-600 dark:text-gray-300">Sertifikasi</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">15+</h3>
                <p className="text-gray-600 dark:text-gray-300">Proyek Selesai</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
                <p className="text-gray-600 dark:text-gray-300">Tahun Pengalaman</p>
              </div>
            </motion.div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.section
                  key={category.title}
                  ref={skillRefs[categoryIndex]}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-8">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: isInView[categoryIndex] ? `${skill.level}%` : 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: skillIndex * 0.1, 
                              ease: "easeOut" 
                            }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ 
                              willChange: "width",
                              transformOrigin: "left",
                              minWidth: "0%",
                              maxWidth: "100%" 
                            }}
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Sertifikasi & Penghargaan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{achievement.issuer}</p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{achievement.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Learning Philosophy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Filosofi Pembelajaran</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                "Komunikasi yang efektif adalah hasil dari pembelajaran berkelanjutan, praktik yang konsisten, 
                dan adaptasi terhadap perkembangan teknologi. Setiap proyek adalah kesempatan untuk tumbuh 
                dan mengasah keahlian."
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">📚</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-blue-100">Selalu update dengan tren dan teknologi terbaru</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Practice Makes Perfect</h3>
                  <p className="text-blue-100">Mengasah keahlian melalui proyek nyata</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🚀</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Mindset</h3>
                  <p className="text-blue-100">Mencari cara baru untuk berkomunikasi</p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="mt-16 text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mari Berkolaborasi</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Tertarik untuk memanfaatkan keahlian saya dalam proyek komunikasi Anda?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Lihat Portfolio
                </Link>
                <a
                  href="mailto:indah@example.com"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Hubungi Saya
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  )
}

