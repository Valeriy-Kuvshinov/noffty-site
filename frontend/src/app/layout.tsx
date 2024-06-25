import '../assets/css/global.css'
import { UtilityService } from '../services/utility.service'
import { Providers } from '../contexts/Providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsideMenu } from '../components/modals/AsideMenu'

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const apiKeys = await UtilityService.getAPIKeys()

  return (
    <html lang="en">
      <head>
        <title>Noffty Productions</title>
        <link rel="icon" href={siteLogo} type="image/png" />
      </head>
      <body>
        <Providers apiKeys={apiKeys}>
          <AsideMenu />
          <main className='main-container'>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}