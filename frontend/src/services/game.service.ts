import { Game, GameQueryParams } from '../models/game'
import { HttpService } from './http.service'

const baseUrl: string = 'game/'

export class GameService {
    private httpService: HttpService

    constructor() {
        this.httpService = new HttpService()
    }

    async query(filterBy: GameQueryParams = {}) {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        console.log(`Excepted request to backend: ${baseUrl}?${queryParams}`)
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

    // filtering stuff
    getDefaultFilter(): GameQueryParams {
        return {
            name: '',
            platform: '',
            genre: '',
            isGameJam: ''
        }
    }

    getGenres() {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Action', value: 'action', iconName: 'action' },
            { label: 'Platformer', value: 'platformer', iconName: 'platformer' },
            { label: 'Word', value: 'word', iconName: 'word' },
            { label: 'Survival', value: 'survival', iconName: 'heart' },
            { label: 'Adventure', value: 'adventure', iconName: 'adventure' },
            { label: 'Puzzle', value: 'puzzle', iconName: 'puzzle' }
        ]
    }

    getPlatforms() {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Android', value: 'android', iconName: 'android' },
            { label: 'Browser', value: 'html5', iconName: 'html5' },
            { label: 'Steam', value: 'steam', iconName: 'steam' }
        ]
    }

    getGameJams() {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Yes', value: 'yes', iconName: 'confirm' },
            { label: 'No', value: 'no', iconName: 'cancel' }
        ]
    }

    // for home page only
    getMiniGames(platform: string): Game[] {
        if (platform === 'html5') return [
            {
                "name": "Boiling Point Classic",
                "note": "Reverse Horde Roguelite",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/aimouzhzjqx6j2hltqmv.avif",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713149/games/screenshots/ffeaahkmjbga6lnjxirm.avif"],
                "isGameJam": 'yes'
            },
            {
                "name": "Absurd^2",
                "note": "Simple 2D platformer",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/robpcra0w1qdahbso1z5.avif",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713779/games/screenshots/aow5n7wehb2bvijvylqz.avif"],
                "isGameJam": 'no'
            },
            {
                "name": "WavePunk",
                "note": "Wave merging adventure",
                "platform": "html5",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708222/games/icons/k2zizoiquqqbm2eqi34s.avif",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/wx2agit1icmycnts55zl.avif"],
                "isGameJam": 'yes'
            }
        ]
        else if (platform === 'android') return [
            {
                "name": "Betorched",
                "note": "Turn based roguelite",
                "platform": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.NofftyProd.Betorched",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/zcwoimnfmdbbp5wpf4ov.avif",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716711012/games/screenshots/tmbzyizctojypoq072lg.avif"],
                "isGameJam": 'no'
            },
            {
                "name": "WordDart",
                "note": "Last letter arcade",
                "platform": "android",
                "outsideLink": "https://play.google.com/store/apps/details?id=com.michaelkushnir.worddart",
                "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708225/games/icons/y33gzz7rz6c5hwxohlqj.avif",
                "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716711332/games/screenshots/vlgqdmia1meyyu80djah.avif"],
                "isGameJam": 'no'
            }
        ]
        else return []
    }
}