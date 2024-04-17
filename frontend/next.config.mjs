import path from 'path'
/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
    webpack: (config, { isServer, dev }) => {
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
console.log('attempt to find path', path.resolve('src/assets/stylus'))

export default nextConfig
