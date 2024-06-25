'use client'
import { useState, useRef, useEffect } from "react"
import { Game } from "../../models/game"
import { UtilityService } from "../../services/utility.service"
import { SvgRender } from "../general/SvgRender"

export function GameDetailsFrame({ game }: { game: Game }) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [allowAttributes, setAllowAttributes] = useState('')
    const iframeContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setAllowAttributes(UtilityService.getAllowAttributes())

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    function handleFullscreenChange() {
        const isCurrentlyFullscreen = document.fullscreenElement != null
        setIsFullscreen(isCurrentlyFullscreen)
    }

    function toggleFullscreen() {
        if (iframeContainerRef.current) {
            const element = iframeContainerRef.current as any

            if (isFullscreen) {
                if (document.exitFullscreen) document.exitFullscreen()
                setIsFullscreen(false)
            } else {
                if (element.requestFullscreen) element.requestFullscreen()
                setIsFullscreen(true)
            }
        }
    }

    return (<>
        {game.platform === 'html5' ? (
            <div className="game-frame flex column w-100 layout-row text-center">
                <h2>You Are Now Playing {game.name}</h2>
                <div className="iframe-container w-100" ref={iframeContainerRef}>
                    <iframe className={`w-100 ${isFullscreen ? 'fullscreen' : ''}`}
                        src={game.gameLink} title={game.name} allow={allowAttributes}
                        allowFullScreen={true} aria-label="game frame"
                    ></iframe>
                    <button onClick={toggleFullscreen} title="Toggle fullscreen?"
                        aria-label="frame fullscreen toggle">
                        <SvgRender iconName={isFullscreen ? 'compress' : 'expand'} />
                    </button>
                </div>
            </div>
        ) : (
            <div className="game-frame flex column w-100 text-center">
                <p>Whoa, looks like the game is not intended for the browser, but for
                    <span className="text-capitalize"> {game.platform}</span> instead.</p>
                <a href={game.outsideLink} className="flex row" target="_blank"
                    rel="noopener noreferrer" aria-label="Outside game navigation">
                    <SvgRender iconName={game.platform} />
                    <span>Take Me to The Game!</span>
                    <SvgRender iconName={game.platform} />
                </a>
            </div>)}
    </>)
}