import { Game } from "../../../../models/game"
import { GameService } from "../../../../services/game.service"
import { UtilityService } from "../../../../services/utility.service"

export default async function GameEdit({ params }: { params: { gameName: string } }) {
    const gameService = new GameService()

    const gameName = decodeURIComponent(params.gameName)
    let cloudinaryKeys = { cloudName: '', uploadPreset: '' }
    let game: Game | null = null

    try {
        const response = await UtilityService.getCloudinaryKeys()
        cloudinaryKeys = response
    } catch (error) {
        console.error('Failed to fetch Cloudinary keys', error)
    }

    try {
        game = await gameService.getByName(gameName)
    } catch (error) {
        console.error('Failed to fetch game', error)
    }

    return (
        <main className="edit-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <h2>You are now editing {gameName}</h2>
            </section>
        </main>
    )
}