import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, GraduationCap, Award } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'
import { MobileNav } from '../components/MobileNav'

export default function About() {
  const education = [
    {
      degree: "Sarjana Ilmu Komunikasi",
      institution: "Universitas Indonesia",
      period: "2026 - 2030",
      description: "Fokus pada komunikasi digital, media massa, dan strategi komunikasi organisasi"
    }
  ]

  const achievements = [
    {
      title: "Best Communication Strategy",
      organization: "UI Communication Week 2025",
      year: "2025"
    },
    {
      title: "Outstanding Research Paper",
      organization: "National Communication Conference",
      year: "2025"
    },
    {
      title: "Social Media Campaign Winner",
      organization: "Digital Marketing Competition",
      year: "2025"
    }
  ]

  return (
    <>
      <Head>
        <title>Tentang Saya - Indah Nur Syifa</title>
        <meta name="description" content="Pelajari lebih lanjut tentang Indah Nur Syifa, mahasiswi Ilmu Komunikasi UI" />
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
                  <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                    Tentang
                  </Link>
                  <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
          <div className="max-w-4xl mx-auto">
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
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Tentang Saya</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Mengenal lebih dekat perjalanan dan passion saya di bidang komunikasi
              </p>
            </motion.div>

            {/* Profile Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 rounded-2xl flex items-center justify-center">
                  <div className="w-56 h-56 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">👩‍🎓</div>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-2">
                  <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Jakarta, Indonesia
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    Mahasiswa Aktif
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Halo, saya Indah!</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Saya adalah mahasiswi Ilmu Komunikasi di Universitas Indonesia yang memiliki 
                    passion besar dalam dunia komunikasi digital dan strategi media. Perjalanan 
                    akademis saya telah membentuk pemahaman mendalam tentang bagaimana komunikasi 
                    yang efektif dapat menciptakan dampak positif dalam masyarakat.
                  </p>
                  <p>
                    Dengan latar belakang pendidikan yang kuat dan pengalaman praktis dalam 
                    berbagai proyek komunikasi, saya selalu berusaha untuk mengintegrasikan 
                    teori komunikasi dengan aplikasi praktis di era digital. Saya percaya 
                    bahwa komunikasi yang baik adalah kunci untuk membangun hubungan yang 
                    bermakna dan menciptakan perubahan positif.
                  </p>
                  <p>
                    Saat ini, saya fokus pada pengembangan keahlian dalam digital marketing, 
                    content strategy, dan research communication. Tujuan saya adalah menjadi 
                    seorang communication strategist yang dapat membantu organisasi dan brand 
                    untuk berkomunikasi dengan lebih efektif di era digital.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
                Pendidikan
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="h-8 w-8 mr-3 text-blue-600" />
                Prestasi & Penghargaan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl mb-4">🏆</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{achievement.organization}</p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{achievement.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nilai & Prinsip</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">💡</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inovasi</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Selalu mencari cara baru dan kreatif untuk menyampaikan pesan yang efektif
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🤝</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Kolaborasi</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Percaya bahwa hasil terbaik dicapai melalui kerja sama dan sinergi tim
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dampak</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fokus pada komunikasi yang tidak hanya menarik, tetapi juga bermakna
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Mari Berkenalan Lebih Dekat</h2>
              <p className="text-xl text-blue-100 mb-8">
                Tertarik untuk berdiskusi tentang komunikasi atau berkolaborasi dalam proyek?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Lihat Proyek Saya
                </Link>
                <a
                  href="mailto:indah@example.com"
                  className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors"
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

