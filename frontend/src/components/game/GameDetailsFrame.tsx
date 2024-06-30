'use client'
import { useState, useRef, useEffect } from "react"
import { Game } from "../../models/game"
import { UtilityService } from "../../services/utility.service"
import { SvgRender } from "../general/SvgRender"
import Link from "next/link"

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

    return (<div className="game-frame flex column w-100 text-center">
        <h2>You Are Now Playing {game.name}</h2>
        {game.platform === 'html5' ? (
            game.gameLink ? (
                <div className="iframe-container w-100" ref={iframeContainerRef}>
                    <iframe
                        className={`w-100 ${isFullscreen ? 'fullscreen' : ''}`}
                        src={game.gameLink} title={game.name} allow={allowAttributes}
                        allowFullScreen={true} aria-label="game frame"
                    ></iframe>
                    <button onClick={toggleFullscreen} title="Toggle fullscreen?"
                        aria-label="frame fullscreen toggle">
                        <SvgRender iconName={isFullscreen ? 'compress' : 'expand'} />
                    </button>
                </div>
            ) : (<>
                <p>Sorry, seems like the game is not published yet or inaccessible right now.</p>
                <Link href={`/contact`} className="flex row" aria-label="Navigate to contact page?">
                    <SvgRender iconName='mail' />
                    <span>Contact The Owner?</span>
                    <SvgRender iconName='mail' />
                </Link>
            </>)
        ) : (<>
            <p>
                Whoa, looks like the game is not intended for the browser, but for
                <span className="text-capitalize"> {game.platform}</span> instead.
            </p>
            <a href={game.outsideLink} className="flex row" target="_blank"
                rel="noopener noreferrer" aria-label="Navigate to game's actual platform?">
                <SvgRender iconName={game.platform} />
                <span>Take Me to The Game!</span>
                <SvgRender iconName={game.platform} />
            </a>
        </>
        )}
    </div>)
}