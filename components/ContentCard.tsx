'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

interface ContentCardProps {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'gold' | 'purple' | 'dark'
    hover?: boolean
}

export default function ContentCard({
    children,
    className = '',
    variant = 'default',
    hover = true
}: ContentCardProps) {
    const ref = useRef(null)

    const variants = {
        default: 'bg-white border-l-4 border-kapribaden-purple-600',
        gold: 'bg-gradient-to-br from-kapribaden-gold-50 to-white border-l-4 border-kapribaden-gold-500',
        purple: 'bg-gradient-to-br from-kapribaden-purple-50 to-white border-l-4 border-kapribaden-purple-600',
        dark: 'bg-kapribaden-purple-900 text-white border-l-4 border-kapribaden-gold-500'
    }

    return (
        <motion.div
            ref={ref}
            className={`
                relative overflow-hidden rounded-2xl shadow-lg p-8
                ${variants[variant]}
                ${hover ? 'cursor-pointer' : ''}
                ${className}
            `}
            whileHover={hover ? {
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(21, 128, 61, 0.25)'
            } : undefined}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600" />
            
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Hover Glow Effect */}
            {hover && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-500/5 to-kapribaden-gold-500/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    )
}

export function FeatureCard({
    icon,
    title,
    description,
    index = 0
}: {
    icon?: React.ReactNode
    title: string
    description: string
    index?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-600 to-kapribaden-gold-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:border-kapribaden-purple-200 transition-colors duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-kapribaden-purple-600 to-kapribaden-purple-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                </div>

                {icon && (
                    <div className="w-16 h-16 bg-gradient-to-br from-kapribaden-purple-100 to-kapribaden-gold-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                )}

                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3 group-hover:text-kapribaden-purple-600 transition-colors">
                    {title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kapribaden-purple-600 to-kapribaden-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
        </motion.div>
    )
}

export function QuoteCard({
    quote,
    author,
    date
}: {
    quote: string
    author?: string
    date?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="absolute -top-6 left-8 text-8xl text-kapribaden-gold-300 font-serif leading-none">
                &quot;
            </div>
            
            <div className="bg-gradient-to-br from-kapribaden-purple-900 to-kapribaden-purple-950 rounded-2xl p-10 pt-12 shadow-2xl">
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 italic">
                    {quote}
                </p>
                
                {(author || date) && (
                    <div className="flex items-center justify-between border-t border-kapribaden-purple-700 pt-6">
                        {author && (
                            <span className="text-kapribaden-gold-400 font-semibold">
                                — {author}
                            </span>
                        )}
                        {date && (
                            <span className="text-kapribaden-purple-400 text-sm">
                                {date}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export function StatCard({
    number,
    label,
    suffix = ''
}: {
    number: string
    label: string
    suffix?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
        >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-kapribaden-purple-600 to-kapribaden-gold-600 bg-clip-text text-transparent mb-2">
                {number}{suffix}
            </div>
            <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                {label}
            </div>
        </motion.div>
    )
}
