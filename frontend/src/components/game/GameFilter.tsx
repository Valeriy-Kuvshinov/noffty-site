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
    const debouncedFilter = useDebounce(filter, 500)

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
                <option value="">All Platforms</option>
                <option value="android">Android</option>
                <option value="html5">HTML5</option>
                <option value="steam">Steam</option>
            </select>
            <select name="genre" onChange={handleInputChange}>
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="platformer">Platformer</option>
                <option value="word">Word</option>
                <option value="survival">Survival</option>
                <option value="adventure">Adventure</option>
                <option value="puzzle">Puzzle</option>
            </select>
            <select name="isGameJam" onChange={handleInputChange}>
                <option value="">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </article>
    )
}