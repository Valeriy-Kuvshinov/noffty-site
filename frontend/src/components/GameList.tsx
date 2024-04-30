'use client'
import { Game } from '../models/game'
import { GamePreview } from './GamePreview'

export function GameList({ games }: { games: Game[] }) {
    return (
        <div className="game-list grid w-100">
            {games.length === 0 ? (
                <p>No games available.</p>
            ) : (
                games.map((game: Game) => (
                    <GamePreview key={game.name} game={game} />
                ))
            )}
        </div>
    )
}