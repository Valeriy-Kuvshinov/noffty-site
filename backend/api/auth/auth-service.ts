import Cryptr from 'cryptr'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { User } from '../../interfaces/user.js'
import { userService } from '../user/user-service.js'
import { loggerService } from '../../services/logger.js'

export const authService = {
  signup,
  login,
  getLoginToken,
  validateToken,
  checkPassword,
  hashPassword,
  getFrontAPIKeys
}
dotenv.config()

const cryptr = new Cryptr(process.env.DECRYPTION!)

async function login(loginId: string, password: string): Promise<User | null> {
  loggerService.debug(`auth - login with loginId: ${loginId}`)

  const user = await userService.getByEmail(loginId)

  if (!user) throw new Error('Invalid loginId or password')

  const match = await bcrypt.compare(password, user.password!)
  if (!match) throw new Error('Invalid loginId or password')

  return user
}

async function signup(password: string, email: string, imgUrls: string[]): Promise<User> {
  loggerService.debug(`auth - signup with email: ${email}`)

  if (!email || !password) throw new Error('Missing required details')
  const hash = await hashPassword(password)

  return userService.save({
    email,
    password: hash,
    imgUrls,
    isAdmin: false,
  })
}

async function checkPassword(password: string): Promise<string> {
  const isPasswordHashed = /^[$]2[aby][$]/.test(password)
  if (!isPasswordHashed) return await hashPassword(password)
  return password
}

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  const hash = await bcrypt.hash(password, saltRounds)
  return hash
}

function getLoginToken(user: User): string {
  const userInfo: User = { _id: user._id! }
  return cryptr.encrypt(JSON.stringify(userInfo))
}

function validateToken(loginToken: string): User | null {
  try {
    const json = cryptr.decrypt(loginToken)
    const loggedInUser: User = JSON.parse(json)

    return loggedInUser
  } catch (err) {
    loggerService.error('Invalid login token')
  }
  return null
}

function getFrontAPIKeys(): { recaptchaSiteKey: string; cloudinary: { cloudName: string; uploadPreset: string } } {
  loggerService.info('Sending API keys')

  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY!
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET!

  return { recaptchaSiteKey, cloudinary: { cloudName, uploadPreset } }
}