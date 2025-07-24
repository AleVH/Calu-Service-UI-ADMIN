// src/pages/page1/index.tsx
import Head from 'next/head'
import MainLayout from '@layout/MainLayout'
import { withAuthProtection } from '@lib/auth/withAuthProtection'

function Page1() {
    return (
        <>
            <Head>
                <title>Page 1</title>
            </Head>
            <MainLayout>
                <h2 className="text-2xl font-bold">PAGE 1</h2>
            </MainLayout>
        </>
    )
}

export default withAuthProtection(Page1)
