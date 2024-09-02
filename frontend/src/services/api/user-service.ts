import { User, UserLogin, UserSignup } from "../../interfaces/user"
import { httpService } from "../http-service"

const SESSION_KEY_LOGGEDIN_USER: string = 'loggedinUser'
const baseUrl: string = 'user/'

export const userService = {
    query: async (filterBy = {}): Promise<any> => {
        try {
            const queryParams = new URLSearchParams(filterBy as any).toString()
            console.log(`Expected request to backend: ${baseUrl}?${queryParams}`)
            return httpService.get(`${baseUrl}?${queryParams}`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    getById: async (userId: string): Promise<User> => {
        try {
            return httpService.get(`${baseUrl}by-id/${userId}`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    getByEmail: async (email: string): Promise<User> => {
        try {
            return httpService.get(`${baseUrl}by-email/${email}`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    remove: async (userId: string): Promise<any> => {
        try {
            return httpService.remove(`${baseUrl}delete/${userId}`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    save: async (user: User): Promise<User> => {
        try {
            if (user._id) return httpService.put(`${baseUrl}update/${user._id}`, user)
            else return httpService.post(baseUrl + 'add/', user)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    login: async (userCred: UserLogin): Promise<User> => {
        try {
            const user = await httpService.post('auth/login', userCred)
            userService.setLoggedinUser(user)
            return user
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    signup: async (signupData: UserSignup): Promise<User> => {
        try {
            const newUser = await httpService.post('auth/signup', signupData)
            userService.setLoggedinUser(newUser)
            return newUser
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    logout: async (): Promise<void> => {
        try {
            await httpService.post('auth/logout', null)
            sessionStorage.removeItem(SESSION_KEY_LOGGEDIN_USER)
        } catch (error: any) {
            throw new Error(error.message)
        }
    },

    getLoggedinUser: (): User | null => {
        const user = sessionStorage.getItem(SESSION_KEY_LOGGEDIN_USER)
        return user ? JSON.parse(user) : null
    },

    setLoggedinUser: (user: User): void => {
        const userForSession = { _id: user._id }
        sessionStorage.setItem(SESSION_KEY_LOGGEDIN_USER, JSON.stringify(userForSession))
    }
}