import { Game, GameQueryParams } from '../../models/game'
import { CustomOption } from '../../models/utility'
import { HttpService } from '../http.service'

const baseUrl: string = 'game/'

export const GameService = {
    query: async (filterBy: GameQueryParams = {}): Promise<any> => {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        return HttpService.get(`${baseUrl}?${queryParams}`)
    },

    getById: async (gameId: string): Promise<Game> => {
        return HttpService.get(`${baseUrl}by-id/${gameId}`)
    },

    getByName: async (gameTitle: string): Promise<Game> => {
        return HttpService.get(`${baseUrl}by-name/${gameTitle}`)
    },

    checkNameAvailable: async (gameTitle: string): Promise<{ isAvailable: boolean }> => {
        return HttpService.get(`${baseUrl}check-name/${gameTitle}`)
    },

    save: async (game: Game): Promise<Game> => {
        if (game._id) return HttpService.put(`${baseUrl}update/${game._id}`, game)
        else return HttpService.post(baseUrl + 'add/', game)
    },

    remove: async (gameId: string): Promise<any> => {
        return HttpService.remove(`${baseUrl}delete/${gameId}`)
    },

    getGenres: (): CustomOption[] => [
        { label: 'Any', value: '', iconName: 'globe' },
        { label: 'Action', value: 'action', iconName: 'action' },
        { label: 'Adventure', value: 'adventure', iconName: 'adventure' },
        { label: 'Other', value: 'other', iconName: 'questionMark' },
        { label: 'Platformer', value: 'platformer', iconName: 'platformer' },
        { label: 'Puzzle', value: 'puzzle', iconName: 'puzzle' },
        { label: 'Roguelike', value: 'roguelike', iconName: 'dice' }
    ],

    getPlatforms: (): CustomOption[] => [
        { label: 'Any', value: '', iconName: 'globe' },
        { label: 'Android', value: 'android', iconName: 'android' },
        { label: 'Browser', value: 'html5', iconName: 'html5' },
        { label: 'Steam', value: 'steam', iconName: 'steam' }
    ],

    getGameJams: (): CustomOption[] => [
        { label: 'Any', value: '', iconName: 'globe' },
        { label: 'Yes', value: 'yes', iconName: 'confirm' },
        { label: 'No', value: 'no', iconName: 'cancel' }
    ]
}