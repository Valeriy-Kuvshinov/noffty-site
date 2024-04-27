
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
}