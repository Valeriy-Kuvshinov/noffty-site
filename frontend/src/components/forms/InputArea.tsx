import { SvgRender } from "../general/SvgRender"
import { ChangeEvent } from "react"

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
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    placeholder?: string
    options?: Option[]
    maxLength?: number
}

export function InputArea({ label, svg, type, name, value, onChange, placeholder, options, maxLength }: InputAreaProps) {
    return (
        <div className='input-area grid'>
            <label className='flex row align-center' htmlFor={name}>
                <SvgRender iconName={svg} />
                <span>{label}</span>
            </label>
            {type === 'select' && options ? (
                <select id={name} name={name} value={value} onChange={onChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea id={name} name={name} value={value}
                    onChange={onChange} placeholder={placeholder} required maxLength={maxLength} />
            ) : (
                <input type={type} id={name} name={name} value={value}
                    onChange={onChange} placeholder={placeholder} required maxLength={maxLength} />
            )}
        </div>
    )
}