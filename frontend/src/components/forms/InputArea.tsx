import { ChangeEvent } from "react"
import { ValidationOptions } from "../../models/utility"
import { SvgRender } from "../general/SvgRender"

interface Option {
    value: string
    label: string
}

interface InputAreaProps {
    label: string
    svg: string
    type: 'text' | 'email' | 'select' | 'textarea'
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement |
        HTMLSelectElement>) => void
    placeholder?: string
    options?: Option[]
    maxLength?: number
}

interface InputAreaProps {
    label: string
    svg: string
    type: 'text' | 'email' | 'select' | 'textarea'
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement |
        HTMLSelectElement>) => void
    placeholder?: string
    options?: Option[]
    maxLength?: number
    error?: string | null
    onBlur?: () => void
    validationOptions?: ValidationOptions
}

export function InputArea({
    label, svg, type, name, value, onChange, placeholder,
    options, maxLength, error, onBlur, validationOptions
}: InputAreaProps) {
    return (
        <div className={`input-area grid ${error ? 'error' : ''}`}>
            <label className='grid align-center' htmlFor={name}>
                <SvgRender iconName={svg} />
                <span>{label}</span>
                {error && <p>{error}</p>}
            </label>
            {type === 'select' && options ? (
                <select id={name} name={name} value={value} onChange={onChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea id={name} name={name} value={value} onChange={onChange}
                    onBlur={onBlur} placeholder={placeholder} maxLength={maxLength}
                    required={validationOptions?.required}
                />
            ) : (
                <input type={type} id={name} name={name} value={value} onChange={onChange}
                    onBlur={onBlur} placeholder={placeholder} maxLength={maxLength}
                    required={validationOptions?.required} pattern={validationOptions?.pattern?.source}
                />
            )}
        </div>
    )
}