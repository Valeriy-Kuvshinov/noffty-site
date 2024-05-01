import { ObjectId } from "mongodb"

export interface Game {
    _id?: ObjectId
    name: string
    note: string
    icon: string
    screenshots: string[]
    platform: string
    outsideLink?: string
    gameLink?: string
    description?: string
    credits?: string
    controls?: string
    genre?: string[]
    devlog?: string
    walkthrough?: string
    isGameJam: boolean
    createdAt?: number
}

export interface MatchCriteria {
    $match: {
        $or?: Array<{ name: { $regex: RegExp } } |
        { description: { $regex: RegExp } }>
    }
}

export interface GameQueryParams {
    search?: string
}