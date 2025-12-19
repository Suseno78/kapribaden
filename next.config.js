/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimize images
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    // Optimize production builds
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Enable experimental features for better performance
    experimental: {
        optimizeCss: true,
    },
}

module.exports = nextConfig
