import { useContext } from 'react';
import { BrandContext } from './BrandProvider';

export function useBrand() {
    const ctx = useContext(BrandContext);
    if (!ctx) throw new Error('useBrand must be used within a BrandProvider');
    return ctx;
}
