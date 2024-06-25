'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Game } from '../../models/game'
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
        router.push(`/admin/edit/${game.name}`)
    }

    return (<Link href={`/games/${game.name}`} key={game.name} aria-label='noffty-game'
        className='flex column align-center w-100 text-capitalize'>
        <div className='preview-body w-100 h-fit'>
            <ImageContainer src={game.screenshots[0]} alt={game.name} />
            {game.isGameJam === 'yes' && (
                <span className="gmtk" title='Game{Jam} Submission' aria-label='GameJam Submission'>
                    JAM
                </span>)}
            <div className='icon'>
                <SvgRender iconName={game.platform} />
            </div>
            {isAdminPage && (
                <button className='flex full-center' onClick={handleEditClick}>
                    <SvgRender iconName='edit' />
                </button>)}
        </div>

        <div className='preview-info grid w-100 h-fit'>
            <ImageContainer src={game.icon} alt={game.name} />
            <h3 title={game.name}>{game.name}</h3>
            <p title={game.note}>{game.note}</p>
        </div>
    </Link>)
}