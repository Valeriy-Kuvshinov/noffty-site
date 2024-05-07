import { ImageContainer } from "./ImageContainer"

interface ErrorProps {
    message: string
}

export function ErrorContainer({ message }: ErrorProps) {
    const errorImage = 'https://res.cloudinary.com/djzid7ags/image/upload/v1715114220/izhy899wyaasxnnen7ag.png'

    return (
        <article className="error-container flex row align-center">
            <ImageContainer src={errorImage} alt="Error.." />
            <span>{message}</span>
        </article>
    )
}