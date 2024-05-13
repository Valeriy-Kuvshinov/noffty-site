'use client'
import { ChangeEvent, useEffect } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"
import { useUrlQuery } from "../../hooks/urlQuery"

interface GameFilterProps {
    onFilterChange: (filterBy: GameQueryParams) => void
}

export function GameFilter({ onFilterChange }: GameFilterProps) {
    const gameService = new GameService()
    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    const defaultValues: GameQueryParams = { name: '', platform: '', genre: '', isGameJam: '' }
    const [filter, setFilter] = useUrlQuery(defaultValues)
    const debouncedFilter = useDebounce(filter, 1000)
    
    useEffect(() => {
        onFilterChange(filter)
        onFilterChange(debouncedFilter)
    }, [debouncedFilter])

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFilter((prevFilter: GameQueryParams) => ({
            ...prevFilter,
            [name]: value
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