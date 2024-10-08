'use client'
import { utilityService } from "../../../services/utility-service"
import { Game } from "../../../interfaces/game"
import { useModal } from "../../../contexts/ModalContext"
import { ImageContainer } from "../../../components/general/ImageContainer"
import { SvgRender } from "../../../components/general/SvgRender"
import { ReworkedText } from "../../../components/general/ReworkedText"

export function EditPreview({ game }: { game: Game }) {
    return (<article className="edit-preview flex column w-100">
        <h2 className="text-center">Preview: {game.title}</h2>
        <div className="game-frame flex column w-100 text-center">
            <h3>You Are Now Playing {game.title}</h3>
            {game.platform === 'html5' ? (
                game.gameLink ? (
                    <div className="iframe-placeholder flex full-center">
                        <p>Gameplay would be shown here</p>
                    </div>
                ) : (
                    <p>Game not published or inaccessible</p>
                )
            ) : (<>
                <p>
                    Whoa, looks like the game is not intended for the browser, but for
                    <span className="text-capitalize"> {game.platform}</span> instead.
                </p>
                <a href={game.outsideLink} className="flex row" target="_blank"
                    rel="noopener noreferrer" aria-label="Navigate to game's actual platform?">
                    <SvgRender iconName={game.platform} />
                    <span>Take Me to The Game!</span>
                    <SvgRender iconName={game.platform} />
                </a>
            </>)}
        </div>
        <EditPreviewBody game={game} />
    </article>)
}

function EditPreviewBody({ game }: { game: Game }) {
    const { openModal } = useModal()
    const isSpecialGame = game.title === "Stoic^2" || game.title === "Absurd^2"

    const gameDescription = utilityService.formatText(game.description || '')
    const gameControls = utilityService.formatText(game.controls || '')
    const gameCredits = utilityService.formatText(game.credits || '')
    const gameSpecialNote = utilityService.formatText(game.specialNote || '')

    function handleImageClick(imageUrl: string) {
        openModal('image-modal', imageUrl)
    }

    return (<div className="game-body flex column w-100 layout-row">
        <h3 className="text-center">{game.subtitle}</h3>
        <div className={`screenshots flex row ${game.platform !== 'android' &&
            game.screenshots.length >= 5 ? 'w-100' : ''}`}>
            {game.screenshots.slice(1).map((screenshot, index) => (
                <ImageContainer key={index} src={screenshot} className={`h-100`}
                    alt={`${game.title} screenshot number ${index + 1}`}
                    style={{
                        maxHeight: game.screenshots.length < 5 ? '215px' : 'auto',
                        aspectRatio: game.platform !== 'android' ? '16 / 9' : '9 / 16'
                    }}
                    onClick={() => handleImageClick(screenshot)}
                />)
            )}
        </div>
        <ReworkedText string={gameDescription!} />
        <ReworkedText string={`Controls: ${gameControls!}`} />
        <ReworkedText string={gameCredits!} />
        {game.specialNote && (
            isSpecialGame ? (
                <ReworkedText string={gameSpecialNote!} custom="special" />
            ) : (
                <ReworkedText string={gameSpecialNote!} />
            )
        )}
        <div className="video-wrapper grid w-100">
            {game.walkthrough && (
                <div className="video flex column w-100">
                    <p className="text-hide-overflow">{`If you're stuck, we've got you covered:`}</p>
                    <div className="iframe flex column full-center">
                        <p className="text-center">Walkthrough video will be shown here...</p>
                    </div>
                </div>
            )}
            {game.devlog && (
                <div className="video flex column w-100">
                    <p className="text-hide-overflow">{`Be sure to check out the developer's log:`}</p>
                    <div className="iframe flex column full-center">
                        <p className="text-center">Devlog video will be shown here...</p>
                    </div>
                </div>
            )}
        </div>
        <div className="game-info flex column w-100">
            <p className="flex">
                <span className="text-right">Published</span>
                {utilityService.formatDate(game.createdAt!)} GMT / UTC
            </p>
            <p className="flex">
                <span className="text-right">Platform</span>
                {game.platform.includes('html5') ?
                    utilityService.upperCaseString(game.platform) :
                    utilityService.capitalizeString(game.platform)}
            </p>
            <p className="flex">
                <span className="text-right">Genre</span>
                {game.genre?.map(genre => utilityService.capitalizeString(genre)).join(', ')}
            </p>
            {game.outsideLink?.includes('itch.io') && (
                <a href={game.outsideLink} target="_blank" aria-label="navigation to itch.io" title="Go to itch.io?"
                    rel="noopener noreferrer" className="flex row align-center w-fit">
                    <SvgRender iconName={'itch'} />
                    <span>Available on Itch.io as well!</span>
                    <SvgRender iconName={'itch'} />
                </a>
            )}
        </div>
    </div>)
}