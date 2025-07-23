import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { BrandProvider } from '@branding/BrandProvider';
import { BrandStyleWrapper } from '@branding/BrandStyleWrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BrandProvider>
            <BrandStyleWrapper>
                <Component {...pageProps} />
            </BrandStyleWrapper>
        </BrandProvider>
    );
}
