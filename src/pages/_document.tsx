// import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
// import { loadBrandingConfig } from '@branding/loadBrandingConfig';
// import { getBrandIdFromRequest } from '@branding/getBrandIdFromRequest';
//
// class MyDocument extends Document<{ brand_id: string }> {
//     static async getInitialProps(ctx: DocumentContext) {
//         const initialProps = await Document.getInitialProps(ctx);
//
//         const brand_id = getBrandIdFromRequest(ctx.req); // query param or subdomain
//         return { ...initialProps, brand_id };
//     }
//
//     render() {
//         const brand_config = loadBrandingConfig(this.props.brand_id);
//         const lang = brand_config.lang || 'en';
//         const body_class = `brand-${brand_config.id}`;
//
//         return (
//             <Html lang={lang}>
//                 <Head>
//                     {brand_config.favicon && (
//                         <link rel="icon" href={brand_config.favicon} />
//                     )}
//                     {/* Optional: preload fonts or other brand assets here */}
//                 </Head>
//                 <body className={body_class}>
//                 <Main />
//                 <NextScript />
//                 </body>
//             </Html>
//         );
//     }
// }
//
// export default MyDocument;


// src/pages/_document.tsx
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

import { loadBrandingConfig } from '@branding/loadBrandingConfig';
import { getBrandIdFromRequest } from '@branding/getBrandIdFromRequest';

interface MyDocumentProps extends DocumentInitialProps {
    brand_id: string;
    brand_config: {
        id: string;
        lang?: string;
        favicon?: string;
        [key: string]: unknown;
    };
}

class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
        const initialProps = await Document.getInitialProps(ctx);

        const brand_id = getBrandIdFromRequest(ctx.req);
        const brand_config = await loadBrandingConfig(brand_id);

        return {
            ...initialProps,
            brand_id,
            brand_config,
        };
    }

    render() {
        const { brand_config } = this.props;
        const lang = brand_config.lang || 'en';
        const body_class = `brand-${brand_config.id}`;

        return (
            <Html lang={lang}>
                <Head>
                    {brand_config.favicon && (
                        <link rel="icon" href={brand_config.favicon} />
                    )}
                    {/* Optional: preload fonts or brand-specific assets here */}
                </Head>
                <body className={body_class}>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
