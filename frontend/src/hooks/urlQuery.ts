import { useState, useEffect } from "react"
import { GameQueryParams } from "../models/game"

export function useUrlQuery(defaultValues: GameQueryParams) {
    const [query, setQuery] = useState<GameQueryParams>(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search)
            let params: GameQueryParams = { ...defaultValues }

            for (let [key, value] of searchParams.entries()) {
                if (value) params[key as keyof GameQueryParams] = value
            }
            return params
        }
        return defaultValues
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams()
            Object.entries(query).forEach(([key, value]) => {
                if (value) searchParams.set(key, value)
                else searchParams.delete(key)
            })
            const newUrl = `${window.location.pathname}?${searchParams.toString()}`
            window.history.pushState({}, '', newUrl)
        }
    }, [query])

    return [query, setQuery] as const
}