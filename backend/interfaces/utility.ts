export interface ContactUsReqBody {
    name: string
    email: string
    title: string
    requestType: string
    message: string
    recaptchaToken: string
}

export interface VerificationMailReqBody {
    username?: string
    email: string
    code?: string
}

export interface MailOptions {
    from: string
    to: string
    replyTo?: string
    subject: string
    text: string
    html: string
}