'use client'
import { useEffect, useState } from "react"
import { GameService } from "../../services/game.service"
import { useGameFilterParams } from "../../hooks/gameFilterParams"
import { GameList } from "../../components/game/GameList"
import { GameFilter } from "../../components/game/GameFilter"
import { Loader } from "../../components/general/Loader"

export default function GameIndex() {
    const gameService = new GameService()
    const isAdminPage = false

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const { getDefaultFilterValues, updateSearchParams, searchParams } = useGameFilterParams()

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
        <main className="index-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <h2 className="text-center">
                    {games.length === 1
                        ? 'Explore Our Matching Game'
                        : `Explore Our ${games.length} Matching Games`}
                </h2>
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