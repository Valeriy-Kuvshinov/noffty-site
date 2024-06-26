import fs from 'fs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb'
import { loggerService } from './logger.service.js'

interface RecaptchaResponse {
    success: boolean
    'error-codes'?: string[]
}

export const utilityService = {
    readJsonFile,
    makeId,
    idToObjectId,
    verifyRecaptcha,
    escapeRegExp,
    formatText
}
dotenv.config()

function readJsonFile(filePath: string): any {
    const str = fs.readFileSync(filePath, 'utf8')
    const json = JSON.parse(str)
    return json
}

function makeId(length: number = 6): string {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function idToObjectId(oldId: string | string[] | { _id: string }):
    ObjectId | ObjectId[] | { _id: ObjectId } {
    if (Array.isArray(oldId)) return oldId.map(aId => new ObjectId(aId))

    else if (typeof oldId === 'object' && oldId !== null) {
        if ('_id' in oldId) return { _id: new ObjectId(oldId._id) }

        // Handle other object shapes as needed
        throw new Error('Unhandled object shape for idToObjectId')
    } else return new ObjectId(oldId)
}

async function verifyRecaptcha(token: string): Promise<void> {
    loggerService.debug('received recaptcha token:', token)

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })
    const data = await response.json() as RecaptchaResponse
    loggerService.debug('reCAPTCHA API response:', data)

    if (!data.success) {
        loggerService.error('reCAPTCHA verification failed:', data['error-codes'])
        throw new Error('Invalid reCAPTCHA')
    }
}

function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function formatText(string: string) {
    return string.replace(/\n/g, '<br>')
}