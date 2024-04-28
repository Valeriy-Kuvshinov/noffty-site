import Link from 'next/link'
import { Game } from '../models/game'
import { ImageContainer } from './ImageContainer'

export function GamePreview({ game }: { game: Game }) {
    return game.platform === 'html5' ? (
        <Link href={`/games/${game.name}`} key={game.name} aria-label='noffty-game'
            className='flex column align-center w-100 text-capitalize fast-trans'>
            <ImageContainer src={game.screenshots[0]} alt={game.name} />

            <section className='preview-info grid w-100 h-fit'>
                <ImageContainer src={game.icon} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </section>
        </Link>
    ) : (
        <a key={game.name} href={game.outsideLink} target="_blank"
            rel="noopener noreferrer" aria-label='noffty-game'
            className='flex column align-center w-100 text-capitalize fast-trans'>
            <ImageContainer src={game.screenshots[0]} alt={game.name} />

            <section className='preview-info grid w-100 h-fit'>
                <ImageContainer src={game.icon} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </section>
        </a>
    )
}