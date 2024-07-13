'use client'
import { ChangeEvent, useEffect, useState } from "react"
import { GameQueryParams } from "../../interfaces/game"
import { gameService } from "../../services/api/game-service"
import { utilityService } from '../../services/utility-service'
import { useDebounce } from "../../hooks/debounce"
import { CustomSelect } from '../forms/CustomSelect'
import { SvgRender } from '../general/SvgRender'

interface GameFilterProps {
    defaultValues: GameQueryParams
    updateSearchParams: (filterBy: GameQueryParams) => void
}

export function GameFilter({ defaultValues, updateSearchParams }: GameFilterProps) {
    const genres = gameService.getGenres()
    const platforms = gameService.getPlatforms()
    const gameJams = gameService.getGameJams()

    const [filter, setFilter] = useState(defaultValues)
    const debouncedFilter = useDebounce(filter, 1000)

    useEffect(() => {
        if (!utilityService.areEqual(debouncedFilter, defaultValues)) {
            updateSearchParams(debouncedFilter)
        }
    }, [debouncedFilter, defaultValues])

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }))
    }

    return (<article className="filter-area flex column layout-row w-100">
        <input type="text" name="title" placeholder="Search by name..." maxLength={30}
            value={filter.title || ''} onChange={handleInputChange}
        />
        <SvgRender iconName="search" />
        <div className='select-options grid'>
            <CustomSelect options={platforms} value={filter.platform || ''}
                onChange={(newValue) => setFilter(prev => ({ ...prev, platform: newValue }))}
                label="Select Platform" id="platform-select"
            />
            <CustomSelect options={genres} value={filter.genre || ''}
                onChange={(newValue) => setFilter(prev => ({ ...prev, genre: newValue }))}
                label="Select Genre" id="genre-select"
            />
            <CustomSelect options={gameJams} value={filter.isGameJam || ''}
                onChange={(newValue) => setFilter(prev => ({ ...prev, isGameJam: newValue }))}
                label="Made for Jam?" id="isGameJam-select"
            />
        </div>
    </article>)
}