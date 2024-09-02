'use client'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Game } from "../../../interfaces/game"
import { gameService } from "../../../services/api/game-service"
import { GameForm } from "./GameForm"
import { SvgRender } from "../../../components/general/SvgRender"
import { ErrorContainer } from "../../../components/general/ErrorContainer"
import { Loader } from "../../../components/general/Loader"

export default function GameEdit() {
    const searchParams = useSearchParams()
    const [game, setGame] = useState<Game | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isCreating, setIsCreating] = useState(false)

    const defaultGame = useMemo(() => ({
        title: 'New Game',
        subtitle: 'To Be Continued',
        icon: 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif',
        screenshots: ['https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif'],
        platform: 'html5',
        outsideLink: 'https://t1mure.itch.io/absurd2',
        gameLink: 'https://html-classic.itch.zone/html/9577176/index.html',
        description: 'Game info for the user',
        credits: 'Game stuff by T1mure',
        controls: 'WASD / Space keys to move',
        specialNote: 'Disclaimer or gmtk thing',
        genre: ['action'],
        devlog: '',
        walkthrough: '',
        isGameJam: 'no',
        createdAt: Date.now()
    }), [])

    useEffect(() => {
        async function fetchGame() {
            const gameName = searchParams.get('name')
            if (!gameName) {
                setIsCreating(true)
                setGame(defaultGame)
                setLoading(false)
                return
            }
            try {
                const fetchedGame = await gameService.getByName(gameName)
                if (fetchedGame) {
                    setGame({
                        ...fetchedGame,
                        description: fetchedGame.description?.replace(/<br>/g, '\n'),
                        controls: fetchedGame.controls?.replace(/<br>/g, '\n'),
                        credits: fetchedGame.credits?.replace(/<br>/g, '\n'),
                        specialNote: fetchedGame.specialNote?.replace(/<br>/g, '\n')
                    })
                    setIsCreating(false)
                } else setError(`Sorry, no game found matching ${gameName}.`)
            } catch (err) {
                console.error("Failed to fetch game", err)
                setError("An error occurred while fetching the game.")
            } finally {
                setLoading(false)
            }
        }
        fetchGame()
    }, [searchParams, defaultGame])

    return (<main className="edit-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <a href="/admin/games" title="Return to game list?" aria-label="Return to game list?">
                <SvgRender iconName="return" />
            </a>
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorContainer message={error} />
            ) : isCreating ? (<>
                <h2>You are now adding a new game</h2>
                <GameForm game={defaultGame} />
            </>) : game ? (<>
                <h2>You are now editing {game.title}</h2>
                <GameForm game={game} />
                <p>*First image in screenshots array is to be used for thumbnail,
                    IT WILL NOT be shown in the details page of the game*</p>
            </>) : null}
        </section>
    </main>)
}