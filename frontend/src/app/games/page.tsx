'use client'
import { useEffect, useState } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { GameList } from "../../components/GameList"
import { GameFilter } from "@/components/GameFilter"

export default function GameIndex() {
    const gameService = new GameService()

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGames({})
    }, [])

    async function fetchGames(filterBy: GameQueryParams) {
        try {
            const fetchedGames = await gameService.query(filterBy)
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
                <div className="games-showcase flex column full-center w-100">
                    <h2 className="text-center">Noffty's Game Collection</h2>
                    <GameFilter onFilterChange={fetchGames} />
                    {loading ? (
                        <p>Loading games...</p>
                    ) : (
                        <GameList games={games} />
                    )}
                </div>
            </section>
        </main>
    )
}