'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { GameService } from "../../services/game.service"
import { useSearchParamsUpdate } from "../../hooks/searchParamsUpdate"
import { GameFilter } from "../../components/game/GameFilter"
import { GameList } from "../../components/game/GameList"
import { Loader } from "../../components/general/Loader"

export default function AdminIndex() {
    const gameService = new GameService()
    const isAdminPage = true

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const { getDefaultFilterValues, updateSearchParams, searchParams } = useSearchParamsUpdate()

    const searchParamsString = searchParams.toString()
    const defaultValues = getDefaultFilterValues()

    useEffect(() => {
        fetchGames()
    }, [searchParamsString])

    async function fetchGames() {
        try {
            const fetchedGames = await gameService.query(defaultValues)
            setGames(fetchedGames)
            setLoading(false)
        } catch (err) {
            console.error("Failed to fetch games:", err)
            setLoading(false)
        }
    }

    return (
        <main className="admin-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <h2>Welcome Home Boss!</h2>
                <h3>Find and update your games, or...</h3>
                <Link href={`/admin/edit`} className="add-btn">
                    <span>Add New Game</span>
                </Link>
                <GameFilter
                    defaultValues={defaultValues}
                    updateSearchParams={updateSearchParams}
                />
                {loading ? (
                    <Loader />
                ) : (
                    <GameList games={games} isAdminPage={isAdminPage} />)}
            </section>
        </main>
    )
}