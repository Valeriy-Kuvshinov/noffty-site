'use client'
import { useState } from "react"
import { SvgRender } from "./SvgRender"

interface Option {
    value: string
    label: string
    iconName: string
}

interface SelectProps {
    options: Option[]
    value: string
    onChange: (newValue: string) => void
    label: string
    id: string
}

export function CustomSelect({ options, value, onChange, label, id }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)

    function handleSelect(option: any) {
        onChange(option.value)
        setIsOpen(false)
    }

    return (
        <article className='select-option flex column'>
            <label htmlFor={id}>{label}</label>

            <div className="custom-select-container w-100" id={id}>
                <div className={`selected-value flex row align-center justify-between fast-trans ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    {options.find((opt: Option) => opt.value === value)?.label}
                    <SvgRender iconName='arrow' />
                </div>
                {isOpen && (
                    <div className="options-container">
                        {options.map((option: Option) => (
                            <div key={option.value}
                                className="option flex row align-center justify-between fast-trans"
                                onClick={() => handleSelect(option)}>
                                {option.label}
                                <SvgRender iconName={option.iconName} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}