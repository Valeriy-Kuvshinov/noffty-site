import { utilityService } from "../services/utility-service"
import { SpecialLink } from "../components/general/SpecialLink"
import { ImageContainer } from "../components/general/ImageContainer"
import { SvgRender } from "../components/general/SvgRender"

export default function Home() {
  const socialLinks = utilityService.getSocialLinks()
  const video = 'https://res.cloudinary.com/djzid7ags/video/upload/v1719778348/video/diggiwi6prn2pbrzhfnd.webm'
  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919509/wkqirx5zx97olc5cofzn.avif'

  return (<main className="home-page full w-h-100">
    <section className="page-contents flex column align-center w-h-100 layout-row">
      <div className="video-container flex column">
        <video autoPlay loop muted playsInline>
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
        <div className="content-info flex column layout-row">
          <h2 className="text-center">From Platformer to Roguelike,
            we work hard to deliver to you the best Web & Android Indie games possible.
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