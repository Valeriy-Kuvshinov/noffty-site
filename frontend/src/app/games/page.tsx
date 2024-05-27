'use client'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { GameList } from "../../components/game/GameList"
import { GameFilter } from "../../components/game/GameFilter"
import { Loader } from "../../components/general/Loader"

export default function GameIndex() {
    const gameService = new GameService()
    const searchParams = useSearchParams()
    const router = useRouter()
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Received new search params:', searchParams.toString())
        fetchGames()
    }, [searchParams])

    async function fetchGames() {
        try {
            const params = new URLSearchParams(searchParams.toString())
            const filterBy: GameQueryParams = {
                name: params.get('name') || '',
                platform: params.get('platform') || '',
                genre: params.get('genre') || '',
                isGameJam: params.get('isGameJam') || ''
            }
            console.log('Fetching games with filters:', filterBy)
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
                    <GameFilter onFilterChange={(filter) => {
                        const newSearchParams = new URLSearchParams(searchParams.toString());
                        Object.entries(filter).forEach(([key, value]) => {
                            if (value) newSearchParams.set(key, value)
                            else newSearchParams.delete(key)
                        })
                        router.replace(`?${newSearchParams.toString()}`, undefined, { shallow: true })
                    }} />
                    {loading ? (<Loader />)
                        : (<GameList games={games} />)}
                </div>
            </section>
        </main>
    )
}