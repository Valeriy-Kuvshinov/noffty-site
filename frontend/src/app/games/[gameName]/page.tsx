'use client'
import { useEffect, useState } from "react"
import { Game } from "../../../models/game"
import { GameService } from "../../../services/game.service"

export default function GameDetails({ params }: { params: { gameName: string } }) {
    const [game, setGame] = useState<Game | null>(null)
    const gameService = new GameService()

    useEffect(() => {
        console.log(params)
        console.log(params.gameName)
        fetchGame()
    }, [params.gameName])

    async function fetchGame() {
        if (params.gameName) {
            try {
                const fetchedGame = await gameService.getByName(params.gameName)
                setGame(fetchedGame)
            } catch (error) {
                console.error("Failed to fetch game", error)
            }
        }
    }

    return (
        <main className="game-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                {game ? (
                    <>
                        <h2>{game.name}</h2>
                        <img src={game.icon} alt={game.name} className="w-100" />
                        <p>{game.note}</p>
                        {game.type === 'web' && (
                            <iframe
                                src={game.outsideLink || '/fallbackURL'} // Modify as needed
                                style={{
                                    width: '800px', height: '600px', border: '0',
                                    touchAction: 'none', overflow: 'hidden'
                                }}
                                title={game.name}
                                allow="autoplay; fullscreen; midi; gyroscope;
                                    accelerometer; cross-origin-isolated"
                                allowFullScreen={true}
                            ></iframe>
                        )}
                    </>
                ) : (
                    <p>Sorry, no game found...</p>
                )}
            </section>
        </main>
    )
}