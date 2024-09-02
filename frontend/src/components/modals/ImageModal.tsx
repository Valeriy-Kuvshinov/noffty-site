'use client'
import { useRef } from "react"
import { useClickOutside } from "../../hooks/clickOutside"
import { useModal } from "../../contexts/ModalContext"
import { ImageContainer } from "../general/ImageContainer"
import { SvgRender } from "../general/SvgRender"

export function ImageModal() {
    const { activeModal, closeModal, modalValue } = useModal()
    const modalRef = useRef<HTMLDivElement>(null)
    const isOpen = activeModal === 'image-modal'

    function closeImageModal() {
        closeModal('image-modal')
    }

    useClickOutside(modalRef, closeImageModal)
    if (!isOpen) return null

    return (<dialog className="modal-wrapper flex full-center w-h-100" open={isOpen}>
        <div className="image-modal flex column w-h-fit" ref={modalRef}>
            {modalValue && (
                <ImageContainer src={modalValue} alt="Modal Image" />
            )}
            <button className="flex" onClick={() => closeImageModal()}>
                <SvgRender iconName="return" />
            </button>
        </div>
    </dialog>)
}