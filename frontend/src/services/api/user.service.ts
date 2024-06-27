import { User, UserLogin, UserSignup } from "../../models/user"
import { HttpService } from "../http.service"

const SESSION_KEY_LOGGEDIN_USER: string = 'loggedinUser'
const baseUrl: string = 'user/'

export class UserService {
    async query(filterBy = {}): Promise<any> {
        const queryParams = new URLSearchParams(filterBy as any).toString()
        console.log(`Excepted request to backend: ${baseUrl}?${queryParams}`)
        return HttpService.get(`${baseUrl}?${queryParams}`)
    }

    async getById(userId: string): Promise<User> {
        return HttpService.get(`${baseUrl}by-id/${userId}`)
    }

    async getByEmail(email: string): Promise<User> {
        return HttpService.get(`${baseUrl}by-email/${email}`)
    }

    async remove(userId: string): Promise<any> {
        return HttpService.remove(`${baseUrl}delete/${userId}`)
    }

    async save(user: User): Promise<User> {
        if (user._id) {
            return HttpService.put(`${baseUrl}update/${user._id}`, user)
        } else return HttpService.post(baseUrl + 'add/', user)
    }

    async login(userCred: UserLogin): Promise<User> {
        const user = await HttpService.post('auth/login', userCred)
        this.setLoggedinUser(user)
        return user
    }

    async signup(signupData: UserSignup): Promise<User> {
        const newUser = await HttpService.post('auth/signup', signupData)
        this.setLoggedinUser(newUser)
        return newUser
    }

    async logout(): Promise<void> {
        await HttpService.post('auth/logout', null)
        sessionStorage.removeItem(SESSION_KEY_LOGGEDIN_USER)
    }

    getLoggedinUser(): User | null {
        const user = sessionStorage.getItem(SESSION_KEY_LOGGEDIN_USER)
        return user ? JSON.parse(user) : null
    }

    setLoggedinUser(user: User): void {
        const userForSession = { _id: user._id }
        sessionStorage.setItem(SESSION_KEY_LOGGEDIN_USER, JSON.stringify(userForSession))
    }
}