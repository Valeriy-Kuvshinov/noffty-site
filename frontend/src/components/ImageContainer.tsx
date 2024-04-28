'use client'
import { useImageLoader } from "../hooks/imageLoader"

interface imageContainer {
    src: string
    alt: string
}

export function ImageContainer({ src, alt }: imageContainer) {
    const { lowResSrc, highResSrc } = useImageLoader(src)

    return (
        <>
            <img src={lowResSrc} alt={alt}
                className="w-100"
                style={{ display: highResSrc ? 'none' : 'block' }} />

            {highResSrc && <img src={highResSrc} alt={alt}
                className="w-100" style={{ display: 'block' }} />}
        </>
    )
}