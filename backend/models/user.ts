import { ObjectId } from "mongodb"

export interface LoginRequestBody {
    loginId: string
    password: string
    recaptchaToken: string
}

export interface SignupRequestBody {
    email: string
    password: string
    imgUrls?: string[]
    recaptchaToken: string
}

export interface User {
    _id?: ObjectId
    password?: string
    email?: string
    imgUrls?: string[]
    createdAt?: number
    isAdmin?: boolean
}

export interface UserQueryParams {
    userId?: string
    email?: string
}