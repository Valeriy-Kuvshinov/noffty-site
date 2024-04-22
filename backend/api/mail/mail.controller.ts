import express, { Router, Request, Response } from 'express'
import { ContactUsRequestBody } from '../../models/utility.js'
import { loggerService } from '../../services/logger.service.js'
import { mailService } from './mail.service.js'

// mail routes
export const mailRoutes: Router = express.Router()

mailRoutes.post('/contact', _sendContactUsMail)

// mail controller functions
async function _sendContactUsMail(req: Request<ContactUsRequestBody>,
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