'use client'
import { useEffect, useState } from "react"
import { gameService } from "../../services/api/game-service"
import { useGameFilterParams } from "../../hooks/gameFilterParams"
import { GameList } from "../../components/game/GameList"
import { GameFilter } from "../../components/game/GameFilter"
import { Loader } from "../../components/general/Loader"

export default function GameIndex() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const { defaultValues, updateSearchParams, searchParams } = useGameFilterParams()

    useEffect(() => {
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
        fetchGames()
    }, [searchParams, defaultValues])

    return (<main className="index-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <h2 className="text-center">
                {games.length === 0 ? 'No Games Found to Explore' :
                    games.length === 1 ? 'Explore This Matching Game' :
                        `Explore Our ${games.length} Matching Games`}
            </h2>
            <GameFilter
                defaultValues={defaultValues}
                updateSearchParams={updateSearchParams}
            />
            {loading ? (
                <Loader />
            ) : (
                <GameList games={games} isAdminPage={false} />
            )}
        </section>
    </main>)
}