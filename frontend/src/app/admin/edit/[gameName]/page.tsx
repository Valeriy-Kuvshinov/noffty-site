'use client'
import { useEffect, useState } from "react"
import { Game } from "../../../../models/game"
import { GameService } from "../../../../services/game.service"
import { GameForm } from "../../../../components/game/GameForm"
import { SvgRender } from "../../../../components/general/SvgRender"
import { Loader } from "../../../../components/general/Loader"
import { ErrorContainer } from "../../../../components/general/ErrorContainer"

export default function GameEdit({ params }: { params: { gameName: string } }) {
    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)
    const gameService = new GameService()
    const gameName = decodeURIComponent(params.gameName)

    useEffect(() => {
        fetchGame()
    }, [gameName])

    async function fetchGame() {
        try {
            const fetchedGame = await gameService.getByName(gameName)
            setGame(fetchedGame)
        } catch (error) {
            console.error('Failed to fetch game', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="edit-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <a href="/admin" title="Return to game list?" aria-label="Return to game list?">
                    <SvgRender iconName="return" />
                </a>
                <h2>You are now editing {gameName}</h2>
                {loading ? (
                    <Loader />
                ) : game ? (
                    <GameForm game={game} />
                ) : (
                    <ErrorContainer message={`Sorry, no game found matching ${gameName}.`} />
                )}
            </section>
        </main>
    )
}