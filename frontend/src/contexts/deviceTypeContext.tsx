'use client'
import { createContext, useCallback, useContext, useEffect, useState } from "react"

type DeviceType = 'mobile' | 'mini-tablet' | 'tablet' | 'desktop'

const DeviceTypeContext = createContext<DeviceType>('desktop')

export function DeviceTypeProvider({ children }: { children: React.ReactNode }) {
    const getDeviceType = useCallback((): DeviceType => {
        if (typeof window === 'undefined') return 'desktop' // Default for SSR
        const width = window.innerWidth
        if (width <= 480) return 'mobile'
        if (width <= 600) return 'mini-tablet'
        if (width <= 900) return 'tablet'
        return 'desktop'
    }, [])

    const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType)

    useEffect(() => {
        const handleResize = () => setDeviceType(getDeviceType())

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [getDeviceType])

    return (
        <DeviceTypeContext.Provider value={deviceType}>
            {children}
        </DeviceTypeContext.Provider>
    )
}

export function useDeviceType() {
    const context = useContext(DeviceTypeContext)
    if (context === undefined) {
        throw new Error("useDeviceType must be used within a DeviceTypeProvider")
    }
    return context
}