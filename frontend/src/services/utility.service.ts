import { LinkTypeTwo } from "../models/utility"
import { HttpService } from './http.service'

export const UtilityService = {
    getRecaptchaKey,
    getBrowserName,
    getAllowAttributes,
    capitalizeString,
    upperCaseString,
    formatDate,
    getYouTubeEmbedUrl,
    areEqual,
    getSocialLinks
}

async function getRecaptchaKey(): Promise<any> {
    return HttpService.get(`auth/recaptcha`)
}

function getBrowserName() {
    const userAgent = navigator.userAgent.toLowerCase()
    switch (true) {
        case userAgent.includes("chrome") && !userAgent.includes("edg"):
            return "Chrome"
        case userAgent.includes("firefox"):
            return "Firefox"
        case userAgent.includes("safari") && !userAgent.includes("chrome"):
            return "Safari"
        case userAgent.includes("edg"):
            return "Edge"
        default:
            return "Other"
    }
}

function getAllowAttributes() {
    const browser = getBrowserName()
    switch (browser) {
        case "Chrome":
        case "Edge":
            return "fullscreen; midi; gyroscope; accelerometer; cross-origin-isolated;"
        case "Firefox":
            return "fullscreen; midi; accelerometer;"
        default:
            return "fullscreen; midi;"
    }
}

function capitalizeString(str: string): string {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()).join(' ')
}

function upperCaseString(str: string): string {
    return str.toUpperCase()
}

function formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    const day = date.getDate().toString().padStart(2, '0')
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}

function getYouTubeEmbedUrl(url: string): string {
    const videoId = new URLSearchParams(new URL(url).search).get('v')
    return `https://www.youtube.com/embed/${videoId}`
}

function areEqual<T extends object>(obj1: T, obj2: T): boolean {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    for (const key of keys1) {
        if (obj1[key as keyof T] !== obj2[key as keyof T]) return false
    }
    return true
}

function getSocialLinks(): LinkTypeTwo[] {
    return [
        { iconName: "discord", link: "https://discord.gg/SeNsSRt", ariaLabel: "Go to Noffty's Discord channel" },
        { iconName: "itch", link: "https://t1mure.itch.io/", ariaLabel: "Go to T1mure's Itch.io account" },
        { iconName: "googlePlay", link: "https://play.google.com/store/apps/dev?id=8915839538887603911&", ariaLabel: "Go to Noffty's Google Play account" },
        { iconName: "youtube", link: "https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA", ariaLabel: "Go to Noffty's YouTube channel" }
    ]
}