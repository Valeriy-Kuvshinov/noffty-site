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
                    <p>Loading...</p>
                ) : game ? (
                    game.type === 'web' ? (
                        <>
                            <h2>You Are Now Playing {game.name}</h2>
                            <iframe className="w-100"
                                src={game.gameLink}
                                title={game.name}
                                allow={allowAttributes}
                                allowFullScreen={true}
                            ></iframe>
                            <section className="game-body w-100">
                                <img src={game.icon} alt={game.name} />
                                <div className="game-info">
                                    <p>{game.note}</p>
                                    <p>{game.description}</p>
                                    <p>Game controls: {game.controls}</p>
                                </div>
                            </section>
                        </>
                    ) : (
                        <p>This game is not available as a web version.</p>
                    )
                ) : (
                    <p>Sorry, no game found matching {params.gameName}.</p>
                )}
            </section>
        </main>
    )
}