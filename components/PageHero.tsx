'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface PageHeroProps {
    title: string
    subtitle?: string
    breadcrumb?: { label: string; href: string }[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section
            ref={ref}
            className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-center justify-center"
        >
            {/* Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-950 via-kapribaden-purple-900 to-kapribaden-purple-950"
            >
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-kapribaden-gold-500/30 rounded-full"
                            style={{
                                width: `${150 + i * 100}px`,
                                height: `${150 + i * 100}px`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30 + i * 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kapribaden-purple-950/80 via-transparent to-kapribaden-purple-950/50" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20"
            >
                {breadcrumb && breadcrumb.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <ol className="flex items-center justify-center space-x-2 text-sm">
                            {breadcrumb.map((item, index) => (
                                <li key={item.href} className="flex items-center">
                                    {index > 0 && (
                                        <svg className="w-4 h-4 mx-2 text-kapribaden-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    <a
                                        href={item.href}
                                        className={`${
                                            index === breadcrumb.length - 1
                                                ? 'text-kapribaden-gold-400 font-medium'
                                                : 'text-gray-400 hover:text-white transition-colors'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </motion.nav>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-kapribaden-gold-300"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-kapribaden-gold-500 to-transparent"
                />
            </motion.div>
        </section>
    )
}
