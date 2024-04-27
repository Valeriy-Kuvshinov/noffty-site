'use client'
import { useEffect, useState } from "react"
import { GameService } from "../../services/game.service"
import { GameList } from "@/components/GameList"

export default function GamesIndex() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const gameService = new GameService()

    useEffect(() => {
        fetchGames()
    }, [])

    async function fetchGames() {
        try {
            const fetchedGames = await gameService.query()
            setGames(fetchedGames)
        } catch (err) {
            console.error("Failed to fetch games:", err)
        }
        setLoading(false)
    }

    return (
        <main className="index-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                {loading ? (
                    <p>Loading games...</p>
                ) : (
                    <>
                        <h2>Noffty's Game Collection</h2>
                        <GameList games={games} />
                    </>
                )}
            </section>
        </main>
    )
}