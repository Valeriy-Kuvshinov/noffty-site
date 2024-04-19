import { GamesService } from "../services/games.service"
import { GamesLinks } from "../components/GamesLinks"
import { SpecialLink } from "../components/SpecialLink"
import { CrewLinks } from "../components/CrewLinks"

export default function Home() {
  const gamesService = new GamesService()
  const games = gamesService.getGames()

  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305391/shv6c332n1pkelye6ipe.jpg'

  const socialLinks = [
    { iconName: "discord", link: "https://discord.gg/SeNsSRt", ariaLabel: "Discord" },
    { iconName: "itch", link: "https://t1mure.itch.io/", ariaLabel: "Itch.io" },
    { iconName: "googlePlay", link: "https://play.google.com/store/apps/dev?id=8915839538887603911&", ariaLabel: "Google Play" },
    { iconName: "youtube", link: "https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA", ariaLabel: "YouTube" }
  ]

  const crewMembers = [
    { name: 'Jen Ayve', image: 'https://res.cloudinary.com/djzid7ags/image/upload/v1713535803/about/mhugb5libtdcxs6ugqg1.jpg' },
    { name: 'T1mure', image: 'https://res.cloudinary.com/djzid7ags/image/upload/v1713535803/about/heachou19kttnd9qq0z7.jpg' },
    { name: 'Valeriy Kuvshinov', image: 'https://res.cloudinary.com/djzid7ags/image/upload/v1713535803/about/vkx2jish5tjfrq7zn601.jpg' }
  ]

  return (
    <main className="home-page full w-h-100">
      <section className="page-contents flex column align-center w-h-100 layout-row">
        <article className="intro-part flex column full-center w-fit">
          <img src={companyLogo} alt="noffty logo" />
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
          <GamesLinks games={games} />
        </article>

        <article className="about flex column full-center w-100">
          <h2 className="text-center">Meet The Crew</h2>
          <CrewLinks crewMembers={crewMembers} />
        </article>
      </section>
    </main>
  )
}