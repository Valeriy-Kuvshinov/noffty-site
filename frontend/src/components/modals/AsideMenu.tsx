'use client'
import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useModal } from "../../contexts/ModalContext"
import { useClickOutside } from "../../hooks/clickOutside"

export function AsideMenu() {
    const pathname = usePathname()
    const { activeModal, closeModal } = useModal()

    const asideRef = useRef<HTMLDivElement>(null)

    function closeAsideMenu() {
        closeModal('aside-menu')
    }

    function isActive(path: string) {
        return pathname === path
    }

    useClickOutside(asideRef, closeAsideMenu)

    if (activeModal !== 'aside-menu') return null

    return (
        <dialog className="modal-wrapper w-h-100" open>
            <nav className="aside-menu flex column w-h-100" ref={asideRef}>
                <Link href="/" className={`fast-trans ${isActive('/') ? 'active' : ''}`}
                    title="Go to home page?" aria-label="Navigate to home page">
                    <span>Home</span>
                </Link>
                <Link href="/games" className={`fast-trans ${isActive('/games') ? 'active' : ''}`}
                    title="Go to games page?" aria-label="Navigate to games page">
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
            </nav>
        </dialog>
    )
}