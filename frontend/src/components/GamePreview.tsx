'use client'
import Link from 'next/link'
import { Game } from '../models/game'
import { ImageContainer } from './ImageContainer'
import { SvgRender } from './SvgRender'

export function GamePreview({ game }: { game: Game }) {
    return game.platform === 'html5' ? (
        <Link href={`/games/${game.name}`} key={game.name} aria-label='noffty-game'
            className='flex column align-center w-100 text-capitalize fast-trans'>
            <div className='preview-body w-100 h-fit'>
                <ImageContainer src={game.screenshots[0]} alt={game.name} />
                {game.isGameJam && <span className="gmtk" title='Game{Jam} Submission'>GMTK</span>}
                <SvgRender iconName={game.platform} />
            </div>

            <div className='preview-info grid w-100 h-fit'>
                <ImageContainer src={game.icon} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </div>
        </Link>
    ) : (
        <a key={game.name} href={game.outsideLink} target="_blank"
            rel="noopener noreferrer" aria-label='noffty-game'
            className='flex column align-center w-100 text-capitalize fast-trans'>
            <div className='preview-body w-100 h-fit'>
                <ImageContainer src={game.screenshots[0]} alt={game.name} />
                {game.isGameJam && <span className="gmtk">GMTK</span>}
                <SvgRender iconName={game.platform} />
            </div>

            <div className='preview-info grid w-100 h-fit'>
                <ImageContainer src={game.icon} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.note}</p>
            </div>
        </a>
    )
}