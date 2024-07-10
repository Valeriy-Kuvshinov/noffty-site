import { ObjectId } from "mongodb"

export interface Game {
    _id?: ObjectId
    title: string
    subtitle: string
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
    isGameJam: string
    createdAt?: number
}

export interface MatchCriteria {
    $match: {
        title?: { $regex: RegExp }
        platform?: string
        genre?: { $in: string[] }
        isGameJam?: string
    }
}

export interface GameQueryParams {
    title?: string
    platform?: string
    genre?: string
    isGameJam?: string
}