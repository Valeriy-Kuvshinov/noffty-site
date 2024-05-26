'use client'
import { useEffect, useState } from "react"

export function Loader() {
    const loaderGif = 'https://res.cloudinary.com/djzid7ags/image/upload/v1715092957/rofgvwuxaocbanu3fpzl.gif'
    const floor = 'https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/ogkkverm9r1wxupucbxp.avif'
    const phrases = [
        "Fetching data...",
        "Almost there...",
        "Getting info...",
        "One moment...",
        "Loading content...",
        "Hang tight...",
        "In a second...",
        "Standby, gamer...",
        "Among us!?",
        "Follow T1mure!",
        "T2mure is nice..."
    ]

    const [currentPhrase, setCurrentPhrase] = useState('')

    useEffect(() => {
        setCurrentPhrase(getRandomPhrase())
    }, [])

    function getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * phrases.length)
        return phrases[randomIndex]
    }

    return (
        <article className="loader-container flex column">
            <span className="text-center">{currentPhrase}</span>
            <img src={loaderGif} alt="Loading.." />
            <img src={floor} alt="Loading.." />
        </article>
    )
}