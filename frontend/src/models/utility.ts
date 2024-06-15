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

interface Social {
    url: string
    iconName: string
    userName: string
}

interface Contribution {
    game: string
    role: string
}

export interface Person {
    name: string
    social?: Social[]
    contributions: Contribution[]
}

export interface ContactUsReqBody {
    name: string
    email: string
    title: string
    message: string
    recaptchaToken: string
}

export interface VerificationMailReqBody {
    username?: string
    email: string
    code?: string
}