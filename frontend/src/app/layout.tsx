import '../assets/css/global.css'
import { DeviceTypeProvider } from '../contexts/deviceTypeContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Noffty Productions</title>
        <link rel="icon" href={siteLogo} type="image/png" />
      </head>
      <body>
        <DeviceTypeProvider>
          <main className='main-container'>
            <Header />
            {children}
            <Footer />
          </main>
        </DeviceTypeProvider>
      </body>
    </html>
  )
}