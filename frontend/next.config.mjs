/** @type {import('next').NextConfig} */
import path from 'path'
// const nextConfig = {}

// export default nextConfig

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ],
            include: path.resolve('src/assets/stylus')
        })
        return config
    }
}

export default nextConfig