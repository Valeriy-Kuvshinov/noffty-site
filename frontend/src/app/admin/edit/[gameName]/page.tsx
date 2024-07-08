import { Game } from "../../../../models/game"
import { GameService } from "../../../../services/api/game.service"
import { GameForm } from "../../../../components/game/GameForm"
import { SvgRender } from "../../../../components/general/SvgRender"
import { ErrorContainer } from "../../../../components/general/ErrorContainer"

// Enable ISR
export const revalidate = 0

async function getGame(gameName: string): Promise<Game | null> {
    const gameService = new GameService()
    try {
        const fetchedGame = await gameService.getByName(gameName)
        return {
            ...fetchedGame,
            description: fetchedGame.description?.replace(/<br>/g, '\n'),
            controls: fetchedGame.controls?.replace(/<br>/g, '\n'),
            credits: fetchedGame.credits?.replace(/<br>/g, '\n')
        }
    } catch (error) {
        console.error('Failed to fetch game', error)
        return null
    }
}

export default async function GameEdit({ params }: { params: { gameName: string } }) {
    const gameName = decodeURIComponent(params.gameName)
    const game = await getGame(gameName)

    return (<main className="edit-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <a href="/admin/games" title="Return to game list?" aria-label="Return to game list?">
                <SvgRender iconName="return" />
            </a>
            <h2>You are now editing {gameName}</h2>
            {game ? (<>
                <GameForm game={game} />
                <p>*First image in screenshots array is to be used for thumbnail, IT WILL NOT be shown in the details page of the game*</p>
            </>) : (
                <ErrorContainer message={`Sorry, no game found matching ${gameName}.`} />
            )}
        </section>
    </main>)
}