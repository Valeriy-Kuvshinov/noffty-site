import { User, UserLogin, UserSignup } from "../../models/user"
import { HttpService } from "../http.service"

const SESSION_KEY_LOGGEDIN_USER: string = 'loggedinUser'
const baseUrl: string = 'user/'

export const UserService = {
    query: async (filterBy = {}): Promise<any> => {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        console.log(`Expected request to backend: ${baseUrl}?${queryParams}`)
        return HttpService.get(`${baseUrl}?${queryParams}`)
    },

    getById: async (userId: string): Promise<User> => {
        return HttpService.get(`${baseUrl}by-id/${userId}`)
    },

    getByEmail: async (email: string): Promise<User> => {
        return HttpService.get(`${baseUrl}by-email/${email}`)
    },

    remove: async (userId: string): Promise<any> => {
        return HttpService.remove(`${baseUrl}delete/${userId}`)
    },

    save: async (user: User): Promise<User> => {
        if (user._id) return HttpService.put(`${baseUrl}update/${user._id}`, user)
        else return HttpService.post(baseUrl + 'add/', user)
    },

    login: async (userCred: UserLogin): Promise<User> => {
        const user = await HttpService.post('auth/login', userCred)
        UserService.setLoggedinUser(user)
        return user
    },

    signup: async (signupData: UserSignup): Promise<User> => {
        const newUser = await HttpService.post('auth/signup', signupData)
        UserService.setLoggedinUser(newUser)
        return newUser
    },

    logout: async (): Promise<void> => {
        await HttpService.post('auth/logout', null)
        sessionStorage.removeItem(SESSION_KEY_LOGGEDIN_USER)
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