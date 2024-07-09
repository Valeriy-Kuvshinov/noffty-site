/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        return config
    },
    output: 'export',
    images: {
        unoptimized: true,  // Required for static export
        domains: ['res.cloudinary.com'],
        loader: 'custom',
        loaderFile: './src/scripts/cloudinaryLoader.ts',
    },
}
export default nextConfig