import Cryptr from 'cryptr';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { userService } from '../user/user-service.js';
import { loggerService } from '../../services/logger.js';
export const authService = {
    signup,
    login,
    getLoginToken,
    validateToken,
    checkPassword,
    hashPassword,
    getFrontAPIKeys
};
dotenv.config();
const cryptr = new Cryptr(process.env.DECRYPTION);
async function login(loginId, password) {
    loggerService.debug(`auth - login with loginId: ${loginId}`);
    const user = await userService.getByEmail(loginId);
    if (!user)
        throw new Error('User is unknown!');
    const match = await bcrypt.compare(password, user.password);
    if (!match)
        throw new Error('Password is incorrect!');
    return user;
}
async function signup(password, email, imgUrls) {
    loggerService.debug(`auth - signup with email: ${email}`);
    if (!email || !password)
        throw new Error('Missing required details');
    const hash = await hashPassword(password);
    return userService.save({
        email, password: hash, imgUrls, isAdmin: false,
    });
}
async function checkPassword(password) {
    const isPasswordHashed = /^[$]2[aby][$]/.test(password);
    if (!isPasswordHashed)
        return await hashPassword(password);
    return password;
}
async function hashPassword(password) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}
function getLoginToken(user) {
    const userInfo = { _id: user._id };
    return cryptr.encrypt(JSON.stringify(userInfo));
}
function validateToken(loginToken) {
    try {
        const json = cryptr.decrypt(loginToken);
        const loggedInUser = JSON.parse(json);
        return loggedInUser;
    }
    catch (err) {
        loggerService.error('Invalid login token');
    }
    return null;
}
function getFrontAPIKeys() {
    loggerService.info('Sending API keys');
    const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
    return { recaptchaSiteKey, cloudinary: { cloudName, uploadPreset } };
}
