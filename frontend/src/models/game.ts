export interface Game {
    _id?: string
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