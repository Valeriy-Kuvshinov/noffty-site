export interface Game {
    _id?: string
    name: string
    note: string
    type: string
    outsideLink?: string
    gameLink?: string
    description?: string
    controls?: string
    icon: string
    screenshots: string[]
}