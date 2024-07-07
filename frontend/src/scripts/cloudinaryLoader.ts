import { ImageLoaderProps } from 'next/image'

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    const [baseUrl, imagePath] = src.split('/upload/')
    return `${baseUrl}/upload/${params.join(',')}/${imagePath}`
}