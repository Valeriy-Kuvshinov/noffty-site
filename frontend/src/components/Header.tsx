'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { SvgRender } from "./general/SvgRender"
import { ImageContainer } from "./general/ImageContainer"

export function Header() {
    const pathname = usePathname()
    const [searchTerm, setSearchTerm] = useState('')

    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

    function isActive(path: string) {
        return pathname === path
    }

    function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
    }

    function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        window.location.href = `/games?name=${encodeURIComponent(searchTerm)}`
    }

    return (
        <article className="header full">
            <section className="header-contents w-h-100 layout-row">
                <div className="links flex row align-center justify-between w-100">
                    <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                        title="Go to home?" aria-label="Navigate to home page">
                        <ImageContainer src={headerLogo} alt="noffty logo" />
                    </Link>
                    <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                        title="Go to games index?" aria-label="Navigate to games page">
                        <span>Games</span>
                    </Link>
                    <Link href="/about/contact" className={`fast-trans ${isActive('/about/contact') ? 'active' : ''}`}
                        title="Go to contact page?" aria-label="Navigate to contact page">
                        <span>Contact</span>
                    </Link>
                    <Link href="/about/introduction" className={`fast-trans ${isActive('/about/introduction') ? 'active' : ''}`}
                        title="Go to about page?" aria-label="Navigate to about page">
                        <span>About</span>
                    </Link>
                    <form onSubmit={handleSearchSubmit} className="flex row align-center">
                        <input
                            type="text"
                            placeholder="Search games..."
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                        />
                        <button type="submit" className="fast-trans">
                            <SvgRender iconName="search" />
                        </button>
                    </form>
                </div>
            </section>
        </article>
    )
}