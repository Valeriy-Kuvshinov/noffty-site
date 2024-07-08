'use client'
import { useEffect, useState } from "react"
import { ApiKeys } from "../models/utility"
import { UtilityService } from "../services/utility.service"
import { ApiProvider } from "./ApiContext"
import { DeviceTypeProvider } from "./DeviceTypeContext"
import { ModalProvider } from "./ModalContext"
import { SessionProvider } from "./SessionContext"
import { Loader } from "../components/general/Loader"

interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    const [apiKeys, setApiKeys] = useState<ApiKeys | null>(null)

    useEffect(() => {
        async function fetchAndSetKeys() {
            const keys = await UtilityService.getAPIKeys()
            setApiKeys(keys)
            sessionStorage.setItem('apiKeys', JSON.stringify(keys))
        }

        const cachedKeys = sessionStorage.getItem('apiKeys')
        if (cachedKeys) {
            setApiKeys(JSON.parse(cachedKeys))
        } else {
            fetchAndSetKeys()
        }
    }, [])

    if (!apiKeys) return <Loader />

    return (<ApiProvider apiKeys={apiKeys}>
        <DeviceTypeProvider>
            <ModalProvider>
                <SessionProvider>
                    {children}
                </SessionProvider >
            </ModalProvider>
        </DeviceTypeProvider>
    </ApiProvider>)
}