import fs from 'fs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb'
import nodemailer, { Transporter } from 'nodemailer'
import { MailOptions } from '../interfaces/utility.js'
import { loggerService } from './logger.js'

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
    formatText,
    prepareEmailBody,
    sendEmail
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

// generic function for preparing a somewhat neat looking email
function prepareEmailBody(emailHtml: string): string {
    const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919435/ydjn6p0djqwbkko4zqts.png'
    return `
    <div style="display: flex; height: 100%; margin: 0 auto; max-width:800px; background-color: #0a0a0a;">
        <div style="width: 100%; padding: 20px; font-size: 1rem; color: #F5F5F5; background-color: #0a0a0a;">
            <a href="https://noffty.productions" style="display: block; width: fit-content; margin: 0 auto; color: #F5F5F5;">
                <img src="${siteLogo}" alt="noffty productions" style="height: 32px; width: 32px;">
            </a>
            ${emailHtml}
            <p>Sincerely,<br>The Noffty Productions Team<br></p>
        </div>
    </div>`
}

// generic function to send emails using your MailOptions interface
async function sendEmail(mailOptions: MailOptions): Promise<void> {
    const transporter = _createTransporter()
    try {
        await transporter.sendMail(mailOptions)
        loggerService.debug('Email sent successfully')
    } catch (error) {
        loggerService.error('Error sending email:', error)
        throw error
    }
}

// utility function to create and return a transporter
function _createTransporter(): Transporter {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_GMAIL_ADDRESS ?? '',
            pass: process.env.SENDER_GMAIL_PASSWORD ?? '',
        },
    })
}