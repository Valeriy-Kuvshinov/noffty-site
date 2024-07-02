import { ChangeEvent, FormEvent, useState } from "react"
import { ValidationOptions } from "../models/utility"

interface FormValues {
    [key: string]: any
}

interface SubmitHandler {
    (values: FormValues): void
}

export function useForm(initialValues: FormValues, validationSchema: Record<string,
    ValidationOptions>, onSubmit: SubmitHandler) {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormValues>({})

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target
        setValues(prevValues => ({ ...prevValues, [name]: value }))
        if (event.target.tagName.toLowerCase() !== "select" && validationSchema[name]?.required) {
            validateField(name, value)
        }
    }

    function setFieldValue(name: string, value: any) {
        setValues(prevValues => ({ ...prevValues, [name]: value }))
        if (validationSchema[name]?.required) {
            validateField(name, value.toString())
        }
    }

    function validateField(name: string, value: string) {
        const fieldValidation = validationSchema[name]
        if (!fieldValidation) return
        let errorMessage = null

        if (!fieldValidation.required && value.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, [name]: null }))
            return
        }
        const validations = [
            { check: fieldValidation.required, func: () => validateRequired(value) },
            { check: fieldValidation.minLength, func: () => validateMinLength(value, fieldValidation.minLength!) },
            { check: fieldValidation.noLetters, func: () => validateNoLetters(value) },
            { check: fieldValidation.noDigits, func: () => validateNoDigits(value) },
            { check: fieldValidation.email, func: () => validateEmail(value) },
            { check: fieldValidation.link, func: () => validateLink(value) },
            { check: fieldValidation.pattern, func: () => validatePattern(value, fieldValidation.pattern!) }
        ]
        for (let validation of validations) {
            if (!errorMessage && validation.check) {
                errorMessage = validation.func()
                if (errorMessage) break
            }
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }))
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        onSubmit(values)
    }

    function resetForm() {
        setValues(initialValues)
        setErrors({})
    }

    return {
        values, errors, setErrors, validateField, handleChange,
        setFieldValue, handleSubmit, resetForm
    }
}

// input / textarea optional validators
function validateRequired(value: string): string | null {
    return value.trim() === '' ? 'Cannot be left empty' : null
}

function validateMinLength(value: string, minLength: number): string | null {
    return value.length < minLength ? `Needs ${minLength} characters at least` : null
}

function validateNoLetters(value: string): string | null {
    return /[a-zA-Z]/.test(value) ? "Cannot insert letters" : null
}

function validateNoDigits(value: string): string | null {
    return /\d/.test(value) ? "Cannot insert digits" : null
}

function validateEmail(value: string): string | null {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailRegex.test(value) ? null : 'Invalid email format'
}

function validateLink(value: string): string | null {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?$/
    return urlRegex.test(value) ? null : 'Invalid URL format'
}

function validatePattern(value: string, pattern: RegExp): string | null {
    // by default allow letters and numbers
    const combinedPattern = new RegExp('^[a-zA-Z0-9' + pattern.source + ']*$')
    return combinedPattern.test(value) ? null : 'Invalid characters used'
}