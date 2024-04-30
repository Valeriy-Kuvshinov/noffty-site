'use client'
import { useEffect, useState } from "react"
import { Game } from "../../../models/game"
import { GameService } from "../../../services/game.service"
import { UtilityService } from "../../../services/utility.service"

export default function GameDetails({ params }: { params: { gameName: string } }) {
    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)
    const [allowAttributes, setAllowAttributes] = useState('')
    const gameService = new GameService()
    const utilityService = new UtilityService()

    useEffect(() => {
        fetchGame()
        setAllowAttributes(utilityService.getAllowAttributes())
    }, [params.gameName])

    async function fetchGame() {
        if (params.gameName) {
            try {
                const gameName = decodeURIComponent(params.gameName)
                const fetchedGame = await gameService.getByName(gameName)

                setGame(fetchedGame)
                setLoading(false)
            } catch (error) {
                console.error("Failed to fetch game", error)
                setLoading(false)
            }
        }
    }

    return (
        <main className="game-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                {loading ? (
                    <p>Standby...</p>
                ) : game ? (
                    <>
                        {game.platform === 'html5' ? (
                            <div className="game-frame flex column w-100 text-center">
                                <h2>You Are Now Playing {game.name}</h2>
                                <iframe className="w-100"
                                    src={game.gameLink}
                                    title={game.name}
                                    allow={allowAttributes}
                                    allowFullScreen={true}
                                ></iframe>
                            </div>
                        ) : (
                            <section className="game-frame flex column w-100">
                                <p>Whoa, looks like the game is not intended for the browser, but for
                                    <span className="text-capitalize"> {game.platform}</span> instead.</p>
                                <a href={game.outsideLink} target="_blank" rel="noopener noreferrer">Take Me to The Game!</a>
                            </section>
                        )}
                        <section className="game-body w-100">
                            <img src={game.icon} alt={game.name} />
                            <div className="game-info">
                                <p>{game.note}</p>
                                <p>{game.description}</p>
                                <p>Game controls: {game.controls}</p>
                                <p>{game.credits}</p>
                                <div className="video-wrapper grid">
                                    {game.walkthrough && (
                                        <div className="video">
                                            <p>In case you have any issues, we have this video for help:</p>
                                            <iframe
                                                src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(game.walkthrough).search).get('v')}`}
                                                title="Game Walkthrough"
                                                allowFullScreen={true}
                                                className="w-100"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </div>
                                    )}
                                    {game.devlog && (
                                        <div className="video">
                                            <p>Check out the developer's log:</p>
                                            <iframe
                                                src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(game.devlog).search).get('v')}`}
                                                title="Developer's Log"
                                                allowFullScreen={true}
                                                className="w-100"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <p>Sorry, no game found matching {params.gameName}.</p>
                )}
            </section>
        </main>
    )
}