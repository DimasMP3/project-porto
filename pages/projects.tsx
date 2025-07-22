import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { MobileNav } from '../components/MobileNav'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Kampanye Digital Awareness Lingkungan",
      description: "Strategi komunikasi digital komprehensif untuk meningkatkan kesadaran masyarakat tentang isu lingkungan melalui berbagai platform media sosial.",
      longDescription: "Proyek ini melibatkan pengembangan strategi komunikasi 360 derajat yang mencakup riset audiens, pembuatan konten kreatif, manajemen media sosial, dan analisis dampak kampanye. Berhasil meningkatkan engagement rate hingga 300% dan reach organik sebesar 150%.",
      category: "digital-marketing",
      tech: ["Social Media Strategy", "Content Creation", "Analytics", "Canva", "Hootsuite"],
      image: "/images/project1.jpg",
      date: "2024",
      status: "Completed",
      metrics: {
        reach: "500K+",
        engagement: "15K+",
        conversion: "8.5%"
      }
    },
    {
      id: 2,
      title: "Research: Efektivitas Komunikasi Massa Digital",
      description: "Penelitian mendalam tentang efektivitas komunikasi massa dalam era digital dan dampaknya terhadap perilaku konsumen Indonesia.",
      longDescription: "Penelitian kuantitatif dan kualitatif yang melibatkan 500+ responden untuk menganalisis pola konsumsi media digital dan efektivitas pesan komunikasi. Hasil penelitian dipresentasikan di National Communication Conference 2023.",
      category: "research",
      tech: ["SPSS", "Survey Design", "Data Analysis", "Academic Writing", "Presentation"],
      image: "/images/project2.jpg",
      date: "2024",
      status: "Published",
      metrics: {
        respondents: "500+",
        accuracy: "95%",
        citations: "12"
      }
    },
    {
      id: 3,
      title: "Brand Communication Strategy - TechStart",
      description: "Pengembangan strategi komunikasi brand komprehensif untuk startup teknologi, mencakup brand positioning hingga crisis communication.",
      longDescription: "Kolaborasi dengan startup teknologi untuk membangun identitas brand yang kuat, mengembangkan voice & tone, serta merancang strategi komunikasi yang konsisten across all touchpoints. Termasuk pembuatan brand guidelines dan training internal team.",
      category: "branding",
      tech: ["Brand Strategy", "PR", "Content Strategy", "Crisis Communication", "Training"],
      image: "/images/project3.jpg",
      date: "2025",
      status: "Ongoing",
      metrics: {
        brandAwareness: "+45%",
        sentiment: "85%",
        mediaReach: "1M+"
      }
    },
    {
      id: 4,
      title: "Content Strategy untuk E-commerce",
      description: "Strategi konten terintegrasi untuk platform e-commerce yang fokus pada peningkatan conversion rate dan customer engagement.",
      longDescription: "Pengembangan content calendar, copywriting untuk berbagai touchpoint customer journey, dan optimasi SEO content. Implementasi A/B testing untuk mengoptimalkan performa konten dan meningkatkan ROI marketing.",
      category: "content-strategy",
      tech: ["SEO", "Copywriting", "A/B Testing", "Google Analytics", "Content Calendar"],
      image: "/images/project4.jpg",
      date: "2025",
      status: "Completed",
      metrics: {
        conversion: "+25%",
        organicTraffic: "+60%",
        engagement: "+40%"
      }
    },
    {
      id: 5,
      title: "Crisis Communication Plan - NGO",
      description: "Pengembangan rencana komunikasi krisis untuk organisasi non-profit, termasuk protokol respons dan strategi pemulihan reputasi.",
      longDescription: "Analisis risiko komunikasi, pengembangan key messages, training spokesperson, dan simulasi crisis scenario. Mencakup juga pengembangan social media crisis response protocol dan media relations strategy.",
      category: "crisis-communication",
      tech: ["Risk Analysis", "Media Relations", "Social Listening", "Training", "Protocol Development"],
      image: "/images/project5.jpg",
      date: "2024",
      status: "Completed",
      metrics: {
        responseTime: "< 2 hours",
        sentimentRecovery: "90%",
        mediaReach: "2M+"
      }
    },
    {
      id: 6,
      title: "Internal Communication Audit",
      description: "Audit komprehensif sistem komunikasi internal perusahaan multinasional dan rekomendasi perbaikan untuk meningkatkan employee engagement.",
      longDescription: "Evaluasi menyeluruh terhadap channel komunikasi internal, survey employee satisfaction, analisis information flow, dan pengembangan strategi komunikasi internal yang lebih efektif. Termasuk implementasi digital communication tools.",
      category: "internal-communication",
      tech: ["Survey Design", "Data Analysis", "Change Management", "Digital Tools", "Training"],
      image: "/images/project6.jpg",
      date: "2024",
      status: "Completed",
      metrics: {
        satisfaction: "+35%",
        efficiency: "+50%",
        adoption: "85%"
      }
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Proyek' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'research', name: 'Research' },
    { id: 'branding', name: 'Branding' },
    { id: 'content-strategy', name: 'Content Strategy' },
    { id: 'crisis-communication', name: 'Crisis Communication' },
    { id: 'internal-communication', name: 'Internal Communication' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <Head>
        <title>Proyek - Indah Nur Syifa</title>
        <meta name="description" content="Portfolio proyek komunikasi Indah Nur Syifa" />
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
                  <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium">
                    Proyek
                  </Link>
                  <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Portfolio Proyek</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Kumpulan proyek komunikasi yang telah saya kerjakan, mulai dari digital marketing, 
                research, hingga brand strategy. Setiap proyek mencerminkan dedikasi saya dalam 
                menciptakan komunikasi yang efektif dan berdampak.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white dark:bg-blue-500'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center relative">
                    <div className="text-4xl">
                      {project.category === 'digital-marketing' && '📱'}
                      {project.category === 'research' && '📊'}
                      {project.category === 'branding' && '🎨'}
                      {project.category === 'content-strategy' && '✍️'}
                      {project.category === 'crisis-communication' && '🚨'}
                      {project.category === 'internal-communication' && '💬'}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                        Lihat Detail
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </button>
                      <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Github className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tidak ada proyek ditemukan</h3>
                <p className="text-gray-600 dark:text-gray-300">Coba pilih kategori lain atau lihat semua proyek</p>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Tertarik Berkolaborasi?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Saya selalu terbuka untuk proyek komunikasi yang menantang dan bermakna
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:indah@example.com"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Diskusi Proyek
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  )
}

