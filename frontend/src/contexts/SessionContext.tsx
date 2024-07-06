'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { User } from "../models/user"
import { UserService } from "../services/api/user.service"

interface SessionContextType {
    sessionUser: User
    setSessionUser: (user: User | null) => void
    getSessionUser: () => User
    isLoading: boolean
}

const defaultUser: User = {
    _id: '',
    email: '',
    password: '',
    imgUrls: ['https://res.cloudinary.com/djzid7ags/image/upload/v1719433639/vonsaimuwr4b3wrt7keh.avif'],
    isAdmin: false
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const userService = new UserService()
    const [sessionUser, setSessionUser] = useState<User>(defaultUser)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        async function initializeSession() {
            setIsLoading(true)
            const storedUser = userService.getLoggedinUser()
            if (storedUser && storedUser._id) {
                try {
                    const fullUser = await userService.getById(storedUser._id)
                    setSessionUser(fullUser)
                    console.log('Full user in Session Management: ', fullUser)
                } catch (error) {
                    console.error('Failed to fetch user details:', error)
                    setSessionUser(defaultUser)
                }
            }
            setIsLoading(false)
        }
        initializeSession()
    }, [])

    useEffect(() => {
        if (!isLoading && pathname.startsWith('/admin') && !sessionUser.isAdmin) {
            router.push('/')
        }
    }, [pathname, sessionUser.isAdmin, router, isLoading])

    function setSessionUserWithStorage(user: User | null) {
        if (user) {
            setSessionUser(user)
            userService.setLoggedinUser(user)
        } else setSessionUser(defaultUser)
    }

    function getSessionUserFromContext() {
        return sessionUser
    }

    return (
        <SessionContext.Provider value={{
            sessionUser, isLoading,
            setSessionUser: setSessionUserWithStorage,
            getSessionUser: getSessionUserFromContext
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSessionUser() {
    const context = useContext(SessionContext)
    if (context === undefined) throw new Error('useSession must be used within a SessionProvider')
    return context
}