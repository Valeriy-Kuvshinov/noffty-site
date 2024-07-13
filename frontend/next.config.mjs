/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,  // Required for static export
        domains: ['res.cloudinary.com'],
        loader: 'custom',
        loaderFile: './src/scripts/cloudinaryLoader.ts',
    },
}
export default nextConfig