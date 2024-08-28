'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { userService } from "../../services/api/user-service"
import { useClickOutside } from "../../hooks/clickOutside"
import { useModal } from "../../contexts/ModalContext"
import { useSessionUser } from "../../contexts/SessionContext"
import { SvgRender } from "../general/SvgRender"

export function AsideMenu() {
    const router = useRouter()
    const pathname = usePathname()
    const { sessionUser, setSessionUser } = useSessionUser()
    const { activeModal, closeModal, openModal } = useModal()
    const [showAsideMenu, setShowAsideMenu] = useState(false)
    const asideRef = useRef<HTMLDivElement>(null)

    const isOpen = activeModal === 'aside-menu'

    function closeAsideMenu() {
        setShowAsideMenu(false)
        setTimeout(() => closeModal('aside-menu'), 300)
    }

    function handleLogin() {
        openModal('login')
    }

    function isActive(path: string) {
        return pathname === path
    }

    async function handleLogout() {
        try {
            await userService.logout()
            setSessionUser(null)
            closeAsideMenu()
            router.push('/')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    useEffect(() => {
        if (isOpen) setTimeout(() => setShowAsideMenu(true), 50)
        else setShowAsideMenu(false)
    }, [isOpen])

    useClickOutside(asideRef, closeAsideMenu)
    if (!isOpen) return null

    return (<dialog className="modal-wrapper w-h-100" open={isOpen}>
        <aside className={`flex column w-h-100 fast-trans ${showAsideMenu ? 'show' : ''}`} ref={asideRef}>
            <div className="menu-header flex row align-center">
                <span>{sessionUser._id ? `Welcome @${sessionUser.email?.split('@')[0]}!` : 'Hello Guest!'}</span>
            </div>

            <nav className="flex column">
                <Link href="/" className={`flex row align-center ${isActive('/') ? 'active' : ''}`}
                    onClick={closeAsideMenu} title="Go to home page?" aria-label="Navigate to home page">
                    <SvgRender iconName="home" />
                    <span>Home</span>
                </Link>
                <Link href="/games" className={`flex row align-center ${isActive('/games/') ? 'active' : ''}`}
                    onClick={closeAsideMenu} title="Go to games page?" aria-label="Navigate to games page">
                    <SvgRender iconName="controller" />
                    <span>Games</span>
                </Link>
                <Link href="/about" className={`flex row align-center ${isActive('/about/') ? 'active' : ''}`}
                    onClick={closeAsideMenu} title="Go to about page?" aria-label="Navigate to about page">
                    <SvgRender iconName="info" />
                    <span>About</span>
                </Link>
                <Link href="/contact" className={`flex row align-center ${isActive('/contact/') ? 'active' : ''}`}
                    onClick={closeAsideMenu} title="Go to contact page?" aria-label="Navigate to contact page">
                    <SvgRender iconName="mail" />
                    <span>Contact</span>
                </Link>
                {sessionUser._id ? (<>
                    {sessionUser.isAdmin && (<>
                        <Link href="/admin/games" className={`flex row align-center ${isActive('/admin/games/') ? 'active' : ''}`}
                            onClick={closeAsideMenu} title="Go to games admin page?" aria-label="Navigate to games management">
                            <SvgRender iconName="edit" />
                            <span>Manage Games</span>
                        </Link>
                        <Link href="/admin/edit" className={`flex row align-center ${isActive('/admin/edit/') ? 'active' : ''}`}
                            onClick={closeAsideMenu} title="Create new game?" aria-label="Navigate to game creation page">
                            <SvgRender iconName="plus" />
                            <span>Create Game</span>
                        </Link>
                    </>)}
                    <button className="flex row align-center" onClick={handleLogout}>
                        <SvgRender iconName="person" />
                        <span>Logout</span>
                    </button>
                </>
                ) : (
                    <button className="flex row align-center" onClick={handleLogin}>
                        <SvgRender iconName="person" />
                        <span>Login</span>
                    </button>
                )}
            </nav>
        </aside>
    </dialog>)
}