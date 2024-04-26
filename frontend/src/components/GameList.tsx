'use client'
import { Game } from '../models/game'
import { GamePreview } from './GamePreview'

export function GameList({ games }: { games: Game[] }) {
    return (
        <div className="game-list grid">
            {games.map((game: Game) => (
                <GamePreview key={game.name} game={game} />
            ))}
        </div>
    )
}