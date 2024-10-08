'use client'
import Image, { ImageLoaderProps } from 'next/image'
import { useState, useEffect } from "react"

interface ImageContainerProps {
    src: string
    alt: string
    style?: React.CSSProperties
    className?: string
    width?: number
    height?: number
    onClick?: () => void
}

function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    const [baseUrl, imagePath] = src.split('/upload/')
    return `${baseUrl}/upload/${params.join(',')}/${imagePath}`
}

export function ImageContainer({ src, alt, style, className, width, height, onClick }: ImageContainerProps) {
    const [dimensions, setDimensions] = useState({
        width: width || 100, height: height || 100
    })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (src && (!width || !height)) {
            const img = new window.Image()
            img.onload = () => {
                setDimensions({ width: img.width, height: img.height })
            }
            img.src = src
        }
    }, [src, width, height])

    if (!src) return null

    return (<div className={`image-container flex w-100 ${className}`} style={style} onClick={onClick}>
        <Image loader={cloudinaryLoader} src={src} alt={alt}
            width={dimensions.width} height={dimensions.height}
            className={`w-h-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)} placeholder="blur"
            blurDataURL={cloudinaryLoader({ src, width: 25, quality: 1 })}
        />
    </div>)
}