'use client'
import Link from 'next/link'
import { Game } from '../models/game'

export function GamesLinks({ games }: { games: Game[] }) {
    return (
        <div className="games grid">
            {games.map((game) => (game.onSiteLink ?
                <Link href={game.onSiteLink} key={game.name} aria-label='noffty-game' rel="noopener noreferrer"
                    className='flex column align-center text-center text-capitalize'>
                    <img src={game.image} alt={game.name} className='w-100' />
                    <div>
                        <h3>{game.name}</h3>
                        <p>{game.note}</p>
                    </div>
                </Link>
                :
                <a key={game.name} href={game.outsideLink} target="_blank"
                    rel="noopener noreferrer" aria-label='noffty-game'
                    className='flex column align-center text-center text-capitalize'>
                    <img src={game.image} alt={game.name} className='w-100' />
                    <div>
                        <h3>{game.name}</h3>
                        <p>{game.note}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}