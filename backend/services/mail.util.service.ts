import nodemailer, { Transporter } from 'nodemailer'
import { MailOptions } from '../models/utility.js'
import { loggerService } from './logger.service.js'

export const mailUtilService = {
    prepareEmailBody,
    sendEmail,
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