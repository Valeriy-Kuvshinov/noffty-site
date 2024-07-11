'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Game } from "../../../../models/game"
import { GameService } from "../../../../services/api/game.service"
import { GameForm } from "../../../../components/game/GameForm"
import { SvgRender } from "../../../../components/general/SvgRender"
import { ErrorContainer } from "../../../../components/general/ErrorContainer"
import { Loader } from "../../../../components/general/Loader"

export default function GameEdit() {
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
                if (fetchedGame) setGame({
                    ...fetchedGame,
                    description: fetchedGame.description?.replace(/<br>/g, '\n'),
                    controls: fetchedGame.controls?.replace(/<br>/g, '\n'),
                    credits: fetchedGame.credits?.replace(/<br>/g, '\n')
                })
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

    return (<main className="edit-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <a href="/admin/games" title="Return to game list?" aria-label="Return to game list?">
                <SvgRender iconName="return" />
            </a>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorContainer message={error} />
            ) : game ? (<>
                <h2>You are now editing {game.title}</h2>
                <GameForm game={game} />
                <p>*First image in screenshots array is to be used for thumbnail,
                    IT WILL NOT be shown in the details page of the game*</p>
            </>
            ) : null}
        </section>
    </main>)
}