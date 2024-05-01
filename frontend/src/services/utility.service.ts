
export class UtilityService {
    getBrowserName() {
        const userAgent = navigator.userAgent

        if (userAgent.includes("Firefox")) return "Firefox"
        else if (userAgent.includes("Chrome")) return "Chrome"
        else if (userAgent.includes("Safari")) return "Safari"
        else return "Other"
    }

    getAllowAttributes() {
        const browser = this.getBrowserName()
        switch (browser) {
            case "Firefox":
                return "fullscreen; midi;"
            case "Chrome":
                return "fullscreen; midi; gyroscope; accelerometer; cross-origin-isolated;"
            default:
                return "fullscreen; midi;"
        }
    }

    capitalizeString(str: string) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()).join(' ')
    }

    upperCaseString(str: string): string {
        return str.toUpperCase()
    }

    formatDate(timestamp: number) {
        const date = new Date(timestamp * 1000)
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]

        const day = date.getDate().toString().padStart(2, '0')
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()

        return `${day} ${month} ${year}`
    }

    getYouTubeEmbedUrl(url: string): string {
        const videoId = new URLSearchParams(new URL(url).search).get('v')
        return `https://www.youtube.com/embed/${videoId}`
    }
}