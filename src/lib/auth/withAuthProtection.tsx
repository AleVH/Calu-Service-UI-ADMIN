// src/lib/auth/withAuthProtection.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { ComponentType, ReactElement } from 'react'

// Create new scratch file from selection - NOTE: Replace this later with real auth logic
const fakeUser = {
    isLoggedIn: false, // flip this to false to simulate redirect
    roles: ['admin'], // for future role-based access
}

const devBypassEnabled =
    process.env.NEXT_PUBLIC_DEV_LOGIN_BYPASS === 'true'

export function withAuthProtection<P extends object>(
    Component: ComponentType<P>
): ComponentType<P> {
    return function Protected(props: P): ReactElement | null {
        const router = useRouter()

        useEffect(() => {
            if (!fakeUser.isLoggedIn && !devBypassEnabled) {
                router.replace('/login')
            }
        }, [])

        if (!fakeUser.isLoggedIn && !devBypassEnabled) return null

        return <Component {...props} />
    }
}
