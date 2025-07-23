import { useBrand } from './useBrand';

export const BrandStyleWrapper = ({ children }: { children: React.ReactNode }) => {
    const brand = useBrand();

    const styleVars = {
        '--brand-bg': brand.colors.primary,
        '--brand-text': brand.colors.secondary,
        '--brand-accent': brand.colors.accent,
    } as React.CSSProperties;

    return <div style={styleVars}>{children}</div>;
};
