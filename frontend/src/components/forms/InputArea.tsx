import { ChangeEvent } from "react"
import { ValidationOptions } from "../../interfaces/utility"
import { SvgRender } from "../general/SvgRender"

interface InputAreaProps {
    label: string
    svg: string
    type: 'text' | 'email' | 'textarea'
    name: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder?: string
    maxLength?: number
    error?: string | null
    onBlur?: () => void
    validationOptions?: ValidationOptions
}

export function InputArea({ label, svg, type, name, value, onChange, placeholder,
    maxLength, error, onBlur, validationOptions }: InputAreaProps) {

    return (<div className={`input-area grid ${error ? 'error' : ''} h-fit`}>
        <label className='grid align-center' htmlFor={name}>
            <SvgRender iconName={svg} />
            <span>{label}</span>
            {error && <p className="text-hide-overflow" title={error}>{error}</p>}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={name} name={name} value={value} onChange={onChange}
                onBlur={onBlur} placeholder={placeholder} maxLength={maxLength}
                required={validationOptions?.required}
            />
        ) : (
            <input
                type={type} id={name} name={name} value={value} onChange={onChange}
                onBlur={onBlur} placeholder={placeholder} maxLength={maxLength}
                required={validationOptions?.required} pattern={validationOptions?.pattern?.source}
            />
        )}
    </div>)
}