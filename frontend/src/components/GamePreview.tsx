import Link from 'next/link'
import { Game } from '../models/game'

export function GamePreview({ game }: { game: Game }) {
    return game.type === 'web' ? (
        <Link href={`/games/${game.name}`} key={game.name} aria-label='noffty-game'
            className='flex column align-center text-center text-capitalize'>
            <img src={game.screenshots[0]} alt={game.name} className='w-100' />

            <section className='preview-info grid'>
                <img src={game.icon} alt={game.name} className='w-100' />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </section>
        </Link>
    ) : (
        <a key={game.name} href={game.outsideLink} target="_blank"
            rel="noopener noreferrer" aria-label='noffty-game'
            className='flex column align-center text-center text-capitalize'>
            <img src={game.screenshots[0]} alt={game.name} className='w-100' />

            <section className='preview-info grid'>
                <img src={game.icon} alt={game.name} className='w-100' />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </section>
        </a>
    )
}