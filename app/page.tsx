'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParallaxHero from '../components/ParallaxHero'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import ContentCard, { FeatureCard, QuoteCard } from '../components/ContentCard'

// Pre-defined particle positions to avoid hydration mismatch
const sabdhoParticles = [
    { left: 8, top: 12, duration: 2.5, delay: 0.3 },
    { left: 22, top: 28, duration: 3.0, delay: 0.6 },
    { left: 38, top: 8, duration: 2.8, delay: 0.9 },
    { left: 52, top: 42, duration: 3.5, delay: 0.2 },
    { left: 68, top: 18, duration: 2.6, delay: 0.7 },
    { left: 82, top: 32, duration: 3.2, delay: 0.4 },
    { left: 12, top: 58, duration: 2.9, delay: 1.0 },
    { left: 28, top: 72, duration: 3.3, delay: 0.5 },
    { left: 42, top: 52, duration: 2.4, delay: 0.8 },
    { left: 58, top: 78, duration: 3.6, delay: 0.1 },
    { left: 72, top: 62, duration: 2.7, delay: 0.6 },
    { left: 88, top: 48, duration: 3.1, delay: 0.9 },
    { left: 5, top: 82, duration: 2.5, delay: 0.2 },
    { left: 18, top: 88, duration: 3.4, delay: 0.7 },
    { left: 32, top: 22, duration: 2.8, delay: 0.4 },
    { left: 48, top: 68, duration: 3.7, delay: 1.0 },
    { left: 62, top: 38, duration: 2.3, delay: 0.5 },
    { left: 78, top: 82, duration: 3.0, delay: 0.8 },
    { left: 92, top: 12, duration: 2.6, delay: 0.3 },
    { left: 15, top: 42, duration: 3.2, delay: 0.6 },
]

export default function Home() {
    const containerRef = useRef(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

    const pancaGaib = [
        { title: 'Kunci', desc: 'Sarana untuk mengenal Hidup dalam diri kita', icon: '🔑' },
        { title: 'Paweling', desc: 'Manunggal dengan Yang Maha Esa', icon: '🕊️' },
        { title: 'Mijil', desc: 'Menyatukan Raga dengan Hidup', icon: '🌟' },
        { title: 'Singkir', desc: 'Menipiskan "AKU" dalam diri', icon: '🌊' },
        { title: 'Asmo', desc: 'Nama untuk Hidup kita', icon: '✨' },
    ]

    const lakuPangumbah = [
        { title: 'Sabar', desc: 'Seperti seorang Ibu mengandung, penuh cinta kasih' },
        { title: 'Narimo', desc: 'Berusaha semaksimal mungkin, hasil serahkan kepada Tuhan' },
        { title: 'Ngalah', desc: 'Mengalah dengan senang hati, hanya pemenang yang bisa mengalah' },
        { title: 'Tresno Welas Asih', desc: 'Cinta kasih kepada apa dan siapa saja' },
        { title: 'Ikhlas', desc: 'Menyadari segala yang ada adalah titipan Tuhan' },
    ]

    return (
        <div ref={containerRef} className="overflow-hidden">
            {/* Parallax Hero Section */}
            <ParallaxHero
                title="Paguyuban Penghayat Kapribaden"
                subtitle="Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil"
                showLogo={true}
            />

            {/* Introduction Section */}
            <section className="relative py-24 bg-white">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        style={{ y: backgroundY }}
                        className="absolute -top-40 -right-40 w-96 h-96 bg-kapribaden-purple-100 rounded-full opacity-50"
                    />
                    <motion.div
                        style={{ y: backgroundY }}
                        className="absolute -bottom-40 -left-40 w-80 h-80 bg-kapribaden-gold-100 rounded-full opacity-50"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-kapribaden-purple-900 mb-6">
                            Tentang Paguyuban ini
                        </h2>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection direction="left">
                            <div className="prose prose-lg">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    Paguyuban Penghayat Kapribaden adalah wadah yang <strong>SAH</strong> bagi semua Putro Romo dimanapun berada,
                                    untuk melestarikan Panca Gaib dan wulang wuruk Romo Semono Sastrohadidjojo (Romo Herucokro Semono).
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Kapribaden didirikan atas dasar Sabdho ROMO pada tanggal 29 April 1978, yang terkenal dengan
                                    sabdho &quot;Honocoroko&quot; karena ditulis memakai huruf Jawa Honocoroko, dan ini merupakan satu-satunya
                                    sabdho ROMO yang tertulis.
                                </p>

                                <div className="mt-6 p-4 bg-kapribaden-purple-50 rounded-lg border border-kapribaden-purple-200">
                                    <p className="text-lg font-semibold text-kapribaden-purple-800 mb-3">
                                        Paguyuban Penghayat Kapribaden (Kapribaden) terdaftar pada :
                                    </p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Terdaftar pada DEPDIKBUD R.I. : No. 1.099/F.3/N.1.1/1980</li>
                                        <li>• Terdaftar pada DEPDAGRI sesuai UU No. 8/1985</li>
                                        <li>• Terdaftar pada Kejaksaan Agung R.I. : No. 250 tahun 1986</li>
                                        <li>• Tanda Pemaparan Ajaran oleh DEPDIKBUD R.I. : No. 31/F.6/F.5/1988</li>
                                        <li>• Pengumuman Pemerintah tentang Organisasi Organisasi Kemasyarakatan yang Sah Tingkat Nasional, bernomor 324.</li>
                                        <li>• Surat Keterangan Terdaftar di DEPDAGRI No : 29/D.III.3/III/2008.</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <div className="relative max-w-sm mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-600 to-kapribaden-gold-500 rounded-3xl transform rotate-3 scale-105 opacity-20" />
                                <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 overflow-hidden group">
                                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4">
                                        <Image
                                            src="/images/romo.jpeg"
                                            alt="Romo Herucokro Semono"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-kapribaden-purple-950/80 to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <p className="font-bold text-lg">Romo Herucokro Semono</p>
                                            <p className="text-sm text-gray-200">Pendiri Paguyuban Kapribaden</p>
                                        </div>
                                    </div>

                                    <div className="text-center px-4 pb-2">
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <div className="h-px w-8 bg-kapribaden-purple-200" />
                                            <span className="text-kapribaden-gold-600 text-sm font-semibold tracking-wider uppercase">Didirikan</span>
                                            <div className="h-px w-8 bg-kapribaden-purple-200" />
                                        </div>
                                        <p className="text-2xl font-bold text-kapribaden-purple-800">
                                            29 April 1978
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">Sejiwan, Purworejo</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Sabdho Honocoroko Section - Dark Parallax */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-kapribaden-purple-950" />
                <motion.div
                    className="absolute inset-0"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-kapribaden-purple-800/30 via-transparent to-transparent" />
                    {/* Animated particles - only render after mount to avoid hydration mismatch */}
                    {isMounted && sabdhoParticles.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-kapribaden-gold-400 rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </motion.div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Sabdho Tinulis
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <QuoteCard
                            quote="ROMO Mangestoni, Putro-Putro Kudu Ngakoni Putro ROMO"
                            author="Romo Herucokro Semono"
                            date="29 April 1978 - Sejiwan, Purworejo"
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="mt-8">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Satu-satunya Sabdo Tinulis dengan huruf Jawa (Honocoroko),
                            menjadi dasar berdirinya Paguyuban Penghayat Kapribaden.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Tujuan Section */}
            <section className="relative py-24 bg-gradient-to-b from-white to-kapribaden-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-kapribaden-purple-900 mb-6">
                            Tujuan Penghayatan
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection direction="left">
                            <ContentCard variant="purple" className="h-full">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-kapribaden-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-3xl">🙏</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3">Hidup Bahagia</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Agar manusia dapat hidup bahagia (tentrem) di dunia ini, menjalani kehidupan dengan penuh kedamaian dan ketenangan batin.
                                        </p>
                                    </div>
                                </div>
                            </ContentCard>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <ContentCard variant="gold" className="h-full">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-kapribaden-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-3xl">✨</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3">Kasampurnan Jati</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Pada akhir hayatnya bisa mencapai &quot;Kasampurnan Jati&quot; (Moksha), manunggal dengan Yang Maha Esa.
                                        </p>
                                    </div>
                                </div>
                            </ContentCard>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection className="mt-12">
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-kapribaden-purple-100">
                            <p className="text-center text-lg text-gray-700 leading-relaxed">
                                Laku ini bersifat <strong className="text-kapribaden-purple-700">universal</strong>, tidak membeda-bedakan manusia dari segi apapun
                                (derajat-pangkat, kekayaan, status sosial, suku, bangsa, budaya, agama dan lain-lain).
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Panca Gaib Section */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-kapribaden-purple-900 mb-6">
                            Panca Gaib
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Lima sarana gaib dari Romo Herucokro Semono untuk mencapai kasampurnan
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                        {pancaGaib.map((item, index) => (
                            <StaggerItem key={item.title}>
                                <FeatureCard
                                    icon={<span className="text-4xl">{item.icon}</span>}
                                    title={item.title}
                                    description={item.desc}
                                    index={index}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Laku Pangumbahing Rogo Section */}
            <section className="relative py-24 bg-kapribaden-purple-950 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kapribaden-purple-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-kapribaden-gold-900/20 to-transparent" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Laku Pangumbahing Rogo
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Lima laku untuk membersihkan raga dan mencapai kesempurnaan
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lakuPangumbah.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-kapribaden-purple-900/50 border border-kapribaden-purple-800 rounded-2xl p-6 h-full"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-kapribaden-gold-500 to-kapribaden-gold-600 rounded-xl flex items-center justify-center text-kapribaden-purple-900 font-bold text-xl">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative py-32 bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-kapribaden-purple-100 via-kapribaden-gold-50 to-kapribaden-purple-100 rounded-full opacity-50 blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold text-kapribaden-purple-900 mb-6">
                            Pelajari Lebih Lanjut
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            Jelajahi halaman-halaman berikut untuk memahami lebih dalam tentang Kapribaden dan ajaran Romo Herucokro Semono
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/romo">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary"
                                >
                                    Tentang Romo
                                </motion.button>
                            </Link>
                            <Link href="/kapribaden">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-secondary"
                                >
                                    Ajaran Kapribaden
                                </motion.button>
                            </Link>
                            <Link href="/buku-hidup-bahagia">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-outline"
                                >
                                    Buku Hidup Bahagia
                                </motion.button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
