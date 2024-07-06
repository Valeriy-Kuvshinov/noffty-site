'use client'
import { useEffect, useState } from "react"
import { ApiKeys } from "../models/utility"
import { UtilityService } from "../services/utility.service"
import { ApiProvider } from "./ApiContext"
import { DeviceTypeProvider } from "./DeviceTypeContext"
import { ModalProvider } from "./ModalContext"
import { SessionProvider } from "./SessionContext"

export function Providers({ children }: { children: React.ReactNode }) {
    const [apiKeys, setApiKeys] = useState<ApiKeys | null>(null)

    useEffect(() => {
        async function fetchAPIKeys() {
            try {
                const keys = await UtilityService.getAPIKeys()
                setApiKeys(keys as ApiKeys)
            } catch (error) {
                console.error('Failed to fetch API keys:', error)
            }
        }
        fetchAPIKeys()
    }, [])

    if (!apiKeys) return null

    return (
        <ApiProvider apiKeys={apiKeys}>
            <DeviceTypeProvider>
                <ModalProvider>
                    <SessionProvider>
                        {children}
                    </SessionProvider >
                </ModalProvider>
            </DeviceTypeProvider>
        </ApiProvider>
    )
}