'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useGameFilterParams } from "../hooks/gameFilterParams"
import { useDeviceType } from "../contexts/DeviceTypeContext"
import { useModal } from "../contexts/ModalContext"
import { SvgRender } from "./general/SvgRender"
import { ImageContainer } from "./general/ImageContainer"

export function Header() {
    const pathname = usePathname()
    const [searchTerm, setSearchTerm] = useState('')
    const { updateSearchParams } = useGameFilterParams()
    const deviceType = useDeviceType()
    const { openModal } = useModal()

    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'
    const hiddenSearchPages = pathname.startsWith('/games') || pathname.startsWith('/admin')

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

    function openAsideMenu() {
        openModal('aside-menu')
    }

    return (
        <header className="full">
            <section className="header-contents w-h-100 layout-row">
                {deviceType === 'mobile' || deviceType === 'mini-tablet' ? (
                    <nav className="mobile-view grid align-center justify-between w-100">
                        <button onClick={openAsideMenu}>
                            <SvgRender iconName="menu" />
                        </button>
                        <Link href="/" className={`${isActive('/') ? 'active' : ''}`}
                            title="Go to home?" aria-label="Navigate to home page">
                            <ImageContainer src={headerLogo} alt="noffty logo" />
                        </Link>
                        {!hiddenSearchPages && (
                            <form onSubmit={handleSearchSubmit} className="w-100 layout-row fast-trans">
                                <input
                                    type="text" placeholder="Search games..." maxLength={35}
                                    value={searchTerm} onChange={handleSearchInputChange}
                                />
                                <SvgRender iconName="search" />
                            </form>)}
                    </nav>
                ) : (
                    <nav className="desktop-view flex row align-center justify-between w-100">
                        <Link href="/" className={`${isActive('/') ? 'active' : ''}`}
                            title="Go to home?" aria-label="Navigate to home page">
                            <ImageContainer src={headerLogo} alt="noffty logo" />
                        </Link>
                        <Link href="/games" className={`${isActive('/games') ? 'active' : ''}`}
                            title="Go to games index?" aria-label="Navigate to games page">
                            <span>Games</span>
                        </Link>
                        <Link href="/about" className={`${isActive('/about') ? 'active' : ''}`}
                            title="Go to about page?" aria-label="Navigate to about page">
                            <span>About</span>
                        </Link>
                        <Link href="/contact" className={`${isActive('/contact') ? 'active' : ''}`}
                            title="Go to contact page?" aria-label="Navigate to contact page">
                            <span>Contact</span>
                        </Link>
                        {!hiddenSearchPages && (
                            <form onSubmit={handleSearchSubmit} className="w-100 fast-trans">
                                <input
                                    type="text" placeholder="Search games..." maxLength={35}
                                    value={searchTerm} onChange={handleSearchInputChange}
                                />
                                <SvgRender iconName="search" />
                            </form>)}
                    </nav>)}
            </section>
        </header>
    )
}