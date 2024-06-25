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
                <p className="text-center">
                    Got any suggestions, bugs to report or willing to help our team?
                    We'd like to hear from you down below!
                </p>
            </article>
            <ContactForm initialValues={initialValues} />
        </section>
    </main>)
}