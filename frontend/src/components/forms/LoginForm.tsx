'use client'
import ReCAPTCHA from "react-google-recaptcha"
import { useRef, useState } from "react"
import { UserLogin } from "../../interfaces/user"
import { userService } from "../../services/api/user-service"
import { useClickOutside } from "../../hooks/clickOutside"
import { useForm } from "../../hooks/form"
import { useModal } from "../../contexts/ModalContext"
import { useApiKeys } from "../../contexts/ApiContext"
import { useSessionUser } from "../../contexts/SessionContext"
import { RecaptchaContainer } from "./RecaptchaContainer"
import { SvgRender } from "../general/SvgRender"
import { InputArea } from "./InputArea"
import { showErrorMsg, showSuccessMsg } from "../modals/SystemMsg"

export function LoginForm() {
    const { activeModal, closeModal } = useModal()
    const { recaptchaSiteKey } = useApiKeys()
    const { setSessionUser } = useSessionUser()
    const [showPassword, setShowPassword] = useState(false)
    const loginRef = useRef<HTMLDivElement>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const isOpen = activeModal === 'login'

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
                showSuccessMsg('Login Successful!', 'Welcome home broski.')
                closeLogin()
            } catch (err: any) {
                showErrorMsg('Login Failed!', err.message)
                console.error('Login failed', err)
                closeLogin()
            }
        })
    const allFieldsFilled = values.loginId && values.password
    const hasErrors = Object.values(errors).some(error => error)

    function closeLogin() {
        resetForm()
        closeModal('login')
    }

    function togglePasswordShow() {
        setShowPassword(!showPassword)
    }

    useClickOutside(loginRef, closeLogin)
    if (!isOpen) return null

    return (<dialog className="modal-wrapper flex align-center w-h-100" open={true}>
        <article className="login-form flex column w-100 fast-trans" ref={loginRef}>
            <form className="grid" onSubmit={handleSubmit}>
                <InputArea label="Email*" type="email" name="loginId" svg='mail' maxLength={50}
                    value={values.loginId} onChange={handleChange} placeholder="Your email"
                    error={errors.loginId} onBlur={() => validateField('loginId', values.loginId)}
                />
                <div className={`input-area grid ${errors.password ? 'error' : ''} h-fit`}>
                    <label className='grid align-center' htmlFor="password">
                        <SvgRender iconName="lock" />
                        <span>Password*</span>
                        {errors.password && <p className="text-hide-overflow"
                            title={errors.password}>{errors.password}</p>}
                    </label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" maxLength={24}
                        value={values.password} onChange={handleChange} placeholder="Your password"
                        onBlur={() => validateField('password', values.password)}
                    />
                    <button type="button" onClick={togglePasswordShow}>
                        <SvgRender iconName={showPassword ? "eye" : "noEye"} />
                    </button>
                </div>
                <section className='form-actions flex row align-center justify-between'>
                    <button className={`flex row align-center ${!allFieldsFilled || hasErrors ? 'disabled' : ''}`}
                        type="submit" disabled={!allFieldsFilled || hasErrors}>
                        <span>Login</span>
                    </button>
                    <RecaptchaContainer />
                </section>
            </form>
        </article>
        {recaptchaSiteKey && <ReCAPTCHA key={activeModal}
            sitekey={recaptchaSiteKey} size="invisible" ref={recaptchaRef} />
        }
    </dialog>)
}