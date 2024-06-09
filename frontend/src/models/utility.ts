export interface IconDictionary {
    [key: string]: string
}

export interface SvgProp {
    iconName: string
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

export interface Option {
    value: string
    label: string
    iconName: string
}