import { Game } from '../models/game'
import { HttpService } from './http.service'

const baseUrl: string = 'http://localhost:3030/api/game/'

export class GameService {
    private httpService: HttpService

    constructor() {
        this.httpService = new HttpService()
    }

    async query() {
        return this.httpService.get(baseUrl, '')
    }

    async getById(gameId: string) {
        return this.httpService.get(`${baseUrl}by-id/${gameId}`)
    }

    async getByName(gameName: string) {
        return this.httpService.get(`${baseUrl}by-name/${gameName}`)
    }

    async save(game: Game) {
        if (game._id) {
            return this.httpService.put(`${baseUrl}update/${game._id}`, game)
        } else return this.httpService.post(baseUrl + 'add/', game)
    }

    async remove(id: string) {
        return this.httpService.delete(`${baseUrl}delete/${id}`)
    }

    getMiniGames(type: string): Game[] {
        if (type === 'web') return [
            {
                "name": "Absurd^2",
                "note": "Simple 2D platformer",
                "type": "web",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790258/games/icons/n06kstfi1jxuzibtc5sz.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1713788996/games/screenshots/y0gftpol6jink8zrsq4a.png"]
            },
            {
                "name": "WavePunk",
                "note": "Wave merging adventure",
                "type": "web",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/mb8ngo63kqd43ujftami.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1713788996/games/screenshots/y0gftpol6jink8zrsq4a.png"]
            },
            {
                "name": "Gun Stick Dash Jump",
                "note": "Corrupted action platformer",
                "type": "web",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/tmwtyg0bkjrhoy33axjd.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1713788996/games/screenshots/y0gftpol6jink8zrsq4a.png"]
            }
        ]
        else if (type === 'android') return [
            {
                "name": "Betorched",
                "note": "Turn based roguelite",
                "type": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.NofftyProd.Betorched",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/uhdnw0urvavw4b3qveln.jpg",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1713788996/games/screenshots/y0gftpol6jink8zrsq4a.png"]
            },
            {
                "name": "WordDart",
                "note": "Last letter arcade",
                "type": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.michaelkushnir.worddart",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790260/games/icons/gjve8kwuitf5v8ie32b0.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1713788996/games/screenshots/y0gftpol6jink8zrsq4a.png"]
            }
        ]
        else return []
    }
}