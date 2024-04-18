import { Game } from '../models/game'
import gamesData from '../jsons/games.json'

export class GamesService {
    getGames(): Game[] {
        return gamesData
    }
}