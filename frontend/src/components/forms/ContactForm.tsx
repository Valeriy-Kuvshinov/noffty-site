'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import { MailService } from '../../services/mail.service'
import { useForm } from '../../hooks/form'
import { RecaptchaContainer } from './RecaptchaContainer'

interface ContactUsReqBody {
    name: string
    email: string
    title: string
    requestType: 'Q&A' | 'Bug Report' | 'Volunteering' | 'Other'
    message: string
    recaptchaToken: string
}

export function ContactForm({ recaptchaKey }: { recaptchaKey: string }) {
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const mailService = new MailService()

    // Define initial form values
    const initialValues: ContactUsReqBody = {
        name: '',
        email: '',
        title: '',
        requestType: 'Q&A',
        message: '',
        recaptchaToken: ''
    }

    const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, async (formData) => {
        const token = await recaptchaRef.current?.executeAsync()
        const completeFormData = { ...formData, recaptchaToken: token || '' }
        try {
            const response = await mailService.sendContactUsMail(completeFormData)
            console.log(response)

            resetForm()
            recaptchaRef.current?.reset()
        } catch (error) {
            console.error('Failed to send contact mail:', error)
        }
    })

    return (
        <form className='flex column layout-row w-100' onSubmit={handleSubmit}>
            <section className='form-inputs grid'>
                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Your Email" required />
                <input type="text" name="title" value={values.title} onChange={handleChange} placeholder="Subject" required />
                <select name="requestType" value={values.requestType} onChange={handleChange}>
                    <option value="Q&A">Q&A</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Other">Other</option>
                </select>
                <textarea name="message" value={values.message} onChange={handleChange} placeholder="Your Message" required />
            </section>

            <section className='form-actions flex row align-center justify-between'>
                <button className='flex' type="submit">Send</button>
                <RecaptchaContainer />
            </section>
            <ReCAPTCHA sitekey={recaptchaKey} size="invisible" ref={recaptchaRef} />
        </form>
    )
}