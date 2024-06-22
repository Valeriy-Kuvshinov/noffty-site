import { Game } from "../../../models/game"
import { UtilityService } from "../../../services/utility.service"
import { GameForm } from "../../../components/game/GameForm"
import { SvgRender } from "../../../components/general/SvgRender"

export default async function GameCreate() {
    const defaultIcon = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif'
    const defaultScreenshot = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif'

    let cloudinaryKeys = { cloudName: '', uploadPreset: '' }
    let defaultGame: Game = {
        name: 'New Game',
        note: 'To Be Continued',
        icon: defaultIcon,
        screenshots: [defaultScreenshot],
        platform: 'html5',
        outsideLink: '',
        gameLink: '',
        description: '',
        credits: '',
        controls: '',
        genre: ['action'],
        devlog: '',
        walkthrough: '',
        isGameJam: 'no',
        createdAt: Date.now()
    }

    try {
        const response = await UtilityService.getCloudinaryKeys()
        cloudinaryKeys = response
    } catch (error) {
        console.error('Failed to fetch Cloudinary keys', error)
    }

    return (
        <main className="edit-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <a href="/admin" title="Return to game list?" aria-label="Return to game list?">
                    <SvgRender iconName="return" />
                </a>
                <h2>You are now adding a new game</h2>
                {defaultGame && (
                    <GameForm game={defaultGame} cloudName={cloudinaryKeys.cloudName}
                        uploadPreset={cloudinaryKeys.uploadPreset} defaultIcon={defaultIcon}
                        defaultScreenshot={defaultScreenshot}
                    />
                )}
            </section>
        </main>
    )
}