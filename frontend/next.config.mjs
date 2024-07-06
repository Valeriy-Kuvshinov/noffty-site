/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        return config
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: process.env.NODE_ENV === 'production'
                    ? '/api/:path*'  // In production, this will hit your actual API
                    : 'http://localhost:3030/api/:path*', // In development, proxy to your local backend
            },
        ]
    },
}
export default nextConfig