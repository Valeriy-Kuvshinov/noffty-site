import { Game } from "../models/game"
import { UtilityService } from "../services/utility.service"
import { GameList } from "../components/game/GameList"
import { SpecialLink } from "../components/general/SpecialLink"
import { ImageContainer } from "../components/general/ImageContainer"

export default function Home() {
  const webGames: Game[] = [
    {
      "name": "Boiling Point Classic",
      "note": "Reverse Horde Roguelite",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/aimouzhzjqx6j2hltqmv.avif",
      "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713149/games/screenshots/ffeaahkmjbga6lnjxirm.avif"],
      "isGameJam": 'yes'
    },
    {
      "name": "Absurd^2",
      "note": "Simple 2D platformer",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/robpcra0w1qdahbso1z5.avif",
      "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713779/games/screenshots/aow5n7wehb2bvijvylqz.avif"],
      "isGameJam": 'no'
    },
    {
      "name": "WavePunk",
      "note": "Wave merging adventure",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708222/games/icons/k2zizoiquqqbm2eqi34s.avif",
      "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/wx2agit1icmycnts55zl.avif"],
      "isGameJam": 'yes'
    }
  ]
  const mobileGames: Game[] = [
    {
      "name": "Betorched",
      "note": "Turn based roguelite",
      "platform": "android",
      "outsideLink": "https://play.google.com/store/apps/details?id=com.NofftyProd.Betorched",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/zcwoimnfmdbbp5wpf4ov.avif",
      "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716711012/games/screenshots/tmbzyizctojypoq072lg.avif"],
      "isGameJam": 'no'
    },
    {
      "name": "WordDart",
      "note": "Last letter arcade",
      "platform": "android",
      "outsideLink": "https://play.google.com/store/apps/details?id=com.michaelkushnir.worddart",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708225/games/icons/y33gzz7rz6c5hwxohlqj.avif",
      "screenshots": ["https://res.cloudinary.com/djzid7ags/image/upload/v1716711332/games/screenshots/vlgqdmia1meyyu80djah.avif"],
      "isGameJam": 'no'
    }
  ]
  const socialLinks = UtilityService.getSocialLinks()

  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/xtidg8pprkayhx9pxhce.avif'

  return (<main className="home-page full w-h-100">
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
  </main>)
}