export interface Game {
    _id?: string
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

export interface GameQueryParams {
    title?: string
    platform?: string
    genre?: string
    isGameJam?: string
}