'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="relative w-12 h-12" />
                            <span className="text-2xl font-bold text-kapribaden-gold-400">Kapribaden</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-kapribaden-purple-950 shadow-2xl py-2' 
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <motion.div 
                            className="relative w-12 h-12"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/images/logo-kunci-removebg-preview.png"
                                alt="Logo Kapribaden"
                                width={48}
                                height={48}
                                className="object-contain drop-shadow-lg"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </motion.div>
                        <motion.span 
                            className="text-2xl font-bold text-kapribaden-gold-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            Kapribaden
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-kapribaden-gold-400 transition-colors duration-300 group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <motion.div 
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-kapribaden-gold-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full origin-left"
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full"
                                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full origin-left"
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:hidden overflow-hidden bg-kapribaden-purple-950"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-lg font-medium text-white hover:text-kapribaden-gold-400 hover:bg-kapribaden-purple-900 rounded-xl transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
