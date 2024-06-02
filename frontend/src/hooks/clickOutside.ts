import { useEffect } from "react"

export function useClickOutside(ref: React.RefObject<HTMLElement>,
    callback: () => void) {

    function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref, callback])
}