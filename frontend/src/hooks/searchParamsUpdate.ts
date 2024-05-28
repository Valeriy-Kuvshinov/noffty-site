import { useRouter, useSearchParams } from "next/navigation"
import { GameQueryParams } from "../models/game"

export function useSearchParamsUpdate() {
    const router = useRouter()
    const searchParams = useSearchParams()

    function getDefaultFilterValues(): GameQueryParams {
        const defaultValues = {
            name: searchParams.get('name') || '',
            platform: searchParams.get('platform') || '',
            genre: searchParams.get('genre') || '',
            isGameJam: searchParams.get('isGameJam') || ''
        }
        console.log('Default filter values:', defaultValues)
        return defaultValues
    }

    function updateSearchParams(newParams: GameQueryParams) {
        const params = new URLSearchParams(searchParams.toString())
        Object.entries(newParams).forEach(([key, value]) => {
            if (value) params.set(key, value)
            else params.delete(key)
        })
        router.push(`?${params.toString()}`)
    }
    return { getDefaultFilterValues, updateSearchParams, searchParams }
}