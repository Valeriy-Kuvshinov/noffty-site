import { ImageContainer } from "./ImageContainer"

export function ErrorContainer({ message }: { message: string }) {
    const errorImage = 'https://res.cloudinary.com/djzid7ags/image/upload/v1715114220/izhy899wyaasxnnen7ag.png'

    return (
        <article className="error-container flex column">
            <div className="error-area flex row align-center">
                <ImageContainer src={errorImage} alt="Error.." />
                <span>{message}</span>
            </div>
            <a href="/" className="fast-trans" aria-label="home page navigation"
                title="Return to home page?">Return to home?</a>
        </article>
    )
}