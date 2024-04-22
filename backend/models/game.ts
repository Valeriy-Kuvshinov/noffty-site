import { ObjectId } from "mongodb"

export interface Game {
    _id?: ObjectId
    name: string
    note: string
    type: string
    outsideLink: string
    description: string
    controls: string
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