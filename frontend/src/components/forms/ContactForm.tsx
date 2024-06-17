'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import { MailService } from '../../services/mail.service'
import { useForm } from '../../hooks/form'
import { RecaptchaContainer } from './RecaptchaContainer'
import { InputArea } from './InputArea'

interface ContactUsReqBody {
    name: string
    email: string
    title: string
    requestType: string
    message: string
    recaptchaToken: string
}

export function ContactForm({ recaptchaKey }: { recaptchaKey: string }) {
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const mailService = new MailService()

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
                <InputArea
                    label="Name" type="text" name="name" svg='person'
                    value={values.name} onChange={handleChange} placeholder="Your name"
                />
                <InputArea
                    label="Email" type="email" name="email" svg='mail'
                    value={values.email} onChange={handleChange} placeholder="Your email"
                />
                <InputArea
                    label="Title" type="text" name="title" svg='title'
                    value={values.title} onChange={handleChange} placeholder="Asking about..."
                />
                <InputArea
                    label="Subject" type="select" name="requestType" svg='info'
                    value={values.requestType} onChange={handleChange}
                    options={[
                        { value: "Q&A", label: "Q&A" },
                        { value: "Suggestion", label: "Suggestion" },
                        { value: "Bug Report", label: "Bug Report" },
                        { value: "Volunteering", label: "Volunteering" },
                        { value: "Other", label: "Other" }
                    ]}
                />
                <InputArea
                    label="Message" type="textarea" name="message" svg='message'
                    value={values.message} onChange={handleChange} placeholder="Yo, I got a question..."
                />
            </section>

            <section className='form-actions flex row align-center justify-between'>
                <button className='flex' type="submit">Send</button>
                <RecaptchaContainer />
            </section>
            <ReCAPTCHA sitekey={recaptchaKey} size="invisible" ref={recaptchaRef} />
        </form>
    )
}