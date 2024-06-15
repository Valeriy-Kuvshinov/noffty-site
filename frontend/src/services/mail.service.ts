import { HttpService } from './http.service'

const baseUrl: string = 'mail/'

export class MailService {
    async sendContactUsMail(formData: any): Promise<any> {
        return HttpService.post(`${baseUrl}contact`, formData)
    }

    async sendResetCodeMail(formData: any): Promise<any> {
        return HttpService.post(`${baseUrl}reset`, formData)
    }
}