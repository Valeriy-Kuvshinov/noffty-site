'use client'
import { useEffect, useState } from "react"
import { Game } from "../../../models/game"
import { GameService } from "../../../services/api/game.service"
import { GameDetailsBody } from "../../../components/game/GameDetailsBody"
import { Loader } from "../../../components/general/Loader"
import { ErrorContainer } from "../../../components/general/ErrorContainer"
import { GameDetailsFrame } from "../../../components/game/GameDetailsFrame"

export default function GameDetails({ params }: { params: { gameName: string } }) {
    const gameService = new GameService()
    const gameName = decodeURIComponent(params.gameName)

    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => { fetchGame() }, [gameName])

    async function fetchGame() {
        try {
            const fetchedGame = await gameService.getByName(gameName)

            setGame(fetchedGame)
            setLoading(false)
        } catch (error) {
            console.error("Failed to fetch game", error)
            setLoading(false)
        }
    }

    return (<main className="game-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            {loading ? (
                <Loader />
            ) : game ? (<>
                <GameDetailsFrame game={game} />
                <GameDetailsBody game={game} />
            </>) : (
                <ErrorContainer message={`Sorry, no game found matching ${gameName}.`} />)}
        </section>
    </main>)
}