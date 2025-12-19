'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingBar() {
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setLoading(false)
    }, [pathname])

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-gold-500 to-kapribaden-purple-600 z-50 animate-pulse">
                    <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>
            )}
        </>
    )
}
