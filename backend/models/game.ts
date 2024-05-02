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
        name?: { $regex: RegExp }
        platform?: string
        genre?: { $in: string[] }
        isGameJam?: boolean
    }
}

export interface GameQueryParams {
    name?: string
    platform?: string
    genre?: string
    isGameJam?: boolean
}