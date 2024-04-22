export interface Game {
    _id?: string
    name: string
    note: string
    type: string
    outsideLink: string
    description: string
    controls: string
    icon: string
    screenshots: string[]
}

export interface MiniGame {
    name: string
    note: string
    type: string
    outsideLink: string
    icon: string
    screenshots: string[]
}