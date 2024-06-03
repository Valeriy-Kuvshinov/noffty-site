'use client'
import { createContext, useContext, useEffect, useState } from "react"

type DeviceType = 'mobile' | 'mini-tablet' | 'tablet' | 'desktop'

const DeviceTypeContext = createContext<DeviceType>('desktop')

export function DeviceTypeProvider({ children }: { children: React.ReactNode }) {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

    function handleResize() {
        const width = window.innerWidth
        if (width <= 480) setDeviceType('mobile')
        else if (width <= 600) setDeviceType('mini-tablet')
        else if (width <= 900) setDeviceType('tablet')
        else setDeviceType('desktop')
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <DeviceTypeContext.Provider value={deviceType}>
            {children}
        </DeviceTypeContext.Provider>
    )
}

export function useDeviceType() {
    return useContext(DeviceTypeContext)
}