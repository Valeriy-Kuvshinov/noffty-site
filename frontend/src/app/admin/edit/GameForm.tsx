'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Game } from "../../../interfaces/game"
import { gameService } from "../../../services/api/game-service"
import { useForm } from "../../../hooks/form"
import { useDebounce } from "../../../hooks/debounce"
import { ImageUploader } from "../../../components/forms/ImageUploader"
import { SvgRender } from "../../../components/general/SvgRender"
import { InputArea } from "../../../components/forms/InputArea"
import { EditPreview } from "./EditPreview"

const defaultIcon = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif'
const defaultScreenshot = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif'

export function GameForm({ game }: { game: Game }) {
    const router = useRouter()

    const validationSchema = {
        title: { required: true, minLength: 3, pattern: /[\s.\-!^&?']+/ },
        subtitle: { required: true, minLength: 3, pattern: /[\s.\-!?']+/ },
        outsideLink: { required: true, minLength: 3, link: true },
        gameLink: { minLength: 3, link: true },
        devlog: { minLength: 3, link: true },
        walkthrough: { minLength: 3, link: true },
        description: { required: true, minLength: 15, pattern: /[\s.\-!?@#$',^*_;():]+/ },
        credits: { required: true, minLength: 3, pattern: /[\s.\-!?@#$',^*_;:]+/ },
        controls: { required: true, minLength: 3, pattern: /[\s.\-!?@#$',^/*;:]+/ }
    }
    const { values, errors, setErrors, validateField, handleChange, handleSubmit,
        resetForm, setFieldValue } = useForm(game, validationSchema, async (values) => {
            try {
                await gameService.save(values as Game)
                console.log('Game saved successfully')

                resetForm()
                router.push(`/admin/games`)
            } catch (error) {
                console.error('Failed to save game', error)
            }
        })
    const debouncedName = useDebounce(values.title, 500)

    function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
        setFieldValue('genre', selectedOptions)
    }

    function handleIconUpload(data: { url: string; index: number }) {
        setFieldValue('icon', data.url)
    }

    function handleAddScreenshot() {
        if (values.screenshots.length < 5) setFieldValue('screenshots', [...values.screenshots, ''])
    }

    function handleRemoveScreenshot(index: number) {
        if (values.screenshots.length > 1) {
            const newScreenshots = [...values.screenshots]
            newScreenshots.splice(index, 1)
            setFieldValue('screenshots', newScreenshots)
        }
    }

    function handleScreenshotUpload(data: { url: string; index: number }) {
        const newScreenshots = [...values.screenshots]
        newScreenshots[data.index] = data.url
        setFieldValue('screenshots', newScreenshots)
    }

    async function handleDelete() {
        if (game._id) {
            try {
                await gameService.remove(game._id.toString())
                console.log('Game deleted successfully')
                router.push('/admin/games')
            } catch (error) {
                console.error('Failed to delete game', error)
            }
        }
    }

    async function checkNameAvailability(name: string) {
        try {
            if (name === game.title) { // don't show error when the edited name is the original
                setErrors(prevErrors => ({ ...prevErrors, name: null }))
                return
            }
            const { isAvailable } = await gameService.checkNameAvailable(name)
            setErrors(prevErrors => ({
                ...prevErrors, name: isAvailable ? prevErrors.name : 'Name is taken'
            }))
        } catch (error) {
            console.error('Failed to check name availability', error)
        }
    }

    useEffect(() => {
        if (debouncedName) checkNameAvailability(debouncedName)
    }, [debouncedName])

    const allFieldsFilled = values.title && values.subtitle && values.outsideLink &&
        values.description && values.credits && values.controls
    const hasErrors = Object.values(errors).some(error => error)

    return (<form className="grid layout-row w-100" onSubmit={handleSubmit}>
        <article className="form-inputs grid w-100">
            <InputArea label="Game Title*" svg="title" type="text" name="title"
                maxLength={30} value={values.title} onChange={handleChange} error={errors.title}
                onBlur={() => validateField('title', values.title)}
            />
            <InputArea label="Game Subtitle*" svg="info" type="text" name="subtitle"
                maxLength={40} value={values.subtitle} onChange={handleChange} error={errors.subtitle}
                onBlur={() => validateField('subtitle', values.subtitle)}
            />
            <InputArea label="Outside Link*" svg="link" type="text" name="outsideLink"
                maxLength={120} value={values.outsideLink || ''} onChange={handleChange} error={errors.outsideLink}
                onBlur={() => validateField('outsideLink', values.outsideLink)}
            />
            <InputArea label="Files Link" svg="folder" type="text" name="gameLink"
                maxLength={120} value={values.gameLink || ''} onChange={handleChange} error={errors.gameLink}
                onBlur={() => validateField('gameLink', values.gameLink || '')}
            />
            <InputArea label="Devlog Link" svg="link" type="text" name="devlog"
                maxLength={120} value={values.devlog || ''} onChange={handleChange} error={errors.devlog}
                onBlur={() => validateField('devlog', values.devlog || '')}
            />
            <InputArea label="Walkthrough Link" svg="link" type="text" name="walkthrough"
                maxLength={120} value={values.walkthrough || ''} onChange={handleChange} error={errors.walkthrough}
                onBlur={() => validateField('walkthrough', values.walkthrough || '')}
            />
            <InputArea label="Description*" svg="description" type="textarea" name="description"
                maxLength={900} value={values.description || ''} onChange={handleChange} error={errors.description}
                onBlur={() => validateField('description', values.description)}
            />
            <InputArea label="Credits*" svg="agreement" type="textarea" name="credits"
                maxLength={120} value={values.credits || ''} onChange={handleChange} error={errors.credits}
                onBlur={() => validateField('credits', values.credits)}
            />
            <InputArea label="Controls*" svg="keyboard" type="textarea" name="controls"
                maxLength={120} value={values.controls || ''} onChange={handleChange} error={errors.controls}
                onBlur={() => validateField('controls', values.controls)}
            />
            <div className="input-area grid">
                <label className='grid align-center' htmlFor="genre">
                    <SvgRender iconName='action' />
                    <span>Genre:</span>
                </label>
                <select id="genre" name="genre" multiple value={values.genre} onChange={handleGenreChange}>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="other">Other</option>
                    <option value="platformer">Platformer</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="roguelike">Roguelike</option>
                </select>
            </div>
            <div className="input-area grid">
                <label className='grid align-center' htmlFor="platform">
                    <SvgRender iconName='monitor' />
                    <span>Platform:</span>
                </label>
                <select id="platform" name="platform" value={values.platform} onChange={handleChange} required>
                    <option value="android">Android</option>
                    <option value="html5">HTML5</option>
                    <option value="steam">Steam</option>
                </select>
            </div>
            <div className="input-area grid">
                <label className='grid align-center' htmlFor="isGameJam">
                    <SvgRender iconName='itch' />
                    <span>Is Game Jam:</span>
                </label>
                <select id="isGameJam" name="isGameJam" value={values.isGameJam} onChange={handleChange} required>
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
                    {values.screenshots.map((screenshot: string, index: number) => (
                        <div key={index}>
                            <ImageUploader index={index} defaultImgUrl={screenshot || defaultScreenshot}
                                folderName="/games/screenshots" onUploaded={handleScreenshotUpload}
                            />
                        </div>
                    ))}
                    <div className="amount-management grid">
                        <button type="button" onClick={() => handleRemoveScreenshot(values.screenshots.length - 1)}
                            disabled={values.screenshots.length === 1}
                            className={`flex column full-center ${values.screenshots.length === 1 ? 'disabled' : ''}`}>
                            <SvgRender iconName="minus" />
                            <span>Remove</span>
                        </button>
                        <button type="button" onClick={handleAddScreenshot} disabled={values.screenshots.length >= 5}
                            className={`flex column full-center ${values.screenshots.length >= 5 ? 'disabled' : ''}`}>
                            <SvgRender iconName="plus" />
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="input-area grid">
                <label className='grid align-center' htmlFor="icon">
                    <SvgRender iconName='images' />
                    <span>Icon:</span>
                </label>
                <div className="upload-area grid">
                    <ImageUploader index={-1} defaultImgUrl={game.icon || defaultIcon}
                        folderName="/games/icons" onUploaded={handleIconUpload}
                    />
                </div>
            </div>
            <section className='form-actions flex row align-center justify-between'>
                <button className={`flex row align-center ${!allFieldsFilled || hasErrors ? 'disabled' : ''}`}
                    type="submit" disabled={!allFieldsFilled || hasErrors}>
                    <span>Send</span>
                </button>
                {game._id && (
                    <button className="flex row align-center" type="button" onClick={handleDelete}>
                        <span>Delete</span>
                    </button>
                )}
            </section>
        </article>
        <EditPreview game={values as Game} />
    </form>)
}