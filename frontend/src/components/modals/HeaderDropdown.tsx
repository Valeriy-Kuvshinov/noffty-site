'use client'
import Link from "next/link"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { User } from "../../interfaces/user"
import { userService } from "../../services/api/user-service"
import { useClickOutside } from "../../hooks/clickOutside"
import { useModal } from "../../contexts/ModalContext"
import { useSessionUser } from "../../contexts/SessionContext"

export function HeaderDropdown({ sessionUser }: { sessionUser: User }) {
    const router = useRouter()
    const { activeModal, closeModal, openModal } = useModal()
    const { setSessionUser } = useSessionUser()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const isOpen = activeModal === 'header-dropdown'

    function closeDropdown() {
        closeModal('header-dropdown')
    }

    function handleLogin() {
        closeDropdown()
        openModal('login')
    }

    async function handleLogout() {
        try {
            await userService.logout()
            setSessionUser(null)
            closeDropdown()
            router.push('/')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    useClickOutside(dropdownRef, closeDropdown)
    if (!isOpen) return null

    return (<dialog className="header-dropdown" open={isOpen} >
        <nav className="flex column align-center w-100" ref={dropdownRef}>
            {sessionUser._id ? (<>
                {sessionUser.isAdmin && (<>
                    <Link href="/admin/games" className="flex full-center w-100" onClick={closeDropdown}>
                        <span className="text-center">Manage Games</span>
                    </Link>
                    <Link href="/admin/edit" className="flex full-center w-100" onClick={closeDropdown}>
                        <span className="text-center">Create Game</span>
                    </Link>
                </>)}
                <button className="flex full-center w-100" onClick={handleLogout}>
                    <span className="text-center">Logout</span>
                </button>
            </>
            ) : (
                <button className="flex full-center w-100" onClick={handleLogin}>
                    <span className="text-center">Login</span>
                </button>
            )}
        </nav>
    </dialog>)
}