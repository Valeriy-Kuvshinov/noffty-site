import { ChangeEvent, FormEvent, useState } from "react"

interface FormValues {
    [key: string]: any
}

type SubmitHandler = (values: FormValues) => void

export function useForm(initialValues: FormValues, onSubmit: SubmitHandler) {
    const [values, setValues] = useState<FormValues>(initialValues)

    function handleChange(event: ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        onSubmit(values)
    }

    function resetForm() {
        setValues(initialValues)
    }

    return { values, handleChange, handleSubmit, resetForm }
}