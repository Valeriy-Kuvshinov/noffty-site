'use client'
import { useEffect, useState } from "react"
import { Game } from "../../../models/game"
import { GameService } from "../../../services/game.service"
import { UtilityService } from "../../../services/utility.service"
import { GameDetailsBody } from "../../../components/GameDetailsBody"
import { SvgRender } from "../../../components/SvgRender"

export default function GameDetails({ params }: { params: { gameName: string } }) {
    const gameService = new GameService()
    const utilityService = new UtilityService()

    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)
    const [allowAttributes, setAllowAttributes] = useState('')
    const gameName = decodeURIComponent(params.gameName)

    useEffect(() => {
        fetchGame()
        setAllowAttributes(utilityService.getAllowAttributes())
    }, [params.gameName])

    async function fetchGame() {
        if (params.gameName) {
            try {
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
                    <p>Loading {gameName}...</p>
                ) : game ? (<>
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
                        <div className="game-frame flex column w-100 text-center">
                            <p>Whoa, looks like the game is not intended for the browser, but for
                                <span className="text-capitalize"> {game.platform}</span> instead.</p>
                            <a href={game.outsideLink} className="flex row fast-trans"
                                target="_blank" rel="noopener noreferrer">
                                <SvgRender iconName={game.platform} />
                                <span>Take Me to The Game!</span>
                                <SvgRender iconName={game.platform} />
                            </a>
                        </div>
                    )}
                    <GameDetailsBody game={game} />
                </>) : (
                    <p>Sorry, no game found matching {gameName}.</p>
                )}
            </section>
        </main>
    )
}