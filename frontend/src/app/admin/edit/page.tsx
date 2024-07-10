import { Game } from "../../../models/game"
import { GameForm } from "../../../components/game/GameForm"
import { SvgRender } from "../../../components/general/SvgRender"

export default function GameCreate() {
    const defaultGame: Game = {
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
        genre: ['action'],
        devlog: '',
        walkthrough: '',
        isGameJam: 'no',
        createdAt: Date.now()
    }

    return (
        <main className="edit-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <a href="/admin/games" title="Return to game list?" aria-label="Return to game list?">
                    <SvgRender iconName="return" />
                </a>
                <h2>You are now adding a new game</h2>
                {defaultGame && (<GameForm game={defaultGame} />)}
            </section>
        </main>)
}