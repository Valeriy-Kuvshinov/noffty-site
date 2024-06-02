'use client'
import { isEqual } from 'lodash'
import { ChangeEvent, useEffect, useState } from "react"
import { GameQueryParams } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useDebounce } from "../../hooks/debounce"
import { CustomSelect } from '../general/CustomSelect'

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
        <article className="filter-area flex column layout-row w-100">
            <input
                type="text"
                name="name"
                placeholder="Search by name..."
                value={filter.name || ''}
                onChange={handleInputChange}
            />
            <div className='select-options grid'>
                <CustomSelect
                    options={platforms}
                    value={filter.platform || ''}
                    onChange={(newValue) => setFilter(prev => ({ ...prev, platform: newValue }))}
                    label="Select Platform"
                    id="platform-select"
                />
                <CustomSelect
                    options={genres}
                    value={filter.genre || ''}
                    onChange={(newValue) => setFilter(prev => ({ ...prev, genre: newValue }))}
                    label="Select Genre"
                    id="genre-select"
                />
                <CustomSelect
                    options={gameJams}
                    value={filter.isGameJam || ''}
                    onChange={(newValue) => setFilter(prev => ({ ...prev, isGameJam: newValue }))}
                    label="Made for GMTK"
                    id="isGameJam-select"
                />
            </div>
        </article>
    )
}