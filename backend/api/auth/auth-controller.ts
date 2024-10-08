import express, { Router, Request, Response } from 'express'
import { LoginRequestBody, SignupRequestBody } from '../../interfaces/user.js'
import { authService } from './auth-service.js'
import { loggerService } from '../../services/logger.js'
import { utilityService } from '../../services/utility.js'

// auth routes
export const authRoutes: Router = express.Router()

authRoutes.post('/login', _login)
authRoutes.post('/signup', _signup)
authRoutes.post('/logout', _logout)
authRoutes.get('/api-keys', _getAPIKeys)

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
    loggerService.error('Failed to Login...', error)

    if (error.message === 'Invalid reCAPTCHA') res.status(401).send({ errorMessage: 'Invalid reCAPTCHA' })
    else res.status(401).send({ errorMessage: error.message })
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

    if (error.message === 'Invalid reCAPTCHA') res.status(401).send({ errorMessage: 'Invalid reCAPTCHA' })
    else res.status(401).send({ errorMessage: error.message })
  }
}

async function _logout(req: Request, res: Response): Promise<void> {
  try {
    res.clearCookie('loginToken')
    res.status(200).send({ msg: 'Logged out successfully' })
  } catch (err) {
    loggerService.error('Failed to logout ', err)
    res.status(500).send({ errorMessage: 'Failed to logout' })
  }
}

async function _getAPIKeys(req: Request, res: Response): Promise<void> {
  try {
    const apiKeys = authService.getFrontAPIKeys()
    res.json(apiKeys)
  } catch (err) {
    loggerService.error('Failed to fetch API keys', err)
    res.status(500).send({ errorMessage: 'Failed to fetch API keys' })
  }
}