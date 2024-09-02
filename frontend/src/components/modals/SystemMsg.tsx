'use client'
import EventEmitter from 'events'
import { useEffect, useState } from 'react'
import { SvgRender } from '../general/SvgRender'

const eventBus = new EventEmitter()

interface FlashMessage {
    title: string
    msg: string
    type: 'success' | 'error'
}

export function showSuccessMsg(title: string, msg: string) {
    eventBus.emit('flash', { title, msg, type: 'success' })
}

export function showErrorMsg(title: string, msg: string) {
    eventBus.emit('flash', { title, msg, type: 'error' })
}

export function SystemMsg() {
    const [message, setMessage] = useState<FlashMessage | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)

    useEffect(() => {
        function handleFlash({ title, msg, type }: FlashMessage) {
            setMessage({ title, msg, type })
            setIsVisible(true)
            setTimeout(() => setIsAnimate(true), 500)
            setTimeout(() => {
                setIsAnimate(false)
                setTimeout(() => setIsVisible(false), 500)
            }, 6000)
        }
        eventBus.on('flash', handleFlash)

        return () => { eventBus.off('flash', handleFlash) }
    }, [])

    if (!isVisible) return null

    return (<div className={`system-message flex column full-center w-fit ${isAnimate ? 'show' : ''} normal-trans`}>
        <div className={`message-title ${message?.type} w-fit`}>
            <h3 className='family-bold'>{message?.title}</h3>
        </div>
        <div className={`message-contents ${message?.type} flex row full-center w-fit`}>
            <SvgRender iconName="info" />
            <span>{message?.msg}</span>
            <SvgRender iconName="info" />
        </div>
    </div>)
}