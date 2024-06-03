'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useSearchParamsUpdate } from "../hooks/searchParamsUpdate"
import { useDeviceType } from "../contexts/deviceTypeContext"
import { SvgRender } from "./general/SvgRender"
import { ImageContainer } from "./general/ImageContainer"

export function Header() {
    const pathname = usePathname()
    const [searchTerm, setSearchTerm] = useState('')
    const { updateSearchParams } = useSearchParamsUpdate()
    const deviceType = useDeviceType()

    const isMobileView = deviceType === 'mobile' || deviceType === 'mini-tablet'
    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'
    const isGamesPage = pathname.startsWith('/games')

    function isActive(path: string) {
        return pathname === path
    }

    function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
    }

    function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateSearchParams({ name: searchTerm }, '/games')
        setSearchTerm('')
    }

    return (
        <article className="header full">
            <section className="header-contents w-h-100 layout-row">
                {isMobileView ? (
                    <div className="mobile-view grid align-center justify-between w-100">
                        <button className="fast-trans">
                            <SvgRender iconName="menu" />
                        </button>
                        <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                            title="Go to home?" aria-label="Navigate to home page">
                            <ImageContainer src={headerLogo} alt="noffty logo" />
                        </Link>
                        {!isGamesPage && (
                            <form onSubmit={handleSearchSubmit} className="flex row align-center">
                                <input
                                    type="text" placeholder="Search games..."
                                    value={searchTerm} onChange={handleSearchInputChange}
                                />
                                <button type="submit" className="fast-trans">
                                    <SvgRender iconName="search" />
                                </button>
                            </form>
                        )}
                    </div>
                ) : (
                    <div className="desktop-view flex row align-center justify-between w-100">
                        <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                            title="Go to home?" aria-label="Navigate to home page">
                            <ImageContainer src={headerLogo} alt="noffty logo" />
                        </Link>
                        <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                            title="Go to games index?" aria-label="Navigate to games page">
                            <span>Games</span>
                        </Link>
                        <Link href="/about/introduction" className={`fast-trans ${isActive('/about/introduction') ? 'active' : ''}`}
                            title="Go to about page?" aria-label="Navigate to about page">
                            <span>About</span>
                        </Link>
                        <Link href="/about/contact" className={`fast-trans ${isActive('/about/contact') ? 'active' : ''}`}
                            title="Go to contact page?" aria-label="Navigate to contact page">
                            <span>Contact</span>
                        </Link>
                        {!isGamesPage && (
                            <form onSubmit={handleSearchSubmit} className="flex row align-center">
                                <input
                                    type="text" placeholder="Search games..."
                                    value={searchTerm} onChange={handleSearchInputChange}
                                />
                                <button type="submit" className="fast-trans">
                                    <SvgRender iconName="search" />
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </section>
        </article>
    )
}