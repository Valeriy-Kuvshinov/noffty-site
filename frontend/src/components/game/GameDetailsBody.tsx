import React from "react"
import { Game } from "../../models/game"
import { UtilityService } from "../../services/utility.service"
import { SvgRender } from "../general/SvgRender"
import { ImageContainer } from "../general/ImageContainer"

export function GameDetailsBody({ game }: { game: Game }) {
    const utilService = new UtilityService()

    const gridTemplateColumns = `repeat(${game.screenshots.length - 1}, 1fr)`

    function convertLineBreaks(string: string) {
        const parts = string.split('<br>')
        return parts.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < parts.length - 1 && <br />}
            </React.Fragment>
        ))
    }

    return (
        <article className="game-body flex column w-100">
            <h3 className="text-center text-capitalize">{game.note}</h3>
            <div className={`screenshots grid ${game.platform !== 'android' ? 'w-100' : ''}`}
                style={{ gridTemplateColumns }}>
                {game.screenshots.slice(1).map((screenshot, index) => (
                    <ImageContainer
                        key={index}
                        src={screenshot}
                        alt={`${game.name} screenshot number ${index + 1}`}
                        className={`h-100 ${game.platform !== 'android' ? 'w-100' : ''}`}
                        style={{
                            maxHeight: game.screenshots.length < 5 ? '215px' : 'auto',
                            aspectRatio: game.platform !== 'android' ? '16 / 9' : '9 / 16'
                        }}
                    />
                ))}
            </div>
            <p className="separator">{convertLineBreaks(game.description!)}</p>
            <p className="text-bold">Controls: {game.controls}</p>
            <p>{convertLineBreaks(game.credits!)}</p>
            <div className="video-wrapper grid w-100">
                {game.walkthrough && (
                    <div className="video flex column w-100">
                        <p>If you're stuck, we've got you covered:</p>
                        <iframe
                            src={utilService.getYouTubeEmbedUrl(game.walkthrough)}
                            title="Game Walkthrough"
                            aria-label="Video walkthrough for the game"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                )}
                {game.devlog && (
                    <div className="video flex column w-100">
                        <p>Be sure to check out the developer's log:</p>
                        <iframe
                            src={utilService.getYouTubeEmbedUrl(game.devlog)}
                            title="Developer's Log"
                            aria-label="Video devlog about the game"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                )}
            </div>
            <div className="game-info flex column w-100">
                <p className="flex">
                    <span className="text-right">Published</span>
                    {utilService.formatDate(game.createdAt!)} GMT / UTC
                </p>
                <p className="flex">
                    <span className="text-right">Platform</span>
                    {game.platform.includes('html5') ?
                        utilService.upperCaseString(game.platform) :
                        utilService.capitalizeString(game.platform)}
                </p>
                <p className="flex">
                    <span className="text-right">Genre</span>
                    {game.genre?.map(genre => utilService.capitalizeString(genre)).join(', ')}
                </p>
                {game.outsideLink?.includes('itch.io') && (
                    <a href={game.outsideLink} target="_blank" aria-label="itch.io navigate button"
                        rel="noopener noreferrer" className="flex row align-center w-fit fast-trans">
                        <SvgRender iconName={'itch'} />
                        <span>Available on Itch.io as well!</span>
                        <SvgRender iconName={'itch'} />
                    </a>
                )}
            </div>
        </article>
    )
}