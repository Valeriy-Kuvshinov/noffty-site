import { ImageContainer } from "../general/ImageContainer"

export function RecaptchaContainer() {
    const recaptchaLogo: string = 'https://res.cloudinary.com/djzid7ags/image/upload/v1718535143/hmxw916ycqxrrsgsatsu.avif'

    return (<div className='recaptcha-branding grid align-center'>
        <ImageContainer src={recaptchaLogo} alt='recaptcha logo' />
        <span>Protected by reCAPTCHA</span>
        <div className='links flex row justify-between'>
            <a href="https://policies.google.com/privacy">Privacy</a>
            <a href="https://policies.google.com/terms">Terms</a>
        </div>
    </div>)
}