'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Game } from '../../interfaces/game'
import { ImageContainer } from '../general/ImageContainer'
import { SvgRender } from '../general/SvgRender'

interface GamePreviewProps {
    game: Game
    isAdminPage: boolean
}

export function GamePreview({ game, isAdminPage }: GamePreviewProps) {
    const router = useRouter()

    function handleEditClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        router.push(`/admin/edit?name=${encodeURIComponent(game.title)}`)
    }

    return (<Link key={game.title} aria-label='noffty-game'
        href={`/games/details?name=${encodeURIComponent(game.title)}`}
        className='flex column align-center w-100 text-capitalize'>
        <div className='preview-body w-100 h-fit'>
            <ImageContainer src={game.screenshots[0]} alt={game.title} />
            {game.isGameJam === 'yes' && (
                <span className="gmtk fast-trans" title='Game{Jam} Submission' aria-label='GameJam Submission'>
                    JAM
                </span>
            )}
            <span className='icon fast-trans' aria-label={`Game meant playing on ${game.platform}`}>
                {game.platform.toUpperCase()}
            </span>
            {isAdminPage && (
                <button className='flex full-center' onClick={handleEditClick}>
                    <SvgRender iconName='edit' />
                </button>
            )}
        </div>

        <div className='preview-info grid w-100 h-fit'>
            <ImageContainer src={game.icon} alt={game.title} />
            <h3 className='text-hide-overflow' title={game.title}>{game.title}</h3>
            <p className='text-hide-overflow' title={game.subtitle}>{game.subtitle}</p>
        </div>
    </Link>)
}