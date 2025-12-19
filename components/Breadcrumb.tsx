'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
    const pathname = usePathname()

    // Generate breadcrumb items from pathname
    const generateBreadcrumbs = () => {
        const paths = pathname.split('/').filter((path) => path)

        const breadcrumbs = [
            { label: 'Home', href: '/' }
        ]

        let currentPath = ''
        paths.forEach((path) => {
            currentPath += `/${path}`

            // Convert path to readable label
            const label = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')

            breadcrumbs.push({
                label,
                href: currentPath
            })
        })

        return breadcrumbs
    }

    const breadcrumbs = generateBreadcrumbs()

    // Don't show breadcrumb on homepage
    if (pathname === '/') {
        return null
    }

    return (
        <nav className="bg-white/80 backdrop-blur-sm border-b border-kapribaden-purple-100 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={crumb.href} className="flex items-center">
                            {index > 0 && (
                                <svg
                                    className="w-4 h-4 text-gray-400 mx-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-kapribaden-purple-700 font-medium">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="text-gray-600 hover:text-kapribaden-purple-700 transition-colors duration-200"
                                >
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}
