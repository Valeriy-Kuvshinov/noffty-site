'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useGameFilterParams } from "../hooks/gameFilterParams"
import { useDeviceType } from "../contexts/DeviceTypeContext"
import { useModal } from "../contexts/ModalContext"
import { useSessionUser } from "../contexts/SessionContext"
import { SvgRender } from "./general/SvgRender"
import { ImageContainer } from "./general/ImageContainer"
import { HeaderDropdown } from "./modals/HeaderDropdown"

export function Header() {
    const pathname = usePathname()
    const [searchTerm, setSearchTerm] = useState('')

    const { updateSearchParams } = useGameFilterParams()
    const deviceType = useDeviceType()
    const { openModal } = useModal()
    const { sessionUser } = useSessionUser()

    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1719919435/ydjn6p0djqwbkko4zqts.png'
    const hiddenSearchPages = pathname.startsWith('/games') || pathname.startsWith('/admin')

    function isActive(path: string) {
        return pathname === path
    }

    function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
    }

    function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateSearchParams({ title: searchTerm }, '/games')
        setSearchTerm('')
    }

    return (<header className="full">
        <section className="header-contents w-h-100 layout-row">
            {deviceType === 'mobile' || deviceType === 'mini-tablet' ? (
                <nav className="mobile-view grid align-center justify-between w-100">
                    <button onClick={() => openModal('aside-menu')}>
                        <SvgRender iconName="menu" />
                    </button>
                    <Link href="/" className={`logo ${isActive('/') ? 'active' : ''}`}
                        title="Go to home?" aria-label="Navigate to home page">
                        <ImageContainer src={headerLogo} alt="noffty logo" />
                    </Link>
                    {!hiddenSearchPages && (
                        <form onSubmit={handleSearchSubmit} className="w-100 layout-row fast-trans">
                            <input type="text" placeholder="Find your next game, broski..." maxLength={30}
                                value={searchTerm} onChange={handleSearchInputChange}
                            />
                            <SvgRender iconName="search" />
                        </form>
                    )}
                    <div className="user flex w-fit">
                        <ImageContainer src={sessionUser.imgUrls![0]} alt={`${sessionUser.email} avatar`} />
                    </div>
                </nav>
            ) : (
                <nav className="desktop-view flex row align-center justify-between w-100">
                    <Link href="/" className={`logo ${isActive('/') ? 'active' : ''}`}
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
                    <section className="user-form-zone flex row align-center">
                        {!hiddenSearchPages && (
                            <form onSubmit={handleSearchSubmit} className="w-100 fast-trans">
                                <input type="text" placeholder="Search games..." maxLength={30}
                                    value={searchTerm} onChange={handleSearchInputChange}
                                />
                                <SvgRender iconName="search" />
                            </form>
                        )}
                        <div className="user flex w-fit" onClick={() => openModal('header-dropdown')}>
                            <ImageContainer src={sessionUser.imgUrls![0]} alt={`${sessionUser.email} avatar`} />
                        </div>
                    </section>
                    <HeaderDropdown sessionUser={sessionUser} />
                </nav>
            )}
        </section>
    </header>)
}