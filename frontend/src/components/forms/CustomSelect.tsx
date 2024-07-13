'use client'
import { CustomOption } from "../../interfaces/utility"
import { useRef, useState } from "react"
import { useClickOutside } from "../../hooks/clickOutside"
import { SvgRender } from "../general/SvgRender"

interface SelectProps {
    options: CustomOption[]
    value: string
    onChange: (newValue: string) => void
    label: string
    id: string
}

export function CustomSelect({ options, value, onChange, label, id }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    function handleSelect(option: any) {
        onChange(option.value)
        setIsOpen(false)
    }

    function closeSelect() {
        setIsOpen(false)
    }

    useClickOutside(selectRef, closeSelect)

    return (<article className='select-option flex column'>
        <label htmlFor={id}>{label}</label>

        <div ref={selectRef} className="custom-select-container w-100" id={id}>
            <div className={`selected-value flex row align-center justify-between fast-trans ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}>
                {options.find((opt: CustomOption) => opt.value === value)?.label}
                <SvgRender iconName='arrowRight' />
            </div>
            {isOpen && (
                <div className="options-container">
                    {options.map((option: CustomOption) => (
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
    </article>)
}