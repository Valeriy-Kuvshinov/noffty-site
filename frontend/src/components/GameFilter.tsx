'use client'
import { useEffect, useState } from "react"
import { GameQueryParams } from "../models/game"
import { useDebounce } from "../hooks/debounce"

interface GameFilterProps {
    gameService: any
    onFilterChange: () => void
}

export function GameFilter({ gameService, onFilterChange }: GameFilterProps) {
    const [filter, setFilter] = useState({ name: '' })
    const debouncedFilter = useDebounce(filter, 500)

    useEffect(() => {
        const newFilter: Partial<GameQueryParams> = { ...debouncedFilter }
        gameService.updateFilter(newFilter)
        onFilterChange()
    }, [debouncedFilter])

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFilter({ name: e.target.value })
    }

    return (
        <article className="crew grid w-100">
            <h1>Filter Games</h1>
            <input
                type="text"
                placeholder="Search by name..."
                onChange={handleInputChange}
            />
            {/* Additional filters can be similarly handled */}
        </article>
    )
}