import { SvgRender } from "../components/SvgRender"

export default function Home() {
  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305391/shv6c332n1pkelye6ipe.jpg'

  const linkDiscord = 'https://discord.gg/SeNsSRt'
  const linkItch = 'https://t1mure.itch.io/'
  const linkPlay = 'https://play.google.com/store/apps/dev?id=8915839538887603911&'
  const linkYoutube = 'https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA'

  return (
    <main className="home-page full w-h-100">
      <section className="page-contents flex column align-center w-h-100 layout-row">
        <article className="intro-part flex column full-center w-fit">
          <img src={companyLogo} alt="noffty logo" />
          <h2>Welcome to Noffty Production's Website</h2>

          <div className="noffty-links flex row">
            <a href={linkDiscord} aria-label="Discord">
              <SvgRender iconName="rhombus" />
              <SvgRender iconName="discord" />
            </a>
            <a href={linkItch} aria-label="Itch.io">
              <SvgRender iconName="rhombus" />
              <SvgRender iconName="itch" />
            </a>
            <a href={linkPlay} aria-label="Google Play">
              <SvgRender iconName="rhombus" />
              <SvgRender iconName="googlePlay" />
            </a>
            <a href={linkYoutube} aria-label="YouTube">
              <SvgRender iconName="rhombus" />
              <SvgRender iconName="youtube" />
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}
