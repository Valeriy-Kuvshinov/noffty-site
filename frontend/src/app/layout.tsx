import '../assets/css/global.css'
import { DeviceTypeProvider } from '../contexts/DeviceTypeContext'
import { ModalProvider } from '../contexts/ModalContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsideMenu } from '../components/modals/AsideMenu'

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DeviceTypeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </DeviceTypeProvider>
  )
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Noffty Productions</title>
        <link rel="icon" href={siteLogo} type="image/png" />
      </head>
      <body>
        <Providers>
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