import { loggerService } from '../../services/logger.js';
import { utilityService } from '../../services/utility.js';
export const mailService = {
    sendContactUsMail,
    sendResetCodeMail
};
async function sendContactUsMail(data) {
    const { name, email, title, requestType, message, recaptchaToken } = data;
    await utilityService.verifyRecaptcha(recaptchaToken);
    loggerService.debug(`Sending email containing: ${name}, ${email},
         ${title}, ${requestType}, ${message}`);
    const emailHtml = `
        <p>Dear admin, a new message from Contact Us has arrived.</p>
        <p>Message type: ${requestType}</p>
        <hr>
        <p>${message}</p>
        <hr>
        <p>This message was sent by <b>${name}</b>.</p>
        <p>Contact them back via the email <b>${email}</b>, or by pressing the Reply button.</p>
    `;
    const mailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: process.env.RECEIVER_EMAIL_ADDRESS ?? '',
        replyTo: email,
        subject: `Contact message: "${title}"`,
        text: `Dear admin, a new message from Contact Us has arrived.
        Message type: ${requestType}.
        ${message}, This message was sent by ${name}.
        Contact them back via this email: ${email}, or by pressing the Reply button.`,
        html: utilityService.prepareEmailBody(emailHtml),
    };
    await utilityService.sendEmail(mailOptions);
}
async function sendResetCodeMail(email, code) {
    loggerService.debug(`Sending reset code email containing: ${email}, ${code}`);
    const emailHtml = `
        <p>Dear admin,</p>
        <p>To proceed with resetting the password of your account, please copy the following code:</p>
        <p><b>${code}</b></p>
        <p>Do not give this code to anyone!</p>
        <hr>
        <p>If you did not request a user reset, please ignore this email or contact us through the site.</p>
    `;
    const mailOptions = {
        from: process.env.SENDER_GMAIL_ADDRESS ?? '',
        to: email,
        subject: `Reset user at Noffty Manager`,
        text: `Dear admin, To proceed with reseting the password of your account,
        please copy the following code: ${code}.
        Do not give this code to anyone!
        If you did not request a user reset, please ignore this email or contact us through the site.`,
        html: utilityService.prepareEmailBody(emailHtml),
    };
    await utilityService.sendEmail(mailOptions);
}
