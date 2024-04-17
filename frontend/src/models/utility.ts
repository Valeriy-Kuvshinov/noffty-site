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