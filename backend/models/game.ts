import { ObjectId } from "mongodb"

export interface Game {
    _id?: ObjectId
    name: string
    note: string
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
    icon: string
    screenshots: string[]
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