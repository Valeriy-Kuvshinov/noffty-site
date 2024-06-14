import { MailOptions } from '../../models/utility.js'
import { loggerService } from '../../services/logger.service.js'
import { utilityService } from '../../services/utility.service.js'
import { mailUtilService } from '../../services/mail.util.service.js'

export const mailService = {
    sendContactUsMail,
    sendResetCodeMail
}

async function sendContactUsMail(name: string, email: string, title: string, message: string, recaptchaToken: string): Promise<void> {
    await utilityService.verifyRecaptcha(recaptchaToken)

    loggerService.debug(`Sending email containing: ${name}, ${email}, ${title}, ${message}`)
    const emailHtml = `
        <p>${message}</p>
        <hr>
        <p>This message was sent by <b>${name}</b>.</p>
        <p>Contact him back via the email <b>${email}</b>, or by pressing the Reply button.</p>
    `
    const mailOptions: MailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: process.env.RECEIVER_EMAIL_ADDRESS ?? '',
        replyTo: email,
        subject: `From ${name}, topic: ${title}`,
        text: `${message}, This message was sent by ${name}.
        Contact him back via this email: ${email}, or by pressing the Reply button.`,
        html: mailUtilService.prepareEmailBody(emailHtml),
    }
    await mailUtilService.sendEmail(mailOptions)
}

async function sendResetCodeMail(email: string, code: string): Promise<void> {
    loggerService.debug(`Sending reset code email containing: ${email}, ${code}`)
    const emailHtml = `
        <p>Dear user,</p>
        <p>To proceed with resetting the password / email of your account, please copy the following code:</p>
        <p><b>${code}</b></p>
        <p>Do not give this code to anyone!</p>
        <hr>
        <p>If you did not request a user reset, please ignore this email or contact us through the site.</p>
    `
    const mailOptions: MailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: email,
        subject: `Reset user at Ori-Carlin`,
        text: `Dear user, To proceed with reseting the password / email of your account,
        please copy the following code: ${code}.
        Do not give this code to anyone!
        If you did not request a user reset, please ignore this email or contact us through the site.`,
        html: mailUtilService.prepareEmailBody(emailHtml),
    }
    await mailUtilService.sendEmail(mailOptions)
}