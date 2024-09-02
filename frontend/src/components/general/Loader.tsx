'use client'
import { useEffect, useState } from "react"
import { ImageContainer } from "./ImageContainer"

export function Loader() {
    const loaderGif = 'https://res.cloudinary.com/djzid7ags/image/upload/v1715092957/rofgvwuxaocbanu3fpzl.gif'
    const floor = 'https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/ogkkverm9r1wxupucbxp.avif'

    const [currentPhrase, setCurrentPhrase] = useState('')

    useEffect(() => {
        const phrases = [
            "Fetching data...",
            "Almost there...",
            "One moment...",
            "Loading content...",
            "Hang tight...",
            "Standby, gamer...",
            "Boiling the point...",
            "Cleansing corruption...",
            "Combining waves...",
            "Loading^2...",
            "Subscribe to T1mure!",
            "T2mure is also cool...",
            "Where is T3mure?"
        ]

        function getRandomPhrase() {
            const randomIndex = Math.floor(Math.random() * phrases.length)
            return phrases[randomIndex]
        }

        setCurrentPhrase(getRandomPhrase())
    }, [])

    return (<article className="loader-container flex column align-center">
        <span className="text-center">{currentPhrase}</span>
        <ImageContainer src={loaderGif} alt="Loading..." />
        <ImageContainer src={floor} alt="Loading..." />
    </article>)
}