import { createContext, useContext } from "react"
import { ApiKeys } from "../interfaces/utility"

interface ApiProviderProps {
    children: React.ReactNode
    apiKeys: ApiKeys
}

const ApiContext = createContext<ApiKeys | null>(null)

export function useApiKeys() {
    const context = useContext(ApiContext)
    if (!context) throw new Error('useApiKeys must be used within an ApiProvider')

    return context
}

export function ApiProvider({ children, apiKeys }: ApiProviderProps) {
    return <ApiContext.Provider value={apiKeys}>{children}</ApiContext.Provider>
}