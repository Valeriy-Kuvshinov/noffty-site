/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        // console.log('Webpack rules:', config.module.rules);
        return config
    }
}

export default nextConfig