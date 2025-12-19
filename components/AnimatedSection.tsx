'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    parallax?: boolean
}

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    parallax = false
}: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])

    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 }
    }

    const initial = {
        opacity: 0,
        ...directions[direction]
    }

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            style={parallax ? { y: parallaxY } : undefined}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1
}: {
    children: React.ReactNode
    className?: string
    staggerDelay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    className = ''
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.4, 0.25, 1]
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ParallaxText({
    children,
    className = '',
    speed = 0.5
}: {
    children: React.ReactNode
    className?: string
    speed?: number
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

export function FloatingElement({
    children,
    className = '',
    duration = 3,
    distance = 20
}: {
    children: React.ReactNode
    className?: string
    duration?: number
    distance?: number
}) {
    return (
        <motion.div
            animate={{
                y: [-distance / 2, distance / 2, -distance / 2],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function RevealText({
    text,
    className = '',
    delay = 0
}: {
    text: string
    className?: string
    delay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const words = text.split(' ')

    return (
        <motion.span ref={ref} className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}
