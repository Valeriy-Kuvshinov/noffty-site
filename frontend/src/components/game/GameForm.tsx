'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Game } from "../../models/game"
import { GameService } from "../../services/game.service"
import { ImageUploader } from "../forms/ImageUploader"

interface GameFormProps {
    game: Game
    cloudName: string
    uploadPreset: string
    defaultIcon: string
    defaultScreenshot: string
}

export function GameForm({ game, cloudName, uploadPreset, defaultIcon,
    defaultScreenshot }: GameFormProps) {
    const gameService = new GameService()

    const router = useRouter()
    const [formData, setFormData] = useState<Game>(game)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
        setFormData(prev => ({ ...prev, genre: selectedOptions }))
    }

    function handleIconUpload(data: { url: string; index: number }) {
        setFormData(prev => ({ ...prev, icon: data.url }))
    }

    function handleAddScreenshot() {
        if (formData.screenshots.length < 5) {
            setFormData(prev => ({ ...prev, screenshots: [...prev.screenshots, ''] }))
        }
    }

    function handleRemoveScreenshot(index: number) {
        if (formData.screenshots.length > 1) setFormData(prev => {
            const newScreenshots = [...prev.screenshots]
            newScreenshots.splice(index, 1)
            return { ...prev, screenshots: newScreenshots }
        })
    }

    function handleScreenshotUpload(data: { url: string; index: number }) {
        setFormData(prev => {
            const newScreenshots = [...prev.screenshots]
            newScreenshots[data.index] = data.url
            return { ...prev, screenshots: newScreenshots }
        })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            await gameService.save(formData)
            console.log('Game saved successfully')
            router.push(`/admin`)
        } catch (error) {
            console.error('Failed to save game', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Game Title:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
                <label htmlFor="note">Game Note:</label>
                <input type="text" id="note" name="note" value={formData.note} onChange={handleChange} required />
            </div>

            <div>
                <label htmlFor="outsideLink">Outside Link:</label>
                <input type="url" id="outsideLink" name="outsideLink" value={formData.outsideLink} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="gameLink">Game Files Link:</label>
                <input type="url" id="gameLink" name="gameLink" value={formData.gameLink} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="devlog">Devlog Link:</label>
                <input type="text" id="devlog" name="devlog" value={formData.devlog} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="walkthrough">Walkthrough Link:</label>
                <input type="text" id="walkthrough" name="walkthrough" value={formData.walkthrough} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="credits">Credits:</label>
                <textarea id="credits" name="credits" value={formData.credits} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="controls">Controls:</label>
                <textarea id="controls" name="controls" value={formData.controls} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="platform">Platform:</label>
                <select id="platform" name="platform" value={formData.platform} onChange={handleChange} required>
                    <option value="android">Android</option>
                    <option value="html5">HTML5</option>
                    <option value="steam">Steam</option>
                </select>
            </div>

            <div>
                <label htmlFor="isGameJam">Is Game Jam:</label>
                <select id="isGameJam" name="isGameJam" value={formData.isGameJam} onChange={handleChange} required>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div>
                <label htmlFor="genre">Genre:</label>
                <select id="genre" name="genre" multiple value={formData.genre} onChange={handleGenreChange}>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="other">Other</option>
                    <option value="platformer">Platformer</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="roguelike">Roguelike</option>
                </select>
            </div>

            <div>
                <label>Icon:</label>
                <ImageUploader index={0} defaultImgUrl={formData.icon || defaultIcon}
                    folderName="/games/icons" cloudName={cloudName}
                    uploadPreset={uploadPreset} onUploaded={handleIconUpload}
                />
            </div>

            <div>
                <label>Screenshots:</label>
                {formData.screenshots.map((screenshot, index) => (
                    <div key={index}>
                        <ImageUploader index={index} defaultImgUrl={screenshot || defaultScreenshot}
                            folderName="/games/screenshots" cloudName={cloudName}
                            uploadPreset={uploadPreset} onUploaded={handleScreenshotUpload}
                        />
                    </div>))}
                <div className="amount-management grid">
                    <button
                        className={`flex ${formData.screenshots.length === 1 ? 'disabled' : ''}`}
                        type="button" onClick={() => handleRemoveScreenshot(formData.screenshots.length - 1)}
                        disabled={formData.screenshots.length === 1}>
                        Remove
                    </button>
                    <button
                        className={`flex ${formData.screenshots.length >= 5 ? 'disabled' : ''}`}
                        type="button" onClick={handleAddScreenshot}
                        disabled={formData.screenshots.length >= 5}>
                        Add Screenshot
                    </button>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}