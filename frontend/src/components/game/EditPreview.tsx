'use client'
import { UtilityService } from "../../services/utility.service"
import { Game } from "../../models/game"
import { ImageContainer } from "../general/ImageContainer"
import { SvgRender } from "../general/SvgRender"

export function EditPreview({ game }: { game: Game }) {
    const gridTemplateColumns = `repeat(${game.screenshots.length - 1}, 1fr)`

    return (<article className="edit-preview">
        <h2 className="text-center">Preview: {game.name}</h2>
        <div className="game-frame flex column w-100 text-center">
            <h3>You Are Now Playing {game.name}</h3>
            {game.platform === 'html5' ? (
                game.gameLink ? (
                    <div className="iframe-placeholder flex full-center">
                        <p>Gameplay would be shown here</p>
                    </div>
                ) : (
                    <p>Game not published or inaccessible</p>
                )
            ) : (
                <p>Game is for {game.platform}</p>
            )}
        </div>
        <div className="game-body flex column w-100 layout-row">
            <h3 className="text-center">{game.note}</h3>
            <div className={`preview-screenshots grid ${game.platform !== 'android' ? 'w-100' : ''}`}
                style={{ gridTemplateColumns }}>
                {game.screenshots.slice(1).map((screenshot, index) => (
                    <ImageContainer key={index} src={screenshot}
                        alt={`${game.name} screenshot number ${index + 1}`}
                        className={`preview-screenshot ${game.platform !== 'android' ? 'w-100' : ''}`}
                        style={{
                            maxHeight: game.screenshots.length < 5 ? '215px' : 'auto',
                            aspectRatio: game.platform !== 'android' ? '16 / 9' : '9 / 16'
                        }}
                    />
                ))}
            </div>
            <p>{game.description || ''}</p>
            <p>{`Controls: ${game.controls || ''}`}</p>
            <p>{game.credits || ''}</p>
            <div className="video-wrapper grid w-100">
                {game.walkthrough && (
                    <div className="video flex column w-100">
                        <p>{`If you're stuck, we've got you covered:`}</p>
                        <iframe src={UtilityService.getYouTubeEmbedUrl(game.walkthrough)}
                            title="Game Walkthrough" allowFullScreen={true}
                            aria-label="Video walkthrough for the game"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                )}
                {game.devlog && (
                    <div className="video flex column w-100">
                        <p>{`Be sure to check out the developer's log:`}</p>
                        <iframe src={UtilityService.getYouTubeEmbedUrl(game.devlog)}
                            title="Developer's Log" allowFullScreen={true}
                            aria-label="Video devlog about the game"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                )}
            </div>
            <div className="game-info flex column w-100">
                <p className="flex">
                    <span className="text-right">Published</span>
                    {UtilityService.formatDate(game.createdAt!)} GMT / UTC
                </p>
                <p className="flex">
                    <span className="text-right">Platform</span>
                    {game.platform.includes('html5') ?
                        UtilityService.upperCaseString(game.platform) :
                        UtilityService.capitalizeString(game.platform)}
                </p>
                <p className="flex">
                    <span className="text-right">Genre</span>
                    {game.genre?.map(genre => UtilityService.capitalizeString(genre)).join(', ')}
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
        </div>
    </article>)
}