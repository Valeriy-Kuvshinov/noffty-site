'use client'
import { useEffect, useState } from "react"
import { GameService } from "../../services/game.service"
import { useSearchParamsUpdate } from "../../hooks/searchParamsUpdate"
import { GameList } from "../../components/game/GameList"
import { GameFilter } from "../../components/game/GameFilter"
import { Loader } from "../../components/general/Loader"

export default function GameIndex() {
    const gameService = new GameService()

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const { getDefaultFilterValues, updateSearchParams, searchParams } = useSearchParamsUpdate()

    useEffect(() => {
        fetchGames()
    }, [searchParams])

    async function fetchGames() {
        try {
            const filterBy = getDefaultFilterValues()
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
                    <GameFilter
                        getDefaultFilterValues={getDefaultFilterValues}
                        updateSearchParams={updateSearchParams}
                        searchParams={searchParams}
                    />
                    {loading ? (
                        <Loader />
                    ) : (
                        <GameList games={games} />
                    )}
                </div>
            </section>
        </main>
    )
}