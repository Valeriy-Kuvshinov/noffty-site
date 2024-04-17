import '../assets/css/global.css'

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
        <div className='main-container'>
          {children}
        </div>
      </body>
    </html>
  )
}