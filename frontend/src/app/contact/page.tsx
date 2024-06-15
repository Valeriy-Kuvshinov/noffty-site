import { UtilityService } from "../../services/utility.service"
import { ContactForm } from "../../components/forms/ContactForm"

export default async function Contact() {
    let recaptchaKey = ''

    try {
        const response = await UtilityService.getRecaptchaKey()
        recaptchaKey = response.siteKey
        console.log(recaptchaKey)
    } catch (error) {
        console.error('Failed to fetch recaptcha key', error)
    }

    return (
        <main className="contact-page full w-h-100">
            <section className="page-contents grid w-h-100 layout-row">
                <article className="intro-part flex column w-100">
                    <h3 className="text-center">Get in Touch</h3>
                    <p className="text-center">
                        Got any suggestions, bugs to report or willing to help in our game development?
                        We'd like to hear that from you down below!
                    </p>
                    {recaptchaKey && <ContactForm recaptchaKey={recaptchaKey} />}
                </article>
            </section>
        </main>
    )
}