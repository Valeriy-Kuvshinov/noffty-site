import { Game, GameQueryParams } from '../models/game'
import { HttpService } from './http.service'

const baseUrl: string = 'game/'

export class GameService {
    private httpService: HttpService

    currentFilter: GameQueryParams = {}

    constructor() {
        this.httpService = new HttpService()
    }

    async query() {
        const queryParams = new URLSearchParams(
            this.currentFilter as any).toString()
        console.log("URL being requested:", `${baseUrl}?${queryParams}`)
        console.log("URL being requested with filter:", this.currentFilter)
        return this.httpService.get(`${baseUrl}?${queryParams}`)
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

    updateFilter(newFilter?: GameQueryParams) {
        if (newFilter && Object.keys(newFilter).length > 0) {
            this.currentFilter = { ...this.currentFilter, ...newFilter }
        } else this.currentFilter = {}
        console.log("Current Filter in Service:", this.currentFilter)
    }

    getMiniGames(platform: string): Game[] {
        if (platform === 'html5') return [
            {
                "name": "Absurd^2",
                "note": "Simple 2D platformer",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790258/games/icons/n06kstfi1jxuzibtc5sz.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1714469604/games/screenshots/lmfxdnzgplpkdvgslib2.png"],
                "isGameJam": false
            },
            {
                "name": "WavePunk",
                "note": "Wave merging adventure",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/mb8ngo63kqd43ujftami.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1714469415/games/screenshots/d3qnqgwisphfe8htt1aw.png"],
                "isGameJam": true
            },
            {
                "name": "Gun Stick Dash Jump",
                "note": "Corrupted action platformer",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/tmwtyg0bkjrhoy33axjd.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1714471451/games/screenshots/xyo4ztx18nwrczwevjsx.png"],
                "isGameJam": true
            }
        ]
        else if (platform === 'android') return [
            {
                "name": "Betorched",
                "note": "Turn based roguelite",
                "platform": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.NofftyProd.Betorched",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790259/games/icons/uhdnw0urvavw4b3qveln.jpg",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1714496846/games/screenshots/odzi4r0jpg6wfyzozccc.png"],
                "isGameJam": false
            },
            {
                "name": "WordDart",
                "note": "Last letter arcade",
                "platform": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.michaelkushnir.worddart",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1713790260/games/icons/gjve8kwuitf5v8ie32b0.png",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1714497042/games/screenshots/qqbnd4lkjswyobnjumtk.jpg"],
                "isGameJam": false
            }
        ]
        else return []
    }
}