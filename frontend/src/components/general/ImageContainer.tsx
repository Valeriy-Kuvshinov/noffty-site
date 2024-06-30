'use client'
import { useState, useEffect } from "react"

interface ImageContainerProps {
    src: string
    alt: string
    style?: React.CSSProperties
    className?: string
}

export function ImageContainer({ src, alt, style, className }: ImageContainerProps) {
    const lowResSrc = getLowResImageUrl(src)
    const [highResSrc, setHighResSrc] = useState('')

    useEffect(() => {
        let isCancelled = false
        const highResImg = new Image()

        highResImg.onload = () => {
            if (!isCancelled) setHighResSrc(src)
        }
        highResImg.onerror = (err) => {
            if (!isCancelled) console.error('Error loading high-res image', err)
        }

        const timer = setTimeout(() => highResImg.src = src, 100)

        return () => {
            isCancelled = true
            clearTimeout(timer)
        }
    }, [src])

    // Helper function to generate the low-resolution image URL
    function getLowResImageUrl(imageUrl: string) {
        const transformation = 'w_25,h_25,c_scale,e_blur:300,q_auto'
        const parts = imageUrl.split('/upload/')
        return `${parts[0]}/upload/${transformation}/${parts[1]}`
    }

    return (<div className={`image-container w-100 ${className}`} style={style}>
        <img src={lowResSrc} alt={alt} className="w-h-100"
            style={{ display: highResSrc ? 'none' : 'block' }}
            aria-label="low resolution image" />

        {highResSrc && <img src={highResSrc} alt={alt}
            className="w-h-100" style={{ display: 'block' }}
            aria-label="high resolution image" />}
    </div>)
}