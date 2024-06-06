'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useModal } from "../../contexts/ModalContext"
import { useClickOutside } from "../../hooks/clickOutside"
import { SvgRender } from "../general/SvgRender"
import { ImageContainer } from "../general/ImageContainer"

export function AsideMenu() {
    const pathname = usePathname()
    const { activeModal, closeModal } = useModal()
    const asideRef = useRef<HTMLDivElement>(null)
    const [showAsideMenu, setShowAsideMenu] = useState(false)

    const headerLogo = 'https://res.cloudinary.com/djzid7ags/image/upload/v1713305122/wx0ji5qxrhkfffiat0tv.png'

    function closeAsideMenu() {
        setShowAsideMenu(false)
        setTimeout(() => closeModal('aside-menu'), 300)
    }

    function isActive(path: string) {
        return pathname === path
    }

    useClickOutside(asideRef, closeAsideMenu)

    const isOpen = activeModal === 'aside-menu'

    useEffect(() => {
        if (isOpen) setTimeout(() => setShowAsideMenu(true), 50)
        else setShowAsideMenu(false)
    }, [isOpen])

    if (!isOpen) return null

    return (
        <dialog className="modal-wrapper w-h-100" open={isOpen}>
            <article className={`aside-menu flex column w-h-100 fast-trans ${showAsideMenu ? 'show' : ''}`} ref={asideRef}>
                <div className="menu-header flex row align-center justify-between">
                    <ImageContainer src={headerLogo} alt="noffty logo" />
                    <span>Noffty Productions</span>
                </div>
                <nav className="flex column">
                    <Link href="/" className={`flex row align-center ${isActive('/') ? 'active' : ''}`}
                        onClick={closeAsideMenu} title="Go to home page?" aria-label="Navigate to home page">
                        <SvgRender iconName="home" />
                        <span>Home</span>
                    </Link>
                    <Link href="/games" className={`flex row align-center ${isActive('/games') ? 'active' : ''}`}
                        onClick={closeAsideMenu} title="Go to games page?" aria-label="Navigate to games page">
                        <SvgRender iconName="controller" />
                        <span>Games</span>
                    </Link>
                    <Link href="/about/introduction" className={`flex row align-center ${isActive('/about/introduction') ? 'active' : ''}`}
                        onClick={closeAsideMenu} title="Go to about page?" aria-label="Navigate to about page">
                        <SvgRender iconName="info" />
                        <span>About</span>
                    </Link>
                    <Link href="/about/contact" className={`flex row align-center ${isActive('/about/contact') ? 'active' : ''}`}
                        onClick={closeAsideMenu} title="Go to contact page?" aria-label="Navigate to contact page">
                        <SvgRender iconName="mail" />
                        <span>Contact</span>
                    </Link>
                </nav>
            </article>
        </dialog>
    )
}