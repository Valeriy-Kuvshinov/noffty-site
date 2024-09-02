import { useCallback, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { GameQueryParams } from "../interfaces/game"

export function useGameFilterParams() {
    const router = useRouter()
    const searchParamsBase = useSearchParams()
    // prevent redundant calls
    const searchParams = useMemo(() => searchParamsBase, [searchParamsBase])

    const defaultValues = useMemo(() => ({
        title: searchParams.get('title') || '',
        platform: searchParams.get('platform') || '',
        genre: searchParams.get('genre') || '',
        isGameJam: searchParams.get('isGameJam') || ''
    }), [searchParams])

    // function will be used with GameFilter to update results
    const updateSearchParams = useCallback((newParams: GameQueryParams, basePath: string = '') => {
        const params = new URLSearchParams(searchParams.toString())
        Object.entries(newParams).forEach(([key, value]) => {
            if (value) params.set(key, value)
            else params.delete(key)
        })
        const searchUrl = basePath ? `${basePath}?${params.toString()}` : `?${params.toString()}`
        router.push(searchUrl)
    }, [router, searchParams])

    return { defaultValues, updateSearchParams, searchParams }
}