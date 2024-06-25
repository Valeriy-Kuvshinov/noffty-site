import { ImageContainer } from "./ImageContainer"

export function ErrorContainer({ message }: { message: string }) {
    const errorImage = 'https://res.cloudinary.com/djzid7ags/image/upload/v1716704407/hgqpxtysqdjvav72w8dl.avif'

    return (<article className="error-container flex column">
        <div className="error-area flex row align-center">
            <ImageContainer src={errorImage} alt="Error.." />
            <span>{message}</span>
        </div>
        <a href="/" aria-label="Go to home page"
            title="Return to home page?">Return to home?</a>
    </article>)
}