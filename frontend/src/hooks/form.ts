import { ChangeEvent, FormEvent, useState } from "react"

interface FormValues {
    [key: string]: any
}

interface SubmitHandler {
    (values: FormValues): void
}

interface ValidationOptions {
    minLength?: number
    required?: boolean
    email?: boolean
    pattern?: RegExp
}

export function useForm(initialValues: FormValues, validationSchema: Record<string,
    ValidationOptions>, onSubmit: SubmitHandler) {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormValues>({})

    function handleChange(event: ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
        validateField(name, value)
    }

    function validateField(name: string, value: string) {
        const fieldValidation = validationSchema[name]
        let errorMessage = null

        if (fieldValidation) {
            if (fieldValidation.required) {
                errorMessage = validateRequired(value)
            }
            if (!errorMessage && fieldValidation.minLength) {
                errorMessage = validateMinLength(value, fieldValidation.minLength)
            }
            if (!errorMessage && fieldValidation.email) {
                errorMessage = validateEmail(value)
            }
            if (!errorMessage && fieldValidation.pattern) {
                errorMessage = validatePattern(value, fieldValidation.pattern)
            }
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }))
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        onSubmit(values)
    }

    function resetForm() {
        setValues(initialValues)
        setErrors({})
    }

    return { values, errors, validateField, handleChange, handleSubmit, resetForm }
}

// input / textarea optional validators
function validateMinLength(value: string, minLength: number): string | null {
    return value.length < minLength ? `Needs ${minLength} characters at least` : null
}

function validateEmail(value: string): string | null {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailRegex.test(value) ? null : 'Invalid email format'
}

function validateRequired(value: string): string | null {
    return value.trim() === '' ? 'Cannot be left empty' : null
}

function validatePattern(value: string, pattern: RegExp): string | null {
    return pattern.test(value) ? null : 'Invalid characters detected'
}