'use client'
import { useEffect, useState } from "react"
import { GameService } from "../../services/game.service"
import { GameList } from "../../components/GameList"
import { GameFilter } from "@/components/GameFilter"

export default function GameIndex() {
    const gameService = new GameService()

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        try {
            const fetchedGames = await gameService.query()
            setGames(fetchedGames)
            setLoading(false)
        } catch (err) {
            console.error("Failed to fetch games:", err)
            setLoading(false)
        }
    }

    return (
        <main className="index-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                {loading ? (
                    <p>Loading games...</p>
                ) : (
                    <div className="games-showcase flex column full-center w-100">
                        <GameFilter gameService={gameService} onFilterChange={fetchGames} />
                        <h2>Noffty's Game Collection</h2>
                        <GameList games={games} />
                    </div>
                )}
            </section>
        </main>
    )
}