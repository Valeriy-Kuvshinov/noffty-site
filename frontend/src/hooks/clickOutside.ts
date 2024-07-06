import { useEffect } from "react"

export function useClickOutside(ref: React.RefObject<HTMLElement>,
    callback: () => void) {

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref, callback])
}