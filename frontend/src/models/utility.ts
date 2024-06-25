export interface LinkTypeTwo {
    iconName: string
    link: string
    ariaLabel: string
}

export interface CustomOption {
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

export interface ValidationOptions {
    minLength?: number
    pattern?: RegExp
    required?: boolean
    noLetters?: boolean
    noDigits?: boolean
    email?: boolean
    link?: boolean
}

export interface VerificationMailReqBody {
    username?: string
    email: string
    code?: string
}

export interface ApiKeys {
    recaptchaSiteKey: string
    cloudinary: {
        cloudName: string
        uploadPreset: string
    }
}