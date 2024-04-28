import { ObjectId } from "mongodb"

export interface Game {
    _id?: ObjectId
    name: string
    note: string
    platform: string
    outsideLink?: string
    gameLink?: string
    description?: string
    controls?: string
    genre?: string
    tags?: string[]
    devlog?: string
    walkthrough?: string
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