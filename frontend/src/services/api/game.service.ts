import { Game, GameQueryParams } from '../../models/game'
import { CustomOption } from '../../models/utility'
import { HttpService } from './../http.service'

const baseUrl: string = 'game/'

export class GameService {
    async query(filterBy: GameQueryParams = {}): Promise<any> {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        console.log(`Excepted request to backend: ${baseUrl}?${queryParams}`)
        return HttpService.get(`${baseUrl}?${queryParams}`)
    }

    async getById(gameId: string): Promise<any> {
        return HttpService.get(`${baseUrl}by-id/${gameId}`)
    }

    async getByName(gameName: string): Promise<any> {
        return HttpService.get(`${baseUrl}by-name/${gameName}`)
    }

    async save(game: Game): Promise<any> {
        if (game._id) {
            return HttpService.put(`${baseUrl}update/${game._id}`, game)
        } else return HttpService.post(baseUrl + 'add/', game)
    }

    async remove(id: string): Promise<any> {
        return HttpService.remove(`${baseUrl}delete/${id}`)
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

    getGenres(): CustomOption[] {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Action', value: 'action', iconName: 'action' },
            { label: 'Adventure', value: 'adventure', iconName: 'adventure' },
            { label: 'Other', value: 'other', iconName: 'questionMark' },
            { label: 'Platformer', value: 'platformer', iconName: 'platformer' },
            { label: 'Puzzle', value: 'puzzle', iconName: 'puzzle' },
            { label: 'Roguelike', value: 'roguelike', iconName: 'dice' }
        ]
    }

    getPlatforms(): CustomOption[] {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Android', value: 'android', iconName: 'android' },
            { label: 'Browser', value: 'html5', iconName: 'html5' },
            { label: 'Steam', value: 'steam', iconName: 'steam' }
        ]
    }

    getGameJams(): CustomOption[] {
        return [
            { label: 'Any', value: '', iconName: 'globe' },
            { label: 'Yes', value: 'yes', iconName: 'confirm' },
            { label: 'No', value: 'no', iconName: 'cancel' }
        ]
    }
}