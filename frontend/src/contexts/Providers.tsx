'use client'
import { ApiKeys } from "../models/utility"
import { ApiProvider } from "./ApiContext"
import { DeviceTypeProvider } from "./DeviceTypeContext"
import { ModalProvider } from "./ModalContext"
import { SessionProvider } from "./SessionContext"

export function Providers({ children, apiKeys }: { children: React.ReactNode; apiKeys: ApiKeys }) {
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