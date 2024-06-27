export interface User {
    _id?: string
    password?: string
    email?: string
    imgUrls?: string[]
    isAdmin?: boolean
}

export interface UserLogin {
    loginId: string
    password: string,
    recaptchaToken: string | null
}

export interface UserSignup {
    fullName: string
    username: string
    email: string
    imgUrls: string[]
    password: string,
    recaptchaToken: string | null
}