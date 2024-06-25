'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Game } from "../../models/game"
import { GameService } from "../../services/game.service"
import { useApiKeys } from "../../contexts/ApiContext"
import { useForm } from "../../hooks/form"
import { ImageUploader } from "../forms/ImageUploader"
import { SvgRender } from "../general/SvgRender"
import { InputArea } from "../forms/InputArea"

const defaultIcon = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif'
const defaultScreenshot = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif'

export function GameForm({ game }: { game: Game }) {
    const gameService = new GameService()
    const router = useRouter()
    const { cloudinary } = useApiKeys()
    const { cloudName, uploadPreset } = cloudinary

    const [formData, setFormData] = useState<Game>({
        ...game, description: game.description?.replace(/<br>/g, '\n'),
        credits: game.credits?.replace(/<br>/g, '\n')
    })

    const validationSchema = {
        name: { required: true, minLength: 3, pattern: /[\s.\-!^&?']+/ },
        note: { required: true, minLength: 3, pattern: /[\s.\-!?']+/ },
        outsideLink: { required: true, minLength: 3, link: true },
        gameLink: { minLength: 3, link: true },
        devlog: { minLength: 3, link: true },
        walkthrough: { minLength: 3, link: true },
        description: { required: true, minLength: 15, pattern: /[\s.\-!?@#$',^*;():]+/ },
        credits: { required: true, minLength: 3, pattern: /[\s.\-!?@#$',^*;:]+/ },
        controls: { required: true, minLength: 3, pattern: /[\s.\-!?@#$',^/*;:]+/ }
    }

    function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
        setFormData(prev => ({ ...prev, genre: selectedOptions }))
    }

    function handleIconUpload(data: { url: string; index: number }) {
        setFormData(prev => ({ ...prev, icon: data.url }))
    }

    function handleAddScreenshot() {
        if (formData.screenshots.length < 5) setFormData(prev =>
            ({ ...prev, screenshots: [...prev.screenshots, ''] }))
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

    const { values, errors, validateField, handleChange, handleSubmit, resetForm } =
        useForm(formData, validationSchema, async (values) => {
            try {
                await gameService.save(values)
                console.log('Game saved successfully')

                resetForm()
                router.push(`/admin`)
            } catch (error) {
                console.error('Failed to save game', error)
            }
        })
    const allFieldsFilled = values.name && values.note && values.outsideLink &&
        values.description && values.credits && values.controls
    const hasErrors = Object.values(errors).some(error => error)

    return (
        <form className="grid layout-row w-100" onSubmit={handleSubmit}>
            <InputArea label="Game Title*" svg="title" type="text" name="name"
                value={values.name} onChange={handleChange}
                error={errors.name} onBlur={() => validateField('name', values.name)}
            />

            <InputArea label="Game Note*" svg="info" type="text" name="note"
                value={values.note} onChange={handleChange}
                error={errors.note} onBlur={() => validateField('note', values.note)}
            />

            <InputArea label="Outside Link*" svg="link" type="text" name="outsideLink"
                value={values.outsideLink || ''} onChange={handleChange}
                error={errors.outsideLink} onBlur={() => validateField('outsideLink', values.outsideLink)}
            />

            <InputArea label="Files Link" svg="folder" type="text" name="gameLink"
                value={values.gameLink || ''} onChange={handleChange}
                error={errors.gameLink} onBlur={() => validateField('gameLink', values.gameLink)}
            />

            <InputArea label="Devlog Link" svg="link" type="text" name="devlog"
                value={values.devlog || ''} onChange={handleChange}
                error={errors.devlog} onBlur={() => validateField('devlog', values.devlog)}
            />

            <InputArea label="Walkthrough Link" svg="link" type="text" name="walkthrough"
                value={values.walkthrough || ''} onChange={handleChange}
                error={errors.walkthrough} onBlur={() => validateField('walkthrough', values.walkthrough)}
            />

            <InputArea label="Description*" svg="description" type="textarea" name="description"
                value={values.description || ''} onChange={handleChange}
                error={errors.description} onBlur={() => validateField('description', values.description)}
            />

            <InputArea label="Credits*" svg="agreement" type="textarea" name="credits"
                value={values.credits || ''} onChange={handleChange}
                error={errors.credits} onBlur={() => validateField('credits', values.credits)}
            />

            <InputArea label="Controls*" svg="keyboard" type="textarea" name="controls"
                value={values.controls || ''} onChange={handleChange}
                error={errors.controls} onBlur={() => validateField('controls', values.controls)}
            />

            <div className="input-area grid">
                <label className='grid align-center' htmlFor="genre">
                    <SvgRender iconName='action' />
                    <span>Genre:</span>
                </label>
                <select id="genre" name="genre" multiple value={formData.genre} onChange={handleGenreChange}>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="other">Other</option>
                    <option value="platformer">Platformer</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="roguelike">Roguelike</option>
                </select>
            </div>

            <div className="input-area grid h-fit">
                <label className='grid align-center' htmlFor="platform">
                    <SvgRender iconName='monitor' />
                    <span>Platform:</span>
                </label>
                <select id="platform" name="platform" value={formData.platform} onChange={handleChange} required>
                    <option value="android">Android</option>
                    <option value="html5">HTML5</option>
                    <option value="steam">Steam</option>
                </select>
            </div>

            <div className="input-area grid h-fit">
                <label className='grid align-center' htmlFor="isGameJam">
                    <SvgRender iconName='itch' />
                    <span>Is Game Jam:</span>
                </label>
                <select id="isGameJam" name="isGameJam" value={formData.isGameJam} onChange={handleChange} required>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="input-area grid">
                <label className='grid align-center' htmlFor="screenshots">
                    <SvgRender iconName='images' />
                    <span>Screenshots:</span>
                </label>
                <div className="upload-area grid">
                    {formData.screenshots.map((screenshot, index) => (
                        <div key={index}>
                            <ImageUploader index={index} defaultImgUrl={screenshot || defaultScreenshot}
                                folderName="/games/screenshots" cloudName={cloudName}
                                uploadPreset={uploadPreset} onUploaded={handleScreenshotUpload}
                            />
                        </div>))}
                    <div className="amount-management grid">
                        <button type="button" onClick={() => handleRemoveScreenshot(formData.screenshots.length - 1)}
                            className={`flex column full-center ${formData.screenshots.length === 1 ? 'disabled' : ''}`}
                            disabled={formData.screenshots.length === 1}>
                            <SvgRender iconName="minus" />
                            <span>Remove</span>
                        </button>
                        <button type="button" onClick={handleAddScreenshot} disabled={formData.screenshots.length >= 5}
                            className={`flex column full-center ${formData.screenshots.length >= 5 ? 'disabled' : ''}`}>
                            <SvgRender iconName="plus" />
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="input-area grid h-fit">
                <label className='grid align-center' htmlFor="icon">
                    <SvgRender iconName='images' />
                    <span>Icon:</span>
                </label>
                <div className="upload-area grid">
                    <ImageUploader index={0} defaultImgUrl={formData.icon || defaultIcon}
                        folderName="/games/icons" cloudName={cloudName}
                        uploadPreset={uploadPreset} onUploaded={handleIconUpload}
                    />
                </div>
            </div>

            <section className='form-actions flex row align-center justify-between'>
                <button className={`flex row align-center ${!allFieldsFilled || hasErrors ? 'disabled' : ''}`}
                    type="submit" disabled={!allFieldsFilled || hasErrors}>
                    <span>Send</span>
                </button>
            </section>
        </form>
    )
}