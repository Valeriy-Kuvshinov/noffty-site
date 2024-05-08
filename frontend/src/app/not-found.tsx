import { ErrorContainer } from "../components/general/ErrorContainer"

export default function NotFound() {
    return (
        <main className="error-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <h1>How did we get here?</h1>
                <ErrorContainer message={`Looks like you're in the shadow realm, Jimbo - Unknown Url (404)`} />
            </section>
        </main>
    )
}