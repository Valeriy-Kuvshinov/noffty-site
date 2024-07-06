'use client'
import { useState } from "react"
import Link from "next/link"
import { Game } from "../../models/game"
import { useHoverSwitch } from "../../hooks/hoverSwitch"
import { SvgRender } from "../general/SvgRender"
import { ImageContainer } from "../general/ImageContainer"

export function GameCarousel({ games }: { games: Game[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function nextGame() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    }

    function prevGame() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
    }

    const visibleGames = [
        games[(currentIndex - 1 + games.length) % games.length],
        games[currentIndex],
        games[(currentIndex + 1) % games.length]
    ]

    return (<div className="games-carousel flex w-h-100 fast-trans">
        <button onClick={prevGame} aria-label="Previous game">
            <SvgRender iconName="arrowLeft" />
        </button>
        <div className="carousel-container flex w-h-100 fast-trans">
            {visibleGames.map((game, index) => (
                <GamePreview key={game.name} game={game} index={index - 1} />
            ))}
        </div>
        <button onClick={nextGame} aria-label="Next game">
            <SvgRender iconName="arrowRight" />
        </button>
    </div>)
}

function GamePreview({ game, index }: { game: Game, index: number }) {
    const { value: currentScreenshot, handleMouseEnter, handleMouseLeave } = useHoverSwitch({
        defaultValue: game.screenshots[0], hoverValue: game.screenshots[1],
        condition: game.screenshots.length < 2
    })

    return (<Link href={`/games/${encodeURIComponent(game.name)}`}
        className="flex column align-center w-h-100 slow-trans"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{ transform: `translateX(${index * 100}%)` }}>
        <div className="preview-body flex w-h-100">
            {game.isGameJam === 'yes' && (
                <span className="gmtk fast-trans" title='Game{Jam} Submission' aria-label='GameJam Submission'>
                    JAM
                </span>
            )}
            <span className='icon fast-trans' aria-label={`Game meant playing on ${game.platform}`}>
                {game.platform.toUpperCase()}
            </span>
            <ImageContainer src={currentScreenshot} alt={`${game.name} screenshot`} />
        </div>
        <div className="preview-info grid w-100 h-fit fast-trans">
            <ImageContainer src={game.icon} alt={`${game.name} icon`} className="game-icon" />
            <h3>{game.name}</h3>
            <p>{game.note}</p>
        </div>
    </Link>)
}