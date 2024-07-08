import { SvgRender } from "../../../../components/general/SvgRender"
import { Loader } from "../../../../components/general/Loader"

export default function Loading() {
    return (<main className="game-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <a href="/admin/games" title="Return to game list?" aria-label="Return to game list?">
                <SvgRender iconName="return" />
            </a>
            <Loader />
        </section>
    </main>)
}