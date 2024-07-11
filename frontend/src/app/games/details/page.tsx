'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Game } from "../../../models/game"
import { GameService } from "../../../services/api/game.service"
import { ErrorContainer } from "../../../components/general/ErrorContainer"
import { GameDetailsFrame } from "../../../components/game/GameDetailsFrame"
import { GameDetailsBody } from "../../../components/game/GameDetailsBody"
import { Loader } from "../../../components/general/Loader"

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
                const fetchedGame = await GameService.getByName(gameName)
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