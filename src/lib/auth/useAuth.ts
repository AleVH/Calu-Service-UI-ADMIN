// src/lib/auth/useAuth.ts
import { useState, useEffect } from 'react'

// Define the expected shape of a logged-in user
export type AuthUser = {
    id: number
    email: string
    roles: string[] // one or more roles assigned to the user
}

// Custom hook to read auth state from localStorage
export function useAuth() {
    const [user, setUser] = useState<AuthUser | null>(null)

    useEffect(() => {
        // On first load, try to read the auth_user JSON string from localStorage
        const stored = localStorage.getItem('auth_user')

        if (stored) {
            try {
                // Parse it safely — this can fail if someone manually edits localStorage
                const parsed = JSON.parse(stored)
                setUser(parsed)
            } catch {
                console.warn('Invalid auth_user in storage')
                // In a real app, we might also clear corrupted data here
            }
        }
    }, [])

    return {
        user,                 // full user object (or null)
        isLoggedIn: !!user    // true if user is set
    }
}
