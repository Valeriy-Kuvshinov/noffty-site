export interface Game {
    _id?: string
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