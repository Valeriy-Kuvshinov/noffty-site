import { HttpService } from './http.service'

const baseUrl: string = 'mail/'

export class MailService {
    async sendContactUsMail(formData: any) {
        return HttpService.get(`${baseUrl}contact`, formData)
    }

    async sendResetCodeMail(formData: any) {
        return HttpService.get(`${baseUrl}reset`, formData)
    }
}