import { useCallback, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { GameQueryParams } from "../models/game"

export function useSearchParamsUpdate() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const stableSearchParams = useMemo(() => new URLSearchParams(
        searchParams.toString()), [searchParams])

    function getDefaultFilterValues() {
        const defaultValues = {
            name: stableSearchParams.get('name') || '',
            platform: stableSearchParams.get('platform') || '',
            genre: stableSearchParams.get('genre') || '',
            isGameJam: stableSearchParams.get('isGameJam') || ''
        }
        return defaultValues
    }

    function updateSearchParams(newParams: GameQueryParams, basePath: string = '') {
        const params = new URLSearchParams()
        Object.entries(newParams).forEach(([key, value]) => {
            if (value) params.set(key, value)
            else params.delete(key)
        })
        const searchUrl = basePath ? `${basePath}?${params.toString()}` :
            `?${params.toString()}`
        router.push(searchUrl)
    }

    const memoGetDefaultFilterValues = useCallback(
        getDefaultFilterValues, [stableSearchParams])

    const memoUpdateSearchParams = useCallback(
        updateSearchParams, [router])

    return {
        getDefaultFilterValues: memoGetDefaultFilterValues,
        updateSearchParams: memoUpdateSearchParams,
        searchParams: stableSearchParams
    }
}