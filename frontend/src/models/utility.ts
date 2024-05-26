import { ReactNode } from "react"

export interface IconDictionary {
    [key: string]: string
}

export interface SvgProp {
    iconName: string
}

export interface RootLayoutProps {
    children: ReactNode
}

export interface LinkTypeOne {
    name: string
    image: string
    ariaLabel: string
}

export interface LinkTypeTwo {
    iconName: string
    link: string
    ariaLabel: string
}