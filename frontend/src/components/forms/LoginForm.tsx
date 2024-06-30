'use client'
import ReCAPTCHA from "react-google-recaptcha"
import { useRef, useState } from "react"
import { UserLogin } from "../../models/user"
import { useModal } from "../../contexts/ModalContext"
import { useApiKeys } from "../../contexts/ApiContext"
import { useSessionUser } from "../../contexts/SessionContext"
import { UserService } from "../../services/api/user.service"
import { useClickOutside } from "../../hooks/clickOutside"
import { useForm } from "../../hooks/form"
import { RecaptchaContainer } from "./RecaptchaContainer"
import { SvgRender } from "../general/SvgRender"
import { InputArea } from "./InputArea"

export function LoginForm() {
    const userService = new UserService()
    const { activeModal, closeModal } = useModal()
    const { recaptchaSiteKey } = useApiKeys()
    const { setSessionUser } = useSessionUser()
    const loginRef = useRef<HTMLDivElement>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const initialValues = { loginId: '', password: '' }

    const validationSchema = {
        loginId: { required: true, email: true, minLength: 5 },
        password: { required: true, minLength: 6 }
    }

    const { values, errors, validateField, handleChange, handleSubmit, resetForm } =
        useForm(initialValues, validationSchema, async (formData) => {
            try {
                const token = await recaptchaRef.current?.executeAsync()
                if (!token) throw new Error('reCAPTCHA verification failed')

                const loginData: UserLogin = {
                    loginId: formData.loginId,
                    password: formData.password,
                    recaptchaToken: token
                }
                const user = await userService.login(loginData)
                setSessionUser(user)

                resetForm()
                closeModal('login')
            } catch (err) {
                console.error('Login failed', err)
            }
        })
    const allFieldsFilled = values.loginId && values.password
    const hasErrors = Object.values(errors).some(error => error)

    function closeLogin() {
        closeModal('login')
        resetForm()
    }

    useClickOutside(loginRef, closeLogin)
    if (activeModal !== 'login') return null

    return (
        <dialog className="modal-wrapper flex align-center w-h-100" open={true}>
            <article className="login-form flex column w-100 fast-trans" ref={loginRef}>
                <form className="grid" onSubmit={handleSubmit}>
                    <InputArea label="Email*" type="email" name="loginId" svg='mail'
                        maxLength={50} value={values.loginId} onChange={handleChange}
                        placeholder="Your email" error={errors.loginId}
                        onBlur={() => validateField('loginId', values.loginId)}
                    />
                    <InputArea label="Password*" type="text" name="password" svg='lock'
                        maxLength={30} value={values.password} onChange={handleChange}
                        placeholder="Your password" error={errors.password}
                        onBlur={() => validateField('password', values.password)}
                    />
                    <section className='form-actions flex row align-center justify-between'>
                        <button className={`flex row align-center ${!allFieldsFilled || hasErrors ? 'disabled' : ''}`}
                            type="submit" disabled={!allFieldsFilled || hasErrors}>
                            <span>Login</span>
                        </button>
                        <RecaptchaContainer />
                    </section>
                </form>
            </article>
            <ReCAPTCHA sitekey={recaptchaSiteKey} size="invisible" ref={recaptchaRef} />
        </dialog>
    )
}