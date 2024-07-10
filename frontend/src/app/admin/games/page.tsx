'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { GameService } from "../../../services/api/game.service"
import { useGameFilterParams } from "../../../hooks/gameFilterParams"
import { GameFilter } from "../../../components/game/GameFilter"
import { GameList } from "../../../components/game/GameList"
import { Loader } from "../../../components/general/Loader"

export default function AdminIndex() {
    const isAdminPage = true

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const { getDefaultFilterValues, updateSearchParams, searchParams } = useGameFilterParams()

    const searchParamsString = searchParams.toString()
    const defaultValues = getDefaultFilterValues()

    useEffect(() => {
        async function fetchGames() {
            try {
                const fetchedGames = await GameService.query(defaultValues)
                setGames(fetchedGames)
                setLoading(false)
            } catch (err) {
                console.error("Failed to fetch games:", err)
                setLoading(false)
            }
        }
        fetchGames()
    }, [searchParamsString])

    return (<main className="admin-page full w-h-100">
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
                <GameList games={games} isAdminPage={isAdminPage} />
            )}
        </section>
    </main>)
}