// src/components/layout/MainLayout.tsx
import TopBar from './TopBar'
import Sidebar from './SideBar'
import Footer from './Footer'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[--brand-bg] text-[--brand-text]">
            <TopBar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6">{children}</main>
            </div>
            <Footer />
        </div>
    )
}
