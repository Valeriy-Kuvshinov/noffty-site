import { ContactForm } from "../../components/forms/ContactForm"

interface ContactUsReqBody {
    name: string
    email: string
    title: string
    requestType: string
    message: string
    recaptchaToken: string
}

export default function Contact() {
    const initialValues: ContactUsReqBody = {
        name: '', email: '', title: '', requestType: 'Q&A',
        message: '', recaptchaToken: ''
    }

    return (<main className="contact-page full w-h-100">
        <section className="page-contents grid w-h-100 layout-row">
            <article className="intro-part flex column w-100">
                <h3 className="text-center">Get in Touch</h3>
                <p className="text-center">Easiest way to contact us is to join our
                    <a href="https://discord.gg/SeNsSRt" target="_blank" rel="noopener noreferrer"
                        aria-label="Navigate to website's discord?"> Discord server.</a>
                </p>
                <p className="text-center">{`However, if you're looking for a more official way of communication,
                    feel free to use the form below, and we'll make sure to reply.`}</p>
            </article>
            <ContactForm initialValues={initialValues} />
        </section>
    </main>)
}