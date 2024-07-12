import { cloudinaryService } from "./cloudinary.js"
import { loggerService } from "./logger.js"

const GAMES_COLLECTION = 'game'

interface Task {
    task: () => Promise<any>
    taskName: string
    hour: number
    minute: number
}

export const automationService = {
    setupOrphanedImageCheck,
}

function setupOrphanedImageCheck(): void {
    // Schedule task for checking redundant product images
    _scheduleTask({
        task: () => cloudinaryService.checkOrphanedImages(GAMES_COLLECTION,
            ['games/screenshots', 'games/icons']),
        taskName: 'Orphaned Product Images Check',
        hour: 22, minute: 0
    })
}

function _scheduleTask({ task, taskName, hour, minute }: Task): void {
    const scheduleNextRun = () => {
        const now = new Date()
        let targetTime = new Date(now.getFullYear(), now.getMonth(),
            now.getDate(), hour, minute, 0)
        loggerService.info(`Target time: ${targetTime.toLocaleString()} for ${taskName}`)

        if (now >= targetTime) {
            // If the target time for today has passed, schedule for tomorrow
            loggerService.info(`Target time has passed for ${taskName}, scheduling for tomorrow`)
            targetTime.setDate(targetTime.getDate() + 1)
        }
        // Log when the next scheduled task will happen
        loggerService.info(`Next time ${taskName} will happen at: ${targetTime.toLocaleString()}`)

        const delay = targetTime.getTime() - now.getTime()

        setTimeout(async () => {
            loggerService.info(`Scheduled ${taskName} is starting at: ${new Date().toLocaleString()}`)
            try {
                await task()
                loggerService.info(`Scheduled ${taskName} completed.`)
            } catch (err) {
                loggerService.error(`Scheduled ${taskName} failed:`, err)
                throw err
            }
            scheduleNextRun() // Schedule the next run for tomorrow
        }, delay)
    }
    scheduleNextRun()
}