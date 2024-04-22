import { MailOptions } from '../../models/utility.js'
import { loggerService } from '../../services/logger.service.js'
import { utilityService } from '../../services/utility.service.js'
import { mailUtilService } from '../../services/mail.util.service.js'

export const mailService = {
    sendContactUsMail,
    sendVerificationMail,
    sendResetCodeMail,
    sendUserUpdatedMail
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

async function sendVerificationMail(username: string, email: string, code: string): Promise<void> {
    loggerService.debug(`Sending auth email containing: ${username}, ${email}, ${code}`)
    const emailHtml = `
        <p>Dear ${username},</p>
        <p>In order to continue using our site, we'll need you to verify your account.</p>
        <p>Please use the following code to complete the process:</p>
        <p><b>${code}</b></p>
        <hr>
        <p>If you did not request this, you may ignore this email.</p>
        <p>The account will be deleted within 24 hours, if left unverified.</p>
    `
    const mailOptions: MailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: email,
        subject: `Verify your account`,
        text: `Dear ${username}, In order to continue using our site,
        we'll need you to verify your account.
        Please use the following code to complete the process: ${code}.
        If you did not request this, you may ignore this email.
        The account will be deleted within 24 hours, if left unverified.`,
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

async function sendUserUpdatedMail(username: string, email: string): Promise<void> {
    loggerService.debug(`Sending user updated email containing: ${username}, ${email}`)

    const updateDate = utilityService.formatDate()
    const emailHtml = `
        <p>Dear ${username},</p>
        <p>We noticed that your account's password / email has changed recently.</p>
        <p>The change happend at around ${updateDate} - US New York Time.</p>
        <p>We sent you this email to be sure, that you in fact made the changes.</p>
        <hr>
        <p>If you did not perform this action, do not hesitate and contact us ASAP!</p>
    `
    const mailOptions: MailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: email,
        subject: `Account Updated at Ori-Carlin`,
        text: `Dear ${username}, we noticed that your account's password / email has changed recently.
        The change happend at around ${updateDate} - US New York Time.
        We sent you this email to be sure, that you in fact made the changes.
        If you did not perform this action, do not hesitate and contact us ASAP!`,
        html: mailUtilService.prepareEmailBody(emailHtml),
    }
    await mailUtilService.sendEmail(mailOptions)
}