import { Game } from "../interfaces/game"
import { utilityService } from "../services/utility-service"
import { SpecialLink } from "../components/general/SpecialLink"
import { ImageContainer } from "../components/general/ImageContainer"
import { GameCarousel } from "../components/game/GameCarousel"
import { SvgRender } from "../components/general/SvgRender"

export default function Home() {
  const games: Game[] = [
    {
      "title": "Absurd^2",
      "subtitle": "Simple 2D platformer",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/robpcra0w1qdahbso1z5.avif",
      "screenshots": [
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713779/games/screenshots/aow5n7wehb2bvijvylqz.avif",
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713777/games/screenshots/n2hrvpdq49uheetuis2l.avif"
      ],
      "isGameJam": 'no'
    },
    {
      "title": "Boiling Point Classic",
      "subtitle": "Reverse Horde Roguelite",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/aimouzhzjqx6j2hltqmv.avif",
      "screenshots": [
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713149/games/screenshots/ffeaahkmjbga6lnjxirm.avif",
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713148/games/screenshots/qm52wn5sa81f3jsdpjla.avif"
      ],
      "isGameJam": 'yes'
    },
    {
      "title": "Gun Stick Dash Jump",
      "subtitle": "Corrupted action platformer",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/frxyvh0gxraa19qli7jf.avif",
      "screenshots": [
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716712789/games/screenshots/ckujz51caydgcd111qpb.avif",
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716712791/games/screenshots/tm680ywli1ee22kv0yai.avif"
      ],
      "isGameJam": 'yes'
    },
    {
      "title": "WavePunk",
      "subtitle": "Wave merging adventure",
      "platform": "html5",
      "icon": "https://res.cloudinary.com/djzid7ags/image/upload/v1716708222/games/icons/k2zizoiquqqbm2eqi34s.avif",
      "screenshots": [
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/wx2agit1icmycnts55zl.avif",
        "https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/weucxxqyxygxsuqpxjbr.avif"
      ],
      "isGameJam": 'yes'
    }
  ]
  const socialLinks = utilityService.getSocialLinks()
  const video = 'https://res.cloudinary.com/djzid7ags/video/upload/v1719778348/video/diggiwi6prn2pbrzhfnd.webm'
  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919509/wkqirx5zx97olc5cofzn.avif'

  return (<main className="home-page full w-h-100">
    <section className="page-contents flex column align-center w-h-100 layout-row">
      <div className="video-container flex column">
        <video autoPlay loop muted>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <article className="intro-part flex column full-center w-100 layout-row">
        <ImageContainer src={companyLogo} alt="noffty logo" />
        <h2 className="text-center">{`We do games here, ok?`}</h2>

        <div className="noffty-links flex row">
          {socialLinks.map(link => (
            <SpecialLink key={link.iconName} iconName={link.iconName}
              link={link.link} ariaLabel={link.ariaLabel} />
          ))}
        </div>
      </article>
      <article className="game-content grid full-center w-100 layout-row">
        <GameCarousel games={games} />

        <div className="content-info flex column">
          <h2 className="text-center">From Platformer to Roguelike,
            we work hard to deliver to you the best Indie Web and Android games possible
          </h2>
          <a href="/games" className="flex row align-center w-fit" title="Go to games page?"
            aria-label="Go to games page">
            <SvgRender iconName="controller" />
            <span>Find Out Here!</span>
            <SvgRender iconName="controller" />
          </a>
        </div>
      </article>
    </section>
  </main>)
}