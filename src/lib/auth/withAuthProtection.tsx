// src/lib/auth/withAuthProtection.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './useAuth'
import type { ComponentType } from 'react'

// Read the dev bypass flag from environment variables
// This must be prefixed with NEXT_PUBLIC_ to be available client-side
const devBypassEnabled =
    process.env.NEXT_PUBLIC_DEV_LOGIN_BYPASS === 'true'

// Higher-Order Component to wrap protected pages
// Optionally accepts a list of roles required to access the page
export function withAuthProtection<P extends object>(
    Component: ComponentType<P>,
    requiredRoles?: string[]
): ComponentType<P> {
    return function Protected(props: P) {
        const { user, isLoggedIn } = useAuth()
        const router = useRouter()

        // Check if user has at least one required role (if any are specified)
        const hasAccess = requiredRoles
            ? user?.roles.some((r) => requiredRoles.includes(r))
            : true // if no roles are required, grant access by default

        useEffect(() => {
            // Redirect to login if not logged in and not in dev bypass mode
            if (!isLoggedIn && !devBypassEnabled) {
                router.replace('/login')
            }
            // Redirect to unauthorized page if user lacks access
            else if (!hasAccess && !devBypassEnabled) {
                router.replace('/unauthorized') // You can build this later
            }
        }, [isLoggedIn, hasAccess, router])

        // If blocked, don't render anything until redirect finishes
        if ((!isLoggedIn || !hasAccess) && !devBypassEnabled) return null

        // If allowed, render the original page
        return <Component {...props} />
    }
}
