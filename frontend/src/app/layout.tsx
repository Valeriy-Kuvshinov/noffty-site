import '../assets/css/global.css'
import { Providers } from '../contexts/Providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsideMenu } from '../components/modals/AsideMenu'
import { LoginForm } from '../components/forms/LoginForm'
import { ImageModal } from '../components/modals/ImageModal'

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919435/ydjn6p0djqwbkko4zqts.png'
const siteDescription = 'Noffty Productions - Delivering the best Web & Android Indie games from Platformer to Roguelike.'

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en">
    <head>
      <title>Noffty Productions</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href={siteLogo} type="image/png" />
    </head>
    <body>
      <Providers>
        <AsideMenu />
        <LoginForm />
        <ImageModal />
        <main className='main-container'>
          <Header />
          {children}
          <Footer />
        </main>
      </Providers>
    </body>
  </html>)
}