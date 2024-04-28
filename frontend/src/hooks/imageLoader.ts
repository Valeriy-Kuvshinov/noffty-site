import { useEffect, useState } from "react"

export function useImageLoader(imageUrl: string) {
    const lowResSrc = getLowResImageUrl(imageUrl)
    const [highResSrc, setHighResSrc] = useState('')

    useEffect(() => {
        const highResImg = new Image()

        highResImg.onload = () => setHighResSrc(imageUrl)
        highResImg.onerror = (err) =>
            console.error('Error loading high-res image', err)

        highResImg.src = imageUrl
    }, [imageUrl])

    return { lowResSrc, highResSrc }
}

function getLowResImageUrl(imageUrl: string) {
    const transformation = 'w_25,h_25,c_scale,e_blur:300,q_auto'
    const parts = imageUrl.split('/upload/')
    return `${parts[0]}/upload/${transformation}/${parts[1]}`
}