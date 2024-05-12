'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ImageContainer } from "./general/ImageContainer"

export function Header() {
    const pathname = usePathname()

    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

    function isActive(path: string) {
        return pathname === path
    }

    return (
        <article className="header full">
            <section className="header-contents w-h-100 layout-row">
                <div className="links flex row align-center justify-between w-100">
                    <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                        title="Go to home?" aria-label="home navigation">
                        <ImageContainer src={headerLogo} alt="noffty logo" />
                    </Link>
                    <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                        title="Go to games index?" aria-label="games index navigation">
                        <span>Games</span>
                    </Link>
                    <Link href="/about/contact" className={`fast-trans ${isActive('/about/contact') ? 'active' : ''}`}
                        title="Go to contact page?" aria-label="contact page navigation">
                        <span>Contact</span>
                    </Link>
                    <Link href="/about/introduction" className={`fast-trans ${isActive('/about/introduction') ? 'active' : ''}`}
                        title="Go to about page?" aria-label="about page navigation">
                        <span>About</span>
                    </Link>
                </div>
            </section>
        </article>
    )
}