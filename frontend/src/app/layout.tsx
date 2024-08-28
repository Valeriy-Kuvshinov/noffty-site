import '../assets/css/global.css'
import { Providers } from '../contexts/Providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsideMenu } from '../components/modals/AsideMenu'
import { LoginForm } from '../components/forms/LoginForm'
import { ImageModal } from '../components/modals/ImageModal'
import { SystemMsg } from '../components/modals/SystemMsg'

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919435/ydjn6p0djqwbkko4zqts.png'
const siteDescription = 'Noffty Productions - Delivering the best Web & Android Indie games from Platformer to Roguelike.'

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content="Noffty Productions" />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteLogo} />
      <meta property="og:url" content="https://noffty.com" />
      <title>Noffty Productions</title>
      <link rel="icon" href={siteLogo} type="image/png" />
      <link rel="canonical" href="https://noffty.com" />
    </head>
    <body>
      <Providers>
        <AsideMenu />
        <LoginForm />
        <ImageModal />
        <SystemMsg />
        <main className='main-container grid'>
          <Header />
          {children}
          <Footer />
        </main>
      </Providers>
    </body>
  </html>)
}