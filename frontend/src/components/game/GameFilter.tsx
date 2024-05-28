'use client'
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"

interface GameFilterProps {
    getDefaultFilterValues: () => GameQueryParams
    updateSearchParams: (filterBy: GameQueryParams) => void
    searchParams: URLSearchParams
}

export function GameFilter({ getDefaultFilterValues, updateSearchParams, searchParams }: GameFilterProps) {
    const gameService = new GameService()
    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    const defaultValues = useMemo(() => {
        console.log('Calculating default values')
        return getDefaultFilterValues()
    }, [searchParams])

    const [filter, setFilter] = useState(defaultValues)
    const debouncedFilter = useDebounce(filter, 1000)

    useEffect(() => {
        console.log('Setting filter state based on default values')
        setFilter(defaultValues)
    }, [defaultValues])

    useEffect(() => {
        console.log('Updating search params based on debounced filter')
        updateSearchParams(debouncedFilter)
    }, [debouncedFilter])

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFilter((prevFilter) => ({
            ...prevFilter, [name]: value
        }))
    }

    return (
        <article className="filter-area grid w-100">
            <input
                type="text"
                name="name"
                placeholder="Search by name..."
                value={filter.name || ''}
                onChange={handleInputChange}
            />
            <select name="platform" value={filter.platform} onChange={handleInputChange}>
                {platforms.map(platform => (
                    <option key={platform.value} value={platform.value}>{platform.label}</option>
                ))}
            </select>
            <select name="genre" value={filter.genre} onChange={handleInputChange}>
                {genres.map(genre => (
                    <option key={genre.value} value={genre.value}>{genre.label}</option>
                ))}
            </select>
            <select name="isGameJam" value={filter.isGameJam} onChange={handleInputChange}>
                {gameJams.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                ))}
            </select>
        </article>
    )
}