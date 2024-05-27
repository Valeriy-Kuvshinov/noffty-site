'use client'
import { ChangeEvent, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"

interface GameFilterProps {
    onFilterChange: (filterBy: GameQueryParams) => void
}

export function GameFilter({ onFilterChange }: GameFilterProps) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const gameService = new GameService()
    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    const defaultValues = {
        name: searchParams.get('name') || '',
        platform: searchParams.get('platform') || '',
        genre: searchParams.get('genre') || '',
        isGameJam: searchParams.get('isGameJam') || ''
    }

    const [filter, setFilter] = useState(defaultValues)
    const debouncedFilter = useDebounce(filter, 1000)

    useEffect(() => {
        onFilterChange(debouncedFilter)
    }, [debouncedFilter, onFilterChange])

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value
        }))
    }

    useEffect(() => {
        const newSearchParams = new URLSearchParams()
        Object.entries(debouncedFilter).forEach(([key, value]) => {
            if (value) newSearchParams.set(key, value)
            else newSearchParams.delete(key)
        })
        router.replace(`?${newSearchParams.toString()}`,
            undefined, { shallow: true })
    }, [debouncedFilter, router])

    return (
        <article className="filter-area grid w-100">
            <input
                type="text"
                name="name"
                placeholder="Search by name..."
                value={filter.name || ''}
                onChange={handleInputChange}
            />
            <select name="platform" onChange={handleInputChange}>
                {platforms.map(platform => (
                    <option key={platform.value} value={platform.value}>{platform.label}</option>
                ))}
            </select>
            <select name="genre" onChange={handleInputChange}>
                {genres.map(genre => (
                    <option key={genre.value} value={genre.value}>{genre.label}</option>
                ))}
            </select>
            <select name="isGameJam" onChange={handleInputChange}>
                {gameJams.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                ))}
            </select>
        </article>
    )
}