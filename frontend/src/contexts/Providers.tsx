'use client'
import { ApiKeys } from "../models/utility"
import { ApiProvider } from "./ApiContext"
import { DeviceTypeProvider } from "./DeviceTypeContext"
import { ModalProvider } from "./ModalContext"

export function Providers({ children, apiKeys }: { children: React.ReactNode; apiKeys: ApiKeys }) {
    return (
        <ApiProvider apiKeys={apiKeys}>
            <DeviceTypeProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </DeviceTypeProvider>
        </ApiProvider>
    )
}