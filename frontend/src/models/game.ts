export interface Game {
    _id?: string
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