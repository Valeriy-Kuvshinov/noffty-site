'use client'
import { useRef } from "react"
import { useModal } from "../../contexts/ModalContext"
import { useClickOutside } from "../../hooks/clickOutside"

export function HeaderDropdown() {
    const { activeModal, closeModal, openModal } = useModal()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const isOpen = activeModal === 'header-dropdown'

    function closeDropdown() {
        closeModal('header-dropdown')
    }

    function handleLogin() {
        closeDropdown()
        openModal('aside-menu')
    }

    useClickOutside(dropdownRef, closeDropdown)
    if (!isOpen) return null

    return (
        <dialog className="header-dropdown flex column" open={isOpen} >
            <nav className="flex column align-center w-100" ref={dropdownRef}>
                <button className="flex" onClick={handleLogin}>Login</button>
                <button className="flex" onClick={handleLogin}>Login</button>

            </nav>
        </dialog>
    )
}