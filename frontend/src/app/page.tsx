export default function Home() {
  const companyLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305391/shv6c332n1pkelye6ipe.jpg'

  return (
    <main className="home-page full w-h-100">
      <section className="page-contents flex column align-center w-h-100 layout-row">
        <article className="intro-part flex column full-center w-fit">
          <img src={companyLogo} alt="noffty logo" />
          <h2>Welcome to Noffty Production's Website</h2>

          <div className="noffty-links flex row">
            <a href="https://discord.gg/SeNsSRt">
              Discord
            </a>
            <a href="https://t1mure.itch.io/">
              itch
            </a>
            <a href="https://play.google.com/store/apps/dev?id=8915839538887603911&">
              google
            </a>
            <a href="https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA">
              yotube
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}
