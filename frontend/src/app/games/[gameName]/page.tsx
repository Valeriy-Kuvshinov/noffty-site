import { Game } from "../../../models/game"
import { GameService } from "../../../services/api/game.service"
import { GameDetailsBody } from "../../../components/game/GameDetailsBody"
import { ErrorContainer } from "../../../components/general/ErrorContainer"
import { GameDetailsFrame } from "../../../components/game/GameDetailsFrame"

// Enable ISR
// export const revalidate = 0
const gameService = new GameService()

async function getGame(gameName: string): Promise<Game | null> {
    try {
        return await gameService.getByName(gameName)
    } catch (error) {
        console.error("Failed to fetch game", error)
        return null
    }
}

export async function generateStaticParams() {
    try {
        const games = await gameService.query()
        return games.map((game: Game) => ({ gameName: encodeURIComponent(game.name) }))
    } catch (error) {
        console.error("Failed to fetch games for static params", error)
        return []
    }
}

export default async function GameDetails({ params }: { params: { gameName: string } }) {
    const gameName = decodeURIComponent(params.gameName)
    const game = await getGame(gameName)

    return (<main className="game-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            {game ? (<>
                <GameDetailsFrame game={game} />
                <GameDetailsBody game={game} />
            </>) : (
                <ErrorContainer message={`Sorry, no game found matching ${gameName}.`} />
            )}
        </section>
    </main>)
}