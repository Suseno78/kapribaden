'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface ParallaxHeroProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    showLogo?: boolean
    height?: string
}

// Pre-defined particle positions to avoid hydration mismatch
const particlePositions = [
    { left: 10, top: 15, duration: 3.5, delay: 0.2 },
    { left: 25, top: 30, duration: 4.0, delay: 0.5 },
    { left: 40, top: 10, duration: 3.2, delay: 0.8 },
    { left: 55, top: 45, duration: 4.5, delay: 0.1 },
    { left: 70, top: 20, duration: 3.8, delay: 0.6 },
    { left: 85, top: 35, duration: 4.2, delay: 0.3 },
    { left: 15, top: 60, duration: 3.6, delay: 0.9 },
    { left: 30, top: 75, duration: 4.1, delay: 0.4 },
    { left: 45, top: 55, duration: 3.3, delay: 0.7 },
    { left: 60, top: 80, duration: 4.4, delay: 0.2 },
    { left: 75, top: 65, duration: 3.9, delay: 0.5 },
    { left: 90, top: 50, duration: 4.0, delay: 0.8 },
    { left: 5, top: 85, duration: 3.4, delay: 0.1 },
    { left: 20, top: 90, duration: 4.3, delay: 0.6 },
    { left: 35, top: 25, duration: 3.7, delay: 0.3 },
    { left: 50, top: 70, duration: 4.6, delay: 0.9 },
    { left: 65, top: 40, duration: 3.1, delay: 0.4 },
    { left: 80, top: 85, duration: 4.2, delay: 0.7 },
    { left: 95, top: 15, duration: 3.5, delay: 0.2 },
    { left: 12, top: 45, duration: 4.0, delay: 0.5 },
]

export default function ParallaxHero({
    title,
    subtitle,
    backgroundImage = '/images/batik-pattern.png',
    showLogo = false,
    height = 'h-screen'
}: ParallaxHeroProps) {
    const ref = useRef(null)
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section
            ref={ref}
            className={`relative ${height} overflow-hidden flex items-center justify-center`}
        >
            {/* Animated Background Layer */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-950 via-kapribaden-purple-900 to-kapribaden-purple-950" />
                
                {/* Animated Geometric Patterns */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-kapribaden-gold-500/20 rounded-full"
                                style={{
                                    width: `${100 + i * 80}px`,
                                    height: `${100 + i * 80}px`,
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    rotate: {
                                        duration: 20 + i * 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    scale: {
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Particles - only render after mount to avoid hydration mismatch */}
                {isMounted && (
                    <div className="absolute inset-0">
                        {particlePositions.map((particle, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute w-1 h-1 bg-kapribaden-gold-400 rounded-full"
                                style={{
                                    left: `${particle.left}%`,
                                    top: `${particle.top}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: particle.duration,
                                    repeat: Infinity,
                                    delay: particle.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Golden Light Rays */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={`ray-${i}`}
                            className="absolute top-1/2 left-1/2 w-1 h-[50%] origin-bottom bg-gradient-to-t from-kapribaden-gold-500/20 to-transparent"
                            style={{
                                transform: `rotate(${i * 30}deg) translateX(-50%)`,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                {showLogo && (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-kapribaden-gold-500 rounded-full blur-2xl opacity-30"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <Image
                                src="/images/logo-kunci-removebg-preview.png"
                                alt="Logo Kunci Kapribaden"
                                width={150}
                                height={150}
                                className="relative z-10 drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
                >
                    <span className="block bg-gradient-to-r from-white via-kapribaden-gold-300 to-white bg-clip-text text-transparent">
                        {title}
                    </span>
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-kapribaden-gold-300 font-light tracking-wide"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-8 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-kapribaden-gold-500 to-transparent"
                />

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center text-kapribaden-gold-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
