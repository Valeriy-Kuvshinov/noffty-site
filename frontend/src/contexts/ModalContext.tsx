'use client'
import { createContext, useContext, useState } from "react"

interface ModalContextType {
    openModal: (modalId: string, value?: string) => void
    closeModal: (modalId: string) => void
    activeModal: string | null
    modalValue: string | null
}

const defaultState: ModalContextType = {
    openModal: () => { },
    closeModal: () => { },
    activeModal: null,
    modalValue: null
}

const ModalContext = createContext<ModalContextType>(defaultState)

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [modalValue, setModalValue] = useState<string | null>(null)

    function openModal(modalId: string, value?: string) {
        setActiveModal(modalId)
        setModalValue(value || null)
    }

    function closeModal(modalId: string) {
        if (activeModal === modalId) {
            setActiveModal(null)
            setModalValue(null)
        }
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, activeModal, modalValue }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    return useContext(ModalContext)
}