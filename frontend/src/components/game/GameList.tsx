import { Game } from '../../interfaces/game'
import { GamePreview } from './GamePreview'
import { ErrorContainer } from '../general/ErrorContainer'

interface GameListProps {
    games: Game[]
    isAdminPage: boolean
}

export function GameList({ games, isAdminPage }: GameListProps) {

    return (<div className="game-list grid w-100">
        {games.length === 0 ? (
            <ErrorContainer message={`No games found...`} />
        ) : (
            games.map((game: Game) => (
                <GamePreview key={game.title} game={game} isAdminPage={isAdminPage} />
            )))}
    </div>)
}