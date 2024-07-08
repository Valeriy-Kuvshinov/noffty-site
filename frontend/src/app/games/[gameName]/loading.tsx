import { Loader } from "../../../components/general/Loader"

export default function Loading() {
    return (<main className="game-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <Loader />
        </section>
    </main>)
}