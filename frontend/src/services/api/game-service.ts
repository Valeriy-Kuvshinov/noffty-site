import { Game, GameQueryParams } from '../../interfaces/game'
import { CustomOption } from '../../interfaces/utility'
import { httpService } from '../http-service'

const baseUrl: string = 'game/'

export const gameService = {
    query: async (filterBy: GameQueryParams = {}): Promise<any> => {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        return httpService.get(`${baseUrl}?${queryParams}`)
    },

    getById: async (gameId: string): Promise<Game> => {
        return httpService.get(`${baseUrl}by-id/${gameId}`)
    },

    getByName: async (gameTitle: string): Promise<Game> => {
        return httpService.get(`${baseUrl}by-name/${gameTitle}`)
    },

    checkNameAvailable: async (gameTitle: string): Promise<{ isAvailable: boolean }> => {
        return httpService.get(`${baseUrl}check-name/${gameTitle}`)
    },

    save: async (game: Game): Promise<Game> => {
        if (game._id) return httpService.put(`${baseUrl}update/${game._id}`, game)
        else return httpService.post(baseUrl + 'add/', game)
    },

    remove: async (gameId: string): Promise<any> => {
        return httpService.remove(`${baseUrl}delete/${gameId}`)
    },

    getGenres: (): CustomOption[] => [
        { label: 'Any', value: '', iconName: 'globe' },
        { label: 'Action', value: 'action', iconName: 'action' },
        { label: 'Adventure', value: 'adventure', iconName: 'adventure' },
        { label: 'Other', value: 'other', iconName: 'questionMark' },
        { label: 'Platformer', value: 'platformer', iconName: 'platformer' },
        { label: 'Puzzle', value: 'puzzle', iconName: 'puzzle' },
        { label: 'Roguelike', value: 'roguelike', iconName: 'dice' },
        { label: 'Strategy', value: 'strategy', iconName: 'rook' }
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