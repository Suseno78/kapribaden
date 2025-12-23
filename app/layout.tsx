import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import ReadingProgress from '../components/ReadingProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Paguyuban Penghayat Kapribaden',
    description: 'Website resmi Paguyuban Penghayat Kapribaden - Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil',
    keywords: ['Kapribaden', 'Paguyuban', 'Romo Herucokro Semono', 'Spiritual', 'Kasampurnan'],
    icons: {
        icon: '/images/logo-kunci-removebg-preview.png',
        shortcut: '/images/logo-kunci-removebg-preview.png',
        apple: '/images/logo-kunci-removebg-preview.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`} suppressHydrationWarning>
                <ReadingProgress />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </body>
        </html>
    )
}
