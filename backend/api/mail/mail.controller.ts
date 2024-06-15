import express, { Router, Request, Response } from 'express'
import { ContactUsReqBody, VerificationMailReqBody } from '../../models/utility.js'
import { loggerService } from '../../services/logger.service.js'
import { mailService } from './mail.service.js'

// mail routes
export const mailRoutes: Router = express.Router()

mailRoutes.post('/contact', _sendContactUsMail)
mailRoutes.post('/reset', _sendResetCodeMail)

// mail controller functions
async function _sendContactUsMail(req: Request<ContactUsReqBody>,
    res: Response): Promise<void> {
    const { name, email, title, message, recaptchaToken } = req.body
    loggerService.debug(`Received contact form data: ${name}, ${email}, ${title}, ${message}, ${recaptchaToken}`)

    try {
        await mailService.sendContactUsMail(name, email, title, message, recaptchaToken)
        res.status(200).send({ msg: 'Mail successfully sent' })
    } catch (error) {
        loggerService.error('Failed sending mail: ' + error)
        res.status(500).send({ error: 'Failed sending mail' })
    }
}

async function _sendResetCodeMail(req: Request<VerificationMailReqBody>,
    res: Response): Promise<void> {
    const { email, code } = req.body
    loggerService.debug(`Received reset code form data: ${email}, ${code}`)

    try {
        await mailService.sendResetCodeMail(email, code)
        res.status(200).send({ msg: 'Mail successfully sent' })
    } catch (error) {
        loggerService.error('Failed sending mail: ' + error)
        res.status(500).send({ error: 'Failed sending mail' })
    }
}