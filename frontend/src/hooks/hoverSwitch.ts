import { useState } from "react"

interface UseHoverSwitchProps<T> {
    defaultValue: T
    hoverValue: T
    condition: boolean
}

interface UseHoverSwitchReturn<T> {
    value: T
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

export function useHoverSwitch<T>(props: UseHoverSwitchProps<T>): UseHoverSwitchReturn<T> {
    const { defaultValue, hoverValue, condition } = props
    const [value, setValue] = useState<T>(defaultValue)

    function handleMouseEnter() {
        if (!condition) setValue(hoverValue)
    }

    function handleMouseLeave() {
        setValue(defaultValue)
    }

    return {
        value,
        handleMouseEnter,
        handleMouseLeave
    }
}