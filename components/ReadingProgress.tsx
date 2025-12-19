'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0)
    const [isMounted, setIsMounted] = useState(false)
    const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

    useEffect(() => {
        setIsMounted(true)
        
        const updateProgress = () => {
            const scrollTop = window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
            setProgress(scrollPercent * 100)
            scaleX.set(scrollPercent)
        }

        window.addEventListener('scroll', updateProgress)
        updateProgress()

        return () => {
            window.removeEventListener('scroll', updateProgress)
        }
    }, [scaleX])

    if (!isMounted) {
        return null
    }

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60]">
            <motion.div
                className="h-full bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600 origin-left"
                style={{ scaleX }}
            />
            {/* Glow effect at the end */}
            {progress > 0 && (
                <motion.div
                    className="absolute top-0 h-full w-4 bg-kapribaden-gold-400 blur-sm"
                    style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </div>
    )
}
