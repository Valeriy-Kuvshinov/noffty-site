import { ImageContainer } from "./ImageContainer"

export function Loader() {
    const loaderGif = 'https://res.cloudinary.com/djzid7ags/image/upload/v1715092957/rofgvwuxaocbanu3fpzl.gif'

    return (
        <article className="loader-container flex column">
            <ImageContainer src={loaderGif} alt="Loading.." />
            <span className="text-center">Loading...</span>
        </article>
    )
}