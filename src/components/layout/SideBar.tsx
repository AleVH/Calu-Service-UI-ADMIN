// src/components/layout/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4 space-y-4">
            <nav className="flex flex-col space-y-2">
                <Link href="/dashboard" className="hover:underline">
                    Dashboard
                </Link>
                <Link href="/page1" className="hover:underline">
                    Page 1
                </Link>
            </nav>
        </aside>
    )
}
