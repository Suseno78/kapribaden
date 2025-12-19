'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2024)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        setCurrentYear(new Date().getFullYear())
    }, [])

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/romo', label: 'Romo Herucokro Semono' },
        { href: '/kapribaden', label: 'Kapribaden' },
        { href: '/buku-hidup-bahagia', label: 'Buku Hidup Bahagia' },
        { href: '/album', label: 'Album' },
        { href: '/pedoman', label: 'Pedoman' },
        { href: '/pasaran', label: 'Jumlah Hari & Pasaran' },
    ]

    if (!isMounted) {
        return (
            <footer className="relative bg-kapribaden-purple-950 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-kapribaden-gold-400 mb-4">
                            Paguyuban Penghayat Kapribaden
                        </h3>
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <footer className="relative bg-kapribaden-purple-950 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600" />
            
            <div className="absolute top-20 right-0 w-96 h-96 bg-kapribaden-purple-800 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-kapribaden-gold-600 rounded-full opacity-10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Top Section with Logo */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20">
                            <Image
                                src="/images/logo-kunci-removebg-preview.png"
                                alt="Logo Kapribaden"
                                width={80}
                                height={80}
                                className="object-contain opacity-80"
                            />
                        </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-kapribaden-gold-400 mb-4">
                        Paguyuban Penghayat Kapribaden
                    </h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                            Tentang Kami
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-kapribaden-gold-500 rounded-full" />
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                            Penghayatan spiritual yang bersifat universal untuk mencapai kebahagiaan sejati dan kasampurnan jati.
                        </p>
                        <div className="flex items-center space-x-3 text-kapribaden-gold-400 pt-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">Didirikan 29 April 1978</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                            Menu Utama
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-kapribaden-gold-500 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            {menuItems.slice(0, 4).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-kapribaden-gold-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-kapribaden-gold-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* More Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                            Lainnya
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-kapribaden-gold-500 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            {menuItems.slice(4).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-kapribaden-gold-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-kapribaden-gold-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Sabdho */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                            Sabdho Honocoroko
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-kapribaden-gold-500 rounded-full" />
                        </h4>
                        <div className="bg-kapribaden-purple-900 p-6 rounded-2xl border border-kapribaden-purple-800">
                            <p className="text-kapribaden-gold-400 text-lg italic leading-relaxed">
                                &quot;ROMO Mangestoni, Putro-Putro Kudu Ngakoni Putro ROMO&quot;
                            </p>
                            <p className="text-gray-500 text-sm mt-3">
                                29 April 1978 - Sejiwan, Purworejo
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-kapribaden-purple-800 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            &copy; {currentYear} Paguyuban Penghayat Kapribaden.
                            <span className="text-kapribaden-gold-500 ml-1">Semua hak dilindungi.</span>
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Made with</span>
                            <motion.svg 
                                className="w-5 h-5 text-red-500" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </motion.svg>
                            <span>for Kapribaden</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
