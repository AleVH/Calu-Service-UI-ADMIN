import { useState } from 'react';
import Head from 'next/head';
import { useBrand } from '@branding/useBrand';
import { apiPost } from '@lib/api';

export default function LoginPage() {
    const brand = useBrand();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiPost('/api/login', { email, password });
            // ✅ logged in
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <>
            <Head>
                <title>Login – {brand.name}</title>
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-[--brand-bg] text-[--brand-text]">
                <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <h1 className="text-xl font-bold text-center">Admin Login</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <div className="text-red-600">{error}</div>}

                        <button
                            type="submit"
                            className="w-full p-2 bg-[--brand-accent] text-white rounded"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
