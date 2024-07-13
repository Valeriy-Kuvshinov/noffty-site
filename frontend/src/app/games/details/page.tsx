'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Game } from "../../../interfaces/game"
import { utilityService } from '../../../services/utility-service'
import { gameService } from "../../../services/api/game-service"
import { ErrorContainer } from "../../../components/general/ErrorContainer"
import { Loader } from "../../../components/general/Loader"
import { SvgRender } from '../../../components/general/SvgRender'
import { ImageContainer } from '../../../components/general/ImageContainer'
import { ReworkedText } from '../../../components/general/ReworkedText'

export default function GameDetails() {
    const searchParams = useSearchParams()
    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchGame() {
            const gameName = searchParams.get('name')
            if (!gameName) {
                setError("No game name provided.")
                setLoading(false)
                return
            }
            try {
                const fetchedGame = await gameService.getByName(gameName)
                if (fetchedGame) setGame(fetchedGame)
                else setError(`Sorry, no game found matching ${gameName}.`)
            } catch (err) {
                console.error("Failed to fetch game", err)
                setError("An error occurred while fetching the game.")
            } finally {
                setLoading(false)
            }
        }
        fetchGame()
    }, [searchParams])

    return (<main className="game-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorContainer message={error} />
            ) : game ? (<>
                <GameDetailsFrame game={game} />
                <GameDetailsBody game={game} />
            </>
            ) : null}
        </section>
    </main>)
}

function GameDetailsFrame({ game }: { game: Game }) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [allowAttributes, setAllowAttributes] = useState('')
    const iframeContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setAllowAttributes(utilityService.getAllowAttributes())

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
        <h2>You Are Now Playing {game.title}</h2>
        {game.platform === 'html5' ? (
            game.gameLink ? (
                <div className="iframe-container w-100" ref={iframeContainerRef}>
                    <iframe
                        className={`w-100 ${isFullscreen ? 'fullscreen' : ''}`}
                        src={game.gameLink} title={game.title} allow={allowAttributes}
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

function GameDetailsBody({ game }: { game: Game }) {
    const gridTemplateColumns = `repeat(${game.screenshots.length - 1}, 1fr)`
    const isSpecialGame = game.title === "Stoic^2" || game.title === "Absurd^2"

    return (<article className="game-body flex column w-100 layout-row">
        <h3 className="text-center text-capitalize">{game.subtitle}</h3>
        <div className={`screenshots grid ${game.platform !== 'android' ? 'w-100' : ''}`}
            style={{ gridTemplateColumns }}>
            {game.screenshots.slice(1).map((screenshot, index) => (
                <ImageContainer key={index} src={screenshot}
                    alt={`${game.title} screenshot number ${index + 1}`}
                    className={`h-100 ${game.platform !== 'android' ? 'w-100' : ''}`}
                    style={{
                        maxHeight: game.screenshots.length < 5 ? '215px' : 'auto',
                        aspectRatio: game.platform !== 'android' ? '16 / 9' : '9 / 16'
                    }}
                />
            ))}
        </div>
        <ReworkedText string={game.description!} />
        <ReworkedText string={`Controls: ${game.controls!}`} />
        <ReworkedText string={game.credits!} />
        {game.specialNote && (
            isSpecialGame ? (
                <ReworkedText string={game.specialNote!} custom="special" />
            ) : (
                <ReworkedText string={game.specialNote!} />
            )
        )}
        <div className="video-wrapper grid w-100">
            {game.walkthrough && (
                <div className="video flex column w-100">
                    <p>{`If you're stuck, we've got you covered:`}</p>
                    <iframe src={utilityService.getYouTubeEmbedUrl(game.walkthrough)}
                        title="Game Walkthrough" allowFullScreen={true}
                        aria-label="Video walkthrough for the game"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            )}
            {game.devlog && (
                <div className="video flex column w-100">
                    <p>{`Be sure to check out the developer's log:`}</p>
                    <iframe src={utilityService.getYouTubeEmbedUrl(game.devlog)}
                        title="Developer's Log" allowFullScreen={true}
                        aria-label="Video devlog about the game"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            )}
        </div>
        <div className="game-info flex column w-100">
            <p className="flex">
                <span className="text-right">Published</span>
                {utilityService.formatDate(game.createdAt!)} GMT / UTC
            </p>
            <p className="flex">
                <span className="text-right">Platform</span>
                {game.platform.includes('html5') ?
                    utilityService.upperCaseString(game.platform) :
                    utilityService.capitalizeString(game.platform)}
            </p>
            <p className="flex">
                <span className="text-right">Genre</span>
                {game.genre?.map(genre => utilityService.capitalizeString(genre)).join(', ')}
            </p>
            {game.outsideLink?.includes('itch.io') && (
                <a href={game.outsideLink} target="_blank" aria-label="navigation to itch.io" title="Go to itch.io?"
                    rel="noopener noreferrer" className="flex row align-center w-fit">
                    <SvgRender iconName={'itch'} />
                    <span>Available on Itch.io as well!</span>
                    <SvgRender iconName={'itch'} />
                </a>
            )}
        </div>
    </article>)
}