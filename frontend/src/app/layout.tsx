import Head from "next/head"
import { ReactNode } from "react"

const siteLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Noffty Productions</title>
        <link rel="icon" href={siteLogo} type="image/png" />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

interface RootLayoutProps {
  children: ReactNode
}