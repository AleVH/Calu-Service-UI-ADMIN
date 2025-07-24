// src/pages/dashboard/index.tsx
import Head from 'next/head'
import MainLayout from '@layout/MainLayout'
import { withAuthProtection } from '@lib/auth/withAuthProtection'

function DashboardPage() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <MainLayout>
                <h2 className="text-2xl font-bold">DASHBOARD</h2>
            </MainLayout>
        </>
    )
}

export default withAuthProtection(DashboardPage)
