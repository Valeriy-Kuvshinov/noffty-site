'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import { MailService } from '../../services/mail.service'
import { useApiKeys } from '../../contexts/ApiContext'
import { useForm } from '../../hooks/form'
import { useHoverSwitch } from '../../hooks/hoverSwitch'
import { RecaptchaContainer } from './RecaptchaContainer'
import { ImageContainer } from '../general/ImageContainer'
import { InputArea } from './InputArea'
import { SvgRender } from '../general/SvgRender'

export function ContactForm({ initialValues }: any) {
    const defaultImg = 'https://res.cloudinary.com/djzid7ags/image/upload/v1718830337/g373afizfrrnplfms5rf.avif'
    const hoveredImg = 'https://res.cloudinary.com/djzid7ags/image/upload/v1718830337/ig5n5ytdmnrh5wopdajt.avif'

    const mailService = new MailService()
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const { recaptchaSiteKey } = useApiKeys()

    const validationSchema = {
        name: { required: true, minLength: 3, noDigits: true, pattern: /[\s'.-]+/ },
        email: { required: true, email: true, minLength: 5 },
        title: { required: true, minLength: 3, pattern: /[\s.\-!?']+/ },
        message: { required: true, minLength: 15, pattern: /[\s.\-!?@#$',*;:]+/ }
    }

    const { values, errors, validateField, handleChange, handleSubmit, resetForm } =
        useForm(initialValues, validationSchema, async (formData) => {
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
    const allFieldsFilled = values.name && values.email &&
        values.title && values.message
    const hasErrors = Object.values(errors).some(error => error)

    const { value: buttonImage, handleMouseEnter, handleMouseLeave } = useHoverSwitch({
        defaultValue: defaultImg, hoverValue: hoveredImg, condition: hasErrors
    })

    return (<form className='grid layout-row w-100' onSubmit={handleSubmit}>
        <InputArea
            label="Name*" type="text" name="name" svg='person' maxLength={30}
            value={values.name} onChange={handleChange} placeholder="Your name"
            error={errors.name} onBlur={() => validateField('name', values.name)}
        />
        <InputArea
            label="Email*" type="email" name="email" svg='mail' maxLength={50}
            value={values.email} onChange={handleChange} placeholder="Your email"
            error={errors.email} onBlur={() => validateField('email', values.email)}
        />
        <InputArea
            label="Title*" type="text" name="title" svg='title' maxLength={50}
            value={values.title} onChange={handleChange} placeholder="Asking about..."
            error={errors.title} onBlur={() => validateField('title', values.title)}
        />
        <div className='input-area grid'>
            <label className='grid align-center' htmlFor="requestType">
                <SvgRender iconName='info' />
                <span>Subject</span>
            </label>
            <select id="requestType" name="requestType" value={values.requestType} onChange={handleChange}>
                <option value="Q&A">Q&A</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <InputArea
            label="Message*" type="textarea" name="message" svg='message' maxLength={600}
            value={values.message} onChange={handleChange} placeholder="Yo, I got a question..."
            error={errors.message} onBlur={() => validateField('message', values.message)}
        />
        <section className='form-actions flex row align-center justify-between'>
            <button className={`flex row align-center ${!allFieldsFilled || hasErrors ? 'disabled' : ''}`}
                type="submit" disabled={!allFieldsFilled || hasErrors}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ImageContainer src={buttonImage} alt='Submit' />
                <span>Send</span>
            </button>
            <RecaptchaContainer />
        </section>
        <ReCAPTCHA sitekey={recaptchaSiteKey} size="invisible" ref={recaptchaRef} />
    </form>)
}