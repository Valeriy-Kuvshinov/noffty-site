import express, { Router, Request, Response } from 'express'
import { LoginRequestBody, SignupRequestBody } from '../../models/user.js'
import { authService } from './auth.service.js'
import { loggerService } from '../../services/logger.service.js'
import { utilityService } from '../../services/utility.service.js'

// auth routes
export const authRoutes: Router = express.Router()

authRoutes.post('/login', _login)
authRoutes.post('/signup', _signup)
authRoutes.post('/logout', _logout)
authRoutes.get('/recaptcha', _getRecaptchaKey)

// auth controller functions
async function _login(req: Request<LoginRequestBody>,
  res: Response): Promise<void> {
  const { loginId, password, recaptchaToken } = req.body

  try {
    await utilityService.verifyRecaptcha(recaptchaToken)
    const user = await authService.login(loginId, password)
    const loginToken = authService.getLoginToken(user!)

    loggerService.info('User login: ', loginToken)

    res.cookie('loginToken', loginToken, { httpOnly: true, sameSite: 'none', secure: true })
    res.json(user)
  } catch (err) {
    const error = err as { message: string }
    loggerService.error('Failed to Login ', error)

    if (error.message === 'Invalid reCAPTCHA') res.status(401).send({ err: 'Invalid reCAPTCHA' })
    else res.status(500).send({ err: 'Failed to Login' })
  }
}

async function _signup(req: Request<SignupRequestBody>,
  res: Response): Promise<void> {
  const { password, email, imgUrls, recaptchaToken } = req.body

  try {
    await utilityService.verifyRecaptcha(recaptchaToken)
    const account = await authService.signup(email, password, imgUrls)
    loggerService.debug(`auth.route - new account created: ${JSON.stringify(account)}`)

    const user = await authService.login(email, password)
    const loginToken = authService.getLoginToken(user!)

    loggerService.info('User signup: ', loginToken)
    res.cookie('loginToken', loginToken, { httpOnly: true, sameSite: 'none', secure: true })
    res.json(user)
  } catch (err) {
    const error = err as { message: string }
    loggerService.error('Failed to Login ', error)

    if (error.message === 'Invalid reCAPTCHA') res.status(401).send({ err: 'Invalid reCAPTCHA' })
    else res.status(500).send({ err: 'Failed to Signup' })
  }
}

async function _logout(req: Request, res: Response): Promise<void> {
  try {
    res.clearCookie('loginToken')
    res.status(200).send({ msg: 'Logged out successfully' })
  } catch (err) {
    loggerService.error('Failed to logout ', err)
    res.status(500).send({ err: 'Failed to logout' })
  }
}

async function _getRecaptchaKey(req: Request, res: Response): Promise<void> {
  try {
    loggerService.info('Fetching Recaptcha site key')
    const recaptchaSiteKey = authService.getRecaptchaSiteKey()
    res.json({ siteKey: recaptchaSiteKey })
    loggerService.info('Recaptcha site key sent successfully')
  } catch (err) {
    loggerService.error('Failed to fetch reCAPTCHA site key', err)
    res.status(500).send({ err: 'Failed to fetch reCAPTCHA site key' })
  }
}