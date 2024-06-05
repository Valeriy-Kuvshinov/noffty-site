'use client'
import { createContext, useContext, useState } from "react"

interface ModalContextType {
    openModal: (modalId: string) => void
    closeModal: (modalId: string) => void
    activeModal: string | null
}

const defaultState: ModalContextType = {
    openModal: () => { },
    closeModal: () => { },
    activeModal: null
}

const ModalContext = createContext<ModalContextType>(defaultState)

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [activeModal, setActiveModal] = useState<string | null>(null)

    function openModal(modalId: string) {
        console.log(`Modal ${modalId}`)
        setActiveModal(modalId)
    }

    function closeModal(modalId: string) {
        console.log(`Modal ${modalId}`)
        if (activeModal === modalId) setActiveModal(null)
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, activeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    return useContext(ModalContext)
}