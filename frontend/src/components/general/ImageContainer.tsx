'use client'
import { useImageLoader } from "../../hooks/imageLoader"

interface ImageContainerProps {
    src: string
    alt: string
    style?: React.CSSProperties
    className?: string
}

export function ImageContainer({ src, alt, style, className }: ImageContainerProps) {
    const { lowResSrc, highResSrc } = useImageLoader(src)

    return (
        <div className={`image-container w-100 ${className}`} style={style}>
            <img src={lowResSrc} alt={alt}
                className="w-100 h-100"
                style={{ display: highResSrc ? 'none' : 'block' }}
                aria-label="low resolution image" />

            {highResSrc && <img src={highResSrc} alt={alt}
                className="w-100 h-100"
                style={{ display: 'block' }}
                aria-label="high resolution image" />}
        </div>
    )
}