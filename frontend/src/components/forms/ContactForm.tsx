'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { FormEvent, useRef } from 'react'
import { ContactUsReqBody } from '../../models/utility'
import { MailService } from '../../services/mail.service'

export function ContactForm({ recaptchaKey }: { recaptchaKey: string }) {
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const mailService = new MailService()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const title = (form.elements.namedItem('title') as HTMLInputElement).value
        const message = (form.elements.namedItem('message') as HTMLInputElement).value
        const token = await recaptchaRef.current?.executeAsync()

        const formData: ContactUsReqBody = {
            name: name,
            email: email,
            title: title,
            message: message,
            recaptchaToken: token || ''
        }
        console.log('Recaptcha token:', formData.recaptchaToken)
        // Here you would handle the form submission, including the recaptcha token
        try {
            const response = await mailService.sendContactUsMail(formData)
            console.log('Mail sent successfully:', response)
        } catch (error) {
            console.error('Failed to send contact mail:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className='form-inputs'>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="title" placeholder="Subject" required />
                <textarea name="message" placeholder="Your Message" required />
            </section>

            <div className='flex row form-actions'>
                <button type="submit">Send Message</button>
                <ReCAPTCHA sitekey={recaptchaKey}
                    size="invisible" ref={recaptchaRef} />
            </div>
        </form>
    )
}