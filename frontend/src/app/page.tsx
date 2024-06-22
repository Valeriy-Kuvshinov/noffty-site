import { GameService } from "../services/game.service"
import { UtilityService } from "../services/utility.service"
import { GameList } from "../components/game/GameList"
import { SpecialLink } from "../components/general/SpecialLink"
import { ImageContainer } from "../components/general/ImageContainer"

export default function Home() {
  const gamesService = new GameService()
  const webGames = gamesService.getMiniGames('html5')
  const mobileGames = gamesService.getMiniGames('android')

  const socialLinks = UtilityService.getSocialLinks()

  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/xtidg8pprkayhx9pxhce.avif'

  return (
    <main className="home-page full w-h-100">
      <section className="page-contents flex column align-center w-h-100 layout-row">
        <article className="intro-part flex column full-center w-fit">
          <ImageContainer src={companyLogo} alt="noffty logo" />
          <h2 className="text-center">Welcome to Noffty Production's Website</h2>

          <div className="noffty-links flex row">
            {socialLinks.map(link => (
              <SpecialLink key={link.iconName} iconName={link.iconName}
                link={link.link} ariaLabel={link.ariaLabel} />
            ))}
          </div>
        </article>

        <article className="games-showcase flex column full-center w-100">
          <h2 className="text-center">Published Games</h2>
          <h3 className="text-center">Available on Our Site Now!</h3>
          <GameList games={webGames} isAdminPage={false} />

          <h3 className="text-center">Available on Google Play!</h3>
          <GameList games={mobileGames} isAdminPage={false} />

          <h4 className="text-center">We've got plenty more games, which you can</h4>
          <a href="/games" className="action-btn" title="Go to games index?"
            aria-label="Go to games page">Find on Our Website!</a>
        </article>
      </section>
    </main>
  )
}