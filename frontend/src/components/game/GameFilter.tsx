'use client'
import { useEffect, useState } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"

interface GameFilterProps {
    onFilterChange: (filterBy: GameQueryParams) => void
}

export function GameFilter({ onFilterChange }: GameFilterProps) {
    const gameService = new GameService()
    const defaultFilter = gameService.getDefaultFilter()

    const [filter, setFilter] = useState(defaultFilter)
    const debouncedFilter = useDebounce(filter, 1000)

    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    useEffect(() => {
        onFilterChange(debouncedFilter)
        updateUrlQueryParameters(debouncedFilter)
    }, [debouncedFilter])

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value
        }))
    }

    function updateUrlQueryParameters(updatedFilter: GameQueryParams) {
        const newSearchParams = new URLSearchParams(window.location.search);
        Object.entries(updatedFilter).forEach(([key, value]) => {
            if (value) newSearchParams.set(key, value)
            else newSearchParams.delete(key)
        })
        const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`
        window.history.pushState({}, '', newUrl)
    }

    return (
        <article className="filter-area grid w-100">
            <input
                type="text"
                name="name"
                placeholder="Search by name..."
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