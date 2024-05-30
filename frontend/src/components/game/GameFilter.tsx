'use client'
import { isEqual } from 'lodash'
import { ChangeEvent, useEffect, useState } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"

interface GameFilterProps {
    defaultValues: GameQueryParams
    updateSearchParams: (filterBy: GameQueryParams) => void
}

export function GameFilter({ defaultValues, updateSearchParams, }: GameFilterProps) {
    const gameService = new GameService()
    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    const [filter, setFilter] = useState(defaultValues)
    const debouncedFilter = useDebounce(filter, 1000)

    useEffect(() => {
        if (!isEqual(debouncedFilter, defaultValues)) {
            updateSearchParams(debouncedFilter)
        }
    }, [debouncedFilter, defaultValues])

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }))
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